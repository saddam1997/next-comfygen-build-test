
import Image from "next/image";
import React from "react";
import { ChevronRight } from 'lucide-react';
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { parseHTMLString } from "../../lib/parseHTML"

export default function BlogSection(props: any) {
  return (
    <section className=" lg:py-16 py-10">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">

        {/* ================= HEADING ================= */}
        <div className="flex items-center justify-center">
          <div className="space-y-3 max-w-3xl text-center">

            <HeadingTwo color={"black"} text="Our Latest Blog" />
            <ParagraphText color={"black"} text="We have the knowledge and skills to work on diverse niches with
              high-performing solutions. Get insights about the tech revolutions
              and their significance through our updated blogs." />


          </div>
        </div>

        {/* ================= BLOG LIST ================= */}
        <div
          className="
            mt-8
            flex gap-4 overflow-x-auto pb-4
            snap-x snap-mandatory
           
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


                      <Image
                        src={element?.og_image}
                        alt={element?.title}
                        width={1280}
                        height={720}

                        quality={70}
                        loading="lazy"
                        fetchPriority="low"      // ✅ optimal balance
                        placeholder="empty" // ✅ remove heavy blur
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-3">
                      <h3 className=" font-semibold text-xl text-black hover:text-[#5556D1]">
                        {parseHTMLString(element?.title)}</h3>
                      {element?.description && (
                        <p className="text-base text-black line-clamp-3" >
                          {parseHTMLString(element.description)}
                        </p>
                      )}
                    </div>

                    {/* CTA */}
                    <div>
                      <span className="text-lg flex items-center gap-1 text-black hover:text-[#5556D1]">
                        Learn More <ChevronRight size={22} />
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
