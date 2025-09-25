import React, { useEffect, useState } from "react";
import { axiosPrivate } from "./apiFunctions";
import FileExplorer from "../pages/super-admin/media-library/[folder]/FileExplorer";
import CustomToast from "./CustomToast";
import CreateFolder from "../pages/super-admin/media-library/[folder]/CreateFolder";
import ImageUploadModal from "../pages/super-admin/media-library/[folder]/ImageUploadModal";
import CustomButton from "./CustomButton";
import FolderImagesCard from "./FolderImagesCard";
import { MdOutlineArrowBackIos } from "react-icons/md";

interface Folder {
  _id: string;
  dirName: string;
  folder: string;
  filename: string;
  filepath: string;
  isDisable: boolean;
  createdAt: number;
}

interface Images {
  _id: string;
  folderId: string;
  filename: string;
  filepath: string;
  isDisable: boolean;
  createdAt: number;
}

interface folderDetails {
  _id: string;
  title: string;
  desc: string;
  dirName: string;
  isDisable: boolean;
  createdAt: number;
  folders: Folder[];
  images: Images[];
}

interface ApiResponse {
  message: string;
  code: number;
  error: boolean;
  data?: folderDetails;
}
interface folderImageDetails {
  _id: string;
  dirName: string;
  folder: string;
  isDisable: boolean;
  createdAt: number;
  images: Images[];
}
interface ApiResponse2 {
  message: string;
  code: number;
  error: boolean;
  data?: folderImageDetails;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFile: string;
  setSelectedFile: (filePat: string) => void;
  getFunctionStateCurrenctData: (data: string) => void;
  pageName?: string;
}

const MediaLibraryModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  selectedFile,
  setSelectedFile,
  getFunctionStateCurrenctData,
  pageName = "",
}) => {
  if (!isOpen) return null;
  const [categories, setCategories] = useState<any>();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isFoldarModal, setIsFoldarModal] = useState(false);
  const [isFoldarCreateModal, setIsFoldarCreateModal] = useState(false);
  const [isFoldarDataMode, setIsFoldarDataMode] = useState(false);
  const [selectedDirName, setSelectedDirName] = useState("");
  const [selectedDirId, setSelectedDirId] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [subFolderName, setSubFolderName] = useState("");
  const [isPageFolderView, setIsPageFolderView] = useState<boolean>(false);
  const [folderDetails, setFolderDetails] = useState<ApiResponse>({
    message: "",
    code: 0,
    error: true,
    data: null,
  });
  const [selectedFolderDate, setSelectedFolderDate] =
    useState<ApiResponse2>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const fetchCategories = async () => {
    try {
      const response = await axiosPrivate.get("/imageCategory/list");
      setCategories(response?.data?.data?.list || []);
    } catch (error) {
      setToast({
        message: "Failed to fetch image categories",
        type: "error",
      });
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchSubfolders = async (dirName: string) => {
    try {
      const response = await axiosPrivate.get(
        `/imageCategory/folderDetails?dirName=${dirName}`
      );
      setFolderDetails(response?.data);
    } catch (error) {
      setToast({
        message: "Failed to fetch subfolders",
        type: "error",
      });
    }
  };
  useEffect(() => {
    if (selectedDirName != "") {
      fetchSubfolders(selectedDirName);
    }
  }, [selectedDirName]);
  const getFiles = async (id: string) => {
    try {
      const response = await axiosPrivate.get(
        `/imageCategory/folderImages?_id=${id}`
      );
      setSelectedFolderDate(response?.data);
    } catch (error) {
      setToast({
        message: "Failed to fetch subfolders",
        type: "error",
      });
    }
  };
  const createImageCategory = async () => {
    try {
      await axiosPrivate.post("/imageCategory/save", {
        dirName: subFolderName,
        title: "default",
        desc: "default",
      });
      setToast({
        message: "Image category created successfully",
        type: "success",
      });
      setIsFoldarCreateModal(false);
      setSubFolderName("");
      fetchCategories();
    } catch (error) {
      setToast({
        message: "Failed to create image category",
        type: "error",
      });
    }
  };
  const createSubfolder = async () => {
    if (!subFolderName) {
      setToast({
        message: "Please Enter Folder Name",
        type: "error",
      });
      return;
    }

    try {
      await axiosPrivate.post("/imageCategory/createImageFolder", {
        dirName: selectedDirName,
        folder: subFolderName,
      });

      setToast({
        message: "Subfolder created successfully",
        type: "success",
      });
      setSubFolderName("");
      setIsFoldarCreateModal(false);
      // getFiles(selectedFolderId);
      fetchSubfolders(selectedDirName);
    } catch (error) {
      setToast({
        message: "Failed to create subfolder",
        type: "error",
      });
    }
  };
  const getFolderData = (dirId: string, dirName: string) => {
    setIsFoldarDataMode(true);
    setSelectedDirName(dirName);
    setSelectedDirId(dirId);
  };
  const getSubFolderData = (id: string) => {
    setSelectedFolderId(id);
    getFiles(id);
    setIsFoldarModal(true);
  };
  const handleSelectFile = (filePath: string, dirName: string = "") => {
    setSelectedFile(filePath);
    // getFunctionStateCurrenctData(filePath)
  };
  const selectFile = () => {
    // setSelectedFile(selectedFile);
    getFunctionStateCurrenctData(selectedFile);
    handleClose();
  };
  const handleClose = () => {
    setIsPageFolderView(false);
    onClose();
  }
  const handleFolderImageClose = () => {
    setIsFoldarModal(false);
    setSelectedFolderDate(null);
  };
  const handleBack = () => {
    if (isFoldarDataMode) {
      setIsFoldarDataMode(false);
    } else {
      handleClose();
    }
  };
  const handleUpload = () => {
    setIsUploadModalOpen(true);
  };
  const handleUploadSuccess = () => {
    setToast({
      message: "Images uploaded successfully",
      type: "success",
    });
    fetchSubfolders(selectedDirName);
  };

  const handleFolderView = (view: string) => {
    setIsPageFolderView(view === "page");
    if(view=="page") {
      setSelectedDirName(pageName);
      setIsFoldarDataMode(true);
      setSelectedDirId(categories?.find((c) => c?.dirName === pageName)?._id);
    } else {
      setIsFoldarDataMode(false);
      setSelectedDirName("");
      setSelectedDirId("");
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {toast && (
        <CustomToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 z-50 max-h-[70vh] h-[70vh] overflow-y-scroll">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-medium flex gap-2 items-center">
            <MdOutlineArrowBackIos
              onClick={handleBack}
              size={22}
              className=" cursor-pointer"
            />
            {"Modal Title"}
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          {pageName != "" && <div className="flex justify-center gap-4">
            <CustomButton variant={isPageFolderView ? "outline" : "primary"} onClick={() => handleFolderView("all")}>
              All Images
            </CustomButton>
            <CustomButton variant={isPageFolderView ? "primary" : "outline"} onClick={() => handleFolderView("page")}>
              Current Page
            </CustomButton>
          </div>}
          <div className="flex space-x-2 mb-4 mt-3">
            {!isPageFolderView && <CustomButton onClick={() => setIsFoldarCreateModal(true)}>
              + Add Folder
            </CustomButton>}
            {isFoldarDataMode && (
              <CustomButton variant="primary" onClick={() => handleUpload()}>
                Upload Image
              </CustomButton>
            )}
          </div>
          {categories && !isFoldarDataMode && !isPageFolderView && (
            <FileExplorer
              type="FOLDER"
              items={
                isPageFolderView
                  ? [categories?.find((c) => c?.dirName === pageName)]
                  : categories
              }
              handleClick={getFolderData}
            ></FileExplorer>
          )}
          {isFoldarDataMode && (
            <React.Fragment>
              {folderDetails &&
                folderDetails.data &&
                folderDetails.data.folders && (
                  <FileExplorer
                    type="FOLDER"
                    selectedFile={selectedFile}
                    items={folderDetails.data.folders}
                    handleClick={getSubFolderData}
                    keyName={"_id"}
                  ></FileExplorer>
                )}
              {folderDetails &&
                folderDetails.data &&
                folderDetails.data.images && (
                  <FileExplorer
                    type="IMAGE"
                    selectedFile={selectedFile}
                    items={folderDetails.data.images}
                    handleClick={handleSelectFile}
                  ></FileExplorer>
                )}
            </React.Fragment>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 p-4 border-t">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Close
          </button>
          <button
            onClick={selectFile}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Select
          </button>
        </div>
      </div>
      {isUploadModalOpen && (
        <ImageUploadModal
          isOpen={isUploadModalOpen}
          onClose={() => setIsUploadModalOpen(false)}
          folderId={selectedDirId}
          dirName={selectedDirName}
          onUploadSuccess={handleUploadSuccess}
        />
      )}
      {isFoldarDataMode && isFoldarModal && (
        <FolderImagesCard
          isOpen={isFoldarModal}
          onClose={() => handleFolderImageClose()}
          data={selectedFolderDate}
          handleClick={handleSelectFile}
          fetchData={getFiles}
        />
      )}
      {isFoldarCreateModal && (
        <CreateFolder
          isOpen={isFoldarCreateModal}
          onClose={() => setIsFoldarCreateModal(false)}
          setSubFolderName={setSubFolderName}
          subFolderName={subFolderName}
          onClick={isFoldarDataMode ? createSubfolder : createImageCategory}
        />
      )}
    </div>
  );
};

export default MediaLibraryModal;
