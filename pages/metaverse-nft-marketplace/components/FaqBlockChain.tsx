import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "How much does it cost to build blockchain software?",
    desc: "There is no bar restricted when it comes to building blockchain software development services. You can consider the average cost for blockchain development services is $5000, but the cost can fluctuate if the demands extend to integrate more features, implement some latest tech trends, work on advanced technologies, and so on.",
  },
  {
    num: "2",
    title: "Can I Ask for Custom Blockchain Development? ",
    desc: "Yes, we do work on personalized solutions. Our blockchain development agency works on customized solutions based on client’s perspectives. We fully cooperate with our respective clients and understand their ideology, and also our experts share some unique and latest technologies to eventually build a super-functioning decentralized solution.",
  },
  {
    num: "3",
    title: "What is the Future of Blockchain Development?",
    desc: "Blockchain Development Company is transforming various industries, and majorly the future lies in the Cybersecurity industry. Blockchain Development is an open source and distributed network; which keeps the data fully secured and verified. Blockchain Development Organizations do need such technology in future for optimum security and scalability features in it. ",
  },
  {
    num: "4",
    title: "How Do I Choose the Best Blockchain Development Company?",
    desc: "If you are looking for best blockchain development company in the USA, the UK, Germany and In India then here are a few things you must consider to find the righteous and suitable best decentralized service company- ",
    li1: "Experience of the Blockchain Development Company",
    li2: "Skilled and Qualified Blockchain Developers",
    li3: "Use of Latest Trends and Advanced Technology with High Security Features",
    li4: "Evaluate the Pricing Model",
    li5: "Vision of Blockchain Development Project",
    li6: "Blockchain Development Service Offers Consultation Services",
  },
  {
    num: "5",
    title: "What are the Benefits of Hiring the Blockchain Development Company? ",
    desc: "Hiring Blockchain Development Company, Services improves trust, transactional security, transparency and incur in appropriate data sharing across the entire business development network. The decentralized services are experienced and skilled in blockchain development. Companies have professional trained blockchain experts qualified to provide seamless and secured decentralized solutions.  ",
  },
  {
    num: "6",
    title: "What are Smart Contracts on Blockchain?",
    desc: "Smart Contracts are the simple programs stored on the blockchain app development services, solutions, which run when anything predetermined circumstances and conditions occur. These contracts are used to automate the execution of agreements, so that the participants can immediately get certain outcomes.",
  },
  {
    num: "7",
    title: "How Does Blockchain Improve Security?",
    desc: "Blockchain technology development ensures to improvise the data structures and security qualities, because the blockchain technology is based on cryptography, consensus and decentralization solutions. Even so, it improves the accuracy, reliability of data claiming, and reduction in fraudulent activities and manipulations. ",
  },
  {
    num: "8",
    title: "How Does Blockchain Improve Transparency? ",
    desc: "The decentralized technology helps improve the global supply chain efficiently, and also allows companies to complete the trading transactions directly with no third parties involvement. ",
  },
  {
    num: "9",
    title: "How Does Blockchain Improve Efficiency?",
    desc: "Blockchain technology reduces the overhead and transactional cost by efficiently lessening the paperwork and errors. Also the decentralized solutions reduce the third party involvements and middleman to verify the transactions.",
  },
  {
    num: "10",
    title: "What are the Challenges of Implementing Blockchain? ",
    desc: "Implementing the blockchain technology raise numbers of challenges; such as: ",
    li1: "Inefficient Technology Design ",
    li2: "Low Scalability",
    li3: "Security Problems",
    li4: "Lack of Privacy ",
    li5: "Higher Energy Consumption",
  },
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
            Blockchain development
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, li1, li2, li3, li4, li5, li6, } = elem;
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
                      <li>{li5}</li>
                      <li>{li6}</li>
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
