import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadingTwo from "../ui/HeadingTwo";

const Trending = ({ trendingData = [], heading }: any) => {
  const data = trendingData.slice(0, 5);

  return (
    <section className="w-full py-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 lg:px-5 2xl:px-0">

        {/* Heading */}
        <div className="mb-12 text-center">

            <HeadingTwo
        color={"black"}
        text= {heading}
      />
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {heading}
          </h2> */}
          <div className="mt-3 h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {data.map((token: any, index: number) => (
            <Link
              key={index}
              href={token?.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group relative"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              {/* Card */}
              <div className="relative z-10 lg:w-48 w-full rounded-3xl p-[1px] bg-gradient-to-br from-gray-200 to-gray-100 group-hover:from-blue-500 group-hover:to-purple-500 transition duration-300">

                <div className="bg-white rounded-3xl p-5 flex flex-col items-center text-center transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">

                  {/* Top Badge */}
                  {/* <div className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-black text-white opacity-80">
                    🔥 Hot
                  </div> */}

                  {/* Image */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-2xl opacity-0 group-hover:opacity-60 transition duration-500"></div>

                    <Image
                      src={token.icon}
                      alt={token.alt}
                      width={900}
                      height={700}
                      className="relative z-10 rounded-full bg-contain w-full h-full  object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>

                  {/* Title */}
                  <p className="text-sm sm:text-base font-semibold capitalize text-gray-800 group-hover:text-gray-900 transition">
                    {token.name}
                  </p>

                  {/* Subtitle / CTA */}
                  {/* <span className="mt-2 text-xs text-gray-500 group-hover:text-blue-600 transition">
                    Explore →
                  </span> */}

                  {/* Bottom Line Animation */}
                  <div className="mt-3 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-10 transition-all duration-300"></div>

                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Trending;














// import Image from 'next/image';
// import React from 'react';

// import Link from 'next/link';

// const Trending = ({ trendingData, heading }) => {


//     return (
//         <div className="w-full  py-2 overflow-hidden">
//             <div className="w-full mx-auto">
//             <div className='mb-8 space-y-2'>
//                     <h2 className="text-3xl font-bold text-center text-gray-800 ">
//                         {heading}
                        
//                     </h2>
//                     {/* <AnimatedLineGradient /> */}
//                 </div> 

//                 <div className="relative overflow-hidden">


//                     {/* Marquee container */}
//                     <div className="flex animate-marquee">
//                         {/* First set of tokens */}
//                         {trendingData?.map((token: any, index: any) => (
//                             <Link
//                             target="_blank"rel="nofollow noopener noreferrer" href={token?.link}
//                                 key={`token-1-${index}`}
//                                 className={`flex-shrink-0 mx-2  rounded-2xl p-2 duration-300  cursor-pointer`}
//                             >
//                                 <div className="flex flex-col items-center">
//                                     <div className="">

//                                         <Image
//                                             src={token.icon}
//                                             alt={token.alt}
//                                             width={320}
//                                             height={220}
//                                             className="rounded-full w-52 h-52 object-contain "
//                                         />

//                                     </div>
//                                     {/* <p className="text-sm font-semibold text-white text-center">
//                                         {token.name}
//                                     </p> */}
//                                 </div>
//                             </Link>
//                         ))}

//                         {/* Duplicate set for seamless loop */}
//                         {trendingData?.map((token: any, index: any) => (
//                             <Link
//                               target="_blank"rel="nofollow noopener noreferrer" href={token?.link}
//                                 key={`token-2-${index}`}
//                                 className={`flex-shrink-0 mx-2  rounded-2xl p-2 duration-300  cursor-pointer`}
//                             >
//                                 <div className="flex flex-col items-center">
//                                     <div className="">

//                                         <Image
//                                             src={token.icon}
//                                             alt={token.alt}
//                                             width={320}
//                                             height={220}
//                                             className="rounded-full w-52 h-52 object-contain "
//                                         />

//                                     </div>
//                                     <p className="text-sm font-semibold text-white text-center">
//                                         {token.name}
//                                     </p>
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-marquee {
//           animation: marquee 20s linear infinite;
//         }

//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//         </div>
//     );
// };

// export default Trending;