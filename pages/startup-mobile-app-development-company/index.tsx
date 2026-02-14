import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import dynamic from 'next/dynamic';
import styles from './styles.module.css'
import JSON_DATA from "./json/mobile.json"
import LazyLoad from 'react-lazy-load';

import HeroSectionForm from '../../components/Newcomponet/SectionCompoent/HeroSectionForm';
import Header from '../../components/Newcomponet/layout/Header';
import ContactUsButton from '../../components/Newcomponet/SectionCompoent/ContactUsButton';

const TalkExpert = dynamic(() => import('../../components/Newcomponet/SectionCompoent/TalkExpert'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const FaqMobile = dynamic(() => import('./components/FaqMobile'), {
  loading: () => <p>Loading...</p>,
})

const HireSection = dynamic(() => import('./components/HireSection'), {
  loading: () => <p>Loading...</p>,
})

const AdviceSection = dynamic(() => import('../../components/Newcomponet/SectionCompoent/Advice'), {
  loading: () => <p>Loading...</p>,
})

const TechnoStack = dynamic(() => import('./components/TechnoStack'), {
  loading: () => <p>Loading...</p>,
})

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


const BreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Books",
    "item": "https://example.com/books"
  }]
};
const ldJson = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Top Mobile App Development Company In India | Comfygen",
  "url": "https://www.comfygen.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "{search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Comfygen",
  "url": "https://www.comfygen.com/",
  "logo": "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  "sameAs": [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen"
  ]
};
const ProductSchema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  "brand": "Comfygen",
  "name": "Mobile App Development Agency - Mobile Application Development Company",
  "image": "https://comfygen.com/img/explore-success-with-our-mobile-app-development-agency.webp",
  "description": "Comfygen is a top mobile application development company. We provide the best Mobile application development services and custom mobile app development services to enterprises & startups worldwide.",
  "aggregateRating": {
    "@type": "aggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1124"
  }
};

