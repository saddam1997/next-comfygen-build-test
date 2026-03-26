

import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { parseHTMLString } from "../../lib/parseHTML";

export default function Card({ SliderDATA }: any) {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="">
        
        {/* Header */}
        <header className="text-center max-w-7xl space-y-3 mx-auto mb-10">
          <HeadingTwo  color="black" text={SliderDATA.heading} />
          <ParagraphText  color="black" text={SliderDATA.description} />
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SliderDATA?.IndustriesServe?.map((app: any) => (
            <article
              key={app.id} // ✅ stable key
              className="group relative  bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 flex flex-col hover:shadow-md hover:-translate-y-1"
            >
              
              {/* Top bar */}
              <div className="h-1 w-full bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-[#5951cd] group-hover:via-[#5951cd] group-hover:to-[#5951cd] transition-all duration-300" />

              <div className="p-6 flex flex-col flex-1">
                
                {/* Title */}
                <h3 className="text-base font-extrabold uppercase tracking-wide leading-snug text-gray-900 group-hover:text-block transition-colors duration-200">
                  {app.title}
                </h3>

                <div className="h-px mb-4 bg-gray-100 group-hover:bg-[#5951cd] transition-all duration-300" />

                {/* Description */}
                <p className="text-gray-800 text-sm leading-relaxed flex-1 min-h-[100px]">
                  {parseHTMLString(app.description)}
                </p>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#5951cd] to-[#5951cd] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



















// "use client";

// import { useState } from "react";
// import HeadingTwo from "../ui/HeadingTwo";
// import ParagraphText from "../ui/ParagraphText";
// import { parseHTMLString } from "../../lib/parseHTML"

// export default function Card({ SliderDATA }) {
//     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//     return (
//         <section className="relative bg-white overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
//             <div className="relative max-w-6xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center space-y-3 mx-auto mb-10">
//                      <HeadingTwo color="black" text={SliderDATA.heading} />
//                     <ParagraphText color="black" text={SliderDATA.description} />
//                 </div>
//                 {/* Cards Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {SliderDATA?.IndustriesServe.map((app: any, index: any) => {
//                         const isHovered = hoveredIndex === index;
//                         return (
//                             <div
//                                 key={index}
//                                 onMouseEnter={() => setHoveredIndex(index)}
//                                 onMouseLeave={() => setHoveredIndex(null)}
//                                 className={`group relative bg-white border rounded-sm overflow-hidden cursor-pointer transition-all duration-300 flex flex-col ${isHovered ? "border-amber-500 shadow-[0_8px_30px_rgba(245,158,11,0.2)] -translate-y-1" : "border-gray-200 shadow-sm hover:shadow-md" }`}
//                             >
//                                 {/* Top color bar */}
//                                 <div
//                                     className={`h-1 w-full transition-all duration-300 ${isHovered
//                                         ? "bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"
//                                         : "bg-gray-100"
//                                         }`}
//                                 />

//                                 <div className="p-6 flex flex-col flex-1">
//                                     {/* Badge + Title Row */}
//                                     <div className="flex items-start justify-between gap-3 mb-3">
//                                         <h3
//                                             className={`text-base  font-extrabold uppercase tracking-wide leading-snug transition-colors duration-200 ${isHovered ? "text-amber-600" : "text-gray-900"
//                                                 }`}
//                                         >
//                                             {app.title}
//                                         </h3>
//                                     </div>
//                                     <div
//                                         className={`h-px mb-4 transition-all duration-300 ${isHovered ? "bg-amber-200" : "bg-gray-100"
//                                             }`}
//                                     />

//                                     <p className="text-gray-800 text-sm leading-relaxed flex-1">
//                                         {parseHTMLString(app.description)}
//                                     </p>
//                                 </div>
//                                 <div
//                                     className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500 ${isHovered ? "w-full" : "w-0"
//                                         }`}
//                                 />
//                             </div>
//                         );
//                     })}
//                 </div>


//             </div>
//         </section>
//     );
// }