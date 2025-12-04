import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';



import Header from '../../Newcomponet/layout/Header';
const TechnologyStack = dynamic(() => import('../../Newcomponet/portfolio/TechnologyStack'), {
  loading: () => <p>Loading...</p>,
})

export default function about(props) {
  let { initialData } = props;

  return (
    <div className='overflow-hidden'>
      <Head>
        <title> Cricket fast line details : Comfygen is  a App and Web Development Company </title>
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

      <div className="overflow-hidden lg:pt-[110px]">
        <div className="bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("https://www.comfygen.com/img/cricket-fast-line-herosection.webp")` }}>
          <div className=" bg-[#1B1C30CC]/20">
            <Header />
            <div className="flex flex-col justify-center items-center w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20 lg:py-16 py-5">
              <div className="w-full">
                <div className="space-y-6 text-center lg:w-4/6 mx-auto">
                  <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                    Cricket Fast Line Application
                  </h1>
                  <p className="text-white text-base">
                    Cricket Fast Line Application is a mobile app designed for cricket fans that provides real-time updates on cricket matches from around the world.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center md:py-0 py-10">
                <Image className="object-cover " src="https://www.comfygen.com/img/cricket-fast-line-application-details.webp" width={760} height={484} alt=' Efincap MLM Software' loading="eager" priority />
              </div>
            </div>
          </div>
        </div>
        <div className='py-10' style={{ backgroundImage: `url("https://www.comfygen.com/img/cricket-fast-line-screen-bg.png")` }}>
          <section className="w-11/12 mx-auto space-y-0 2xl:w-4/6 xl:w-5/6 lg:space-y-10">
            <div className="items-center space-y-10 md:flex md:space-y-0 md:space-x-10 ">
              <div className="flex justify-center items-center w-full ">
                <Image src="https://www.comfygen.com/img/cricket-fast-line-screens.webp" alt="comfygen news app" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={1000} height={600} />
              </div>
            </div>
            <div className=''>
              <p className="text-base text-slate-800 text-center">
                Providing cricket fans with real-time updates on worldwide cricket matches, Our Cricket Fast Line is a mobile application designed for cricket fans.
                In today's market, Fairbets Cricket Line is the fastest application for updating cricket scores. Getting live score updates for cricket matches for all cricket series and tournaments, including ODI, T20, and Test international matches, domestic matches, and women's matches, is made easy with Fairbets Cricket Line.
              </p>
            </div>
          </section>
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