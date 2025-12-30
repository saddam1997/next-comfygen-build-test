import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown, MdMenuOpen, MdMenu } from "react-icons/md";
// import $ from "jquery";

const MobileApp = [
  { num: "1", name: "Mobile App Development", url: "/mobile-app-development" },
  {
    num: "2",
    name: "Application Consulting Service",
    url: "/ca/application-consulting-services",
  },
  {
    num: "2",
    name: "Hybrid Mobile App Development",
    url: "/hybrid-mobile-app-development",
  },
  { num: "3", name: "IOS App Development", url: "/ios-app-development" },
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
    name: "React Native Development",
    url: "/react-native-development",
  },
  {
    num: "7",
    name: "E-Commerce App Development",
    url: "/e-commerce-app-development",
  },
  {
    num: "8",
    name: "Startup App Development ",
    url: "/ca/startup-app-development",
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
];
const BlockchainSer = [
  {
    num: "1",
    name: "Blockchain Development",
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
    name: "Polygon Blockchain Development",
    url: "/polygon-blockchain-development",
  },
  {
    num: "6",
    name: "Hyperledger Blockchain Development",
    url: "/hyperledger-blockchain-development",
  },
  {
    num: "7",
    name: "Multichain Blockchain Development",
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
];
const coin = [
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
    name: "Ethereum Token Development",
    url: "/ethereum-token-development",
  },
  {
    num: "4",
    name: "Solana Token Development",
    url: "/solana-token-development",
  },
  { num: "5", name: "Tron Token Development", url: "/tron-token-development" },
  {
    num: "6",
    name: "NFT Token Development",
    url: "/nft-token-development-company",
  },
  {
    num: "7",
    name: "Altcoin Development Services",
    url: "/altcoin-development-services",
  },
  {
    num: "8",
    name: "P2P Crypto Exchange Development",
    url: "/p2p-crypto-exchange-development",
  },

  {
    num: "9",
    name: "Crypto Trading Bot Development",
    url: "/crypto-trading-bot-development",
  },
];

const Healthcare = [
  {
    num: "1",
    name: "Healthcare App Development",
    url: "/healthcare-app-development",
  },
  {
    num: "2",
    name: "Doctor Appointment App Development  ",
    url: "/doctor-appointment-app-development",
  },

  {
    num: "3",
    name: "Medicine Delivery App Development ",
    url: "/medicine-delivery-app-development",
  },
  {
    num: "4",
    name: "Medicine Ordering App Development ",
    url: "/medicine-app-development",
  },
  {
    num: "5",
    name: "Clinical App Development ",
    url: "/clinical-application-development",
  },
  {
    num: "6",
    name: "Pharmacy App Development ",
    url: "/pharmacy-app-development",
  },
  {
    num: "7",
    name: "Telemedicine App Development",
    url: "/telemedicine-app-development",
  },
  {
    num: "8",
    name: "Laboratory App Development",
    url: "/laboratory-app-development",
  },
];
const FullStackDev = [
  { num: "1", name: "Website Development", url: "/web-development" },
  { num: "2", name: "Website Design", url: "/web-design" },
  { num: "3", name: "MERN stack development", url: "/mern-stack-development" },
  { num: "4", name: "Node JS Development", url: "/node-js-development" },
  { num: "5", name: "React JS Development", url: "/react-js-development" },
  { num: "6", name: "Next JS Development", url: "/next-js-development" },
  { num: "7", name: "Python Development", url: "/python-development" },
];

const Hire = [
  {
    num: "1",
    name: "Hire Mobile App Developer",
    url: "/hire-mobile-app-developer",
  },
  { num: "2", name: "Hire .Net Developer", url: "/hire-dot-net-developer" },
  {
    num: "3",
    name: "Hire Blockchain Developer",
    url: "/hire-blockchain-developer",
  },
];

const Blockchain = [
  {
    num: "1",
    name: "Taxi App Development",
    url: "/taxi-app-development-company",
  },
  {
    num: "2",
    name: "Food Delivery App Development ",
    url: "/food-delivery-app-development",
  },
  {
    num: "3",
    name: "Dating App Development",
    url: "/dating-app-development",
  },
  {
    num: "4",
    name: "Tutor App Development",
    url: "/tutor-app-development",
  },
  {
    num: "5",
    name: " Astrology App Development",
    url: "/astrology-app-development",
  },
];

