import React from "react";
import { HiMapPin } from "react-icons/hi2";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import ContactFrom from "../../components/ContactFrom";
export default function GetinTouch() {
  return (
    <div className="bg-slate-100 py-20">
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
        <div className="flex flex-col justify-start text-left space-y-2">
          <p className=" font-bold 2xl:text-4xl xl:text-3xl  text-2xl text-[#0E1F51] ">
            Hey! Let’s Talk
          </p>
        </div>
      </div>
      <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-7 lg:py-10  md:flex md:space-x-10 md:space-y-0 space-y-6 ">
        <ContactFrom />
        <div className="p-5 lg:p-8 space-y-6 bg-white text-white rounded-lg md:w-[35%] w-full">
          <h3 className="text-black text-2xl font-bold">Canada 🇨🇦</h3>
          <div className="flex  space-x-4 capitalize">
            <div className="p-3 bg-[#F7F7F7] flex justify-center items-center text-2xl text-blue-600 rounded-lg ">
              <MdPhoneInTalk />
            </div>
            <a href="tel:579-977-4475">
              <p className="text-blue-600 font-semibold text-lg">
                Call Anytime
              </p>
              <p className="text-black text-base font-medium">+1 579-977-4475</p>
            </a>
          </div>
          <div className="flex space-x-4">
            <div className="p-3 bg-[#F7F7F7] text-2xl text-blue-600 rounded-lg ">
              <MdEmail />
            </div>
            <a href="mailto:sales@comfygen.com">
              <p className="text-blue-600 font-semibold text-lg">Send Email</p>
              <p className="text-black text-base font-medium">
                sales@comfygen.com
              </p>
            </a>
          </div>
          <div className="flex space-x-4 cursor-pointer items-start">
            <div className="p-3 bg-[#f7f7f7] text-2xl text-blue-600 rounded-lg ">
              <HiMapPin />
            </div>
            <div>
              <a
                href="https://maps.app.goo.gl/KiqaoAo3doPuUrh38"
                target="_blank"
                rel="noreferrer" >
                <p className="text-blue-600 font-semibold text-lg"> Visit Us</p>
                <p className="text-black text-base font-medium"> 40 Tuxedo Ct, Toronto, ON M1G 3S7, Canada</p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
