// components/Card.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import HeadingThree from "../ui/HeadingThree";
import ParagraphText from "../ui/ParagraphText";

const Card = ({ item, isActive }: any) => {
  return (
    <div
      className={`rounded-2xl border bg-white shadow-lg flex flex-col lg:flex-row lg:items-center lg:gap-6
      p-3 lg:p-4 transition-all duration-300 ${isActive ? "scale-100" : "scale-95 opacity-80"
        }`}
    >
      <div className=" w-full">
        <Image
          src={item.image}
          alt={item.title}
          width={700}
          height={450}
          className="object-contain h-80 "
          draggable={false}
          priority={isActive}
         
        />
      </div>

      <div className="w-full">
        <HeadingThree color="black" text={item.title} />
        <ParagraphText color="black" text={item.description} />

        <Link
          href={item.link}
          aria-label={`View ${item.title} case study`}
        >
          <span
            className="inline-flex items-center justify-center mt-3 gap-2
         border border-[#453de3] text-[#453ecf]
         px-4 py-2 text-xs lg:text-sm rounded-full
         hover:bg-[#6C63FF] hover:text-white transition"
          >             View Case Study <MdOutlineArrowOutward />
          </span>         </Link>
      </div>
    </div>
  );
};

export default React.memo(Card);













// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import HeadingThree from "../ui/HeadingThree";
// import ParagraphText from "../ui/ParagraphText";

// const Card = ({ item, isActive }: any) => {
//   return (
//     <div
//       className={`rounded-2xl border bg-white shadow-lg flex flex-col lg:flex-row lg:items-center lg:gap-6
//       p-3 lg:p-4 transition-all duration-300 ${
//         isActive ? "scale-100" : "scale-95 opacity-80"
//       }`}
//     >
//       <div className="flex justify-center">
//         <Image
//           src={item.image}
//           alt={item.title}
//           width={700}
//           height={450}
//           className="h-[150px] lg:h-[260px] object-contain"
//           draggable={false}
//           priority={isActive}
//           sizes="(max-width: 768px) 90vw, 500px"
//         />
//       </div>

//       <div className="flex flex-col mt-2 lg:mt-0">
//         <HeadingThree color="black" text={item.title} />
//         <ParagraphText color="black" text={item.description} />

//         <Link href={item.link}>
//           <span className="inline-flex items-center mt-3 gap-2 border border-[#453de3] text-[#453ecf] px-4 py-2 text-xs lg:text-sm rounded-full hover:bg-[#6C63FF] hover:text-white transition">
//             View Case Study <MdOutlineArrowOutward />
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// // 🔥 CRITICAL OPTIMIZATION
// export default React.memo(Card);



// import Image from "next/image";
// import Link from "next/link";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import HeadingThree from "../ui/HeadingThree";
// import ParagraphText from "../ui/ParagraphText";

// export default function Card({ item, isActive }) {
//   return (
//     <div
//       className={`rounded-2xl border bg-white shadow-lg flex flex-col lg:flex-row lg:items-center lg:gap-6
//       p-3 lg:p-4  lg:h-auto  transition-all duration-300 ${isActive ? "scale-100" : "scale-95 opacity-80"}`}
//     >

//       {/* IMAGE */}
//       <div className="flex justify-center ">
//         <Image
//           src={item.image}
//           alt={item.title}
//           width={700}
//           height={450}
//           className="h-[150px] lg:h-[260px] object-contain"
//           draggable={false}
//           priority={isActive}
//           sizes="(max-width: 768px) 90vw, 500px"
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="flex flex-col  mt-2 lg:mt-0 ">
//         <div>

//           <HeadingThree color={"black"} text={item.title} />
//           <ParagraphText color={"black"} text={item.description} />

//         </div>

//         {/* CTA */}
//         <Link
//           href={item.link}
//           aria-label={`View ${item.title} case study`}
//         >
//           <span
//             className="inline-flex items-center justify-center mt-3 gap-2
//         border border-[#453de3] text-[#453ecf]
//         px-4 py-2 text-xs lg:text-sm rounded-full
//         hover:bg-[#6C63FF] hover:text-white transition"
//           >
//             View Case Study <MdOutlineArrowOutward />
//           </span>
//         </Link>

//       </div>
//     </div>
//   );
// }