const Metaverse = [
  {
    num: "1",
    name: "Metaverse Development Company",
    url: "/metaverse-development",
  },
  {
    num: "2",
    name: "NFT marketplace development",
    url: "/nft-marketplace-development-company",
  },
];
const Token = [
  {
    num: "1",
    name: "Social Media App Development",
    url: "/social-media-app-development",
  },
  {
    num: "2",
    name: "Finance App Development",
    url: "/finance-app-development",
  },
  {
    num: "3",
    name: "IoT Development",
    url: "/iot-development-company",
  },
  {
    num: "4",
    name: "Mobile Game Development",
    url: "/mobile-game-development-company",
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
    name: "Education App Development",
    url: "/ca/education-app-development-company",
  },
  {
    num: "9",
    name: "E-Learning App Development",
    url: "/e-learning-app-development",
  },
  {
    num: "10",
    name: "Magazine App Development",
    url: "/ca/magazine-app-development-company",
  },
  {
    num: "11",
    name: "Quick Commerce App Development",
    url: "/quick-commerce-app-development",
  },
];

const Other = [
  {
    num: "1",
    name: "POW Blockchain Development",
    url: "/pow-blockchain-development-company",
  },
  {
    num: "2",
    name: "POA Blockchain Development",
    url: "/poa-blockchain-development-company",
  },
  {
    num: "2",
    name: "DPOS Blockchain Development",
    url: "/ca/dpos-blockchain-development-company",
  },

  {
    num: "3",
    name: "Crypto Wallet Development",
    url: "/crypto-wallet-development",
  },
  {
    num: "4",
    name: "Crypto Exchange Services",
    url: "/cryptocurrency-exchange-development",
  },
  {
    num: "5",
    name: "Crypto MLM Software Development",
    url: "/cryptocurrency-mlm-software-development",
  },
  {
    num: "6",
    name: "Crypto White Paper Development",
    url: "/crypto-white-paper-development",
  },
  {
    num: "7",
    name: "Decentralized Exchange Development",
    url: "/decentralized-exchange-development",
  },
  {
    num: "8",
    name: "DApp Development Company",
    url: "/dapp-development-company",
  },
  {
    num: "9",
    name: "DeFi Development Company ",
    url: "/defi-development-company",
  },
  {
    num: "10",
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
    img: "https://www.comfygen.com/image/ludo-game-dev-header-icon.svg",
    name: "Game Development",
    dec: "Create Engaging Gaming Experiences",
    url: "/game-development-company",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/image/ludo-game-dev-header-icon.svg",
    name: "Ludo Game Development",
    dec: "Classic Fun with Modern Features",
    url: "/ludo-game-development",
  },
  {
    num: "3",
    img: "https://www.comfygen.com/image/poker-game-dev-header-icon.svg",
    name: "Poker Game Development",
    dec: "High-Stakes Games for Poker Enthusiasts",
    url: "/poker-game-development",
  },
  {
    num: "4",
    img: "https://www.comfygen.com/image/rummy-game-dev-header-icon.svg",
    name: "Rummy Game Development",
    dec: "Innovative Digital Rummy Game Solutions",
    url: "/rummy-game-development",
  },
  {
    num: "5",
    img: "https://www.comfygen.com/image/baccarat-game-dev-header-icon.svg",
    name: "Baccarat Game Development",
    dec: "Elegant Baccarat for Online Players",
    url: "/baccarat-game-development",
  },
  {
    num: "6",
    img: "https://www.comfygen.com/image/video-game-dev-header-icon.svg",
    name: "Video Game Development",
    dec: "Immersive and Thrilling Gaming Creations",
    url: "/video-game-development",
  },
  {
    num: "7",
    img: "https://www.comfygen.com/image/blackjack-game-dev-header-icon.svg",
    name: "Blackjack Game Development",
    dec: "Crafting Classic 21 with Precision",
    url: "/blackjack-game-development",
  },
];

