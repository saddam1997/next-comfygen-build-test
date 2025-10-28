import React from "react";
import ProcessSec from "../components/ProcessSec";

interface ProcessItem {
  title: string;
  description: string;
}

interface ICODetailsSectionProps {
  title: string;
  description: string;
  processSlides: ProcessItem[];
}

const ProcessSection: React.FC<ICODetailsSectionProps> = ({
  title,
  description,
  processSlides
}) => {
  return (
    <section className="bg-[#F5F5F9] lg:py-16 py-10 mt-8">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
        <div className="text-center space-y-1">
          <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
            {title}
          </h2>
          <p className="text-center" dangerouslySetInnerHTML={{__html : description}} />
            
       
        </div>
        <ProcessSec processSlides={processSlides} />
      </div>
    </section>
  );
};

export default ProcessSection;
