import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

const AboutSection = (props: any) => {
  const {
    heading = "",
    description1 = "",
    description2 = "",
    description3 = "",
    description4 = "",
    description5 = "",
    description6 = "",
    points = [],
    imageSrc = "",
    link = "",
    linkText = "",
  } = props;

  return (
    <section className="bg-white lg:py-16 py-10">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">
          <div>
            <Image
              src={imageSrc}
              alt={heading}
              width={907}
              height={762}
              quality={80}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
              placeholder="blur"
              blurDataURL="/blur-placeholder.webp"
              className="rounded-2xl"
            />
          </div>
          <div>
            <div className="space-y-4">
              <div>
                <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                  {heading}
                </h2>
              </div>
              <div className="space-y-4">
                {description1 && (
                  <p
                    className="xl:text-base text-sm text-black"
                    dangerouslySetInnerHTML={{ __html: description1 }}
                  />
                )}
                {description2 && (
                  <p
                    className="xl:text-base text-sm text-black"
                    dangerouslySetInnerHTML={{ __html: description2 }}
                  />
                )}
                {description3 && (
                  <p
                    className="xl:text-base text-sm text-black"
                    dangerouslySetInnerHTML={{ __html: description3 }}
                  />
                )}
                {description4 && (
                  <p
                    className="xl:text-base text-sm text-black"
                    dangerouslySetInnerHTML={{ __html: description4 }}
                  />
                )}
                {description5 && (
                  <p
                    className="xl:text-base text-sm text-black"
                    dangerouslySetInnerHTML={{ __html: description5 }}
                  />
                )}
                {points && points.length > 0 && (
                  <ul className="space-y-2">
                    {points.map((point: any, index: any) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="min-w-[10px] min-h-[10px] w-[10px] h-[10px] border-2 border-[#5556D1] rounded-full mt-1.5"></div>
                        <span 
                          className="xl:text-base text-sm text-black"
                          dangerouslySetInnerHTML={{ __html: point }} 
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {description6 && (
                  <p
                    className="xl:text-base text-sm text-black"
                    dangerouslySetInnerHTML={{ __html: description6 }}
                  />
                )}
              </div>
            </div>
            {link && linkText && (
              <div className="mt-7">
                <Link href={link} passHref>
                  <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1 transition-colors duration-200">
                    {linkText} <MdOutlineArrowOutward />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;







// import React from "react";
// import Link from "next/link";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import Image from "next/image";

// const AboutSection = (props) => {
//   const {
//     heading,
//     description1,
//     description2,
//     description3,
//     description4,
//     description5,
//     description6,
//     points,
//     imageSrc,
//     link,
//     linkText,
//   } = props;

//   return (
//     <section className="bg-white lg:py-16 py-10">
//       <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
//         <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">
//           <div>
//             {/* <Image width={907} height={762} className=" rounded-2xl" src={imageSrc} alt="About Us" /> */}
//             <Image
//               src={imageSrc}
//               alt={heading}
//               width={907}
//               height={762}
//               unoptimized
//               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 907px"
//               className="rounded-2xl"
//               priority={true}
//               quality={75}
//             />
//           </div>
//           <div>
//             <div className="space-y-4">
//               <div>
//                 <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
//                   {heading}
//                 </h2>
//               </div>
//               <div className="space-y-4 ">
//                 <p
//                   className="xl:text-base text-sm text-black"
//                   dangerouslySetInnerHTML={{ __html: description1 }}
//                 />
//                 <p
//                   className="xl:text-base text-sm text-black"
//                   dangerouslySetInnerHTML={{ __html: description2 }}
//                 />
//                 <p
//                   className="xl:text-base text-sm text-black"
//                   dangerouslySetInnerHTML={{ __html: description3 }}
//                 />
//                 <p
//                   className="xl:text-base text-sm text-black"
//                   dangerouslySetInnerHTML={{ __html: description4 }}
//                 />
//                 <p
//                   className="xl:text-base text-sm text-black"
//                   dangerouslySetInnerHTML={{ __html: description5 }}
//                 />
//                 <ul className="space-y-2">
//                   {points && points.length > 0
//                     ? points.map((point, index) => (
//                         <li key={index} className="flex items-start gap-2">
//                           <div className="min-w-[10px] min-h-[10px] w-[10px] h-[10px] border-2 border-[#5556D1] rounded-full mt-1.5"></div>
//                           <span dangerouslySetInnerHTML={{ __html: point }} />
//                         </li>
//                       ))
//                     : null}
//                 </ul>
//                 <p
//                   className="xl:text-base text-sm text-black"
//                   dangerouslySetInnerHTML={{ __html: description6 }}
//                 />
//               </div>
//             </div>
//             <div className=" mt-7">
//               <Link href={link} passHref>
//                 <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
//                   {linkText} <MdOutlineArrowOutward />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// AboutSection.defaultProps = {
//   title: "",
//   heading: "",
//   description1: "",
//   description2: "",
//   description3: "",
//   points: [],
//   imageSrc: "",
//   link: "",
//   linkText: "",
// };
// export default AboutSection;
