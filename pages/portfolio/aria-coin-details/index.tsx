import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import React from 'react'
import Head from 'next/head';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import JSON_DATA from "./aria.json"

import Header from '../../Newcomponet/layout/Header';
import TechnologyStack from '../../Newcomponet/portfolio/TechnologyStack';



export default function about(props:any) {
  let { initialData } = props;

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Aria Coin - Secure & Decentralized Crypto Coin Development</title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="Aria Coin is a next-gen cryptocurrency designed for secure, decentralized, and user-centric global transactions. Developed with cutting-edge blockchain technology, it redefines the digital currency landscape."
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

      <div className="overflow-hidden">
        <div className=" bg-gradient-to-t to-[#449255] from-[#fff]">
          <div className='h-full w-full  bg-no-repeat bg-right-bottom' style={{ backgroundImage: `url("https://www.comfygen.com/img/R.svg")` }}>
            <div className="bg-green-500/20">
              <Header />
              <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center lg:py-40 py-8">
                <div className="w-full">
                  <div className="space-y-6">
                    <h1 className="text-[#000000] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Aria Coin
                    </h1>
                    <p className="text-[#000000] text-base">aRIA Currency aspires to redefine the digital currency landscape by introducing a secure, decentralized, and user-centric platform to facilitate global transactions. With a focus on accessibility, transparency, and efficiency, the vision is to empower individuals and businesses to engage in seamless and trustworthy digital transactions.</p>
                  </div>
                  <div className="py-10">
                    <Link href="/contact-us" passHref={true}>
                      <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center shadow-xl cursor-pointer bg-[#fff] text-slate-800 overflow-hidden">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-[#D0FFDA] rounded-full group-hover:w-60 group-hover:h-60 "></span>
                        <span className="relative"> Let's Discuss</span>
                        <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-full md:flex justify-center md:py-0 py-10">
                  <Image className="object-cover " src="https://www.comfygen.com/img/aria-coin.webp" width={760} height={484} alt=' Efincap MLM Software' loading="eager" priority />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:py-10 py-6 bg-gray-100">
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
              <Image
                src="https://www.comfygen.com/img/benifites-aria-coin.webp"
                alt="Experts to Build and Manage Decentralised Solutions"
                className="rounded-lg"
                width={800}
                height={800}
              />
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Business Benefits
              </h2>
              <p>
                Complete Coin Development is a revolutionary platform for businesses and individuals seeking to create decentralized multi-level marketing (MLM) projects. With a user-friendly interface and smart contract integration, it offers efficient MLM creation, cost savings, and transparency. Businesses benefit from customization, tokenization support, and decentralized governance, fostering global reach, innovation, and a loyal community. Real-time analytics empower informed decision-making, and the platform's adaptability ensures resilience in dynamic markets. Join us to redefine the future of decentralized MLM ventures.
              </p>
            </div>
          </section>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                Project Features & The Challenge
              </h2>
              <p className='text-base text-slate-800'><span className='text-xl font-bold'>Decentralized Architecture:</span> Developing a robust and scalable decentralized infrastructure was crucial in overcoming the challenge of creating a digital currency platform that operates independently of central governance, ensuring resilience and trust.</p>
              <p className='text-base text-slate-800'><span className='text-xl font-bold'> User-Centric Design:</span> Striking a balance between simplicity and advanced functionality was a challenging feat in designing an interface that caters to users of varying levels of digital currency literacy.</p>
              <p className='text-base text-slate-800'><span className='text-xl font-bold'>Scalability and Innovation:</span>  Prioritizing ongoing research and development to address scalability concerns and continuously innovate in response to the evolving demands of the digital currency market posed a significant challenge.</p>
            </div>
            <div className="flex justify-center w-full lg:justify-end pt-10 lg:pt-0">
              <Image
                src="https://www.comfygen.com/img/project-features-challenge-aria-coin.webp"
                alt="Features Image"
                className="rounded-lg"
                width={800}
                height={800}
              />
            </div>

          </section>
        </div>

        <section className='py-10 space-y-8'>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <h2 className=' xl:text-4xl text-3xl font-bold text-[#0E1F51] text-center'>The Solution</h2>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 lg:gap-6 gap-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12'>
            {JSON_DATA.Solution.map((elem) => {
              const { title, img, decs, num } = elem;
              return (
                <div key={num} className="w-full  mb-4 lg:mb-0">
                  <div className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
                    <Image
                      src={img}
                      alt={title}
                      width={320} height={288}
                      className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"
                    />
                    <div className="absolute bg-gradient-to-b from-slate-500/10 to-stone-200/80 transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
                    <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                      <div className="h-1/2 relative">
                        <div className="absolute bottom-0">
                          <h2 className="font-bold text-[#000000] group-hover:text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">{title}</h2>
                        </div>
                      </div>
                      <div className="h-1/2">
                        <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{decs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </section>

        <div className="py-20  bg-no-repeat bg-cover bg-bottom" style={{ backgroundImage: `url("https://www.comfygen.com/img/aria-coin-scren-bg.png")` }}>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full ">
              <Image src="https://www.comfygen.com/img/tools-technologies-aria-coin.webp" alt="Tools-Technologies" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={800} height={600} />
            </div>
            <div className='space-y-2 w-full'>
              <h3 className='text-4xl font-bold'>Tools & Technologies</h3>
              <p className="text-base text-slate-800"><span className='text-xl font-bold'> Blockchain Frameworks:</span> Utilizing blockchain frameworks such as Ethereum or Hyperledger to establish the foundation for aRIA Currency's decentralized ledger and smart contract capabilities.</p>
              <p className="text-base text-slate-800"><span className='text-xl font-bold'> User Interface Technologies:</span> Leveraging modern UI technologies such as React.js or Angular to create a visually compelling and user-friendly interface across web and mobile platforms.</p>
              <p className="text-base text-slate-800"><span className='text-xl font-bold'>Security Protocols:</span> Implementing advanced security protocols, including multi-factor authentication and encryption standards, to safeguard user data and transactional integrity.</p>
            </div>
          </section>
        </div>
      </div>

      <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
        <div className='grid lg:grid-cols-1 gap-6'>
          <div className='p-4 bg-gray-200 rounded-t-md col-span-3'>
            <Image src="https://www.comfygen.com/img/footer-aria-coin.webp" alt='' width={1404} height={1256} className='w-full' />
          </div>
        </div>
      </div>

      <TechnologyStack />
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