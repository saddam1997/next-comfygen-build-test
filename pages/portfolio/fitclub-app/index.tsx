import Image from 'next/image';

import Link from 'next/link';
import styles from './styles.module.css'
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { BsArrowRight } from 'react-icons/bs';

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
        <title>FitClub App - Advanced Workout App Development</title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="FitClub App is a feature-rich workout app designed to enhance fitness routines with personalized training plans, progress tracking, and real-time coaching. Elevate your fitness journey with cutting-edge workout app development."
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

        <div className={`bg-gradient-to-br from-[#b7b86a] via-[#d8b9a4] to-[#c9c4d3]`} >
          <div className='  w-full bg-[length:20rem_auto] bg-no-repeat bg-right-bottom' >
            <div className=" bg-[#1B1C30CC]/20">
              <Header />
              <div className="flex  justify-center items-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  py-8">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-black xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Fitclub Application
                    </h1>
                    <p className="text-black text-base">FitClub aims to revolutionize the fitness experience by providing a cutting-edge mobile application that seamlessly integrates all aspects of a fitness journey. The vision is to empower users to take control of their health and well-being through a user-friendly platform that offers comprehensive access to FitClub's amenities.</p>
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
                <div className="hidden w-full md:flex justify-center md:py-0 ">
                  <Image className="object-cover " src="https://www.comfygen.com/img/fit-club-hero-img.webp" width={600} height={300} alt=' Efincap MLM Software' loading="eager" priority />
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
                <p><span className='text-lg font-bold'>Convenience :</span> Users can access FitClub's amenities anytime, anywhere through a user-friendly mobile app.</p>
                <p><span className='text-lg	 font-bold'>Personalized Fitness:</span>  Tailored workout plans, nutrition guidance, and progress tracking for a personalized fitness experience.</p>
                <p><span className='text-lg	 font-bold'>Motivation:</span> Stay motivated with features like goal setting, achievement tracking, and community engagement.</p>
                <p><span className='text-lg	 font-bold'>Accessibility:</span> Increase accessibility to FitClub's facilities and services, fostering a broader and engaged user base.</p>
                <p><span className='text-lg	font-bold'>Efficiency:</span> Streamline fitness routines by easily managing activities, classes, and resources through the application.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="https://www.comfygen.com/img/business-benefits-fitclub.webp" className="rounded-lg"  unoptimized={true} width={800} height={800} alt="fitclub" />
              </div>
            </div>
          </section>
        </div>
        <div className="md:py-10 py-6 bg-[#C9E404]/60 ">

          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="https://www.comfygen.com/img/fitclub-feature-img.webp"
                alt="Experts to Build and Manage Decentralised Solutions"
                className="rounded-lg"
                width={800}
                height={800}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                Features
              </h2>
              <p className='text-base text-slate-800'><span className='text-xl font-bold'>User Profiles:</span> Create personalized profiles with fitness goals, preferences, and progress tracking.</p>
              <p className='text-base text-slate-800'><span className='text-lg	 font-bold'>Activity Management:</span> Schedule, book, and manage fitness classes, sessions, and activities.</p>
              <p className='text-base text-slate-800'><span className='text-lg	 font-bold'>Nutrition Guidance:</span> Access to nutrition plans, meal tracking, and dietary recommendations.</p>
              <p className='text-base text-slate-800'><span className='text-xl font-bold'>Social Community:</span> Connect with like-minded individuals, share achievements, and participate in challenges.</p>
              <p className='text-base text-slate-800'><span className='text-lg	 font-bold'>Progress Tracking:</span> Monitor and visualize fitness progress, achievements, and milestones.</p>
            </div>
          </section>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 mt-8">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                Challenges
              </h2>
              <p className='text-base text-slate-800'><span className='text-lg	 font-bold'>Integration: </span>Seamlessly integrate diverse fitness services and amenities into a unified, user-friendly application.</p>
              <p className='text-base text-slate-800'><span className='text-lg	 font-bold'>User Engagement: </span>Foster consistent user engagement through interactive features and community-building elements.</p>
              <p className='text-base text-slate-800'><span className='text-lg	 font-bold'>Personalization: </span>Tailor the app to cater to individual fitness needs, ensuring a personalized experience for each user.</p>
              <p className='text-base text-slate-800'><span className='text-lg	 font-bold'>Technological Integration: </span>Overcome the challenges of integrating various technologies to ensure a smooth and cohesive user experience.</p>
            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
              <Image
                src="https://www.comfygen.com/img/challenges-fitclub.webp"
                alt="he Challenge"
                className="rounded-lg"
                width={800}
                height={800}
              />
            </div>
          </section>
        </div>
        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="https://www.comfygen.com/img/solution-fitclub.webp"
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
            <p className='text-base text-slate-800'>FitClub addresses these challenges by employing a robust and intuitive mobile application that offers a seamless user experience. The application integrates advanced technologies for activity scheduling, personalized fitness plans, and social interaction. The user-friendly interface ensures accessibility for all, while the personalized approach caters to individual fitness journeys. Regular updates and community engagement initiatives keep users motivated and connected.</p>
          </div>
        </section>

        <div className="py-20 bg-gradient-to-br to-[#C9E404]/60 from-[#fff]/40">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full ">
              <Image src="https://www.comfygen.com/img/tools-technologies-fitclub.webp" alt="comfygen news app" className="rounded-lg " unoptimized={true} width={800} height={600} />
            </div>
            <div className='space-y-2 w-full'>
              <h3 className='text-4xl font-bold'>Tools & Technologies</h3>
              <p className="text-base text-slate-800"><span className='text-lg font-bold'>Mobile App Development: </span>Utilizing industry-standard frameworks for cross-platform mobile app development.</p>
              <p className="text-base text-slate-800"><span className='text-lg font-bold'>Cloud Services:</span> Leveraging cloud infrastructure for scalability, data storage, and seamless updates.</p>
              <p className="text-base text-slate-800"><span className='text-lg font-bold'>Data Analytics:</span> Implementing analytics tools to track user engagement, preferences, and performance metrics.</p>
              <p className="text-base text-slate-800"><span className='text-lg font-bold'>API Integration: </span> Integrating APIs to connect with fitness equipment, wearable devices, and other third-party services.</p>
              <p className="text-base text-slate-800"><span className='text-lg font-bold'>Security Measures:</span> Employing robust security protocols to safeguard user data and ensure privacy.</p>
            </div>
          </section>
        </div>

        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='p-4 bg-gray-200 rounded-t-md col-span-8'>
              <Image src="https://www.comfygen.com/img/footer-fitclub-img.webp" alt='' width={989} height={742} className='w-full' />
            </div>
          </div>
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