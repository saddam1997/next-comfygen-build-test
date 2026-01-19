"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ImArrowRight } from "react-icons/im";

const Features = ({ featuresData = [], grid , heading, description }:any) => {
  const [active, setActive] = useState<any>(null);
  const [view, setView] = useState<"mobile" | "tablet" | "desktop">("desktop");

  /* ---------- VIEW DETECTION ---------- */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setView("mobile");
      else if (window.innerWidth < 1024) setView("tablet");
      else setView("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------- DEFAULT ACTIVE ---------- */
  useEffect(() => {
    if (featuresData.length) setActive(featuresData[0]);
  }, [featuresData]);

  return (
    <section className="bg-[#F5F5F9] lg:py-16 py-10 ">
      {/* HEADER */}
      <div className="text-center space-y-2 max-w-6xl mx-auto px-4">
        <h2 className="xl:text-4xl text-3xl font-bold text-black">
          {heading}
        </h2>
        <p
          className="text-black"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      {/* BUTTON ROW (MOBILE + TABLET) */}
      {(view === "mobile" || view === "tablet") && (
        <div className="mt-8 px-4  overflow-hidden w-full ">
          <div className="flex gap-3 p-4 ">
            {featuresData.map((item: any) => (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className={`w-full py-2.5  rounded-full border text-xs font-medium transition
                  ${
                    active?.id === item.id
                      ? "bg-[#5556D1] text-white border-[#5556D1]"
                      : "bg-white border-gray-300"
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CONTENT BELOW BUTTONS (MOBILE + TABLET) */}
      {(view === "mobile" || view === "tablet") && active && (
        <div className="mt-8 px-3 space-y-6">
          {active.img && (
            <Image
              src={active.img}
              alt={active.title}
              width={640}
              height={360}
              loading="lazy"
              sizes="100vw"
              className="rounded-lg border mx-auto"
            />
          )}

          <div className="space-y-4 px-4">
            {active.additionalDetails?.map((d: any, i: number) => (
              <div key={i} className="flex gap-3 text-black">
                <ImArrowRight className="text-[#5556D1] mt-1" />
                <span dangerouslySetInnerHTML={{ __html: d.details }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DESKTOP VIEW */}
      {view === "desktop" && (
        <>
          {/* BUTTON GRID */}
          <div
            className={`grid grid-cols-${Math.min(
              grid,
              4
            )} gap-4 mx-auto mt-10 2xl:w-10/12 w-11/12`}
          >
            {featuresData.map((item: any) => (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className={`px-4 py-3 text-lg font-medium border rounded-md transition
                  ${
                    active?.id === item.id
                      ? "bg-[#5556D1] text-white border-[#5556D1]"
                      : "bg-white hover:bg-gray-100 border-gray-300"
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* DESKTOP DETAIL */}
          {active && (
            <div className="mt-12 grid grid-cols-2 gap-8 items-center mx-auto 2xl:w-10/12 w-11/12">
              <Image
                src={active.img}
                alt={active.title}
                width={640}
                height={360}
                loading="lazy"
                sizes="50vw"
                className="rounded-lg border"
              />

              <div className="space-y-4">
                {active.additionalDetails?.map((d: any, i: number) => (
                  <div key={i} className="flex gap-3 text-black">
                    <ImArrowRight className="text-[#5556D1] mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: d.details }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Features;
