"use client"

import React, { useState, useEffect } from 'react';
import CustomButton from "../../../../super-admin-components/CustomButton";
import ImageUploadModal from './ImageUploadModal';
import { useRouter } from 'next/router';
import CustomToast from '../../../../super-admin-components/CustomToast';
import { axiosPrivate } from '../../../../super-admin-components/apiFunctions';
import FileExplorer from './FileExplorer';
import FolderImages from './FolderImages';
import CreateFolder from './CreateFolder';

interface ImageCategory {
    _id: string;
    dirName: string;
}

interface Subfolder {
    _id: string;
    name: string;
    categoryId: string;
    isDisable: boolean;
}
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
    images: Images[]
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
    images: Images[]
}
interface ApiResponse2 {
    message: string;
    code: number;
    error: boolean;
    data?: folderImageDetails;
}

export default function FolderPage() {
    const router = useRouter();
    const [folderDetails, setFolderDetails] = useState<ApiResponse>({ message: "", code: 0, error: true, data: null });
    const [selectedFolderDate, setSelectedFolderDate] = useState<ApiResponse2>(null);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [isFoldarModal, setIsFoldarModal] = useState(false);
    const [isFoldarCreateModal, setIsFoldarCreateModal] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState('');
    const [selectedFolderId, setSelectedFolderId] = useState('');
    const [subFolderName, setSubFolderName] = useState('');
    let { folder } = router.query;
    folder = String(folder || "");
    const fetchSubfolders = async (dirName: string) => {
        try {
            const response = await axiosPrivate.get(`/imageCategory/folderDetails?dirName=${dirName}`);
            setFolderDetails(response?.data);
        } catch (error) {
            setToast({
                message: "Failed to fetch subfolders",
                type: 'error'
            });
        }
    };
    useEffect(() => {
        if (typeof folder === "string") {
            fetchSubfolders(folder);
        }
    }, [router.query]);
    if (folderDetails.error) {
        return;
    }

    interface FolderNameId { folder: string, id: string };

    const handleUpload = (folder: FolderNameId) => {
        setSelectedFolder(folder.folder);
        setSelectedFolderId(folder.id);
        setIsUploadModalOpen(true);
    };
    const handleUploadSuccess = () => {
        setToast({
            message: "Images uploaded successfully",
            type: 'success'
        });
        fetchSubfolders(folder);
    };
    const getFiles = async (id: string) => {
        try {
            const response = await axiosPrivate.get(`/imageCategory/folderImages?_id=${id}`);
            setSelectedFolderDate(response?.data);
        } catch (error) {
            setToast({
                message: "Failed to fetch subfolders",
                type: 'error'
            });
        }
    };
    const handleClick = (id: string) => {
        setIsFoldarModal(true);
        getFiles(id);
    }
    // Create subfolder
    const createSubfolder = async () => {
        if (!subFolderName) {
            setToast({
                message: "Please Enter Folder Name",
                type: 'error'
            });
            return;
        }

        try {
            await axiosPrivate.post('/imageCategory/createImageFolder', {
                dirName: folder,
                folder: subFolderName
            });

            setToast({
                message: "Subfolder created successfully",
                type: 'success'
            });
            setSubFolderName('');
            setIsFoldarCreateModal(false)
            fetchSubfolders(folder);
        } catch (error) {
            setToast({
                message: "Failed to create subfolder",
                type: 'error'
            });
        }
    };


    return (
        <div className="container mx-auto p-6">
            {toast && (
                <CustomToast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
            <div className="flex space-x-2 mb-4">

                <CustomButton onClick={() => setIsFoldarCreateModal(true)}>
                    Add Folder
                </CustomButton>
                <CustomButton
                    variant="primary"
                    onClick={() => handleUpload({ folder: folder, id: folderDetails?.data._id })}
                >
                    Upload Image
                </CustomButton>
            </div>
            <FileExplorer type='FOLDER' items={folderDetails?.data?.folders} handleClick={handleClick}></FileExplorer>
            <FileExplorer type="IMAGE" items={folderDetails?.data?.images} handleClick={handleClick}></FileExplorer>
            {isUploadModalOpen && (
                <ImageUploadModal
                    isOpen={isUploadModalOpen}
                    onClose={() => setIsUploadModalOpen(false)}
                    folderId={selectedFolderId}
                    dirName={selectedFolder}
                    onUploadSuccess={handleUploadSuccess}
                />
            )}
            {isFoldarModal && (
                <FolderImages
                    isOpen={isFoldarModal}
                    onClose={() => setIsFoldarModal(false)}
                    data={selectedFolderDate}
                    getFiles={getFiles}
                />
            )}
            {isFoldarCreateModal && (
                <CreateFolder
                    isOpen={isFoldarCreateModal}
                    onClose={() => setIsFoldarCreateModal(false)}
                    setSubFolderName={setSubFolderName}
                    subFolderName={subFolderName}
                    onClick={createSubfolder}
                />
            )}
        </div>
    );
}