import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Link from 'next/link';
import styles from './styles.module.css'
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./e-commerce.json"
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
        <title>E-Commerce Jewellery Platform - Expert Jewellery eCommerce Development</title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="Develop a stunning jewellery E-commerce platform with secure transactions, elegant design, and seamless shopping experience. Power your online jewellery business with advanced jewellery E-commerce development."
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
            <div className=" bg-[#424151]/70">
              <Header />
              <div className="flex  justify-center items-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  py-10">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-[#fff] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      E-Commerce
                    </h1>
                    <p className="text-white text-base">Our E-Commerce project envisions creating a seamless online shopping experience for users, offering a diverse range of products. The primary goal is to establish a user-friendly platform that simplifies the process of browsing, selecting, and purchasing items, while also providing a secure and efficient transaction system.
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
                  <Image className="object-cover " src="https://www.comfygen.com/img/e-commerce-portfolio-img.webp" width={656} height={400} alt=' hero great wallet' loading="eager" priority />
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
                <p><span className='text-lg font-bold'>Enhanced User Experience:</span> The E-Commerce platform aims to deliver a smooth and enjoyable shopping experience, promoting customer satisfaction and loyalty.
                </p>
                <p><span className='text-lg	 font-bold'>Increased Revenue Streams:</span> By tapping into the vast online market, the business can expand its reach, attract new customers, and boost overall sales.</p>
                <p><span className='text-lg	 font-bold'>Efficient Inventory Management: </span>  The system will facilitate better control over inventory, reducing the likelihood of overstocking or stockouts.</p>
                <p><span className='text-lg	 font-bold'>Data-Driven Decision Making:</span> Implementing analytics tools will enable the business to gather valuable insights into customer behavior and preferences, aiding strategic decision-making.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="https://www.comfygen.com/img/business-benefits-e-commerce.webp" className="rounded-lg" loader={uploadcareLoader} unoptimized={true} width={800} height={800} alt="Business Benefits great wallet" />
              </div>
            </div>
          </section>
        </div>

        <div className={`${styles.featuresbg} `}>
          <div className='bg-[#121212e3] md:py-10 py-6 '>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                  Features
                </h2>
                <p className='text-[#fff] text-white-800'><span className='text-xl font-bold'>User Authentication and Authorization: </span> Secure user accounts and access control to protect sensitive information.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Product Catalog: </span> A comprehensive catalog with intuitive search and filter options for easy navigation.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Shopping Cart and Checkout: </span> Streamlined processes for adding items to the cart and a hassle-free checkout experience.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Payment Gateway Integration: </span> Secure payment processing for various methods to enhance user convenience.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Order Tracking:  </span> Real-time tracking of orders from placement to delivery for improved transparency.</p>
              </div>
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                  Challenges:
                </h2>
                <p className='text-[#fff] text-white-800'>The challenge lies in creating a robust system that seamlessly integrates these features while ensuring scalability to accommodate a growing user base. Additionally, addressing potential security concerns and optimizing the platform for performance are crucial aspects.
                </p>
              </div>
            </section>
          </div>
        </div>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="https://www.comfygen.com/img/solution-e-commerce.webp"
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
            <p className='text-base text-slate-800'>
              To overcome these challenges, we have implemented a tech stack comprising Node.js, React.js, Next.js, and MongoDB. Node.js provides a scalable and efficient backend, while React.js and Next.js facilitate the development of a dynamic and responsive frontend. MongoDB serves as a flexible and scalable database solution, accommodating the complex data structures inherent to e-commerce platforms.
            </p>
            <p>Our solution emphasizes modular and reusable code, ensuring maintainability and scalability as the project evolves. Rigorous testing procedures and security measures have been implemented to guarantee a secure and reliable platform.
            </p>
          </div>
        </section>

        <div className={`${styles.herobg} `}>
          <div className='bg-[#F6498B]/60 py-20'>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className='space-y-2 w-full'>
                <h3 className='text-4xl font-bold text-white' >Tools & Technologies</h3>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Node.js:</span>Backend development for scalable and efficient server-side operations.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>React.js & Next.js:  </span> Building a dynamic and responsive user interface for an engaging frontend experience.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>MongoDB:</span> A NoSQL database for flexible and scalable data storage, catering to the dynamic nature of e-commerce data.
                </p>
                <p className="text-[#fff] text-white-800">Through the effective utilization of these tools and technologies, our E-Commerce project is poised to revolutionize online shopping, offering a secure, user-friendly, and feature-rich platform.</p>
              </div>
              <div className="flex justify-center w-full ">
                <Image src="https://www.comfygen.com/img/tools-e-commerce.webp" alt="Tools Technologies" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={800} height={600} />
              </div>
            </section>
          </div>
        </div>

        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className=' bg-gray-200 rounded-t-md col-span-8'>
              <Image src="https://www.comfygen.com/img/footer-e-commerce.webp" alt='' width={989} height={742} className='w-full' />
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