import React from 'react';
import { Users, Rocket, Heart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Mile from "./json/milestone.json"
const Milestones = () => {
   let {seo,stats} = Mile;


   // const stats = [
   //     {
   //         icon: "https://www.comfygen.com/comfygen-images/milestones/years.svg",
   //         value: "8+",
   //         label: "Year's"
   //     },
   //     {
   //         icon: "https://www.comfygen.com/comfygen-images/milestones/project.svg",
   //         value: "350+",
   //         label: "Project"
   //     },
   //     {
   //         icon: "https://www.comfygen.com/comfygen-images/milestones/client.svg",
   //         value: "200+",
   //         label: "Happy Client"
   //     }
   // ];


   // const ratings = [
   //     {
   //         name: "Clutch",
   //         rating: 4.8,
   //         logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/clutch.svg",
   //         link: "https://clutch.co/profile/comfygen-technologies"
   //     },
   //     {
   //         name: "D",
   //         rating: 4.7,
   //         logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/d.svg",
   //         link: "https://www.topdevelopers.co/profile/comfygen"
   //     },
   //     {
   //         name: "S",
   //         rating: 5.0,
   //         logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/s.svg",
   //         link: "https://selectedfirms.co/agency/comfygen-private-limited"
   //     },
   //     {
   //         name: "U",
   //         rating: 5.0,
   //         logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/u.svg",
   //         link: "https://www.designrush.com/agency/profile/comfygen"
   //     },
   //     {
   //         name: "G",
   //         rating: 5.0,
   //         logo: "https://www.comfygen.com/comfygen-images/food-delivery-app-development/g.svg",
   //         link: "https://share.google/kpRVaDhD1XWKuf0ye"


   //     }
   // ];


   const cardClass = `
relative overflow-hidden py-8 text-center rounded-[8px] text-white
bg-gradient-to-t from-[#5556D1] via-indigo-900 to-blue-800
shadow-[0_8px_25px_rgba(85,86,209,0.35)]
`;


   return (
       <>
       {/* <div className="hidden md:block w-full h-full bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 py-2 px-4 sm:px-6 lg:px-8 mt-8 sm:rounded-full">
           <div className="w-full px-4">
               <div className="grid sm:grid-cols-2 gap-4 items-center">
                   <div className='w-full space-y-2'>
                       <h2 className="text-white text-3xl font-bold text-center  flex justify-center">
                           Our Milestones
                       </h2>
                       <div className="flex justify-between ">
                           {stats.map((stat, index) => (
                               <div key={index} className="flex flex-col justify-center items-center w-full">
                                   <Image
                                       src={stat.icon}
                                       alt={stat.label}
                                       width={80}
                                       height={80}
                                       loading='lazy'
                                       className="rounded-full w-16 h-16  object-contain bg-center"
                                   />
                                   <div className='flex items-center gap-2'>
                                       <h3 className="text-white text-xl sm:text-2xl font-bold ">
                                           {stat.value}
                                       </h3>
                                       <p className="text-gray-200 text-sm sm:text-base hidden lg:block">
                                           {stat.label}
                                       </p>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>


                   <div className="grid grid-cols-5 gap-2 w-full">
                       {ratings.map((rating: any, index: any) => (
                           <Link
                               key={index}
                               href={rating.link}
                               target='blank'
                               rel="noopener noreferrer nofollow"
                               className="bg-white/10 sm:w-24 sm:h-24 backdrop-blur-sm border-2 border-white/30 rounded-lg p-2 sm:p-2 flex flex-col items-center justify-center min-w-[60px] sm:min-w-[90px] hover:bg-white/20 transition-all duration-300"
                           >
                               <div className="flex items-center justify-center">
                                   <span className="w-full h-full">
                                       <Image src={rating.logo} alt='' width={50} height={20} className='w-16 h-16 p-2' />
                                   </span>
                               </div>
                               <div className="flex items-center gap-1">
                                   <span className="text-white font-semibold text-sm sm:text-base">
                                       {rating.rating}
                                   </span>
                                   <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                               </div>
                           </Link>
                       ))}
                   </div>
               </div>
           </div>
       </div> */}
      
       <section
     aria-labelledby="milestones-heading"
     className=" bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 py-6 mt-3 px-6"
   >
     {/* SEO HEADING */}
     <h2 id="milestones-heading" className="sr-only">
       {seo?.heading}
     </h2>


     {/* ===== SEO ONLY: Hidden Countries (FROM JSON) ===== */}
     <ul className="sr-only">
       {seo?.countries.map((country) => (
         <li key={country}>{country}</li>
       ))}
     </ul>


     <div className="max-w-[1333px] mx-auto space-y-4">
       {/* ===== CARDS GRID ===== */}
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
         {stats?.map((item) => (
           <article
             className={cardClass}
             itemScope
             itemType="https://schema.org/QuantitativeValue"
           >
             <h3
               className="text-[27px] font-bold tabular-nums min-h-[34px]"
               itemProp="value"
             >
               {item.value}
             </h3>
             <p
               className="text-[18px] px-1"
               itemProp="description"
             >
               {item.label}
             </p>
           </article>
         ))}
       </div>
     </div>
   </section>
       </>
   );
};


export default Milestones;