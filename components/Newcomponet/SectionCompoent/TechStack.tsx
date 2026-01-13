import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdOutlineArrowOutward } from "react-icons/md";

  const defaultTechData = {
    "backend": [
      { img: "https://www.comfygen.com/media/svg/tech/nodejs-original.svg", alt: 'Nodejs', name: "Nodejs", num: "1" },
      { img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", alt: 'Javascript', name: "Javascript", num: "2" },
      { img: "https://www.comfygen.com/media/svg/tech/express-js-icon.svg", alt: 'Express js', name: "Express js", num: "3" },
      { img: "https://www.comfygen.com/media/svg/tech/sails-js-icon.svg", alt: 'Sails js', name: "Sails js", num: "4" },
      { img: "https://www.comfygen.com/image/next-js-icon.svg", alt: 'Next js', name: "Next js", num: "5" },
      { img: "https://www.comfygen.com/media/svg/tech/django-icon.svg", alt: 'Django', name: "Django", num: "6" },
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


    "Blockchain network ": [
      { img: "/svg/tech/aws-logo.svg", alt: 'Ethereum', name: "Ethereum", num: "1" },
      { img: "/svg/tech/googlecloud-original.svg", alt: 'Polygon', name: "Polygon", num: "2" },
      { img: "https://www.comfygen.com/img/stackimg/solona.svg", alt: 'Solana', name: "Solana", num: "3" },
      { img: "https://www.comfygen.com/img/stackimg/cardano.svg", alt: 'Cardano', name: "Cardano", num: "4" },
      { img: "https://www.comfygen.com/img/stackimg/eos.svg", alt: 'EOS', name: "EOS", num: "5" },
    ],
    "Wallets": [
      { img: "https://www.comfygen.com/img/stackimg/binance.svg", alt: 'Binance', name: "Binance", num: "1" },
      { img: "/svg/tech/aws-logo.svg", alt: 'Coinbase', name: "Coinbase", num: "2" },
      { img: "https://www.comfygen.com/img/stackimg/cardano.svg", alt: 'trust wallet', name: "trust wallet", num: "3" },
      { img: "/svg/tech/azure-original.svg", alt: 'Walletconnwect', name: "Walletconnwect", num: "4" },
    ],
  };


export default function Tech({
   title, description, filterCategory = [], customTechData = defaultTechData }:any) {
  const [tech, setTech] = useState(0);
  const router = useRouter(); // ✅ 2. Add router hook



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
              <h2 className="font-bold md:text-2xl text-lg text-white">{title}</h2>
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

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 divide-x-1  relative pt-6 capitalize">
              {filteredTechData[techCategories[tech]]?.map((elem: any) => (
                <div
                  key={elem.num}
                  className="flex items-center border bg-[#181b24] border-white/10 sm:px-6 px-2 py-2 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="hidden h-16 w-16 sm:flex sm:items-center sm:justify-center">
                    <Image
                      src={elem.img}
                      alt={elem.name}
                      width={50}
                      height={50}
                      quality={50}
                    />
                  </div>
                  <h3 className="sm:text-lg text-sm sm:font-semibold font-medium text-white sm:ml-3">{elem.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
