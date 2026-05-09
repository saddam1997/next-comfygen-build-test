import Link from "next/link";
import { useState } from "react";
import { Plus } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Minus } from 'lucide-react';
export default function WhycomfygenSection({ Qa, Whycomfygen }) {
  const [currentCount, setCurrentCount] = useState("");
  const data = Qa;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1] ">
        <div className="items-center  space-y-10 lg:flex lg:space-x-10 lg:space-y-0 mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
          <div className="lg:flex items-start lg:space-x-10  w-full lg:space-y-0 space-y-6">
            <div className="w-full lg:text-left">
              {Qa.map((elem: any, index: any) => {
                const { title, btn, desc, desc1, num, url, head } = elem;
                return (
                  <div key={index} className="w-full space-y-6 lg:text-left">
                    <div className="space-y-3">
                      <p className="text-lg font-light text-gray-100 uppercase xl:text-xl">{head}</p>
                      <h2 className="text-2xl font-bold text-white lg:text-4xl">
                        {title}
                      </h2>
                    </div>
                    <div>
                      <p className="text-base text-white" dangerouslySetInnerHTML={{__html: desc}} />
                       
                      <p className="text-base text-white">
                        {desc1}
                      </p>
                    </div>
                    <div className="flex justify-start ">
                      <Link href="https://api.whatsapp.com/send?phone=919587867258" passHref={true}>
                        <button className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1]  border border-[#fff] px-8 py-2.5 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                          Talk To Consultant <ArrowUpRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full ">
              {Whycomfygen.map((elem: any, index: any) => {
                const { title, num, desc,desc1 } = elem;
                return (
                  <div key={index} className="p-4 mt-2 bg-white rounded-lg cursor-pointer w-full"
                    onClick={() => setCurrentCount(currentCount === index ? false : index)}>
                    <div key={num} className="flex justify-between w-full text-base font-medium text-left text-black bg-white rounded-lg md:text-lg ">
                      <h3>{title}</h3>
                      {currentCount === index ?
                        <Minus size={26} />
                        :
                        <Plus size={26} />}
                    </div>
                    <div className={currentCount === index ? "pt-2 text-sm text-black" : "pt-2 text-sm text-black hidden"}>
                      <p  className="pt-2 text-sm text-black" dangerouslySetInnerHTML={{ __html: desc }}></p>
                      <p  className="pt-2 text-sm text-black" dangerouslySetInnerHTML={{ __html: desc1 }}></p>
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


