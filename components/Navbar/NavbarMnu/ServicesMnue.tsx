import React from 'react'

import { MobileApp, Ai, BlockchainSer, coin, Healthcare, FullStackDev, Hire } from "../navData"
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

const ServicesMnue = ({ setActiveTab, activeTab, showNav,setShowNav, handleTabClick }: any) => {
    return (
        <div>
            <div
                className="group "
                onMouseEnter={() => setActiveTab("Tab1")}
            >
                <button
                    onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                    className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                    <span
                        className={showNav === 1 ? "font-medium " : " font-medium "}
                    >
                        Services
                    </span>
                    <MdKeyboardArrowDown
                        className="hover:text-black/100 text-black/80"
                        size={18}
                    />
                </button>
                <div className="z-50 relative lg:pt-0 pt-0 mt-0 lg:bg-white rounded-2xl bg-transparent capitalize text-gray-700 lg:absolute top-20  lg:drop-shadow-xl lg:border whitespace-nowrap  left-0  transform hidden group-hover:block   transition duration-200 ease-in-out origin-top w-full">
                    {/* <div className="absolute -top-2 2xl:inset-x-[34rem] xl:inset-x-[33rem] bg-white rotate-45   w-4 h-4"></div> */}
                    <div className="2xl:p-10 p-5 mx-auto text-sm h-full">
                        <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                            <div className="">
                                <ul className="">
                                    <div
                                        onClick={() => handleTabClick("Tab1")}
                                        className={
                                            activeTab === "Tab1"
                                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                        }
                                    >
                                        <Image
                                            src="https://www.comfygen.com/image/mobile-app-development-header-icon.svg"
                                            alt="mobile-app-development-header-icon"
                                            height={40}
                                            width={40}
                                        />
                                        <div className="space-y-2">
                                            <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                                Mobile App Development
                                            </p>
                                            <span className="text-[#212121]/80 text-sm font-normal ">
                                                Innovative Solutions for Every Platform
                                            </span>
                                        </div>
                                    </div>
                                    <li
                                        onClick={() => handleTabClick("Tab7")}
                                        className={
                                            activeTab === "Tab7"
                                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                        }
                                    >
                                        <Image
                                            src="https://www.comfygen.com/image/ai-development-icon.svg"
                                            alt="AI Development"
                                            height={40}
                                            width={40}
                                        />
                                        <div className="space-y-4 cursor-pointer">
                                            <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                                AI Development
                                            </p>
                                            <span className="text-[#212121]/80 text-sm font-normal">
                                                Best AI Development Service
                                            </span>
                                        </div>
                                    </li>

                                    <Link
                                        href="/blockchain-development"
                                        onClick={() => handleTabClick("Tab2")}
                                        className={
                                            activeTab === "Tab2"
                                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                        }
                                    >
                                        <Image
                                            src="https://www.comfygen.com/image/blockchain-app-dev-header-icon.svg"
                                            alt="blockchain-app-dev-header-icon.svg"
                                            height={40}
                                            width={40}
                                        />
                                        <div className="space-y-4 cursor-pointer">
                                            <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                                {/* <Link
                                  href="/blockchain-development"
                                  className="flex items-start gap-2"
                                >
                                  Blockchain App Development
                                </Link> */}
                                                Blockchain App Development
                                            </p>
                                            <span className="text-[#212121]/80 text-sm font-normal">
                                                Secure Blockchain-Based App Solutions
                                            </span>
                                        </div>
                                    </Link>

                                    <li
                                        onClick={() => handleTabClick("Tab3")}
                                        className={
                                            activeTab === "Tab3"
                                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                        }
                                    >
                                        <Image
                                            src="https://www.comfygen.com/image/coin-and-tokens-dev-header-icon.svg"
                                            alt="Coin And Tokens Development"
                                            height={40}
                                            width={40}
                                        />
                                        <div className="space-y-4 cursor-pointer">
                                            <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                                Coin And Tokens Development
                                            </p>
                                            <span className="text-[#212121]/80 text-sm font-normal">
                                                {" "}
                                                Custom Cryptocurrency Creation Made Easy
                                            </span>
                                        </div>
                                    </li>

                                    <li
                                        onClick={() => handleTabClick("Tab5")}
                                        className={
                                            activeTab === "Tab5"
                                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                        }
                                    >
                                        <Image
                                            src="https://www.comfygen.com/image/full-stack-dev-header-icon.svg"
                                            alt="Full Stack Development"
                                            height={40}
                                            width={40}
                                        />
                                        <div className="space-y-4 cursor-pointer">
                                            <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                                Full Stack Development
                                            </p>
                                            <span className="text-[#212121]/80 text-sm font-normal">
                                                In-depth End-to-End Development Services
                                            </span>
                                        </div>
                                    </li>

                                    <li
                                        onClick={() => handleTabClick("Tab6")}
                                        className={
                                            activeTab === "Tab6"
                                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                        }
                                    >
                                        <Image
                                            src="https://www.comfygen.com/image/hire-dedicated-dev-header-icon.svg"
                                            alt="Hire Dedicated Developers"
                                            height={40}
                                            width={40}
                                        />
                                        <div className="space-y-4 cursor-pointer">
                                            <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                                Hire Dedicated Developers
                                            </p>
                                            <span className="text-[#212121]/80 text-sm font-normal">
                                                Skilled Developers for Your Projects
                                            </span>
                                        </div>
                                    </li>
                                </ul>



                            </div>
                            <div className="space-y-10">
                                <div>
                                    {activeTab === "Tab1" && (
                                        <div className="text-sm font-medium space-y-2">
                                            {MobileApp.map((elem: any, index: any) => {
                                                const { name, num, url } = elem;
                                                return (
                                                    <Link
                                                        key={index}
                                                        className="py-1.5 block text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4"
                                                        onClick={() =>
                                                            setShowNav(showNav === 1 ? 0 : 1)
                                                        }
                                                        href={url}
                                                        passHref={true}
                                                    >
                                                        {name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {activeTab === "Tab2" && (
                                        <ul className="text-sm font-medium space-y-2 hidden">
                                            {BlockchainSer.map((elem: any, index: any) => {
                                                const { name, num, url } = elem;
                                                return (
                                                    <li
                                                        key={index}
                                                        className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                    >
                                                        <Link
                                                            onClick={() =>
                                                                setShowNav(showNav === 1 ? 0 : 1)
                                                            }
                                                            href={url}
                                                            passHref={true}
                                                        >
                                                            {name}mm
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                    {activeTab === "Tab3" && (
                                        <ul className="text-sm font-medium space-y-2">
                                            {coin.map((elem: any, index: any) => {
                                                const { name, num, url } = elem;
                                                return (
                                                    <li
                                                        key={index}
                                                        className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                    >
                                                        <Link
                                                            onClick={() =>
                                                                setShowNav(showNav === 1 ? 0 : 1)
                                                            }
                                                            href={url}
                                                            passHref={true}
                                                        >
                                                            {name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                    {activeTab === "Tab4" && (
                                        <ul className="text-sm font-medium space-y-2">
                                            {Healthcare.map((elem: any, index: any) => {
                                                const { name, num, url } = elem;
                                                return (
                                                    <li
                                                        key={index}
                                                        className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                    >
                                                        <Link
                                                            onClick={() =>
                                                                setShowNav(showNav === 1 ? 0 : 1)
                                                            }
                                                            href={url}
                                                            passHref={true}
                                                        >
                                                            {name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}

                                    {activeTab === "Tab5" && (
                                        <ul className="text-sm font-medium space-y-2">
                                            {FullStackDev.map((elem: any, index: any) => {
                                                const { name, num, url } = elem;
                                                return (
                                                    <li
                                                        key={index}
                                                        className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                    >
                                                        <Link
                                                            onClick={() =>
                                                                setShowNav(showNav === 1 ? 0 : 1)
                                                            }
                                                            href={url}
                                                            passHref={true}
                                                        >
                                                            {name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                    {activeTab === "Tab6" && (
                                        <ul className="text-sm font-medium space-y-2">
                                            {Hire.map((elem: any, index: any) => {
                                                const { name, num, url } = elem;
                                                return (
                                                    <li
                                                        key={index}
                                                        className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                    >
                                                        <Link
                                                            onClick={() =>
                                                                setShowNav(showNav === 1 ? 0 : 1)
                                                            }
                                                            href={url}
                                                            passHref={true}
                                                        >
                                                            {name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                    {activeTab === "Tab7" && (
                                        <ul className="text-sm font-medium space-y-2">
                                            {Ai.map((elem: any, index: any) => {
                                                const { name, num, url } = elem;
                                                return (
                                                    <li
                                                        key={index}
                                                        className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                    >
                                                        <Link
                                                            onClick={() =>
                                                                setShowNav(showNav === 1 ? 0 : 1)
                                                            }
                                                            href={url}
                                                            passHref={true}
                                                        >
                                                            {name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div>
                                <a href="/contact-us" className="relative">
                                    <Image
                                        src="https://www.comfygen.com/image/mobile-app-development-services-img.webp"
                                        alt=""
                                        height={475}
                                        width={452}
                                        loading="lazy"
                                        fetchPriority="low"
                                        className="w-full"
                                    />
                                    <span className="bg-[#fff] absolute bottom-0 right-0 p-4 block justify-end items-center rounded-tl-[50px]">
                                        <button className="flex items-center gap-2 bg-[#5556D1] py-3 px-6 font-semibold rounded-full text-base text-white">
                                            Connect to expert
                                            <Image
                                                src="https://www.comfygen.com/image/button-arrow.svg"
                                                alt=""
                                                height={22}
                                                width={22}
                                            />
                                        </button>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesMnue
