"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { axiosPrivate } from "../../../super-admin-components/apiFunctions";
import MediaLibraryModal from "../../../super-admin-components/MediaLibraryModal";

interface MetaKey {
  _id: string;
  key: string;
  value: string;
  type: "TEXT" | "MEDIA";
  isDisable: boolean;
  isDefault: boolean;
}

interface MetaData {
  total: number;
  list: [MetaKey];
}

interface MetaDataRes {
  message: string;
  code: number;
  error: boolean;
  data: MetaData;
}

const MetaKeysManager: React.FC = () => {
  const [metaKeys, setMetaKeys] = useState<MetaData>({
    total: 0,
    list: [
      {
        _id: "",
        key: "",
        value: "",
        type: "TEXT",
        isDisable: false,
        isDefault: false,
      },
    ],
  });
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [form, setForm] = useState<{
    _id?: string;
    key: string;
    value: string;
    type: "TEXT" | "MEDIA";
  }>({ key: "", value: "", type: "TEXT" });

  useEffect(() => {
    fetchMetaKeys();
  }, []);

  const fetchMetaKeys = async () => {
    const { data } = await axiosPrivate.get("/metaKeys/list");
    setMetaKeys(data?.data || []);
  };

  const handleToggleStatus = async (id: string) => {
    await axiosPrivate.patch(`/metaKeys/enableDisable`, { _id: id });
    fetchMetaKeys();
  };
  const handleToggleDefault = async (id: string) => {
    await axiosPrivate.patch(`/metaKeys/default`, { _id: id });
    fetchMetaKeys();
  };

  const handleEdit = (record: MetaKey) => {
    delete record.isDefault;
    delete record.isDisable;
    setForm(record);
    setModalVisible(true);
  };

  const handleSubmit = async () => {
    await axiosPrivate.post("/metaKeys/save", form);
    setModalVisible(false);
    fetchMetaKeys();
    setForm({ key: "", value: "", type: "TEXT" });
  };
  const handleClose = () => {
    setModalVisible(false);
    setForm({ key: "", value: "", type: "TEXT" });
  };
  const updateFormValue = (value: string) => {
    // if(value === "MEDIA") {
    //     setIsMediaLibraryOpen(true);
    // }
    setForm({ ...form, type: value as "TEXT" | "MEDIA" });
  };
  const getFunctionStateCurrenctData = (value: string) => {
    setForm({ ...form, value: value });
  };
  const mediaLibraryClose = () => {
    setSelectedFile("");
    setIsMediaLibraryOpen(false);
  };

  return (
    <div className="p-6 h-dvh overflow-hidden overflow-y-auto">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setModalVisible(true)}
      >
        Add MetaKey
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Key</th>
            <th className="border border-gray-300 p-2">Value</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Default</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {metaKeys &&
            metaKeys.list &&
            metaKeys.list.map((meta) => (
              <tr key={meta._id} className="text-center">
                <td className="border border-gray-300 p-2">{meta.key}</td>
                <td className="border border-gray-300 p-2">{meta.value}</td>
                <td className="border border-gray-300 p-2">{meta.type}</td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="checkbox"
                    checked={meta.isDefault}
                    onChange={() => handleToggleDefault(meta._id)}
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="checkbox"
                    checked={!meta.isDisable}
                    onChange={() => handleToggleStatus(meta._id)}
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => handleEdit(meta)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {modalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">
              {form?._id ? "Edit MetaKey" : "Add MetaKey"}
            </h3>
            <input
              type="text"
              placeholder="Key"
              className="w-full border p-2 mb-2 rounded"
              value={form.key}
              onChange={(e) => setForm({ ...form, key: e.target.value })}
            />
            {form?.type === "MEDIA" ? (
              form?.value ? (
                <img
                  src={form.value}
                  onClick={() => setIsMediaLibraryOpen(true)}
                  className="w-24 h-24 object-cover rounded"
                  alt="Select Media"
                ></img>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsMediaLibraryOpen(true)}
                  className="w-1/3 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  Select Media
                </button>
              )
            ) : (
              <input
                type="text"
                placeholder="Value"
                className="w-full border p-2 mb-2 rounded"
                value={form.value}
                onChange={(e) => setForm({ ...form, value: e.target.value })}
              />
            )}
            <select
              className="w-full border p-2 mb-2 rounded"
              value={form.type}
              onChange={(e) => updateFormValue(e.target.value)}
            >
              <option value="TEXT">TEXT</option>
              <option value="MEDIA">MEDIA</option>
            </select>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => handleClose()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isMediaLibraryOpen && (
        <MediaLibraryModal
          getFunctionStateCurrenctData={getFunctionStateCurrenctData}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          isOpen={isMediaLibraryOpen}
          onClose={mediaLibraryClose}
        ></MediaLibraryModal>
      )}
    </div>
  );
};

export default MetaKeysManager;
