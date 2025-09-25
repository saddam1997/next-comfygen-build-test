/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TbCircleCheck } from "react-icons/tb";
import {
  getComponentList,
  addPageComponent,
} from "../../../../super-admin-components/apiFunctions";
import { SyncLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import CustomButton from "../../../../super-admin-components/CustomButton";

interface Component {
  _id: string;
  pageId: string;
  componentId: {
    _id: string;
    name: string;
    path: string;
    props: [];
  };
  pageNumber: number;
  slug: string;
  values: [];
  isDisable: boolean;
  createdAt: number;
  thumbImageUrl?: string;
}

interface ComponentV2 {
  _id: string;
  name: string;
  path: string;
  props: [];
  isDisable: boolean;
  createdAt: number;
}
interface LibTypes {
  handleClose: () => void;
  fetchData: () => void;
  toggleSelection: (id: string) => void;
  selectedComponents: string[];
  setSelectedComponents: (ids: string[]) => void;
}
const ComponentLibrary: React.FC<LibTypes> = ({
  handleClose,
  fetchData,
  toggleSelection,
  selectedComponents,
}) => {
  const urlParams = useSearchParams();
  const pageId = urlParams.get("pageId");
  const [components, setComponents] = useState<ComponentV2[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  // const [selectedComponents, setSelectedComponents] = useState<Set<string>>(new Set());

  const fetchComponent = async () => {
    setLoading(true);
    try {
      const fetchedComponent = await getComponentList({ keyWord: searchValue });
      setComponents(fetchedComponent?.list || []);
    } catch (error) {
      console.error("Error fetching pages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchValue === "") {
      fetchComponent();
    }
  }, [searchValue]);

  // const toggleSelection = (componentId: string) => {
  //   const updatedSelection = new Set(selectedComponents);
  //   if (updatedSelection.has(componentId)) {
  //     updatedSelection.delete(componentId);
  //   } else {
  //     updatedSelection.add(componentId);
  //   }
  //   setSelectedComponents(updatedSelection);
  // };

  const handleAddComponents = async () => {
    try {
      setBtnLoading(true);
      const selectedData = components.filter((component) =>
        selectedComponents.includes(component._id)
      );
      await Promise.all(
        selectedData.map((comp) => addPageComponent(pageId, comp._id))
      );
      await fetchData();
      handleClose();
    } finally {
      setBtnLoading(false);
    }
  };

  const searchComponent = async () => {
    fetchComponent();
  };

  return (
    <div className="p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <SyncLoader color="#1b2c55" size={15} />
        </div>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg font-[Roboto] w-3/5 h-4/5 flex flex-col overflow-hidden">
            <div className="p-4 border-b-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Component Library</h2>
                <button
                  className="p-1  rounded-full text-black bg-black/10 hover:bg-black/40 hover:text-white"
                  onClick={handleClose}
                >
                  <IoMdClose className="h-6 w-6" />
                </button>
              </div>
              <div className="flex justify-between gap-4">
                <div className="w-full">
                  <input
                    type="search"
                    placeholder="Search here..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="input w-full h-[40px] py-0 px-4 pl-10 border rounded-[8px] outline-none bg-[#F1F4F9] text-[#0d0c22] placeholder-[#9e9ea7] transition-all duration-300 ease-in-out focus:border-[#4d4c4c] focus:bg-white hover:border-[#222222] border-[#13132761]"
                  />
                </div>
                <button
                  className="bg-[#F1F4F9] text-[#0d0c22] p-2 text-sm border-[#13132761] rounded-[8px]"
                  onClick={() => searchComponent()}
                >
                  Search
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.isArray(components) &&
                  components.map((ele, idx) => (
                    <div
                      key={idx}
                      className="relative bg-white shadow-sm border border-slate-300 rounded h-80"
                    >
                      <div className="flex items-center justify-between mx-6 py-1 px-1">
                        <h1 className="text-md font-semibold text-slate-800">
                          {(ele?.name ?? "Comfygen").replaceAll("_", " ")}
                        </h1>
                        <div className="flex items-center gap-2">
                          <TbCircleCheck
                            className={`p-1 rounded cursor-pointer h-8 w-8 ${selectedComponents.includes(ele._id) ? "fill-[#1908991a] text-[#6A5AE0]" : "text-gray-400"}`}
                            onClick={() => toggleSelection(ele._id)}
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <img
                          className="object-cover h-60 border border-slate-300 mx-6 w-11/12"
                          src={
                            "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="p-4 border-t-2 flex justify-end">
              <CustomButton
                children="ADD"
                variant="primary"
                onClick={handleAddComponents}
                disabled={btnLoading}
              ></CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentLibrary;
