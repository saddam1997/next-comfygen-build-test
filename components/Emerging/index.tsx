import Image from "next/image";
import React from "react";

interface Item {
  img?: string;
  title: string;
  decs: string;
}

interface TechSectionProps {
  heading: string;
  description: string;
  data: Item[];
}

export default function Emerging({ emerging }: any) {
  return (
    <section className="py-10 lg:py-20 bg-gradient-to-r from-[#272868] to-[#5556D1]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-4 text-center">

          <div className="flex flex-col justify-center text-center mx-auto">
            <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#fff] capitalize lg:w-3/4 mx-auto">
              {emerging.heading}
            </h2>

            <p className="text-center text-white lg:w-10/12 mx-auto" dangerouslySetInnerHTML={{ __html: emerging.description }}>
              { }
            </p>
          </div>

          <div className="grid gap-12 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 mt-5">
            {emerging?.Emerging?.map((elem: any) => {
              const { title, decs } = elem;

              return (
                <div key={title} className="relative">
                  <div className="flex justify-start gap-2 place-items-center relative">
                    <Image src={elem.img} alt={elem.title} width={300} height={100} className="w-8 h-8 object-contain" />
                    <h3 className="text-2xl font-bold text-[#fff] text-start">
                      {title}
                    </h3>
                  </div>

                  <div className="mt-3">
                    <p
                      className="break-all text-white text-start"
                      dangerouslySetInnerHTML={{ __html: decs }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}