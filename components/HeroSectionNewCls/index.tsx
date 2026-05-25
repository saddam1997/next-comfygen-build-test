import Image from "next/image";
import StatsBanner from "./StatsBanner";
import HeroClient from "./HeroClient";
import styles from "./index.module.css";
interface HeroSectionProps {
  Data: {
    bgImage: string;
    imageAlt?: string;
    heading: string;
    ptag: string;
  };
}

export default function HeroSection({ Data }: HeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      {/* Background Image */}
      <div className={styles.bgWrapper}>
        <Image
          src={Data.bgImage}
          alt={Data.imageAlt || "Hero Background"}
          width={1920}
          height={1080}
          priority
          fetchPriority="high"
          quality={75}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 100vw, 1920px"
          className={styles.bgImage}
        />
      </div>
      {/* <div className={styles.bgWrapper}>
        <Image
          src={Data.bgImage}
          alt={Data.imageAlt || "Hero Background"}
          fill
          priority
          fetchPriority="high"
          quality={85}
          sizes="100vw"
          className={styles.bgImage}
        />
      </div> */}
      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>{Data.heading}</h1>
          <p className={styles.description}>{Data.ptag}</p>
          {/* CTA */}
          <div className={styles.clientWrapper}>
            <HeroClient />
          </div>
          {/* Stats */}
          <div className={styles.statsWrapper}>
            <StatsBanner />
          </div>
        </div>
      </div>
    </section>
  );
}




















// import Image from "next/image";
// import StatsBanner from "./StatsBanner";

// import HeroClient from "./HeroClient";

// export default function HeroSection({ Data }: any) {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#1a1a4f] flex items-center  min-h-[700px] sm:min-h-[680px] lg:min-h-[720px]">
//       <Image
//         src={Data.bgImage}
//         alt={Data.imageAlt || "hero"}
//         fill
//         priority
//         fetchPriority="high"
//         sizes="100vw"
//         className="object-cover absolute inset-0  hidden lg:block"
//       />
//       <div className="relative z-20 max-w-[600px] space-y-4 lg:ml-20 ml-0  px-4  h-full items-center ">
//         <h1 className="text-xl sm:text-xl lg:text-[36px] xl:text-[30px] font-bold text-white sm:leading-tight lg:leading-tight 
//         xl:leading-tight">{Data.heading}</h1>

//         <p className="text-sm lg:text-[16px]  font-normal leading-relaxed text-white">{Data?.ptag}</p>
//         <div className="mt-6 min-h-[48px]">
//           <HeroClient />
//         </div>
//         <div className="mt-6 min-h-[80px]">
//           <StatsBanner />
//         </div>
//       </div>
//     </section>
//   );
// }











