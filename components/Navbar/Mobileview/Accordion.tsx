"use client";

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Accordion = ({ data, active, setActive, onLinkClick }: any) => {
  const isOpen = active === data.id;
  const [activeSub, setActiveSub] = useState<number | null>(null);

  return (
    <div className="border-b border-gray-100">

      {/* HEADER */}
      <button
        onClick={() => setActive(isOpen ? 0 : data.id)}
        className={`flex w-full justify-between items-center px-6 py-3 text-left transition-colors
        ${isOpen ? "bg-blue-50 text-blue-600" : ""}`}
      >
        <div className="flex items-center gap-2 min-h-[24px]">

          {/* ICON SPACE RESERVED */}
          <div className="w-4 h-4 relative shrink-0">
            <Image
              src={data.icon}
              alt=""
              fill
              sizes="16px"
              className="object-contain"
            />
          </div>

          <span className="text-sm font-medium">{data.title}</span>
        </div>

        <MdKeyboardArrowDown
          size={22}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* MAIN CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 space-y-3">

          {data.sections.map((section: any) => {
            const isSubOpen = activeSub === section.id;

            return (
              <div key={section.id}>

                {/* SUB HEADER */}
                <button
                  onClick={() =>
                    setActiveSub(isSubOpen ? null : section.id)
                  }
                  className={`flex w-full justify-between items-center py-2 text-left
                  ${isSubOpen ? "font-semibold text-black" : ""}`}
                >
                  <span className="text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    {section.label}
                  </span>

                  <MdKeyboardArrowDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isSubOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* SUB ITEMS */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isSubOpen ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <ul className="pl-4 space-y-2 text-sm pt-1">

                    {section.items.map((item: any) => (
                      <li key={item.url}>
                        <Link
                          href={item.url}
                          onClick={onLinkClick}
                          className="block py-1 hover:translate-x-2 transition"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}

                  </ul>
                </div>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
};

export default Accordion;





// "use client";
// import { useState } from "react";
// import { MdKeyboardArrowDown } from "react-icons/md";

// import { RiBitCoinLine, RiPhoneLockLine } from "react-icons/ri";
// import Link from "next/link";
// import Image from "next/image";

// const Accordion = ({
//   data,
//   active,
//   setActive,
//   onLinkClick,
// }: any) => {
//   const Icon = data.icon;
//   const isOpen = active === data.id;

//   // ✅ Sub menu active state
//   const [activeSub, setActiveSub] = useState<number | null>(null);

//   return (
//     <div>
//       {/* MAIN ACCORDION HEADER */}
//       <div
//         onClick={() => setActive(isOpen ? 0 : data.id)}
//         className={`flex justify-between items-center px-6 py-2 cursor-pointer transition-colors duration-200 ${isOpen ? "bg-blue-50 text-blue-600 py-3" : " py-2"} `}
//       >
//         <div className="flex items-center gap-2 ">
//           <Image className="w-4 bg-contain" src={data.icon} alt="" width={100} height={50}/>
//           <span>{data.title}</span>
//         </div>

//         <MdKeyboardArrowDown
//           size={24}
//           className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
//             }`}
//         />
//       </div>

//       {/* MAIN CONTENT */}
//       <div
//         className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 " : "grid-rows-[0fr] opacity-0"
//           }`}
//       >
//         <div className="overflow-hidden px-6 pb-4 space-y-3">

//           {data.sections.map((section: any) => {
//             const isSubOpen = activeSub === section.id;

//             return (
//               <div key={section.id}>

//                 {/* SUB ACCORDION HEADER */}
//                 <div
//                   onClick={() =>
//                     setActiveSub(isSubOpen ? null : section.id)
//                   }
//                   className={`flex justify-between items-center py-2 cursor-pointer ${isSubOpen ? " text-black font-bold": ""}`}
//                 >
//                   <span className=" text-sm flex items-center gap-2">
//                     <div className="w-1 h-1 bg-black rounded-full"></div> {section.label}
//                   </span>

//                   <MdKeyboardArrowDown
//                     size={20}
//                     className={`transition-transform duration-300 ${isSubOpen ? "rotate-180" : ""
//                       }`}
//                   />
//                 </div>

//                 {/* SUB MENU ITEMS */}
//                 <div
//                   className={`grid transition-all duration-300 ${isSubOpen
//                     ? "grid-rows-[1fr]"
//                     : "grid-rows-[0fr]"
//                     }`}
//                 >
//                   <ul className="overflow-hidden pl-4 space-y-2 text-sm">
//                     {section.items.map((item: any) => (
//                       <li key={item.url}>
                        
//                         <Link
//                           href={item.url}
//                           onClick={onLinkClick}
//                           className="block hover:translate-x-2 transition "
//                         >
//                          {item.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Accordion;