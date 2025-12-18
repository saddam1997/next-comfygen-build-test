import React from "react";
import ServicesSec from "../components/ServicesSec";

interface ServiceItem {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
}

interface FootballApiSectionProps {
  heading?: string;
  subtitle?: string;
  servicesData?: ServiceItem[];
}

const ServiceSection: React.FC<FootballApiSectionProps> = ({ heading, subtitle, servicesData }) => {
  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-md text-center text-black" dangerouslySetInnerHTML={{__html: subtitle}} />
          )}
        </div>
        <div>
          <ServicesSec servicesData={servicesData} />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
