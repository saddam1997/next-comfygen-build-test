import Image from 'next/image';

import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import Header from '../../../components/Newcomponet/layout/Header';
const TechnologyStack = dynamic(() => import('../../../components/Newcomponet/portfolio/TechnologyStack'), {
  loading: () => <p>Loading...</p>,
})

const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);




export default function about(props) {
  let { initialData } = props;

  return (
    <div className='overflow-hidden'>
      <Head>
        <title> Zappy wallet details : Comfygen is  a App and Web Development Company </title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="Comfygen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs." />
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
      <div className="overflow-hidden lg:pt-[110px]">
        <div
          className=" bg-gradient-to-t to-[#ECD571] from-[#fff]">
          <div className='h-full w-full bg-[length:20rem_auto] bg-no-repeat bg-right-bottom' style={{ backgroundImage: `url("https://www.comfygen.com/img/Z.svg")` }}>
            <div className="">
              <Header />
              <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center md:space-x-20 lg:py-16 py-5">
                <div className="w-full">
                  <div className="space-y-6">
                    <h1 className="text-slate-800 xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Zappy Wallet  Application
                    </h1>
                    <p className="text-slate-800 text-base">
                      Zappy Wallet payment app is a mobile application that enables users to make quick and secure payments using their smartphones.
                    </p>
                  </div>
                  <div className="py-10">
                    <Link href="/contact-us" passHref={true}>
                      <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center shadow-xl cursor-pointer bg-[#fff] text-slate-800 overflow-hidden">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-[#ECD571] rounded-full group-hover:w-60 group-hover:h-60"></span>
                        <span className="relative"> Let's Discuss</span>
                        <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-full md:flex justify-center md:py-0 py-10">
                  <Image className="object-cover " src="https://www.comfygen.com/img/zappy-wallet-application-detail.webp" width={760} height={484} alt=' Efincap MLM Software' loading="eager" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-no-repeat lg:bg-cover w-full h-full" style={{ backgroundImage: `url("https://www.comfygen.com/img/zappy-screens-bg.webp")` }}>
          <section className="w-11/12 mx-auto space-y-0 2xl:w-4/6 xl:w-5/6 lg:space-y-10">
            <div className="items-center py-4  flex md:flex-row flex-col-reverse  gap-10 lg:py-10">
              <div className="w-full md:w-[40%] space-y-6 text-center md:text-left">
                <div className="space-y-3">
                  <h2 className="text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Zappy Application Screens</h2>
                  <p className="text-base text-slate-800">According to Allied Market Research, the global mobile wallet market will reach $7.58 billion by 2027. The time is always early enough to create a better digital wallet. Gain market share in a growing sphere by collaborating with Comfygen, the digital wallet app development company!
                    Using our Zappy Wallet payment app, users can make quick and secure payments on their smartphones.
                  </p>
                  <div className="py-10">
                    <Link href="/#" passHref={true}>
                      <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center shadow-xl cursor-pointer bg-[#fff] text-slate-800 overflow-hidden">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-[#ECD571] rounded-full group-hover:w-60 group-hover:h-60"></span>
                        <span className="relative">View More</span>
                        <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full md:w-[60%] md:justify-start items-end ">
                <Image src="https://www.comfygen.com/img/zappy-dashboard-screen.webp.webp" alt="Zappy Application Screens" className=" drop-shadow-lg "  unoptimized={true} width={700} height={600} />
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