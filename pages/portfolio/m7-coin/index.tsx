import Image from 'next/image';

import Link from 'next/link';
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



export default function about(props:any) {

  let { initialData } = props;

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>M7Coin - Secure Web Crypto Wallet Development </title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="M7Coin is a cutting-edge web crypto wallet designed for secure, fast, and seamless digital asset management. Experience decentralized and user-friendly cryptocurrency transactions with advanced wallet development."
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

        <div className="bg-gradient-to-r from-[#D9A174] via-[#D39A6C] to-[#C8895B]" >
          <div className='w-full bg-[length:20rem_auto] bg-no-repeat bg-right-bottom'>
            <div className=" bg-[#E09B67]/90">
             {/* <Header /> */}
              <div className="flex  justify-center items-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  py-8">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-[#fff] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      M7Coin Web Wallet
                    </h1>
                    <p className="text-white text-base">The M7Coin Web Wallet project aims to revolutionize the way users manage their cryptocurrency assets. Our vision is to provide a seamless and secure platform that empowers individuals to effortlessly store, send, and receive M7Coins, ensuring a user-friendly experience in the dynamic world of digital currencies.
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
                <p><span className='text-lg font-bold'> Enhanced Security:</span>The M7Coin Web Wallet ensures the highest level of security through advanced encryption and authentication protocols, safeguarding users' assets against potential threats.</p>
                <p><span className='text-lg	 font-bold'>User-Friendly Interface: </span> A intuitive and user-friendly interface facilitates easy navigation, making it accessible for both seasoned cryptocurrency enthusiasts and newcomers to the M7Coin ecosystem.</p>
                <p><span className='text-lg	 font-bold'>Buy Feature Integration: </span> The inclusion of a Buy feature directly within the wallet simplifies the process of acquiring M7Coins, promoting a seamless user experience.</p>
                <p><span className='text-lg	 font-bold'>Increased Adoption:</span> By offering a reliable and feature-rich web wallet, the project aims to contribute to the broader adoption of M7Coin by providing a convenient and trustworthy platform for users to manage their digital assets.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="https://www.comfygen.com/img/business-benefits-m7-coin.webp" className="rounded-lg"  unoptimized={true} width={800} height={800} alt="Business Benefits great wallet" />
              </div>
            </div>
          </section>
        </div>

        <div className="bg-gradient-to-r from-[#AD852B] via-[#C89A5B] to-[#D9A174]">
          <div className='bg-[#AD852B]/70 md:py-10 py-6 '>
            <section className=" w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">Features </h2>
                <p className='text-[#fff] text-white-800'><span className='text-xl font-bold'>Multi-Currency Support:  </span> The web wallet supports not only M7Coins but also various other cryptocurrencies, offering users a comprehensive solution for managing their digital assets.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Real-Time Transaction Updates: </span> Users receive instant updates on their transactions, ensuring transparency and reducing uncertainty in the cryptocurrency ecosystem.</p>
                <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'> Portfolio Tracker:</span>A built-in portfolio tracker allows users to monitor the performance of their M7Coins and other supported cryptocurrencies, providing valuable insights for informed decision-making.</p>
              </div>
              <div className="w-full space-y-4 text-center md:text-left">
                <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                  Challenges:
                </h2>
                <p className='text-[#fff] text-white-800'>The main challenge was to develop a web wallet that seamlessly integrates robust security measures without compromising on user experience. Striking the right balance between security and user-friendliness was crucial to the success of the project.</p>
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
            <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
              Solution
            </h2>
            <p className='text-base text-slate-800'>To address the challenge, we implemented cutting-edge security protocols, including two-factor authentication and advanced encryption algorithms. Simultaneously, the user interface underwent rigorous testing and iterative design improvements to ensure a smooth and intuitive experience. Regular feedback loops with beta testers allowed us to fine-tune the solution and meet both security and usability objectives.</p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#AD852B] via-[#C89A5B] to-[#D9A174]">
          <div className=' py-20'>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className='space-y-2 w-full'>
                <h3 className='text-4xl font-bold text-white' >Tools & Technologies</h3>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Blockchain Technology:</span> Leveraging the power of blockchain ensured the transparency and immutability of transactions within the M7Coin Web Wallet.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>ReactJS:  </span> The web wallet's frontend was developed using ReactJS, providing a responsive and dynamic user interface.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Node.js: </span> The backend infrastructure was built with Node.js, enabling fast and scalable transaction processing.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Firebase: </span> Firebase was utilized for real-time database updates and secure user authentication.</p>
                <p className="text-[#fff] text-white-800"><span className='text-lg font-bold'>Smart Contracts:</span>Ethereum-based smart contracts facilitated secure and automated transactions within the M7Coin ecosystem.</p>
              </div>
              <div className="flex justify-center w-full ">
                <Image src="https://www.comfygen.com/img/tools-and-Tec-m7-coin.webp" alt="Tools Technologies" className="rounded-lg "  unoptimized={true} width={800} height={600} />
              </div>
            </section>
          </div>
        </div>

        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='bg-gray-200 rounded-t-md col-span-8'>
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