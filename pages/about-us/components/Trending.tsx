import Image from 'next/image';
import React from 'react';
import AnimatedLineGradient from './AnimatedLineGradient';
import Link from 'next/link';

const Trending = ({ trendingData, heading }) => {


    return (
        <div className="w-full  py-2 overflow-hidden">
            <div className="w-full mx-auto">
            <div className='mb-8 space-y-2'>
                    <h2 className="text-3xl font-bold text-center text-gray-800 ">
                        {heading}
                        
                    </h2>
                    {/* <AnimatedLineGradient /> */}
                </div> 

                <div className="relative overflow-hidden">
                    {/* Gradient overlays for fade effect */}
                    {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div> */}
                     {/* <Link target="_blank"rel="nofollow noopener noreferrer" href={"https://clutch.co/profile/comfygen-technologies"}></Link> */}

                    {/* Marquee container */}
                    <div className="flex animate-marquee">
                        {/* First set of tokens */}
                        {trendingData?.map((token: any, index: any) => (
                            <Link
                            target="_blank"rel="nofollow noopener noreferrer" href={token?.link}
                                key={`token-1-${index}`}
                                className={`flex-shrink-0 mx-2  rounded-2xl p-2 duration-300  cursor-pointer`}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="">

                                        <Image
                                            src={token.icon}
                                            alt={token.alt}
                                            width={720}
                                            height={420}
                                            className="rounded-full w-full h-full object-contain "
                                        />

                                    </div>
                                    <p className="text-sm font-semibold text-white text-center">
                                        {token.name}
                                    </p>
                                </div>
                            </Link>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {trendingData?.map((token: any, index: any) => (
                            <Link
                              target="_blank"rel="nofollow noopener noreferrer" href={token?.link}
                                key={`token-2-${index}`}
                                className={`flex-shrink-0 mx-3  rounded-2xl p-2 duration-300  cursor-pointer`}
                            >
                                <div className="flex flex-col items-center">
                                    <div className="">

                                        <Image
                                            src={token.icon}
                                            alt={token.alt}
                                            width={720}
                                            height={420}
                                            className="rounded-full w-full h-full object-contain bg-center"
                                        />

                                    </div>
                                    <p className="text-sm font-semibold text-white text-center">
                                        {token.name}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default Trending;