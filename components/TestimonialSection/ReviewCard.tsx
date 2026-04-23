// "use client";

import Image from "next/image";

export default function ReviewCard() {
  return (
    <section className="py-20 flex justify-center bg-[#f5f5f5]">
      <div className="relative w-[720px]">

        {/* Card */}
        <div className="relative bg-white border border-gray-400 rounded-[20px] p-6 pr-20 shadow-sm">

          {/* Top Right Curve Cut (Perfect Shape) */}
          <div className="absolute top-[-1px] right-[-1px] w-[230px] h-[70px] bg-[#f5f5f5] rounded-bl-[40px] border-l border-b border-gray-400"></div>

          {/* Google Badge */}
          <div className="absolute top-[6px] right-[40px] z-10 flex items-center gap-2">
            <Image
              src="/Google - Original.png"
              alt="Google"
              width={22}
              height={22}
            />
            <span className="text-sm text-gray-700 leading-tight">
              Google <br /> review
            </span>
          </div>

          {/* Content */}
          <h3 className="text-[22px] font-semibold text-gray-900">
            Client name
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            location
          </p>

          {/* Stars */}
          <div className="flex gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927C9.3 2.146 10.7 2.146 10.951 2.927L12.3 6.99a1 1 0 00.95.69h4.274c.82 0 1.16 1.05.497 1.54l-3.46 2.51a1 1 0 00-.364 1.118l1.32 4.06c.25.78-.64 1.43-1.3.94l-3.47-2.52a1 1 0 00-1.176 0l-3.47 2.52c-.66.49-1.55-.16-1.3-.94l1.32-4.06a1 1 0 00-.364-1.118l-3.46-2.51c-.663-.49-.323-1.54.497-1.54h4.274a1 1 0 00.95-.69l1.349-4.063z" />
              </svg>
            ))}
          </div>

          {/* Text */}
          <p className="text-gray-700 text-[15px] leading-6 mt-3">
            Comfygen Private Limited surpassed all expectations with their superb blockchain app development services. Their expertise and professionalism shone through at every stage of the project. From the initial consultation to the seamless execution and post-launch support, they delivered exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
}