
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react';

const GameCard = ({GameCardData}) => {
     const [showContent, setShowContent] = useState(false);
  return (

      <section className="bg-[#F5F5F9] lg:py-16 py-10">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
             {GameCardData.heading}
            </h2>
          </div>
          <div className="grid gap-4 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-6 py-10">
            {GameCardData.Game?.slice(0, 6).map((elem:any) => {
              const { title, url, img, num } = elem;
              return (
                <div key={num} className="w-full ">
                  <Link href={url} passHref={true}>
                    <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                      <Image
                        src={img}
                        alt={title}
                        width={730}
                        height={419}
                        className="w-full"
                      />

                      <div className=" p-4 bg-[#5556D1]/80 flex flex-col">
                        <div>
                          <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                            {title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}

            {showContent ? (
              <>
                {GameCardData.slice(6, 17).map((elem:any) => {
                  const { title, url, img, num } = elem;
                  return (
                    <div key={num} className="w-full ">
                      <Link href={url} passHref={true}>
                        <div className="bg-white rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                          <Image
                            src={img}
                            alt={title}
                            width={730}
                            height={419}
                            className="w-full"
                          />
                          <div className=" p-4 bg-[#5556D1]/80 flex flex-col">
                            <div>
                              <h5 className="text-white text-2xl font-bold leading-none capitalize text-center">
                                {title}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
          {showContent ? (
            <div className="flex justify-center items-center">
              <button
                className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative"
                onClick={() => setShowContent(!showContent)}
              >
                Load Less <ArrowUpRight />
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <button
                className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 cursor-pointer transition duration-300 relative"
                onClick={() => setShowContent(!showContent)}
              >
                Load More <ArrowUpRight />
              </button>
            </div>
          )}
        </div>
      </section>
  )
}

export default GameCard
