import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptomlmsoftware.json"
import { BsArrowRight } from "react-icons/bs";
import { RiCustomerServiceLine } from "react-icons/ri";

import Link from "next/link";
const FaqSection = dynamic(() => import('../../../components/Newcomponet/SectionCompoent/Faq'), {
  loading: () => <p>Loading...</p>,
})
const ModusSection = dynamic(() => import('../../../components/Newcomponet/ad/ModusSectionNew'), {
  loading: () => <p>Loading...</p>,
})


const TalkExpert = dynamic(() => import('../../../components/Newcomponet/ad/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const WhyChoose = dynamic(() => import('../../../components/Newcomponet/ad/WhyChoose'), {
  loading: () => <p>Loading...</p>,
})

const HireSection = dynamic(() => import("../../../components/Newcomponet/ad/HireSection"), {
  loading: () => <p>Loading...</p>,
});

const productData = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "brand": {
    "@type": "Brand",
    "name": "Cryptocurrency MLM Software Development Company"
  },
  "description": "Comfygen focuses on creating Bitcoin MLM software and offers a blockchain-based solution to help you make passive income. Smart contracts based on well-known cryptocurrencies like Tron MLM software, Ethereum MLM software, BSC MLM software, SOL MLM software, and Matic MLM software are used by our MLM program.",
  "image": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  "name": "white label cryptocurrency MLM Software Company | Comfygen",
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.9"
      },
      "author": {
        "@type": "Person",
        "name": "Mr. Saddam Husen"
      }
    }],
  "offers": {
    "@type": "Offer",
    "url": "https://www.comfygen.com/cryptocurrency-mlm-software-development",
    "priceCurrency": "USD",
    "seller": {
      "@type": "Organization",
      "name": "Comfygen Private Limited"
    }
  }
};

const businessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "priceRange": "$20-$550",
  "image": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  "@id": "https://www.comfygen.com/cryptocurrency-mlm-software-development",
  "name": "Top Cryptocurrency MLM Software Development Company In India",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F-152, Dayanand Marg, Nemi Nagar,",
    "addressLocality": "Vaishali Nagar, Near D A V Centenary Public School",
    "addressRegion": "Jaipur, Rajasthan",
    "postalCode": "302021",
    "addressCountry": "IN"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Saddam Husen"
    }
  },
  "url": "https://www.comfygen.com/cryptocurrency-mlm-software-development",
  "telephone": "+91 9587867258, +1 5145659471"
};

const ldJsonData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.comfygen.com/cryptocurrency-mlm-software-development",
      "url": "https://www.comfygen.com/cryptocurrency-mlm-software-development",
      "name": "Cryptocurrency MLM Software Development Company | Comfygen",
      "isPartOf": {
        "@id": "https://www.comfygen.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://www.comfygen.com/cryptocurrency-mlm-software-development/#primaryimage"
      },
      "image": {
        "@id": "https://www.comfygen.com/cryptocurrency-mlm-software-development/#primaryimage"
      },
      "thumbnailUrl": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
      "dateModified": "2023-09-15T06:58:46+00:00",
      "description": "A top provider of cryptocurrency MLM software is Comfygen. We provide complete solutions for the development of cryptocurrency MLM software, including custom MLM software development, white-label cryptocurrency software development, and blockchain-based MLM software development services. Our skilled developers guarantee transparency, security, and effectiveness in managing MLM activities and commission payouts. Hire our bitcoin MLM software developers to design a solution specifically for your company.",
      "breadcrumb": {
        "@id": "https://www.comfygen.com/cryptocurrency-mlm-software-development/#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [
            "https://www.comfygen.com/cryptocurrency-mlm-software-development/"
          ]
        }
      ]
    },
    {
      "@type": "ImageObject",
      "inLanguage": "en-US",
      "@id": "https://www.comfygen.com/cryptocurrency-mlm-software-development/#primaryimage",
      "url": "https://www.comfygen.com/img/cryptocurrency-mlm-software-development-company.webp",
      "contentUrl": "https://www.comfygen.com/img/cryptocurrency-mlm-software-development-company.webp",
      "width": 365,
      "height": 250,
      "caption": "Best Cryptocurrency MLM Software Development Company | crypto based mlm software"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.comfygen.com/cryptocurrency-mlm-software-development/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.comfygen.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cryptocurrency MLM Software Development Company | Hire Cryptocurrency MLM Software Developers"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.comfygen.com/#website",
      "url": "https://www.comfygen.com/",
      "name": "Comfygen - Blockchain and Game AI Development Company",
      "description": "Simple | Secure | Successive",
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.comfygen.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "en-US"
    }
  ]
};


