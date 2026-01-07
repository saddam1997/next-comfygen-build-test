import React, { useState, useEffect } from "react";

const CardFeatures = ({ featuresData = [], grid, heading, description }) => {
    const [openedFeature, setOpenedFeature] = useState<any | null>(null);

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

    if (!featuresData || featuresData.length === 0) {
        return null; // or fallback UI
    }

    return (
        <section className="bg-center bg-repeat bg-fixed">
            <div className="bg-gradient-to-r from-[#272868]/95 to-[#5556D1]/95 lg:py-16 py-10">
                <div className="space-y-2">
                    <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white">
                       {heading}
                    </h2>
                    <p className="text-white max-w-6xl mx-auto lg:px-8 px-4" 
                        dangerouslySetInnerHTML={{ __html: description }} />
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-${grid} gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10`}>
                    {featuresData.map((feature: any) => (
                        <div
                            key={feature.id}
                            className={`rounded-full flex justify-center border cursor-pointer ${
                                openedFeature?.id === feature.id
                                    ? "bg-white hover:bg-gray-100 text-black border-gray-300"
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

                {openedFeature && (
                    <div className="mt-8 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:w-10/12 w-11/12">
                        {openedFeature.additionalDetails?.map((detail: any, index: number) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <h3
                                    dangerouslySetInnerHTML={{ __html: detail.details }}
                                    className="text-xl font-semibold mb-2 text-[#272868]"
                                />
                                <p
                                    className="text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: detail.content }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default CardFeatures;




// import React, { useState } from "react";



// const CardFeatures = ({ featuresData, grid, heading, description }) => {
//   const [openedFeature, setOpenedFeature] = useState<any | null>(null);

//     const handleButtonClick = (feature:any) => {
//         if (openedFeature?.id !== feature.id) {
//             setOpenedFeature(feature);
//         }
//     };

//     return (
//         <section className="bg-center bg-repeat bg-fixed">
//             <div className="bg-gradient-to-r from-[#272868]/95 to-[#5556D1]/95 lg:py-16 py-10">
//                 <div className="space-y-2">
//                     <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white">
//                        {heading}
//                     </h2>
//                     <p className="text-white max-w-6xl mx-auto lg:px-8 px-4" dangerouslySetInnerHTML={{ __html: description }}></p>
//                 </div>

//                 <div className={`grid grid-cols-1 sm:grid-cols-${grid}  gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10`}>
//                     {featuresData?.map((feature:any) => (
//                         <div
//                             key={feature.id}
//                             className={`rounded-full flex justify-center border cursor-pointer ${openedFeature?.id === feature.id
//                                 ? "bg-white hover:bg-gray-100 text-black border-gray-300"
//                                 : "bg-[#5556D1] text-white border-[#5556D1]"
//                                 }`}
//                         >
//                             <button
//                                 className="text-lg font-medium p-2 focus:outline-none w-full mx-auto"
//                                 onMouseEnter={() => handleButtonClick(feature)}
//                             >

//                                 {feature?.title}
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 {openedFeature && (
//                     <div className="mt-8 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:w-10/12 w-11/12">
//                         {openedFeature?.additionalDetails.map((detail, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
//                             >
//                                 <h3
//                                     dangerouslySetInnerHTML={{ __html: detail.details }}
//                                     className="text-xl font-semibold mb-2 text-[#272868]"
//                                 // {detail.details}

//                                 />
//                                 <p
//                                     className="text-gray-700"
//                                     dangerouslySetInnerHTML={{ __html: detail.content }}
//                                 />
//                             </div>

//                         ))}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default CardFeatures;
