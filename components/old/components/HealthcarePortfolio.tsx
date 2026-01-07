import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const HealthcarePortfolio = (props: any) => {
  return (
    <section>
      <div className="py-16 w-11/12 space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-9/12 mx-auto">
        <div>
          <h2 className="py-4 text-2xl lg:text-4xl text-center text-[#0E1F51] font-bold leading-tight lg:leading-[3rem]">
            {props.title}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 bg-gradient-to-r from-[#BE5EBC] to-[#16BDFA] drop-shadow-xl rounded-[28px] flex items-center">
          <div className="space-y-3 lg:p-16 p-10">
            <div>
              <h2 className="text-[#fff] xl:text-5xl text-3xl w-70 font-bold xl:leading-[3rem]">
                {props.subtitle}
              </h2>
              <p className="text-lg text-white mt-1">{props.description}</p>
              <p className="text-lg text-white mt-3">
                {props.outcome}
              </p>
            </div>
            <div className="flex justify-start items-center">
              <a href={props.buttonLink}>
                <button className="shadow-2xl inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#fff] flex gap-2 rounded cursor-pointer text-black w-fit group rounded-full">
                  {props.buttonText} <FaArrowRight className="font-normal" />
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center p-6">
            <Image width={500} height={500} className="rounded-lg" src={props.imageUrl} alt={props.imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcarePortfolio;
