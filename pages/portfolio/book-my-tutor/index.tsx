import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import styles from './styles.module.css'
import 'aos/dist/aos.css';
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./book-my-tutor.json"
import { BsArrowRight } from 'react-icons/bs';
import TechnologyStack from '../technology-stack/TechnologyStack';
import LazyLoad from 'react-lazy-load';
import CompanyHeroSection from '../../components/CompanyHeroSection';
import Features from '../components/Features';

const Header = dynamic(() => import('../../components/Header'), {
  loading: () => <p>Loading...</p>,
})

export default function about(props: any) {
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => setTalkToExpertModal(true);
  const closeModal = () => setTalkToExpertModal(false);
  let { initialData } = props;
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Book My Tutor - Smart Tutor Booking App for Easy Learning</title>
        <link rel="canonical" href="https://www.comfygen.com/portfolio/book-my-tutor" />
        <meta
          name="description"
          content="Book My Tutor is a user-friendly tutor booking app designed to connect students with expert tutors seamlessly. Find, book, and manage tutoring sessions with ease."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Book My Tutor - Smart Tutor Booking App for Easy Learning " />
        <meta property="og:description" content="Book My Tutor is a user-friendly tutor booking app designed to connect students with expert tutors seamlessly. Find, book, and manage tutoring sessions with ease." />
        <meta property="og:url" content="https://www.comfygen.com/portfolio/book-my-tutor" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
      </Head>

      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>

      <div className="overflow-hidden" >
        <div className="lg:py-[7rem] py-[5rem]  bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
          <CompanyHeroSection
            heading=" Book My Tutor - A Smart Tutor Booking App"
            subhead=""
            ptag="designed to connect students with experienced tutors for personalized learning. As a product of a leading tutor app development company, this app simplifies the process of finding, booking, and managing tutoring sessions. With AI-powered recommendations, real-time communication, and secure payment integration, it enhances the learning experience while providing growth opportunities for educators."
            imageSrc="https://www.comfygen.com/img/hero-book-my-tutor.webp"
            buttonText="Talk To Consultant"
            openModal={openModal}
            closeModal={closeModal}
            talkToExpertModal={talkToExpertModal}
            buttonLink="/portfolio"
            imageHeight={360}
            imageWidth={640}
          />
        </div>


        <Features
          heading="Features"
          points={[
            "Book My Tutor is a powerful online learning platform designed to connect students with qualified tutors seamlessly. Developed by a leading tutor app development company, this innovative solution enhances the learning experience by making tutor booking simple, flexible, and efficient. Key business benefits include",
            "<b>Seamless Tutor-Student Matching :</b> AI-driven recommendations help students find the best tutors based on their preferences and learning goals.",
            "<b>Improved Learning Experience :</b> Enables real-time interaction between students and tutors for personalized education.",
            "<b>Revenue Generation :</b>Offers multiple monetization opportunities, such as subscription plans and pay-per-session models.",
            "<b>Scalability :</b> It is designed to support a growing user base, making it an ideal solution for institutions and individual tutors alike.",
            "<b>Convenience & Accessibility :</b> Students can book sessions anytime, anywhere, ensuring learning without limitations"

          ]}
          imageSrc="https://www.comfygen.com/img/business-benefits-book-my-tutor.webp"
        />


        <div className={`${styles.featuresbg} `}>
          <div className=' md:py-10 py-6 '>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Features</h2>
                <p className='text-[#fff]'>Book My Tutor is built with advanced features to ensure a seamless experience for students, tutors, and administrators. Key features include:
                </p>
                <p className='text-[#fff]'><span className='text-xl font-bold'>Easy Tutor Search & Booking:  </span>Users can browse tutor profiles, check ratings, and schedule sessions effortlessly.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>AI-Powered Recommendations:</span>  Smart algorithms suggest tutors based on subject expertise and user preferences.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>In-App Messaging & Video Calls:</span>  Enables smooth communication between students and tutors.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>Secure Payment Integration:</span> Multiple payment gateways ensure hassle-free transactions.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>Session Management:</span>  Allows tutors to schedule, reschedule, or cancel sessions conveniently.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>Performance Tracking & Analytics:</span>  Students and parents can monitor progress with interactive reports.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>Multi-Language Support:</span> Enhances accessibility for users from different regions.</p>
              </div>
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Challenges:</h2>
                <p className='text-[#fff]'>Developing a learning app like Book My Tutor presented several challenges:</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>Building a Scalable Architecture:</span> Ensuring the platform could handle a growing number of students and tutors.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>User Experience Optimization: </span> Designing an intuitive and engaging UI for seamless navigation.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>Secure Payment Processing: </span>Implementing a reliable and secure payment gateway to handle transactions.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>Data Privacy & Security: </span>Protecting user information and maintaining compliance with industry regulations.</p>
                <p className='text-[#fff]'><span className='text-lg	 font-bold'>Real-Time Communication: </span>Enabling smooth video calls and messaging between students and tutors.
                </p>
              </div>
            </section>
          </div>
        </div>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="https://www.comfygen.com/img/solution-book-my-tutor.webp"
              alt="Experts to Build and Manage Decentralised Solutions"
              className="rounded-lg"
              width={640}
              height={360}
              priority
              quality={70}
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 75vw, 920px"
            />
          </div>
          <div className="w-full space-y-4 text-center md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Solution</h2>
            <p className='text-base text-slate-800'> To overcome these challenges, our team leveraged expertise in online learning app development to create a robust and scalable tutor booking platform. Our solutions included:</p>
            <p className='text-slate-800'><span className='text-lg	 font-bold'> Cloud-Based Infrastructure: </span> Ensuring high availability and performance for users worldwide.</p>
            <p className='text-slate-800'><span className='text-lg	 font-bold'> Advanced AI Integration:  </span>Implementing recommendation algorithms to enhance tutor-student matching.
            </p>
            <p className='text-slate-800'><span className='text-lg	 font-bold'>Responsive Design:  </span>Creating a mobile-friendly and easy-to-use interface for all users.Secure & Encrypted Transactions: Integrating reliable payment gateways with end-to-end encryption.</p>
            <p className='text-slate-800'><span className='text-lg	 font-bold'>Comprehensive Admin Panel:  </span>Providing administrators with complete control over tutor and student management.</p>
            <p className='text-slate-800'><span className='text-lg	 font-bold'>Seamless Communication System:  </span>Implementing real-time chat and video conferencing capabilities.</p>
          </div>
        </section>

        <div className={`${styles.herobg} `}>
          <div className=' py-20'>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className='space-y-2 w-full'>
                <h3 className='text-4xl font-bold text-white' >Tools & Technologies</h3>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Frontend: </span>HTML5, CSS3, JavaScript, React.js</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Backend:</span> Node.js, Express.js, MongoDB</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Database: </span> MongoDB</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Authentication: </span> JSON Web Tokens (JWT)</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Real-time Communication: </span>WebSocket</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Payment Integration: </span>Razorpay</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Hosting:</span> Amazon Web Services (AWS)</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Version Control: </span> Git, GitHub</p>
              </div>
              <div className="flex justify-center w-full ">
                <Image src="https://www.comfygen.com/img/tools-and-Tec-bbok-my-tutor.webp" alt="Tools Technologies" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={456} height={395} />
              </div>
            </section>
          </div>
        </div>

        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='p-4 bg-gray-200 rounded-t-md col-span-8'>
              <Image src="https://www.comfygen.com/img/book-my-tutor-footer.webp" alt='' width={920} height={552} className='w-full' />
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