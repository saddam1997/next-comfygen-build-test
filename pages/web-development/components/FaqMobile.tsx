import { useState } from 'react';

const Frequently = [
  {
    num: "1",
    title: "What are the services offered by Mobile App Development Company in India?",
    desc: "The app development companies in India specialized in mobile applications offer multiple services; such as Mobile app consulting, Mobile APIs integration, mobile app support and maintenance, web app development, and more. Also the professional developers are specialized in building android app development, iOS app development, cross-platform app development, and wearable applications development too. You need to consult with the company, rest they will assist you in all possible services with the modernized technologies implementations.",
  },
  {
    num: "2",
    title: "Where app developers are more concerned during mobile app development?",
    desc: "The entire process of mobile app development is very important, and every segment every stage has its own significance. Such as:",
    li1: "Research and Conceptualization is important to know what needs to be developed, and what you should do with your own application.  ",
    li2: "MVP Development is a clear picture to understand what will be developed, and what are the changes we can make for more user’s retention.",
    li3: "Testing and Quality Assurance to remove the bugs and handle technical glitches for an appropriate application deployment. ",
    li4: "App post deployment services are important to make sure the app is appropriate for the marketplace, and matching the standards. ",
  },
  {
    num: "3",
    title: "How can I protect the details of my app development project while hiring a Mobile app development company?",
    desc: "Here you have an option, in which you can sign an NDA with the mobile app development company in US. NDA is a Non-Agreement Disclosure which is signed by the development company assuring that the developers will work best for the application success and later they will not reveal any detail about your project. This is a document, where the company claims to keep every detail of your project confidential. Even if the project meets certain requirements, then you can also obtain a patent on it.",
  },
  {
    num: "4",
    title: "Why is Comfygen your best mobile app development company choice?  ",
    desc: "Undeniably you can find different mobile app development companies in the US, but choosing us will come with great opportunities though. We are experienced, our developers are 7-8 years experience skilled professionals, we work with modern technologies, use of agile development strategies, and more. Our company has a lot to offer, which is enough to make client’s projects successful.",
  },
  {
    num: "5",
    title: "Which type of industries where we serve mobile app development services? ",
    desc: "Mobile app development is the need of every industry nowadays, and here we have a chance for all the industry domains to connect and get the best applications for their business. We have proficient IT Professionals in our company, who have the potential to build a robust mobile application for any industry clients ask for. ",
  }
];




export default function GuidSectionBlockchain() {
  const [currentCount, setCurrentCount] = useState("");
  return (
    <section className=" bg-slate-100">
      <div className=" mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  lg:px-0  px-6 lg:py-20 py-10">
        <div className="md:space-y-10 space-y-6  w-full">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center 2xl:leading-[3.5rem] xl:leading-[2.5rem] leading-[2rem] capitalize">
            Here are some frequently
            <b className="font-bold text-blue-600"> asked questions </b>
            <br />
            Mobile App Development
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
