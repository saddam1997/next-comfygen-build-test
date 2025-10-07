import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu, } from "react-icons/md";
import { RiBitCoinLine, RiPhoneLockLine, } from "react-icons/ri";
import { BiGame, } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { BsDot } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
const MobileApp = [
  { num: "1", name: "Mobile app Development", url: "/mobile-app-development" },
  {
    num: "2",
    name: "Hybrid Mobile App Development",
    url: "/hybrid-mobile-app-development",
  },
  { num: "3", name: "iOS App Development", url: "/ios-app-development" },
  {
    num: "4",
    name: "Android App Development",
    url: "/android-app-development",
  },
  {
    num: "5",
    name: "Flutter Development",
    url: "/flutter-development-company",
  },
  {
    num: "6",
    name: "News & Web App Development",
    url: "/news-application-development",
  },
  {
    num: "7",
    name: "Cricket Fast Line App Development",
    url: "/live-line-cricket-mobile-app-development",
  },
  {
    num: "8",
    name: "E-Commerce App Development",
    url: "/e-commerce-app-development",
  },
  {
    num: "9",
    name: "Taxi App Development ",
    url: "/taxi-app-development-company",
  },
  {
    num: "10",
    name: "Food Delivery App Development ",
    url: "/food-delivery-app-development",
  },
  ,
  {
    num: "11",
    name: "Dating App Development  ",
    url: "/dating-app-development",
  },
  {
    num: "12",
    name: "Doctor Appointment App Development  ",
    url: "/doctor-appointment-app-development",
  },
  {
    num: "13",
    name: "Clinical App Development ",
    url: "/clinical-application-development",
  },
  {
    num: "14",
    name: "Pharmacy App Development ",
    url: "/pharmacy-app-development",
  },
  {
    num: "15",
    name: "Telemedicine App Development ",
    url: "/telemedicine-app-development",
  },
  {
    num: "16",
    name: "Medicine Delivery App Development",
    url: "/medicine-delivery-app-development",
  },
  {
    num: "17",
    name: "Laboratory App Development",
    url: "/laboratory-app-development",
  },
  {
    num: "18",
    name: "Delivery App Development",
    url: "/delivery-app-development",
  },


];
const WebApp = [
  { num: "1", name: "Website Development", url: "/web-development" },
  { num: "2", name: "Website Design", url: "/web-design" },
  { num: "3", name: "MERN stack development", url: "/mern-stack-development" },
  { num: "4", name: "Node JS Development", url: "/node-js-development" },
  { num: "5", name: "React JS Development", url: "/react-js-development" },
  { num: "6", name: "Next JS Development", url: "/next-js-development" },
];
const Stack = [
  {
    num: "1",
    name: "React Native Development",
    url: "/react-native-development",
  },
  { num: "2", name: "Python Development", url: "/python-development" },
  { num: "3", name: "IoT Development", url: "/iot-development-company" },
  { num: "4", name: "Hire Mobile App Developer", url: "/hire-mobile-app-developer" },
  { num: "5", name: "Social Media App Development", url: "/social-media-app-development" },
  { num: "6", name: "Finance   App Developer", url: "/finance-app-development" },
  { num: "7", name: "Healthcare App Development", url: "/healthcare-app-development" },
  { num: "8", name: "Mobile game Development", url: "/mobile-game-development-company" },
  { num: "9", name: "Hire .Net Developer", url: "/hire-dot-net-developer" },
];
const Blockchain = [
  {
    num: "1",
    name: "Blockchain Development company",
    url: "/blockchain-development",
  },
  {
    num: "2",
    name: "Blockchain Consulting Service",
    url: "/blockchain-consulting-services",
  },
  {
    num: "3",
    name: "Substrate Development Company",
    url: "/substrate-development-company",
  },
  {
    num: "4",
    name: "polygon Blockchain development",
    url: "/polygon-blockchain-development",
  },

  {
    num: "5",
    name: "Hyperledger Blockchain Development",
    url: "/hyperledger-blockchain-development",
  },

  {
    num: "6",
    name: "Multichain Blockchain",
    url: "/multichain-blockchain-development",
  },
  {
    num: "7",
    name: "Solana Blockchain Development",
    url: "/solana-blockchain-development-company",
  },

  {
    num: "8",
    name: "Stellar Blockchain Development",
    url: "/stellar-blockchain-development-company",
  },

  {
    num: "9",
    name: "Cardano Blockchain Development",
    url: "/cardano-blockchain-development-company",
  },

  {
    num: "10",
    name: "Ethereum Blockchain Development",
    url: "/ethereum-blockchain-development-company",
  },
  {
    num: "11",
    name: "Hire Blockchain Developer",
    url: "/hire-blockchain-developer"
  }
  ,

  {
    num: "12",
    name: "POW Blockchain Development",
    url: "/pow-blockchain-development-company",
  },
  {
    num: "13",
    name: "POA Blockchain Development",
    url: "/poa-blockchain-development-company",
  },



];
const Token = [
  {
    num: "1",
    name: "Crypto Token Development",
    url: "/crypto-token-development-company",
  },
  {
    num: "2",
    name: "ERC-20 Token Development",
    url: "/erc20-token-development",
  },
  {
    num: "3",
    name: "Ethereum token development",
    url: "/ethereum-token-development",
  },
  {
    num: "4",
    name: "Solana token development",
    url: "/solana-token-development",
  },
  { num: "5", name: "Tron token development", url: "/tron-token-development" },
  { num: "6", name: "NFT token development", url: "/nft-token-development-company" },

  {
    num: "7",
    name: "Altcoin Development services",
    url: "/altcoin-development-services",
  },

  {
    num: "8",
    name: "NFT Marketplace Development",
    url: "/nft-marketplace-development-company",
  },


];
const Other = [
  {
    num: "1",
    name: "Crypto wallet development",
    url: "/crypto-wallet-development",
  },
  {
    num: "2",
    name: "Crypto exchange services",
    url: "/cryptocurrency-exchange-development",
  },
  {
    num: "3",
    name: "Crypto MLM Software development",
    url: "/cryptocurrency-mlm-software-development",
  },
  {
    num: "4",
    name: "Crypto White Paper Development",
    url: "/crypto-white-paper-development",
  },
  {
    num: "5",
    name: "Metaverse Development Company",
    url: "/metaverse-development",
  },
  {
    num: "6",
    name: "Decentralized Exchange Development",
    url: "/decentralized-exchange-development",
  },
  {
    num: "7",
    name: "dApp Development Company",
    url: "/dapp-development-company",
  },
  {
    num: "8",
    name: "DeFi Development Company",
    url: "/defi-development-company",
  },
  {
    num: "9",
    name: "DeFi Smart Contract Development",
    url: "/defi-smart-contract-development",
  },
  {
    num: "10",
    name: "Smart Contract Development",
    url: "/smart-contract-development",
  },
  {
    num: "11",
    name: "Smart Contract MLM Software",
    url: "/smart-contract-mlm-software",
  },

];
const Game = [
  {
    num: "1",
    name: "Game Development Company",
    url: "/game-development-company",
  },
  { num: "2", name: "Ludo Game Development", url: "/ludo-game-development" },
  { num: "3", name: "Poker Game Development", url: "/poker-game-development" },
  { num: "4", name: "Rummy Game Development", url: "/rummy-game-development" },
  {
    num: "5",
    name: "Baccarat Game Development",
    url: "/baccarat-game-development",
  },

  {
    num: "7",
    name: "Video Game Development",
    url: "/video-game-development",
  },
  {
    num: "8",
    name: "Blackjack Game Development",
    url: "/blackjack-game-development",
  },
  {
    num: "9",
    name: "Omaha Poker Game development",
    url: "/omaha-poker-game-development",
  },
  {
    num: "10",
    name: "Chess Game development",
    url: "/chess-game-development",
  },
  {
    num: "11",
    name: "Multigaming Platform App Development",
    url: "/multigaming-platform-app-development",
  },
  {
    num: "12",
    name: "NFT Game Development",
    url: "/nft-game-development-company",
  },
  {
    num: "13",
    name: "Metaverse Game Development",
    url: "/metaverse-game-development-company"
  },
  {
    num: "14",
    name: "Board Game Development",
    url: "/board-game-development"
  },

];
const GameApi = [
  { num: "1", name: "Cricket live line API", url: "/cricket-live-line-api" },
  // { num: "2", name: "Live Casino API Integration", url: "/live-casino-game-api-integration" },

];
const Betting = [
  {
    num: "1",
    name: "sports Betting App Development",
    url: "/sports-betting-app-development",
  },
  {
    num: "2",
    name: "Sports Betting Software Development",
    url: "/sports-betting-software-development",
  },
  {
    num: "3",
    name: "Sports Betting Website Development",
    url: "/sports-betting-website-development",
  },
  {
    num: "4",
    name: "Cricket Betting Software Development",
    url: "/cricket-betting-software-development",
  },
  {
    num: "5",
    name: "Satta Matka App Development company",
    url: "/satta-matka-game-app-development-company",
  },



];
const Company = [
  { num: "1", name: "About us", url: "/about-us" },
  { num: "2", name: "Our Portfolio", url: "/portfolio" },
  { num: "3", name: "Career at Comfygen", url: "/career" },
  { num: "4", name: "Life at Comfygen", url: "/life-at-comfygen" },
  { num: "5", name: "Client testimonial", url: "/client-testimonials" },
  { num: "6", name: "Contact us", url: "/contact-us" },
  { num: "7", name: "Our Blog", url: "https://www.comfygen.com/blog/" },

];
export default function MobileNav(props: any) {
  const [showNav, setShowNav] = useState(0);
  // const [showNav, setShowNav] = useState(null);
  const [menu] = useState(false);
  function toggleSlideover() {
    document.getElementById("slideover-container").classList.toggle("invisible");
    document.getElementById("slideover-bg").classList.toggle("opacity-0");
    document.getElementById("slideover-bg").classList.toggle("opacity-50");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }
  return (
    <div className="sticky top-0 z-20 bg-transparent ">
      <nav className="z-20 flex items-center justify-between px-4 py-0 md:px-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
        <div className="flex items-center flex-shrink-0 text-white ">
          <Link passHref={true} href="/" className="relative">
            <Image
              src="https://www.comfygen.com/img/comfygen-logo.webp"
              alt="comfygen-logo"
              width={244}
              height={51}
              className="h-[51px] w-[244px]"
              style={{ height: "auto", width: "auto" }}
              priority
            />
          </Link>
        </div>
        <div
          onClick={() => toggleSlideover()}
          className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden"
        >
          {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
        </div>
        <div
          id="slideover-container"
          className="fixed inset-0 invisible w-full h-full"
        >
          <span
            onClick={() => toggleSlideover()}
            id="slideover-bg"
            className="absolute inset-0 w-full h-full transition-all duration-500 ease-out bg-gray-900 "
          ></span>
          <div
            id="slideover"
            className="md:w-96 w-80 bg-gradient-to-b from-[#1CB9F7] to-[#AF65C0]  h-full absolute right-0 duration-300 ease-out transition-all translate-x-full overflow-scroll"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-2 bg-transparent">
              <div className="text-[#FFFFFF] text-lg font-semibold">
                Menu
              </div>
              <span
                onClick={() => toggleSlideover()}
                className="p-2 rounded-full bg-slate-100/20"
              >
                <VscChromeClose size={24} className="text-white" />
              </span>
            </div>
            <div className="font-medium text-white divide-y divide-white/10">
              <div>
                <Link
                  onClick={() => toggleSlideover()}
                  href="/"
                  passHref={true}
                >
                  {" "}
                  <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                    <FiHome className="text-[#fff]" size={22} />
                    <span>Home</span>
                  </div>
                </Link>
              </div>
              <div>
                <div
                  onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                  className={
                    showNav === 1
                      ? "flex justify-between p-3 items-center px-6 bg-white/10"
                      : "flex justify-between p-3 items-center px-6 bg-transparent "
                  }
                >
                  <div className="flex items-center space-x-2 ">
                    <RiPhoneLockLine className="text-[#fff]" size={22} />
                    <span>Development</span>
                  </div>
                  <MdKeyboardArrowDown size={30} className={showNav === 1 ? "rotate-180" : "rotate-0"} />
                </div>
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 1 ? "max-h-full" : "max-h-0"
                    } `}
                >
                  <ul className="grid grid-cols-1 gap-2 p-4">
                    <p className="flex items-center text-base font-medium text-white">
                      <span className="pr-1">
                        <BsDot className="text-[#fff]" size={22} />
                      </span>
                      Mobile App Development
                    </p>
                    <div className="p-2 space-y-2 text-sm font-medium">
                      {MobileApp.map((elem: any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li key={num} className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                            <Link onClick={() => setShowNav(showNav === 1 ? 0 : 1)} href={url} passHref={true} >
                              {" "}
                              {name}
                            </Link>
                          </li>);
                      })}
                    </div>
                    <p className="flex items-center text-base font-medium text-white">
                      <span className="pr-1">
                        <BsDot className="text-[#fff]" size={22} />
                      </span>
                      Web Development
                    </p>
                    <div className="space-y-2 text-sm font-medium">
                      {WebApp.map((elem: any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li key={num} className="py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                            <Link onClick={() => setShowNav(showNav === 1 ? 0 : 1)} href={url} passHref={true} >
                              {" "}
                              {name}
                            </Link>
                          </li>);
                      })}
                    </div>
                    <p className="flex items-center text-base font-medium text-white">
                      <span className="pr-1">
                        <BsDot className="text-[#fff]" size={22} />
                      </span>
                      Stack Development
                    </p>
                    <div className="space-y-2 text-sm font-medium">
                      {Stack.map((elem: any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li key={num} className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                            <Link onClick={() => setShowNav(showNav === 1 ? 0 : 1)} href={url} passHref={true} >
                              {" "}
                              {name}
                            </Link>
                          </li>);
                      })}
                    </div>
                  </ul>
                </div>
              </div>
              <div onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className={
                  showNav === 2
                    ? "flex justify-between p-3 items-center px-6 bg-white/10"
                    : "flex justify-between p-3 items-center px-6 bg-transparent "
                }>
                <div className="flex items-center space-x-2 ">
                  <RiBitCoinLine className="text-[#fff]" size={22} />
                  <span> Blockchain </span>
                </div>
                <MdKeyboardArrowDown size={30} className={showNav === 2 ? "rotate-180" : "rotate-0"} />
              </div>
              <div
                className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 2 ? "max-h-full" : "max-h-0"
                  } `}>
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <p className="flex items-center text-base font-medium text-white">
                    <span className="pr-1">
                      <BsDot className="text-[#fff]" size={22} />
                    </span>
                    Blockchain Development
                  </p>
                  <div className="p-3 space-y-2 text-sm font-medium">
                    {Blockchain.map((elem: any) => {
                      const { icon, name, num, url } = elem;
                      return (
                        <li key={num} className=" py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link onClick={() => setShowNav(showNav === 2 ? 0 : 2)} href={url} passHref={true} >
                            {name}
                          </Link>
                        </li>);
                    })}
                  </div>
                  <p className="flex items-center text-base font-medium text-white">
                    <span className="pr-1">
                      <BsDot className="text-[#fff]" size={22} />
                    </span>
                    Token Development
                  </p>
                  <div className="p-3 space-y-2 text-sm font-medium">
                    {Token.map((elem: any) => {
                      const { icon, name, num, url } = elem;
                      return (
                        <li key={num} className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link onClick={() => setShowNav(showNav === 2 ? 0 : 2)} href={url} passHref={true} >
                            {name}
                          </Link>
                        </li>);
                    })}
                  </div>
                  <p className="flex items-center text-base font-medium text-white">
                    <span className="pr-1">
                      <BsDot className="text-[#fff]" size={22} />
                    </span>
                    Other Development
                  </p>
                  <div className="p-3 space-y-2 text-sm font-medium">
                    {Other.map((elem: any) => {
                      const { icon, name, num, url } = elem;
                      return (
                        <li key={num} className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                          <Link onClick={() => setShowNav(showNav === 2 ? 0 : 2)} href={url} passHref={true} >
                            {name}
                          </Link>
                        </li>);
                    })}
                  </div>
                </ul>
              </div>
              <div>
                <div
                  onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                  className={
                    showNav === 3
                      ? "flex justify-between p-3 items-center px-6 bg-white/10"
                      : "flex justify-between p-3 items-center px-6 bg-transparent "
                  }
                >
                  <p className="flex items-center space-x-2 ">
                    <BiGame className="text-[#fff]" size={22} />
                    <span> Games</span>
                  </p>
                  <MdKeyboardArrowDown size={30} className={showNav === 3 ? "rotate-180" : "rotate-0"} />
                </div>
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 3 ? "max-h-full" : "max-h-0"
                    } `}>
                  <ul className="grid grid-cols-1 gap-2 p-4">
                    <p className="flex items-center text-base font-medium text-white">
                      <span className="pr-1">
                        <BsDot className="text-[#fff]" size={22} />
                      </span>
                      Game Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {Game.map((elem: any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li key={num} className=" py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                            <Link onClick={() => setShowNav(showNav === 3 ? 0 : 3)} href={url} passHref={true} >
                              {" "}
                              {name}
                            </Link>
                          </li>);
                      })}
                    </div>
                    <p className="flex items-center text-base font-medium text-white">
                      <span className="pr-1">
                        <BsDot className="text-[#fff]" size={22} />
                      </span>
                      Betting Game App Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {Betting.map((elem: any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li key={num} className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                            <Link onClick={() => setShowNav(showNav === 2 ? 0 : 2)} href={url} passHref={true} >
                              {name}
                            </Link>
                          </li>);
                      })}
                    </div>
                    <p className="flex items-center text-base font-medium text-white">
                      <span className="pr-1">
                        <BsDot className="text-[#fff]" size={22} />
                      </span>
                      Game API Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {GameApi.map((elem: any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li key={num} className="  py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                            <Link onClick={() => setShowNav(showNav === 2 ? 0 : 2)} href={url} passHref={true} >
                              {name}
                            </Link>
                          </li>);
                      })}
                    </div>
                  </ul>
                </div>
              </div>
              <div>
                <div
                  onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                  className={
                    showNav === 4
                      ? "flex justify-between p-3 items-center px-6 bg-white/10"
                      : "flex justify-between p-3 items-center px-6 bg-transparent "
                  } >
                  <p className="flex items-center space-x-2 ">
                    <HiOutlineOfficeBuilding className="text-[#fff]" size={22} />
                    <span> Our Company</span>
                  </p>
                  <MdKeyboardArrowDown size={30} className={showNav === 4 ? "rotate-180" : "rotate-0"} />
                </div>
                <div
                  className={`bg-transparent  text-white font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 4 ? "max-h-full" : "max-h-0"
                    } `} >
                  <ul className="grid grid-cols-1 gap-2 p-4">
                    <p className="flex items-center text-base font-medium text-white">
                      <span className="pr-1">
                        <BsDot className="text-[#fff]" size={22} />
                      </span>
                      Our Company
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium ">
                      {Company.map((elem: any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li key={num} className=" py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                            <Link onClick={() => setShowNav(showNav === 4 ? 0 : 4)} href={url} passHref={true} >
                              {name}
                            </Link>
                          </li>);
                      })}
                    </div>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center py-10">
                <Link
                  onClick={() => toggleSlideover()}
                  href="/quote"
                  passHref={true}
                >
                  <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-white rounded-full cursor-pointer bg-white/30 w-fit group">
                    Get In Quote
                  </div>
                </Link>
              </div>
            </div>

            {/* <div className="font-medium text-white divide-y divide-white/10">
              <div>
                <Link href="/" passHref={true}  onClick={() => toggleSlideover()}>
                  {" "}
                  <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                    <FiHome className="text-[#fff]" size={22} />
                    <span>Home</span>
                  </div>
                </Link>
              </div>
              {[
                { title: "Mobile App Development", items: MobileApp },
                { title: "Web Development", items: WebApp },
                { title: "Stack Development", items: Stack },
                { title: "Blockchain Development", items: Blockchain },
                { title: "Token Development", items: Token },
                { title: "Other Development", items: Other },
                { title: "Game Development", items: Game },
                { title: "Betting Game App Development", items: Betting },
                { title: "Game API Development", items: GameApi },
                { title: "Our Company", items: Company },
              ].map((category, index) => (
                <div key={index}>
                  <div
                    onClick={() =>
                      setShowNav((prevIndex) => (prevIndex === index ? null : index))
                    }
                    className={
                      showNav === index
                        ? "flex justify-between p-3 items-center px-6 bg-white/10"
                        : "flex justify-between p-3 items-center px-6 bg-transparent"
                    }
                  >
                    <p className="flex items-center space-x-2">
                      <BiGame className="text-[#fff]" size={22} />
                      <span>{category.title}</span>
                    </p>
                    <MdKeyboardArrowDown
                      size={30}
                      className={showNav === index ? "rotate-180" : "rotate-0"}
                    />
                  </div>
                  <div
                    className={`bg-transparent text-white font-normal pl-4 text-sm capitalize overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === index ? "max-h-full" : "max-h-0"
                      }`}
                  >
                    <ul className="grid grid-cols-1 gap-2 p-4">
                      {category.items.map((item: any, itemIndex: number) => (
                        <li
                          key={itemIndex}
                          className="py-1.5 text-white whitespace-nowrap transition duration-200 transform hover:translate-x-4"
                        >
                          <Link href={item.url} passHref={true}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center py-10">
                <Link onClick={() => toggleSlideover()} href="/quote" passHref={true}>
                  <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-white rounded-full cursor-pointer bg-white/30 w-fit group">
                    Get In Quote
                  </div>
                </Link>
              </div>
            </div> */}

          </div>
        </div>
      </nav>
    </div>
  );
}
