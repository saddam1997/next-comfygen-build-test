import React from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

const AboutSection = ({
    title = "",
    heading = "",
    description1 = "",
    description2 = "",
    description3 = "",
    description4 = "",
    description5 = "",
    points = [],
    imageSrc = "",
    link = "",
    linkText = "",
}: {
    title?: string;
    heading?: string;
    description1?: string;
    description2?: string;
    description3?: string;
    description4?: string;
    description5?: string;
    points?: string[];
    imageSrc?: string;
    link?: string;
    linkText?: string;
}) => {
    return (
        <section className="bg-white lg:py-16 py-10">
            <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">
                    <div>
                        <Image
                            width={640}
                            height={360}
                            priority
                            className="rounded-2xl"
                            src={imageSrc}
                            alt="About Us"
                        />
                    </div>
                    <div>
                        <div className="space-y-4">
                            <div>
                                <h2 className="text-[#5556D1] tracking-wider text-base uppercase">
                                    {title}
                                </h2>
                            </div>
                            <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                                {heading}
                            </h2>
                            <div className="space-y-4">
                                <p
                                    className="xl:text-base text-sm text-black"
                                    dangerouslySetInnerHTML={{ __html: description1 }}
                                />
                                <p
                                    className="xl:text-base text-sm text-black"
                                    dangerouslySetInnerHTML={{ __html: description2 }}
                                />
                                <p
                                    className="xl:text-base text-sm text-black"
                                    dangerouslySetInnerHTML={{ __html: description3 }}
                                />
                                <p
                                    className="xl:text-base text-sm text-black"
                                    dangerouslySetInnerHTML={{ __html: description4 }}
                                />
                                <p
                                    className="xl:text-base text-sm text-black"
                                    dangerouslySetInnerHTML={{ __html: description5 }}
                                />
                                <ul className="space-y-2">
                                    {points.length > 0 &&
                                        points.map((point, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="w-[10px] h-[10px] border-2 border-[#5556D1] rounded-full"></div>
                                                <span
                                                    dangerouslySetInnerHTML={{ __html: point }}
                                                />
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-7">
                            <Link href={link} passHref>
                                <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                                    {linkText} <MdOutlineArrowOutward />
                                </button>
                            </Link>
                        </div>
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
//     const {
//         title,
//         heading,
//         description1,
//         description2,
//         description3,
//         description4,
//         description5,
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
//                         <Image width={907} height={762} unoptimized className=" rounded-2xl" src={imageSrc} alt="About Us" />
//                     </div>
//                     <div>
//                         <div className="space-y-4">
//                             <div>
//                                 <h2 className="text-[#5556D1] tracking-wider  text-base uppercase">{title}</h2>
//                             </div>
//                             <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
//                                 {heading}
//                             </h2>
//                             <div className="space-y-4 ">
//                                 <p className="xl:text-base text-sm text-black" dangerouslySetInnerHTML={{ __html: description1 }}></p>
//                                 <p className="xl:text-base text-sm text-black" dangerouslySetInnerHTML={{ __html: description2 }}></p>
//                                 <p className="xl:text-base text-sm text-black" dangerouslySetInnerHTML={{ __html: description3 }}></p>
//                                 <p className="xl:text-base text-sm text-black" dangerouslySetInnerHTML={{ __html: description4 }}></p>
//                                 <p className="xl:text-base text-sm text-black" dangerouslySetInnerHTML={{ __html: description5 }}></p>
//                                 <ul className="space-y-2">
//                                     {points && points.length > 0 ?
//                                         points?.map((point:any, index:any) => (
//                                             <li key={index} className="flex items-center gap-2">
//                                                 <div className="w-[10px] h-[10px] border-2 border-[#5556D1] rounded-full"></div>
//                                                 <span dangerouslySetInnerHTML={{ __html: point }} />
//                                             </li>
//                                         )) : null
//                                     }
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

// AboutSection.defaultProps = {
//     title: "",
//     heading: "",
//     description1: "",
//     description2: "",
//     description3: "",
//     points: [],
//     imageSrc: "",
//     link: "",
//     linkText: "",
// };
// export default AboutSection;
