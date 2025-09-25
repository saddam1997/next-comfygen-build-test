import React, { useState } from "react";
import Image from "next/image";

const techData = {

  backend: [
    { img: "https://www.comfygen.com/svg/tech/mongodb-original.svg", alt: 'Mongodb', name: "mongodb", num: "1" },
    { img: "https://www.comfygen.com/svg/tech/googlecloud-original.svg", alt: 'Googlecloud', name: "google Cloud", num: "2" },
    { img: "https://www.comfygen.com/svg/tech/azure-original.svg", alt: 'Azure', name: "azure", num: "3" },
    { img: "https://www.comfygen.com/svg/tech/nginx-original.svg", alt: 'Nginx', name: "nginx", num: "4" },
    { img: "https://www.comfygen.com/svg/tech/digitalocean-original.svg", alt: 'Digitalocean', name: "digital ocean", num: "5" },
    { img: "https://www.comfygen.com/svg/tech/mysql-original-wordmark.svg", alt: 'Mysql', name: "mysql", num: "6" },
    { img: "https://www.comfygen.com/svg/tech/amazonwebservices-original.svg", alt: 'Amazonwebservices', name: "amazon webservices", num: "7" },
    { img: "https://www.comfygen.com/svg/tech/javascript-original.svg", alt: 'Javascript', name: "javascript", num: "8" },
    { img: "https://www.comfygen.com/svg/tech/nodejs-original.svg", alt: 'Nodejs', name: "nodejs", num: "9" },
    { img: "https://www.comfygen.com/svg/tech/firebase-plain.svg", alt: 'Mofirebasengodb', name: "amazon", num: "10" },
    { img: "https://www.comfygen.com/svg/tech/angularjs-original.svg", alt: 'Angularjs', name: "angular js", num: "11" },
    { img: "https://www.comfygen.com/svg/tech/typescript-original.svg", alt: 'Typescript', name: "typescript", num: "12" },

  ],

  frontend: [
    { img: "https://www.comfygen.com/svg/tech/html5-original.svg", alt: 'Html5', name: "html5", num: "1" },
    { img: "https://www.comfygen.com/svg/tech/css3-original.svg", alt: 'Css3', name: "css3", num: "2" },
    { img: "https://www.comfygen.com/svg/tech/nextjs-original.svg", alt: 'Nextjs', name: "nextjs", num: "3" },
    { img: "https://www.comfygen.com/svg/tech/react-original.svg", alt: 'React', name: "react js", num: "4" },
    { img: "https://www.comfygen.com/svg/tech/tailwindcss-plain.svg", alt: 'Tailwindcss', name: "tailwindcss", num: "5" },
    { img: "https://www.comfygen.com/svg/tech/angularjs-original.svg", alt: 'Angularjs', name: "angular js", num: "6" },
    { img: "https://www.comfygen.com/svg/tech/javascript-original.svg", alt: 'Javascript', name: "javascript", num: "7" },
    { img: "https://www.comfygen.com/svg/tech/typescript-original.svg", alt: 'Typescript', name: "typescript", num: "8" },
    { img: "https://www.comfygen.com/svg/tech/bootstrap-original.svg", alt: 'Bootstrap', name: "bootstrap", num: "9" },

  ],
  mobile: [
    { img: "https://www.comfygen.com/svg/tech/android-plain.svg", alt: 'Android Plan', name: "android", num: "1" },
    { img: "https://www.comfygen.com/svg/tech/apple-original.svg", alt: 'Apple', name: "IOS Apple", num: "2" },
    { img: "https://www.comfygen.com/svg/tech/react-original.svg", alt: 'React', name: "react native", num: "3" },
    { img: "https://www.comfygen.com/svg/tech/flutter-plain.svg", alt: 'Flutter', name: "flutter", num: "4" },
    { img: "https://www.comfygen.com/svg/tech/dart-original.svg", alt: 'Dart', name: "dart", num: "5" },
    { img: "https://www.comfygen.com/svg/tech/unity-original.svg", alt: 'Unity', name: "unity", num: "6" },
    { img: "https://www.comfygen.com/svg/tech/typescript-original.svg", alt: 'Typescript', name: "typescript", num: "7" },
  ],

  design: [
    { img: "https://www.comfygen.com/svg/tech/figma.svg", alt: 'Figma', name: "figma", num: "1" },
    { img: "https://www.comfygen.com/svg/tech/photoshop.svg", alt: 'Photoshop', name: "photoshop", num: "2" },
    { img: "https://www.comfygen.com/svg/tech/abdobe-illustrator.svg", alt: 'Abdobe Illustrator', name: " illustrator", num: "3" },
    { img: "https://www.comfygen.com/svg/tech/abdobe-xd.svg", alt: 'Abdobe Xd', name: "abdobe xd", num: "4" },
    { img: "https://www.comfygen.com/svg/tech/skech.svg", alt: 'Skech', name: "skech", num: "5" },
    { img: "https://www.comfygen.com/svg/tech/after-effect.svg", alt: 'After Effect', name: "after effect", num: "6" },

  ],

  crypto: [
    { img: "https://www.comfygen.com/img/stackimg/binance.svg", alt: 'Binance', name: "Binance", num: "1" },
    { img: "https://www.comfygen.com/img/stackimg/cardano.svg", alt: 'Cardano', name: "Cardano ", num: "2" },
    { img: "https://www.comfygen.com/img/stackimg/coinbase.svg", alt: 'Coinbase', name: "coinbase", num: "3" },
    { img: "https://www.comfygen.com/img/stackimg/eos.svg", alt: 'EOS', name: "EOS", num: "4" },
    { img: "https://www.comfygen.com/img/stackimg/ethereum.svg", alt: 'Ethereum', name: "Ethereum", num: "5" },
    { img: "https://www.comfygen.com/img/stackimg/ethers-js.svg", alt: 'Ethersjs', name: "Ethers JS", num: "6" },
    {
      img: "https://www.comfygen.com/img/stackimg/walletconnect.svg",
      alt: 'Walletconnect', name: "walletconnect",
      num: "7",
    },
    { img: "https://www.comfygen.com/img/stackimg/trust-wallet.svg", alt: 'Trust Wallet', name: "trust wallet ", num: "8" },
    { img: "https://www.comfygen.com/img/stackimg/solona.svg", alt: 'Solona', name: "Solana", num: "9" },
    { img: "https://www.comfygen.com/img/stackimg/polygon.svg", alt: 'Polygon', name: "Polygon", num: "10" },
    { img: "https://www.comfygen.com/img/stackimg/polkadot.svg", alt: 'Polkadot', name: "polkadot", num: "11" },
    { img: "https://www.comfygen.com/img/stackimg/metamask.svg", alt: 'Metamask', name: "metamask", num: "12" },
  ],
};



export default function Tech() {
  const [tech, setTech] = useState(0);

  return (
    <>
      <section className="py-20 bg-slate-100">
        <div className="space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="py-4">
            <h2 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center xl:w-3/6 mx-auto">
              Our <b className="text-[#3B82F6] font-bold"> Fluent </b>
              Technology Using in Development Stack
            </h2>
          </div>
          <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap ">
            {Object.keys(techData).map((key, index) => (
              <span
                key={index}
                onClick={() => setTech(index)}
                className={
                  tech === index
                    ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                    : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                }
              >
                {key}
              </span>
            ))}
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize">
            {techData[Object.keys(techData)[tech]].map((elem) => (
              <div
                key={elem.num}
                className="flex justify-start items-center rounded-lg bg-white space-x-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                  <Image src={elem.img} alt={elem.name} width={50} height={50} loading="lazy" className="group-hover:scale-105 transition-all duration-200 transform" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {elem.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
