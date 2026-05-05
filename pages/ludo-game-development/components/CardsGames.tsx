import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Index = ({ Data = {}, GameCardData = [] }: any) => {
  const [showContent, setShowContent] = useState(false);

  const mainData = Array.isArray(Data) ? Data : [];
  const extraData = Array.isArray(GameCardData) ? GameCardData : [];

  return (
    <section className="bg-[#fff]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">

        {/* TITLE */}
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
            Mark Your Presence in Web/App-based Top Cards Games Development via Comfygen
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6">

          {/* FIRST 6 ITEMS */}
          {mainData.slice(0, 6).map((elem: any, i: number) => {
            const { title, url, img } = elem || {};
            return (
              <div key={i} className="w-full">
                <Link href={url || "#"}>
                  <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <Image
                      src={img || "/placeholder.png"}
                      alt={title || "card"}
                      width={730}
                      height={419}
                      className="w-full"
                    />
                    <div className="p-4 bg-[#5556D1]/80 flex flex-col">
                      <h5 className="text-white text-2xl font-bold text-center">
                        {title}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

          {/* EXTRA CONTENT */}
          {showContent &&
            extraData.slice(6, 17).map((elem: any, i: number) => {
              const { title, url, img } = elem || {};
              return (
                <div key={i} className="w-full">
                  <Link href={url || "#"}>
                    <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                      <Image
                        src={img || "/placeholder.png"}
                        alt={title || "card"}
                        width={730}
                        height={419}
                        className="w-full"
                      />
                      <div className="p-4 bg-[#5556D1]/80 flex flex-col">
                        <h5 className="text-white text-2xl font-bold text-center">
                          {title}
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center items-center mt-8">
          <button
            className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize transition duration-300"
            onClick={() => setShowContent(!showContent)}
          >
            {showContent ? "Load Less" : "Load More"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Index;