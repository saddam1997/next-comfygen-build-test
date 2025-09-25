"use client";

import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import ComponentLibrary from "./componentLibrary";
import {
  axiosPrivate,
  deletePageComponent,
  fetchPageComponentList2,
} from "../../../../super-admin-components/apiFunctions";
import { useSearchParams } from "next/navigation";
import ComponentForm from "./ComponentForm";
import { MdOutlinePreview } from "react-icons/md";
import PreviewModal from "./PreviewModal";
import {componentsMap} from "../../../../super-admin-components/AllComponents";


let TYPES: string[] = [];
const getTypes = async () => {
  try {
    const res = await axiosPrivate.get("/component/types");
    TYPES = res?.data?.data || [];
  } catch (errror) {
    console.error(errror);
    return [];
  }
};
getTypes();
interface Component {
  _id: string;
  name: string;
  thumbImageUrl: string;
  title: string;
  props: { key: string; type: string }[];
  description: string;
  isDisable: boolean;
}

interface ComponentPageForm {
  pageId: string;
  componentId: string;
  propValues: { key: string; type: string; value: string }[];
}

// interface ObjectProp {
//   key: string;
//   type: string;
// }

// interface ArrayObjectProp {
//   properties: ObjectProp[];
// }
interface ObjectProp {
  key: string;
  value: string;
  type: string;
  stringArray?: string[];
  objectProps?: ObjectProp[];
  arrayObjectProps?: ArrayObjectProp[];
}

interface ArrayObjectProp {
  properties: ObjectProp[];
}
// interface Prop {
//   key: string;
//   type: string;
//   stringArray?: string[];
//   objectProps?: ObjectProp[];
//   arrayObjectProps?: ArrayObjectProp[];
// }
interface Prop {
  key: string;
  value: string;
  type: (typeof TYPES)[number];
  stringArray?: string[];
  objectProps?: ObjectProp[];
  arrayObjectProps?: ArrayObjectProp[];
}
interface ComponentDataInterface {
  _id?: string;
  name: string;
  path: string;
  props: Prop[];
  createdAt?: number | string;
  isDisable?: boolean;
}

interface ComponentDataTypes {
  _id: string;
  componentId: ComponentDataInterface;
  // values: [];
  props: Prop[];
  propData: Prop[];
  componentData?: any;
  pageId: string;
  pageNumber: number;
  slug: string;
  componentNumber: number;
  isDisable: boolean;
  createdAt: number;
}

interface MetaKeyValue {
  key: string;
  value: string;
  type: "MEDIA" | "TEXT";
}

interface IProduct {
  name: string;
  imageUrl: string;
  description: string;
  ratingValue: string;
  reviewCount: string;
}

// Interface for Service schema
interface IService {
  name: string;
  description: string;
  url: string;
  mainEntityOfPage: string;
  serviceType: string[];
}

interface PageDataType {
  _id: string;
  name: string;
  url: string;
  category: string;
  author: string;
  siteTitle: string;
  metaDesc: string;
  metaImgUrl: string;
  metaTitle: string;
  components: any[];
  metsKeyValues: MetaKeyValue[];
  linkKeyValues: MetaKeyValue[];
  updatedAt: number;
  createdAt: number;
  faqSchema: Array<{
    question: string;
    answer: string;
  }>;
  productSchema: IProduct | null, 
  serviceSchema: IService | null, 
}

