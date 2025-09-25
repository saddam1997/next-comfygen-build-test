import React, { useState } from "react";
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  icon: JSX.Element;
  img: string;
  additionalDetails: { emoji?: string; details: string; content?: string }[];
}

interface FeaturesProps {
  featuresData: Feature[];
  heading?: string;
}

const Features: React.FC<FeaturesProps> = ({ featuresData, heading = "Essential Features for eCommerce App" }) => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(featuresData && featuresData[0] ? featuresData[0] : null);

  const handleButtonClick = (feature: Feature) => {
    if (openedFeature?.id !== feature.id) {
      setOpenedFeature(feature);
    }
  };

  return (
    <div className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
          {heading}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
        {featuresData && featuresData.length > 0 ? featuresData?.map((feature) => (
          <div
            key={feature.id}
            className={`rounded-full flex justify-center border border-gray-300 cursor-pointer ${openedFeature?.id === feature.id
              ? "bg-[#5556D1] text-white border-[#5556D1]"
              : "bg-white hover:bg-gray-100"
              }`}>
            <button
              className="text-lg font-medium p-2 focus:outline-none"
              onClick={() => handleButtonClick(feature)}>
              {feature.title}
            </button>
          </div>
        )) : null}
      </div>
      {openedFeature && (
        <div className="mt-6 mx-auto p-4 grid grid-cols-1 lg:gap-6 md:grid-cols-2 2xl:w-10/12 w-10/12 lg:w-11/12">
          <div>
            {openedFeature.img && (
              <div className="mb-4 flex mx-auto">
                <Image
                  src={openedFeature.img}
                  alt={openedFeature.title}
                  width={640}
                  height={516}
                  className="w-full rounded-lg"
                />
              </div>
            )}
          </div>
          <div className="mt-2 py-2 mx-4">
            {openedFeature.additionalDetails?.map((detail, index) => (
              <ul className="max-w-xl" key={index}>
                <li className="py-4 border-b border-[#5556D1] flex justify-start place-items-center gap-8">
                  <div>
                    <h3>{detail.details}</h3>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
