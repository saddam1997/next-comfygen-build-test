// "use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeadingTwo from "../../ui/HeadingTwo";

const DeliverySectionClient = ({ title, description, apps }: any) => {

  // ✅ only ONE state (clean)
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const hasMore = visibleCount < apps.length;

  return (
    <section className="bg-gradient-to-br mb-10 mt-10 from-slate-50 to-gray-100 lg:py-20 py-12 relative overflow-hidden">

      <div className="relative z-10 2xl:w-10/12 w-11/12 mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <HeadingTwo color={"black"} text={title} />
          <p
            className="text-base font-normal mt-2 lg:w-2/3 mx-auto"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {apps.map((app: any, index: number) => {
            const isHidden = index >= visibleCount;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 border border-gray-100 
                ${isHidden ? "hidden" : ""}`} // ✅ hide via CSS (not remove from DOM)
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    height={740}
                    width={1240}
                    loading="lazy"
                    unoptimized
                    sizes="(max-width:768px) 100vw, 300px"
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-white translate-y-[80%] group-hover:translate-y-0 group-hover:py-2 transition-transform duration-500 ease-out flex flex-col px-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {app.link ? (
                      <Link href={app.link}>{app.title}</Link>
                    ) : (
                      <span>{app.title}</span>
                    )}
                  </h3>

                  <p className="text-gray-600 pt-8 text-sm leading-relaxed">
                    {app.description.replace(/<[^>]*>?/gm, "")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Show More
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default DeliverySectionClient;