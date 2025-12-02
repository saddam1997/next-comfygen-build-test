import React, { useState, useEffect } from "react";

const CardWallets = ({ featuresData = [], grid, heading, description }) => {
  const [openedFeature, setOpenedFeature] = useState<any | null>(null);

  // Set default opened tab only after data is loaded (avoids SSR crash)
  useEffect(() => {
    if (featuresData.length > 0) {
      setOpenedFeature(featuresData[0]);
    }
  }, [featuresData]);

  const handleButtonClick = (feature: any) => {
    if (openedFeature?.id !== feature.id) {
      setOpenedFeature(feature);
    }
  };

  // Prevent component from rendering until data exists
  if (!featuresData || featuresData.length === 0) return null;

  return (
    <section className="bg-center bg-repeat bg-fixed">
      <div className="lg:py-16 py-10">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-black">
            {heading}
          </h2>

          <p
            className="text-black max-w-6xl mx-auto lg:px-8 px-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        {/* TAB BUTTONS */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-${grid} gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10`}
        >
          {featuresData.map((feature: any) => (
            <div
              key={feature.id}
              className={`rounded-full flex justify-center border cursor-pointer ${
                openedFeature?.id === feature.id
                  ? "bg-white hover:bg-gray-100 text-black border-[#5556D1]"
                  : "bg-[#5556D1] text-white border-[#5556D1]"
              }`}
            >
              <button
                className="text-lg font-medium p-2 focus:outline-none w-full mx-auto"
                onMouseEnter={() => handleButtonClick(feature)}
              >
                {feature.title}
              </button>
            </div>
          ))}
        </div>

        {/* DETAILS SECTION */}
        {openedFeature && (
          <div className="mt-8 mx-auto 2xl:w-10/12 w-11/12">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-[#272868] mb-4">
                {openedFeature?.titlewallet}
              </h3>

              {openedFeature?.description && (
                <p className="text-gray-700 max-w-2/3 mx-auto">
                  {openedFeature.description}
                </p>
              )}
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {openedFeature?.additionalDetails?.map(
                (detail: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border"
                  >
                    <h3
                      dangerouslySetInnerHTML={{ __html: detail?.details }}
                      className="text-xl font-semibold mb-2 text-[#272868]"
                    />
                    <p
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: detail?.content }}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardWallets;



// import React, { useState } from "react";



// const CardWallets = ({featuresData, grid, heading, description }) => {
//   const [openedFeature, setOpenedFeature] = useState<any | null>(null);

//   const handleButtonClick = (feature:any) => {
//     if (openedFeature?.id !== feature.id) {
//       setOpenedFeature(feature);
//     }
//   };

//   return (
//     <section className="bg-center bg-repeat bg-fixed">
//       <div className=" lg:py-16 py-10">
//         <div className="space-y-2">
//           <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-black">
//            {heading}
//           </h2>
//            <p className="text-black max-w-6xl mx-auto lg:px-8 px-4" dangerouslySetInnerHTML={{ __html: description }}></p>
//         </div>

//         <div className={`grid grid-cols-1 sm:grid-cols-${grid} gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10`}>
//           {featuresData.map((feature:any) => (
//             <div
//               key={feature.id}
//               className={`rounded-full flex justify-center border cursor-pointer ${openedFeature?.id === feature.id
//                 ? "bg-white hover:bg-gray-100 text-black border-[#5556D1]"
//                 : "bg-[#5556D1] text-white border-[#5556D1]"
//                 }`}
//             >
//               <button
//                 className="text-lg font-medium p-2 focus:outline-none w-full mx-auto"
//                 onMouseEnter={() => handleButtonClick(feature)}
//               >

//                 {feature.title}
//               </button>
//             </div>
//           ))}
//         </div>

//         {openedFeature && (
//           <div className="mt-8 mx-auto 2xl:w-10/12 w-11/12">
//             {/* Added title and description section */}
//             <div className="mb-8 text-center">
//               <h3 className="text-2xl font-bold text-[#272868] mb-4">
//                 {openedFeature?.titlewallet}
//               </h3>
//               {openedFeature.description && (
//                 <p className="text-gray-700 max-w-2/3 mx-auto">
//                   {openedFeature?.description}
//                 </p>
//               )}
//             </div>

//             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
//               {openedFeature?.additionalDetails.map((detail:any, index:any) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border"
//                 >
//                   <h3
//                     dangerouslySetInnerHTML={{ __html: detail?.details }}
//                     className="text-xl font-semibold mb-2 text-[#272868]"
//                   />
//                   <p
//                     className="text-gray-700"
//                     dangerouslySetInnerHTML={{ __html: detail?.content }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CardWallets;