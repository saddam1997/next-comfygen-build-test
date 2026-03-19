import CardFeaturesClient from "./CardFeaturesClient";
const CardFeatures = ({ featuresData}:any) => {

  return (
    <section className="bg-center bg-repeat bg-fixed">
      <div className="bg-gradient-to-r from-[#272868]/95 to-[#5556D1]/95 lg:py-16 py-10">

        {/* ✅ This will show in View Source */}
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white"  dangerouslySetInnerHTML={{ __html: featuresData?.heading }}>
            
          </h2>

          <p className="text-white max-w-6xl mx-auto lg:px-8 px-4" dangerouslySetInnerHTML={{ __html: featuresData?.description }}>
           
          </p>
        </div>

        {/* 👇 Client logic part */}
        <CardFeaturesClient
          featuresData={featuresData?.features}
          grid={featuresData?.grid}
        />

      </div>
    </section>
  );
};

export default CardFeatures;