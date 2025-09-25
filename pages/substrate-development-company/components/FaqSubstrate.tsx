import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const Frequently = [
  {
    num: "1",
    title: "What is the significance of substrate development?",
    desc: "Substrate is meant to streamline your overall blockchain development process, as it is a powerful framework that ensures future-proofing of the end solutions. One of the biggest benefits of using Substrate blockchain for the development of apps is it eliminates the need for reinventing the overall wheel multiple times for different stages of development. With the flexible or customizable architecture, developers will be able to curate the blockchains efficiently and quickly.",
  },
  {
    num: "2",
    title: "Why should one choose Substrate over other technologies for blockchain development?",
    desc: "Some of the reasons why it is important for you to choose Substrate for your blockchain development over others are:",
    li1: "Helps with easy integration of other client libraries for creating an immersive experience within the app.",
    li2: "Make use of the WASM platform for creating smart contracts, with the use of almost any language that’s compatible.",
    li3: "There’s a validator voting system within Substrate by default, alongside the robust consensus mechanism. ",
    li4: "The rust coding language of Substrate helps you add more power to your specific blockchain projects."
  },
  {
    num: "3",
    title: "What is the working execution of Substrate?",
    desc: "At Comfygen, our experts adhere to the core components of Substrate to make it work effectively for the overall development project. The working of it is represented as:",
    li1: "Substrate Node: This is the node that holds all the functionalities of Substrate and provides the developers with the utmost technical freedom for making necessary changes. ",
    li2: "Substrate Frame: It is one of the most crucial tools that consists of several modules, accountable as customizable business logic being used for specific use cases, such as consensus, governance, and staking.",
    li3: "Substrate Core: The core is responsible for ensuring that the runtime implementation is done the right way by targeting the WebAssembly. ",
  },
  {
    num: "4",
    title: "What are the noteworthy concepts associated with Substrate blockchain development?",
    desc: "Substrate blockchain development is associated with three important concepts such as consensus, runtime, and extrinsic. Runtime is considered the most crucial part of the entire Substrate implementation, as it is used for making the projects work as they are supposed to. Moreover, the runtime describes the overall blockchain state and indicates the rules associated with it. ",
    li: "Consensus, on the other hand, is an engine provided by Substrate for determining the right time for state transitions to take place and conflicts to be resolved. Moreover, Substrate blocks also consist of a header or wide extrinsic, which are considered crucial to interact with the blockchains outside the state. "
  },
  {
    num: "5",
    title: "What are the specific coding languages that are preferred for developing Substrate blockchain solutions?",
    desc: "As stated in the article, Substrate blockchain development is approached primarily with the use of Rust coding language. It is the system-specific coding language that offers safety, concurrency, and speed. But at Comfygen, there is a scope for our developers to use other languages as well, such as AssemblyScript or C++, for curating only certain specific parts of the Substrate codebase that is being used for making the project."
  },
  {
    num: "6",
    title: " How to get started with getting a Substrate blockchain development solution ready?",
    desc: "To start with developing a Substrate blockchain development solution, you need not go anywhere, as Comfygen is here to address your requirements with utmost reliability. If you have any specific use case related to the Substrate development, you can discuss that with us in brief and let our experienced developers pave the path of development for you to attain the required outcome. We have the best domain expertise in order to accelerate the overall development journey for you. "
  },
  {
    num: "7",
    title: "What are some of the perks of building a Substrate blockchain?",
    desc: "Some of the perks that you will be getting upon building an effective Substrate blockchain solution are modularity, interoperability, easy customization, and much more. Beyond that, you get the feasibility of being able to create diverse blockchain apps. For instance, you can create either a simple payment system or a complex DeFi app, and the choice is on you. Moreover, you also get support for consensus, staking, and governance mechanisms using Substrate development."
  },
  {
    num: "8",
    title: "Is there any difference between Substrate pallets and smart contracts?",
    desc: "Yes, some of the potential differences between Substrate pallets and smart contracts are:",
    li: "Smart contracts are referred to by businesses and developers as self-executing agreements that are curated or written directly within the code. On the other hand, the Substrate pallets are referred to as the modular components within the dedicated blockchain framework, used for building the core functionalities of a custom blockchain. ",
    li1: "Smart contracts are mostly written in Solidity coding language, whereas Pallets are mostly written in Rust. "
  },
  {
    num: "9",
    title: " What is the right way to deploy the smart contract Substrate?",
    desc: "The steps that you must follow in order to deploy the smart contract substrate are as follows:",
    li: "Creation of the smart contract by using the Parity’s ink. Take the help of our experts in the process, as we are proficient with Rust coding language. ",
    li1: "Once the contract is created, you must then use your CLI to compile the code of your smart contract. ",
    li2: "Moving on, you must then configure the substrate chain.",
    li3: "And then, you can go ahead and deploy the contract. ",
    li4: "Now, all of these steps might seem a bit complex, for which you must take the help of reliable experts, just like Comfygen. With our team backing you with the Substrate blockchain development solutions, you don’t have to go deeper into the technicalities of these steps, as we shall assist you right from planning to deployment of your app. "
  },
  {
    num: "10",
    title: "What are some of the examples of Substrate blockchains?",
    desc: "Some of the examples associated with Substrate blockchains are as follows:",
    li: "Polkadot: Polkadot makes use of Substrate for creating scalable and interoperable parachains. ",
    li1: "Kusama: Kusama is often considered the experimental network of Polkadot, which is also one of the popular Substrate examples.",
    li2: "Moonbeam: Moonbeam is considered the Substrate-based blockchain that’s specifically designed for Ethereum compatibility.",
    li3: "Acala: Acala is a popular DeFi blockchain solution that’s built over Substrate and allows developers to provide you with a decentralized ecosystem for handling finances associated with stablecoins, DEX, or others."
  },
  {
    num: "11",
    title: "What is Parity Substrate, and why is it used for?",
    desc: "The initiation of Substrate was initially done to simplify or streamline the development of various blockchain projects. This technology consists of specific Polkadot components that are organized clearly in a proper form to provide developers with the utmost convenience and better usability. Such readily available solutions of Substrate allow people to build outstanding blockchain projects in just a matter of a few minutes. Thus, you will be able to access the blockchain world without any barriers or obstacles. "
  },
  {
    num: "12",
    title: "How is Substrate development working towards broadening the Web3 goals?",
    desc: "Substrate is considered an ideal solution when correlated with the Web3 ecosystem, as it would manage the combination of decentralization with the stellar protection of user privacy, along with the interoperability perks. Apart from other blockchains, Substrate-based solutions provide a multichain infrastructure to handle multiple transactions with ease. Thus, you can expect the Substrate apps to deliver interconnectedness, flexibility, user autonomy, and other such perks that coincide with that of Web3.",
  },
  {
    num: "13",
    title: "Can the Substrate blockchain framework run autonomously?",
    desc: "Yes, the Substrate blockchain framework that is mostly used for creating custom blockchains is meant to run autonomously. You don’t need any kind of external technology to make it function, and this is possibly the fastest way to launch any blockchain with the least possible effort. Comfygen, being the best Substrate development services provider, takes the mantle of providing you with the best outcomes, ensuring that your end solution leverages the full benefit of this framework or technology. ",
  },
  {
    num: "14",
    title: "What is the estimated cost that you might have to bear for creating your Substrate blockchain with the help of our developers?",
    desc: "You cannot predict the estimated costs by just relating to the theoretical observations of what your Substrate project needs. Instead, you must connect with our experts, where we will be assessing the deadline, complexity, and required resources associated with the project. For every Substrate development project, there will be a different budget, as decided by the client, and the choice of specific features or functionalities will also differ. Therefore, it is quite tough to estimate a price all by yourself. Get your free price quotation from Comfygen today and get a detailed understanding of the concept for you to decide.",
  },
  {
    num: "15",
    title: "Why choose Comfygen for Substrate development services?",
    desc: "Comfygen is highly specialized in blockchain development skills by using a plethora of tech stacks. We can help you develop various successful Substrate projects and can provide complete assistance at all stages of the overall project development. As an integral part of our overall blockchain development services, we also extend assistance for handling blockchain projects right from scratch, allowing you to attain success within the blockchain space.",
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
            Substrate Development
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
                    <ul className='px-3'>
                      <li> {li1}</li>
                      <li> {li2}</li>
                      <li> {li3}</li>
                      <li> {li4}</li>
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
