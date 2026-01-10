import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import router from "next/router";
import { useRouter } from "next/router";

const ServicesSec = ({ servicesData = [] }) => {
  const [selectedService, setSelectedService] = useState(
    servicesData.length > 0 ? servicesData[0] : {}
  );

  useEffect(() => {
    if (servicesData.length > 0) {
      setSelectedService(servicesData[0]);
    }
  }, [servicesData]);

  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row pt-10 lg:space-x-6 relative items-stretch">
      <div className="md:space-y-4 space-y-2 w-full lg:pr-6 lg:h-[34rem] lg:overflow-y-auto overflow-hidden head-scroll lg:w-[30%]">
        {servicesData.map((service, index) => {
          const isSelected = service.title === selectedService.title;
          return (
            <div key={index}>
              <button
                onClick={() => setSelectedService(service)}
                className={`${
                  isSelected
                    ? "text-[#5556D1] border-[#5556D1] bg-[#5556D1]/10 services-tab"
                    : " text-black border-[#00000018] bg-white "
                } xl:text-lg text-sm flex items-center border text-start font-semibold px-4 gap-2 py-3 lg:rounded-[4px] w-full  relative `}
                dangerouslySetInnerHTML={{ __html: service.title }}
              />

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
  );
};

const ServiceContent = ({ service }) => (
  <div className="flex justify-center w-full md:justify-start items-start mt-0 relative md:px-14 px-6 py-12">
    <div className="xl:space-y-5 space-y-3 w-full">
      <div className="space-y-2">
        <p className="md:text-[16px] text-[14px] font-normal text-white">
          {service.subtitle}
        </p>
        <h3
          className="text-3xl font-bold text-white "
          dangerouslySetInnerHTML={{ __html: service.title }}
        />

        <p
          className="text-base text-white"
          dangerouslySetInnerHTML={{ __html: service.description }}
        />
        <p
          className="text-base text-white"
          dangerouslySetInnerHTML={{ __html: service.description1 }}
        />
      </div>
      {service.features && service.features.length > 0 && (
        <div className="flex items-center justify-start">
          <ul className="space-y-2 text-white">
            {service.features.map((feature:any, index:any) => (
              <li
                key={index}
                className="flex items-center gap-2 cursor-pointer text-base font-normal hover:text-[#c9c5c5] Services-links"
              >
                <span className="w-3 h-3 bg-transparent border border-white rounded-full hidden md:block"></span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* to navigate with same page  */}
      {/* <div>
          <button 
          onClick={() => router.push('/contact-us')} // Use router to navigate
          className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] border border-[#fff] px-8 py-2.5 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
            Connect Experts <MdOutlineArrowOutward />
          </button>
      </div> */}

      {/* to navigate with new page */}
      <div>
        <button
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey) {
              window.open("/contact-us", "_blank");
            } else {
              router.push("/contact-us");
            }
          }}
          className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] border border-[#fff] px-8 py-2.5 text-lg font-semibold rounded-full capitalize flex items-center gap-1"
        >
          Connect Experts <MdOutlineArrowOutward />
        </button>
      </div>
    </div>
  </div>
);

export default ServicesSec;
