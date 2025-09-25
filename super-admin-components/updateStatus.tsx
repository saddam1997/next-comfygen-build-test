import React from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import Button from './button';
import TransparentButton from "./transparentButton";

interface StatusChangeModalProps {
  isStatusOpen: boolean;
  onClose: () => void;
  onConfirm: (id: string) => void;
  pageId: string;
}

const StatusChangeModal: React.FC<StatusChangeModalProps> = ({
  isStatusOpen,
  onClose,
  onConfirm,
  pageId,
}) => {
  if (!isStatusOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-[Poppins]">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center justify-center space-x-4 mb-4 text-yellow-500">
          <BsFillExclamationTriangleFill size={70} />
        </div>
        <p className="text-md text-gray-800 font-bold mb-6 justify-center items-center flex">
          Are you sure you want to update the status?
        </p>
        <div className="flex justify-center space-x-6">
          <TransparentButton onClick={onClose} text="Cancel" />
          <Button onClick={() => onConfirm(pageId)} text="Confirm" />
        </div>
      </div>
    </div>
  );
};

export default StatusChangeModal;
