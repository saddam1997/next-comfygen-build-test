
import Image from "next/image";
import Link from "next/link";

const flags = [
  "https://www.comfygen.com/comfygen-images/home-image/india.webp",
  "https://www.comfygen.com/comfygen-images/home-image/USA.webp",
  "https://www.comfygen.com/comfygen-images/home-image/GERMANY.webp",
  "https://www.comfygen.com/comfygen-images/home-image/United Arab Emirates.webp",
  "https://www.comfygen.com/comfygen-images/home-image/canada.webp",
];

const avatars = [
  "https://www.comfygen.com/comfygen-images/home-image/Nhi Do.webp",
  "https://www.comfygen.com/comfygen-images/home-image/James Lawrence.webp",
  "https://www.comfygen.com/comfygen-images/home-image/Avinash.webp",
  "https://www.comfygen.com/comfygen-images/home-image/Rob Lipps.webp",
];

export default function StatsBanner() {
  return (
    <div className="hidden lg:block w-full max-w-2xl">

      <div className="grid grid-cols-3 gap-4">

        {/* LEFT */}
        <div className="flex flex-col gap-4">

          <Link
            href="https://www.comfygen.com/about-us"
            className="bg-indigo-400/60 rounded-xl px-3 py-4 flex items-center gap-3"
          >
            <div className="bg-[#E1EED0] rounded-lg p-2 flex-shrink-0">
              <svg className="w-5 h-5" fill="#78A43F" viewBox="0 0 24 24">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
            </div>
            <p className="text-white text-sm font-semibold leading-tight">
              8+ Years of <br /> experience
            </p>
          </Link>

          <Link
            href="https://www.comfygen.com/portfolio"
            className="bg-indigo-400/60 rounded-xl px-3 py-4 flex items-center gap-3"
          >
            <div className="bg-[#D0E2EF] rounded-lg p-2 flex-shrink-0">
              <svg className="w-5 h-5" fill="#63A2CF" viewBox="0 0 24 24">
                <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
              </svg>
            </div>
            <p className="text-white text-sm font-semibold leading-tight">
              550+ Projects <br /> Delivered
            </p>
          </Link>

        </div>

        {/* MIDDLE */}
        <Link
          href="https://www.comfygen.com/client-testimonials"
          className="bg-indigo-400/60 rounded-xl px-4 py-4 flex flex-col justify-center gap-3"
        >
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 relative rounded-full border-2 border-white overflow-hidden bg-gray-300"
                style={{ marginLeft: i === 0 ? 0 : -10 }}
              >
                <Image
                  src={src}
                  alt={`Client ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            ))}
          </div>

          <p className="text-white text-sm font-semibold leading-tight">
            400+ Happy <br /> Clients
          </p>
        </Link>

        {/* RIGHT */}
        <div className="bg-indigo-400/60 rounded-xl px-4 py-4 flex flex-col justify-center gap-3">

          <p className="text-white text-sm font-semibold leading-tight">
            30+ Countries <br /> Served
          </p>

          <div className="flex flex-wrap">
            {flags.map((flag, i) => (
              <div
                key={i}
                className="w-8 h-8 relative rounded-full border-2 border-white overflow-hidden bg-gray-300"
                style={{ marginLeft: i === 0 ? 0 : -10 }}
              >
                <Image
                  src={flag}
                  alt="flag"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

































// import Image from "next/image";
// import Link from "next/link";

// const flags = [
//   "https://www.comfygen.com/comfygen-images/home-image/india.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/USA.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/GERMANY.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/United Arab Emirates.webp",
//    "https://www.comfygen.com/comfygen-images/home-image/canada.webp"
// ];

// const avatars = [
//   "https://www.comfygen.com/comfygen-images/home-image/Nhi Do.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/James Lawrence.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/Avinash.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/Rob Lipps.webp",
// ];

// export default function StatsBanner() {
//   return (
//     <div className="hidden lg:block w-full max-w-2xl  rounded-2xl">
//       <div className="grid grid-cols-3 gap-3">

//         {/* Left column — 2 stacked cards */}
//         <div className="flex flex-col gap-3">
//           {/* Experience */}
//           <Link href={"https://www.comfygen.com/about-us "} className="bg-indigo-400/60 rounded-xl px-2 py-3 flex items-center gap-3">
//             <div className="bg-[#E1EED0] rounded-lg p-2 flex-shrink-0">
//               {/* Briefcase icon */}
//               <svg
//                 className="w-5 h-5 text-white"
//                fill="#78A43F"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
//                 />
//               </svg>
//             </div>
//             <p className="text-white font-semibold text-sm leading-tight">
//               8+ Years of<br />experience
//             </p>
//           </Link>

//           {/* Projects */}
//           <Link href={"https://www.comfygen.com/portfolio "} className="bg-indigo-400/60 rounded-xl px-4 py-3 flex items-center gap-3">
//             <div className="bg-[#D0E2EF] rounded-lg p-2 flex-shrink-0">
//               {/* Lightning icon */}
//               <svg
//                 className="w-5 h-5 text-white"
//                 fill="#63A2CF"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
//               </svg>
//             </div>
//             <p className="text-white font-semibold text-sm leading-tight">
//               550+ Projects<br />Delivered
//             </p>
//           </Link>
//         </div>

//         {/* Middle — Clients */}
//         <Link  href={"https://www.comfygen.com/client-testimonials"} className="bg-indigo-400/60 rounded-xl px-4 py-3 flex flex-col justify-center gap-3">
//           {/* Overlapping avatars */}
//           <div className="flex items-center">
//             {avatars.map((src, i) => (
//               <div
             
//                 key={i}
//                 className="w-10 h-10 rounded-full border-2 border-white overflow-hidden flex-shrink-0"
//                 style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: i }}
//               >
//                 <Image
//                   src={src}
//                   alt={`Client ${i + 1}`}
//                   width={100}
//                   height={100}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//           <p className="text-white font-semibold text-sm leading-tight">
//             400+ Happy<br />Clients
//           </p>
//         </Link>

//         {/* Right — Countries */}
//         <div className="bg-indigo-400/60 rounded-xl px-4 py-3 flex flex-col justify-center gap-3">
//           <p className="text-white font-semibold text-sm leading-tight">
//             30+ Countries<br />Served
//           </p>
//           {/* Flag emojis */}
//           <div className="flex flex-wrap ">
//             {flags.map((flag, i) => (
//               <div key={i}
//                 className="w-8 h-8 text-center  rounded-full border-2 border-white overflow-hidden flex-shrink-0"
//                 style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: i }}>
//                   <Image
//                   src={flag}
//                   alt={`Client ${i + 1}`}
//                   width={100}
//                   height={100}
//                   className="w-full h-full object-cover"
//                 />

//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }