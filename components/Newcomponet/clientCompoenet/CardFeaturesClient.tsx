// "use client";

import { useState } from "react";

const CardFeaturesClient = ({ featuresData, grid }) => {

  const [activeId, setActiveId] = useState(
    featuresData.length > 0 ? featuresData[0].id : null
  );

  return (
    <>
      {/* Buttons */}
      <div className={`grid grid-cols-1 sm:grid-cols-${grid} gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10`}>
        {featuresData.map((feature: any) => (
          <div
            key={feature.id}
            className={`rounded-full flex justify-center border cursor-pointer ${
              activeId === feature.id
                ? " bg-[#5556D1] text-white border-gray-300"
                : "bg-white text-black border-[#5556D1]"
            }`}
          >
            <button
              className="text-lg font-medium p-2 w-full"
              onMouseEnter={() => setActiveId(feature.id)}
            >
              {feature.title}
            </button>
          </div>
        ))}
      </div>

      {/* 🔥 IMPORTANT PART */}
      {/* Render ALL tab contents */}
      <div className="mt-8 mx-auto 2xl:w-10/12 w-11/12">

        {featuresData.map((feature: any) => (
          <div
            key={feature.id}
            className={`${activeId === feature.id ? "block" : "hidden"}`}
          >
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {feature.additionalDetails?.map((detail: any, index: number) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#272868]" dangerouslySetInnerHTML={{ __html:detail.details }}>
                    
                  </h3>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html:detail.content }}>
                 
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default CardFeaturesClient;