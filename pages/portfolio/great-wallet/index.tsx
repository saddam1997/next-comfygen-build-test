import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Link from 'next/link';
import styles from './styles.module.css'
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./great-wallet.json"
import { BsArrowRight } from 'react-icons/bs';

import Header from '../../../components/Newcomponet/layout/Header';
const TechnologyStack = dynamic(() => import('../../../components/Newcomponet/portfolio/TechnologyStack'), {
  loading: () => <p>Loading...</p>,
})

export default function about(props) {

  let { initialData } = props;

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Great Wallet App - Secure Crypto Wallet Development</title>
        <link rel="canonical" href="https://www.comfygen.com/portfolio/great-wallet" />
        <meta
          name="description"
          content="Great Wallet App is a next-gen crypto wallet built on the GREAT Blockchain, enabling secure and seamless management of digital assets. Experience decentralized, efficient, and reliable crypto transactions."
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
      <div className="overflow-hidden lg:pt-[50px]" >

        <div className={`${styles.herobg} `} >
          <div className='  w-full bg-[length:20rem_auto] bg-no-repeat bg-right-bottom' style={{ backgroundImage: `url("https://www.comfygen.com/img/B.svg")` }}>
            <div className=" bg-[#1B1C30CC]/20">
              <Header />
              <div className="flex  justify-center items-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  py-8">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Great Wallet Application
                    </h1>
                    <p className="text-white text-base">Great Wallet is an innovative IOS wallet designed to seamlessly integrate with the Great Crypto Network (GREAT Blockchain). As part of the Global Real Economic Asset Transformation Crypto Network, this decentralized blockchain model is tailored to facilitate the digital transformation of global economic governance and operations in the era of the fourth industrial revolution. The vision is to establish a large-scale economic blockchain ecosystem infused with machine learning and artificial intelligence, implementing macroeconomic theories to drive sustainable, equitable, and transparent economic growth worldwide.
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
                <p><span className='text-lg font-bold'>Decentralized Governance:  </span> ZGreat Wallet empowers users by providing access to a decentralized economic blockchain, ensuring governance that is transparent and inclusive.
                </p>
                <p><span className='text-lg	 font-bold'>Global Economic Transformation: </span> Facilitating economic growth on a global scale by implementing the principles of the Basic Labor Value Theory (GREAT) outlined by Macro Economic Doctor Philip Vo.</p>
                <p><span className='text-lg	 font-bold'>MSecure and User-Friendly: </span> Great Wallet prioritizes security while delivering a user-friendly experience, making it accessible to a wide range of users.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="https://www.comfygen.com/img/Business-Benefits-great-wallet.webp" className="rounded-lg" loader={uploadcareLoader} unoptimized={true} width={800} height={800} alt="Business Benefits great wallet" />
              </div>
            </div>
          </section>
        </div>
        <div className={`${styles.herobg} , md:py-10 py-6`} >

          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="https://www.comfygen.com/img/features-great-wallet.webp"
                alt="Features Great Wallet"
                className="rounded-lg"
                width={800}
                height={800}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                Features
              </h2>
              <p className='text-[#fff] text-white-800'><span className='text-xl font-bold'>Seamless Integration with GREAT Blockchain:</span> The primary challenge was to seamlessly integrate the wallet with the GREAT Blockchain to enable efficient and secure transactions within the decentralized ecosystem.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>User-Friendly Interface: </span> Designing an intuitive and user-friendly interface to encourage adoption by users with varying levels of technical expertise.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Scalability:  </span> Addressing the challenge of scalability to accommodate the growing user base and transaction volume on the GREAT Blockchain.</p>

            </div>
          </section>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 mt-8">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                The Challenge
              </h2>
              <p className='text-[#fff] text-white-800'>Creating a seamless and secure Android wallet that not only meets traditional financial needs but also integrates features promoting global citizenship and cooperation.</p>

            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
              <Image
                src="https://www.comfygen.com/img/challenges-great-wallet.webp"
                alt=" Challenge"
                className="rounded-lg"
                width={400}
                height={400}
              />
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
            <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
              Solution
            </h2>
            <p className='text-base text-slate-800'>Great Wallet successfully overcame these challenges by: </p>
            <p className='text-base text-slate-800'>Establishing a robust integration framework with the GREAT Blockchain, ensuring secure and swift transactions.</p>
            <p className='text-base text-slate-800'>Implementing a user-centric design, focusing on simplicity and accessibility to encourage widespread adoption.</p>
            <p className='text-base text-slate-800'>Incorporating advanced scalability measures to handle the increasing demands of the decentralized ecosystem.</p>
          </div>
        </section>

        <div className={`${styles.herobg} , py-20`}>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full ">
              <Image src="https://www.comfygen.com/img/tools-technologies-great-wallet.webp" alt="Tools Technologies" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={800} height={600} />
            </div>
            <div className='space-y-2 w-full'>
              <h3 className='text-4xl font-bold text-white' >Tools & Technologies</h3>
              <p className='text-[#fff] text-white-800'>The GCN project leveraged a range of tools and technologies to bring the vision to life:
              </p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Blockchain Technology: </span>Utilizing the GREAT Blockchain for decentralized and secure transactions.</p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>IOS Development: </span> Leveraging IOS development tools to create a seamless and user-friendly wallet application.</p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Machine Learning and AI Programs: </span> Integrating machine learning and artificial intelligence programs to enhance the wallet's functionality and contribute to the macroeconomic theories driving the GREAT Blockchain.</p>
            </div>
          </section>
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