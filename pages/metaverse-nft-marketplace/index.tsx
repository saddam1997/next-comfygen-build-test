import Image from "next/image";
import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/metaverse.json"
import Link from "next/link";
import styles from './styles.module.css'
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
const HeroSectionForm = dynamic(() => import('../../components/old/components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const TechnoStack = dynamic(() => import('./components/TechnoStack'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../../components/old/components/Header'), {
  loading: () => <p>Loading...</p>,
})

const AdviceSection = dynamic(() => import('../../components/old/components/Advice'), {
  loading: () => <p>Loading...</p>,
})
const ContactFromCenter = dynamic(() => import('../../components/old/components/ContactFromCenter'), {
  loading: () => <p>Loading...</p>,
})
const FaqSection = dynamic(() => import('../../components/old/components/FaqSection'), {
  loading: () => <p>Loading...</p>,
})
const HireSection = dynamic(() => import('../../components/old/components/HireSection'), {
  loading: () => <p>Loading...</p>,
})


const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



export default function Ecommerce(props:any) {
  const [showContent, setShowContent] = useState(false);
  let { initialData } = props;

  const countryNames = [
    'US', 'CA', 'GB', 'AD', 'AU', 'AT', 'BS', 'BH', 'IO', 'KM', 'CU', 'AR', 'CW', 'CY', 'DK', 'DM',
    'EG', 'FK', 'FI', 'FR', 'DE', 'GR', 'GL', 'HK', 'IS', 'IN', 'ID', 'IT', 'JP', 'JE', 'JO', 'KW',
    'KG', 'KR', 'MX', 'FM', 'NZ', 'NI', 'OM', 'PE', 'PH', 'PL', 'PT', 'QA', 'RO', 'RU', 'SA', 'SG',
    'SE', 'SZ', 'CH', 'TH', 'TR', 'TN', 'UA', 'UM', 'AE', '039', '155', '154', '151', '150'
  ];

  const metaTags = countryNames.map((country, index) => (
    <meta key={index} name="og:country-name" content={country} />
  ));


  const websiteData = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Top Metaverse App Development Company | Comfygen",
    "url": "https://www.comfygen.com/media/metaverse-development",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const Features = [
    {
      "num": "1",
      "url": "https://www.comfygen.com",
      "img": "https://www.comfygen.com/img/ai-in-blockchain-development-integration.webp",
      "title": "Technical Expertise",
      "decs": <p className='break-all text-slate-800 '>We have emerged as a leading metaverse NFT Development Company with a broad range of expertise in creating custom metaverse solutions. </p>
    },
    {
      "num": "2",
      "url": "/metaverse-development",
      "img": "https://www.comfygen.com/img/metaverse-integration-in-blockchain.webp",
      "title": "Impressive Record in Service Quality",
      "decs": <p className='break-all text-slate-800 '>Our NFT metaverse developers use their experience in different projects to improve service quality by following a strategic approach in every project.</p>
    },
    {
      "num": "3",
      "url": "/game-development-company",
      "img": "https://www.comfygen.com/img/gamification-in-blockchain-development-technology.webp",
      "title": "Familiarity with Latest Technologies",
      "decs": <p className='break-all text-slate-800 '>We also offer an additional edge in metaverse NFT game development and marketplace development with the use of latest technologies and trends.
      </p>,
    },
    {
      "num": "4",
      "url": "/game-development-company",
      "img": "https://www.comfygen.com/img/gamification-in-blockchain-development-technology.webp",
      "title": "Timely Delivery of Projects",
      "decs": <p className='break-all text-slate-800 '>We believe in ensuring the competitive advantage of clients by delivering their projects on time to leave adequate room for feedback.
      </p>,
    },
    {
      "num": "5",
      "url": "/game-development-company",
      "img": "https://www.comfygen.com/img/gamification-in-blockchain-development-technology.webp",
      "title": "Customer-Centric Workflow",
      "decs": <p className='break-all text-slate-800 '>Our metaverse NFT marketplace development services also stand out with a customer-centric workflow focused on the distinct needs of customers.
      </p>,
    },
    {
      "num": "6",
      "url": "/game-development-company",
      "img": "https://www.comfygen.com/img/gamification-in-blockchain-development-technology.webp",
      "title": "Cost-Effective Services",
      "decs": <p className='break-all text-slate-800 '>We offer metaverse NFT marketplace development with the assurance of cost-effectiveness and complete transparency regarding our service costs.
      </p>,
    }

  ];

  const productData = {
    "@context": "http://www.schema.org",
    "@type": "product",
    "brand": "Comfygen",
    "name": "Best Metaverse App Development Company - Metaverse App Development Services",
    "image": "https://www.comfygen.com/media/metaverse/tap-in-to-world-of-metaverse.webp",
    "description": "Comfygen Private Limited is top Metaverse Application Development Company. We provide the best Metaverse application development services to enterprises & startups worldwide.",
    "aggregateRating": {
      "@type": "aggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1124"
    }
  };
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Comfygen",
    "legalName": "Comfygen Pvt. Ltd.",
    "url": "https://www.comfygen.com/",
    "logo": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "Saddam Husen"
      },
      {
        "@type": "Person",
        "name": "Saddam Husen"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F-152, Dayanand Marg, Nemi Nagar",
      "addressLocality": "Vaishali Nagar",
      "addressRegion": "Jaipur, Rajasthan, India",
      "postalCode": "302021",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "telephone": "+91 9587867258",
      "email": "sales@comfygen.com"
    },
    "sameAs": [
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://www.facebook.com/comfygen"
    ]
  }
  return (
    <>
      <Head>
        <title>Metaverse NFT Marketplace Development Company | Comfygen</title>
        <meta name="description" content="We help you Launching the future-ready Metaverse development services. Our experienced team supports technical and development needs, specializing in VR, blockchain, and AR development. Contact us today!" />
        <link rel='canonical' href='https://www.comfygen.com/media/metaverse-development' />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Metaverse Development Services | Metaverse App Development Services" />
        <meta property="og:facebook_description" content="Punter with the best metaverse application development company– a leading top metaverse development company offering an array of metaverse development services with end-to-end expertise. With metaverse app development, turn ideas into reality!" />
        <meta property="og:twitter_title" content="Metaverse Development Company in the United States" />
        <meta property="og:twitter_description" content="Metaverse development company in the United States, Comfygen provide you top notch services of metaverse development platform services and solutions with bets metaverse development Programmers" />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='En' />
        <meta name='abstract' content='Leading Metaverse Development Agency' />
        <meta name='summary' content='Leading Metaverse Development Firm' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a comprehensive Metaverse Development Company in India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='Leading Metaverse Development Company' content="Empowering businesses with cutting-edge Metaverse Development Services and solutions and Comfygen's expert metverse blockchain consulting services to drive innovation and sustainable growth in the digital economy." />
        <meta name='category' content='Metaverse Development Services - Metaverse Development Solution' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Best Metaverse Development Company - Metaverse Development Solution Firm in India, The USA, UK' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='Metaverse Development Service Provider' />
        {metaTags}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }} />
      </Head>

      {/* hero section */}
      <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }}>
        <div className=" bg-[#1B1C30CC]">
          <Header />
          <div className="md:py-36 py-5">
            <HeroSectionForm
              heading='Metaverse NFT Marketplace Development Company'
              ptag="We are one of the leading metaverse NFT marketplace development agencies with expertise in launching NFT marketplaces specifically tailored for the metaverse. Our experienced team can help you create a metaverse NFT marketplace that complies with popular standards and includes attractive features. Find the best opportunities to redefine user experiences with your metaverse NFT marketplace for seamless trading of NFTs in the metaverse."
              btnName="Discuss Now"
              btnLink='/contact-us'
              imgSrc='https://www.comfygen.com/img/cryptocurrency-wallet.webp'
              Width={578}
              Height={557}
              altTag="Metaverse Development Company " />
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-no-repeat bg-fixed bg-cover bg-center" style={{ backgroundImage: `url("https://www.comfygen.com/media/gif/metaverse-page.webp")` }}>
        <div className="bg-black/80">
          <AdviceSection
            heading='Best Metaverse NFT Marketplace Development Firm'
            ptag="Our NFT metaverse development experts can help you create high-performance scalable NFT marketplaces that help users in minting, selling, buying and trading NFTs. We create NFT marketplaces for businesses across different industry verticals. You can capitalise on our NFT marketplace development services to boost your brand identity as a web3 pioneer. Explore the value advantages of cutting-edge technologies for entering the world of virtual assets. Reach out to us for developing NFT marketplaces that are interoperable across different metaverse projects."
            imgSrc='https://www.comfygen.com/media/metaverse/tap-in-to-world-of-metaverse.webp'
            imgW={550}
            imgH={500}
            altTag='Tap in to world of Metaverse Development Company' />
          <ContactFromCenter />
          {/* services */}
          <section className="py-4 lg:py-10 bg-[#000]/40">
            <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
              <div className="space-y-4">
                <div className="flex flex-col justify-center text-center space-y-2">
                  <h2 className="text-2xl lg:text-4xl text-[#ffffff] font-bold  leading-tight lg:leading-[3rem]">Metaverse NFT Marketplace Development Services</h2>
                  <p className="text-base text-white">As a trusted <b>metaverse NFT marketplace development company</b>, we offer solutions that help you blend NFTs and metaverse platforms. Our experts leverage blockchain technology and their expertise in metaverse to translate your business ideas into reality.</p>
                </div>
                <div className="grid gap-10 lg:p-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xl:gap-10">
                  {JSON_DATA.EmbraceMeta.map((elem) => {
                    const { title, num, decs, url } = elem;
                    return (
                      <div key={num} className="p-4 bg-black shadow-[#fff] shadow-md transition-all duration-300 ease-in-out">
                        <a href={url}>
                          <div className="space-y-2">
                            <h2 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-bold">{title}</h2>
                            <p className="text-base text-white">{decs}</p>
                          </div>
                        </a>
                      </div>

                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="lg:py-16 py-4 bg-white">
            <div className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
              <div className="">
                {JSON_DATA.ImmersiveMetaverse.map((elem: any) => {
                  const { title, num, decs } = elem;
                  return (
                    <div key={num} className="w-full flex flex-col justify-center items-center text-center space-y-2">
                      <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
                        {title}
                      </h2>
                      <p className="text-base text-slate-800">{decs}</p>
                    </div>
                  );
                })}
              </div>
              <div className="grid  gap-10 lg:grid-cols-4 md:grid-cols-2">
                {JSON_DATA.Experience.map((elem: any) => {
                  const { title, decs, num, img, url } = elem;
                  return (
                    <div key={num} className="p-4 cursor-pointer -translate-y-6 hover:text-[#fff]  rounded-lg border-1 drop-shadow-xl hover:bg-[#0B70E1] bg-white border border-solid  border-[#121212] space-y-2">
                      <div className="flex items-center justify-center ">
                        <Image src={img} alt={title} width="60" height="60" />
                      </div>
                      <div className="flex items-center justify-center  space-x-2 text-center">
                        <h3 className="text-base text-center font-bold ">
                          {title}
                        </h3>
                      </div>
                      <div className="text-center">
                        <p className="text-center">{decs}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <div className="md:py-10 bg-gray-300 py-4">
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
              <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
                <Image
                  src="https://www.comfygen.com/media/metaverse/we-serve-comprehensive-metaverse-blockchain-development-services-for-different-industries.webp"
                  alt=" We Serve Comprehensive Metaverse Blockchain Development Services for Different Industries"
                  className="rounded-lg"
                  width={904}
                  height={740}
                />
              </div>
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Strategies for Developing a Metaverse NFT Marketplace
                </h2>
                <div className="space-y-2">
                  <p className="text-base text-black text-justify">We follow a customer-centric strategy for development of metaverse NFT marketplace solutions. Our expertise in blockchain development has helped us identify the ideal roadmap for creating NFT marketplaces for metaverse projects. We understand the significance of metaverse as an emerging technology and its use cases for different industries. Therefore, we adopt a clear strategic approach for creating NFT marketplaces personalised to the needs of clients. </p>
                  {/* <ul className='space-y-2 text-left'>
                    {JSON_DATA.myList3.map((item, index) => (
                      <li className="flex text-base text-black/80" key={index}><span className="pr-2 mt-1.5 text-[#4f4f50]">
                        <BsFillStarFill className="w-4 h-4" />
                      </span>{item} </li>
                    ))}
                  </ul> */}
                  <div className="pt-4">
                    <a href="/contact-us" >
                      <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-[#6B8DDA]  rounded cursor-pointer text-white w-fit group">
                        Let’s Discuss
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="lg:py-16 py-4 bg-[#fff]">
            <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
              <div className="flex flex-col justify-center items-center text-center space-y-3">
                <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#000]">
                  Benefits Of Metaverse NFT Marketplace Development
                </h2>
              </div>
              <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
                {
                  JSON_DATA.LatestTechno.map((elem) => {
                    const { title, num, decs, } = elem;
                    return (
                      <div key={num} className="border p-4 space-y-2 shadow-lg shadow-[#fff]/70 border-l-[16px] rounded-tl-3xl border-b-[16px] rounded-br-3xl border-[#16BDFA] bg-white">
                        <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{title}</p>
                        <p className="text-base text-slate-800">{decs}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>

          <section>

            <div className={`${styles.SeamlessSec} `}>
              <div className=' py-10'>
                <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
                  <div className="space-y-4 text-center">
                    <div className="flex flex-col justify-center mx-auto">
                      <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                        Metaverse NFT Marketplace Development Process
                      </h2>
                    </div>
                    <div>
                      <ul className={`${styles.timeline} `}>
                        <li className={`${styles.timelineevent} `}>
                          <label className={`${styles.timelineeventicon} `}></label>
                          <div className={`${styles.timelineeventcopy} `}>
                            <p className={`${styles.timelineeventthumbnail} `}>Step One</p>
                            <h3 className='text-white'>Selection of Blockchain Network </h3>
                            <p className='text-white'>Our <b>metaverse NFT development company </b> begins every project with a clear understanding of the vision, prerequisites and goals of clients for development of metaverse NFT marketplaces. We rely on experts to create customisable NFT marketplaces for the metaverse. </p>
                          </div>
                        </li>
                        <li className={`${styles.timelineevent} `}>
                          <label className={`${styles.timelineeventicon} `}></label>
                          <div className={`${styles.timelineeventcopy} `}>
                            <p className={`${styles.timelineeventthumbnail} `}>Step Tow</p>
                            <h3 className='text-white'>User Interface Design and Development</h3>
                            <p className='text-white'>Our professional UI/UX designers support our NFT development services for metaverse by creating visual designs and wireframes. We emphasise the elements of brand consistency, user-friendliness and aesthetics alongside a seamless user flow that delivers the best experience. </p>
                          </div>
                        </li>
                        <li className={`${styles.timelineevent} `}>
                          <label className={`${styles.timelineeventicon} `}></label>
                          <div className={`${styles.timelineeventcopy} `}>
                            <p className={`${styles.timelineeventthumbnail} `}>Step Three</p>
                            <h3 className='text-white'>Smart Contract Development </h3>
                            <p className='text-white'>Apart from creating the UI/UX for your NFT marketplace, we have to create and deploy smart contracts that help in secure minting, transfer and management of NFTs. We create customised smart contracts for NFT exchange without technical complexities.
                            </p>
                          </div>
                        </li>
                        <li className={`${styles.timelineevent} `}>
                          <label className={`${styles.timelineeventicon} `}></label>
                          <div className={`${styles.timelineeventcopy} `}>
                            <p className={`${styles.timelineeventthumbnail} `}>Step Four</p>
                            <h3 className='text-white'>Setting Up Decentralised Storage</h3>
                            <p className='text-white'>Our reputation as a metaverse NFT game development agency also encompasses our performance in setting up decentralised storage. We set up IPFS for your metaverse NFT marketplace to ensure top-notch security for user data and NFT metadata.</p>
                          </div>
                        </li>
                        <li className={`${styles.timelineevent} `}>
                          <label className={`${styles.timelineeventicon} `}></label>
                          <div className={`${styles.timelineeventcopy} `}>
                            <p className={`${styles.timelineeventthumbnail} `}>Step Five</p>
                            <h3 className='text-white'>Backend and Frontend Integration</h3>
                            <p className='text-white'>After the smart contract development process, our developers focus on integration of the backend and frontend of your metaverse NFT marketplace. At the same time, we also add other elements for completing the final solution before delivery. </p>
                          </div>
                        </li>
                        <li className={`${styles.timelineevent} `}>
                          <label className={`${styles.timelineeventicon} `}></label>
                          <div className={`${styles.timelineeventcopy} `}>
                            <p className={`${styles.timelineeventthumbnail} `}>Step Six</p>
                            <h3 className='text-white'>Smart Contract Audit</h3>
                            <p className='text-white'>We also implement smart contract audits in our process for developing metaverse NFT marketplaces. Our virtual NFT gallery development services emphasise smart contract audits in the sequential workflow for safeguarding the marketplace against malicious attacks. </p>
                          </div>
                        </li>
                        <li className={`${styles.timelineevent} `}>
                          <label className={`${styles.timelineeventicon} `}></label>
                          <div className={`${styles.timelineeventcopy} `}>
                            <p className={`${styles.timelineeventthumbnail} `}>Step Seven</p>
                            <h3 className='text-white'>Integration with Metaverse Platforms</h3>
                            <p className='text-white'>Our experts understand the impact of choosing the best metaverse platforms for launching your NFT marketplace. We ensure effective integration of NFT marketplaces with metaverse platforms for offering seamless interactions by leveraging APIs and SDKs. </p>
                          </div>
                        </li>
                        <li className={`${styles.timelineevent} `}>
                          <label className={`${styles.timelineeventicon} `}></label>
                          <div className={`${styles.timelineeventcopy} `}>
                            <p className={`${styles.timelineeventthumbnail} `}>Step Eight</p>
                            <h3 className='text-white'>Testing and Deployment</h3>
                            <p className='text-white'>We also pay attention to testing in NFT development services for metaverse as it can help in identifying performance issues, bugs and vulnerabilities. Subsequently, we deploy the NFT marketplace in a production environment that offers a flexible transition to a live environment.</p>
                          </div>
                        </li>
                        <li className={`${styles.timelineevent} `}>
                          <label className={`${styles.timelineeventicon} `}></label>
                          <div className={`${styles.timelineeventcopy} `}>
                            <p className={`${styles.timelineeventthumbnail} `}>Step Nine</p>
                            <h3 className='text-white'>Maintenance and Support</h3>
                            <p className='text-white'>Our NFT marketplace development services for metaverse platforms also include continuous support, updates and maintenance of the marketplace. We are always prepared to resolve any type of issues in the functionality of the marketplace according to your feedback. </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="">
                      <a href="/contact-us" >
                        <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                          Let’s Get Your Blockchain  Now!
                        </button>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
          <section className="py-20 bg-white">
            <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="space-y-4 text-center ">
                <h2 className="text-4xl font-bold text-[#000] ">How Does a Metaverse NFT Marketplace Development Work?</h2> </div>

              <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12 mt-5">
                {JSON_DATA.ProcessNFT.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div key={num} className="p-6 space-y-4 bg-[#201325] border rounded-xl group hover:bg-white transition-all duration-200">
                      <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-white group-hover:bg-[#201325] rounded-full bg-gradient-to-t">
                        <Image width={100} height={100} src={img} alt={title} title={title} className="w-16" />
                      </div>
                      <h3 className="text-lg font-extrabold group-hover:text-[#0E1F51] transition-all duration-200 text-left text-white">{title}</h3>
                      <p className="font-medium text-left text-white group-hover:text-black break-all transition duration-200 ease-in-out">{decs}</p>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </section>
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-20">
            <div className="flex flex-col justify-center items-center text-center space-y-3">
              <h2 className="text-3xl lg:text-4xl  font-bold leading-[2rem] lg:leading-[3rem] text-[#ffffff]">
                Top-notch White Label Metaverse NFT Marketplace Development
              </h2>
              <p className="text-base text-white">We are a professional NFT metaverse development agency for creating and launching white-label NFT marketplace solutions. Avoid the waiting and get your white-label metaverse NFT marketplace with promising value advantages.</p>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
              {JSON_DATA.LabelMetaverse.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div key={num} className="p-12   flex justify-center items-center flex-col bg-white " >
                    <Image src="https://www.comfygen.com/img/blockstack.webp" alt="" width={100} height={100} />
                    <div className="bg-[#150441]/80 p-1 rounded">
                      <h2 className="text-white text-xl font-bold text-center">{title}</h2>
                    </div>
                    <p className="font-medium text-center text-black group-hover:text-black break-all transition duration-200 ease-in-out">{decs}</p>
                  </div>
                )
              })
              }
            </div>
          </div>
          <section className="bg-white py-20">
            <div className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 ">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto xl:mb-0 xl:w-5/12">
                  <div className="flex xl:py-12">
                    <Image src="https://www.comfygen.com/media/metaverse/do-you-want-other-information-aboutour-metaverse-development-services.webp" width={800} height={521} blurDataURL="URL" placeholder="blur" loader={uploadcareLoader}
                      unoptimized={true} className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] xl:mt-[50px] z-[10]" alt="  Is There Any Other Information We Can Help You With?" />
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto xl:w-7/12">
                  <div className="flex h-full items-center rounded-lg bg-[#443667] p-8 text-center text-white xl:pl-12 xl:text-left">
                    <div className="xl:pl-12 space-y-2">
                      <h2 className="mb-6 text-3xl font-bold">
                        Create Your Custom NFT Metaverse Marketplace Development by Using the Services and Guidance of Experts
                      </h2>
                      <p className="">
                        Whether you choose our white-label metaverse NFT marketplace solutions or custom marketplace development, we ensure that you get the final solution tailored to your desired specifications. We employ the services of experts to ensure that you have the ideal tool for capitalising on web3 trends. Our experts serve as your trusted partners from the first day to the final delivery, alongside supporting your journey with post-delivery maintenance services.
                      </p>
                      <div className="pt-8">
                        <Link href="/contact-us" passHref={true}>
                          <button type="button"
                            className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                            data-te-ripple-init data-te-ripple-color="light">
                            Get in touch now.
                          </button>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">Different types of Metaverse NFT Marketplace?</h2>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
              {
                JSON_DATA.TecnologisStack.map(metaverse => {
                  return (
                    <div key={metaverse.num} className="p-6 text-center bg-white space-y-2 transition-all duration-300 ease-in-out group ">

                      <h3 className="bg-clip-text text-start text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] font-bold text-xl">{metaverse.title}</h3>
                      <p className="text-start"> {metaverse.stack} </p>
                    </div>
                  );
                })
              }
            </div>
          </section>
          <section className="bg-white py-10">
            <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-16 ">
              <div className="flex flex-col justify-center items-center text-center mx-auto space-y-2">
                <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#000]">
                  Our Metaverse NFT Marketplace Development Services Could Offer Value Advantages to Different Industries
                </h2>
                <p className="text-black">We cater to the emerging demand of metaverse NFT marketplace development across different industries. Our custom metaverse NFT marketplace solutions could help businesses across multiple industries with new possibilities.</p>
              </div>
              <div className=" ">
                <div className=" grid grid-cols-1 lg:gap-10 gap-6 mx-auto  xl:grid-cols-3">
                  {JSON_DATA.WhyChoose.map(nftmarketplace => {
                    return (
                      <div key={nftmarketplace.num} className="border p-6 space-y-2 shadow bg-black rounded-tl-[40px] rounded-br-[40px] ">
                        <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{nftmarketplace.title}</p>
                        <p className="text-base text-[#fff]">{nftmarketplace.decs}</p>
                      </div>
                    );
                  })
                  }
                </div>
              </div>
            </div>
          </section>
          <section className=" bg-center bg-fixed bg-cover " style={{ backgroundImage: `url("https://www.comfygen.com/img/benefits-of-building.webp")` }}>
            <div className='bg-[#161f33]/90 py-20'>
              <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
                <div className="flex flex-col justify-center items-center text-center space-y-3">
                  <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
                    Shape Your Dreams to Reality with Our Different Engagement Models
                  </h2>
                </div>
                <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
                  {
                    JSON_DATA.ShapeYourDreams.map((elem) => {
                      const { number, title, num, decs, } = elem;
                      return (
                        <div key={num} className="border p-8 space-y-2 shadow-lg  border-l-[6px] rounded-tl-3xl border-b-[8px] rounded-br-3xl border-[#16BDFA] bg-white">
                          <h2 className="w-16 h-16 bg-[#16BDFA] text-white flex justify-center items-center rounded text-4xl ">{number}</h2>
                          <p className="text-black text-2xl font-bold">{title}</p>
                          <p className="text-base text-slate-800">{decs}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white">
            <TechnoStack />
          </section>
          <div className="bg-[#0F192E]">
            <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto ">
              <div className="flex flex-col justify-center lg:text-center">
                <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Why Choose Comfygen for <span className="text-[#B266C1]"> Metaverse NFT Marketplace</span>  Development?</h2>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-1">
                {Features.map((elem) => {
                  const { img, title, decs, url } = elem;
                  return (
                    <div className={`${styles.BenefitsCard1} border-2 border-[#3B82F6] p-6 space-y-4 bg-white rounded-[15px] relative`}>
                      <a href={url}>
                        <div className="flex items-center justify-start mb-5">
                          <Image
                            src={img}
                            className="object-cover flex justify-center items-center mx-auto" width={50} height={50}
                            alt={title}
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-[#3B82F6] text-center">{title}</h3>
                        <div className="text-center">
                          {decs}
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href='https://api.whatsapp.com/send?phone=919587867258' className='mt-5'>
                  <button className="shadow-2xl mt-5  relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                    Let's Communicate With IT Expert!
                  </button>
                </a>
              </div>
            </section>
          </div>
          <div className="bg-white">
            <section className="2xl:w-11/12 xl:w-11/12 lg:w-11/12 mx-auto w-11/12 py-20">
              <div className="flex flex-wrap">
                <div className="w-full mx-auto xl:w-11/12">
                  <div className="flex h-full items-center rounded-lg bg-[#16BDFA] p-10  text-white  text-left ">
                    <div className="space-y-2">
                      <h2 className="mb-6 text-3xl font-bold">
                        Do You Want to Know More about our Metaverse NFT Marketplace Development Services?
                      </h2>
                      <p className="">
                        If you want to learn more about our metaverse NFT marketplace development solutions, then you should consult with us right now. Choose your desired channel and have your first interaction with us right now.
                      </p>
                      <div className="pt-8">
                        <Link href="/contact-us" passHref={true}>
                          <button type="button"
                            className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                            data-te-ripple-init data-te-ripple-color="light">
                            Get in touch now.
                          </button>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="py-10">
         
            <section className="items-center space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto md:space-x-10 md:space-y-0 bg-[#070008]/50 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
  
          </section>
        </div>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title=""
        />

         <BlogSection initialData={initialData} />
      </div>
    </>
  );
}






export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?per_page=3`
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    return {
      props: { initialData: data },
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}
