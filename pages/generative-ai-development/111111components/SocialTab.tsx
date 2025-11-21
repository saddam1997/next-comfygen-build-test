import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const BlockchainStack = [
  { img: "https://www.comfygen.com/img/stackimg/binance.svg", alt: 'Binance', title: "Binance", url: "#", num: "1" },
  { img: "https://www.comfygen.com/img/stackimg/coinbase.svg", alt: 'Coinbase', title: "coinbase", url: "#", num: "2" },
  { img: "https://www.comfygen.com/img/stackimg/ethereum.svg", alt: 'Ethereum', title: "Ethereum", url: "/ethereum-token-development", num: "3" },
  { img: "https://www.comfygen.com/img/stackimg/ethers-js.svg", alt: 'Ethersjs', title: "Ethers JS", url: "#", num: "4" },
  { img: "https://www.comfygen.com/img/stackimg/walletconnect.svg", alt: 'Walletconnect', title: "walletconnect", url: "#", num: "5", },
  { img: "https://www.comfygen.com/img/stackimg/trust-wallet.svg", alt: 'Trust Wallet', title: "trust wallet ", url: "#", num: "6" },
  { img: "https://www.comfygen.com/img/stackimg/solona.svg", alt: 'Solona', title: "Solana", url: "/solana-token-development", num: "7" },
  { img: "https://www.comfygen.com/img/stackimg/polygon.svg", alt: 'Polygon', title: "Polygon", url: "/polygon-blockchain-development", num: "8" },
];
const FrontendStack = [
  { img: "https://www.comfygen.com/media/svg/tech/html5-original.svg", alt: 'Html5', title: "html5", url: "#", num: "1" },
  { img: "https://www.comfygen.com/media/svg/tech/css3-original.svg", alt: 'Css3', title: "css3", url: "#", num: "2" },
  { img: "https://www.comfygen.com/media/svg/tech/nextjs-original.svg", alt: 'Nextjs', title: "nextjs", url: "/next-js-development", num: "3" },
  { img: "https://www.comfygen.com/media/svg/tech/react-original.svg", alt: 'React', title: "react js", url: "react-js-development", num: "4" },
  { img: "https://www.comfygen.com/media/svg/tech/tailwindcss-plain.svg", alt: 'Tailwindcss', title: "tailwindcss", url: "#", num: "5" },
  { img: "https://www.comfygen.com/media/svg/tech/angularjs-original.svg", alt: 'Angularjs', title: "angular js", url: "#", num: "6" },
  { img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", alt: 'Javascript', title: "javascript", url: "#", num: "7" },
  { img: "https://www.comfygen.com/media/svg/tech/nodejs-original.svg", alt: 'Nodejs', title: "nodejs", url: "node-js-development", num: "8" },
];
const ProgrammStack = [
  { num: "1", img: "https://www.comfygen.com/images/unity-stack-technology.webp", url: "#", title: "Unity" },
  { num: "2", img: "https://www.comfygen.com/images/java-script.webp", url: "#", title: "Java", },
  { num: "3", img: "https://www.comfygen.com/images/three-js-stack-technology.webp", url: "#", title: "Three.js", },
  { num: "4", img: "https://www.comfygen.com/images/unreal-engine-stack-technology.webp", url: "#", title: "Unreal Engine", },
  { num: "5", img: "https://www.comfygen.com/images/dot-net-stack-technology.webp", url: "#", title: ".Net", },
  { num: "6", img: "https://www.comfygen.com/images/c++-stack-technology.webp", url: "#", title: "C++", },
  { num: "7", img: "https://www.comfygen.com/images/c-sharp-stack-technology.webp", url: "#", title: "C#", },
  { num: "8", img: "https://www.comfygen.com/images/python-stack-technology.webp", url: "/python-development", title: "Python", },
];
const DatabaseStack = [
  { img: "https://www.comfygen.com/media/svg/tech/mongodb-original.svg", alt: 'Mongodb', title: "mongodb", num: "1", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/googlecloud-original.svg", alt: 'Googlecloud', title: "google Cloud", num: "2", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/azure-original.svg", alt: 'Azure', title: "azure", num: "3", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/nginx-original.svg", alt: 'Nginx', title: "nginx", num: "4", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/digitalocean-original.svg", alt: 'Digitalocean', title: "digital ocean", num: "5", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/mysql-original-wordmark.svg", alt: 'Mysql', title: "mysql", num: "6", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/amazonwebservices-original.svg", alt: 'Amazonwebservices', title: "webservices", num: "7", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/firebase-plain.svg", alt: 'amazon', title: "amazon", num: "8", url: "#" },
];
const Panelheader = [
  {
    num: "01",
    title: "Blockchain Development Tech Stack We Use",
  },
];



export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white  py-10">
      {Panelheader.map((elem: any) => {
        const { title, } = elem;
        return (
          <div className="flex flex-col justify-center text-center  mx-auto">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
              {title}
            </h2>
          </div>
        );
      })}
      <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
        <div className="flex flex-col items-start space-y-10  justify-start xl:w-[40%]  w-full">
          <span
            onClick={() => setTech(tech === 0 ? 0 : 0)}
            className={
              tech === 0
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          >
            Blockchain Frameworks
          </span>
          <span
            onClick={() => setTech(tech === 1 ? 0 : 1)}
            className={
              tech === 1
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          >
            Frontend Frameworks
          </span>
          <span
            onClick={() => setTech(tech === 2 ? 0 : 2)}
            className={
              tech === 2
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > Programming Languages
          </span>
          <span
            onClick={() => setTech(tech === 3 ? 0 : 3)}
            className={
              tech === 3
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > Databases
          </span>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full">
          {tech === 0 ? (
            <>
              {BlockchainStack.map((elem: any) => {
                const { img, num, title, url, bg } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}

          {tech === 1 ? (
            <>
              {FrontendStack.map((elem: any) => {
                const { img, title, num, url, bg } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}

          {tech === 2 ? (
            <>
              {ProgrammStack.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}
          {tech === 3 ? (
            <>
              {DatabaseStack.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}
                      className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}

        </div>
      </div>
    </div>


  );
}
