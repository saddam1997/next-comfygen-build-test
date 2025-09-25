"use client";

import { Plus, Trash2 } from "lucide-react";
import { pageSave, UploadImage } from "../../../super-admin-components/apiFunctions";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import MediaLibraryModal from "../../../super-admin-components/MediaLibraryModal";
import { MdOutlinePermMedia } from "react-icons/md";

interface PageFormData {
  pageId?: string;
  name: string;
  url: string;
  category: string;
  author: string;
  siteTitle: string;
  metaDesc: string;
  metaImgUrl: string;
  metaTitle: string;
  metsKeyValues: Array<{
    key: string;
    value: string;
    type: "TEXT" | "MEDIA"
  }>;
}

interface ObjectProp {
  key: string;
  value: string;
  type: "TEXT" | "MEDIA"
}

const ObjectField: React.FC<{
  properties: ObjectProp[];
  onChange: (properties: ObjectProp[]) => void;
}> = ({ properties, onChange }) => {
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [propIndex, setPropIndex] = useState(0);
  const [propKey, setPropKey] = useState("");
  const addProperty = () => {
    onChange([...properties, { key: '', value: '', type: 'TEXT' }]);
  };

  const removeProperty = (index: number) => {
    onChange(properties.filter((_, i) => i !== index));
  };

  const updateProperty = (index: number, field: keyof ObjectProp, value: string) => {
    const newProperties = [...properties];
    newProperties[index] = {
      ...newProperties[index],
      [field]: value
    };
    onChange(newProperties);
  };

  const getFunctionStateCurrenctData = (data: string) => {
    const newProperties = [...properties];

    const updatedProperty = {
      ...newProperties[propIndex],
      ["value"]: data
    };
    newProperties[propIndex] = updatedProperty;
    onChange(newProperties);
  }
  const mediaLibraryClose = () => {
    setPropIndex(0);
    setPropKey("");
    setSelectedFile("");
    setIsMediaLibraryOpen(false);
  }

  const openMediaLibrary = (key: string, index: number) => {
    setPropIndex(index);
    setPropKey(key);
    setIsMediaLibraryOpen(true);
  }


  const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
    border-radius: 25px;
    background-color: #F5F5F5;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
     border-radius: 25px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #5556D1;
     border-radius: 25px;
  }
