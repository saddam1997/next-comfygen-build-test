import Image from "next/image";
import Link from "next/link";

import styles from "./StatsBanner.module.css";

const flags = [
  {
    src: "https://www.comfygen.com/comfygen-images/home-image/india.webp",
    alt: "India Flag",
  },
  {
    src: "https://www.comfygen.com/comfygen-images/home-image/USA.webp",
    alt: "USA Flag",
  },
  {
    src: "https://www.comfygen.com/comfygen-images/home-image/GERMANY.webp",
    alt: "Germany Flag",
  },
  {
    src: "https://www.comfygen.com/comfygen-images/home-image/United Arab Emirates.webp",
    alt: "UAE Flag",
  },
  {
    src: "https://www.comfygen.com/comfygen-images/home-image/canada.webp",
    alt: "Canada Flag",
  },
];

const avatars = [
  {
    src: "https://www.comfygen.com/comfygen-images/home-image/Nhi Do.webp",
    alt: "Client Nhi Do",
  },
  {
    src: "https://www.comfygen.com/comfygen-images/home-image/James Lawrence.webp",
    alt: "Client James Lawrence",
  },
  {
    src: "https://www.comfygen.com/comfygen-images/home-image/Avinash.webp",
    alt: "Client Avinash",
  },
  {
    src: "https://www.comfygen.com/comfygen-images/home-image/Rob Lipps.webp",
    alt: "Client Rob Lipps",
  },
];

export default function StatsBanner() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.wrapper}>

        {/* LEFT COLUMN */}
        <div className={styles.leftColumn}>

          {/* Experience */}
          <Link
            href="https://www.comfygen.com/about-us"
            className={styles.card}
            aria-label="About Comfygen"
          >
            <div className={`${styles.iconBox} ${styles.greenBox}`}>
              <svg
                viewBox="0 0 24 24"
                className={styles.icon}
                aria-hidden="true"
              >
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
            </div>

            <p className={styles.cardText}>
              8+ Years of <br /> Experience
            </p>
          </Link>

          {/* Projects */}
          <Link
            href="https://www.comfygen.com/portfolio"
            className={styles.card}
            aria-label="Portfolio"
          >
            <div className={`${styles.iconBox} ${styles.blueBox}`}>
              <svg
                viewBox="0 0 24 24"
                className={styles.icon}
                aria-hidden="true"
              >
                <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
              </svg>
            </div>

            <p className={styles.cardText}>
              550+ Projects <br /> Delivered
            </p>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightWrapper}>

          {/* Clients */}
          <Link
            href="https://www.comfygen.com/client-testimonials"
            className={styles.clientCard}
            aria-label="Client Testimonials"
          >
            <div className={styles.avatarGroup}>
              {avatars.map((item, index) => (
                <div
                  key={index}
                  className={styles.avatar}
                  style={{
                    marginLeft: index === 0 ? "0px" : "-10px",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={40}
                    height={40}
                    quality={70}
                    sizes="40px"
                    className={styles.avatarImage}
                  />
                </div>
              ))}
            </div>

            <p className={styles.cardText}>
              400+ Happy <br /> Clients
            </p>
          </Link>

          {/* Countries */}
          <div className={styles.countryCard}>
            <p className={styles.cardText}>
              30+ Countries <br /> Served
            </p>

            <div className={styles.flagGroup}>
              {flags.map((item, index) => (
                <div
                  key={index}
                  className={styles.flag}
                  style={{
                    marginLeft: index === 0 ? "0px" : "-10px",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={32}
                    height={32}
                    quality={70}
                    sizes="32px"
                    className={styles.flagImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}








// import Image from "next/image";
// import Link from "next/link";

// const flags = [
//   "https://www.comfygen.com/comfygen-images/home-image/india.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/USA.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/GERMANY.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/United Arab Emirates.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/canada.webp",
// ];

// const avatars = [
//   "https://www.comfygen.com/comfygen-images/home-image/Nhi Do.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/James Lawrence.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/Avinash.webp",
//   "https://www.comfygen.com/comfygen-images/home-image/Rob Lipps.webp",
// ];

// export default function StatsBanner() {
//   return (
//     <div className=" w-full max-w-2xl">

//       <div className="hidden lg:flex flex-wrap gap-4  ">

//         {/* LEFT */}
//         <div className="flex lg:flex-col flex-cols gap-4">

//           <Link
//             href="https://www.comfygen.com/about-us"
//             className="bg-indigo-400/60 rounded-xl px-3 py-4 flex items-center gap-3"
//           >
//             <div className="bg-[#E1EED0] rounded-lg p-2 flex-shrink-0">
//               <svg className="w-5 h-5" fill="#78A43F" viewBox="0 0 24 24">
//                 <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
//                 <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
//               </svg>
//             </div>
//             <p className="text-white text-sm font-semibold leading-tight">
//               8+ Years of <br /> experience
//             </p>
//           </Link>

//           <Link
//             href="https://www.comfygen.com/portfolio"
//             className="bg-indigo-400/60 rounded-xl px-3 py-4 flex items-center gap-3"
//           >
//             <div className="bg-[#D0E2EF] rounded-lg p-2 flex-shrink-0">
//               <svg className="w-5 h-5" fill="#63A2CF" viewBox="0 0 24 24">
//                 <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
//               </svg>
//             </div>
//             <p className="text-white text-sm font-semibold leading-tight">
//               550+ Projects <br /> Delivered
//             </p>
//           </Link>

//         </div>

//         <div className="flex gap-4">
//           {/* MIDDLE */}
//           <Link
//             href="https://www.comfygen.com/client-testimonials"
//             className="bg-indigo-400/60 rounded-xl px-4 py-4 flex flex-col justify-center gap-3"
//           >
//             <div className="flex items-center">
//               {avatars.map((src, i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 relative rounded-full border-2 border-white overflow-hidden bg-gray-300"
//                   style={{ marginLeft: i === 0 ? 0 : -10 }}
//                 >
//                   <Image
//                     src={src}
//                     alt={`Client ${i + 1}`}
//                     width={30}
//                     height={10}
//                     className="object-center w-10 h-10"
//                     sizes="40px"
//                   />
//                 </div>
//               ))}
//             </div>

//             <p className="text-white text-sm font-semibold leading-tight">
//               400+ Happy <br /> Clients
//             </p>
//           </Link>

//           {/* RIGHT */}
//           <div className="bg-indigo-400/60 rounded-xl px-4 py-4 flex flex-col justify-center gap-3">

//             <p className="text-white text-sm font-semibold leading-tight">
//               30+ Countries <br /> Served
//             </p>

//             <div className="flex flex-wrap">
//               {flags.map((flag, i) => (
//                 <div
//                   key={i}
//                   className="w-8 h-8 relative rounded-full border-2 border-white overflow-hidden bg-gray-300"
//                   style={{ marginLeft: i === 0 ? 0 : -10 }}
//                 >
//                   <Image
//                     src={flag}
//                     alt="flag"
//                     width={30}
//                     height={10}
//                     className="object-center w-10 h-10"
//                     sizes="32px"
//                   />
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
