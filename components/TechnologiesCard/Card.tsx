import Image from 'next/image';
import React from 'react'

const Card = ({TechnoStack}) => {
  return (
   <section className="lg:py-16 py-10">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto space-y-10">
          <div className="flex flex-col justify-center text-center mx-auto">
            <h2 className=" py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
             {TechnoStack.heading}
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 border  divide-x-2 divide-y-2">
            {TechnoStack?.Stack.map((elem:any) => {
              const { title, num, img } = elem;
              return (
                <div
                  key={num}
                  className="p-4 text-center space-y-2 hover:bg-[#5556D1]/80 cursor-pointer transition-all duration-300 ease-in-out group"
                >
                  <Image
                    src={img}
                    alt={title}
                    className="mx-auto"
                    width={80}
                    height={60}
                  />
                  <p className="bg-clip-text text-transparent bg-[#5556D1] font-bold text-lg group-hover:text-white">
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default Card
