import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Tech({ title, description, filterCategory = [], customTechData = null }) {
  const [tech, setTech] = useState(0);
  const router = useRouter(); // ✅ 2. Add router hook

  const defaultTechData = {
    "backend": [
      { img: "https://www.comfygen.com/media/svg/tech/nodejs-original.svg", alt: 'Nodejs', name: "Nodejs", num: "1" },
      { img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", alt: 'Javascript', name: "Javascript", num: "2" },
      { img: "https://www.comfygen.com/image/next-js-icon.svg", alt: 'Express js', name: "Express js", num: "3" },
      { img: "https://www.comfygen.com/media/svg/tech/sails-js-icon.svg", alt: 'Sails js', name: "Sails js", num: "4" },
      { img: "https://www.comfygen.com/image/next-js-icon.svg", alt: 'Next js', name: "Next js", num: "5" },
      { img: "https://www.comfygen.com/comfygen-images/comfygen/django-icon.webp", alt: 'Django', name: "Django", num: "6" },
      { img: "https://www.comfygen.com/media/svg/tech/Python-icon.svg", alt: 'Python', name: "Python", num: "7" },
      { img: "https://www.comfygen.com/media/svg/tech/php-icon.svg", alt: 'PHP', name: "PHP", num: "8" },
    ],
    "frontend": [
      { img: "https://www.comfygen.com/media/svg/tech/html5-original.svg", alt: 'Html5', name: "Html5", num: "1" },
      { img: "https://www.comfygen.com/media/svg/tech/css3-original.svg", alt: 'Css3', name: "Css3", num: "2" },
      { img: "https://www.comfygen.com/image/next-js-icon.svg", alt: 'Nextjs', name: "nextjs", num: "3" },
      { img: "https://www.comfygen.com/media/svg/tech/react-original.svg", alt: 'React', name: "React js", num: "4" },
      { img: "https://www.comfygen.com/media/svg/tech/tailwindcss-plain.svg", alt: 'Tailwindcss', name: "Tailwindcss", num: "5" },
      { img: "https://www.comfygen.com/media/svg/tech/angularjs-original.svg", alt: 'Angularjs', name: "Angular js", num: "6" },
      { img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", alt: 'Javascript', name: "Javascript", num: "7" },
      { img: "https://www.comfygen.com/media/svg/tech/typescript-original.svg", alt: 'Typescript', name: "Typescript", num: "8" },
      { img: "https://www.comfygen.com/media/svg/tech/bootstrap-original.svg", alt: 'Bootstrap', name: "Bootstrap", num: "9" },
    ],
    // "mobile": [
    //   { img: "https://www.comfygen.com/media/svg/tech/android-plain.svg", alt: 'Android Plan', name: "Android", num: "1" },
    //   { img: "https://www.comfygen.com/image/ios-apple.svg", alt: 'Apple', name: "IOS Apple", num: "2" },
    //   { img: "https://www.comfygen.com/media/svg/tech/react-original.svg", alt: 'React', name: "React Native", num: "3" },
    //   { img: "https://www.comfygen.com/media/svg/tech/flutter-plain.svg", alt: 'Flutter', name: "Flutter", num: "4" },
    //   { img: "https://www.comfygen.com/media/svg/tech/dart-original.svg", alt: 'Dart', name: "Dart", num: "5" },
    //   { img: "https://www.comfygen.com/image/unity-stack-icon.svg", alt: 'Unity', name: "Unity", num: "6" },
    //   { img: "https://www.comfygen.com/media/svg/tech/typescript-original.svg", alt: 'Typescript', name: "Typescript", num: "7" },
    // ],
    // "design": [
    //   { img: "https://www.comfygen.com/media/svg/tech/figma.svg", alt: 'Figma', name: "Figma", num: "1" },
    //   { img: "https://www.comfygen.com/media/svg/tech/photoshop.svg", alt: 'Photoshop', name: "Photoshop", num: "2" },
    //   { img: "https://www.comfygen.com/media/svg/tech/abdobe-illustrator.svg", alt: 'Abdobe Illustrator', name: " Illustrator", num: "3" },
    //   { img: "https://www.comfygen.com/media/svg/tech/abdobe-xd.svg", alt: 'Abdobe Xd', name: "Abdobe xd", num: "4" },
    //   { img: "https://www.comfygen.com/media/svg/tech/skech.svg", alt: 'Skech', name: "skech", num: "5" },
    //   { img: "https://www.comfygen.com/media/svg/tech/after-effect.svg", alt: 'After Effect', name: "After Effect", num: "6" },
    // ],
    // "crypto": [
    //   { img: "https://www.comfygen.com/img/stackimg/binance.svg", alt: 'Binance', name: "Binance", num: "1" },
    //   { img: "https://www.comfygen.com/img/stackimg/cardano.svg", alt: 'Cardano', name: "Cardano ", num: "2" },
    //   { img: "https://www.comfygen.com/img/stackimg/coinbase.svg", alt: 'Coinbase', name: "Coinbase", num: "3" },
    //   { img: "https://www.comfygen.com/img/stackimg/eos.svg", alt: 'EOS', name: "EOS", num: "4" },
    //   { img: "https://www.comfygen.com/image/ethereum-stack-icon.svg", alt: 'Ethereum', name: "Ethereum", num: "5" },
    //   { img: "https://www.comfygen.com/img/stackimg/ethers-js.svg", alt: 'Ethersjs', name: "Ethers JS", num: "6" },
    //   { img: "https://www.comfygen.com/img/stackimg/walletconnect.svg", alt: 'Walletconnect', name: "Walletconnect", num: "7", },
    //   { img: "https://www.comfygen.com/img/stackimg/trust-wallet.svg", alt: 'Trust Wallet', name: "Trust wallet ", num: "8" },
    //   { img: "https://www.comfygen.com/image/solana-stack-icon.svg", alt: 'Solona', name: "Solana", num: "9" },
    //   { img: "https://www.comfygen.com/img/stackimg/polygon.svg", alt: 'Polygon', name: "Polygon", num: "10" },
    //   { img: "https://www.comfygen.com/img/stackimg/polkadot.svg", alt: 'Polkadot', name: "Polkadot", num: "11" },
    //   { img: "https://www.comfygen.com/img/stackimg/metamask.svg", alt: 'Metamask', name: "Metamask", num: "12" },
    // ],
 
    "Blockchain network ": [
      { img: "/svg/tech/aws-logo.svg", alt: 'Ethereum', name: "Ethereum", num: "1" },
      { img: "/svg/tech/googlecloud-original.svg", alt: 'Polygon', name: "Polygon", num: "2" },
      { img: "/svg/tech/azure-original.svg", alt: 'Solana', name: "Solana", num: "3" },
      { img: "/svg/tech/azure-original.svg", alt: 'Cardano', name: "Cardano", num: "4" },
      { img: "/svg/tech/azure-original.svg", alt: 'EOS', name: "EOS", num: "5" },
    ],
       "Wallets": [
      { img: "/svg/tech/googlecloud-original.svg", alt: 'Binance', name: "Binance", num: "1" },
      { img: "/svg/tech/aws-logo.svg", alt: 'Coinbase', name: "Coinbase", num: "2" },
      { img: "/svg/tech/azure-original.svg", alt: 'trust wallet', name: "trust wallet", num: "3" },
      { img: "/svg/tech/azure-original.svg", alt: 'Walletconnwect', name: "Walletconnwect", num: "4" },
    ],
  };


  const techData = customTechData || defaultTechData;


  const filteredTechData = Object.keys(techData)
    .filter((key) => !filterCategory.includes(key))
    .reduce((obj, key) => {
      obj[key] = techData[key];
      return obj;
    }, {});


  const techCategories = Object.keys(filteredTechData);

  return (
    <section className="lg:py-16 py-10 bg-[#F3F4F6]">
      <div className="bg-[#0C0F18] mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 md:py-14 py-8 md:px-10 px-6 rounded-3xl">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">

          <div>
            <div className="py-4">
              <h2 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl text-white">{title}</h2>
              <p className="text-lg mt-2 text-white" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div className="mt-4">

              <button
                // onClick={() => router.push('/contact-us')} 
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey) {
                    window.open("/contact-us", "_blank");
                  } else {
                    router.push("/contact-us");
                  }
                }}
                className="text-white hover:bg-[#5556D1] bg-[#0C0F18] border border-white px-8 py-2.5 text-lg font-semibold rounded-full flex items-center gap-1">
                Connect Experts <MdOutlineArrowOutward />
              </button>

            </div>
          </div>

          <div>
            <div className="flex whitespace-nowrap items-center gap-3 justify-start mt-2 overflow-x-auto button-scroll py-2">
              {techCategories.map((key, index) => (
                <span
                  key={index}
                  onClick={() => setTech(index)}
                  className={`px-6 py-2 md:text-base  text-sm font-normal rounded-full cursor-pointer capitalize ${tech === index
                    ? "bg-[#5556D1] border border-[#5556D1] text-white"
                    : "text-white border border-white/20"
                    }`}
                >
                  {key}
                </span>
              ))}
            </div>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 max-h-[275px] overflow-y-auto  overflow-hidden  head-scroll">
              {filteredTechData[techCategories[tech]]?.map((elem) => (
                <div
                  key={elem.num}
                  className="flex items-center border bg-[#181b24] border-white/10 px-6 py-2 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="h-16 w-16 flex items-center justify-center">
                    <Image src={elem.img} alt={elem.name} width={50} height={50} loading="lazy" style={{ width: "auto", height: "auto"  }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white ml-3">{elem.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
