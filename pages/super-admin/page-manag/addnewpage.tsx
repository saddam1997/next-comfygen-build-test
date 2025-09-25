"use client";

import { Plus, Trash2 } from "lucide-react";
import {
  pageSave,
} from "../../../super-admin-components/apiFunctions";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import MediaLibraryModal from "../../../super-admin-components/MediaLibraryModal";
import { MdOutlinePermMedia } from "react-icons/md";

interface PageFormData {
  _id?: string;
  name: string;
  siteTitle: string;
  metaDesc: string;
  metsKeyValues: Array<{
    key: string;
    value: string;
    type: "TEXT" | "MEDIA";
  }>;
  linkKeyValues: Array<{
    key: string;
    value: string;
    type: "TEXT" | "MEDIA";
  }>;
}

interface ObjectProp {
  key: string;
  value: string;
  type: "TEXT" | "MEDIA";
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
    onChange([...properties, { key: "", value: "", type: "TEXT" }]);
  };

  const removeProperty = (index: number) => {
    onChange(properties.filter((_, i) => i !== index));
  };

  const updateProperty = (
    index: number,
    field: keyof ObjectProp,
    value: string
  ) => {
    const newProperties = [...properties];
    newProperties[index] = {
      ...newProperties[index],
      [field]: value,
    };
    onChange(newProperties);
  };

  const getFunctionStateCurrenctData = (data: string) => {
    const newProperties = [...properties];

    const updatedProperty = {
      ...newProperties[propIndex],
      ["value"]: data,
    };
    newProperties[propIndex] = updatedProperty;
    onChange(newProperties);
  };
  const mediaLibraryClose = () => {
    setPropIndex(0);
    setPropKey("");
    setSelectedFile("");
    setIsMediaLibraryOpen(false);
  };

  const openMediaLibrary = (key: string, index: number) => {
    setPropIndex(index);
    setPropKey(key);
    setIsMediaLibraryOpen(true);
  };

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
                onChange={(e) => updateProperty(index, "key", e.target.value)}
                className="border-2 py-2 px-2 rounded-lg w-full"
                placeholder="Key"
              />
              {prop.type === "MEDIA" ? (
                prop?.value ? (
                  <img
                    src={prop.value || ""}
                    onClick={() => openMediaLibrary(prop.key, index)}
                    className=" h-24 object-cover rounded w-full"
                    alt="Selected Media"
                  ></img>
                ) : (
                  <button
                    type="button"
                    onClick={() => openMediaLibrary(prop.key, index)}
                    className="bg-[#131327] text-white py-2 px-4 whitespace-nowrap rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 flex items-center gap-1"
                  >
                    {" "}
                    <MdOutlinePermMedia /> Select Media
                  </button>
                )
              ) : (
                <input
                  type="text"
                  value={prop.value}
                  onChange={(e) =>
                    updateProperty(index, "value", e.target.value)
                  }
                  className=" border-2 py-2 px-2 rounded-lg w-full"
                  placeholder="Value"
                />
              )}

              <div className="bg-[#131327] text-white py-1 px-3 rounded-md">
                <select
                  value={prop.type}
                  onChange={(e) =>
                    updateProperty(
                      index,
                      "type",
                      e.target.value as "TEXT" | "MEDIA"
                    )
                  }
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
        {isMediaLibraryOpen && (
          <MediaLibraryModal
            getFunctionStateCurrenctData={getFunctionStateCurrenctData}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            isOpen={isMediaLibraryOpen}
            onClose={() => mediaLibraryClose()}
          ></MediaLibraryModal>
        )}
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
    siteTitle: "",
    metaDesc: "",
    metsKeyValues: metaKeys.map((e) => {
      return { key: e.key, value: e.value, type: e.type };
    }),
    linkKeyValues: []
  });
  const [errors, setErrors] = useState<{
    [key in keyof PageFormData]?: string;
  }>({});
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (pageId && existingData) {
      // setFormData(existingData);
      setFormData(() => ({
        _id: existingData._id,
        name: existingData.name,
        metaDesc: existingData.metaDesc,
        siteTitle: existingData.siteTitle,
        metsKeyValues: existingData.metsKeyValues,
        linkKeyValues: existingData?.linkKeyValues || [],
      }));
    }
  }, [pageId, existingData]);

  const handlePropChange = (properties: ObjectProp[]): void => {
    setFormData({
      ...formData,
      metsKeyValues: properties,
    });
  };
  const validateField = (): boolean => {
    const newErrors: { [key in keyof PageFormData]?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.siteTitle.trim()) {
      newErrors.siteTitle = "Site title is required.";
    }

    if (!formData.metaDesc.trim()) {
      newErrors.metaDesc = "Meta description is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateField()) {
      try {
        await pageSave(formData);
        fetchData();
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
    metsKeyValues: [];
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg  ">
        <div className="p-4">
          <div className="flex justify-between items-center border-b-2">
            <h2 className="text-xl font-semibold">
              {pageId ? "Edit Page" : "Add New Page"}
            </h2>
            <button
              className="mb-2 p-2 bg-black/10 rounded-full text-black hover:bg-black/60 hover:text-white"
              onClick={handleClose}
            >
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
                      <label
                        htmlFor="name"
                        className="text-[#1E293B] font-normal"
                      >
                        Page Slug
                      </label>
                      <input
                        className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                        id="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="siteTitle"
                        className="text-[#1E293B] font-normal"
                      >
                        Title
                      </label>
                      <input
                        className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                        id="siteTitle"
                        placeholder="Enter Site Title"
                        value={formData.siteTitle}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            siteTitle: e.target.value,
                          })
                        }
                      />
                      {errors.siteTitle && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.siteTitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="space-y-1">
                    <label
                      htmlFor="metaDesc"
                      className="text-[#1E293B] font-normal"
                    >
                      Meta Description
                    </label>
                    <textarea
                      id="metaDesc"
                      value={formData.metaDesc}
                      onChange={(e) =>
                        setFormData({ ...formData, metaDesc: e.target.value })
                      }
                      className="w-full p-2 text-md bg-gray-100 border border-gray-300 rounded outline-none"
                      placeholder="Additional Meta Description"
                      rows={4}
                    />
                    {errors.metaDesc && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.metaDesc}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Meta Og Tags</h3>
                  <ObjectField
                    properties={formData.metsKeyValues}
                    onChange={handlePropChange}
                  />
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
