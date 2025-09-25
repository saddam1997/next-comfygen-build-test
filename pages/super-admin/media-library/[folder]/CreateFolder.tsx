"use client"


import React from 'react';
import CustomInput from '../../../../super-admin-components/CustomInput';
import CustomButton from '../../../../super-admin-components/CustomButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  subFolderName: string;
  setSubFolderName: (val: string) => void;
  onClick: () => void;
}

const CreateFolder: React.FC<ModalProps> = ({ isOpen, onClose, subFolderName, setSubFolderName, onClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity "
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 z-50 ">
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
        <div className="flex space-x-2 mx-6"></div>
        <div className='py-8 px-4 space-y-4'>
        <CustomInput
          placeholder="Enter Folder Name"
          value={subFolderName}
          onChange={(e) => setSubFolderName(e.target.value)}
        />
        <CustomButton onClick={() => onClick()}>
          Create Folder
        </CustomButton>
        </div>
     
      </div>
      {/* Footer */}
      <div className="flex justify-end gap-2 p-4 border-t">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateFolder;