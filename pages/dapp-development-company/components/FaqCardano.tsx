import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "What do you think Cardano is used for?",
    desc: "Cardano is considered a third-generation blockchain technology that can be used for diverse activities that are associated with decentralization. All the Cardano applications or platforms can serve training or financial purposes and can also be integrated into medical data or legal data protection.",
    li1: "The use of Cardano has helped blockchain experts experience ease in executing the development process, as the mathematical perfection of this technology is at its peak. Moreover, the users also get to use the unrivaled ownership or control ensured by the Cardano infrastructure."
  },
  {
    num: "2",
    title: "What are the major perks of the Cardano blockchain?",
    desc: "Cardano is considered a flexible and modular framework by the developers for designing sidechains and scaling solutions. You can also expect to create Ethereum-based blockchain networks with the use of Cardano. Among the recent protocols of Cardano, it is specified that the Ethereum-based transactions or smart contracts. ",
  },
  {
    num: "3",
    title: "Why should you choose Comfygen for your Cardano blockchain app development needs?",
    desc: "Cardano is one of the most distinguished blockchains as it approached development from a different perspective than that of the others. It uses the PoS blockchain to bring in energy efficiency and speed for the transactions. ",
    li1: "Now, Comfygen, being an expert in the blockchain development domain, makes sure that quality and performance are being executed upon utilizing Cardano for your blockchain development solutions. We offer timely delivery and also back your project with consistent support for suggesting upgrades over time"
  }
];




export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
            Here are some frequently asked
            <b className="font-bold text-blue-600"> questions (FAQs) regarding </b>
            Cardano Blockchain Development
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, li1, li2, li3, li4, } = elem;
              return (
                <div key={index} className="bg-white border cursor-pointer w-full rounded-lg"
                  onClick={() => setCurrentCount(currentCount === index ? false : index)}>
                  <div className="flex items-start justify-center w-full px-4 py-4 text-base font-medium text-left md:items-center md:px-6 text-slate-800 md:text-lg">
                    <h3 className="w-full text-base font-semibold md:text-lg">
                      {title}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className={currentCount === index ? "icon icon-tabler icon-tabler-chevron-down rotate-180 transition-all duration-200" : "icon icon-tabler icon-tabler-chevron-down rotate-0 transition-all duration-200"} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div className={currentCount === index ? "py-6 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-40" : "pt-0 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"}>
                    <p>{desc}</p>
                    <ul>
                      <li>{li1}</li>
                      <li>{li2}</li>
                      <li>{li3}</li>
                      <li>{li4}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
