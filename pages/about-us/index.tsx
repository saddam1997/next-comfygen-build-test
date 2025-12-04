import { useState } from 'react';
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./json/about.json"
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

import Header from "../Newcomponet/layout/Header"
import HeroSectionForCompany from '../Newcomponet/comman/HeroSectionForCompany';

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../Newcomponet/SectionCompoent/IndustriesServe"),
  { loading: loader, ssr: true }
);

const WhycomfygenSection = dynamic(
  () => import("../Newcomponet/about/WhycomfygenSection"),
  { loading: loader, ssr: true }
);




const Whycomfygen = [
  {
    num: "1",
    title: "Cutting-Edge Technology Integration",
    desc: <p>We use the latest and most reliable technologies to build web and mobile applications that are future-ready. Whether it's blockchain, AI, machine learning, or IoT, our team stays updated with the trends to deliver solutions that align with your business goals.</p>
  },
  {
    num: "2",
    title: "Custom Solutions Tailored to Your Needs",
    desc: <p>We at Comfygen believe that every business is unique. This is why we provide bespoke solutions based on your requirements. If you are looking for a custom mobile app, eCommerce platform, or blockchain solution, we ensure that the final product meets all your business needs.</p>
  },
  {
    num: "3",
    title: "End-to-End Services",
    desc: <p>From conceptualization to deployment and maintenance, we handle every aspect of the software development lifecycle. Our full-stack expertise in web and mobile app development allows us to deliver comprehensive solutions, ensuring smooth operations across all platforms</p>
  },
  {
    num: "4",
    title: "Experienced Team of Professionals",
    desc: <p>With over a decade of experience, our team consists of industry experts who possess deep technical knowledge and innovative problem-solving abilities. Our developers are proficient in a variety of programming languages and frameworks, ensuring that we can take on any project, regardless of its complexity.</p>
  }
];
const Qa = [
  {
    num: "1",
    title: "Why is Comfygen the Right Partner for All Your IT Needs?",
    desc: "Comfygen stands out as a trusted IT partner because we are always ahead of the curve when it comes to adopting and integrating the latest technologies. Our commitment to staying on top of industry advancements ensures that we provide the most innovative, secure, and scalable solutions to our clients."
  },

];

