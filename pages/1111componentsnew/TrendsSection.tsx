  // components/UPITrendsSection.tsx
  import React from "react";
  import TrendCard from "./TrendCard";

  interface TrendData {
    img?: string;
    title: string;
    decs: string;
  }

  interface UPITrendsSectionProps {
    heading: string;
    subtitle?: string; // Added subtitle prop
    trends: TrendData[];
  }

  const UPITrendsSection: React.FC<UPITrendsSectionProps> = ({ heading, subtitle, trends }) => {
    return (
      <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-4 text-center">
            <div className="flex flex-col justify-center text-center mx-auto">
              <h2 className="py-2 text-2xl md:text-4xl font-semibold md:font-bold md:leading-[3rem] text-white capitalize lg:w-3/4 mx-auto">
                {heading}
              </h2>
              {/* Conditionally render subtitle */}
              {subtitle && (
                <p
                  className="text-md text-white font-medium mx-auto mt-2 lg:w-3/4"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              )}

            </div>
            <div className="grid gap-12 pt-8 text-left grid-cols-1 md:grid-cols-2 mt-5">
              {trends?.map((trend, index) => (
                <TrendCard key={index} {...trend} num={(index + 1).toString()} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default UPITrendsSection;
