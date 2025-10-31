import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const ServicesSec = ({ servicesData = [], title, description , description1="" }) => {
  const [selectedService, setSelectedService] = useState(
    servicesData.length > 0 ? servicesData[0] : {}
  );

  useEffect(() => {
    if (servicesData.length > 0) {
      setSelectedService(servicesData[0]);
    }
  }, [servicesData]);

  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">{title}</h2>
          <p className="text-base text-center font-normal" dangerouslySetInnerHTML={{ __html: description }}></p>
          <p className="text-base text-center font-normal" dangerouslySetInnerHTML={{ __html: description1 }}></p>
        </div>
        <div className="">
          <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6 relative items-stretch">
            <div className="md:space-y-4 space-y-2 w-full lg:pr-6 lg:h-[34rem] lg:overflow-y-auto overflow-hidden head-scroll lg:w-[30%]">
              {servicesData?.map((service, index) => {
                const isSelected = service.title === selectedService.title;
                return (
                  <div key={index}>
                    <button
                      onClick={() => setSelectedService(service)}
                      className={`${
                        isSelected
                          ? "text-[#5556D1] border-[#5556D1] bg-[#5556D1]/10 services-tab"
                          : " text-black border-[#00000018] bg-white "
                      } xl:text-lg text-sm flex items-center border text-start font-semibold px-4 gap-2 py-3 lg:rounded-[4px] w-full relative `}
                    >
                      {service.title}
                    </button>
                    {isSelected && (
                      <div className="block lg:hidden w-full overflow-hidden bg-cover bg-gradient-to-r from-[#272868] to-[#5556D1]">
                        <ServiceContent service={selectedService} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="hidden lg:block w-[70%] h-[34rem] overflow-hidden service-bg relative bg-gradient-to-r from-[#272868] to-[#5556D1]">
              <ServiceContent service={selectedService} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceContent = ({ service }) => (
  <div className="flex justify-center w-full md:justify-start items-start mt-0 relative md:px-14 px-6 py-12">
    <div className="xl:space-y-5 space-y-3 w-full">
      <div className="space-y-2">
        <p className="md:text-[16px] text-[14px] font-normal text-white">
          {service.subtitle}
        </p>
        <h3 className="text-3xl font-bold text-white">
          {service.title || "Mobile App Development"}
        </h3>
        <p className="text-base text-white" dangerouslySetInnerHTML={{ __html: service.description }}></p>
      </div>
      {service.features && service.features.length > 0 && (
        <div className="flex items-center justify-start">
          <ul className="space-y-2 text-white">
            {service.features?.map((feature:any, index:any) => (
              <li
                key={index}
                className="flex items-center gap-2 cursor-pointer text-base font-normal hover:text-[#c9c5c5] Services-links"
              >
                <span className="w-3 h-3 bg-transparent border border-white rounded-full"></span>
                <span dangerouslySetInnerHTML={{ __html: feature }}></span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <Link href="/contact-us" passHref={true}>
          <button className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] border border-[#fff] px-8 py-2.5 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
            Connect Experts <MdOutlineArrowOutward />
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default ServicesSec;