export default function about(props) {
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };
  let { initialData } = props;
  return (
    <div className='overflow-hidden'>
      <Head>
        <title> About Us | App and Web Development Company - comfygen.com</title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="ComfyGen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" About Us | App and Web Development Company - comfygen.com" />
        <meta property="og:description" content="ComfyGen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs." />
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

      <Header />

      <div className="overflow-hidden lg:pt-[100px]">
        <div className="lg:bg-right bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/career-hero-img.webp')]">
          <HeroSectionForCompany
            heading="About Us"
            ptag="Stay with Comfygen to Upgrade Your Business With Modern Technologies!"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            img={{
              src: "https://www.comfygen.com/image/about-hero-image.webp",
              width: 786,
              height: 304
            }}
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        <AboutSection
          title="About Company"
          heading="Build Future-Driven Webs and Apps that Transforms Industries"
          description1="Comfygen's mission is to drive digital transformation and create future-driven web and app solutions that transform industries. We build secure and scalable applications that empower businesses across various industries, from finance and blockchain to education, gaming, and entertainment."
          description2="Providing exceptional IT solutions requires a dedicated team of highly skilled web and mobile app developers who stay on top of the latest trends and utilize cutting-edge technologies. Our mission is to provide our clients with intuitive digital infrastructures that allow them to excel in their respective industries by prioritizing innovation, scalability, and engagement."
          points={[
            "Dedicated development team",
            "End-to-End Software Development Expertise",
            "Focus on Modern Trends and Innovative Solutions",
            "High-Performance Applications at Competitive Costs",
            "Strategic Development Processes",
          ]}
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/contact-us"
          linkText="Explore More"
        />
        <section className="lg:py-16 py-10 bg-[#F3F4F6]">
          <div className="flex flex-col-reverse items-center space-y-10 lg:flex-row md:space-x-10 md:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto" >
            <div className="w-full space-y-6 text-left">
              <div className="space-y-4">
                <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                  Who We Are
                </h2>
                <p className="text-base font-medium text-black">We are innovators and believers in technological revolutions. Whether it's AI-driven solutions, decentralized crypto products, or custom web and app development, Comfygen delivers unmatched solutions tailored to meet your needs.
                </p>
                <p className="text-base font-medium text-black">Our expertise spans advanced technologies such as predictive analytics, blockchain integration, and generative AI models. With over a decade of experience, our team specializes in creating high-performing software that surpasses market standards and captures long-term user engagement.
                </p>
                From large enterprises to SMBs, our customized solutions are designed to elevate businesses by unlocking their maximum potential. At Comfygen,
              </div>
              <div className="flex flex-row">
                <a href='https://api.whatsapp.com/send?phone=919587867258' className="text-base font-medium text-[#5556D1] border border-[#5556D1] rounded-full px-6 py-2.5 text-center hover:text-white hover:bg-[#5556D1] cursor-pointer transition duration-300 relative flex gap-2 items-center">
                  Let's Talk With Expert! <MdArrowOutward /> </a>
              </div>
            </div>
            <div className="flex justify-center  lg:justify-end pb-10 lg:pb-0 w-full">
              <Image
                className="rounded-md"
                title="Who We Are?"
                alt=" Who We Are?"
                src="https://www.comfygen.com/image/who-we-are-about-img.webp"
                height={450}
                width={650}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
        </section>
        <section className='bg-white lg:py-16 py-10'>
          <div className='2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto'>
            <div>
              <h2 className='xl:text-4xl text-3xl text-[#212121] mt-3 font-bold text-center'>
                Our Mission Vision and Values
              </h2>
            </div>
            <div className='grid lg:grid-cols-3 md;grid-cols-1 grid-cols-1 gap-10 mt-6'>
              {JSON_DATA.CompanyInfo1.map((elem) => {
                const { title, num, img, decs } = elem;
                return (
                  <div key={num} className="space-y-4 career-card-item relative overflow-hidden text-left border text-white rounded-md bg-gradient-to-r from-[#272868] to-[#5556d1] duration-200 transition cursor-pointer">
                    <div className='space-y-2 md:p-10 p-5'>
                      <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-white">{title}</h3>
                      <p className="text-white text-base ">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <WhycomfygenSection Qa={Qa} Whycomfygen={Whycomfygen} />
        <section className='lg:py-16 py-10 bg-[#F3F4F6]'>
          <div className='2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto '>
            <div className='space-y-4'>
              <h2 className='xl:text-4xl text-3xl text-[#212121] mt-3 font-semibold text-center'>
                Contact Us and Let’s Start Your Digital Journey
              </h2>
              <p className='text-base text-[#212121] font-normal text-center'>
                Ready to take your business to the next level? Let’s talk about how Comfygen can help you transform your ideas into impactful, high-performance solutions. Reach out to us today!</p>
            </div>
            <div className='flex justify-center mt-8'>
              <a href='/contact-us' className='md:text-base text-sm font-medium text-[#5556D1] border border-[#5556D1] rounded-full px-6 py-2.5 text-center hover:text-white hover:bg-[#5556D1] cursor-pointer transition duration-300 relative flex gap-2 items-center'>Let's Communicate With IT Expert! <MdArrowOutward /></a>
            </div>
          </div>
        </section>
        <section className="bg-cover bg-no-repeat lg:py-16 py-10 w-full"
          style={{ backgroundImage: `url('https://www.comfygen.com/image/why-choose-bg-img.webp')` }}>
          <div className='2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto'>
            <div>
              <div>
                <h2 className="text-2xl font-semibold lg:text-start text-center text-[#212121] lg:text-4xl">Our Visionary Leader</h2>
                <p className="text-lg text-[#212121] lg:text-start text-center ">Meet the visionary leaders who drive Comfygen's success with groundbreaking technology and a passion for innovation.</p>
              </div>
              <div className='grid   grid-cols-1 mt-10'>
                {JSON_DATA.VisionaryLeader.map((elem) => {
                  const { title, num, img, decs } = elem;
                  return (
                    <div key={num} className="md:flex items-center bg-[#FFFFFF] justify-center border border-[#212121]/10  gap-8 rounded-lg w-full p-6 space-y-4">
                      <div className=''>
                        <Image
                          width={384}
                          height={513}
                          className="rounded-2xl mx-auto"
                          src={img}
                          alt={title}
                        />
                      </div>
                      <div className='space-y-4 w-full '>
                        <div className='space-y-2'>
                          <h3 className="text-xl font-semibold text-[#000000]">{title}</h3>
                          <p className="text-black xl:text-base text-sm">{decs}</p>
                        </div>
                        <button className='text-base font-medium text-[#5556D1] border border-[#5556D1] hover:bg-[#5556D1] rounded-full px-6 py-2.5 text-center hover:text-white cursor-pointer transition duration-300 relative '>
                          <Link className='flex gap-3 items-center' target='_blank' href={'https://in.linkedin.com/in/saddam-husen'}>
                            Linkdin <FaLinkedin />
                          </Link>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <IndustriesServe heading="" description=""/>
      </div>
    </div>
  )
}
export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}