import React from "react";
import FeaturesClient from "./FeaturesClient";

const FeaturesServer = ({ featuresData }: any) => {
  return (
    <section className="bg-[#F5F5F9] lg:py-16 py-10">

      {/* HEADER */}
      <div className="text-center space-y-2 max-w-6xl mx-auto px-2">
        <h2 className="xl:text-4xl text-xl font-bold text-black">
          {featuresData?.heading}
        </h2>
        <p
          className="text-black lg:text-lg text-sm"
          dangerouslySetInnerHTML={{ __html: featuresData?.description }}
        />
      </div>

      {/* CLIENT PART */}
      <FeaturesClient
        featuresData={featuresData?.feature}
        grid={featuresData?.grid}
      />

    </section>
  );
};

export default FeaturesServer;