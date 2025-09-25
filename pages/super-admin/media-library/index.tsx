"use client"

import React, { useState, useEffect } from 'react';
import CustomButton from "../../../super-admin-components/CustomButton";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '../../../super-admin-components/CustomCard';
import CustomToast from '../../../super-admin-components/CustomToast';
import { axiosPrivate } from '../../../super-admin-components/apiFunctions';
import { useRouter } from 'next/navigation';
import FileExplorer from './[folder]/FileExplorer';
import CreateFolder from './[folder]/CreateFolder';

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
    const [categories, setCategories] = useState<ImageCategory[]>([]);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [isFoldarCreateModal, setIsFoldarCreateModal] = useState(false);

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
            await axiosPrivate.post('/imageCategory/save', { dirName: categoryName, title: "default", desc: "default" });
            setToast({
                message: "Image category created successfully",
                type: 'success'
            });
            setIsFoldarCreateModal(false);
            setCategoryName('');
            fetchCategories();
        } catch (error) {
            setToast({
                message: "Failed to create image category",
                type: 'error'
            });
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleClick = (dirName: string) => {
        router.push(`/super-admin/media-library/${dirName}`);
    }

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
                        <CustomButton onClick={() => setIsFoldarCreateModal(true)}>
                            Create Category
                        </CustomButton>
                    </div>

                    <FileExplorer type='FOLDER' items={categories} handleClick={handleClick} keyName={"dirName"}></FileExplorer>

                </CardContent>
            </Card>
            {isFoldarCreateModal && (
                <CreateFolder
                    isOpen={isFoldarCreateModal}
                    onClose={() => setIsFoldarCreateModal(false)}
                    setSubFolderName={setCategoryName}
                    subFolderName={categoryName}
                    onClick={createImageCategory}
                />
            )}
        </div>
    );
}