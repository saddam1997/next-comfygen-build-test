/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdPerson } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

const Header = ({
  isSidebar,
  selectedPage,
}: {
  isSidebar: boolean;
  selectedPage: string;
}) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <section className="border-b">
      <div className="w-full bg-[#F1F4F9] py-3.5 flex justify-between items-center  md:px-10 px-6">
        <p className="font-semibold lg:text-2xl md:text-lg text-base text-[#131327] flex gap-2 items-center">
          {isSidebar === false && (
            <button
              type="button"
              className="h-[35px] w-[35px] bg-slate-200 flex justify-center items-center rounded-full cursor-pointer"
              onClick={() => handleBack()}
            >
              <IoMdArrowBack size={20} />
            </button>
          )}
          {selectedPage}
        </p>
        <div className="flex items-center gap-3 p-1.5 rounded-lg bg-[#6A5AE01A] text-white my-1 border border-neutral-300">
          <div className="">
            <button className="bg-[#5556D1] flex items-center gap-1 py-2 px-4 rounded-lg font-medium">
              <MdPerson size={20} />
              Admin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
