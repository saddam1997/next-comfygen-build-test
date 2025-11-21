import Link from "next/link";
import { useState } from "react";
import { MdAdd, MdOutlineArrowOutward, MdRemove } from "react-icons/md";
export default function WhycomfygenSection({ Qa, Whycomfygen }) {
  const [currentCount, setCurrentCount] = useState("");
  const data = Qa;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1] ">
        <div className="items-center w-11/12 mx-auto space-y-10 lg:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:space-x-10 lg:space-y-0">
          <div className="lg:flex items-start lg:space-x-10  w-full">
            <div className="w-full lg:text-left">
              {Qa.map((elem: any, index: any) => {
                const { title, btn, desc, desc1, num, url, head } = elem;
                return (
                  <div key={num} className="w-full space-y-6 lg:text-left">
                    <div className="space-y-3">
                      <p className="text-lg font-light text-gray-100 uppercase xl:text-xl">{head}</p>
                      <h2 className="text-2xl font-bold text-white lg:text-4xl">
                        {title}
                      </h2>
                    </div>
                    <div>
                      <p className="text-base text-white">
                        {desc}
                      </p>
                      <p className="text-base text-white">
                        {desc1}
                      </p>
                    </div>
                    <div className="flex lg:justify-start justify-center">
                      <Link href="https://api.whatsapp.com/send?phone=919587867258" passHref={true}>
                        {/* <button className=" bg-white text-black rounded-lg p-4 font-bold text-xl">Talk To Consultant</button> */}
                        <button className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1]  border border-[#fff] px-8 py-2.5 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                          Talk To Consultant <MdOutlineArrowOutward />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full ">
              {Whycomfygen.map((elem: any, index: any) => {
                const { title, num, desc, } = elem;
                return (
                  <div className="p-4 mt-2 bg-white rounded-lg cursor-pointer w-full"
                    onClick={() => setCurrentCount(currentCount === index ? false : index)}>
                    <div key={num} className="flex justify-between w-full text-base font-medium text-left text-black bg-white rounded-lg md:text-lg ">
                      <span>{title}</span>
                      {currentCount === index ?
                        <MdRemove size={26} />
                        :
                        <MdAdd size={26} />}
                    </div>
                    <div className={currentCount === index ? "pt-4 text-sm text-black" : "pt-4 text-sm text-black hidden"}>
                      {desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
