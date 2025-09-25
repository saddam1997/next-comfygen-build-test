/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import TransparentButton from './transparentButton'
import Button from './button'

interface DeleteConfirmationModalProps {
  pageId: string
  onCancel: () => void
  onConfirm: (pageId: string) => void
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  onCancel,
  onConfirm,
  pageId
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-[Roboto] font-bold">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"> 
        <div className="flex justify-center items-center text-red-600 space-x-4 mb-6">
        <img src='/delete.png' alt=''/>
        </div>
        <p className="text-md text-gray-800 mb-6 flex justify-center">
          Are you sure you want to delete this page?
        </p>
        <div className="flex justify-center space-x-6">
          <TransparentButton onClick={onCancel} text="Cancel" />
          <Button onClick={() => onConfirm(pageId)} text="Delete" />
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmationModal
