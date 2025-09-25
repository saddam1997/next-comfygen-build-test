// pages/image-category/create-subfolder.tsx
import React, { useState, useEffect } from 'react';
import CustomButton from "../../../../super-admin-components/CustomButton";
import CustomInput from '../../../../super-admin-components/CustomInput';
import ImageUploadModal from './ImageUploadModal';
import { useRouter } from 'next/router';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '../../../../super-admin-components/CustomCard';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow
} from '../../../../super-admin-components/CustomTable';
import CustomToast from '../../../../super-admin-components/CustomToast';
import { axiosPrivate } from '../../../../super-admin-components/apiFunctions';
import FileExplorer from './FileExplorer';

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
    isDisable: boolean;
    createdAt: number;
}

export default function FolderPage() {
    const router = useRouter();
    const [categories, setCategories] = useState<ImageCategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [subfolderName, setSubfolderName] = useState('');
    const [subfolders, setSubfolders] = useState<Folder[]>([]);
    const [imageData, setImageData] = useState<Images[]>([]);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState('');
    const [selectedFolderId, setSelectedFolderId] = useState('');
    const { folder } = router.query;
    // const folder = folders?.[0];
    // const sub_folder = folders?.[1]
    console.log("1111111111111111", folder);

    // Fetch categories
    const fetchCategories = async () => {
        try {
            const response = await axiosPrivate.get('/imageCategory/list');
            setCategories(response?.data?.data?.list || []);
        } catch (error) {
            setToast({
                message: "Failed to fetch image categories",
                type: 'error'
            });
        }
    };

    // Fetch subfolders for selected category
    const fetchSubfolders = async (dirName: string) => {
        try {
            const response = await axiosPrivate.get(`/imageCategory/folderDetails?dirName=${dirName}`);
            setSubfolders(response?.data?.data?.folders || []);
            setImageData(response?.data?.data?.images || []);
        } catch (error) {
            setToast({
                message: "Failed to fetch subfolders",
                type: 'error'
            });
        }
    };

    // Create subfolder
    const createSubfolder = async () => {
        if (!selectedCategory) {
            setToast({
                message: "Please select a category first",
                type: 'error'
            });
            return;
        }

        try {
            await axiosPrivate.post('/imageCategory/createImageFolder', {
                dirName: selectedCategory,
                folder: subfolderName
            });

            setToast({
                message: "Subfolder created successfully",
                type: 'success'
            });

            setSubfolderName('');
            fetchSubfolders(selectedCategory);
        } catch (error) {
            setToast({
                message: "Failed to create subfolder",
                type: 'error'
            });
        }
    };

    // Toggle subfolder status
    const toggleSubfolderStatus = async (id: string) => {
        try {
            await axiosPrivate.patch('/imageCategory/enableDisableSubfolder', { id });
            fetchSubfolders(selectedCategory);
            setToast({
                message: "Subfolder status updated",
                type: 'success'
            });
        } catch (error) {
            setToast({
                message: "Failed to update subfolder status",
                type: 'error'
            });
        }
    };

    // Delete subfolder
    const deleteSubfolder = async (id: string) => {
        try {
            await axiosPrivate.delete('/imageCategory/deleteSubfolder', { data: { id } });
            fetchSubfolders(selectedCategory);
            setToast({
                message: "Subfolder deleted successfully",
                type: 'success'
            });
        } catch (error) {
            setToast({
                message: "Failed to delete subfolder",
                type: 'error'
            });
        }
    };

    // Handle category selection
    const handleCategorySelect = (dirName: string) => {
        setSelectedCategory(dirName);
        fetchSubfolders(dirName);
    };

    interface FolderNameId {folder: string, id: string};

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
        fetchSubfolders(selectedCategory);
    };

    const handleClick = (folderName: string) => {
        router.push(`/super-admin/media-library/${folder}/${folderName}`)
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="container mx-auto p-6">
            {toast && (
                <CustomToast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            <Card>
                <CardHeader>
                    <CardTitle>Create Subfolder</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Category Selection Dropdown */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Category
                        </label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => handleCategorySelect(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a Category</option>
                            {categories.map((category) => (
                                <option key={category.dirName} value={category.dirName}>
                                    {category.dirName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Subfolder Creation Input */}
                    <div className="flex space-x-2 mb-4">
                        <CustomInput
                            placeholder="Enter Subfolder Name"
                            value={subfolderName}
                            onChange={(e) => setSubfolderName(e.target.value)}
                            disabled={!selectedCategory}
                        />
                        <CustomButton
                            onClick={createSubfolder}
                            disabled={!selectedCategory || !subfolderName}
                        >
                            Create Subfolder
                        </CustomButton>
                    </div>

                    {/* Subfolders Table */}
                    {selectedCategory && (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell>Subfolder Name</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {subfolders?.map((folder) => (
                                    <TableRow key={folder._id}>
                                        <TableCell>{folder.folder}</TableCell>
                                        <TableCell>
                                            {folder.isDisable ? 'Disabled' : 'Active'}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex space-x-2">
                                                <CustomButton
                                                    variant={folder.isDisable ? 'primary' : 'destructive'}
                                                    onClick={() => toggleSubfolderStatus(folder._id)}
                                                >
                                                    {folder.isDisable ? 'Enable' : 'Disable'}
                                                </CustomButton>
                                                <CustomButton
                                                    variant="outline"
                                                    onClick={() => deleteSubfolder(folder._id)}
                                                >
                                                    Delete
                                                </CustomButton>
                                                <CustomButton
                                                    variant="primary"
                                                    onClick={() => handleUpload({folder: folder.folder, id: folder._id})}
                                                >
                                                    Upload Image
                                                </CustomButton>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
            <FileExplorer type='FOLDER' items={subfolders} handleClick={handleClick}></FileExplorer>
            <FileExplorer type="IMAGE" items={imageData} handleClick={handleClick}></FileExplorer>
            {isUploadModalOpen && (
                <ImageUploadModal
                    isOpen={isUploadModalOpen}
                    onClose={() => setIsUploadModalOpen(false)}
                    folder={selectedFolder}
                    folderId={selectedFolderId}
                    dirName={selectedCategory}
                    onUploadSuccess={handleUploadSuccess}
                />
            )}
        </div>
    );
}