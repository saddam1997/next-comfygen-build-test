import React from "react";
import CustomImage from "./CustomImage";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";

export default function BlogSection(props:any) {
  
  return (
    <div className="bg-[#F3F4F6] lg:py-16 py-10">
      <section className=" mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
        <div className="flex items-center justify-center">
          <div className="space-y-3">
            <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Our Latest Blog </h2>
            <p className="text-base text-[#212121] font-normal text-center">
              We have the knowledge and skills to work on diverse niches with high-performing solutions. Get insights about the tech revolutions and their significance through our updated blogs to acknowledge our expertise.
            </p>
          </div>
        </div>
        <div className="grid gap-4 mx-auto lg:grid-cols-3 md:grid-cols-2 xl:gap-14 cursor-pointer mt-8">
          {props.initialData && props.initialData.length > 0
            ? props.initialData.map((element: any, index: any) => (
                element ? (
                  <a 
                    href={element.link} 
                   key={index}
                    className="block"
                  >
                    <div className="p-6 space-y-4 overflow-hidden text-left transition duration-150 bg-[#fff] border border-[#000000]/10 rounded-xl group">
                      <div className="object-cover w-full overflow-hidden">
                        <CustomImage
                          className="rounded-xl"
                          width={1280}
                          height={720}
                          src={
                            element.og_image
                              ? element.og_image
                              : "https://www.comfygen.com/images/defaultImage.png"
                          }
                          loader={uploadcareLoader}
                          unoptimized={true}
                          alt="imgs"
                        />
                      </div>
                      <div className="flex justify-between items-center ">
                        <div>
                          <button className="text-[#000] text-base rounded-full border border-[#000] py-1.5 px-5">Categories</button>
                        </div>
                        <div>
                          <button className="text-[#000] text-base flex items-center gap-2 "><FaCalendarAlt /> 4 Aug 2024</button>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between space-y-3">
                        <h3
                          className="line-clamp-2 group-hover:text-[#5556D1] font-semibold text-black text-xl"
                          dangerouslySetInnerHTML={{ __html: element.title }}
                        ></h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <p className="text-base text-black line-clamp-3">
                              {element.description ? element.description : null}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <button className="text-lg text-[#000000] flex items-center group-hover:text-[#5556D1] ">Learn More <MdOutlineNavigateNext size={24} /></button>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : null
              ))
            : null}
        </div>
      </section>
    </div>
  );
}