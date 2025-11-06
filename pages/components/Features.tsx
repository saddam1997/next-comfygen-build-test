import React, { useEffect, useState } from "react";
import Image from 'next/image';
interface Feature {
  id: number;
  title: string;
  icon: JSX.Element;
  img: string;
  additionalDetails: { emoji: string; details: string; content: string }[];
}
import { ImArrowRight } from "react-icons/im";



const Features = ({ featuresData, grid, heading, description }) => {
  // const [openedFeature, setOpenedFeature] = useState<Feature | null>(
  //   featuresData[0]
  // );
  // const handleButtonClick = (feature: Feature) => {
  //   if (openedFeature?.id !== feature.id) {
  //     setOpenedFeature(feature);
  //   }
  // };

  const [openedFeature, setOpenedFeature] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile view
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);


      if (featuresData?.length > 0) {
        setOpenedFeature(featuresData[0]);
      }

      // If desktop, open first feature by default
      if (!mobile && featuresData?.length > 0) {
        setOpenedFeature(featuresData[0]);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [featuresData]);

  const handleButtonClick = (feature: any) => {
    // On mobile: toggle accordion
    if (isMobile) {
      setOpenedFeature((prev: any) =>
        prev?.id === feature.id ? null : feature
      );
    } else {
      // On desktop: change the opened feature
      setOpenedFeature(feature);
    }
  };

  return (
    <section className="bg-center bg-repeat bg-fixed">
      <div className="lg:py-16 py-10 bg-[#F5F5F9]">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h2 className="xl:text-4xl text-black text-3xl font-bold">
            {heading}
          </h2>
          <p className="text-black max-w-6xl mx-auto lg:px-8 px-4" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>

        {/* Buttons */}
        <div className={`grid grid-cols-1 sm:grid-cols-${grid} gap-6  mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10 border border-[#5556D1]`}>
          {Array.isArray(featuresData) && featuresData.length > 0 && featuresData?.map((feature: any) => (
            <div key={feature.id} className="flex flex-col">
              {/* Button */}
              <div
                className={` flex justify-center border border-gray-300 sm:border-none cursor-pointer transition-all duration-200 ${openedFeature?.id === feature.id
                  ? "bg-[#5556D1] text-white border-[#5556D1]"
                  : "bg-white hover:bg-gray-100"
                  }`}
              >
                <button
                  className="text-lg font-medium p-2 focus:outline-none w-full"
                  onClick={() => handleButtonClick(feature)}
                >
                  {feature?.title}
                </button>
              </div>

              {/* Mobile detail view (accordion style) */}
              {isMobile && openedFeature?.id === feature.id && (
                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-4 transition-all duration-300">
                  {feature.img && (
                    <div className="hidden mb-4 lg:flex justify-center">
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        width={640}
                        height={360}
                        className="rounded-md w-full h-auto"
                        priority
                      />
                    </div>
                  )}
                  {Array.isArray(feature?.additionalDetails) && feature?.additionalDetails.length > 0 && feature?.additionalDetails?.map((detail: any, index: number) => (
                    <ul className="max-w-xl mx-auto" key={index}>
                      <li className="py-2 sm:text-base text-sm border-b border-[#5556D1]/40 text-black">
                        {detail.details}
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop detail view (below all buttons) */}
        {!isMobile && openedFeature && (
          <div className="mt-10 p-4 grid grid-cols-1 md:grid-cols-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 items-center">
            {openedFeature?.img && (
              <div className="hidden lg:flex justify-center">
                <Image
                  src={openedFeature.img}
                  alt={openedFeature.title}
                  width={640}
                  height={360}
                  className="rounded-lg border border-gray-200"
                  priority
                />
              </div>
            )}
            <div className="mt-2 py-2 mx-4">
              {Array.isArray(openedFeature?.additionalDetails) && openedFeature?.additionalDetails.length > 0 && openedFeature?.additionalDetails?.map(
                (detail: any, index: number) => (
                  <ul className="max-w-xl" key={index}>
                    <li className="py-3 flex items-center gap-3">
                      <ImArrowRight className="text-[#5556D1]" /><h3 className="text-black">{detail.details}</h3>
                    </li>
                  </ul>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;

