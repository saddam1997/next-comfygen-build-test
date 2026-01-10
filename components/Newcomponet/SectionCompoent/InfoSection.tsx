import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";



const InfoSection = ({
  heading,
  description1,
  description2,
  description3,
  dec,
  points,
  imageSrc,
  link,
  linkText,
  imagePosition = "left" // NEW PROP
}) => {
  return (
    <section className="bg-white lg:py-16 py-10">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">

        <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">

          {imagePosition === "left" ? (
            <>
              {/* LEFT IMAGE */}
              <div>
                <Image width={907} height={762} className="rounded-2xl" src={imageSrc} alt="About Us" />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <div className="space-y-4">
                  <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                    {heading}
                  </h2>
                  <div className="space-y-4">
                    <p className="xl:text-base text-sm text-black">{description1}</p>
                    <p className="xl:text-base text-sm text-black">{description2}</p>
                    <p className="xl:text-base text-sm text-black">{description3}</p>
                    <ul className="space-y-2">
                      {points?.map((point: any, index: any) => (
                        <li key={index} className="flex items-center lg:gap-2 gap-1">
                          <div className="md:w-[10px] md:h-[10px] bg-[#5556D1] rounded-full hidden md:block"></div>
                          <span className="text-sm md:text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="xl:text-base text-sm text-black">{dec}</p>
                  </div>
                </div>

                <div className="mt-7">
                  <Link href={link}>
                    <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                      {linkText} <MdOutlineArrowOutward />
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* RIGHT IMAGE */}
              <div className="order-1 lg:order-2">
                <Image width={907} height={762} className="rounded-2xl" src={imageSrc} alt="About Us" />
              </div>

              {/* LEFT CONTENT */}
              <div className="order-2 lg:order-1">
                <div className="space-y-4">
                  <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                    {heading}
                  </h2>
                  <div className="space-y-4">
                    <p className="xl:text-base text-sm text-black">{description1}</p>
                    <p className="xl:text-base text-sm text-black">{description2}</p>
                    <p className="xl:text-base text-sm text-black">{description3}</p>
                    <ul className="space-y-2">
                      {points?.map((point: any, index: any) => (
                        <li key={index} className="flex items-center lg:gap-2 gap-1">
                          <div className="w-2 h-2 bg-[#5556D1] rounded-full hidden md:block"></div>
                          <span className="text-sm ">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="md:text-base text-sm text-black">{dec}</p>
                  </div>
                </div>

                <div className="mt-7">
                  <Link href={link}>
                    <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                      {linkText} <MdOutlineArrowOutward />
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
};


InfoSection.defaultProps = {
  heading: "",
  description1: "",
  description2: "",
  description3: "",
  points: [],
  imageSrc: "",
  link: "#",
  linkText: "Learn More",
};

export default InfoSection;


// const InfoSection = (props) => {
//     const {
//         heading,
//         description1,
//         description2,
//         description3,
//         points,
//         imageSrc,
//         link,
//         linkText
//     } = props;

//     return (
//         <section className="bg-white lg:py-16 py-10">
//             <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
//                 <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">
//                     <div>
//                         <Image width={907} height={762} className=" rounded-2xl" src={imageSrc} alt="About Us" />
//                     </div>
//                     <div>
//                         <div className="space-y-4">
//                             <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
//                                 {heading}
//                             </h2>
//                             <div className="space-y-4 ">
//                                 <p className="xl:text-base text-sm text-black">{description1}</p>
//                                 <p className="xl:text-base text-sm text-black">{description2}</p>
//                                 <p className="xl:text-base text-sm text-black">{description3}</p>
//                                 <ul className="space-y-2">
//                                     {points?.map((point:any, index:any) => (
//                                         <li key={index} className="flex items-center gap-2">
//                                             <div className="w-[10px] h-[10px] bg-[#5556D1] rounded-full"></div>
//                                             {point}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className=" mt-7">
//                             <Link href={link} passHref>
//                                 <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
//                                     {linkText} <MdOutlineArrowOutward />
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
// InfoSection.defaultProps = {
//     heading: "",
//     description1: "",
//     description2: "",
//     description3: "",
//     points: [],
//     imageSrc: "",
//     link: "#",
//     linkText: "Learn More",
// };

// export default InfoSection;

