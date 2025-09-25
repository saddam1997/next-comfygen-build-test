"use client"

import React, { useState, useEffect } from 'react';
import CustomButton from "../../../super-admin-components/CustomButton";
import CustomInput from '../../../super-admin-components/CustomInput';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '../../../super-admin-components/CustomCard';
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow
} from '../../../super-admin-components/CustomTable';
import CustomToast from '../../../super-admin-components/CustomToast';
import { axiosPrivate } from '../../../super-admin-components/apiFunctions';
import { useRouter } from 'next/navigation';
import ImageUploadModal from './[folder]/ImageUploadModal';

interface ImageCategory {
    _id: string;
    title: string;
    desc?: string;
    dirName: string;
    isDisable: boolean;
    createdAt: number
}

export default function ImageCategoryPage() {
    const [categoryName, setCategoryName] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');
    const [categoryDesc, setCategoryDesc] = useState('');
    const [categories, setCategories] = useState<ImageCategory[]>([]);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState('');
    const [selectedFolderId, setSelectedFolderId] = useState('');
    const router = useRouter();

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

    // Create image category
    const createImageCategory = async () => {
        try {
            await axiosPrivate.post('/imageCategory/save', { dirName: categoryName, title: categoryTitle, desc: categoryDesc });
            setToast({
                message: "Image category created successfully",
                type: 'success'
            });
            setCategoryName('');
            setCategoryTitle('');
            setCategoryDesc('');
            fetchCategories();
        } catch (error) {
            setToast({
                message: "Failed to create image category",
                type: 'error'
            });
        }
    };

    // Toggle category status
    const toggleCategoryStatus = async (id: string) => {
        try {
            await axiosPrivate.patch('/imageCategory/enableDisable', { id });
            fetchCategories();
            setToast({
                message: "Category status updated",
                type: 'success'
            });
        } catch (error) {
            setToast({
                message: "Failed to update category status",
                type: 'error'
            });
        }
    };

    const handleAddFolder = (dirName:string) => {
        router.push(`/super-admin/media-library/${dirName}`);
    }
    interface DirNameId {
        dirName: string,
        id: string
    }
    const handleUpload = (dir: DirNameId) => {
        setSelectedFolder(dir.dirName);
        setSelectedFolderId(dir.id);
        setIsUploadModalOpen(true);
    };
    const handleUploadSuccess = () => {
        setToast({
            message: "Images uploaded successfully",
            type: 'success'
        });
    };

    // Delete category
    const deleteCategory = async (id: string) => {
        try {
            await axiosPrivate.delete('/imageCategory/delete', { data: { id } });
            fetchCategories();
            setToast({
                message: "Category deleted successfully",
                type: 'success'
            });
        } catch (error) {
            setToast({
                message: "Failed to delete category",
                type: 'error'
            });
        }
    };

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
                    <CardTitle>Image Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-2 mb-4">
                        <CustomInput
                            placeholder="Enter Category Title"
                            value={categoryTitle}
                            onChange={(e) => setCategoryTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex space-x-2 mb-4">
                        <CustomInput
                            placeholder="Enter Category Descreption"
                            value={categoryDesc}
                            onChange={(e) => setCategoryDesc(e.target.value)}
                        />
                    </div>
                    <div className="flex space-x-2 mb-4">
                        <CustomInput
                            placeholder="Enter Category Name"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                        <CustomButton onClick={createImageCategory}>
                            Create Category
                        </CustomButton>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell>Category Name</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map((category) => (
                                <TableRow key={category._id}>
                                    <TableCell>{category.dirName}</TableCell>
                                    <TableCell>
                                        {category.isDisable ? 'Disabled' : 'Active'}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex space-x-2">
                                            <CustomButton
                                                variant={category.isDisable ? 'primary' : 'destructive'}
                                                onClick={() => toggleCategoryStatus(category._id)}
                                            >
                                                {category.isDisable ? 'Enable' : 'Disable'}
                                            </CustomButton>
                                            <CustomButton
                                                variant="outline"
                                                onClick={() => deleteCategory(category._id)}
                                            >
                                                Delete
                                            </CustomButton>
                                            <CustomButton
                                                variant="secondary"
                                                onClick={() => handleAddFolder(category.dirName)}
                                            >
                                                Open Folder
                                            </CustomButton>
                                            <CustomButton
                                                variant="secondary"
                                                onClick={() => handleUpload({dirName: category.dirName, id:category._id})}
                                            >
                                                Upload Image
                                            </CustomButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            {isUploadModalOpen && (
                <ImageUploadModal
                    isOpen={isUploadModalOpen}
                    onClose={() => setIsUploadModalOpen(false)}
                    folderId={selectedFolderId}
                    dirName={selectedFolder}
                    onUploadSuccess={handleUploadSuccess}
                />
            )}
        </div>
    );
}