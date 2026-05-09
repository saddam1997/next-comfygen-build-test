import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Minus } from 'lucide-react';
export default function WhycomfygenSection({ Qa, Whycomfygen }) {



  const [currentCount, setCurrentCount] = useState(0);

  const data = Qa;
  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <section className="lg:py-16 py-10 bg-white ">
        <div className="items-center  space-y-10 lg:flex lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="lg:flex items-start lg:space-x-10 lg:space-y-0 space-y-6 w-full gap-10">
            <div className="w-full  lg:text-left">
              {Qa.map((elem: any, index: any) => {
                const { title, btn, desc, desc1, num, url, head } = elem;
                return (
                  <div key={num} className="w-full space-y-6 lg:text-left">
                    <div className="space-y-3">
                      <Image
                        className="w-full"
                        title="Who We Are?"
                        alt=" Who We Are?"
                        src="https://www.comfygen.com/image/allyour-it-needs-about-img.webp"
                        height={199}
                        width={714}
                        unoptimized={true}
                      />
                      <h2 className="text-2xl font-semibold text-[#212121] lg:text-4xl">
                        {title}
                      </h2>
                      <p className="text-lg text-[#212121] ">{desc}</p>
                    </div>
                    <div className="flex ">
                      <Link href="https://api.whatsapp.com/send?phone=919587867258" passHref={true}>
                        <button className="text-base font-medium text-[#5556D1] border border-[#5556D1] rounded-full px-6 py-2.5 text-center hover:text-white hover:bg-[#5556D1] cursor-pointer transition duration-300 relative flex gap-2 items-center">Let’s Discuss <ArrowUpRight /> </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full space-y-4">
              {Whycomfygen.map((elem, index) => {
                const { title, num, desc } = elem;
                return (
                  <div
                    key={num} // Ensure each item has a unique key
                    className={`p-4 mt-2 border border-[#5556D1]/60 rounded-lg cursor-pointer w-full ${currentCount === index ? "bg-[#5556D1]/10" : "bg-[#fff]"
                      }`}
                    onClick={() => setCurrentCount(currentCount === index ? false : index)}
                  >
                    <div className="flex justify-between w-full text-base font-medium text-left text-black rounded-lg md:text-lg">
                      <span className="font-semibold md:text-lg text-base text-[#000000]">{title}</span>
                      {currentCount === index ? <Minus size={26} /> : <Plus size={26} />}
                    </div>
                    <div
                      className={`pt-4 text-sm text-black ${currentCount === index ? "" : "hidden"
                        }`}
                    >
                      {desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
