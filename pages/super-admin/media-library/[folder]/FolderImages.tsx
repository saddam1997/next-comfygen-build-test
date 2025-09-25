"use client"


import React, { useEffect, useState } from 'react';
import FileExplorer from './FileExplorer';
import ImageUploadModal from './ImageUploadModal';
import CustomButton from '../../../../super-admin-components/CustomButton';

interface Images {
  _id: string;
  folderId: string;
  filepath: string;
  filename: string;
  isDisable: boolean;
  createdAt: number;
}
interface folderImageDetails {
  _id: string;
  dirName: string;
  folder: string;
  isDisable: boolean;
  createdAt: number;
  images: Images[]
}
interface ApiResponse2 {
  message: string;
  code: number;
  error: boolean;
  data?: folderImageDetails;
}


interface ValidFileExplorerType {
  _id: string;
  folder: string;
  filepath?: string;
  filename?: string;
  dirName?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ApiResponse2 | null;
  handleClick?:(filePath: string) => void;
  getFiles: (id:string) => void;
}

const FolderImages: React.FC<ModalProps> = ({ isOpen, onClose, data, handleClick, getFiles }) => {
  if (!isOpen || !data) return null;
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [fileExplorerData, setFileExplorerData] = useState<ValidFileExplorerType[]>([])
  useEffect(() => {
    const validExplorerData:ValidFileExplorerType[] = data?.data?.images.map((e) => {return {
      _id: e._id,
      folder: "",
      filepath: e?.filepath,
      filename: e.filename,
    }});
    setFileExplorerData(validExplorerData);
  }, [data]);
  // const [fileExplorerData, setFileExplorerData] = useState<ValidFileExplorerType[]>([{
  //   _id: "",
  //   folder: "",
  //   filepath: "",
  //   filename: "",
  //   dirName:""
  // }]);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const handleUploadSuccess = () => {
    setToast({
      message: "Images uploaded successfully",
      type: 'success'
    });
    getFiles(data.data._id);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 z-50">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">
            {'Modal Title'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <FileExplorer type="IMAGE" items={fileExplorerData} handleClick={handleClick}></FileExplorer>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 p-4 border-t">
          {isUploadModalOpen && (
            <ImageUploadModal
              isOpen={isUploadModalOpen}
              onClose={() => setIsUploadModalOpen(false)}
              folderId={data?.data?._id}
              dirName={data?.data?.dirName}
              folder={data?.data?.folder}
              onUploadSuccess={handleUploadSuccess}
            />
          )}
          <CustomButton
            variant="primary"
            onClick={() => setIsUploadModalOpen(true)}
          >
            Upload Image
          </CustomButton>
          {/* <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Close
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FolderImages;