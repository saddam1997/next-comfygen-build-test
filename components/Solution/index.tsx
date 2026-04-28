"use client";

import React, { useState } from "react";
import HeadingTwo from "../ui/HeadingTwo";

const Solution = ({ techData }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? techData.tech
    : techData.tech.slice(0, 6);

  return (
    <section className="lg:py-8 py-10 bg-[#fff]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-4 text-center">

          <div className="flex flex-col justify-center text-center lg:w-5/6 mx-auto">
            <HeadingTwo color={"#212121"} text={techData.heading} />
            <p
              className="pt-4 text-sm"
              dangerouslySetInnerHTML={{ __html: techData?.subheading }}
            />
          </div>

          <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
            {visibleItems.map((item: any, index: any) => {
              const { title, desc, desc1, desc2, listItems = [] } = item;

              return (
                <div
                  key={index}
                  className="border-2 p-6 space-y-2 bg-white border-[#5556D1]/40 rounded-2xl"
                >
                  <h3
                    className="text-xl text-[#212121] font-semibold"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />

                  <p
                    className="text-sm mt-2"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />

                  {desc1 && <p className="text-sm mt-2">{desc1}</p>}
                  {desc2 && <p className="text-sm mt-2">{desc2}</p>}

                  {listItems.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {listItems.map((liItem: any, idx: any) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="mt-[6px] w-1.5 h-1.5 bg-black rounded-full"></span>
                          <span>{liItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {techData.tech.length > 6 && (
            <div className="pt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 bg-[#5556D1] text-white rounded-full"
              >
                {showAll ? "Show Less" : "See More"}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Solution;













// import React, { useState } from "react";
// import HeadingTwo from "../ui/HeadingTwo";

// const Solution = ({ techData }) => {
//   const [showAll, setShowAll] = useState(false);

//   return (
//     <section className="lg:py-8 py-10 bg-[#fff]">
//       <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
//         <div className="space-y-4 text-center">

//           <div className="flex flex-col justify-center text-center lg:w-5/6 mx-auto">
//             <HeadingTwo color={"#212121"} text={techData.heading} />
//             <p
//               className="pt-4 text-sm"
//               dangerouslySetInnerHTML={{ __html: techData?.subheading }}
//             />
//           </div>

//           <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
//             {techData.tech.map((item:any, index:any) => {
//               const { title, desc, desc1, desc2, listItems = [] } = item;

//               // 👇 hide after 6 using CSS (NOT removing from DOM)
//               const isHidden = !showAll && index >= 6;

//               return (
//                 <div
//                   key={index}
//                   className={`border-2 p-6 space-y-2 bg-white border-[#5556D1]/40 rounded-2xl 
//                   ${isHidden ? "hidden" : ""}`}
//                 >
//                   <h3
//                     className="text-xl text-[#212121] font-semibold"
//                     dangerouslySetInnerHTML={{ __html: title }}
//                   />

//                   <p
//                     className="text-sm mt-2"
//                     dangerouslySetInnerHTML={{ __html: desc }}
//                   />

//                   {desc1 && <p className="text-sm mt-2">{desc1}</p>}
//                   {desc2 && <p className="text-sm mt-2">{desc2}</p>}

//                   {listItems.length > 0 && (
//                     <ul className="mt-3 space-y-2">
//                       {listItems.map((liItem:any, idx:any) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm">
//                           <span className="mt-[6px] w-1.5 h-1.5 bg-black rounded-full"></span>
//                           <span>{liItem}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {techData.tech.length > 6 && (
//             <div className="pt-8 text-center">
//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="px-6 py-2 bg-[#5556D1] text-white rounded-full"
//               >
//                 {showAll ? "Show Less" : "See More"}
//               </button>
//             </div>
//           )}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solution;






















