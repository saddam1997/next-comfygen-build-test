import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import styles from './styles.module.css'
import 'aos/dist/aos.css';
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./gcn-evm-base.json"
import { BsArrowRight } from 'react-icons/bs';
import TechnologyStack from '../technology-stack/TechnologyStack';
const Header = dynamic(() => import('../../components/Header'), {
  loading: () => <p>Loading...</p>,
})

export default function about(props) {
  let { initialData } = props;
  return (
    <div className='overflow-hidden'>
      <Head>
        <title> Great Crypto Network : Comfygen is  a App and Web Development Company </title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="Comfygen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" About comfygen.com a App and Web Development Company " />
        <meta property="og:description" content="Comfygen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs." />
        <meta property="og:url" content="https://www.comfygen.com/about-us" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
      </Head>

      <div className="overflow-hidden" >
        <div className={`${styles.herobg} `} >
          <div className='  w-full bg-[length:20rem_auto] bg-no-repeat bg-right-bottom' style={{ backgroundImage: `url("https://www.comfygen.com/img/B.svg")` }}>
            <div className=" bg-[#1e293bd1]/50">
              <Header />
              <div className="flex  justify-center items-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  py-8">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-[#f77504] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      GCN (EVM Base)
                    </h1>
                    <p className="text-white text-base">The GCN project aims to revolutionize the world of cryptocurrency by introducing a cutting-edge Crypto Currency Wallet based on the Ethereum Virtual Machine (EVM). The vision is to provide users with a secure, efficient, and user-friendly platform for managing their digital assets, leveraging the power and flexibility of EVM technology.
                    </p>
                    <div className="py-4">
                      <Link href="/contact-us" passHref={true}>
                        <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center shadow-xl cursor-pointer bg-[#fff] text-slate-800 overflow-hidden">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-[#D0FFDA] rounded-full group-hover:w-60 group-hover:h-60 "></span>
                          <span className="relative"> Let's Discuss</span>
                          <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center md:py-0 ">
                  <Image className="object-cover " src="https://www.comfygen.com/img/hero-great-wallet.webp" width={600} height={300} alt=' hero great wallet' loading="eager" priority />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <section className=" h-full w-11/12 mx-auto space-y-0 2xl:w-4/6 xl:w-5/6 lg:space-y-10">
            <div className="items-center space-y-10 md:flex md:space-y-0 md:space-x-10 w-full">
              <div className="w-full space-y-6 text-center md:text-left">
                <h2 className=" text-slate-900 xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Business Benefits</h2>
                <p><span className='text-lg font-bold'>Enhanced Security: </span> Utilizing the EVM ensures a robust security infrastructure, safeguarding user assets against potential threats.
                </p>
                <p><span className='text-lg	 font-bold'>Interoperability: </span> The wallet allows users to interact seamlessly with various decentralized applications (DApps) on the Ethereum blockchain.</p>
                <p><span className='text-lg	 font-bold'>User-Friendly Interface:  </span> An intuitive and easy-to-navigate interface enhances user experience, making it accessible to both novice and experienced cryptocurrency enthusiasts.</p>
                <p><span className='text-lg	 font-bold'>Efficient Transaction Processing: </span> Leveraging the capabilities of EVM facilitates faster and more cost-effective transactions, contributing to an improved overall user experience.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="https://www.comfygen.com/img/Business-Benefits-great-wallet.webp" className="rounded-lg" loader={uploadcareLoader} unoptimized={true} width={800} height={800} alt="Business Benefits great wallet" />
              </div>
            </div>
          </section>
        </div>

        <div className="bg-[#F3420C] md:py-10 py-6" >
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]"> Features </h2>
              <p className='text-[#fff] text-white-800'><span className='text-xl font-bold'>Multi-Currency Support: </span> The wallet supports a variety of cryptocurrencies, providing users with a comprehensive digital asset management solution.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Smart Contract Integration: </span> Seamless integration with smart contracts allows users to engage in complex transactions and execute automated agreements.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Cross-Platform Compatibility:  </span> The wallet is designed to be compatible across various platforms, including web and mobile devices.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Real-time Market Data: </span> Users have access to up-to-date market information, empowering them to make informed investment decisions.</p>
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                Challenges:
              </h2>
              <p className='text-[#fff] text-white-800'>Developing a secure and scalable EVM-based cryptocurrency wallet posed challenges in terms of ensuring robust security measures, optimizing transaction speeds, and addressing interoperability issues with the broader Ethereum ecosystem.
              </p>
            </div>
          </section>
        </div>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="https://www.comfygen.com/img/solution-great-wallet.webp"
              alt="Experts to Build and Manage Decentralised Solutions"
              className="rounded-lg"
              width={800}
              height={800}
            />
          </div>
          <div className="w-full space-y-4 text-center md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Solution</h2>
            <p className='text-base text-slate-800'>The development team implemented a multi-faceted solution to overcome challenges: </p>
            <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Enhanced Security Protocols: </span> Implementation of advanced encryption and security measures to safeguard user assets and private information.</p>
            <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Optimized Transaction Processing: </span> Utilizing techniques to enhance transaction speeds and reduce fees associated with transactions on the Ethereum blockchain.</p>
            <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Interoperability Solutions: </span>Ensuring seamless integration with various decentralized applications and smart contracts through meticulous testing and protocol adherence.</p>
            <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>User-Centric Design:</span> Prioritizing a user-friendly interface and incorporating user feedback during development to create an intuitive and engaging platform.</p>
          </div>
        </section>

        <div className={`${styles.herobg} `}>
          <div className='bg-[#1E293B]/60 py-20'>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className='space-y-2 w-full'>
                <h3 className='text-4xl font-bold text-white' >Tools & Technologies</h3>
                <p className="text-[#fff] text-white-800">The GCN project leveraged a range of tools and technologies to bring the vision to life:</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Solidity:</span> The primary programming language for developing smart contracts on the Ethereum blockchain.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Web3.js:</span> Facilitating interaction with the Ethereum blockchain, enabling seamless integration of the wallet with the broader ecosystem.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>ReactJS: </span>  Powering the user interface with a dynamic and responsive design.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>IPFS (InterPlanetary File System):  </span> Employed for decentralized and secure storage of certain data to enhance privacy and security.</p>
              </div>
              <div className="flex justify-center w-full ">
                <Image src="https://www.comfygen.com/img/tools-technologies-great-wallet.webp" alt="Tools Technologies" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={800} height={600} />
              </div>
            </section>
          </div>
        </div>

        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='p-4 bg-gray-200 rounded-t-md col-span-8'>
              <Image src="https://www.comfygen.com/img/footer-image-great-wallet.webp" alt='' width={989} height={742} className='w-full' />
            </div>
          </div>
        </div>
        <TechnologyStack />
      </div>
    </div>
  )
}
export async function getServerSideProps({ req, res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}