import Image from 'next/image';
import React from 'react'

const Index = ({ Data }: any) => {
  return (
    <section className="lg:py-16 py-4 bg-[#F5F5F9]">
      <div className=" space-y-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="">
          <div

            className="w-full flex flex-col justify-center items-center text-center space-y-2"
          >
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#212121] text-center">
              {Data?.title}
            </h2>
            <p className="text-base text-slate-800">{Data?.description}</p>
          </div>
        </div>
        <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
          {Data.Service.map((elem: any) => {
            const { title, decs, num, img } = elem;
            return (
              <div
                key={num}
                className="p-4 rounded-lg border-2 border-dashed bg-[#5556D1]/20 space-y-2"
              >
                <div className="flex items-center  space-x-2">
                  <div className="flex items-center justify-center ">
                    <Image src={img} alt={title} width="60" height="60" />
                  </div>
                  <h3 className="text-base font-bold text-black">
                    {title}
                  </h3>
                </div>
                <div>
                  <p>{decs}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Index
