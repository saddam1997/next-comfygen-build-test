import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu } from "react-icons/md";
import { RiBitCoinLine, RiPhoneLockLine } from "react-icons/ri";
import { BiGame } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { BsDot } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { LiaIndustrySolid } from "react-icons/lia";
const MobileApp = [
  { num: "1", name: "Mobile app Development", url: "/mobile-app-development" },
  {
    num: "2",
    name: "Application Consulting Service",
    url: "/ca/application-consulting-services",
  },
  {
    num: "3",
    name: "Hybrid Mobile App Development",
    url: "/hybrid-mobile-app-development",
  },
  { num: "4", name: "iOS App Development", url: "/ios-app-development" },
  {
    num: "5",
    name: "Android App Development",
    url: "/android-app-development",
  },
  {
    num: "6",
    name: "Flutter Development",
    url: "/flutter-development-company",
  },
  {
    num: "7",
    name: "News & Web App Development",
    url: "/news-application-development",
  },
  {
    num: "8",
    name: "Cricket Fast Line App Development",
    url: "/live-line-cricket-mobile-app-development",
  },
  {
    num: "9",
    name: "E-Commerce App Development",
    url: "/e-commerce-app-development",
  },
  {
    num: "10",
    name: "Taxi App Development ",
    url: "/taxi-app-development-company",
  },
  {
    num: "11",
    name: "Food Delivery App Development ",
    url: "/food-delivery-app-development",
  },
  {
    num: "12",
    name: "Startup App Development ",
    url: "/ca/startup-app-development",
  },
  ,
  {
    num: "13",
    name: "Dating App Development  ",
    url: "/dating-app-development",
  },
  {
    num: "14",
    name: "Doctor Appointment App Development  ",
    url: "/doctor-appointment-app-development",
  },
  {
    num: "15",
    name: "Clinical App Development ",
    url: "/clinical-application-development",
  },
  {
    num: "16",
    name: "Pharmacy App Development ",
    url: "/pharmacy-app-development",
  },
  {
    num: "17",
    name: "Telemedicine App Development ",
    url: "/telemedicine-app-development",
  },
  {
    num: "18",
    name: "Medicine Delivery App Development",
    url: "/medicine-delivery-app-development",
  },
  {
    num: "19",
    name: "Medicine Ordering App Development",
    url: "/medicine-app-development",
  },
  {
    num: "20",
    name: "Laboratory App Development",
    url: "/laboratory-app-development",
  },
  {
    num: "21",
    name: "News Application Development",
    url: "/news-application-development",
  },
  {
    num: "22",
    name: "Education App Development",
    url: "/ca/education-app-development-company",
  },
  {
    num: "23",
    name: "Magazine App Development",
    url: "/ca/magazine-app-development-company",
  },
  {
    num: "24",
    name: "E-Learning App Development",
    url: "/e-learning-app-development",
  },
  {
    num: "25",
    name: "Tutor App Development",
    url: "/tutor-app-development",
  },
  {
    num: "26",
    name: " Astrology App Development",
    url: "/astrology-app-development",
  },
  {
    num: "27",
    name: " Mobile Banking App Development",
    url: "/mobile-banking-app-development",
  },
  {
    num: "28",
    name: " UPI Payment App Development",
    url: "/upi-payment-app-development",
  },
  {
    num: "29",
    name: " NeoBank App Development",
    url: "/neo-bank-app-development",
  },
  {
    num: "30",
    name: " Banking Software Development",
    url: "/banking-software-development",
  },

  {
    num: "31",
    name: "Insurance App Development",
    url: "/insurance-app-development",
  },
  // {
  //   num: "32",
  //   name: "Quick Commerce App Development",
  //   url: "/quick-commerce-app-development",
  // },
  {
    num: "32",
    name: "White Label Mobile App Development",
    url: "/white-label-mobile-app-development",
  },
  {
    num: "34",
    name: "Personal Finance App Development",
    url: "/personal-finance-app-development",
  },
  {
    num: "35",
    name: "Car Finance App Development",
    url: "/car-finance-app-development",
  },
  {
    num: "36",
    name: "Roadside Assistance App Development",
    url: "/roadside-assistance-app-development",
  },
  {
    num: "37",
    name: "Truck Finance App Development",
    url: "/truck-finance-app-development",
  },
  {
    num: "38",
    name: "Milk Delivery App Development",
    url: "/milk-delivery-app-development",
  },
  {
    num: "39",
    name: "Flower Delivery App Development",
    url: "/flower-delivery-app-development",
  },
  {
    num: "40",
    name: "Business Directory App Development",
    url: "/business-directory-app-development",
  },
  {
    num: "41",
    name: "Home Service App Development",
    url: "/home-service-app-development",
  },
  {
    num: "42",
    name: "Logistics App Development",
    url: "/logistics-app-development",
  },
  {
    num: "43",
    name: "Health Tracking App Development",
    url: "/health-tracking-app-development",
  },
  {
    num: "44",
    name: "Delivery App Development",
    url: "/delivery-app-development",
  },
];
const Ai = [
  {
    num: "1",
    name: "Ai Development",
    url: "/ai-development",
  },
  {
    num: "2",
    name: "Generative AI Development",
    url: "/generative-ai-development",
  },
  {
    num: "3",
    name: "AI Interview Scheduling Software Development",
    url: "/ai-interview-scheduling-software-development",
  },
  {
    num: "4",
    name: "Data Service",
    url: "/data",
  },
  {
    num: "5",
    name: "Data Analytics",
    url: "/data/analytics-service-provider",
  },
  {
    num: "6",
    name: "Tableau Consulting Services",
    url: "/data/tableau-consulting-services",
  },
  {
    num: "7",
    name: "Hire Data Scientist",
    url: "/data/hire-data-scientist",
  },
  {
    num: "8",
    name: "AWS Analytics Service",
    url: "/data/aws-analytics-services",
  },
  {
    num: "9",
    name: "Business Intelligence",
    url: "/data/business-intelligence",
  },
  {
    num: "10",
    name: "Power BI Consulting Services",
    url: "/data/power-bi-consulting-services",
  },
  {
    num: "11",
    name: "Sales Performance Dashboard",
    url: "/data/sales-dashboard",
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
  {
    num: "4",
    name: "Hire Mobile App Developer",
    url: "/hire-mobile-app-developer",
  },
  {
    num: "5",
    name: "Social Media App Development",
    url: "/social-media-app-development",
  },
  {
    num: "6",
    name: "Finance   App Developer",
    url: "/finance-app-development",
  },
  {
    num: "7",
    name: "Healthcare App Development",
    url: "/healthcare-app-development",
  },
  {
    num: "8",
    name: "Mobile game Development",
    url: "/mobile-game-development-company",
  },
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
    name: "Custom Blockchain Development",
    url: "/custom-blockchain-development-company",
  },
  {
    num: "3",
    name: "Blockchain Consulting Service",
    url: "/blockchain-consulting-services",
  },
  {
    num: "4",
    name: "Substrate Development Company",
    url: "/substrate-development-company",
  },
  {
    num: "5",
    name: "polygon Blockchain development",
    url: "/polygon-blockchain-development",
  },

  {
    num: "6",
    name: "Hyperledger Blockchain Development",
    url: "/hyperledger-blockchain-development",
  },

  {
    num: "7",
    name: "Multichain Blockchain",
    url: "/multichain-blockchain-development",
  },
  {
    num: "8",
    name: "Solana Blockchain Development",
    url: "/solana-blockchain-development-company",
  },

  {
    num: "9",
    name: "Stellar Blockchain Development",
    url: "/stellar-blockchain-development-company",
  },

  {
    num: "10",
    name: "Cardano Blockchain Development",
    url: "/cardano-blockchain-development-company",
  },

  {
    num: "11",
    name: "Ethereum Blockchain Development",
    url: "/ethereum-blockchain-development-company",
  },
  {
    num: "12",
    name: "Hire Blockchain Developer",
    url: "/hire-blockchain-developer",
  },

  {
    num: "13",
    name: "POW Blockchain Development",
    url: "/pow-blockchain-development-company",
  },
  {
    num: "14",
    name: "POA Blockchain Development",
    url: "/poa-blockchain-development-company",
  },
  {
    num: "15",
    name: "DPOS Blockchain Development",
    url: "ca/dpos-blockchain-development-company",
  },
  {
    num: "16",
    name: "Private Blockchain Development Company",
    url: "/private-blockchain-development",
  },
  {
    num: "17",
    name: "Enterprise Blockchain Development Company",
    url: "/enterprise-blockchain-development",
  },
  {
    num: "18",
    name: "Blockchain Wallet Development Company",
    url: "/blockchain-wallet-development",
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
  {
    num: "6",
    name: "NFT token development",
    url: "/nft-token-development-company",
  },

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
  {
    num: "9",
    name: "P2P Crypto Exchange Development",
    url: "/p2p-crypto-exchange-development",
  },
  {
    num: "10",
    name: "Crypto Trading Bot Development",
    url: "/crypto-trading-bot-development",
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
    url: "/metaverse-game-development-company",
  },
  {
    num: "14",
    name: "Board Game Development",
    url: "/board-game-development",
  },
];
const GameApi = [
  { num: "1", name: "Cricket live line API", url: "/cricket-live-line-api" },
  // {
  //   num: "2",
  //   name: "Live Casino API Integration",
  //   url: "/live-casino-game-api-integration",
  // },
];
const Betting = [
  // {
  //   num: "1",
  //   name: "sports Betting App Development",
  //   url: "/sports-betting-app-development",
  // },
  // {
  //   num: "2",
  //   name: "Sports Betting Software Development",
  //   url: "/sports-betting-software-development",
  // },
  // {
  //   num: "3",
  //   name: "Sports Betting Website Development",
  //   url: "/sports-betting-website-development",
  // },
  // {
  //   num: "4",
  //   name: "Cricket Betting Software Development",
  //   url: "/cricket-betting-software-development",
  // },
  // {
  //   num: "5",
  //   name: "Satta Matka App Development company",
  //   url: "/satta-matka-game-app-development-company",
  // },


];
const Company = [
  { num: "1", name: "About us", url: "/about-us" },
  { num: "2", name: "Our Portfolio", url: "/portfolio" },
  { num: "3", name: "Career at Comfygen", url: "/career" },
  { num: "4", name: "Life at Comfygen", url: "/life-at-comfygen" },
  { num: "5", name: "Client testimonial", url: "/client-testimonials" },
  { num: "6", name: "Contact us", url: "/contact-us" },
  // { num: "7", name: "Our Blog", url: "https://www.comfygen.com/blog/" },
];

const EcommerceApp = [
  {
    num: "1",
    name: "Ecommerce",
    url: "/ecommerce",
  },
  {
    num: "2",
    name: "Ecommerce App Development",
    url: "/e-commerce-app-development",
  },
  {
    num: "3",
    name: "FMCG",
    url: "/ecommerce/fmcg",
  },
  {
    num: "4",
    name: "Fashion App Development",
    url: "/ecommerce/fashion",
  },
  {
    num: "5",
    name: "Food Delivery App Development",
    url: "/food-delivery-app-development",
  },
  // {
  //   num: "6",
  //   name: "Quick Commerce App Development",
  //   url: "/quick-commerce-app-development",
  // },
  {
    num: "7",
    name: "Grocery App Development",
    url: "/ecommerce/grocery",
  },
  {
    num: "8",
    name: "Water Delivery App Development",
    url: "/water-delivery-app-development",
  },
  {
    num: "9",
    name: "Pizza Delivery App Development",
    url: "/pizza-delivery-app-development",
  },

]

export default function MobileNav(props: any) {
  const [showNav, setShowNav] = useState(0);
  // const [showNav, setShowNav] = useState(null);
  const [menu] = useState(false);
  function toggleSlideover() {
    document
      .getElementById("slideover-container")
      .classList.toggle("invisible");
    document.getElementById("slideover-bg").classList.toggle("opacity-0");
    document.getElementById("slideover-bg").classList.toggle("opacity-50");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white ">
      <nav className="z-20 flex items-center justify-between   py-0  2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="flex items-center flex-shrink-0 text-[#212121] ">
          <Link passHref={true} href="/" className="relative">
            <Image
              src="https://www.comfygen.com/img/comfygen-logo.webp"
              alt="comfygen-logo"
              width={180}
              height={51}
              unoptimized
              priority={true}
              quality={75}
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
            className="md:w-96 w-80 bg-white  h-full absolute right-0 duration-300 ease-out transition-all translate-x-full overflow-scroll"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-2 bg-transparent bg-white">
              <div className="text-[#212121] text-lg font-semibold">Menu</div>
              <span
                onClick={() => toggleSlideover()}
                className="p-2 rounded-full bg-slate-100/20"
              >
                <VscChromeClose size={24} className="text-[#212121]" />
              </span>
            </div>
            <div className="font-medium text-[#212121] divide-y divide-white/10">
              <div>
                <Link
                  onClick={() => toggleSlideover()}
                  href="/"
                  passHref={true}
                >
                  {" "}
                  <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-white/10">
                    <FiHome className="text-[#212121]" size={22} />
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
                    <RiPhoneLockLine className="text-[#212121]" size={22} />
                    <span>Development</span>
                  </div>
                  <MdKeyboardArrowDown
                    size={30}
                    className={showNav === 1 ? "rotate-180" : "rotate-0"}
                  />
                </div>
                <div
                  className={`bg-transparent  text-[#212121] font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 1 ? "max-h-full" : "max-h-0"
                    } `}
                >
                  <ul className="grid grid-cols-1 gap-2 p-4">
                    <p className="flex items-center text-base font-medium text-[#212121]">
                      <span className="pr-1">
                        <BsDot className="text-[#212121]" size={22} />
                      </span>
                      Mobile App Development
                    </p>
                    <div className="p-2 space-y-2 text-sm font-medium">
                      {MobileApp.map((elem:any, index:any) => {
                        const {icon, name, num, url } = elem;
                        return (
                          <li
                            key={index}
                            className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                          >
                            <Link
                              onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                              href={url}
                              passHref={true}
                            >
                              {" "}
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                    <p className="flex items-center text-base font-medium text-[#212121]">
                      <span className="pr-1">
                        <BsDot className="text-[#212121]" size={22} />
                      </span>
                      Web Development
                    </p>
                    <div className="space-y-2 text-sm font-medium">
                      {WebApp.map((elem:any, index:any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li
                            key={index}
                            className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                          >
                            <Link
                              onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                              href={url}
                              passHref={true}
                            >
                              {" "}
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                    <p className="flex items-center text-base font-medium text-[#212121]">
                      <span className="pr-1">
                        <BsDot className="text-[#212121]" size={22} />
                      </span>
                      Stack Development
                    </p>
                    <div className="space-y-2 text-sm font-medium">
                      {Stack.map((elem:any, index:any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li
                            key={index}
                            className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                          >
                            <Link
                              onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                              href={url}
                              passHref={true}
                            >
                              {" "}
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  </ul>
                </div>
              </div>
              <div
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className={
                  showNav === 2
                    ? "flex justify-between p-3 items-center px-6 bg-white/10"
                    : "flex justify-between p-3 items-center px-6 bg-transparent "
                }
              >
                <div className="flex items-center space-x-2 ">
                  <RiBitCoinLine className="text-[#212121]" size={22} />
                  <span> Blockchain </span>
                </div>
                <MdKeyboardArrowDown
                  size={30}
                  className={showNav === 2 ? "rotate-180" : "rotate-0"}
                />
              </div>
              <div
                className={`bg-transparent  text-[#212121] font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 2 ? "max-h-full" : "max-h-0"
                  } `}
              >
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <p className="flex items-center text-base font-medium text-[#212121]">
                    <span className="pr-1">
                      <BsDot className="text-[#212121]" size={22} />
                    </span>
                    Blockchain Development
                  </p>
                  <div className="p-3 space-y-2 text-sm font-medium">
                    {Blockchain.map((elem:any, index:any) => {
                      const { icon, name, num, url } = elem;
                      return (
                        <li
                          key={index}
                          className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                        >
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href={url}
                            passHref={true}
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                  <p className="flex items-center text-base font-medium text-[#212121]">
                    <span className="pr-1">
                      <BsDot className="text-[#212121]" size={22} />
                    </span>
                    Token Development
                  </p>
                  <div className="p-3 space-y-2 text-sm font-medium">
                    {Token.map((elem:any, index:any) => {
                      const { icon, name, num, url } = elem;
                      return (
                        <li
                          key={index}
                          className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                        >
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href={url}
                            passHref={true}
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                  <p className="flex items-center text-base font-medium text-[#212121]">
                    <span className="pr-1">
                      <BsDot className="text-[#212121]" size={22} />
                    </span>
                    Other Development
                  </p>
                  <div className="p-3 space-y-2 text-sm font-medium">
                    {Other.map((elem:any, index:any) => {
                      const { icon, name, num, url } = elem;
                      return (
                        <li
                          key={index}
                          className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                        >
                          <Link
                            onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                            href={url}
                            passHref={true}
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
              {/* ecommerce */}
              <div
                onClick={() => setShowNav(showNav === 6 ? 0 : 6)}
                className={
                  showNav === 6
                    ? "flex justify-between p-3 items-center px-6 bg-white/10"
                    : "flex justify-between p-3 items-center px-6 bg-transparent "
                }
              >
                <div className="flex items-center space-x-2 ">
                  <LiaIndustrySolid className="text-[#212121]" size={22} />
                  <span> Industries </span>
                </div>
                <MdKeyboardArrowDown
                  size={30}
                  className={showNav === 5 ? "rotate-180" : "rotate-0"}
                />
              </div>
              <div
                className={`bg-transparent  text-[#212121] font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 6 ? "max-h-full" : "max-h-0"
                  } `}
              >
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <p className="flex items-center text-base font-medium text-[#212121]">
                    <span className="pr-1">
                      <BsDot className="text-[#212121]" size={22} />
                    </span>
                    Ecommerce Development
                  </p>
                  <div className="p-3 space-y-2 text-sm font-medium">
                    {EcommerceApp.map((elem:any, index:any) => {
                      const { icon, name, num, url } = elem;
                      return (
                        <li
                          key={index}
                          className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                        >
                          <Link
                            onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                            href={url}
                            passHref={true}
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
              <div
                onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                className={
                  showNav === 5
                    ? "flex justify-between p-3 items-center px-6 bg-white/10"
                    : "flex justify-between p-3 items-center px-6 bg-transparent "
                }
              >
                <div className="flex items-center space-x-2 ">
                  <FaLaptopCode className="text-[#212121]" size={22} />
                  <span> AI Development </span>
                </div>
                <MdKeyboardArrowDown
                  size={30}
                  className={showNav === 5 ? "rotate-180" : "rotate-0"}
                />
              </div>
              <div
                className={`bg-transparent  text-[#212121] font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 5 ? "max-h-full" : "max-h-0"
                  } `}
              >
                <ul className="grid grid-cols-1 gap-2 p-4">

                  <div className="p-3 space-y-2 text-sm font-medium">
                    {Ai.map((elem:any, index:any) => {
                      const { icon, name, num, url } = elem;
                      return (
                        <li
                          key={index}
                          className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                        >
                          <Link
                            onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                            href={url}
                            passHref={true}
                          >
                            {name}
                          </Link>
                        </li>
                      );
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
                    <BiGame className="text-[#212121]" size={22} />
                    <span> Games</span>
                  </p>
                  <MdKeyboardArrowDown
                    size={30}
                    className={showNav === 3 ? "rotate-180" : "rotate-0"}
                  />
                </div>
                <div
                  className={`bg-transparent  text-[#212121] font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 3 ? "max-h-full" : "max-h-0"
                    } `}
                >
                  <ul className="grid grid-cols-1 gap-2 p-4">
                    <p className="flex items-center text-base font-medium text-[#212121]">
                      <span className="pr-1">
                        <BsDot className="text-[#212121]" size={22} />
                      </span>
                      Game Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {Game.map((elem:any, index:any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li
                            key={index}
                            className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                          >
                            <Link
                              onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                              href={url}
                              passHref={true}
                            >
                              {" "}
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                    <p className="flex items-center text-base font-medium text-[#212121]">
                      <span className="pr-1">
                        <BsDot className="text-[#212121]" size={22} />
                      </span>
                      Sports App Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {Betting.map((elem:any, index:any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li
                            key={index}
                            className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                          >
                            <Link
                              onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                              href={url}
                              passHref={true}
                            >
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                    <p className="flex items-center text-base font-medium text-[#212121]">
                      <span className="pr-1">
                        <BsDot className="text-[#212121]" size={22} />
                      </span>
                      Game API Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {GameApi.map((elem:any, index:any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li
                            key={index}
                            className="  py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                          >
                            <Link
                              onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                              href={url}
                              passHref={true}
                            >
                              {name}
                            </Link>
                          </li>
                        );
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
                  }
                >
                  <p className="flex items-center space-x-2 ">
                    <HiOutlineOfficeBuilding
                      className="text-[#212121]"
                      size={22}
                    />
                    <span> Our Company</span>
                  </p>
                  <MdKeyboardArrowDown
                    size={30}
                    className={showNav === 4 ? "rotate-180" : "rotate-0"}
                  />
                </div>
                <div
                  className={`bg-transparent  text-[#212121] font-normal pl-4 text-sm capitalize  overflow-hidden transition-[max-height] duration-300 ease-in ${showNav === 4 ? "max-h-full" : "max-h-0"
                    } `}
                >
                  <ul className="grid grid-cols-1 gap-2 p-4">
                    <p className="flex items-center text-base font-medium text-[#212121]">
                      <span className="pr-1">
                        <BsDot className="text-[#212121]" size={22} />
                      </span>
                      Our Company
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium ">
                      {Company.map((elem:any, index:any) => {
                        const { icon, name, num, url } = elem;
                        return (
                          <li
                            key={index}
                            className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                          >
                            <Link
                              // onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                              href={url}
                              passHref={true}
                            >
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                      <li
                        key={123}
                        className=" py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                      >
                        <a
                          // onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                          href='https://www.comfygen.com/blog/'
                          target="_blank"
                        >
                          Our Blog
                        </a>
                      </li>

                    </div>
                    {/* num: "7", name: "", url: "https://www.comfygen.com/blog/"  */}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center py-8 px-8 w-full">
                <Link
                  onClick={() => toggleSlideover()}
                  href="/contact-us"
                  passHref={true}
                  className="w-full"
                >
                  <div className="relative inline-flex w-full items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-[#fff] rounded-full cursor-pointer bg-[#5556D1] group">
                    Get In Quote
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
