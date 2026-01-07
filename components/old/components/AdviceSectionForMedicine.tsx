import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Image from "next/image";
import { RiCustomerServiceLine } from "react-icons/ri";
export default function AdviceSectionForMedicine(props: any) {
  return (
    <div className="py-10 lg:py-20 bg-gray-100">
      <section className="items-center w-11/12 space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto lg:flex space-x-0 lg:space-x-10 md:space-y-0">
        <div className="flex justify-center 2xl:justify-start w-full lg:w-1/2 pb-10 lg:pb-0">
          <Image
            className="rounded-md"
            alt={props.altTag}
            src={props.imgSrc}
            width={props.imgW}
            height={props.imgH}
            loader={uploadcareLoader}
            loading="eager"
            priority
            unoptimized={true}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
         33vw"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full space-y-6 text-left">
            <div className="space-y-4">
              <p className="text-xl font-light text-blue-600 ">{props.head} </p>
              <h2 className="text-2xl lg:text-4xl font-bold text-[#0E1F51] ">
                {props.heading}
              </h2>
            </div>
            <p
              className="text-base text-black"
              dangerouslySetInnerHTML={{ __html: props.ptag }}
            ></p>
            <p
              className="text-base text-black"
              dangerouslySetInnerHTML={{ __html: props.ptag1 }}
            ></p>
            <p
              className="text-base text-black"
              dangerouslySetInnerHTML={{ __html: props.ptag2 }}
            ></p>
            <p
              className="text-base text-black"
              dangerouslySetInnerHTML={{ __html: props.ptag3 }}
            ></p>
            <p className="text-base text-black ">{props.ptag3}</p>
            <h2>{props.subHeading}</h2>
            <p>{props.titleOfUi}</p>

            <div className="flex justify-start items-center p-4 space-x-6 bg-white rounded-lg">
              <div className="p-2 bg-blue-100 rounded-lg">
                <RiCustomerServiceLine className=" text-[2.5rem] lg:text-[3.5rem] text-blue-500 " />
              </div>
              <div className="">
                <h3 className="text-[#0E1F51] text-lg font-bold ">
                  Get Instant Professional Advice
                </h3>
                <p className="text-sm">
                  Ready to Help :
                  <span className="font-bold text-blue-600">
                    <a href="tel:9587867258"> +91 9587867258</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
