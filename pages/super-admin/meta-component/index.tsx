"use client";

import React, { useEffect, useState } from "react";
import { PenSquare } from "lucide-react";
import { getComponentList } from "../../../super-admin-components/apiFunctions";
import { useRouter } from "next/navigation";
import { LuPencilLine } from "react-icons/lu";

interface TableDataType {
  total: number;
  list: [
    {
      _id: string;
      name: string;
      path: string;
      props: [];
      createdAt: string;
    },
  ];
}
const DataTable: React.FC = () => {
  const [tableData, setTableData] = useState<TableDataType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [keyWord, setKeyWord] = useState<string>("");
  const router = useRouter();
  interface FilterTypes {
    keyWord?: string;
  }
  const fetchData = async (filter?: FilterTypes) => {
    setLoading(true);
    const data = await getComponentList(filter);
    if (data) {
      setTableData(data);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (keyWord === "") {

      fetchData();
    }
  }, [keyWord]);
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
const searchComponent = () => {
  fetchData({keyWord: keyWord});
}
  const nevigateToUpdate = (id: string): void => {
    router.push(`/super-admin/meta-component/save?componentId=${id}`);
  };

  return (
    <div className="py-4 md:px-10 px-6 mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search..."
            value={keyWord}
            onChange={(e) => setKeyWord(e.target.value)}
            className="input w-full h-[40px] py-0 px-4 pl-10 border rounded-[8px] outline-none bg-[#F1F4F9] text-[#0d0c22] placeholder-[#9e9ea7] transition-all duration-300 ease-in-out focus:border-[#4d4c4c] focus:bg-white hover:border-[#222222] border-[#13132761]"
          />
          <button
            className="bg-[#F1F4F9] text-[#0d0c22] p-2 text-sm border-[#13132761] rounded-[8px]"
            onClick={() => searchComponent()}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => router.push("/super-admin/meta-component/save")}
          className="px-4 py-3 bg-[#131327] text-white rounded-lg"
        >
          + Add New Component
        </button>
      </div>
      <div className="overflow-x-auto max-h-[68vh] overflow-y-auto mt-4">
        <table className="table-auto w-full border border-gray-200 bg-[#F1F4F9]">
          <thead>
            <tr className="bg-gray-50 text-sm text-black font-medium border-b">
              <th className="px-6 py-3 text-center">S.No.</th>
              <th className="px-6 py-3 text-left">Name</th>
              {/* <th className="px-6 py-3 text-left">Slug</th> */}
              <th className="px-6 py-3 text-left">Created At</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData?.list &&
              tableData.list.map((item, i) => (
                <tr
                  key={i}
                  className="text-sm text-black border-b font-medium hover:bg-gray-100"
                >
                  <td className="px-6 py-3 text-center">{++i}</td>
                  <td className="px-6 py-3">{item.name}</td>
                  {/* <td className="px-6 py-3">{item.path}</td> */}
                  <td className="px-6 py-3">{formatDate(item.createdAt)}</td>
                  <td className="px-6 py-3"> active</td>
                  <td className="px-6 py-3 text-center">
                    <button
                      onClick={() => nevigateToUpdate(item._id)}
                      className="p-2 bg-[#0000001A] text-[#000000] rounded"
                    >
                      <LuPencilLine size={20} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
