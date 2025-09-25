import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Image from "next/image";
export default function ImageContent(props: any) {
  return (
    <div className="py-10 lg:py-20">
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
         33vw"/>
        </div>
        <div className="w-full lg:w-1/2 space-y-6 text-left">
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#0E1F51] ">
              {props.heading}
            </h2>
          </div>
          <p className="text-base text-black">
            {props.ptag}
          </p>
          <p className="text-base text-black ">
            {props.ptag1}
          </p>
        </div>
      </section>
    </div>
  );
}
