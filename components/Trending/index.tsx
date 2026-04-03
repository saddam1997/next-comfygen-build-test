import Image from "next/image";
import Link from "next/link";
import React from "react";

const Trending = ({ trendingData = [], heading }: any) => {
  // limit to only 5 items
  const data = trendingData.slice(0, 5);

  return (
    <div className="w-full py-6">
      <div className="max-w-9xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {heading}
          </h2>
        </div>

        {/* Grid */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-4
        ">
          {data.map((token: any, index: number) => (
            <Link
              key={index}
              href={token?.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group bg-white rounded-2xl p-4 shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex flex-col items-center">

                <Image
                  src={token.icon}
                  alt={token.alt}
                  width={150}
                  height={150}
                  className="rounded-full w-28 h-28 sm:w-32 sm:h-32 object-contain group-hover:scale-105 transition"
                />

                <p className="mt-3 text-sm sm:text-base font-semibold text-gray-700">
                  {token.name}
                </p>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
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