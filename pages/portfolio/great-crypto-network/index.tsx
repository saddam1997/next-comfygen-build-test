import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Link from 'next/link';
import styles from './styles.module.css'
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./great-crypto-network.json"
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
        <title> Great Crypto Network : Comfygen is  a App and Web Development Company </title>
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
            <div className=" bg-[#ffaf0445]">
              <Header />
              <div className="flex  justify-center items-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  py-8">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-[#F3410C] xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      Great Crypto Network
                    </h1>
                    <p className="text-black text-base">GCN aims to establish a decentralized exchange platform that revolutionizes traditional trading methods. The vision is to create a secure, transparent, and user-friendly ecosystem where users can trade digital assets without relying on a central authority.
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
                  <Image className="object-cover " src="https://www.comfygen.com/img/hero-great-wallet.webp" width={600} height={300} alt=' hero great wallet' loading="eager" priority />
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
                <p><span className='text-lg font-bold'>Decentralization: </span> GCN eliminates the need for intermediaries, providing users with direct control over their assets and transactions.
                </p>
                <p><span className='text-lg	 font-bold'>Enhanced Security: </span> The decentralized nature of the exchange enhances security by reducing the risk of centralized hacking.</p>
                <p><span className='text-lg	 font-bold'>Transparency: </span> Utilizing blockchain technology ensures transparency in transactions, fostering trust among users.</p>
                <p><span className='text-lg	 font-bold'>Global Accessibility: </span> GCN enables users worldwide to access and trade digital assets without geographical restrictions.</p>
                <p><span className='text-lg	 font-bold'>Reduced Costs: </span> By eliminating intermediaries and streamlining processes, GCN significantly reduces transaction costs.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="https://www.comfygen.com/img/Business-Benefits-great-wallet.webp" className="rounded-lg" loader={uploadcareLoader} unoptimized={true} width={800} height={800} alt="Business Benefits great wallet" />
              </div>
            </div>
          </section>
        </div>

        <div className="bg-[#F3420C] md:py-10 py-6" >
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                Features
              </h2>
              <p className='text-[#fff] text-white-800'><span className='text-xl font-bold'>Decentralized Order Book: </span> GCN incorporates a decentralized order book for real-time and transparent trading.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Smart Contract Integration: </span> Utilizing smart contracts automates and secures the execution of trades without intermediaries.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Cross-Chain Compatibility:  </span> GCN supports various blockchain networks, promoting interoperability among different digital assets.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>User-Friendly Interface: </span> A user-friendly interface ensures that even non-technical users can seamlessly navigate and trade on the platform.</p>
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                Challenges:
              </h2>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Scalability: </span> Addressing the challenge of scaling the platform to accommodate a growing user base and increasing transaction volume</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Regulatory Compliance:  </span> Ensuring compliance with evolving regulations and legal frameworks in the decentralized finance (DeFi) space.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Security:</span> Mitigating the risks associated with decentralized exchanges, including potential vulnerabilities and smart contract exploits.</p>
            </div>
          </section>
        </div>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="https://www.comfygen.com/img/solution-great-wallet.webp"
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
            <p className='text-base text-slate-800'>GCN addresses scalability challenges through a combination of innovative blockchain solutions and layer-2 scaling techniques. To meet regulatory compliance, the platform collaborates with legal experts and regulatory authorities, ensuring a robust legal framework. Enhanced security measures, including rigorous code audits and continuous monitoring, safeguard the platform against potential vulnerabilities.
            </p>
          </div>
        </section>

        <div className={`${styles.herobg} `}>
          <div className='bg-[#fffacd69] py-20'>
            <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 ">
              <div className='space-y-2 w-full'>
                <h3 className='text-4xl font-bold text-black' >Tools & Technologies</h3>
                <p className="text-[#000] text-white-800"><span className='text-lg	 font-bold'>Blockchain Technology:  </span>UUtilizing blockchain for secure and transparent transactions.</p>
                <p className="text-[#000] text-white-800"><span className='text-lg	 font-bold'>Smart Contracts: </span> Implementing smart contracts to automate trade execution.</p>
                <p className="text-[#000] text-white-800"><span className='text-lg	 font-bold'>Interoperability Protocols: </span> Incorporating protocols that enable cross-chain compatibility.</p>
                <p className="text-[#000] text-white-800"><span className='text-lg	 font-bold'>Decentralized Identity Solutions: </span> Enhancing user security through decentralized identity verification.</p>
                <p className="text-[#000] text-white-800"><span className='text-lg	 font-bold'>Scalability Solutions: </span> Implementing layer-2 scaling solutions to ensure efficient performance during high transaction volumes.</p>
              </div>
              <div className="flex justify-center w-full ">
                <Image src="https://www.comfygen.com/img/tools-technologies-great-wallet.webp" alt="Tools Technologies" className="rounded-lg " loader={uploadcareLoader} unoptimized={true} width={800} height={600} />
              </div>
            </section>
          </div>
        </div>

        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='p-4 bg-gray-200 rounded-t-md col-span-8'>
              <Image src="https://www.comfygen.com/img/footer-image-great-wallet.webp" alt='' width={989} height={742} className='w-full' />
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