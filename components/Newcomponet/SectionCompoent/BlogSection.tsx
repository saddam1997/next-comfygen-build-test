"use client";

import React from "react";
import CustomImage from "../comman/CustomImage";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function BlogSection(props: any) {
  return (
    <section className="bg-[#F3F4F6] lg:py-16 py-10">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">

        {/* ================= HEADING ================= */}
        <div className="flex items-center justify-center">
          <div className="space-y-3 max-w-3xl">
            <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
              Our Latest Blog
            </h2>
            <p className="text-base text-[#212121] font-normal text-center">
              We have the knowledge and skills to work on diverse niches with
              high-performing solutions. Get insights about the tech revolutions
              and their significance through our updated blogs.
            </p>
          </div>
        </div>

        {/* ================= BLOG LIST ================= */}
        <div
          className="
            mt-8
            flex gap-4 overflow-x-auto pb-4
            snap-x snap-mandatory
            no-scrollbar
            md:grid md:overflow-visible md:snap-none
            md:grid-cols-1 lg:grid-cols-3
            xl:gap-14
          "
        >
          {props?.initialData?.length > 0 &&
            props.initialData.map((element: any, index: number) =>
              element ? (
                <a
                  href={element?.link}
                  key={index}
                  className="
                    block
                    min-w-[85%]
                    sm:min-w-[70%]
                    md:min-w-0
                    snap-center
                  "
                >
                  <article className="p-6 space-y-4 bg-white border border-black/10 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                    
                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-xl">
                      <CustomImage
                        className="rounded-xl object-cover"
                        src={
                          element?.og_image
                            ? element?.og_image
                            : "https://www.comfygen.com/images/defaultImage.png"
                        }
                        alt={element?.title || "Blog image"}
                      />
                    </div>

                    {/* CATEGORY */}
                    <div className="flex justify-between items-center">
                      <button className="text-sm border border-black rounded-full px-4 py-1">
                        Categories
                      </button>
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-3">
                      <h3
                        className=" font-semibold text-xl text-black hover:text-[#5556D1]"
                        dangerouslySetInnerHTML={{ __html: element?.title }}
                      />
                      {element?.description && (
                        <p className="text-base text-black line-clamp-3">
                          {element.description}
                        </p>
                      )}
                    </div>

                    {/* CTA */}
                    <div>
                      <span className="text-lg flex items-center gap-1 text-black hover:text-[#5556D1]">
                        Learn More <MdOutlineNavigateNext size={22} />
                      </span>
                    </div>
                  </article>
                </a>
              ) : null
            )}
        </div>
      </div>
    </section>
  );
}
