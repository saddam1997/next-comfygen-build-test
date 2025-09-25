import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const BlockchainStack = [
  { img: "https://www.comfygen.com/img/stackimg/solona.svg", alt: 'Solona', title: "Solana", url: "/solana-token-development", num: "7" },
  { img: "https://www.comfygen.com/img/stackimg/coinbase.svg", alt: 'Cardano', title: "Cardano", url: "#", num: "2" },
  { img: "https://www.comfygen.com/img/stackimg/binance.svg", alt: 'Binance', title: "Binance", url: "#", num: "1" },
  { img: "https://www.comfygen.com/img/stackimg/polygon.svg", alt: 'Polygon', title: "Polygon", url: "/polygon-blockchain-development", num: "8" },
  { img: "https://www.comfygen.com/img/stackimg/ethereum.svg", alt: 'Ethereum', title: "Ethereum", url: "/ethereum-token-development", num: "3" },
  { img: "https://www.comfygen.com/img/stackimg/ethers-js.svg", alt: 'Polkadot', title: "Polkadot", url: "#", num: "4" },
 
];
const FrontendStack = [
  { img: "https://www.comfygen.com/media/svg/tech/html5-original.svg", alt: 'Unity 3D', title: "Unity 3D", url: "#", num: "1" },
  { img: "https://www.comfygen.com/media/svg/tech/css3-original.svg", alt: 'Unreal Engine', title: "Unreal Engine", url: "#", num: "2" },
  { img: "https://www.comfygen.com/media/svg/tech/nextjs-original.svg", alt: 'Metaverse Studio', title: "Metaverse Studio", url: "/next-js-development", num: "3" },
];
const ProgrammStack = [
  { num: "1", img: "https://www.comfygen.com/images/unity-stack-technology.webp", url: "#", title: "Solidity" },
  { num: "2", img: "https://www.comfygen.com/images/java-script.webp", url: "#", title: "Rust", },
  { num: "3", img: "https://www.comfygen.com/images/three-js-stack-technology.webp", url: "#", title: "Vyper", },
  { num: "4", img: "https://www.comfygen.com/images/unreal-engine-stack-technology.webp", url: "#", title: "HTML/CSS", },
  { num: "8", img: "https://www.comfygen.com/images/python-stack-technology.webp", url: "/python-development", title: "Python", },
  { num: "5", img: "https://www.comfygen.com/images/dot-net-stack-technology.webp", url: "#", title: "JavaScript", },
];

const Panelheader = [
  {
    num: "01",
    title: "Metaverse NFT Marketplace Development Technology Stacks and Tools",
    dec: "We are a reliable metaverse NFT marketplace development company with expertise in using a variety of tools in our technology stack. Our experts use 3D computing tools, programming languages, blockchain technology, AI, AR/VR and IoT for developing metaverse NFT marketplaces. "
  },
];




export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 bg-white  py-10">
      {Panelheader.map((elem: any) => {
        const { title, dec } = elem;
        return (
          <div className="flex flex-col justify-center text-center  mx-auto">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
              {title}
            </h2>
            <p>{dec}</p>
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
            Blockchains
          </span>
          <span
            onClick={() => setTech(tech === 1 ? 0 : 1)}
            className={
              tech === 1
                ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          >
            3D Tools
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
      

        </div>
      </div>
      <div className="flex justify-center items-center">
                <a href="/quote" >
                  <button className="shadow-2xl  relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Get A Free Consultation
                  </button>
                </a>
              </div>
    </div>


  );
}