export default function AllComponents() {
  const urlSearch = useSearchParams();
  const pageId = urlSearch.get("pageId");
  const pageName = urlSearch.get("name") || "Invalid Url";
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [previewComponentName, setPreviewComponentName] = useState<string>("");
  const [previewComponentValue, setPreviewComponentValue] = useState<any>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const openModalForHeader = false;
  const closeModalForHeader = () => {};
  const [selectedPageData, setSelectedPageData] = useState<PageDataType>(null);
  const [selectedComponents, setSelectedComponents] = useState<
    ComponentDataTypes[]
  >([]);
  const [activeComponent, setActiveComponent] =
    useState<ComponentDataTypes | null>(null);
  const [selectedComponentsIds, setSelectedComponentsIds] = useState<
    Array<string>
  >([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchPageComponentList2({ pageId });
    if (data) {
      setSelectedComponents(data?.list);
      setSelectedPageData(data?.pageData);
      // setActiveComponent(data?.list?.[0])
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [pageId, urlSearch]);

  useEffect(() => {
    if (selectedComponents && Array.isArray(selectedComponents)) {
      setSelectedComponentsIds(
        selectedComponents?.map((d) => d?.componentId?._id)
      );
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComponentsIds([])
  };
  const handleDelete = async (id: string) => {
    await deletePageComponent(id);
    await fetchData();
    setSelectedComponents((prevItems) =>
      prevItems.filter((item) => item._id !== id)
    );
    if (activeComponent?._id === id) {
      setActiveComponent(null);
    }
  };

  const toggleSelection = (componentId: string) => {
    if (selectedComponentsIds.includes(componentId)) {
      setSelectedComponentsIds((prev) =>
        prev.filter((id) => id != componentId)
      );
    } else {
      setSelectedComponentsIds((prev) => [...prev, componentId]);
    }
  };

  const previewComponent = (name: string) => {
    setPreviewComponentName(name);
    setPreviewComponentValue((v) => selectedComponents?.find(ele => ele?.componentId?.name === name)?.componentData);
    setPreviewOpen(true);
  };
  const previewClose = () => {
    setPreviewComponentName("");
    setPreviewComponentValue(null);
    setPreviewOpen(false);
  };

  const openEditPreview = (ele: ComponentDataTypes | null) => {
    setActiveComponent(ele);
  }

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <div className="h-full w-full flex flex-col sm:flex-row">
          {/* Left section */}
          <div className={`${activeComponent ? "sm:w-1/3" : ""} flex flex-col justify-start items-start sm:mr-4 mt-8`}>
            <div className="flex justify-between items-center w-full px-4 py-2 border-b-2 border-slate-300">
              <h1 className="text-2xl font-bold">
                {pageName} </h1>
              {/* <h1 className='text-2xl font-bold'>Component ({selectedComponents.length})</h1> */}
              <button
                className="p-2 bg-[#131327] text-white rounded"
                onClick={openModal}
              >
                + Add New Component
              </button>
            </div>
            <div className="space-y-2 w-full p-2 max-h-screen overflow-y-auto">
              {Array.isArray(selectedComponents) &&
                selectedComponents.map((ele, idx) => (
                  <div
                    key={idx}
                    // className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-300 rounded-lg w-full h-96"
                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-300 rounded-lg w-full justify-between cursor-pointer"
                    onClick={() => openEditPreview(ele)}
                    // onClick={() => setActiveComponent(ele)}
                  >
                    <div className="flex items-center justify-between mx-3 mb-0 border-b border-slate-300 pt-3 pb-2 px-1">
                      <h1 className="text-md font-medium text-slate-800">
                        {ele?.componentNumber + ". "}
                        {(ele?.componentId?.name ?? "Name").replaceAll(
                          "_",
                          " "
                        )}
                      </h1>
                      {/* <h1 className="text-md font-medium text-slate-800">{(ele?.componentId?.path ?? "path").replaceAll("_", " ")}</h1> */}
                      <div className="flex items-center gap-2">
                        {/* <FaAngleDown className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20" /> */}
                        {/* <FaAngleUp className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20" /> */}
                        <RiEditLine  className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20"
                          onClick={() => openEditPreview(ele)} />
                        <MdOutlinePreview
                          className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20"
                          // onClick={() =>
                          //   previewComponent(
                          //     ele.componentId?.name,
                          //   )
                          // }
                          onClick={(e) =>{
                            e.stopPropagation();
                            openEditPreview(
                              null
                            )
                          }}
                        />
                        <RiDeleteBinLine
                          className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20"
                          onClick={() => handleDelete(ele._id)}
                        />
                      </div>
                    </div>
                    {/* <div className="max-w-screen-lg mx-auto p-4 flex flex-col items-center justify-center space-y-4 bg-gray-100 rounded-lg shadow-md cursor-not-allowed"> */}
                    <div className="p-2">
                      {/* <div className="object-cover h-80 border border-slate-300 mx-6 w-11/12 pointer-events-none select-none flex items-center justify-center">
                        <div className="w-full h-full"> */}
                      <div className="">
                        {(() => {
                          const Component =
                            componentsMap[ele.componentId?.name];
                          if (
                            ele.componentId?.name === "HeroSectionForAllPages"
                          ) {
                            if(activeComponent) {
                              return;
                            }
                            return Component ? (
                              <Component
                                key={idx}
                                {...ele.componentData}
                                openModal={openModalForHeader}
                                talkToExpertModal={talkToExpertModal}
                                setTalkToExpertModal={setTalkToExpertModal}
                                closeModal={closeModalForHeader}
                              />
                            ) : null;
                          } else {
                            if(activeComponent) {
                              return;
                            }
                            return Component ? (
                              <Component key={idx} {...ele.componentData} />
                            ) : null;
                          }
                        })()}
                      </div>
                      {/* </div>
                      </div> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* right section */}
          {activeComponent && <ComponentForm
            componentValue={activeComponent}
            fetchData={fetchData}
            previewComponent={previewComponent}
            pageName={pageName}
            pageId={pageId}
            selectedPageData={selectedPageData}
          ></ComponentForm>}
        </div>
      </div>
      {isModalOpen && (
        <ComponentLibrary
          toggleSelection={toggleSelection}
          handleClose={closeModal}
          fetchData={fetchData}
          selectedComponents={selectedComponentsIds}
          setSelectedComponents={setSelectedComponentsIds}
        />
      )}
      {previewOpen && (
        <PreviewModal
          isOpen={previewOpen}
          onClose={previewClose}
          componentName={previewComponentName}
          componentValue={previewComponentValue}
        ></PreviewModal>
      )}
    </React.Fragment>
  );
}
