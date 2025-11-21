import React from "react";
import Image from "next/image";
import { RiCustomerServiceLine } from "react-icons/ri";

const ConsultingSec = ({ title, description, image, contactNumber, ctaText }) => {
  return (
    <section className="lg:py-16 bg-gray-100 py-10">
      <div className="items-center space-y-10 lg:flex md:space-x-10 md:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">

        <div className="flex justify-center w-full md:justify-start pb-10 lg:pb-0">
          <Image
            width={500}
            height={500}
            src={image}
            alt={title}
            className="w-full rounded-lg"
          />
        </div>

        <div className="w-full space-y-6 text-left">
          <h3 className="text-[40px] font-bold leading-10 text-[#212121]">
            {title}
          </h3>
          <p className="text-[16px] font-[500px] text-[#000000]">{description}</p>

          <div className="flex items-center justify-start p-4 space-x-6 bg-white rounded-lg">
            <div className="p-2 bg-blue-100 rounded-lg">
              <RiCustomerServiceLine className="text-[3.5rem] text-[#5556D1]" />
            </div>
            <div>
              <h3 className="text-[#0E1F51] text-lg font-extrabold">{ctaText}</h3>
              <p className="text-sm">
                Ready to Help:{" "}
                <span className="font-bold text-[#5556D1]">
                  <a href={`tel:${contactNumber}`}> +91 {contactNumber}</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSec;
