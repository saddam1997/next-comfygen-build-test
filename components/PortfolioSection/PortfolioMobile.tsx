// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import dynamic from "next/dynamic";

// const ArrowIcon = dynamic(() =>
//   import("react-icons/md").then((m) => m.MdOutlineArrowOutward)
// );

// export default function PortfolioMobile({ Portfoliodata }: any) {

//   const truncateText = (text: string, limit = 200) =>
//     !text ? "" : text.length > limit ? text.slice(0, limit) + "..." : text;

//   return (
//     <div className="md:hidden flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory scrollbar-hide">
//       {Portfoliodata.map((item: any, i: number) => (
//         <div key={i} className="shrink-0 w-[90vw] max-w-sm snap-center">
//           <div className="rounded-3xl bg-gray-100 shadow-xl p-4 flex flex-col gap-5">

//             <div className="relative w-full aspect-[4/3]">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 priority={i === 0}   
//                 sizes="(max-width: 768px) 90vw"
//                 className="object-contain"
//               />
//             </div>

//             <h3 className="text-sm font-semibold">{item.title}</h3>

//             <p>
//               {truncateText(
//                 item.description.replace(/<[^>]*>?/gm, ""),
//                 200
//               )}
//             </p>

//             <Link href={item.link}>
//               <span className="inline-flex items-center gap-2 border border-[#2821a8]
//                 text-[#322bbd] px-4 py-2 rounded-full text-xs">
//                 View Case Study <ArrowIcon />
//               </span>
//             </Link>

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }