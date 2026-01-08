"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { TbX } from "react-icons/tb";

const ContactFrom = dynamic(() => import("../comman/ContactFrom"), {
  ssr: false,
});

export default function HeroClientUI(props: any) {
  return (
    <>
      {/* ✅ BACKGROUND IMAGE */}
      <Image
        src={props.bgImage}
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CTA */}
      <div className="absolute z-20 bottom-24 left-[10%]">
        <button
          onClick={props.openModal}
          className="bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E]
          text-white rounded-full shadow-lg text-lg font-semibold
          h-[55px] px-8"
        >
          Talk to an expert!
        </button>
      </div>

      {/* Modal */}
      {props.talkToExpertModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="bg-white rounded-xl w-11/12 lg:w-8/12 relative">
            <button
              onClick={props.closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <TbX className="w-6 h-6" />
            </button>
            <ContactFrom />
          </div>
        </div>
      )}
    </>
  );
}
