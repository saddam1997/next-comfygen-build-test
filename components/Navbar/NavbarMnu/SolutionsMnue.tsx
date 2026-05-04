import React from 'react'

import { Blockchain, Blockchain1, Metaverse, Token, Other, cryptoDevelopment, cryptoDevelopment1 } from "../navData"
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../ui/Button';

const SolutionsMnue = ({ setActiveTab, activeTab, showNav, setShowNav, handleTabClick }: any) => {
    return (
        <div
            className="group"
            onMouseEnter={() => setActiveTab("Tab1")}
        >
            <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
            >
                <span
                    className={
                        showNav === 2 ? "  font-medium " : " font-medium "
                    }
                >
                    Solutions
                </span>
                <ChevronDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                />
            </button>
            <div className="z-50 w-[95vw] max-w-7xl left-1/2 -translate-x-1/2 absolute top-24 lg:bg-white rounded-2xl shadow-xl border text-gray-700 hidden group-hover:block transition duration-200 origin-top">
                {/* <div className="absolute -top-2 2xl:inset-x-[29rem] xl:inset-x-[29rem]   bg-white rotate-45   w-4 h-4"></div> */}
                <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                        <div className="">
                            <ul className="space-y-2">
                                <li
                                    onClick={() => handleTabClick("Tab1")}
                                    className={
                                        activeTab === "Tab1"
                                            ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                            : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                    }
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/on-demand-mobile-header-icon.svg"
                                        alt="On Demand Mobile App"
                                        height={40}
                                        width={40}
                                    />
                                    <div className="space-y-3 cursor-pointer">
                                        <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                            On Demand Mobile App
                                        </p>
                                        <span className="text-[#212121]/80 text-sm font-normal">
                                            Tailored Apps for Instant Needs
                                        </span>
                                    </div>
                                </li>
                                <li
                                    onClick={() => handleTabClick("Tab2")}
                                    className={
                                        activeTab === "Tab2"
                                            ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                            : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                    }
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/blockchain-app-dev-header-icon.svg"
                                        alt="Blockchain Solution"
                                        height={40}
                                        width={40}
                                    />
                                    <div className="space-y-4 cursor-pointer">
                                        <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">

                                            Blockchain Solution
                                        </p>
                                        <span className="text-[#212121]/80 text-sm font-normal">
                                            Secure Your Digital Future
                                        </span>
                                    </div>
                                </li>
                                <li
                                    onClick={() => handleTabClick("Tab3")}
                                    className={
                                        activeTab === "Tab3"
                                            ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                            : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                    }
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/mobile-app-solutions-header-icon.svg"
                                        alt="Mobile App Solutions"
                                        height={40}
                                        width={40}
                                    />
                                    <div className="space-y-4 cursor-pointer">
                                        <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                            Mobile App Solutions
                                        </p>
                                        <span className="text-[#212121]/80 text-sm font-normal">
                                            Customized Applications for Every Industry
                                        </span>
                                    </div>
                                </li>
                                <li
                                    onClick={() => handleTabClick("Tab4")}
                                    className={
                                        activeTab === "Tab4"
                                            ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                            : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                    }
                                >
                                    <Image
                                        src="https://www.comfygen.com/image/web3-deve-header-icon.svg"
                                        alt="Web3 Development"
                                        height={40}
                                        width={40}
                                    />
                                    <div className="space-y-4 cursor-pointer">
                                        <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                            Web3 Development
                                        </p>
                                        <span className="text-[#212121]/80 text-sm font-normal">
                                            Building the Future with Web3
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
                                        src="https://www.comfygen.com/comfygen-images/navbar-img/crypto-development1.svg"
                                        alt="Web3 Development"
                                        height={40}
                                        width={40}
                                    />
                                    <div className="space-y-4 cursor-pointer">
                                        <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                            Crypto Development
                                        </p>
                                        <span className="text-[#212121]/80 text-sm font-normal">
                                            Innovate Your Crypto Vision
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-10">
                            <div>
                                {activeTab === "Tab1" && (
                                    <ul className="text-sm font-medium space-y-2">
                                        {Blockchain.map((elem: any, index: any) => {
                                            const { name, num, url } = elem;
                                            return (
                                                <li
                                                    key={index}
                                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                >
                                                    <Link
                                                        onClick={() =>
                                                            setShowNav(showNav === 2 ? 0 : 2)
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


                                {activeTab === "Tab2" && (
                                    <ul className="text-sm font-medium space-y-2">
                                        {Other.map((elem: any, index: any) => {
                                            const { name, num, url } = elem;
                                            return (
                                                <li
                                                    key={index}
                                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                >
                                                    <Link
                                                        onClick={() =>
                                                            setShowNav(showNav === 2 ? 0 : 2)
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

                                {activeTab === "Tab3" && (
                                    <ul className="text-sm font-medium space-y-2">
                                        {Token.map((elem: any, index: any) => {
                                            const { name, num, url } = elem;
                                            return (
                                                <li
                                                    key={index}
                                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                >
                                                    <Link
                                                        onClick={() =>
                                                            setShowNav(showNav === 2 ? 0 : 2)
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
                                        {Metaverse.map((elem: any, index: any) => {
                                            const { name, num, url } = elem;
                                            return (
                                                <li
                                                    key={index}
                                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                >
                                                    <Link
                                                        onClick={() =>
                                                            setShowNav(showNav === 2 ? 0 : 2)
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
                                        {cryptoDevelopment.map((elem: any, index: any) => {
                                            const { name, num, url } = elem;
                                            return (
                                                <li
                                                    key={index}
                                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                                >
                                                    <Link
                                                        onClick={() =>
                                                            setShowNav(showNav === 2 ? 0 : 2)
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



                        <div className={`${activeTab === "Tab5" ? "" : "hidden"}`}>
                            {activeTab === "Tab5" && (
                                <ul className="text-sm font-medium space-y-2">
                                    {cryptoDevelopment1.map((elem: any, index: any) => {
                                        const { name, num, url } = elem;
                                        return (
                                            <li
                                                key={index}
                                                className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                            >
                                                <Link
                                                    onClick={() =>
                                                        setShowNav(showNav === 2 ? 0 : 2)
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

                        <div className={`${activeTab === "Tab1" ? "" : "hidden"}`}>
                            {activeTab === "Tab1" && (
                                <ul className="text-sm font-medium space-y-2">
                                    {Blockchain1.map((elem: any, index: any) => {
                                        const { name, num, url } = elem;
                                        return (
                                            <li
                                                key={index}
                                                className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                            >
                                                <Link
                                                    onClick={() =>
                                                        setShowNav(showNav === 2 ? 0 : 2)
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

                        <div className={`${activeTab === "Tab5" || activeTab === "Tab1" ? "hidden" : ""}`}>
                            <a href="/contact-us" className="relative">
                                <Image
                                    src="https://www.comfygen.com/image/solutions-header-img.webp"
                                    alt=""
                                    height={486}
                                    width={511}
                                />
                                <span className="bg-[#fff] absolute bottom-0 right-0 p-5 block justify-end items-center rounded-tl-[50px]">
                                    <Button variant="secondary" radius="full" className=" py-2 text-white rounded-full"> Connect to expert →</Button>

                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsMnue
