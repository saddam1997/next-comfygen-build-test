// components/AboutComponent.tsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { Button } from "../ui/Button";
import styles from './AboutComponent.module.css';

const AboutComponent = ({ AboutData }) => {
  const imageAlt = AboutData?.altTag || AboutData?.heading || "About image";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {/* Image */}
          <div className={styles.imageWrapper}>
            <Image
              src={AboutData.imageSrc}
              alt={AboutData.heading}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          {/* Content */}
          <div className={styles.contentWrapper}>
            <div className={styles.contentInner}>
              <HeadingTwo color="#212121" text={AboutData.heading} />

              <div className={styles.textContent}>
                {AboutData.description1 && <ParagraphText color="black" text={AboutData.description1} />}
                {AboutData.description2 && <ParagraphText color="black" text={AboutData.description2} />}
                {AboutData.description3 && <ParagraphText color="black" text={AboutData.description3} />}
                {AboutData.description4 && <ParagraphText color="black" text={AboutData.description4} />}
                {AboutData.description5 && <ParagraphText color="black" text={AboutData.description5} />}

                {AboutData.points?.length > 0 && (
                  <ul className={styles.pointsList}>
                    {AboutData.points.map((point: any, index: number) => (
                      <li key={index} className={styles.pointItem}>
                        <div className={styles.pointBullet}></div>
                        <span
                          className={styles.pointText}
                          dangerouslySetInnerHTML={{ __html: point }}
                        />
                      </li>
                    ))}
                  </ul>
                )}

                {AboutData.description6 && <ParagraphText color="black" text={AboutData.description6} />}
              </div>
            </div>

            {/* Button */}
            <div className={styles.buttonWrapper}>
              {AboutData.link && AboutData.linkText && (
                <Link href={AboutData.link} className={styles.buttonLink}>
                  <Button variant="outline" className={styles.button}>
                    {AboutData.linkText}
                    <span className={styles.buttonArrow}>→</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
















// import React from "react";
// import Link from "next/link";
// import { ArrowUpRight } from 'lucide-react';
// import Image from "next/image";
// import HeadingTwo from "../ui/HeadingTwo";
// import ParagraphText from "../ui/ParagraphText";
// import { Button } from "../ui/Button";

// const AboutComponent = ({ AboutData }) => {
//   const imageAlt = AboutData?.altTag || AboutData?.heading || "About image";

//   return (
//     <section className="bg-white lg:py-16 py-4 px-4">
//       <div className="w-full lg:px-4 xl:px-0">
//         <div className="grid lg:grid-cols-2 mx-auto items-center lg:gap-10 gap-4">

//           {/* Image */}
//           <div className="relative w-full aspect-[4/3]">
//             <Image
//               src={AboutData.imageSrc}
//               alt={AboutData.heading}
//               fill
//               priority
//               sizes="(max-width: 1024px) 100vw, 50vw"
//               className="lg:object-contain object-cover rounded-md"
//             />
//           </div>

//           {/* Content */}
//           <div className="min-h-[300px]">
//             <div className="space-y-4">

//               <HeadingTwo color="#212121" text={AboutData.heading} />

//               <div className="space-y-4">
//                 {AboutData.description1 && <ParagraphText color="black" text={AboutData.description1} />}
//                 {AboutData.description2 && <ParagraphText color="black" text={AboutData.description2} />}
//                 {AboutData.description3 && <ParagraphText color="black" text={AboutData.description3} />}
//                 {AboutData.description4 && <ParagraphText color="black" text={AboutData.description4} />}
//                 {AboutData.description5 && <ParagraphText color="black" text={AboutData.description5} />}

//                 {AboutData.points?.length > 0 && (
//                   <ul className="space-y-2">
//                     {AboutData.points.map((point: any, index: any) => (
//                       <li key={index} className="flex items-start gap-2 min-h-[24px]">
//                         <div className="w-[10px] h-[10px] border-2 border-[#5556D1] rounded-full mt-1.5"></div>
//                         <span
//                           className="xl:text-base text-sm text-black"
//                           dangerouslySetInnerHTML={{ __html: point }}
//                         />
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {AboutData.description6 && <ParagraphText color="black" text={AboutData.description6} />}
//               </div>
//             </div>

//             {/* Button */}
//             <div className=" min-h-[50px]">
//               {AboutData.link && AboutData.linkText && (
//                 <Link
//                   href={AboutData.link}
//                   className=" "
//                 >
//                   <Button variant="outline" className="mt-4 items-center text-[#5556D1]"> {AboutData.linkText}<span className="mb-4">→</span></Button>
                  
//                 </Link>
//               )}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutComponent;