export default function Mobile(props) {

  let { initialData } = props;
  let { Solution, AppService, Hire, myList, Plateform, AppProcess, TechTrends, VariousDomains, Why, Choose } = JSON_DATA;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Head>
        <title>Top-notch Mobile App Development Company in India | Comfygen</title>
        <meta property="og:title" content="Top-notch Mobile App Development Company in India | Comfygen" />
        <meta name='description' content='Comfygen is a leading best mobile application development agency in India, that offers iPhone/iOS ap development and Android app development services from startup to enterprise-level company. Contact Us today! ' />
        <link rel='canonical' href='https://www.comfygen.com/mobile-app-development' />
        <meta name='robots' content='index,follow' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Mobile App Development Services | Best App Development Company" />
        <meta property="og:facebook_description" content="Unlock your business's global potential with our expert mobile app developers, delivering custom, user-friendly solutions to elevate your brand's presence in the marketplace." />
        <meta property="og:twitter_title" content="Best Mobile App Development Agency India & USA | Comfygen" />
        <meta property="og:twitter_description" content="Comfygen, a Best mobile application development company in India, UK, UAE & USA that offers iPhone/iOS, Android app development services from startup to enterprise level company." />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta name='language' content='ES' />
        <meta name='abstract' content=' Mobile App Development Company in India' />
        <meta name='summary' content='Comfygen is the top mobile app development Industry in India.' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a mobile application development agency, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name='Mobile Application Development Company' content='Comfygen is a top-notch Mobile app development organization in the USA. Get ahead of the competition with the top mobile app development company In India. Our expert team can bring your ideas to Business Goal.' />
        <meta name='category' content='Mobile App Development Company in India' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Mobile App Development Organization' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:country-name' content='India, USA, UK, UAE' />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />
        <meta property='og:type' content='Mobile App Development Company In India' />
        <meta name="google-site-verification" content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org/", "@type": "WebSite", "name": "Top Mobile App Development Company in India | Comfygen", "url": "https://www.comfygen.com/", "potentialAction": { "@type": "SearchAction", "target": "{search_term_string}", "query-input": "required name=search_term_string" } }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
            "areaServed": ["US", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "IN", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
            "sameAs": [
              "https://twitter.com/comfygentech",
              "https://www.instagram.com/comfygen_/?hl=en",
              "https://www.linkedin.com/company/comfygen-private-limited",
              "https://www.facebook.com/comfygen"
            ]
          })
        }} />
      </Head>
      <div className="">
        <Header />


        <div className="lg:pt-[130px] py-5 bg-gradient-to-br from-[#4A63D9] to-[#4F46E5]">
          <HeroSectionForm
            heading='StartUp Mobile App Development Company'
            ptag='Build an innovative and revenue generating mobile app for startup with Comfygen. We are the top-notch startup mobile app development company in India leveraging the emerging businesses to build scalable mobile apps for their startups using cutting edge technologies and modern new practices. Our mobile app developers are evolving with time, and using trending technologies, such as AR/VR, Blockchain, Cyber Security, Gamifications, Metaverse for seamless user experience and vast traction. '
            ptag1="We promise the startup mobile app development to pitch targeted audiences and beat the competitors. Consult now to generate innovative ideas and transform them in real."
            btnName="Discuss Now"
            btnLink='/contact-us'
          />
        </div>



        <AdviceSection
          heading='Transform the Startup Ideas into Monetized App Solutions'
          ptag='Comfygen never fails satisfying the clientele needs, as we have the team of expert mobile developers for startups, who evolve with time in a tech-savvy environment.'
          ptag1="We develop mobile apps for startups fulfilling the tailored needs and requirements of the clients to grow their business. wWe use cutting edge technologies, as well as implement modern technologies to make the app solution more engaging. Trust on our experienced resources, we will build impeccable startup app solutions for you to establish good recognition in the marketplace."
          ptag2="Priorly to this, our app development team has given mobile app development consultancies to the startups, and today they have built a good business with the help of innovative ideas and our expertise."
          ptag3="Be ready to create an engaging and market demanding mobile application for your startup business to fetch vast tractions from the audience. Foremost, it is suggestive to consult, it is our promise you will get more clarifications and assurance on your ideas."
          imgSrc='https://www.comfygen.com/img/explore-success-with-our-mobile-app-development-agency.webp'
          imgW={564}
          imgH={559}
          altTag='Explore Success with Our Mobile App Development Agency'
        />
        {/* {loaded && <> */}


        <div className='bg-[#162d42]'>
          <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-16">
            <div className="space-y-4 text-center ">
              <h2 className="text-4xl font-bold text-[#fff] ">Our Startup App Development Services</h2>
              <p className={`${styles.textbg}  text-base text-white`} >We are a renowned mobile app development company for startups to convert your ideology concepts into realistic revenue-generating app solutions. Be it the application to resolve any problem, serve end-users with services, create innovative apps for engagement - We won’t fail delivering end-to-end impeccable app solutions.  </p>
            </div>
            <div className="grid gap-16 pt-8 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
              {AppService.map((elem) => {
                const { title, img, decs, num } = elem;
                return (
                  <div key={num} className="p-6 space-y-4 bg-white border rounded-xl group  transition-all duration-200">
                    <div className="flex items-center justify-center w-16 h-16 p-3 text-xl font-semibold bg-[#162d42]  rounded-full bg-gradient-to-t">
                      <Image width={100} height={100} src={img} alt={title} title={title} className="w-16" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200 text-left">{title}</h3>
                    <p className="font-medium text-left text-black transition duration-200 ease-in-out">{decs}</p>
                  </div>)
              })}
            </div>
          </section>
        </div>
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-6 bg-white">
          <div className="flex flex-col justify-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Modern Tech Trends We Use
            </h2>
            <p className="text-base text-slate-800 md:text-center text-justify tracking-tight">First and foremost, our team of professionals creates excellent apps for startups and makes sure they run incredibly effectively. We ensure perfection at every stage by utilizing the newest tools and techniques. </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {Plateform.map((elem) => {
              const { tittle, decs, num, img, url } = elem;
              return (
                <div key={num} className="shadow-xl">
                  <a href={url} title={tittle}>
                    <div className="flex items-center justify-start px-4 py-3 space-x-3  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]" >
                      <div className="flex items-center justify-center h-14 w-14 bg-white rounded shadow-md">
                        <Image className="rounded-md" alt={tittle} src={img} height={512} width={512} loader={uploadcareLoader} unoptimized={true} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {tittle}
                      </h3>
                    </div>
                    <div className="px-4 py-4 ">
                      <p className="px-4 py-4 text-black text-justify">{decs}</p>
                    </div>
                  </a>
                </div>);
            })}
          </div>
        </div>
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 py-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Mobile App Development Process
            </h2>
            <p>Comfygen follows proven process of app development to leverage businesses with great user-retention:</p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {AppProcess.map((elem) => {
              const { title, num, decs, } = elem;
              return (
                <div key={num} className="border p-3 space-y-2 shadow border-l-[16px] rounded-l-2xl border-[#16BDFA]">
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{title}</p>
                  <p className="text-base text-slate-800">{decs}</p>
                </div>)
            })}
          </div>
        </div>
        <TechnoStack />
        <section className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center lg:text-center">
            <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              Latest Tech Trends  <span className="text-blue-500"> Involved for Mobile Application</span> Development</h2>
            <p className='text-base text-slate-800'>Comfygen believes in providing a futuristic approach to digital solutions. We do not only think of today, but we want our applications to be sustained in the next-gen market. Here are the emerging technologies we follow to sustain values and fit into forward-thinking marketplace thoughts. </p>
          </div>
          <div className="grid gap-10 py-10 text-left lg:grid-cols-3  xl:gap-16">
            {TechTrends.map((elem) => {
              const { title, stack, num } = elem;
              return (
                <div key={num} className={`${styles.letter} space-y-4`}>
                  <div className='shadow-lg p-2 border rounded'>
                    <h3 className="text-[#0E1F51] text-xl font-bold">{title}</h3>
                  </div>
                  <div className="space-y-2">
                    <p>{stack} </p>
                  </div>
                </div>);
            })}
          </div>
          <div className="flex justify-center items-center">
            <ContactUsButton url={'https://api.whatsapp.com/send?phone=919587867258'} title={"Let's Communicate With IT Expert!"} />
          </div>
        </section>

        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="flex flex-col justify-center items-center text-center mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
              Experience Digitization Across the Globe in Various Domains
            </h2>
            <p className="text-base text-slate-800">Our experienced and talented mobile app developers have years of experience in the stream. They have extensive experience, in which we covered various domains and complexities, and conquered the challenges of building mind-blowing mobile applications. Know a few industries, where we gained victory with iOS and Android App Development:  </p>
          </div>
          <div className="grid  gap-10 md:grid-cols-2 grid-cols-1">
            {VariousDomains.map(mobile => {
              return (
                <div key={mobile.num} className="border p-3 space-y-2 shadow">
                  <p className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-xl font-semibold">{mobile.title}</p>
                  <p className="text-base text-slate-800">{mobile.decs}</p>
                </div>);
            })}
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Link href='/contact-us' passHref={true}>
            <button className="shadow-lg transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
              Want To Get The Best Solution? Connect Us
            </button>
          </Link>
        </div>

        <section className="w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:py-10 py-4 bg-white">
          <div className="w-full flex flex-col justify-center items-center text-center space-y-2">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">{Why?.title}</h2>
            <p className="text-base text-slate-800">{Why?.decs}</p>
          </div>
          <div className="grid  gap-10 md:grid-cols-2 grid-cols-1">
            {Choose.map((elem: any) => {
              const { title, decs, num, img } = elem;
              return (
                <div key={num} className="p-4 rounded-lg border-2 border-dashed hover:border-solid  border-[#121212] space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center ">
                      <Image src={img} alt={title} width="60" height="60" />
                    </div>
                    <h3 className="text-base font-bold text-black">{title}</h3>
                  </div>
                  <div>
                    <p>{decs}</p>
                  </div>
                </div>);
            })}
          </div>
        </section>
        <section className="items-center w-full py-10 space-y-0 md:flex md:space-x-10 md:space-y-0 lg:py-10">
          <div className={`${styles.mobileappsolution} w-full lazyload`}>
            <div className="bg-gradient-to-l from-[#6DA5FF]/70 to-[#7B55EA]/90  flex flex-col-reverse lg:flex-row w-full  ">
              <div className="flex flex-col justify-start w-11/12 py-10  space-y-10 text-start 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
                <div className='space-y-6' >
                  <h2 className="text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Mobile App Solution For Diffrent Industries</h2>
                  <p className="space-y-0 text-base text-white md:text-xl ">It doesn’t matter under which niche your project falls, from startups to enterprises we have experience in delivering robust mobile application solutions for a wide range of clients across  multiple industries.</p>
                </div>
                <div className='grid grid-cols-2 gap-4 py-5 lg:grid-cols-4 md:grid-cols-3 '>
                  {Solution.map(mobile => {
                    return (
                      <div key={mobile.num} className='flex items-center p-4 transition-all duration-200 rounded-lg bg-slate-100 hover:bg-gray-100'>
                        <a href={mobile.url} title={mobile.title}>
                          <div className="items-center justify-start space-y-2 md:flex md:space-x-2 md:space-y-0 ">
                            <div className='md:bg-white md:p-2 md:rounded-lg'>
                              <Image title={mobile.title} alt={mobile.title}
                                src={mobile.img} height={50} width={50} />
                            </div>
                            <p className='py-4 text-lg font-semibold text-gray-800 '>{mobile.title}</p>
                          </div>
                        </a>
                      </div>);
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <TalkExpert />
        <div className={`${styles.hireimage} lg:py-20 py-10 lazyload`}>
          <section className="items-center w-11/12 mx-auto space-y-10 md:flex 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:space-x-10 md:space-y-0 bg-[#0F4687]/70 backdrop-blur-md lg:p-20 p-8 rounded-[40px]">
            <HireSection Hire={Hire} myList={myList} />
          </section>
        </div>
        <FaqMobile />


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
