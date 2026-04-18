import Image from "next/image";

export default function Card({ Data }: any) {
  return (
    <section className="bg-white py-10 lg:py-16 px-3 sm:px-4 lg:px-20 xl:px-10">
      <div className="mx-auto space-y-12 lg:space-y-16">

        {Data?.infData?.map((item: any) => {
          const isLeft = item.imagePosition === "left";

          return (
            <article
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-14"
            >
              {/* IMAGE */}
              <div className={`${isLeft ? "" : "lg:order-2"}`}>
                <div className="w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.imageSrc}
                    alt={item.heading}
                    width={907}
                    height={762}
                    priority={item.id === 1}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className={`${isLeft ? "" : "lg:order-1"}`}>
                <header className="space-y-4 lg:space-y-5">

                  {/* HEADING */}
                  <h3 className="text-lg sm:text-xl xl:text-2xl text-[#212121] font-bold leading-snug">
                    {item.heading}
                  </h3>

                  {/* DESCRIPTION */}
                  <div className="space-y-3 lg:space-y-4">

                    {item.description1 && (
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                        {item.description1}
                      </p>
                    )}

                    {item.description2 && (
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                        {item.description2}
                      </p>
                    )}

                    {item.description3 && (
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                        {item.description3}
                      </p>
                    )}

                    {/* POINTS */}
                    <ul className="space-y-2 lg:space-y-3">
                      {item.points?.map((point: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3">
                          <span className="mt-2 w-[5px] h-[5px] lg:w-2 lg:h-2 bg-[#5556D1] rounded-full shrink-0"></span>
                          <span className="text-sm sm:text-base text-gray-800 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {item.description4 && (
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item.description4}
                      </p>
                    )}

                  </div>
                </header>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
























// import Link from "next/link";
// import Image from "next/image";


// export default function Card({ Data }: any) {
//   return (
//     <section className="bg-white lg:py-16 py-10 lg:p-0 p-2">
//       <div className=" mx-auto space-y-16">

//         {Data?.infData?.map((item: any) => {
//           const isLeft = item.imagePosition === "left";

//           return (
//             <article
//               key={item.id}
//               className="grid lg:grid-cols-2 items-center gap-14"
//             >
//               {/* IMAGE */}
//               <div className={`${isLeft ? "" : "lg:order-2"}`}>
//                 <Image
//                   src={item.imageSrc}
//                   alt={item.heading} // ✅ SEO fix
//                   width={907}
//                   height={762}
//                   className="rounded-2xl"
//                   priority={item.id === 1} // ✅ LCP optimization
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className={`${isLeft ? "" : "lg:order-1"}`}>
//                 <header className="space-y-4">
//                   <h3 className="xl:text-2xl text-xl text-[#212121] font-bold">
//                     {item.heading}
//                   </h3>

//                   <div className="space-y-4">
//                     {item.description1 && <p className="text-xs lg:text-base font-medium">{item.description1}</p>}
//                     {item.description2 && <p className="text-xs lg:text-base font-medium">{item.description2}</p>}
//                     {item.description3 && <p className="text-xs lg:text-base font-medium">{item.description3}</p>}

//                     {/* POINTS */}
//                     <ul className="space-y-2">
//                       {item.points?.map((point: string, i: number) => (
//                         <li key={i} className="flex items-start gap-2">
//                           <span className="lg:w-2 lg:h-2 w-[4px] h-[4px] mt-2 bg-[#5556D1] rounded-full"></span>
//                           <span className="text-xs lg:text-base font-medium">{point}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     {item.description4 && <p>{item.description4}</p>}
//                   </div>
//                 </header>

              
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// }