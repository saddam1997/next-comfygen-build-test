// components/IndustriesMenu.tsx
import { Healthcare, Finance, Finance1, EcommerceApp, EducationApp } from "../navData";
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "../../ui/Button";
import styles from './IndustriesMnue.module.css';

const IndustriesMenu = ({ setActiveTab, activeTab, showNav, setShowNav, handleTabClick }: any) => {
    return (
        <div className={styles.industriesGroup}>
            <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className={styles.industriesButton}
                onMouseEnter={() => setActiveTab("Tab1")}
            >
                <span className={showNav === 2 ? styles.buttonTextActive : styles.buttonText}>
                    Industries
                </span>
                <ChevronDown className={styles.chevronIcon} size={18} />
            </button>

            <div className={styles.dropdownContainer}>
                <div className={styles.dropdownInner}>
                    <div className={styles.gridContainer}>
                        {/* Left Column - Main Categories */}
                        <div className={styles.leftColumn}>
                            <ul className={styles.categoryList}>
                                <li
                                    onClick={() => handleTabClick("Tab1")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab1" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/healthcare-app-dev-header-icon.svg"
                                        alt="Healthcare App Development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Healthcare App Development</p>
                                        <span className={styles.categoryDesc}>Transforming Healthcare with Smart Apps</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab2")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab2" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/astrology-app-development/finance.svg"
                                        alt="Web3 Development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Finance App Development</p>
                                        <span className={styles.categoryDesc}>Transforming Financial Ideas into Apps</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab3")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab3" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/navbar/education-app-development.svg"
                                        alt="education-app-development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Education App Development</p>
                                        <span className={styles.categoryDesc}>Customized Applications for Every Industry</span>
                                    </div>
                                </li>

                                <li
                                    onClick={() => handleTabClick("Tab4")}
                                    className={`${styles.categoryItem} ${activeTab === "Tab4" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/navbar/ecommerce-development.svg"
                                        alt="ecommerce-development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Ecommerce Development</p>
                                        <span className={styles.categoryDesc}>Empowering Seamless Online Shopping</span>
                                    </div>
                                </li>

                                <Link
                                    onClick={() => handleTabClick("Tab5")}
                                    href="/dating-app-development"
                                    className={`${styles.categoryItem} ${activeTab === "Tab5" ? styles.categoryItemActive : ''}`}
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/navbar/dating-app-development.svg"
                                        alt="dating-app-development"
                                        height={40}
                                        width={40}
                                        className={styles.categoryIcon}
                                        loading="eager"
                                        priority={false}
                                    />
                                    <div className={styles.categoryContent}>
                                        <p className={styles.categoryTitle}>Dating App Development</p>
                                        <span className={styles.categoryDesc}>Smart Solutions for Digital Romance</span>
                                    </div>
                                </Link>
                            </ul>
                        </div>

                        {/* Middle Column - Dynamic Links */}
                        <div className={styles.middleColumn}>
                            {activeTab === "Tab1" && (
                                <ul className={styles.linkList}>
                                    {Healthcare.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {activeTab === "Tab2" && (
                                <ul className={styles.linkList}>
                                    {Finance.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {activeTab === "Tab3" && (
                                <ul className={styles.linkList}>
                                    {EducationApp?.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {activeTab === "Tab4" && (
                                <ul className={styles.linkList}>
                                    {EcommerceApp.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Third Column - Finance Secondary Links */}
                        <div className={`${styles.thirdColumn} ${activeTab === "Tab2" ? '' : styles.hidden}`}>
                            {activeTab === "Tab2" && (
                                <ul className={styles.linkList}>
                                    {Finance1.map((elem: any, index: any) => (
                                        <li key={index} className={styles.linkItem}>
                                            <Link
                                                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                                                href={elem.url}
                                                className={styles.link}
                                            >
                                                {elem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Right Column - Promotional Banner */}
                        <div className={`${styles.rightColumn} ${activeTab === "Tab5" || activeTab === "Tab2" ? styles.hidden : ''}`}>
                            <a href="/contact-us" className={styles.promoLink}>
                                <Image
                                    src="https://www.comfygen.com/image/solutions-header-img.webp"
                                    alt="Solutions Header"
                                    height={486}
                                    width={511}
                                    className={styles.promoImage}
                                    loading="lazy"
                                />
                                <span className={styles.promoButtonWrapper}>
                                    <Button variant="secondary" radius="full" className={styles.promoButton}>
                                        Connect to expert →
                                    </Button>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesMenu;










// import {  Healthcare, Finance, Finance1,  EcommerceApp, EducationApp, } from "../navData"

// import { ChevronDown } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from "../../ui/Button";

// const IndustriesMnue = ({ setActiveTab, activeTab, showNav, setShowNav, handleTabClick }: any) => {
//     return (
//               <div
//                 className=" group  "
//                 onMouseEnter={() => setActiveTab("Tab1")}
//               >
//                 <button
//                   onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
//                   className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
//                 >
//                   <span
//                     className={
//                       showNav === 2 ? "  font-medium " : " font-medium "
//                     }
//                   >
//                     Industries
//                   </span>
//                   <ChevronDown
//                     className="hover:text-black/100 text-black/80"
//                     size={18}
//                   />
//                 </button>
//                 <div className="z-50 w-[95vw] max-w-7xl left-1/2 -translate-x-1/2 absolute top-24 lg:bg-white rounded-2xl shadow-xl border text-gray-700 hidden group-hover:block transition duration-200 origin-top">
//                   {/* <div className="absolute -top-2 2xl:inset-x-[29rem] xl:inset-x-[29rem]   bg-white rotate-45   w-4 h-4"></div> */}
//                   <div className="2xl:p-10 p-5 mx-auto text-sm">
//                     <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
//                       <div className="">
//                         <ul className="space-y-2">
//                           <li
//                             onClick={() => handleTabClick("Tab1")}
//                             className={
//                               activeTab === "Tab1"
//                                 ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                                 : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                             }
//                           >
//                             <Image
//                               src="https://www.comfygen.com/image/healthcare-app-dev-header-icon.svg"
//                               alt="Healthcare App Development"
//                               height={40}
//                               width={40}
//                             />
//                             <div className="space-y-3 cursor-pointer">
//                               <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
//                                 Healthcare App Development
//                               </p>
//                               <span className="text-[#212121]/80 text-sm font-normal">
//                                 Transforming Healthcare with Smart Apps
//                               </span>
//                             </div>
//                           </li>
//                           <li
//                             onClick={() => handleTabClick("Tab2")}
//                             className={
//                               activeTab === "Tab2"
//                                 ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                                 : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                             }
//                           >
//                             <Image
//                               src="https://www.comfygen.com/comfygen-images/astrology-app-development/finance.svg"
//                               alt="Web3 Development"
//                               height={40}
//                               width={40}
//                             />
//                             <div className="space-y-4 cursor-pointer">
//                               <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
//                                 Finance App Development
//                               </p>
//                               <span className="text-[#212121]/80 text-sm font-normal">
//                                 Transforming Financial Ideas into Apps
//                               </span>
//                             </div>
//                           </li>


//                           <li
//                             onClick={() => handleTabClick("Tab3")}
//                             className={
//                               activeTab === "Tab3"
//                                 ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                                 : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                             }
//                           >
//                             <Image
//                               src="https://www.comfygen.com/comfygen-images/navbar/education-app-development.svg"
//                               alt="education-app-development"
//                               height={40}
//                               width={40}
//                             />
//                             <div className="space-y-4 cursor-pointer">
//                               <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
//                                 Education App Development
//                               </p>
//                               <span className="text-[#212121]/80 text-sm font-normal">
//                                 Customized Applications for Every Industry
//                               </span>
//                             </div>
//                           </li>

//                           <li
//                             onClick={() => handleTabClick("Tab4")}
//                             className={
//                               activeTab === "Tab4"
//                                 ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                                 : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                             }
//                           >
//                             <Image
//                               src="https://www.comfygen.com/comfygen-images/navbar/ecommerce-development.svg"
//                               alt="ecommerce-development"
//                               height={40}
//                               width={40}
//                             />
//                             <div className="space-y-4 cursor-pointer">
//                               <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
//                                 Ecommerce Development
//                               </p>
//                               <span className="text-[#212121]/80 text-sm font-normal">
//                                 Empowering Seamless Online Shopping
//                               </span>
//                             </div>
//                           </li>

//                           <Link
//                             onClick={() => handleTabClick("Tab5")}

//                             href="/dating-app-development"
//                             className={
//                               activeTab === "Tab5"
//                                 ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                                 : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
//                             }
//                           >
//                             <Image
//                               src="https://www.comfygen.com/comfygen-images/navbar/dating-app-development.svg"
//                               alt="dating-app-development"
//                               height={40}
//                               width={40}
//                             />
//                             <div className="space-y-4 cursor-pointer">
//                               <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
//                                 Dating App Development
//                               </p>
//                               <span className="text-[#212121]/80 text-sm font-normal">
//                                 Smart Solutions for Digital Romance
//                               </span>
//                             </div>
//                           </Link>

//                         </ul>
//                       </div>
//                       <div className="space-y-10">
//                         <div>
//                           {activeTab === "Tab1" && (
//                             <ul className="text-sm font-medium space-y-2">
//                               {Healthcare.map((elem: any, index: any) => {
//                                 const { name, num, url } = elem;
//                                 return (
//                                   <li
//                                     key={index}
//                                     className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
//                                   >
//                                     <Link
//                                       onClick={() =>
//                                         setShowNav(showNav === 2 ? 0 : 2)
//                                       }
//                                       href={url}
//                                       passHref={true}
//                                     >
//                                       {name}
//                                     </Link>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           )}


//                           {activeTab === "Tab2" && (
//                             <ul className="text-sm font-medium space-y-2">
//                               {Finance.map((elem: any, index: any) => {
//                                 const { name, num, url } = elem;
//                                 return (
//                                   <li
//                                     key={index}
//                                     className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
//                                   >
//                                     <Link
//                                       onClick={() =>
//                                         setShowNav(showNav === 2 ? 0 : 2)
//                                       }
//                                       href={url}
//                                       passHref={true}
//                                     >
//                                       {name}
//                                     </Link>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           )}

//                           {activeTab === "Tab3" && (
//                             <ul className="text-sm font-medium space-y-2">
//                               {EducationApp?.map((elem: any, index: any) => {
//                                 const { name, num, url } = elem;
//                                 return (
//                                   <li
//                                     key={index}
//                                     className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
//                                   >
//                                     <Link
//                                       onClick={() =>
//                                         setShowNav(showNav === 2 ? 0 : 2)
//                                       }
//                                       href={url}
//                                       passHref={true}
//                                     >
//                                       {name}
//                                     </Link>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           )}
//                           {activeTab === "Tab4" && (
//                             <ul className="text-sm font-medium space-y-2">
//                               {EcommerceApp.map((elem: any, index: any) => {
//                                 const { name, num, url } = elem;
//                                 return (
//                                   <li
//                                     key={index}
//                                     className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
//                                   >
//                                     <Link
//                                       onClick={() =>
//                                         setShowNav(showNav === 2 ? 0 : 2)
//                                       }
//                                       href={url}
//                                       passHref={true}
//                                     >
//                                       {name}
//                                     </Link>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           )}


//                         </div>
//                       </div>



//                       <div className={`${activeTab === "Tab2" ? "" : "hidden"}`}>
//                         {activeTab === "Tab2" && (
//                           <ul className="text-sm font-medium space-y-2">
//                             {Finance1.map((elem: any, index: any) => {
//                               const { name, num, url } = elem;
//                               return (
//                                 <li
//                                   key={index}
//                                   className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
//                                 >
//                                   <Link
//                                     onClick={() =>
//                                       setShowNav(showNav === 2 ? 0 : 2)
//                                     }
//                                     href={url}
//                                     passHref={true}
//                                   >
//                                     {name}
//                                   </Link>
//                                 </li>
//                               );
//                             })}
//                           </ul>
//                         )}
//                       </div>
//                       <div className={`${activeTab === "Tab5" || activeTab === "Tab2" ? "hidden" : ""}`}>
//                         <a href="/contact-us" className="relative">
//                           <Image
//                             src="https://www.comfygen.com/image/solutions-header-img.webp"
//                             alt=""
//                             height={486}
//                             width={511}
//                           />
//                           <span className="bg-[#fff] absolute bottom-0 right-0 p-5 block justify-end items-center rounded-tl-[50px]">

//                                 <Button variant="secondary" radius="full" className=" py-2 text-white rounded-full"> Connect to expert →</Button>
                    
//                           </span>
//                         </a>
//                       </div>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//     )
// }

// export default IndustriesMnue
