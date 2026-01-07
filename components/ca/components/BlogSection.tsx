import React from "react";
import { useRouter } from "next/router";
import CustomImage from "./CustomImage";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
export default function BlogSection(props: any) {
  const router = useRouter();
  return (
    <div className="bg-white">
       <section className=" space-y-8 py-8 lg:py-20 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
      <div className="flex items-center justify-center">
        <div className="space-y-2 text-center">
          <h3 className="text-base text-blue-600 2xl:text-2xl xl:text-xl md:text-lg ">
            {" "}
            Our Blog{" "}
          </h3>
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] ">
            Latest Post
          </h2>
        </div>
      </div>
      <div className="grid gap-10 py-5 mx-auto lg:grid-cols-3 md:grid-cols-2 xl:gap-6">
        {props.initialData &&
          props.initialData &&
          props.initialData &&
          props.initialData.length > 0
          ? props.initialData.map((element: any, index: any) => (
            <div key={index}>
              {element && element && element ? (
                <div
                  key={index}
                  className="p-6 space-y-4 overflow-hidden text-left transition duration-150 bg-slate-100 rounded-xl group "
                >
                  <div className="object-cover w-full overflow-hidden ">
                    <a href={element.link}>
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
                    </a>
                  </div>
                  <div className="flex flex-col justify-between py-4 space-y-4">
                    {/* <h3 className="text-xl font-bold line-clamp-2 text-slate-800 group-hover:text-blue-600">
                      <a href={element.link}>  {""}
                        {element && element.title ? element.title : null}
                      </a>
                    </h3> */}
                    <h3 className="text-xl font-bold line-clamp-2 text-slate-800 group-hover:text-blue-600">
                      <a href={element.link} dangerouslySetInnerHTML={{ __html: element.title }}></a>
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 ">
                        <p className="text-base text-slate-600 line-clamp-3"> {element && element.description ? element.description : null}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))
          : null}
      </div>
    </section>
    </div>
   
  );
}
