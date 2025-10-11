import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  MdKeyboardArrowDown,
  MdMenuOpen,
  MdMenu,
  MdAddCall,
} from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import $ from "jquery";

const MobileApp = [
  { num: "1", name: "Mobile App Development", url: "/mobile-app-development" },
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
  { num: "4", name: "IOS App Development", url: "/ios-app-development" },
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
    name: "React Native Development",
    url: "/react-native-development",
  },
  {
    num: "8",
    name: "E-Commerce",
    url: "/ecommerce",
  },
  {
    num: "9",
    name: "Startup App Development ",
    url: "/ca/startup-app-development",
  },
  {
    num: "10",
    name: "White Label Mobile App Development",
    url: "/white-label-mobile-app-development",
  },
  {
    num: "11",
    name: "Roadside Assistance App Development",
    url: "/roadside-assistance-app-development",
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
  {
    num: "9",
    name: "Health Tracking App Development",
    url: "/health-tracking-app-development",
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
    num: "0",
    name: "Delivery App Development",
    url: "/delivery-app-development",
  },
  {
    num: "1",
    name: "Food Delivery App Development ",
    url: "/food-delivery-app-development",
  },

  {
    num: "2",
    name: "Pizza Delivery App Development",
    url: "/pizza-delivery-app-development",
  },
  {
    num: "3",
    name: "Milk Delivery App Development",
    url: "/milk-delivery-app-development",
  },
  {
    num: "4",
    name: "Flower Delivery App Development",
    url: "/flower-delivery-app-development",
  },
  {
    num: "5",
    name: "Water Delivery App Development",
    url: "/water-delivery-app-development",
  },
  {
    num: "6",
    name: "Taxi App Development",
    url: "/taxi-app-development-company",
  },
  {
    num: "7",
    name: "Dating App Development",
    url: "/dating-app-development",
  },
  {
    num: "8",
    name: " Astrology App Development",
    url: "/astrology-app-development",
  },
  {
    num: "9",
    name: "Ice Cream Delivery Aapp Development",
    url: "/ice-cream-delivery-app-development",
  },
  {
    num: "10",
    name: "Fuel Delivery App Development",
    url: "/fuel-delivery-app-development",
  },





];

const Blockchain1 = [
  {
    num: "11",
    name: "Salon App Development",
    url: "/salon-app-development",
  },
  {
    num: "12",
    name: "Business Directory App Development",
    url: "/business-directory-app-development",
  },
  {
    num: "13",
    name: "Logistics App Development",
    url: "/logistics-app-development",
  },
  {
    num: "14",
    name: "Home Service App Development",
    url: "/home-service-app-development",
  },
  {
    num: "15",
    name: "Tutor App Development",
    url: "/tutor-app-development",
  },


  {
    num: "16",
    name: "Language learnig App Development",
    url: "/language-learning-app-development",
  },
  {
    num: "17",
    name: "Exam Preparation App Development",
    url: "/exam-preparation-app-development",
  },
  {
    num: "18",
    name: "Meat Delivery App Development",
    url: "/meat-delivery-app-development",
  },

  {
    num: "19",
    name: "Alcohol Delivery App Development",
    url: "/alcohol-delivery-app-development",
  },
  {
    num: "20",
    name: "Courier Delivery App Development",
    url: "/courier-delivery-app-development",
  },






]

const Finance = [
  {
    num: "1",
    name: "Finance App Development",
    url: "/finance-app-development",
  },
  {
    num: "2",
    name: "Personal Finance App Development",
    url: "/personal-finance-app-development",
  },
  {
    num: "3",
    name: " Mobile Banking App Development",
    url: "/mobile-banking-app-development",
  },
  {
    num: "4",
    name: " UPI Payment App Development",
    url: "/upi-payment-app-development",
  },
  {
    num: "5",
    name: " NeoBank App Development",
    url: "/neo-bank-app-development",
  },
  {
    num: "6",
    name: " Banking Software Development",
    url: "/banking-software-development",
  },

  {
    num: "7",
    name: "Insurance App Development",
    url: "/insurance-app-development",
  },

  {
    num: "10",
    name: "Islamic Banking App Development",
    url: "/islamic-bank-app-development",
  },
  {
    num: "11",
    name: "Stock Trading App Development",
    url: "/stock-trading-app-development",
  },

  {
    num: "12",
    name: "Credit Scoring App Development",
    url: "/credit-scoring-app-development",
  },
  {
    num: "13",
    name: "P2P Payment App Development",
    url: "/p2p-payment-app-development",
  },
  {
    num: "14",
    name: "Car Finance App Development",
    url: "/car-finance-app-development",
  },
  {
    num: "15",
    name: "Truck Finance App Development",
    url: "/truck-finance-app-development",
  },
]

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
    num: "3",
    name: "DPOS Blockchain Development",
    url: "/ca/dpos-blockchain-development-company",
  },
  {
    num: "4",
    name: "DApp Development Company",
    url: "/dapp-development-company",
  },
  {
    num: "5",
    name: "DeFi Development Company ",
    url: "/defi-development-company",
  },
  {
    num: "6",
    name: "DeFi Smart Contract Development",
    url: "/defi-smart-contract-development",
  },

  {
    num: "7",
    name: "Smart Contract Development",
    url: "/smart-contract-development",
  },
  {
    num: "8",
    name: "Smart Contract MLM Software",
    url: "/smart-contract-mlm-software",
  },
  {
    num: "9",
    name: "ICO Development Company",
    url: "/ico-development",
  },
];

