"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function Crad() {
  return (
    <div className=" p-10">
      {/* Outer Section (big soft rounded container) */}
      <div className="bg-transparent rounded-[28px] p-10 relative max-w-xl mx-auto">
        
        {/* Google Badge */}
        <div className="absolute top-10 right-10 bg-white border-l border-b border-gray-800  px-4 py-2 flex items-center gap-2 ">
          <Image
            src="/Google - Original.png"
            alt="Google"
            width={22}
            height={22}
          />
          <span className="text-sm text-gray-700 font-medium">
            Google review
          </span>
        </div>

        {/* Inner Card */}
        <div className="bg-white border border-gray-800 rounded-[22px] p-6 ">
          
          {/* Header */}
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-gray-900">
              Client name
            </h3>
            <p className="text-gray-500 text-sm">location</p>
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-700 text-sm leading-relaxed">
            Comfygen Private Limited surpassed all expectations with their superb
            blockchain app development services. Their expertise and professionalism
            shone through at every stage of the project. From the initial consultation
            to the seamless execution and post-launch support, they delivered
            exceptional results.
          </p>
        </div>
      </div>
    </div>
  );
}