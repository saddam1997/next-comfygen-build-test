import Link from "next/link";
import React, { useCallback, useState } from "react";
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
  {
    num: "32",
    name: "Quick Commerce App Development",
    url: "/quick-commerce-app-development",
  },
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
    url: "/ca/dpos-blockchain-development-company",
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
  // {
  //   num: "6",
  //   name: "Fantasy Sports App Development",
  //   url: "/fantasy-sports-app-development",
  // },
  // {
  //   num: "7",
  //   name: "Fantasy Sports Website Development",
  //   url: "/fantasy-sports-website-development",
  // },
  // {
  //   num: "8",
  //   name: "Fantasy Cricket App Development",
  //   url: "/fantasy-cricket-app-development",
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
  {
    num: "6",
    name: "Quick Commerce App Development",
    url: "/quick-commerce-app-development",
  },
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
  const [showNava, setShowNava] = useState(false);

  // ✅ Optimized slideover toggle
  const toggleSlideover = useCallback(() => {
    setShowNava((prev) => !prev);
  }, []);

  // ✅ Optimized accordion toggle with requestAnimationFrame
  const handleNavToggle = useCallback((navIndex: number) => {
    setShowNav(showNav === navIndex ? 0 : navIndex);
  }, [showNav]);

  // ✅ Close slideover when navigating
  const handleLinkClick = useCallback(() => {
    setShowNava(false);
  }, []);

  // ✅ Memoized list item renderer for better performance
  const renderListItems = useCallback((items: any[], navIndex: number) => {
    return items.map((elem: any) => (
      <li
        key={elem.num}
        className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4"
      >
        <Link
          onClick={() => {
            handleNavToggle(navIndex);
            handleLinkClick();
          }}
          href={elem.url}
          passHref
          className="block"
        >
          {elem.name}
        </Link>
      </li>
    ));
  }, [handleNavToggle, handleLinkClick]);

  // ✅ Navigation section component for better code organization
  const NavSection = useCallback(({ 
    title, 
    icon: Icon, 
    navIndex, 
    children 
  }: { 
    title: string;
    icon: any;
    navIndex: number;
    children: React.ReactNode;
  }) => (
    <div>
      <div
        onClick={() => handleNavToggle(navIndex)}
        className={`flex justify-between p-3 items-center px-6 cursor-pointer transition-colors duration-200 ${
          showNav === navIndex ? "bg-gray-100" : "bg-transparent hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center space-x-2">
          <Icon className="text-[#212121]" size={22} />
          <span>{title}</span>
        </div>
        <MdKeyboardArrowDown
          size={30}
          className={`transition-transform duration-300 ${
            showNav === navIndex ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`bg-transparent text-[#212121] font-normal pl-4 text-sm capitalize overflow-hidden transition-all duration-300 ease-in-out ${
          showNav === navIndex ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  ), [showNav, handleNavToggle]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <nav className="z-20 flex items-center justify-between py-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="flex items-center flex-shrink-0 text-[#212121]">
          <Link href="/" passHref className="relative">
            <Image
              src="/svg/Logo1.svg"
              alt="Comfygen - Mobile App Development Company"
              width={180}
              height={51}
              priority
              className="object-contain"
            />
          </Link>
        </div>
        
        {/* Menu Button */}
        <button
          onClick={toggleSlideover}
          className="flex items-center p-2 m-2 my-4 rounded cursor-pointer bg-slate-100 text-slate-600 xl:hidden hover:bg-slate-200 transition-colors duration-200"
          aria-label={showNava ? "Close menu" : "Open menu"}
        >
          {showNava ? <MdMenuOpen size={26} /> : <MdMenu size={26} />}
        </button>
        
        {/* Slideover Menu */}
        <div
          className={`fixed inset-0 w-full h-full transition-opacity duration-300 ${
            showNava 
              ? "visible opacity-100" 
              : "invisible opacity-0"
          }`}
        >
          {/* Backdrop */}
          <div
            onClick={toggleSlideover}
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out bg-gray-900 ${
              showNava ? "opacity-50" : "opacity-0"
            }`}
          />
          
          {/* Slideover Panel */}
          <div
            className={`md:w-96 w-80 bg-white h-full absolute right-0 transition-transform duration-300 ease-out overflow-y-auto ${
              showNava ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100 shadow-sm">
              <div className="text-[#212121] text-lg font-semibold">Menu</div>
              <button
                onClick={toggleSlideover}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                aria-label="Close menu"
              >
                <VscChromeClose size={24} className="text-[#212121]" />
              </button>
            </div>
            
            {/* Navigation Content */}
            <div className="font-medium text-[#212121] divide-y divide-gray-100">
              {/* Home Link */}
              <div>
                <Link href="/" passHref onClick={handleLinkClick}>
                  <div className="flex justify-start p-3 px-6 space-x-2 hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                    <FiHome className="text-[#212121]" size={22} />
                    <span>Home</span>
                  </div>
                </Link>
              </div>

              {/* Development Section */}
              <NavSection title="Development" icon={RiPhoneLockLine} navIndex={1}>
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Mobile App Development
                    </p>
                    <div className="p-2 space-y-2 text-sm font-medium">
                      {renderListItems(MobileApp, 1)}
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Web Development
                    </p>
                    <div className="space-y-2 text-sm font-medium">
                      {renderListItems(WebApp, 1)}
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Stack Development
                    </p>
                    <div className="space-y-2 text-sm font-medium">
                      {renderListItems(Stack, 1)}
                    </div>
                  </div>
                </ul>
              </NavSection>

              {/* Blockchain Section */}
              <NavSection title="Blockchain" icon={RiBitCoinLine} navIndex={2}>
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Blockchain Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {renderListItems(Blockchain, 2)}
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Token Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {renderListItems(Token, 2)}
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Other Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {renderListItems(Other, 2)}
                    </div>
                  </div>
                </ul>
              </NavSection>

              {/* Industries Section */}
              <NavSection title="Industries" icon={LiaIndustrySolid} navIndex={6}>
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Ecommerce Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {renderListItems(EcommerceApp, 6)}
                    </div>
                  </div>
                </ul>
              </NavSection>

              {/* AI Development Section */}
              <NavSection title="AI Development" icon={FaLaptopCode} navIndex={5}>
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <div className="p-3 space-y-2 text-sm font-medium">
                    {renderListItems(Ai, 5)}
                  </div>
                </ul>
              </NavSection>

              {/* Games Section */}
              <NavSection title="Games" icon={BiGame} navIndex={3}>
                <ul className="grid grid-cols-1 gap-2 p-4">
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Game Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {renderListItems(Game, 3)}
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Sports App Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {renderListItems(Betting, 3)}
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center text-base font-medium text-[#212121] mb-2">
                      <BsDot className="text-[#212121] mr-1" size={22} />
                      Game API Development
                    </p>
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {renderListItems(GameApi, 3)}
                    </div>
                  </div>
                </ul>
              </NavSection>

              {/* Company Section */}
              <div>
                <div
                  onClick={() => handleNavToggle(4)}
                  className={`flex justify-between p-3 items-center px-6 cursor-pointer transition-colors duration-200 ${
                    showNav === 4 ? "bg-gray-100" : "bg-transparent hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <HiOutlineOfficeBuilding className="text-[#212121]" size={22} />
                    <span>Our Company</span>
                  </div>
                  <MdKeyboardArrowDown
                    size={30}
                    className={`transition-transform duration-300 ${
                      showNav === 4 ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                <div
                  className={`bg-transparent text-[#212121] font-normal pl-4 text-sm capitalize overflow-hidden transition-all duration-300 ease-in-out ${
                    showNav === 4 ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="grid grid-cols-1 gap-2 p-4">
                    <div className="p-3 space-y-2 text-sm font-medium">
                      {Company.map((elem: any) => (
                        <li
                          key={elem.num}
                          className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4"
                        >
                          <Link
                            onClick={handleLinkClick}
                            href={elem.url}
                            passHref
                            className="block"
                          >
                            {elem.name}
                          </Link>
                        </li>
                      ))}
                      <li className="py-1.5 text-[#212121] whitespace-nowrap transition duration-200 transform hover:translate-x-4">
                        <a
                          href="https://www.comfygen.com/blog/"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleLinkClick}
                          className="block"
                        >
                          Our Blog
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              {/* Get Quote Button */}
              {/* <div className="flex items-center justify-center py-8 px-8 w-full">
                <Link
                  href="/contact-us"
                  passHref
                  onClick={handleLinkClick}
                  className="w-full"
                >
                  <div className="relative inline-flex w-full items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-white rounded-full cursor-pointer bg-[#5556D1] hover:bg-[#4546C1] transition-colors duration-200 group">
                    Get In Quote
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

