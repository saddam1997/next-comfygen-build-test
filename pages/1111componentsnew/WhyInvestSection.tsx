import React from 'react';

interface CardItem {
  title: string;
  decs: string;
}

interface WhyInvestSectionProps {
  heading?: string;
  subheading?: string;
  data?: CardItem[];
}

const WhyInvestSection: React.FC<WhyInvestSectionProps> = ({ heading, subheading, data }) => {
  return (
    <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-4">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 lg:text-4xl text-3xl font-bold leading-[3rem] text-white">
              {heading}
            </h2>
            <p className="text-white">
              {subheading}
            </p>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
            {data?.map((item, index) => (
              <div
                key={index}
                className="p-8 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border rounded-2xl transition-all duration-300 hover:translate-y-2 group"
              >
                <h3 className="text-lg font-extrabold text-white transition-all duration-200">
                  {item.title}
                </h3>
                <p className="text-white transition duration-200 ease-in-out">
                  {item.decs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