const Game = [
  {
    num: "1",
    img: "https://www.comfygen.com/image/video-game-dev-header-icon.svg",
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

  {
    num: "1",
    img: "https://www.comfygen.com/comfygen-images/baseball-live-line-api-development/baseball-app-dev-hero-icon.svg",
    name: "Baseball live line API",
    dec: "Real-Time Baseball Updates API",
    url: "/baseball-live-line-api-development",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/comfygen-images/horse-racing-live-line-api-development/horse-app-dev-hero-icon.svg",
    name: "Horse Racing live line API",
    dec: "Real-Time Horse Racing Updates API",
    url: "/horse-racing-live-line-api-development",
  },
  {
    num: "3",
    img: "https://www.comfygen.com/comfygen-images/pool-live-line-api-development/pool-app-dev-hero-icon.svg",
    name: "Pool live line API",
    dec: "Real-Time Pool Updates API",
    url: "/pool-live-line-api-development",
  },
  {
    num: "4",
    img: "https://www.comfygen.com/comfygen-images/rugby-live-line-api-development/rugby-app-dev-hero-icon.svg",
    name: "Rugby live line API",
    dec: "Real-Time Rugby Updates API",
    url: "/rugby-live-line-api-development",
  },
  {
    num: "5",
    img: "https://www.comfygen.com/comfygen-images/nba-live-line-api-development/nba-api-hero-icon.svg",
    name: "NBA live line API",
    dec: "Real-Time NBA  Updates API",
    url: "/nba-live-line-api-development",
  },
  {
    num: "6",
    img: "https://www.comfygen.com/comfygen-images/volleyball-live-line-api-development/vollyball-api-hero-icon.svg",
    name: "Vollyball live line API",
    dec: "Real-Time Vollyball  Updates API",
    url: "/volleyball-live-line-api-development",
  },
  {
    num: "7",
    img: "https://www.comfygen.com/comfygen-images/handball-live-line-api-development/handball-api-hero-icon.svg",
    name: "Handball live line API",
    dec: "Real-Time Handball  Updates API",
    url: "/handball-live-line-api-development",
  },

];

const Sports1 = [
  {
    num: "8",
    img: "https://www.comfygen.com/image/fantasy-cricket-app-dev-hero-icon.svg",
    name: "Cricket live line API",
    dec: "Real-Time Cricket Updates API",
    url: "/cricket-live-line-api",
  },
  {
    num: "9",
    img: "https://www.comfygen.com/comfygen-images/fantasy-football-app-dev/fantasy-football-app-dev-hero-icon.svg",
    name: "Football live line API",
    dec: "Real-Time Football Updates API",
    url: "/football-live-line-api-development",
  },
  {
    num: "10",
    img: "https://www.comfygen.com/comfygen-images/hockey-live-line-api/hockey-football-app-dev-hero-icon.svg",
    name: "Hockey live line API",
    dec: "Real-Time Football Updates API",
    url: "/hockey-live-line-api-development",
  },
  {
    num: "11",
    img: "https://www.comfygen.com/comfygen-images/golf-live-line-api-development/golf-football-app-dev-hero-icon.svg",
    name: "Golf live line API",
    dec: "Real-Time Golf Updates API",
    url: "/golf-live-line-api-development",
  },
  {
    num: "12",
    img: "https://www.comfygen.com/comfygen-images/kabaddi-live-line-api-development/kabaddi-app-dev-hero-icon.svg",
    name: "Kabaddi live line API",
    dec: "Real-Time Kabaddi Updates API",
    url: "/kabaddi-live-line-api-development",
  },
  {
    num: "13",
    img: "https://www.comfygen.com/comfygen-images/basketball-live-line-api-development/basketball-app-dev-hero-icon.svg",
    name: "Basketball live line API",
    dec: "Real-Time Basketball Updates API",
    url: "/basketball-live-line-api-development",
  },
  {
    num: "14",
    img: "https://www.comfygen.com/comfygen-images/tennis-live-line-api-development/tennis-app-dev-hero-icon.svg",
    name: "Tennis live line API",
    dec: "Real-Time Tennis Updates API",
    url: "/tennis-live-line-api-development",
  },


];



const Sports2 = [

  {
    num: "15",
    img: "https://www.comfygen.com/comfygen-images/auto-racing-live-line-api-development/auto-racing-app-dev-hero-icon.svg",
    name: "Auto Racing live line API",
    dec: "Real-Time Auto Racing Updates API",
    url: "/auto-racing-live-line-api-development",
  },
  {
    num: "16",
    img: "https://www.comfygen.com/comfygen-images/surf-league-live-line-api-development/surf-api-app-dev-hero-icon.svg",
    name: "Surf League live line API",
    dec: "Real-Time Surf League Updates API",
    url: "/surf-league-live-line-api-development",
  },

  {
    num: "17",
    img: "https://www.comfygen.com/comfygen-images/horse-racing-live-line-api-development/horse-app-dev-hero-icon.svg",
    name: "Boxing live line API",
    dec: "Real-Time Boxing  Updates API",
    url: "/boxing-live-line-api",
  },
  {
    num: "18",
    img: "https://www.comfygen.com/comfygen-images/basketball-live-line-api-development/basketball-app-dev-hero-icon.svg",
    name: "Sports Solution Development",
    dec: "Real-Time Sports Solution Updates API",
    url: "/sports-solution-development",
  },
  {
    num: "19",
    img: "https://www.comfygen.com/comfygen-images/basketball-live-line-api-development/basketball-app-dev-hero-icon.svg",
    name: "Sports Live Line API",
    dec: "Real-Time Sports Live Line API",
    url: "/sports-live-line-api",
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

const cryptoDevelopment = [
  {
    num: "0",
    name: "Wallet Development Company",
    url: "/wallet-development-company",
  },
  {
    num: "1",
    name: "Crypto Wallet Development",
    url: "/crypto-wallet-development",
  },
  {
    num: "2",
    name: "Crypto Exchange Services",
    url: "/cryptocurrency-exchange-development",
  },
  {
    num: "3",
    name: "Crypto MLM Software Development",
    url: "/cryptocurrency-mlm-software-development",
  },
  {
    num: "4",
    name: "Crypto White Paper Development",
    url: "/crypto-white-paper-development",
  },
  {
    num: "5",
    name: "Decentralized Exchange Development",
    url: "/decentralized-exchange-development",
  },
  {
    num: "6",
    name: "White Label Crypto Exchange Development",
    url: "/white-label-crypto-exchange-development",
  },
  {
    num: "7",
    name: "Hybrid Crypto Exchange Development",
    url: "/hybrid-crypto-exchange-development",
  },
  {
    num: "8",
    name: "Centralized Crypto  Exchange Development",
    url: "/centralized-crypto-exchange-development",
  },
  {
    num: "9",
    name: "Crypto Launchpad  Development",
    url: "/crypto-launchpad-development",
  },
  {
    num: "10",
    name: "OTC Crypto Exchange Development",
    url: "/otc-crypto-exchange-development",
  },
  {
    num: "11",
    name: "Crypto NFT Exchange Development",
    url: "/crypto-nft-exchange-development",
  },

  {
    num: "12",
    name: "Mobile Crypto Wallet Development",
    url: "/mobile-crypto-wallet-development",
  },

];

const cryptoDevelopment1 = [


  {
    num: "13",
    name: " Crypto Derivatives Exchange Development",
    url: "/crypto-derivatives-exchange-development",
  },
  {
    num: "14",
    name: "Margin Trading Exchange Development",
    url: "/crypto-margin-trading-exchange-development",
  },
  {
    num: "15",
    name: "Crypto Exchange Admin Panel Development ",
    url: "/crypto-exchange-admin-panel-development",
  },
  {
    num: "16",
    name: "Ai Crypto Exchange Development",
    url: "/ai-crypto-exchange-development",
  },
  {
    num: "17",
    name: "Crypto Payment Gateway Development",
    url: "/crypto-payment-gateway-development",
  },
  {
    num: "18",
    name: "Decentralized wallet Development",
    url: "/decentralized-wallet-development",
  },
  {
    num: "19",
    name: "NFT Wallet Development Company",
    url: "/nft-wallet-development",
  },
  {
    num: "20",
    name: "White Label Cryptocurrency Wallet Development",
    url: "/white-label-cryptocurrency-wallet-development",
  },

  {
    num: "21",
    name: "Multi Currency Wallet Development Company",
    url: "/multi-currency-wallet-development-company",
  },
  {
    num: "22",
    name: "Defi Wallet Development",
    url: "/defi-wallet-development",
  },
  {
    num: "23",
    name: "Smart Contract Wallet Development",
    url: "/smart-contract-wallet-development",
  },
  {
    num: "24",
    name: "Blockchain Wallet Development",
    url: "/blockchain-wallet-development",
  },
  {
    num: "25",
    name: "eWallet App Development",
    url: "/ewallet-app-development",
  },





];



export default function DesktopNav(props: any) {
  const [activeTab, setActiveTab] = useState("Tab1");
  // Function to handle tab click
  const handleTabClick = (tab) => {
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
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".headered").addClass("active");
      } else {
        $(".headered").removeClass("active");
      }
    });
  }, []);

  return (
    <div className="fixed top-0 w-full bg-white z-50 max-w-[1600px] mx-auto">
      <div className="  flex gap-6 justify-end mx-10">
        <p className="hidden lg:block">
          <a href="mailto:sales@comfygen.com" className="flex  pt-1 gap-2">
            <IoMdMail className=" mt-1" /> sales@comfygen.com
          </a>
        </p>

        <p className="hidden lg:block">
          <a
            className="flex pt-1 gap-1"
            href="https://api.whatsapp.com/send?phone=919587867258"
          >
            <MdAddCall className=" mt-1" />
            +91 9587867258
          </a>
        </p>
      </div>

      <nav className="flex items-center justify-between px-4 py-0  md:px-0 relative 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
        <div>
          <Link
            href="/"
            passHref={true}
            className="relative flex items-center flex-shrink-0 text-white"
          >
            <Image
              // src="https://www.comfygen.com/media/svg/comfygen-logo.svg"
              src="/svg/Logo1.svg"
              alt="comfygen-logo"
              width={244}
              height={51}

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
            <div className="block space-x-4 text-sm font-medium 2xl:space-x-4 lg:flex lg:items-center lg:space-y-0 lg:p-0">
              <div>
                <Link href="/" passHref={true}>
                  <span className="relative block text-sm leading-none transition duration-300 border-b-2 border-transparent cursor-pointer py-9 hover:text-black/100 text-black/80 ">
                    Home
                  </span>
                </Link>
              </div>
              <div
                className=" group "
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
                <div className="z-50 relative lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize text-gray-700 lg:absolute top-20  lg:drop-shadow-xl lg:border whitespace-nowrap  left-0  transform hidden group-hover:block   transition duration-200 ease-in-out origin-top w-full">
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
                              alt="blockchain-app-dev-header-icon.svg"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                <Link
                                  href="#"
                                  className="flex items-start gap-2"
                                >
                                  Blockchain App Development
                                </Link>
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Secure Blockchain-Based App Solutions
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
                            onClick={() => handleTabClick("Tab4")}
                            className={
                              activeTab === "Tab4"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/healthcare-app-dev-header-icon.svg"
                              alt="Healthcare App Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Healthcare App Development
                              </p>
                              <span className=" text-[#212121]/80 text-sm font-normal">
                                Transforming Healthcare with Smart Apps{" "}
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
                            <ul className="text-sm font-medium space-y-2">
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
                                      {name}
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
              <div
                className=" group  "
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
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative left-0 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-full ">
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
                                <Link
                                  href="/#"
                                  className="flex items-start gap-2"
                                >
                                  Blockchain Solution
                                </Link>
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
                          <li
                            onClick={() => handleTabClick("Tab6")}
                            className={
                              activeTab === "Tab6"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/astrology-app-development/finance.svg"
                              alt="Web3 Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Finance App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Transforming Financial Ideas into Apps
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
                          {activeTab === "Tab6" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Finance.map((elem: any, index: any) => {
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
                            <button className="flex items-center gap-2 bg-[#5556D1] py-3 px-6 font-semibold rounded-full text-lg text-white">
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
              <div className="group z-40 ">
                <button
                  onClick={() => setShowNav(showNav === 3 ? 0 : 3)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 3 ? "  font-medium " : " font-medium "
                    }
                  >
                    Games
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize   text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative left-0 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-full ">
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div className="space-y-10">
                        <div>
                          <ul className="text-[18px] font-medium space-y-3">
                            {Game.map((elem: any, index: any) => {
                              const { name, num, img, dec, url } = elem;
                              return (
                                <li key={index}>
                                  <a
                                    href={url}
                                    className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-1 rounded-md cursor-pointer"
                                  >
                                    <Image
                                      src={img}
                                      alt={name}
                                      height={40}
                                      width={40}
                                    />
                                    <div className="space-y-4 cursor-pointer">
                                      <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                        {name}
                                      </p>
                                      <span className="text-[#212121]/80 text-sm font-normal">
                                        {dec}
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <ul className="text-[18px] font-medium space-y-3">
                        {Game1.map((elem: any, index: any) => {
                          const { name, num, img, dec, url } = elem;
                          return (
                            <li key={index}>
                              <a
                                href={url}
                                className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                              >
                                <Image
                                  src={img}
                                  alt={name}
                                  height={40}
                                  width={40}
                                />
                                <div className="space-y-4 cursor-pointer">
                                  <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                    {name}
                                  </p>
                                  <span className="text-[#212121]/80 text-sm font-normal">
                                    {dec}
                                  </span>
                                </div>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                      <div>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/games-header-img.webp"
                            alt="Game Development Company"
                            height={486}
                            width={511}
                          />
                          <span className="bg-[#fff] absolute bottom-0 right-0 p-5 block flex justify-end items-center rounded-tl-[50px]">
                            <button className="flex items-center gap-2 bg-[#5556D1] py-3 px-6 font-semibold rounded-full text-lg text-white">
                              Connect to expert
                              <Image
                                src="https://www.comfygen.com/image/button-arrow.svg"
                                alt="Game Development Company"
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
              <div className="group z-40 ">
                <button
                  onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 3 ? "  font-medium " : " font-medium "
                    }
                  >
                    Sports
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative left-0 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-full ">
                  {/* <div className="absolute -top-2 2xl:inset-x-[19rem] xl:inset-x-[20rem]   bg-white rotate-45   w-4 h-4"></div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div className="space-y-10">
                        <div>
                          <ul className="text-[18px] font-medium space-y-3">
                            {Sports.map((elem: any, index: any) => {
                              const { name, num, img, dec, url } = elem;
                              return (
                                <li key={index}>
                                  <a
                                    href={url}

                                    className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                  >
                                    <Image
                                      src={img}
                                      alt={name}
                                      height={40}
                                      width={40}
                                    />
                                    <div className="space-y-4 cursor-pointer">
                                      <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                        {name}
                                      </p>
                                      <span className="text-[#212121]/80 text-sm font-normal">
                                        {dec}
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <ul className="text-[18px] font-medium space-y-3">
                        {Sports1.map((elem: any, index: any) => {
                          const { name, num, img, dec, url } = elem;
                          return (
                            <li key={index}>
                              <a
                                href={url}

                                className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                              >
                                <Image
                                  src={img}
                                  alt={name}
                                  height={40}
                                  width={40}
                                />
                                <div className="space-y-4 cursor-pointer">
                                  <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                    {name}
                                  </p>
                                  <span className="text-[#212121]/80 text-sm font-normal">
                                    {dec}
                                  </span>
                                </div>
                              </a>
                            </li>
                          );
                        })}
                      </ul>

                      <ul className="text-[18px] font-medium space-y-3">
                        {Sports2.map((elem: any, index: any) => {
                          const { name, num, img, dec, url } = elem;
                          return (
                            <li key={index}>
                              <a
                                href={url}

                                className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                              >
                                <Image
                                  src={img}
                                  alt={name}
                                  height={40}
                                  width={40}
                                />
                                <div className="space-y-4 cursor-pointer">
                                  <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                    {name}
                                  </p>
                                  <span className="text-[#212121]/80 text-sm font-normal">
                                    {dec}
                                  </span>
                                </div>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                      {/* <div>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/sports-hero-img.webp"
                            alt=""
                            height={486}
                            width={511}
                          />
                          <span className="bg-[#fff] absolute bottom-0 right-0 p-5 block justify-end items-center rounded-tl-[50px]">
                            <button className="flex items-center gap-2 bg-[#5556D1] py-3 px-6 font-semibold rounded-full text-lg text-white">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="group z-40 ">
                <button
                  onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 5 ? " font-medium " : " font-medium "
                    }
                  >
                    Company
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize  text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  left-0 xl:right-50 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top ">
                  {/* <div className="absolute -top-2 2xl:inset-x-[4rem] xl:inset-x-[5rem]   bg-white rotate-45  w-4 h-4">
                  {" "}
                </div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div>
                        <ul className="text-[18px] font-medium space-y-3">
                          {company.map((elem: any, index: any) => {
                            const { name, num, img, dec, url } = elem;
                            return (
                              <li key={index}>
                                <a
                                  href={url}

                                  className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                >
                                  <Image
                                    src={img}
                                    alt={name}
                                    height={40}
                                    width={40}
                                  />
                                  <div className="space-y-4 cursor-pointer">
                                    <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                      {name}
                                    </p>
                                    <span className="text-[#212121]/80 text-sm font-normal">
                                      {dec}
                                    </span>
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div>
                        <ul className="text-[18px] font-medium space-y-3">
                          {company1.map((elem: any, index: any) => {
                            const { name, num, img, dec, url } = elem;
                            return (
                              <li key={index}>
                                <a
                                  href={url}

                                  className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                >
                                  <Image
                                    src={img}
                                    alt={name}
                                    height={40}
                                    width={40}
                                  />
                                  <div className="space-y-4 cursor-pointer">
                                    <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                      {name}
                                    </p>
                                    <span className="text-[#212121]/80 text-sm font-normal">
                                      {dec}
                                    </span>
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/about-us-header-img.webp"
                            alt=""
                            height={486}
                            width={511}
                          />
                          <span className="bg-[#fff] absolute bottom-0 right-0 p-5 block justify-end items-center rounded-tl-[50px]">
                            <button className="flex items-center gap-2 bg-[#5556D1] py-3 px-6 font-semibold rounded-full text-lg text-white">
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
