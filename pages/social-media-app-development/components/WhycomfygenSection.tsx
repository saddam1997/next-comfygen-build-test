import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { MdAdd, MdRemove } from "react-icons/md";
import { FcNext } from "react-icons/fc";
import { FiChevronDown } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

export default function WhycomfygenSection({ Qa, Whycomfygen }) {
  const [currentCount, setCurrentCount] = useState("");
  const data = Qa;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="py-20 bg-white">
        <div className="items-start  w-11/12 mx-auto space-y-10 lg:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:space-x-10 lg:space-y-0">
          <div className="lg:flex items-start  lg:space-x-10 space-y-6 w-full">
        
            <div className="w-full space-y-6  lg:text-left  Features-social h-16">
              {Qa.map((elem: any, index: any) => {
                const { title, btn, desc, desc1, num, url, head, img } = elem;
                return (
                  <div key={num} className="w-full space-y-6 lg:text-left ">
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold text-dark lg:text-4xl">
                        {title}
                      </h2>
                    </div>
                    <div>
                      <p className="text-base text-dark">
                        {desc}
                      </p>
                      <p className="text-base text-white">
                        {desc1}
                      </p>
                    </div>
                    <div className="space-y-3 mt-4">
                      <Image src={img} alt="" width={540} height={650} />
                    </div>

                    {/* <div className="flex lg:justify-start justify-center">
                      <Link href="https://api.whatsapp.com/send?phone=919587867258" passHref={true}>
                        <button className=" bg-white text-black rounded-lg lg:px-32 px-16 hover:scale-75 transition-all duration-500 ease-in py-5 text-2xl">Talk To Consultant</button>
                      </Link>
                    </div> */}
                  </div>
                );
              })}
            </div>
            <div className="w-full space-y-4 ">
              {Whycomfygen.map((elem: any, index: any) => {
                const { title, num, desc, } = elem;
                return (
                  <div className=" p-0  mt-2 bg-white border-[#ccc] cursor-pointer w-full border-b-2"
                    onClick={() => setCurrentCount(currentCount === index ? false : index)}>
                    <div key={num} className="flex justify-between w-full  text-base font-medium text-left text-black bg-white rounded-lg md:text-lg ">
                      <span>{title}</span>

                      {currentCount === index ?
                        <div className="bg-[#BA68C8] text-white p-4">
                          <MdArrowForwardIos size={26}  />
                        </div>

                        :
                        <div className="bg-[#ccc] p-4 ">
                          <FiChevronDown size={26} />
                        </div>


                      }

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
