import React, { useEffect, useState } from 'react';
// import FileExplorer from './pages/super-admin/media-library/[folder]/FileExplorer';
import FileExplorer from '../pages/super-admin/media-library/[folder]/FileExplorer'; 
import ImageUploadModal from '../pages/super-admin/media-library/[folder]/ImageUploadModal';
import CustomButton from "./CustomButton";

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
  fetchData: (id: string) => void;
}

const FolderImagesCard: React.FC<ModalProps> = ({ isOpen, onClose, data, handleClick, fetchData }) => {
  if (!isOpen || !data) return null;
  const validExplorerData = data?.data?.images.map((e) => {return {
    _id: e._id,
    folder: "",
    filepath: e?.filepath,
    filename: e.filename,
  }})
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [fileExplorerData, setFileExplorerData] = useState<ValidFileExplorerType[]>(validExplorerData)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const handleCloseUploadFile = (id: string) => {
    fetchData(id);
    setIsUploadModalOpen(false);
  }
  useEffect(() => {
    setFileExplorerData(validExplorerData);
  }, [data]);
  const handleUploadSuccess = () => {
    setToast({
      message: "Images uploaded successfully",
      type: 'success'
    });
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
              onClose={() => handleCloseUploadFile(data?.data?._id)}
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
        </div>
      </div>
    </div>
  );
};

export default FolderImagesCard;