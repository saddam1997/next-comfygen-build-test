import Image from 'next/image';

import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

import Header from '../../../components/Newcomponet/layout/Header';
const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const TechnologyStack = dynamic(() => import("../../../components/Newcomponet/portfolio/TechnologyStack"),
  { loading: loader, ssr: true }
);
const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);





export default function about(props: any) {
  let { initialData } = props;


  return (
    <div className='overflow-hidden'>
      <Head>
        <title> Comfygen mlm Software Development details : Comfygen is  a App and Web Development Company </title>
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
      <div className="overflow-hidden ">
        <div className="bg-top bg-no-repeat bg-cover bg-gradient-to-r from-[#5E63C7] via-[#7C80D8] to-[#B6B8DD]"
         >
          <div className="">
            <Header />
            <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center md:space-x-20 lg:py-16 py-5 pt-20">
              <div className="w-full">
                <div className="space-y-6">
                  <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                    Comfygen MLM Software
                  </h1>
                  <p className="text-white text-base">
                    Comfygen MLM software is a multi-level marketing software solution designed for network marketing companies to manage and streamline their operations.
                  </p>
                </div>
                <div className="py-10">
                  <Link href="/contact-us" passHref={true}>
                    <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer   bg-white text-slate-800 hover:text-white overflow-hidden">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-[#5056C9] rounded-full group-hover:w-60 group-hover:h-60"></span>
                      <span className="relative"> Let's Discuss</span>
                      <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hidden w-full md:flex justify-center md:py-0 py-10">
                <Image className="object-cover " src="https://www.comfygen.com/img/comfygen-mlm-software-detail.webp" width={760} height={484} alt=' Efincap MLM Software' loading="eager" priority />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10  bg-no-repeat bg-cover bg-bottom bg-gradient-to-br from-indigo-50 via-indigo-100 to-slate-100" >
          <section className="w-11/12 mx-auto space-y-0 2xl:w-4/6 xl:w-5/6 lg:space-y-10">
            <div className="items-center py-4 space-y-10 md:flex md:space-y-0 md:space-x-10 lg:py-10">
              <div className="flex justify-center md:w-[60%] w-full md:justify-start ">
                <Image src="https://www.comfygen.com/img/comfygen-dashboard-screen.webp" alt="comfygen news app" className="rounded-lg " unoptimized={true} width={800} height={600} />
              </div>
              <div className="md:w-[40%] w-full space-y-6 text-center md:text-left">
                <h2 className="py-4 text-indigo-500 xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Comfygen MLM Dashboard Screens</h2>
                <p className="text-base text-slate-800">For Multi-level Marketing (MLM) software, "Ease of Admin", "Ease of Setup", "Ease of Use", and "Has the product been a good business partner?" are the four important aspects. To predict user satisfaction within these aspects, comfygen MLM software uses an algorithm that selects the attributes most likely to predict it.
                  Network marketing companies can use Comfygen MLM software to manage and streamline their operations.
                </p>
                <div className="py-10">
                  <Link href="https://comfymlm.jamsara.com/" passHref={true} target='_blank'>
                    <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer   bg-white text-slate-800 hover:text-white overflow-hidden">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-[#5056C9] rounded-full group-hover:w-60 group-hover:h-60"></span>
                      <span className="relative"> View More</span>
                      <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        <TechnologyStack />
      </div>
       <BlogSection initialData={initialData} />
    </div>
  )
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