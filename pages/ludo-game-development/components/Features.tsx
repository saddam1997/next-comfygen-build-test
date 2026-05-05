import Image from "next/image";
import React, { useState } from "react";

const Index = ({ Data = [] }: any) => {
  const [admin, setAdmin] = useState(0);

  const gameFeatures = Array.isArray(Data) ? Data.slice(0, 12) : [];
  const adminFeatures = Array.isArray(Data) ? Data.slice(12, 18) : [];

  return (
    <section className="w-full bg-end bg-no-repeat bg-cover">
      <div className="w-full lg:py-16 py-10 bg-gradient-to-r from-[#272868]/90 to-[#5556D1]/90">
        <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">

          {/* TEXT SECTION */}
          <div className="space-y-2 lg:text-center text-white">
            <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Features of Ludo Gaming Application
            </h2>

            <p className="text-base">
              Comfygen believes to match the current market standards. Our ludo game app programmers implement updated features in the application.
            </p>

            <div className="py-10">

              {/* TABS */}
              <div className="grid grid-cols-2 text-center border-b">
                <span
                  onClick={() => setAdmin(0)}
                  className={
                    admin === 0
                      ? "border-b-2 border-b-[#fff] text-[#fff] font-bold px-6 py-2 lg:text-2xl text-lg capitalize cursor-pointer"
                      : "text-white px-6 py-2 lg:text-2xl text-lg font-bold capitalize cursor-pointer"
                  }
                >
                  Game Features
                </span>

                <span
                  onClick={() => setAdmin(1)}
                  className={
                    admin === 1
                      ? "border-b-2 border-b-[#fff] text-[#fff] font-bold px-6 py-2 lg:text-2xl text-lg capitalize cursor-pointer"
                      : "text-white px-6 py-2 lg:text-2xl text-lg font-bold capitalize cursor-pointer"
                  }
                >
                  Admin Panel
                </span>
              </div>

              {/* GAME FEATURES */}
              {admin === 0 && (
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-3 py-10">
                  {gameFeatures.map((elem: any, index: number) => {
                    const { title, img } = elem || {};
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center space-y-2"
                      >
                        <Image
                          className="rounded-md"
                          alt={title || "feature"}
                          src={img || "/placeholder.png"}
                          width={60}
                          height={60}
                        />
                        <p className="text-[#fff] text-center">{title}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* ADMIN FEATURES */}
              {admin === 1 && (
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 md:grid-cols-3 py-10">
                  {adminFeatures.map((elem: any, index: number) => {
                    const { title, img } = elem || {};
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center space-y-2"
                      >
                        <Image
                          className="rounded-md"
                          alt={title || "feature"}
                          src={img || "/placeholder.png"}
                          width={60}
                          height={60}
                        />
                        <p className="text-[#fff] text-center">{title}</p>
                      </div>
                    );
                  })}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;