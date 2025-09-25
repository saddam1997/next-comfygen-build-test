"use client";

import React, { useState, useEffect } from "react";
import { LuPencilLine } from "react-icons/lu";
import moment from "moment";
import { SyncLoader } from "react-spinners";
import AddNewPage from "./addnewpage";
import { useRouter } from "next/navigation";

import {
  axiosPrivate,
  fetchPageList,
} from "../../../super-admin-components/apiFunctions";
import { MdOutlinePreview } from "react-icons/md";
import PreviewPage from "./PreviewPage";

interface MetaData {
  _id: string;
  name: string;
  url: string;
  category: string;
  author: string;
  siteTitle: string;
  metaDesc: string;
  metaImgUrl: string;
  metaTitle: string;
  isDisable: boolean;
  createdAt: number;
}

const fetchMetaKeys = async () => {
  try {
    const res = await axiosPrivate.get("/metaKeys/list", {
      params: { disable: "no" },
    });
    return res?.data?.data?.list || [];
  } catch (error) {
    console.error(error);
  }
};
interface MetaKey {
  _id?: string;
  key: string;
  value: string;
  type: "TEXT" | "MEDIA";
  isDisable?: boolean;
  isDefault?: boolean;
}
export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPagePreview, setIsPagePreview] = useState<boolean>(false);
  const [previewPageName, setPreviewPageName] = useState<string>("");
  const [selectedPage, setSelectedPage] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [keyWord, setKeyWord] = useState("");
  const [metaKeys, setMetaKeys] = useState<MetaKey[]>([
    { key: "", type: "TEXT", value: "" },
  ]);

  interface FilterTypes {
    keyWord?: string;
    size?: number;
  }
  const fetchData = async (filter?: FilterTypes) => {
    setLoading(true);
    const data = await fetchPageList({...filter, size: 999});
    if (data) {
      setPageData(data);
    }
    setLoading(false);
  };
  const getMetaKeys = async () => {
    const meta_kets = await fetchMetaKeys();
    setMetaKeys(meta_kets || []);
  };
  useEffect(() => {
    if(keyWord==="") {
      fetchData();
      getMetaKeys();
    }
  }, [keyWord]);

  const handleAddNewPageClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPage(null);
  };

  const handleAddComponent = (id: string, name: string) => {
    router.push(`/super-admin/page-manag/components?pageId=${id}&name=${name}`);
  };
  const handleStatusChangeClick = async (id: string) => {
    try {
      let res = await axiosPrivate.patch("/page/enableDisable", { _id: id });
      if (res?.status === 200) {
        if (res?.data?.error === false) {
          fetchData();
        }
      }
    } catch (error) {
      console.error("Error at handleStatusChangeClick", error);
    }
  };
  const handleEditPageClick = (data) => {
    delete data?.components;
    delete data?.isDisable;
    delete data?.createdAt;
    setSelectedPage(data);
    setIsModalOpen(true);
  };
  
  const searchComponent = () => {
    fetchData({ keyWord: keyWord });
  };
  const previewPage = (name: string) => {
    setIsPagePreview(true);
    setPreviewPageName(name);
  };
  const closePreviewPage = () => {
    setIsPagePreview(false);
    setPreviewPageName("");
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
    <React.Fragment>
      <div className="py-4 md:px-10 px-6 mt-8">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <SyncLoader color="#1b2c55" size={15} />
          </div>
        ) : (
          <>
            <div className="flex flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0 mt-10">
              <div className="flex gap-2">
                <input
                  type="search"
                  placeholder="Search..."
                  value={keyWord}
                  onChange={(e) => setKeyWord(e.target.value)}
                  className="input w-full h-[40px] py-0 px-4 pl-10 border rounded-[8px] outline-none bg-[#F1F4F9] text-[#0d0c22] placeholder-[#9e9ea7] transition-all duration-300 ease-in-out focus:border-[#4d4c4c] focus:bg-white hover:border-[#222222] border-[#13132761]"
                />
               <button className="bg-[#F1F4F9] text-[#0d0c22] p-2 text-sm border-[#13132761] rounded-[8px]" onClick={() => searchComponent()}>Search</button>
              </div>
              <button
                onClick={handleAddNewPageClick}
                className="px-4 py-2.5 bg-[#5556D1] text-white font-medium rounded-lg"
              >
                + Add New Page
              </button>
            </div>
            <style>{customScrollbarStyles}</style>
            <div className="overflow-x-auto max-h-[68vh] overflow-y-auto mt-4 custom-scrollbar">
              <table className="table-auto w-full border border-gray-200 bg-[#F1F4F9]">
                <thead>
                  <tr className="bg-gray-50 text-base text-black font-normal border-b">
                    <th className="px-6 py-3 text-center">SR.No.</th>
                    <th className="px-6 py-3 text-left">PAGE NAME</th>
                    {/* <th className="px-6 py-3 text-left">AUTHOR</th>
                    <th className="px-6 py-3 text-left">CATEGORIES</th> */}
                    <th className="px-6 py-3 text-left">DATE</th>
                    <th className="px-6 py-3 text-left">STATUS</th>
                    <th className="px-6 py-3 text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {pageData &&
                    pageData?.list &&
                    pageData.list.map((page, index) => (
                      <tr
                        key={page._id}
                        className="text-sm text-black border-b font-medium hover:bg-gray-100"
                      >
                        <td className="px-6 py-3 text-center">{index + 1}</td>
                        <td className="px-6 py-3">{page?.name}</td>
                        {/* <td className="px-6 py-3">{page?.author}</td> */}
                        {/* <td className="px-6 py-3">{page.category}</td> */}
                        <td className="px-6 py-3">
                          {moment(page.createdAt).format("DD/MM/YYYY")}
                        </td>
                        <td className="px-6 py-3">
                          <button
                            onClick={() => handleStatusChangeClick(page._id)}
                            className={`flex items-center justify-between w-12 h-6 px-1 rounded-full transition-all duration-300 cursor-pointer ${
                              page.isDisable
                                ? "bg-[#95000033]"
                                : "bg-[#0C950033]"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                page.isDisable
                                  ? "translate-x-1 bg-[#ff0000]"
                                  : "translate-x-6 bg-[#0C8C00]"
                              }`}
                            ></div>
                          </button>
                        </td>
                        <td className="px-6 py-3">
                          <div className="flex items-center space-x-2 justify-center">
                            {/* <button
                              className="p-2 bg-[#c74a4a38] text-[#000000] rounded cursor-pointer"
                              onClick={() => handleDeleteClick(page._id)}
                            >
                              <RiDeleteBin6Line size={20} />
                            </button> */}
                            <MdOutlinePreview
                              className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20"
                              onClick={() => previewPage(page.name)}
                            />
                            <button
                              className="p-2 bg-[#131327]/20 text-[#131327] rounded"
                              onClick={() => handleEditPageClick(page)}
                            >
                              <LuPencilLine size={20} />
                            </button>
                            <button
                              className="p-2 text-sm bg-[#131327] text-[#fff] rounded whitespace-nowrap"
                              onClick={() =>
                                handleAddComponent(page._id, page?.name)
                              }
                            >
                              + Add Component
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      {isModalOpen && (
        <AddNewPage
          handleClose={handleCloseModal}
          pageId={selectedPage?._id}
          existingData={selectedPage || undefined}
          metaKeys={metaKeys}
          fetchData={fetchData}
        />
      )}
      {isPagePreview && (
        <PreviewPage
          isOpen={isPagePreview}
          onClose={closePreviewPage}
          pageName={previewPageName}
        />
      )}
    </React.Fragment>
  );
}
