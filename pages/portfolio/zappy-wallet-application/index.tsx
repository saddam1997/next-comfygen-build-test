import Image from 'next/image';

import Link from 'next/link';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./zappy-wallet-application.json"
import { BsArrowRight } from 'react-icons/bs';


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
        <title>Zappy Wallet : Comfygen is  a App and Web Development Company </title>
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
      <div className="overflow-hidden " >

        <div className="">
          <div className='  w-full bg-[length:20rem_auto] bg-no-repeat bg-right-bottom' >
            <div className=" bg-[#770706]/90">

              <div className="flex items-center justify-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  py-8">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-[#fff] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Zappy Wallet Application
                    </h1>
                    <p className="text-white text-base">Zappy Wallet is a cutting-edge mobile payment application designed to revolutionize the way users make transactions. With a vision to simplify and streamline digital payments, our project aims to provide a seamless and secure platform for users to conduct financial transactions effortlessly.
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
                  <Image className="object-cover " src="https://www.comfygen.com/img/hero-bg-m7-coin.webp" width={600} height={300} alt=' hero great wallet' loading="eager" priority />
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
                <p>In a world where digital transactions are becoming increasingly prevalent, Zappy Wallet offers numerous advantages to both consumers and businesses. The key business benefits include:</p>
                <p><span className='text-lg font-bold'>Efficiency: </span>Zappy Wallet ensures quick and hassle-free transactions, saving users valuable time.</p>
                <p><span className='text-lg	 font-bold'> Security:  </span>Our payment app prioritizes the security of transactions, implementing robust measures to safeguard user data and financial information.</p>
                <p><span className='text-lg	 font-bold'>Market Share:</span> As the global mobile wallet market is projected to reach $7.58 billion by 2027, Zappy Wallet positions your business to gain a significant market share in this rapidly growing sector.</p>
                <p><span className='text-lg	 font-bold'>User Convenience:</span> The application enhances user convenience by allowing them to make secure payments directly from their smartphones, eliminating the need for physical cards or cash.</p>
                <p><span className='text-lg	 font-bold'>Collaborative Advantage:</span> Partnering with Comfygen, the digital wallet app development company behind Zappy Wallet, provides a strategic edge in creating a feature-rich and competitive payment solution.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="https://www.comfygen.com/img/business-benefits-m7-coin.webp" className="rounded-lg"  unoptimized={true} width={800} height={800} alt="Business Benefits great wallet" />
              </div>
            </div>
          </section>
        </div>
        <div className={`bg-gradient-to-br from-[#8F0C0C] via-[#A60E0E] to-[#7E0A0A]`}>
          <div className='bg-[#770706]/70 md:py-10 py-6 '>
            <section className=" w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Features</h2>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Quick Payments: </span>  Users can make swift transactions with just a few taps on their smartphones.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Security Measures: </span>Robust encryption and authentication protocols ensure the safety of user data and transactions.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>User-Friendly Interface: </span> An intuitive design makes Zappy Wallet easy to navigate for users of all technical backgrounds.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Transaction History:</span> Users can track and manage their transaction history for better financial management.</p>
              </div>
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                  Challenges:
                </h2>
                <p className='text-[#fff] text-white-800'>The primary challenge was to develop a mobile payment app that strikes the perfect balance between speed, security, and user-friendliness. Meeting the industry's stringent security standards while providing a seamless and intuitive user experience posed a unique set of challenges, which our team at Comfygen successfully addressed. </p>
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
            <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Solution</h2>
            <p className='text-base text-slate-800'>Comfygen's team overcame the challenges by implementing a comprehensive solution that incorporated the following key elements:</p>
            <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Technology Stack:</span>
              Leveraging cutting-edge technologies such as React JS, HTML 5, Node JS, Tailwind CSS, MongoDB, and Bootstrap to ensure a robust and scalable foundation for Zappy Wallet.</p>
            <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Security Protocols:</span> Implementing state-of-the-art encryption and authentication measures to safeguard user data and financial transactions.</p>
            <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>User-Centric Design:</span>  Prioritizing user experience through an intuitive and visually appealing interface, making Zappy Wallet accessible to a wide range of users.</p>
            <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Agile Development: </span>  Embracing an agile development methodology to adapt to evolving requirements and deliver a feature-rich mobile payment app within the specified timeline.</p>
          </div>
        </section>
        <div className={`bg-gradient-to-br from-[#8F0C0C] via-[#A60E0E] to-[#7E0A0A]`}>
          <div className=' py-20'>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className='space-y-2 w-full'>
                <h3 className='text-4xl font-bold text-white' >Tools & Technologies</h3>
                <p className="text-[#fff] text-white-800">Zappy Wallet is powered by a robust technology stack, including React JS for dynamic user interfaces, HTML 5 for web page structure, Node JS for server-side development, Tailwind CSS for streamlined styling, MongoDB for efficient data storage, and Bootstrap for responsive and mobile-first design.</p>
              </div>

              <div className="flex justify-center w-full ">
                <Image src="https://www.comfygen.com/img/tools-and-Tec-m7-coin.webp" alt="Tools Technologies" className="rounded-lg "  unoptimized={true} width={800} height={600} />
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
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}