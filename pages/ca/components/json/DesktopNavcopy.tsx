import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu } from "react-icons/md";
import $ from 'jquery';
const MobileApp = [
  { num: "1", name: "Mobile app Development", url: "/mobile-app-development" },
  { num: "3", name: "iOS App Development", url: "/ios-app-development" },
  {
    num: "4",
    name: "Android App Development",
    url: "/android-app-development",
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








// ................... linkkk ................ 

  // {
  //   num: "2",
  //   name: "Hybrid Mobile App Development",
  //   url: "/hybrid-mobile-app-development",
  // },
 
  // {
  //   num: "5",
  //   name: "Flutter Development",
  //   url: "/flutter-development-company",
  // },
 

 
  // {
  //   num: "9",
  //   name: "Taxi App Development ",
  //   url: "/taxi-app-development-company",
  // },
  // {
  //   num: "10",
  //   name: "Food Delivery App Development ",
  //   url: "/food-delivery-app-development",
  // },
  // ,
  // {
  //   num: "11",
  //   name: "Dating App Development  ",
  //   url: "/dating-app-development",
  // },
  // {
  //   num: "12",
  //   name: "Doctor Appointment App Development  ",
  //   url: "/doctor-appointment-app-development",
  // },
  // {
  //   num: "13",
  //   name: "Medicine App Development  ",
  //   url: "/medicine-app-development",
  // },
  // {
  //   num: "14",
  //   name: "Clinical App Development ",
  //   url: "/clinical-application-development",
  // },
  // {
  //   num: "15",
  //   name: "Pharmacy App Development ",
  //   url: "/pharmacy-app-development",
  // }
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
  { num: "6", name: "Finance App Development", url: "/finance-app-development" },
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
    url: "/board-game-development",
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
  { num: "3", name: "Career", url: "/career" },
  { num: "4", name: "Life at Comfygen", url: "/life-at-comfygen" },
  { num: "5", name: "Client testimonial", url: "/client-testimonials" },
  { num: "6", name: "Contact us", url: "/contact-us" },
  { num: "7", name: "Our Blog", url: "https://www.comfygen.com/blog/" },

];




export default function DesktopNav(props: any) {
  const [showNav, setShowNav] = useState(0);
  const [menu] = useState(false);
  function toggleSlideover() {
    document
      .getElementById("slideover-container")
      .classList.toggle("invisible");
    document.getElementById("slideover-bg").classList.toggle("opacity-0");
    document.getElementById("slideover-bg").classList.toggle("opacity-50");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  }

       useEffect(() => {
          const handleScroll = () => {
            const header = document.querySelector(".headered");
            if (!header) return;
      
            if (window.scrollY > 50) {
              header.classList.add("active");
            } else {
              header.classList.remove("active");
            }
          };
      
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);

  // useEffect(() => {
  //   $(window).on('scroll', function () {
  //     if ($(window).scrollTop() > 50) {
  //       $('.headered').addClass('active');
  //     } else {
  //       $('.headered').removeClass('active');
  //     }
  //   });
  // }, []);


  return (
    <div className="headered w-full">
      <nav className="z-20 flex items-center justify-between w-full px-4 py-0 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:px-0 ">
        <Link
          passHref={true}
          href="/"
          className="relative flex items-center flex-shrink-0 text-white">
          <Image
            src="https://www.comfygen.com/media/svg/comfygen-logo.svg"
            alt="comfygen-logo"
            width={244}
            height={51}
            priority
          />
        </Link>
        <div
          onClick={() => toggleSlideover()}
          className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden" >
          {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
        </div>
        <div
          className={
            "xl:flex hidden  xl:w-auto w-full items-center text-white px-6 "}>
          <div className="block space-x-4 text-sm font-medium 2xl:space-x-4 lg:flex lg:items-center lg:space-y-0 lg:p-0">
            <Link href="/" passHref={true}>
              <span className="relative block text-sm leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-white/100 text-white/80 ">
                Home
              </span>
            </Link>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 1 ? 0 : 1)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-white/80 hover:text-white/100">
                <span
                  className={
                    showNav === 1
                      ? "font-medium text-white/80"
                      : " font-medium "
                  }>
                  Services
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  -left-72 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top w-[60rem]">
                <div className="absolute -top-2 2xl:inset-x-[21rem] xl:inset-x-[20rem] bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-3 gap-10">

                    <div className="spa">

                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Mobile App Development
                      </p>
                      <ul className="text-sm font-medium">
                        {MobileApp.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
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
                    </div>



                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                      Blockchain App Development
                      </p>
                      <ul className="text-sm font-medium">
                        {MobileApp.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
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
                    </div>


                      
                    </div>
                    
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Web Development
                      </p>
                      <ul className="text-sm font-medium">
                        {WebApp.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 ">
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 1 ? 0 : 1)
                                }
                                href={url}
                                passHref={true} >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Full Stack Development
                      </p>
                      <ul className="text-sm font-medium">
                        {Stack.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-white/80 hover:text-white/100" >
                <span
                  className={
                    showNav === 2
                      ? "  font-medium text-white/80"
                      : " font-medium "}>
                  Blockchain
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-[27rem] transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-[60rem] ">
                <div className="absolute -top-2 2xl:inset-x-[29rem] xl:inset-x-[29rem]   bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-3 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Blockchain Development
                      </p>
                      <ul className=" text-sm font-medium">
                        {Blockchain.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className=" py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
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
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Token Development
                      </p>
                      <ul className=" text-sm font-medium">
                        {Token.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true}>
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Other Development
                      </p>
                      <ul className=" text-sm font-medium">
                        {Other.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "  >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 2 ? 0 : 2)
                                }
                                href={url}
                                passHref={true} >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-white/80 hover:text-white/100" >
                <span
                  className={
                    showNav === 3
                      ? "  font-medium text-white/80"
                      : " font-medium "}>
                  Games
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-72 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-[40rem] ">
                <div className="absolute -top-2 2xl:inset-x-[19rem] xl:inset-x-[20rem]   bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-1 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b text-center">
                        Game Development
                      </p>
                      <ul className="text-sm font-medium grid grid-cols-2">
                        {Game.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className=" py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                            >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 3 ? 0 : 3)
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
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="relative group ">
              <button
                onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-white/80 hover:text-white/100" >
                <span
                  className={
                    showNav === 4
                      ? "  font-medium text-white/80"
                      : " font-medium "}>
                  Sports
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative -right-72 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-[40rem] ">
                <div className="absolute -top-2 2xl:inset-x-[19rem] xl:inset-x-[20rem]   bg-white rotate-45   w-4 h-4"></div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Betting Game App Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Betting.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 4 ? 0 : 4)
                                }
                                href={url}
                                passHref={true}>
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Game API Development
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {GameApi.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className="  py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 4 ? 0 : 4)
                                }
                                href={url}
                                passHref={true}>
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="group ">
              <button
                onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                className="inline-flex items-center py-8 text-sm border-b-2 border-transparent text-white/80 hover:text-white/100" >
                <span
                  className={
                    showNav === 5
                      ? " font-medium text-white/80"
                      : " font-medium "} >
                  Company
                </span>
                <MdKeyboardArrowDown className="text-white/80" size={18} />
              </button>
              <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize  text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  2xl:right-80 xl:right-60 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top ">
                <div className="absolute -top-2 2xl:inset-x-[4rem] xl:inset-x-[5rem]   bg-white rotate-45  w-4 h-4"> {" "}
                </div>
                <div className="p-10 mx-auto text-sm">
                  <div className="grid grid-cols-1 gap-10">
                    <div>
                      <p className="pb-4 mb-4 text-lg font-semibold text-black border-b">
                        Our Company
                      </p>
                      <ul className="space-y-2 text-sm font-medium">
                        {Company.map((elem: any) => {
                          const { name, num, url } = elem;
                          return (
                            <li
                              key={num}
                              className=" py-1.5 text-black/80 hover:text-blue-500 whitespace-nowrap transition duration-200 transform hover:translate-x-4 " >
                              <Link
                                onClick={() =>
                                  setShowNav(showNav === 5 ? 0 : 5)
                                }
                                href={url}
                                passHref={true} >
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/quote" passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                Get a Quote
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