export default function Ecommerce(props) {

  let { initialData } = props;
  // useEffect(() => {
  //   $(window).on('scroll', function () {
  //     if ($(window).scrollTop() > 50) {
  //       $('.headered').addClass('active');
  //     } else {
  //       $('.headered').removeClass('active');
  //     }
  //   });
  // }, []);


  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      document.querySelector(".headered")?.classList.toggle("active", y > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Head>
        <title> Cryptocurrency MLM Software Development Company</title>
        <link rel="canonical" href="https://www.comfygen.com/cryptocurrency-mlm-software-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" Cryptocurrency MLM Software Development Company" />
        <meta property="og:description" content="We are an experienced Cryptocurrency MLM Software Development Companyoffering white label blockchain based MLM software development services.." />
        <meta property="og:url" content="https://www.comfygen.com/cryptocurrency-mlm-software-development" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-10-13T10:13:21+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />

        <meta name='description' content="Comfygen is Leading cryptocurrency MLM Software Development company in India and the USA. We offring white label blockchain based bitcoin mlm software on tron, ethereum, BSC, Matic and SOL. Our smart contract based MLM platform development solutions help you build Bitcoin MLM software with dapp smart contract. Contact us today!" />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Blockchain-Based Cryptocurrency MLM Software Development Company | Smart Contract Based MLM Software Development | Bitcoin MLM software | Comfygen Private Limited" />
        <meta property="og:facebook_description" content="We are a leading Blockchain-Based Cryptocurrency MLM Software Development Company | Smart Contract-Based MLM Software Development | Bitcoin MLM software development company from India for your business." />
        <meta property="og:twitter_title" content="Brilliant Crypto MLM Software development company in the USA, the UK, and India | We provide white-label blockchain-based Crypto MLM software solutions by Worldwide" />
        <meta property="og:twitter_description" content="Comfygen is the No. 1 best cryptocurrency mlm software development company in India offer smart contract-based crypto mlm software on Tron, Ethereum, BSC, Matic, and SOL services to startups and dealings Worldwide" />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='ES' />
        <meta name='abstract' content='Cryptocurrency MLM Software Development Industry' />
        <meta name='summary' content='Comfygen is the Leading World-class Cryptocurrency MLM Software Development Company in India, USA.' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a Cryptocurrency MLM Software Development Company, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='Cryptocurrency MLM Software Development Company' content='Comfygen is a leading White label Bitcoin MLM Software Development Company in the USA, UK, and India.' />
        <meta name='category' content='Cryptocurrency MLM Software Development Organisation' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Cryptocurrency MLM Software Development Firm in India' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:country-name' content='India, USA, UK, UAE' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='Cryptocurrency MLM Software Development Services Provider' />
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }} /> */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }} />
      </Head>
      <div className="overflow-hidden">
        {/* hero section */}
        <div
          className="bg-center bg-no-repeat bg-cover "
          style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">
            <div className="headered w-full py-5">
              <nav className="z-20 flex items-center justify-between w-full px-4 py-0 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:px-0 ">
                <Image src="https://www.comfygen.com/media/svg/comfygen-logo.svg" alt="comfygen-logo" width={244} height={51} priority />
                <div className={"xl:flex hidden  xl:w-auto w-full items-center text-white px-6 "}>
                  <div className="block space-x-4 text-sm font-medium 2xl:space-x-4 lg:flex lg:items-center lg:space-y-0 lg:p-0">
                    <Link href="/quote" passHref={true}>
                      <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded-full px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                        Get a Quote
                      </span>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
            <div className="md:py-28 py-16">
              <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:flex-row md:items-center lg:space-x-20 lg:space-y-0">
                <div className="w-full lg:pt-0 pt-10">
                  <div className="space-y-6">
                    <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Cryptocurrency MLM Software Development Company
                    </h1>
                    <p className="w-full mx-auto text-sm font-light text-white/80 lg:text-base">
                      Comfygen is a leading Cryptocurrency MLM Software Development Company builds reliable and standardized bitcoin on the technologies, such as Trone MLM Software, Etheruem MLM Software, Solana MLM Software, Binance MLM Software and Polygon blockchain MLM Software with highly secured mechanisms used. Our Crypto MLM Software enables for tamper-proof calculations and automated transactions without any human-errors made in the backend functions. Our expert cryptocurrency-based developers can efficiently manage the MLM business seamlessly
                    </p>
                  </div>
                  <div className="py-10">
                    <Link href='/contact-us' passHref={true}>
                      <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer   bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white overflow-hidden">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                        <span className="relative">Discuss Now</span>
                        <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="py-10 lg:flex hidden">
                  <Image src='https://www.comfygen.com/img/img/cryptocurrency-mlm-software-development.webp' alt="abc" width={578} height={557} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:py-10 bg-gray-100">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="https://www.comfygen.com/img/accelerate-yor-earning-with-blockchain-mlm-software-technology.webp"
                alt=" Accelerate Your Earnings with Blockchain MLM Software Technology "
                className="rounded-lg"
                width={600}
                height={600}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Accelerate Your Earnings with Blockchain MLM Software Technology
              </h2>
              <div className="space-y-2">
                <p className="text-base text-black text-justify">Multi-Level Marketing is a source to boost up clientele business to far beyond success. All you need to do is to perform marketing strategically. The modernisation, new technologies, latest trends, and unique marketing ways; putting all together can expand the business with constant productive actions. We are the one platform for all clients to provide best white label blockchain based MLM software development solutions with the integration of BTC and ETH cryptocurrencies into your MLM businesses. </p>
                <p className="text-base text-black text-justify">
                  MLM strategies are made to increase business productivity and sales. The Crypto-based MLM Software Development Companies are making extraordinary turnovers with the help of cryptocurrency integrations in their business model. These businesses are building opportunities for the distributors to make regular revenue according to their production basis.</p>
                <p className="text-base text-black text-justify">Do you want your business to take the chance of implementing crypto-MLM Strategies? Comfygen is #No1 Crypto-based MLM Software Development Company enabling the business to gain maximum values with clarifications and transparency.  </p>
              </div>
              <div className="flex justify-start items-center p-4 space-x-6 bg-white rounded-lg">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <RiCustomerServiceLine className=" text-[2.5rem] lg:text-[3.5rem] text-blue-500 " />
                </div>
                <div className="">
                  <h3 className="text-[#0E1F51] text-lg font-bold ">
                    Get Instant Professional Advice
                  </h3>
                  <p className="text-sm">
                    Ready to Help :
                    <span className="font-bold text-blue-600"><a href="tel:9587867258"> +91 9587867258</a></span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <ContactFromCenter /> */}
        {/* services */}
        <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
          <div className="space-y-6">
            <div className="flex flex-col justify-center text-center">
              <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                Smart Contract Based   <span className="text-blue-600">Cryptocurrency MLM Software Development </span>  Services
              </h2>
              <p className="text-base text-slate-800">Choose our productive Crypto MLM Software Development Services to chase futuristic profitable business model-</p>
            </div>
            <div className="grid gap-16 lg:grid-cols-3 py-10 md:grid-cols-2 xl:gap-12">
              {
                JSON_DATA.Services.map((elem) => {
                  const { title, img, decs, num } = elem;
                  return (
                    <div key={num} className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200">
                      <div className="space-y-4">
                        <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                          <Image width={100} height={100} src={img} alt={title} title={title} className="w-16" />
                        </div>
                        <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">{title}</h3>
                        <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">{decs}</p>
                      </div>
                    </div>
                  )
                })
              }
              <div className="p-6 space-y-4 bg-white border rounded-xl group hover:bg-orange-100 transition-all duration-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-orange-100 group-hover:bg-white rounded-full bg-gradient-to-t">
                    <Image width={100} height={100} src="https://www.comfygen.com/img/24-7-client-support.webp" alt="" className="w-16" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">Have a Query?</h3>
                  <p className="font-medium text-left text-black break-all transition duration-200 ease-in-out">Ready to take action? Let's tackle your query together! </p>
                  <a href="/contact-us" className="flex justify-center items-center  pt-6">
                    <button className="shadow-sm transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-orange-100 group-hover:bg-white rounded cursor-pointer text-black  group">
                      Contact Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="py-10 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center">
                <h2 className=" py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]  ">
                  Types of<span className="text-blue-600"> MLM Software</span>
                </h2>
                <p className="text-base text-slate-800">Clients can select one certain MLM Software according to the requirements. Select one from the displayed below-
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
                {JSON_DATA.MLM.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div key={num} className="p-4 relative bg-slate-100 rounded-[17px] space-y-6 ">
                      <div className="space-y-2">
                        <h3 className="text-lg  text-[#0E1F51] font-semibold group-hover:text-white">
                          {title}
                        </h3>
                        <div className="flex justify-start space-x-2">
                          <div className="w-10 h-1 rounded-full bg-blue-500 "></div>
                          <div className="w-6 h-1 rounded-full bg-blue-500 "></div>
                        </div>
                      </div>
                      <p className=" text-[#000000] group-hover:text-white/90">
                        {decs}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col justify-center lg:text-center  space-y-4 shadow-lg border p-6">
              <p className="text-base text-slate-800">Ready to revolutionize your cryptocurrency MLM software development? Transform your vision into reality by partnering with Comfygen's cutting-edge technology and expertise.</p>
              <div>
                <Link href="/contact-us" passHref={true}>
                  <button className=" bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] hover:bg-white text-white hover:text-black border shadow rounded-lg  px-10  transition-all duration-500 ease-in py-5 lg:text-2xl text-lg">Let's Communicate With Crypto MLM Expert!</button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4">
          <div className="flex flex-col justify-center mx-auto text-center">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Features of Cryptocurrency MLM Software
            </h2>
            <p className="text-base text-slate-800">To make your Crypto MLM Software agile and highly productive, must add some features shown right below by our expert expert blockchain developers- </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-2 md:grid-cols-2">
            {
              JSON_DATA.CryptoFeatures.map((elem) => {
                const { title, num, decs, } = elem;
                return (
                  <div key={num} className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]">
                    <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{title}</p>
                    <p className="text-base text-slate-800">{decs}</p>
                  </div>
                )
              })
            }
            <div className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA] flex flex-col justify-center items-center text-center">
              <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold"></p>
              <p className="text-base text-slate-800">Get a quote and take the first step toward your dream cryptocurrency mlm development services</p>
              <div>
                <Link href="/quote" passHref={true}>
                  <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative w-40">
                    Get a Quote
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ModusSection Modus={JSON_DATA.Modus} ModusOperandi={JSON_DATA.ModusOperandi} />
        <div className="lg:flex items-center text-center justify-center lg:space-x-10 space-x-0 space-y-4 lg:space-y-0">
          <p className="text-2xl font-bold">Require More Information?</p>
          <div>
            <Link href='https://api.whatsapp.com/send?phone=919587867258' passHref={true}>
              <span className="block text-base font-medium  active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white  w-60 mx-auto lg:mt-0  cursor-pointer transition duration-300 relative">
                Discuss Our Team
              </span>
            </Link>
          </div>
        </div>
        <section className="lg:py-10 py-4 bg-white">
          <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
            <div className="flex flex-col justify-center items-center mx-auto">
              <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
                Latest technologies Implementation in Crypto MLM Software
              </h2>
              <p className="text-base text-slate-800 text-center">Comfygen believes in building products that match currency market standards and tech trends. The blockchain developers urges to create something really impressive with futuristic approaches.</p>
            </div>
            <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
              {
                JSON_DATA.LatestTechno.map(cryptomlmsoftware => {
                  return (
                    <div key={cryptomlmsoftware.num} className="border p-3 space-y-2 shadow transition-all hover:scale-105 duration-700 hover:bg-sky-100">
                      <div className="space-y-2">
                        <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{cryptomlmsoftware.title}</h3>
                        <p className="text-base text-slate-800">{cryptomlmsoftware.decs}</p>
                      </div>
                    </div>

                  );
                })
              }
            </div>
          </div>
        </section>
        <WhyChoose Whychoose={JSON_DATA.Whychoose} Bestchoice={JSON_DATA.Bestchoice} />
        <TalkExpert />
        <section className="py-10">
          <div className="bg-center bg-no-repeat bg-cover lg:py-20 py-10 relative">
            <Image
              src="https://www.comfygen.com/img/hire-crypto-developers-to-develop-cutting-edge-mlm-software.webp"
              alt="Image Description"
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              loading="lazy"
            />
            <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#000]/80 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
              <HireSection Hire={JSON_DATA.Hire} myList={JSON_DATA.myList} />
            </section>
          </div>
        </section>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Crypto MLM Software Development Services" />
      </div >
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