`;

  return (
    <>
      <style>{customScrollbarStyles}</style>
      <div className="space-y-2 overflow-hidden overflow-y-auto h-64 custom-scrollbar">
        {properties.map((prop, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={prop.key}
                onChange={(e) => updateProperty(index, 'key', e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="Key"
              />
              {prop.type === "MEDIA" ? (
                prop?.value ? (
                  <img src={prop.value || ""} onClick={() => openMediaLibrary(prop.key, index)} className=" h-24 object-cover rounded w-full" alt="Selected Media"></img>
                ) : (
                  <button type="button" onClick={() => openMediaLibrary(prop.key, index)} className="bg-[#131327] text-white py-2 px-4 whitespace-nowrap rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 flex items-center gap-1"> <MdOutlinePermMedia /> Select Media</button>
                )
              ) : (
                <input
                  type="text"
                  value={prop.value}
                  onChange={(e) => updateProperty(index, 'value', e.target.value)}
                  className=" border-2 py-2 px-2 rounded-lg w-full"
                  placeholder="Value"
                />
              )}
              {/* <input
              type="text"
              value={prop.value}
              onChange={(e) => updateProperty(index, 'value', e.target.value)}
              className="w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Value"
            /> */}

              <div className="bg-[#131327] text-white py-1 px-3 rounded-md">
                <select
                  value={prop.type}
                  onChange={(e) => updateProperty(index, 'type', e.target.value as "TEXT" | "MEDIA")}
                  className="bg-[#131327] focus:outline-none"
                >
                  <option value="TEXT">TEXT</option>
                  <option value="MEDIA">MEDIA</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => removeProperty(index)}
                className="p-1 text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addProperty}
          className="inline-flex items-center px-2 py-1 text-sm text-blue-600 hover:text-blue-800"
        >
          <Plus className="h-4 w-4 mr-1" /> Add Property
        </button>
        {isMediaLibraryOpen && <MediaLibraryModal getFunctionStateCurrenctData={getFunctionStateCurrenctData} selectedFile={selectedFile} setSelectedFile={setSelectedFile} isOpen={isMediaLibraryOpen} onClose={() => mediaLibraryClose()}></MediaLibraryModal>}
      </div>
    </>

  );
};

interface MetaKey {
  _id?: string;
  key: string;
  value: string;
  type: "TEXT" | "MEDIA";
  isDisable?: boolean;
  isDefault?: boolean;
}

const AddNewPage: React.FC<{
  handleClose: () => void;
  pageId?: string;
  existingData?: PageFormData;
  metaKeys: MetaKey[];
  fetchData: () => void;
}> = ({ handleClose, pageId, existingData, metaKeys, fetchData }) => {
  const [formData, setFormData] = useState<PageFormData>({
    name: "",
    category: "",
    url: "",
    author: "",
    siteTitle: "",
    metaDesc: "",
    metaImgUrl: "",
    metaTitle: "",
    metsKeyValues: metaKeys.map(e => { return { key: e.key, value: e.value, type: e.type } })
  });
  const [errors, setErrors] = useState<{ [key in keyof PageFormData]?: string }>({});
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (pageId && existingData) {
      setFormData(existingData);

    }
  }, [pageId, existingData]);

  const handlePropChange = (properties: ObjectProp[]): void => {
    setFormData({
      ...formData,
      metsKeyValues: properties
    });
  };
  const validateField = (): boolean => {
    const newErrors: { [key in keyof PageFormData]?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required.";
    }

    // if (!formData.url.trim()) {
    //   newErrors.url = "URL is required.";
    // } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(formData.url)) {
    //   newErrors.url = "Invalid URL format.";
    // }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required.";
    }

    if (!formData.siteTitle.trim()) {
      newErrors.siteTitle = "Site title is required.";
    }

    if (!formData.metaDesc.trim()) {
      newErrors.metaDesc = "Meta description is required.";
    }

    // if (!formData.metaImgUrl.trim()) {
    //   newErrors.metaImgUrl = "Meta image URL is required.";
    // } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(formData.metaImgUrl)) {
    //   newErrors.metaImgUrl = "Invalid image URL format.";
    // }

    if (!formData.metaTitle.trim()) {
      newErrors.metaTitle = "Meta title is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     const formData = new FormData();
  //     formData.append("media", file);

  //     try {
  //       setIsUploading(true);
  //       const imageUrl = await UploadImage(formData);
  //       if (imageUrl) {
  //         setFormData((prev) => ({ ...prev, metaImgUrl: imageUrl }));
  //       }
  //     } catch (error) {
  //       console.error("Error uploading image:", error);
  //     } finally {
  //       setIsUploading(false);
  //     }
  //   }
  // };


  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const errors: { [key: string]: string } = {};
  //   let isValid = true; 
  //   for (const field in formData) {
  //     const error = validateField(field, formData[field as keyof PageFormData]);
  //     if (error) {
  //       isValid = false;
  //       errors[field] = error;
  //     }
  //     console.log("formOut",formData)
  //   } 
  //   setFormErrors(errors); 
  //   if (!isValid) return; 
  //   try {
  //     if (pageId) {
  //       await page({ ...formData, pageId });
  //     } else {
  //       await page(formData);
  //     }
  //     handleClose();
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateField()) {
      try {
        if (formData.pageId) {
          await pageSave(formData);
          fetchData();
        } else {
          await pageSave(formData);
          fetchData();
        }
        handleClose();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };
  interface Prop {
    key: string;
    value: string;
    type: "MEDIA" | "TEXT";
    metsKeyValues: []
  }
  // const handlePropChange = (index: number, field: keyof Prop, value: any): void => {
  //   const newProps = [...formData.metsKeyValues];

  //   newProps[index] = {
  //     ...newProps[index],
  //     [field]: value
  //   };
  //   setFormData({
  //     ...formData,
  //     metsKeyValues: newProps
  //   });
  // };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg  ">
        <div className="p-4">
          <div className="flex justify-between items-center border-b-2">
            <h2 className="text-xl font-semibold">{pageId ? "Edit Page" : "Add New Page"}</h2>
            <button
              className="mb-2 p-2 bg-black/10 rounded-full text-black hover:bg-black/60 hover:text-white"
              onClick={handleClose}>
              <IoMdClose className="h-5 w-5" />
            </button>
          </div>
          <div className="h-96 overflow-y-auto">
            <form className="m-b[100px]" onSubmit={handleSubmit}>
              <div className="space-y-4 mt-4">
                <h3 className="text-lg font-semibold">PAGE INFO</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mt-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[#1E293B] font-normal">Page Name</label>
                      <input
                        className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                        id="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="space-y-2">
                      <label htmlFor="url" className="text-[#1E293B] font-normal">Page URL</label>
                      <input
                        className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                        id="url"
                        placeholder="Enter Page URL"
                        value={formData.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      />
                      {errors.url && <p className="mt-1 text-sm text-red-600">{errors.url}</p>}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-[#1E293B] font-normal">Page Category</label>
                    <input
                      className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                      id="category"
                      placeholder="Enter Page Category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    />
                    {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}
                    </p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="author" className="text-[#1E293B] font-normal">Author</label>
                    <input
                      className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                      id="author"
                      placeholder="Enter Author"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    />
                    {errors.author && <p className="mt-1 text-sm text-red-600">{errors.author}
                    </p>}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Meta Og Tags</h3>
                  <ObjectField
                    properties={formData.metsKeyValues}
                    onChange={handlePropChange}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="siteTitle" className="text-[#1E293B] font-normal">Site Title</label>
                      <input
                        className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                        id="siteTitle"
                        placeholder="Enter Site Title"
                        value={formData.siteTitle}
                        onChange={(e) => setFormData({ ...formData, siteTitle: e.target.value })}
                      />
                      {errors.siteTitle && <p className="mt-1 text-sm text-red-600">{errors.siteTitle}
                      </p>}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="metaTitle" className="text-[#1E293B] font-normal">Meta Title</label>
                      <input
                        className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                        id="metaTitle"
                        placeholder="Enter Meta Title"
                        value={formData.metaTitle}
                        onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                      />
                      {errors.metaTitle && <p className="mt-1 text-sm text-red-600">{errors.metaTitle}
                      </p>}
                    </div>
                  </div>

                  {/* <div className="space-y-1">
                  <label htmlFor="metaImgUrl" className="text-[#1E293B] font-normal">Meta Image</label>
                  <input
                    type="file"
                    id="metaImgUrl"
                    onChange={handleFileChange}
                    className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                  />
                  {errors.metaImgUrl && <p className="mt-1 text-sm text-red-600">{errors.metaImgUrl}
                  </p>}
                  {isUploading && <p className="text-blue-500">Uploading image...</p>}
                  {formData.metaImgUrl && <p className="text-green-500">Image uploaded successfully!</p>}
                </div> */}

                  <div className="space-y-1">
                    <label htmlFor="metaDesc" className="text-[#1E293B] font-normal">Meta Description</label>
                    <textarea
                      id="metaDesc"
                      value={formData.metaDesc}
                      onChange={(e) => setFormData({ ...formData, metaDesc: e.target.value })}
                      className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                      placeholder="Additional Meta Description"
                    />
                    {errors.metaDesc && <p className="mt-1 text-sm text-red-600">{errors.metaDesc}
                    </p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <button
                    type="submit"
                    className="w-full py-2 bg-[#5556D1] text-white font-normal rounded-lg hover:bg-[#151515] transition duration-300"
                    disabled={isUploading}
                  >
                    {pageId ? "Update Page" : "Add Page"}
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddNewPage;