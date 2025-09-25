// components/CoreFeaturesSection.tsx
import React from "react";

interface Feature {
  num: string;
  title: string;
  decs: string;
}

interface CoreFeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

const CoreFeaturesSection: React.FC<CoreFeaturesSectionProps> = ({ title, subtitle, features }) => {
  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-4 text-center">
          <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
            <h2 className="text-4xl font-bold text-[#212121] leading-[3rem]" dangerouslySetInnerHTML={{__html:title}} />
              
            <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
          </div>
          <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {features?.map(({ title, decs, num }, idx) => (
              <div
                key={idx}
                className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]"
              >
                <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                  {num}
                </div>
                <h3 className="text-2xl text-[#212121] font-semibold" dangerouslySetInnerHTML={{__html:title}} />
                  
                
                <p dangerouslySetInnerHTML={{ __html: decs }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
