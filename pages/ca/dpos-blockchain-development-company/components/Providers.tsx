import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";


export default function Tech() {
  const [tech, setTech] = useState(0);

  const sections = [
    {
      title: "For block producers",
      description:
        "We include features that are meant for block producers who manage the whole algorithm from the app interface. Some of the best features included in the DPoS blockchain algorithm for the block producers are as follows-",
      listItems: [
        "Node monitoring",
        "Stake management",
        "Rewards Tracking",
        "Governance Participation"
      ],
      imageSrc: "https://www.comfygen.com/img/for-block-producers.svg",
    },
    {
      title: "For token holders ",
      description:
        "For token holders and users of the blockchain app algorithm, we include many features through our delegated proof of stake development services. Here are some must-have features of our DPOS blockchain app-",
      listItems: [
        "Staking dashboard",
        "Validator ratings",
        "Rewards Distribution",
        "Governance Voting"
      ],
      imageSrc: "https://www.comfygen.com/img/for-token-holders-img.svg",
    },
    {
      title: "For Blockchain Developers ",
      description:
        "As a delegated proof of stake development company, Comfygen also adds the most advanced features for developers in a DPOS blockchain app. The features are as follows- ",
      listItems: [
        "Development toolkit ",
        "Testing environment",
        "Documentation",
        "Deployment tools"
      ],
      imageSrc: "https://www.comfygen.com/img/blockchain-developers.svg",
    },
  ];

  return (
    <section className="lg:py-16 py-10 bg-white">
      <div className="space-y-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
          Features in DPOS blockchain apps you should look for!
          </h2>
          <p className="text-base text-black">
          Comfygen is a DPOS blockchain development company in the USA that specializes in Blockchain DPOS development for its clients. The development company can act as a trusted partner in the most advanced development project for DPOS blockchain apps. We suggest the best features for some advanced functions in a blockchain-enabled application.
          </p>
        </div>
        <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap">
          {sections.map((section, index) => (
            <span
              key={index}
              onClick={() => setTech(index)}
              className={
                tech === index
                  ? "bg-[#5556D1] border border-[#5556D1] text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-[#5556D1] border border-[#5556D1] px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              {section.title}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5 bg-white rounded-lg">
          {sections.map((section, index) => (
            tech === index && (
              <div key={index} className="flex flex-col lg:flex-row py-10 px-4 lg:px-10 rounded-[42px] items-center lg:space-y-0 space-y-6">
                {index % 2 === 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h2>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="flex justify-center w-full md:justify-center">
                  <Image
                    className="rounded-md"
                    title="Custom Sports Betting App Development"
                    alt=""
                    src={section.imageSrc}
                    height={400}
                    width={400}
                    loader={uploadcareLoader}
                    unoptimized={true}
                  />
                </div>
                {index % 2 !== 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h2>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
