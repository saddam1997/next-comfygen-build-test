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
import JSON_DATA from "./live-line-application.json"
import { BsArrowRight } from 'react-icons/bs';
import TechnologyStack from '../technology-stack/TechnologyStack';

const Header = dynamic(() => import('../../components/Header'), {
  loading: () => <p>Loading...</p>,
});

export default function about(props) {
  let { initialData } = props;
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Live Line Application: Comfygen is  a App and Web Development Company </title>
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
            <div className=" bg-[#770706]/90">
              <Header />
              <div className="flex justify-center items-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  pt-8">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-[#fff] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Live Line Application
                    </h1>
                    <p className="text-white text-base">Live Line Application aims to revolutionize the way cricket enthusiasts engage with live matches. The project envisions providing a unique and engaging platform that offers real-time updates, detailed analysis, and insightful information for cricket matches worldwide. Whether it's following international tournaments like ICC events or domestic leagues such as IPL, BBL, PSL, and more, Live Line Application ensures users stay connected and informed, bringing the excitement of the game to their fingertips.
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
                  <Image className="object-cover " src="https://www.comfygen.com/img/live-line-hero-img.webp" width={500} height={300} alt=' hero great wallet' loading="eager" priority />
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
                <p><span className='text-lg font-bold'> Live Engagement:</span>Users can enjoy live ball-by-ball commentary, real-time win percentages, and a detailed scorecard with wicket descriptions and partnership stats.
                </p>
                <p><span className='text-lg	 font-bold'>Comprehensive Coverage:  </span> The platform covers a wide range of cricket events, including ICC tournaments, domestic leagues, and other exciting cricket series globally.</p>
                <p><span className='text-lg	 font-bold'>Unique Features:</span> Analytical graphs provide insights into team performances, while a centralized hub offers details and stats for all active series.</p>
                <p><span className='text-lg	 font-bold'>Personalization:</span> Users can customize their experience with features like PIN Live Score, dark/light theme preferences, and personalized notifications for live matches and breaking news.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="https://www.comfygen.com/img/business-benefits-m7-coin.webp" className="rounded-lg" loader={uploadcareLoader} unoptimized={true} width={800} height={800} alt="Business Benefits great wallet" />
              </div>
            </div>
          </section>
        </div>
        <div className={`${styles.featuresbg} `}>
          <div className='bg-[#770706]/70 md:py-10 py-6 '>
            <section className=" w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]"> Features</h2>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Live Commentary:  </span> Real-time ball-by-ball commentary to keep users engaged during matches.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Analytical Graphs: </span>Visual representation of teams' performances on different scales for in-depth analysis.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Centralized Hub:  </span>A one-stop destination for comprehensive details and statistics of all active cricket series.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>PIN Live Score:</span> The ability to watch live scores without switching between multiple apps.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Player Profiles:</span> In-depth career profiles accessible with a simple tap on any player.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Theme Customization: </span> A user-friendly interface allowing users to switch between dark and light themes based on their preference.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Notifications:</span> Instant notifications for all live match instances and breaking news to keep users informed.</p>
              </div>
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                  Challenges:
                </h2>
                <p className='text-[#fff] text-white-800'>Live Line Application faced the challenge of creating a cricket-centric platform that not only delivered real-time updates but also offered unique features to enhance the user experience. </p>
              </div>
            </section>
          </div>

        </div>
        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="https://www.comfygen.com/img/solution-m7-coin.webp"
              alt="Experts to Build and Manage Decentralised Solutions"
              className="rounded-lg"
              width={800}
              height={800}
            />
          </div>
          <div className="w-full space-y-4 text-center md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Solution
            </h2>
            <p className='text-base text-slate-800'>Live Line Application successfully addressed the challenge by developing a feature-rich application that offers an immersive cricket experience. The platform leverages advanced technologies to provide real-time updates, analytical insights, and personalized features. The user interface is designed for ease of navigation, ensuring that cricket fans can access all the information they need seamlessly.</p>
          </div>
        </section>
        <div className={`${styles.toolstechbg} `}>
          <div className=' py-20'>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className='space-y-2 w-full'>
                <h3 className='text-4xl font-bold text-white' >Tools & Technologies</h3>
                <p className="text-[#fff] text-white-800">The development of Live Line Application involved the use of cutting-edge tools and technologies to ensure a robust and dynamic platform. Some of the key technologies and tools employed include:</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Real-time Data Integration: </span> API integration for live updates and scores.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Graphical Data Representation: </span>Advanced graphical tools for analytical graphs.
                </p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Cross-Platform Development:</span>  Utilizing technologies for cross-platform compatibility.
                </p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>User Interface Design: </span>User-friendly design principles for an intuitive experience.
                </p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'> Notification Services:</span>  Implementing push notification services for timely updates.
                </p>
              </div>
              <div className="flex justify-center w-full ">
                <Image src="https://www.comfygen.com/img/tools-and-Tec-m7-coin.webp" alt="Tools Technologies" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={800} height={600} />
              </div>
            </section>
          </div>
        </div>
        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className=' bg-gray-200 rounded-t-md col-span-8'>
              <Image src="https://www.comfygen.com/img/m7-coin-footer-img.webp" alt='' width={1042} height={625} className='w-full' />
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