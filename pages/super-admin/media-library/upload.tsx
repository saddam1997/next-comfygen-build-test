"use client"


import React, { useState } from 'react';
import Button from "../../../super-admin-components/CustomButton";
import Input from "../../../super-admin-components/CustomInput";
import { Card, CardContent, CardHeader, CardTitle } from "../../../super-admin-components/CustomCard";
import axios from 'axios';
import toast from "../../../super-admin-components/CustomToast"
import { axiosPrivate } from '../../../super-admin-components/apiFunctions';

export default function ImageUploadPage() {
  const [dirName, setDirName] = useState('');
  const [folderName, setFolderName] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  // Create image folder
  const createImageFolder = async () => {
    try {
      await axiosPrivate.post('/imageCategory/createImageFolder', { 
        dirName, 
        folder: folderName 
      });
      toast({
        type: "success",
        message: "Image folder created successfully"
      });
      setFolderName('');
    } catch (error) {
      toast({
        type: "error",
        message: "Failed to create image folder",
      });
    }
  };

  // Upload images
  const uploadImages = async () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('media', file);
    });
    formData.append('dirName', dirName);
    formData.append('folder', folderName);

    try {
      await axiosPrivate.post('/imageCategory/uploadMedia', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast({
        type: "success",
        message: "Images uploaded successfully"
      });
      setFiles([]);
    } catch (error) {
      toast({
        type: "error",
        message: "Failed to upload images",
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Image Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input 
                placeholder="Directory Name" 
                value={dirName}
                onChange={(e) => setDirName(e.target.value)}
              />
              <Input 
                placeholder="Folder Name" 
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
            </div>

            <Button onClick={createImageFolder}>Create Image Folder</Button>

            <div>
              <Input 
                type="file" 
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    setFiles(Array.from(e.target.files));
                  }
                }}
              />
              {files.length > 0 && (
                <div className="mt-2">
                  <p>Selected Files:</p>
                  {files.map((file, index) => (
                    <p key={index}>{file.name}</p>
                  ))}
                </div>
              )}
            </div>

            <Button 
              onClick={uploadImages}
              disabled={!dirName || !folderName || files.length === 0}
            >
              Upload Images
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}