import { useState } from 'react';

const Frequently = [
  {
    num: "1",
    title: "What is an NFT marketplace development company?",
    desc: "It's worthwhile to think about working with a company that specializes in creating NFT marketplaces if you intend to launch. Their staff of experts is experienced in NFT development, smart contracts, and blockchain technology, which ensures a smooth and timely launch.",
  },
  {
    num: "2",
    title: "How can an NFT marketplace development company help me?",
    desc: "The most promising option for developing and running a profitable NFT marketplace is an NFT marketplace development business. In addition to standard design and development services, they also provide payment gateway integration, blockchain integration, smart contract development, security and performance testing, deployment and maintenance, and extra services like marketing and promotion."
  },
  {
    num: "3",
    title: "What services are offered by an NFT marketplace development company?",
    desc: "Work together with a top NFT development company to create a user-friendly, safe marketplace. By doing this, you can ensure exceptional quality while saving a significant amount of time and money. Select the best alternative on the market and work with a reputable NFT development firm right away!",
  },
  {
    num: "4",
    title: "How do I find a reliable NFT marketplace development company?",
    desc: "Select a company with a track record of success when looking for a team for your NFT marketplace. Examine their portfolio and customer testimonials. Make sure they provide every service that's required, such as security testing, blockchain integration, and custom design. For the best deal, get a quote before signing a contract."
  },
  {
    num: "5",
    title: "What are the benefits of hiring an NFT marketplace development company?",
    desc: "Your partner for creating and running your own NFT marketplace is an NFT marketplace development business. Offering services including custom design, blockchain integration, smart contract development, payment gateway integration, security testing, and maintenance, they specialize in safe and reliable marketplaces. You can rely on their experience to make sure your NFT marketplace succeeds."
  },
  {
    num: "6",
    title: "How much does NFT marketplace development cost?",
    desc: "The cost of developing an NFT marketplace might vary depending on a number of important variables. These factors include the complexity and size of the market, the intended features and functions, the skill and experience of the development team, and even the team's location. "
  },
  {
    num: "7",
    title: "Can you recommend a reputable NFT marketplace development company?",
    desc: "The preferred NFT marketplace development firm is Comfygen. Their skilled developers have launched NFT marketplaces for satisfied customers in the past and are knowledgeable about the newest NFT technology and trends. Put your faith in Comfygen to realize your vision for the NFT marketplace!"
  },
  {
    num: "8",
    title: "What is white-label NFT marketplace development?",
    desc: "White label Without requiring a large investment of time or knowledge, NFT marketplace development makes it easier for businesses to create a customized marketplace. Pre-built platforms make it simple to adjust the supported NFT kinds, payment methods, branding, and design to meet corporate goals. For companies looking for a simple, quick way to start their own marketplace, this is the perfect answer. "
  },
  {
    num: "9",
    title: " How does white-label NFT marketplace development work?",
    desc: "White-label Businesses may easily create their own NFT marketplace in no time with the help of NFT marketplace development. It makes it unnecessary to construct unique platforms because it provides a ready-made platform that can be tailored to certain business requirements, making it simple to enter the NFT market "
  },
  {
    num: "10",
    title: "Can I create my own NFT marketplace with the help of a development company?",
    desc: "Yes, indeed! You have to look no more than Comfygen if you want to launch your own NFT marketplace. Comfygen is well-known for its proficiency in developing NFT marketplaces. They have a group of skilled and experienced developers who can easily create a custom NFT marketplace that meets your specific requirements and vision."
  },
  {
    num: "11",
    title: "How can I build a custom NFT marketplace?",
    desc: "To create your personalized NFT marketplace, follow these steps:",
    li: "1. Choose a blockchain network that aligns with your vision.",
    li2: "2. Develop smart contracts to manage your NFTs.",
    li3: "3. Design an appealing frontend and a robust backend for your marketplace.",
    li4: "4. Integrate payment gateways for seamless transactions.",
    li5: "5. Thoroughly test your marketplace before launching it.",
  },
  {
    num: "12",
    title: "What is a white-label NFT platform?",
    desc: "A white-label platform is a ready-made NFT marketplace that can be branded and customized prior to launch. Businesses looking for a quick and affordable solution to launch their own NFT marketplace without having to start from scratch with a custom platform are drawn to this option.",
  },
  {
    num: "13",
    title: "What are the advantages of a white-label NFT marketplace?",
    desc: "Using a white-label NFT marketplace has several benefits, including quicker deployment, lower costs, specialist knowledge, and customization options.",
  },
  {
    num: "14",
    title: "Which NFT marketplace development agency should I choose for my project?",
    desc: "Comfygen can help you design a customized NFT marketplace that meets your specific needs. Their skilled development team can guarantee the security, scalability, and user-friendliness of your marketplace.",
  },
  {
    num: "15",
    title: "What is the process of NFT marketplace development?",
    desc: "Three key phases go into creating an NFT marketplace: ideation and planning, design and development, testing and deployment, and launch and marketing.",
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
            NFT Marketplace Development
          </h2>
          <div className="w-full py-4 space-y-4">
            {Frequently.map((elem: any, index: any) => {
              const { title, desc, li, li1, li2, li3, li4, li5 } = elem;
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
                      <li>{li}</li>
                      <li>{li1}</li>
                      <li>{li2}</li>
                      <li>{li3}</li>
                      <li>{li4}</li>
                      <li>{li5}</li>
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
