"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { TbX } from "react-icons/tb";

const ContactFrom = dynamic(() => import("../comman/ContactFrom"), {
  ssr: false,
});

const HeroBgImage = dynamic(
  () => import("./component/HeroBgImage"),
  { ssr: false }
);

export default function Herosection(props: any) {
  return (
   <section className="relative min-h-screen overflow-hidden bg-black">
      {/* ❌ NOT PART OF LCP (Client-only background image) */}
      <HeroBgImage />
      {/* Header */}
      {/* <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div> */}

      {/* ✅ HERO CONTENT — THIS IS LCP */}
      <div className="container mx-auto flex items-center min-h-screen py-32 w-10/12 2xl:w-10/12 relative z-10">
        <div className="xl:w-[58%] lg:w-[65%] w-full space-y-4">
          <h1 className="text-white xl:text-5xl sm:text-3xl text-3xl font-bold xl:leading-[4rem] sm:leading-[3rem]">
            <span className="xl:text-4xl md:text-2xl text-2xl font-medium block">
              Blockchain Development
            </span>
            <span className="block font-bold">
              Solution & Service Provider
            </span>
          </h1>

          <p className="text-sm lg:text-base 2xl:text-lg text-white/90">
            {props.ptag}
          </p>

          <Link href="#">
            <button
              onClick={props.openModal}
              className="mt-4 bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E]
              text-white rounded-[20px] shadow-lg text-[18px] font-semibold
              h-[55px] px-8 flex items-center gap-4 transition-all"
            >
              Talk to an expert!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
              >
                <path
                  d="M0 6h22M22 6l-5-5M22 6l-5 5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

    

      {/* Modal */}
      {props.talkToExpertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-white rounded-xl w-11/12 lg:w-8/12 relative">
            <button
              onClick={props.closeModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full"
            >
              <TbX className="w-6 h-6" />
            </button>
            <ContactFrom />
          </div>
        </div>
      )}
    </section>
  );
}
