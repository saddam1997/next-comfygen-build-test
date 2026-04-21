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




export default function about(props:any) {
  let { initialData } = props;

  return (
    <div className='overflow-hidden'>
      <Head>
        <title> Comfynews details : Comfygen is  a App and Web Development Company </title>
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
        <div className="bg-gradient-to-r from-[#5E63C7] via-[#7C80D8] to-[#B6B8DD]"
      >
          <div className=" bg-[#1B1C30CC]/20">
            <Header />
            <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center md:space-x-20 lg:py-16 py-5">
              <div className="w-full">
                <div className="space-y-6">
                  <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                    Comfynews Application
                  </h1>
                  <p className="text-white text-base">
                    Comfygen News App is a mobile application of the latest news stories from around the world.
                  </p>
                </div>
                <div className="py-10">
                  <Link href="/contact-us" passHref={true}>
                    <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer text-slate-800   bg-white  hover:text-white overflow-hidden">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center 
                      bg-[#8134F2] rounded-full group-hover:w-60 group-hover:h-60 "></span>
                      <span className="relative "> Let's Discuss</span>
                      <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hidden w-full md:flex justify-center md:py-0 py-10">
                <Image className="object-cover " src="https://www.comfygen.com/img/comfynews-application .webp" width={760} height={484} alt='Comfynews Application' loading="eager" priority />
              </div>

            </div>
          </div>
        </div>

        <div className="py-10 bg-[#F8F6FE] lg:py-20">
          <section className="w-11/12 mx-auto space-y-0 2xl:w-4/6 xl:w-5/6 lg:space-y-10">
            <div className="items-center py-4 space-y-10 md:flex md:space-y-0 md:space-x-10 lg:py-10">
              <div className="flex justify-center w-full md:justify-start ">
                <Image src="https://www.comfygen.com/img/comfygen-news-app.webp" alt="comfygen news app" className="rounded-lg "  unoptimized={true} width={800} height={600} />
              </div>
              <div className="w-full space-y-6 text-center md:text-left">
                <div className="space-y-3">
                  <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Comfygen News App</h2>
                </div>
                <p className="text-base text-slate-800">
                  With the ComfyNews Application, users can browse and read news from different parts of the world. In addition, the end user will be able to share the information with others. An innovative news app that allows users to read national, international, and local news.
                  In addition, our news app developers are experienced in building cutting-edge solutions that work effectively on a variety of platforms. As well as providing round-the-clock support, they also assist with the delivery process.
                </p>
                <div className="py-10">
                  <Link href="https://www.comfynews.site/" passHref={true} target='_blank'>
                    <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer text-slate-800   bg-white  hover:text-white overflow-hidden">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center 
                      bg-[#8134F2] rounded-full group-hover:w-60 group-hover:h-60 "></span>
                      <span className="relative "> View More</span>
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