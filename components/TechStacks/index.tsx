
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import TechStacksClient from "./TechStacksClient";

export default function TechStacks({ TabData, TechData, Default }) {
  const defaultTab = TabData[0]; // ✅ fixed

  return (
    <section className="bg-black px-2 py-5 lg:py-20">

      <div className="max-w-7xl mx-auto text-center py-4 space-y-4">
        <HeadingTwo color="white" text={TechData.heading} />
        <ParagraphText color="white" text={TechData.description} />
      </div>

      <TechStacksClient
        TabData={TabData}
        TechData={TechData}
        defaultTab={defaultTab}
      />

    </section>
  );
}





























// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import HeadingTwo from "../ui/HeadingTwo";
// import ParagraphText from "../ui/ParagraphText";


// export default function TechStacks({ TabData, TechData, Default }: any) {
//     const [activeTab, setActiveTab] = useState(Default);

//     const techs = TechData.TechItems[activeTab] || [];

//     return (
//         <section className="h-full  bg-black flex flex-col items-center justify-center px-2 py-5 lg:py-20 font-sans rounded-md">
//             {/* Heading */}
//             <div className="max-w-7xl mx-auto text-center py-4 space-y-4">
//                 <HeadingTwo color={"white"} text={TechData.heading} />
//                 <ParagraphText color={"white"} text={TechData.description} />

//             </div>

//             {/* Card */}
//             <div className="bg-[#1a1a1a] rounded-2xl p-2 md:p-10 w-full max-w-5xl mx-auto shadow-2xl">


//                 {/* Tabs mobile view*/}
//                 <div className="lg:hidden flex-cols space-y-3 flex-wrap gap-2 mb-8 justify-center ">
//                     {TabData.map((tab: any, index: any) => {

//                         const isActive = activeTab === tab;


//                         return (
//                             <div  key={index} className="space-y-2">
//                                 <button
//                                     key={index}
//                                     onClick={() => setActiveTab(tab)}
//                                     className={`w-full space-y-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 border ${activeTab === tab
//                                         ? "bg-white text-black border-white"
//                                         : "bg-transparent text-gray-300 border-gray-600 hover:border-gray-400 hover:text-white"
//                                         }`}
//                                 >
//                                     {tab}

//                                 </button>
//                                 {isActive && (
//                                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
//                                         {techs.map((tech: any, index: any) => (
//                                             <div
//                                                 key={index}
//                                                 className="bg-[#111111] border border-gray-800 rounded-xl flex flex-col items-center justify-center py-3 px-1 gap-3 hover:border-gray-500 hover:bg-[#1f1f1f] transition-all duration-200 cursor-pointer group"
//                                             >
//                                                 <div className="group-hover:scale-110 transition-transform duration-200">
//                                                     <Image src={tech.img} alt="" width={40} height={40} />
//                                                 </div>
//                                                 <span className="text-gray-300 text-sm font-medium text-center">
//                                                     {tech.name}
//                                                 </span>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}


//                             </div>
//                         )
//                     })}
//                 </div>

//                 {/* Tabs */}
//                 <div className="hidden lg:flex flex-wrap gap-2 mb-8 justify-center ">
//                     {TabData.map((tab: any, index: any) => (
//                         <button
//                             key={index}
//                             onClick={() => setActiveTab(tab)}
//                             className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 border
//                 ${activeTab === tab
//                                     ? "bg-white text-black border-white"
//                                     : "bg-transparent text-gray-300 border-gray-600 hover:border-gray-400 hover:text-white"
//                                 }`}
//                         >
//                             {tab}
//                         </button>
//                     ))}
//                 </div>




//                 {/* Grid */}
//                 <div className="hidden lg:grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
//                     {techs.map((tech:any, index:any) => (
//                         <div
//                             key={index}
//                             className="bg-[#111111] border border-gray-800 rounded-xl flex flex-col items-center justify-center py-3 px-1 gap-3 hover:border-gray-500 hover:bg-[#1f1f1f] transition-all duration-200 cursor-pointer group"
//                         >
//                             <div className="group-hover:scale-110 transition-transform duration-200">

//                                 <Image src={tech.img} alt="" width={40} height={40} />

//                             </div>
//                             <span className="text-gray-300 text-sm font-medium text-center">
//                                 {tech.name}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

           
//         </section>
//     );
// }