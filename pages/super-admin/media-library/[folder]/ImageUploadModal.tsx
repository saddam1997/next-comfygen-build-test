"use client";

import React, { useState } from "react";
import CustomButton from "../../../../super-admin-components/CustomButton";
import CustomToast from "../../../../super-admin-components/CustomToast";
import { Loader2 } from "lucide-react";
import { axiosPrivate } from "../../../../super-admin-components/apiFunctions";
import Image from "next/image";

const ImageUploadModal = ({
  isOpen,
  onClose,
  onUploadSuccess,
  folder = "",
  dirName,
  folderId,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFilesError, setSelectedFilesError] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  if (!isOpen) return null;

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files || []);
    await validateAndSetFiles(files);
  };

  const validateAndSetFiles = async (files) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length !== files.length) {
      setToast({
        message: "Some files were rejected. Only image files are allowed.",
        type: "error",
      });
    }

    if (imageFiles.length > 0) {
      setUploading(true);
      let fileErrorRes = await Promise.all(
        imageFiles.map(async (f) => {
          const formData = new FormData();
          formData.append("media", f);
          formData.append("dirName", dirName);
          if (folder) {
            formData.append("folder", folder);
          }
          formData.append("folderId", folderId);
          let imageExists = await axiosPrivate.post(
            "/imageCategory/checkImageExists",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (imageExists?.data?.code === 9090) {
            setToast({
              message: imageExists?.data?.message,
              type: "error",
            });
            return imageExists?.data?.message;
          } else {
            return false;
          }
        })
      );
      setUploading(false);
      setSelectedFilesError(fileErrorRes);
    }

    if (imageFiles.length > 0) {
      setSelectedFiles(imageFiles);
      setToast({
        message: `${imageFiles.length} image${imageFiles.length > 1 ? "s" : ""} selected`,
        type: "success",
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    validateAndSetFiles(files);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setToast({
        message: "Please select at least one image",
        type: "error",
      });
      return;
    }

    setUploading(true);

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("media", file);
    });
    formData.append("dirName", dirName);
    if (folder) {
      formData.append("folder", folder);
    }
    formData.append("folderId", folderId);

    try {
      const response = await axiosPrivate.post(
        "/imageCategory/uploadImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setToast({
        message: "Images uploaded successfully",
        type: "success",
      });

      onUploadSuccess();
      setSelectedFiles([]);

      // Close modal after a short delay to show success message
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      setToast({
        message: error.response?.data?.message || "Failed to upload images",
        type: "error",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles(
      selectedFiles.filter((_, index) => index !== indexToRemove)
    );
    setToast({
      message: "Image removed from selection",
      type: "success",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modal Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 z-50">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Upload Images</h3>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {toast && (
            <CustomToast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}

          <div className="space-y-4">
            <div
              className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 transition-colors
                ${dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"}
                ${uploading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() =>
                !uploading && document.getElementById("file-input").click()
              }
            >
              <input
                id="file-input"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                disabled={uploading}
              />

              {uploading ? (
                <div className="flex flex-col items-center space-y-2">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                  <p className="text-sm text-gray-500">Uploading images...</p>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Drag and drop your images here, or click to select files
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Supports: JPG, PNG, GIF, WebP
                    </p>
                  </div>
                </>
              )}
            </div>

            {selectedFiles.length > 0 && (
              <div className="max-h-40 overflow-y-auto">
                <p className="text-sm font-medium mb-2">Selected Files:</p>
                {selectedFiles.map((file, index) => (
                  <div>
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-md mb-1"
                    >
                      <Image
                        src={URL.createObjectURL(file)}
                        width={100}
                        height={100}
                        alt={file.name}
                      />
                      <span className="text-sm truncate">{file.name}</span>
                      <CustomButton
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        disabled={uploading}
                      >
                        Remove
                      </CustomButton>
                    </div>
                    {selectedFilesError?.[index] && (
                      <small className="text-red-600">
                        {selectedFilesError?.[index] || ""}
                      </small>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Modal Footer */}
            <div className="flex justify-end space-x-2 pt-4">
              <CustomButton
                variant="outline"
                onClick={onClose}
                disabled={uploading}
              >
                Cancel
              </CustomButton>
              <CustomButton
                onClick={handleUpload}
                disabled={uploading || selectedFiles.length === 0}
              >
                {uploading ? (
                  <span className="flex items-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Uploading...
                  </span>
                ) : (
                  `Upload ${selectedFiles.length ? `(${selectedFiles.length})` : ""}`
                )}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