const Game1 = [
  {
    num: "1",
    img: "https://www.comfygen.com/image/omaha-poker-game-icon.svg",
    name: "Omaha Poker Game development",
    dec: "Authentic Omaha Poker Online Experiences",
    url: "/omaha-poker-game-development",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/image/chess-game-dev-head-icon.svg",
    name: "Chess Game development",
    dec: "Strategic Chess Games for All Levels",
    url: "/chess-game-development",
  },
  {
    num: "3",
    img: "https://www.comfygen.com/image/multigaming-platform-head-icon.svg",
    name: "Multigaming Platform Development",
    dec: "All-in-One Gaming Platform Solutions",
    url: "/multigaming-platform-app-development",
  },
  {
    num: "4",
    img: "https://www.comfygen.com/image/nft-game-dev-head-icon.svg",
    name: "NFT Game Development",
    dec: "Future of Gaming with Blockchain NFTs",
    url: "/nft-game-development-company",
  },
  {
    num: "5",
    img: "https://www.comfygen.com/image/metaverse-game-dev-head-icon.svg",
    name: "Metaverse Game Development",
    dec: "Virtual Worlds, Limitless Gaming Adventures",
    url: "/metaverse-game-development-company",
  },
  {
    num: "6",
    img: "https://www.comfygen.com/image/board-game-dev-head-icon.svg",
    name: "Board Game Development",
    dec: "Timeless Board Games for All Ages",
    url: "/board-game-development",
  },
];

const Sports = [

  
];

const Sports1 = [
  
  {
    num: "2",
    img: "https://www.comfygen.com/image/fantasy-cricket-app-dev-hero-icon.svg",
    name: "Cricket live line API",
    dec: "Real-Time Cricket Updates API",
    url: "/cricket-live-line-api",
  },
];
const company = [
  {
    num: "1",
    img: "https://www.comfygen.com/image/about-us-header-icon.svg",
    name: "About us",
    dec: "Who We Are and What We Do",
    url: "/about-us",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/image/our-portfolio-header-icon.svg",
    name: "Our Portfolio",
    dec: "Showcasing Our Successful Projects",
    url: "/portfolio",
  },
  {
    num: "3",
    img: "https://www.comfygen.com/image/career-at-comfygen-header-icon.svg",
    name: "Career At comfygen",
    dec: "Join Our Dynamic Team Today",
    url: "/career",
  },
  {
    num: "4",
    img: "https://www.comfygen.com/image/life-at-comfygen-header-icon.svg",
    name: "Life at Comfygen",
    dec: "Experience Our Collaborative Work Culture",
    url: "/life-at-comfygen",
  },
];

const company1 = [
  {
    num: "1",
    img: "https://www.comfygen.com/image/client-testimonial-img.svg",
    name: "Client testimonial",
    dec: "What Our Clients Say About Us",
    url: "/client-testimonials",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/image/contact-us-img.svg",
    name: "Contact us",
    dec: "Get in Touch with Us",
    url: "/contact-us",
  },
  {
    num: "3",
    img: "https://www.comfygen.com/image/our-blog-img.svg",
    name: "Our Blog",
    dec: "Insights and Updates from Comfygen",
    url: "https://www.comfygen.com/blog/",
  },
];

export default function DesktopNav(props: any) {
  const [activeTab, setActiveTab] = useState("Tab1");
  // Function to handle tab click
  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

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
  //   $(window).on("scroll", function () {
  //     if ($(window).scrollTop() > 50) {
  //       $(".headered").addClass("active");
  //     } else {
  //       $(".headered").removeClass("active");
  //     }
  //   });
  // }, []);

  return (
    <div className="fixed top-0 w-full bg-white z-50 py-2 ">
      <nav className="flex items-center justify-between px-4 py-0  md:px-0 relative 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
        <div>
          <Link
            href="/"
            passHref={true}
            className="relative flex items-center flex-shrink-0 text-white"
          >
            <Image
              src="/logo.webp"
              alt="comfygen-logo"
              width={51}
              height={51}
              priority
           
            />
          </Link>
        </div>
        <div>
          <div
            onClick={() => toggleSlideover()}
            className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden"
          >
            {menu ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
          </div>
          <div
            className={
              "xl:flex hidden xl:w-auto w-full items-center text-white px-6 "
            }
          >
          </div>
        </div>
        <div className="xl:block hidden">
          <Link href="/contact-us" passHref={true}>
            <span className="text-base font-medium text-white head-button rounded-full px-8 py-3.5 text-center hover:text-white   cursor-pointer transition duration-300 relative flex gap-3 items-center ">
              Get a Quote
              <Image
                src="https://www.comfygen.com/image/button-arrow.svg"
                alt="button-arrow"
                height={24}
                width={24}
              />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
