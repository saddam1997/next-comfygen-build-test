import React from "react";
import Image from "next/image";

function SearchCareer({
  placeholder = "Search",
  onChange = null,
  childrenContent = "Start Here",
}) {
  return (
    <div className="relative lg:inline-block">
      <input
        className="px-6 w-full py-3.5 border border-[#000000]/50 rounded-full bg-transparent outline-none text-base text-[#000]/50"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <button className="md:text-base text-sm absolute top-2 right-3 font-medium text-white bg-[#5556D1] rounded-full md:px-6 px-4 py-2 text-center   cursor-pointer transition duration-300  flex gap-1 items-center ">
        {childrenContent}
        <Image
          src="https://www.comfygen.com/image/start-here-button-icon.svg"
          alt=""
          width={20}
          height={15}
          className=""
        />
      </button>
    </div>
  );
}

export default React.memo(SearchCareer);
