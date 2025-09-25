"use client";

import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import ComponentLibrary from "./componentLibrary";
import {
  UploadImage,
  axiosPrivate,
  deletePageComponent,
  fetchPageComponentList,
} from "../../../../super-admin-components/apiFunctions";
import { useSearchParams } from "next/navigation";
import ComponentForm from "./ComponentForm";
import { MdOutlinePreview } from "react-icons/md";
import dynamic from "next/dynamic";



const componentsMap: { [key: string]: any } = {
  HeroSectionForAllPages: dynamic(() => import('../../../componentsnew/HeroSectionForAllPages')),
  AboutSection: dynamic(() => import('../../../componentsnew/AboutSection')),
  ServicesSec: dynamic(() => import('../../../componentsnew/ServicesSec')),
  TechStack: dynamic(() => import('../../../componentsnew/TechStack')),
  ProcessSec: dynamic(() => import('../../../componentsnew/ProcessSec')),
  ContactFromCenter: dynamic(() => import('../../../componentsnew/ContactFromCenter')),
  IndustriesServe: dynamic(() => import('../../../componentsnew/IndustriesServe')),
  WhyChoose: dynamic(() => import('../../../componentsnew/WhyChooseUs')),
  HireDeveloper: dynamic(() => import('../../../componentsnew/HireDeveloper')),
  Faq: dynamic(() => import('../../../componentsnew/Faq')),

  //
  PortfolioSec: dynamic(() => import("../../../componentsnew/PortfolioSec")),
  LatestTechnology: dynamic(() => import("../../../components/SolutionSec")),
  Craditem: dynamic(() => import("../../../componentsnew/Fullcards")),
  GuidSectionBlockchain: dynamic(() => import("../../../ai-development/components/SocialTab")),

};





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
  pageId: string;
  pageNumber: number;
  slug: string;
  componentNumber: number;
  isDisable: boolean;
  createdAt: number;
}

export default function AllComponents() {
  const urlSearch = useSearchParams();
  const pageId = urlSearch.get("pageId");
  const [isPageAdd, setIsPageAdd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState<
    ComponentDataTypes[]
  >([]);
  const [activeComponent, setActiveComponent] =
    useState<ComponentDataTypes | null>(null);
  const [selectedComponentsIds, setSelectedComponentsIds] = useState<Array<string>>([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchPageComponentList({ pageId });
    if (data) {
      setSelectedComponents(data.list);
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

  const previewComponent = (id: string) => {
    try {
      /// ..........
    } catch (error) {
      console.error("Error at previewComponent", error);
    }
  };

  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <div className="h-full w-full flex flex-col sm:flex-row">
          {/* Left section */}
          <div className="sm:w-1/3 flex flex-col justify-start items-start sm:mr-4 mt-8">
            <div className="flex justify-between items-center w-full px-4 py-2 border-b-2 border-slate-300">
              <h1 className="text-2xl font-bold">Component </h1>
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
                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-300 rounded-lg w-full h-96"
                    onClick={() => setActiveComponent(ele)}
                  >
                    <div className="flex items-center justify-between mx-3 mb-0 border-b border-slate-300 pt-3 pb-2 px-1">
                      <h1 className="text-md font-medium text-slate-800">
                        {(ele?.componentId?.name ?? "Name").replaceAll(
                          "_",
                          " "
                        )}
                      </h1>
                      {/* <h1 className="text-md font-medium text-slate-800">{(ele?.componentId?.path ?? "path").replaceAll("_", " ")}</h1> */}
                      <div className="flex items-center gap-2">
                        {/* <FaAngleDown className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20" /> */}
                        {/* <FaAngleUp className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20" /> */}
                        <MdOutlinePreview
                          className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20"
                          onClick={() => previewComponent(ele._id)}
                        />
                        <RiDeleteBinLine
                          className="p-1 bg-black/10 h-6 w-6 rounded cursor-pointer hover:bg-black/20"
                          onClick={() => handleDelete(ele._id)}
                        />
                      </div>
                    </div>
                    <div className="p-2">
                      <img
                        className="object-cover h-80 border border-slate-300 mx-6 w-11/12"
                        src={
                          "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
                        }
                        alt={ele?.componentId?.name ?? "Name"}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* right section */}
          <ComponentForm
            componentValue={activeComponent}
            fetchData={fetchData}
          ></ComponentForm>
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
    </React.Fragment>
  );
}
