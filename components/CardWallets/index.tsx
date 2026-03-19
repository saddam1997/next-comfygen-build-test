import React from "react";
import CardWalletsClient from "./CardWalletsClient";

const CardWallets = ({featuresData}) => {


  if (!featuresData.feature || featuresData.feature.length === 0) return null;

  return (
    <section className="bg-center bg-repeat bg-fixed">
        
      <div className="lg:py-16 py-10">
        
        {/* HEADER */}
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-black">
            {featuresData?.heading}
          </h2>

          <p
            className="text-black max-w-6xl mx-auto lg:px-8 px-4"
            dangerouslySetInnerHTML={{ __html: featuresData?.description }}
          />
        </div>

        {/* CLIENT PART */}
        <CardWalletsClient
          featuresData={featuresData?.feature}
          grid={featuresData?.grid}
        />
      </div>
    </section>
  );
};

export default CardWallets;