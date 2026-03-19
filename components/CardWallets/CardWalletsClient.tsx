"use client";

import React, { useState, useEffect } from "react";

const CardWalletsClient = ({ featuresData = [], grid }) => {
  const [openedFeature, setOpenedFeature] = useState<any | null>(null);

  useEffect(() => {
    if (featuresData.length > 0) {
      setOpenedFeature(featuresData[0]);
    }
  }, [featuresData]);

  const handleButtonClick = (feature: any) => {
    if (openedFeature?.id !== feature.id) {
      setOpenedFeature(feature);
    }
  };

  if (!featuresData || featuresData.length === 0) return null;

  return (
    <>
      {/* TAB BUTTONS */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-${grid} gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10`}
      >
        {featuresData.map((feature: any) => (
          <div
            key={feature.id}
            className={`rounded-full flex justify-center border cursor-pointer ${
              openedFeature?.id === feature.id
                ? "bg-[#5556D1] text-white border-[#5556D1]"
                : "bg-white hover:bg-gray-100 text-black border-[#5556D1]"
            }`}
          >
            <button
              className="text-lg font-medium p-2 w-full"
              onMouseEnter={() => handleButtonClick(feature)}
            >
              {feature.title}
            </button>
          </div>
        ))}
      </div>

      {/* DETAILS */}
      {openedFeature && (
        <div className="mt-8 mx-auto 2xl:w-10/12 w-11/12">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-[#272868] mb-4">
              {openedFeature?.titlewallet}
            </h3>

            {openedFeature?.description && (
              <p className="text-gray-700 max-w-2/3 mx-auto">
                {openedFeature.description}
              </p>
            )}
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {openedFeature?.additionalDetails?.map(
              (detail: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border"
                >
                  <h3
                    dangerouslySetInnerHTML={{ __html: detail?.details }}
                    className="text-xl font-semibold mb-2 text-[#272868]"
                  />
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: detail?.content }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CardWalletsClient;