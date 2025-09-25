import Head from 'next/head';
import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import Header from '../../components/Header';
import CompanyHeroSection from '../../components/CompanyHeroSection';
import FormSec from '../../components/FormSec';
import Features from '../components/Features';
import InfomationFirst from '../components/InfomationFirst';
import InfomationSecound from '../components/InfomationSecound';
import TechStack from '../../components/TechStack';
import styles from "../components/styles.module.css"
import { MdStar, MdStarHalf } from 'react-icons/md';

export default function about(props) {
    const [talkToExpertModal, setTalkToExpertModal] = useState(false);
    const openModal = () => setTalkToExpertModal(true);
    const closeModal = () => setTalkToExpertModal(false);

    let { initialData } = props;
    return (
        <div className='overflow-hidden'>
            <Head>
                <title>Blockchain-Based Real Estate Tokenization Software | Comfygen</title>
                <link rel="canonical" href="https://www.comfygen.com/portfolio/blockchain-based-real-estate-tokenization-software" />
                <meta name="description" content="Explore Comfygen’s advanced blockchain-based real estate tokenization software. Securely digitize property assets, enable fractional ownership, and simplify global real estate investment with our custom blockchain solutions." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Blockchain-Based Real Estate Tokenization Software | Comfygen" />
                <meta property="og:description" content="Explore Comfygen’s advanced blockchain-based real estate tokenization software. Securely digitize property assets, enable fractional ownership, and simplify global real estate investment with our custom blockchain solutions." />
                <meta property="og:url" content="https://www.comfygen.com/portfolio/blockchain-based-real-estate-tokenization-software" />
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
            <div className="overflow-hidden">
                <div className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/portfolio-hero-bg-img.webp')]">
                    <CompanyHeroSection
                        heading="Blockchain-Based Real Estate Tokenization Software"
                        subhead=""
                        ptag="Developed a blockchain-based solution to modernize real estate transactions, enhancing transparency, reducing costs, and streamlining operations through blockchain technology. Created a decentralized platform for property tokenization and fractional ownership, enabling secure, automated transactions for a more efficient real estate ecosystem."
                        imageSrc="https://www.comfygen.com/image/hero-image-blockchain-based-real-estate-tokenization-software.webp"
                        buttonText="Talk To Consultant"
                        openModal={openModal}
                        closeModal={closeModal}
                        talkToExpertModal={talkToExpertModal}
                        buttonLink="/portfolio"
                        imageHeight={423}
                        imageWidth={640}
                    />
                </div>

                <Features
                    heading="Features"
                    points={[
                        "<span class='font-semibold'>Tokenization of Assets: </span> This enabled fractional ownership of high-value properties, making real estate investment accessible to a broader audience.",
                        "<span class='font-semibold'>Smart Contracts: </span> Automated property transactions, reducing the need for intermediaries and minimizing human error.",
                        "<span class='font-semibold'>Decentralized Property Registry: </span> Provided a secure, tamper-proof record of property ownership and transaction history.",
                        "<span class='font-semibold'>Investor Dashboard: </span> This offered real-time insights into property performance and investment returns.",
                        "<span class='font-semibold'>Compliance Integration: </span> Ensured adherence to local real estate regulations through built-in compliance checks.",
                       
                    ]}
                    imageSrc="https://www.comfygen.com/image/features-image-blockchain-based-real-estate-tokenization-software.webp"
                />

                <InfomationFirst
                    heading="Challenge"
                    points={[
                        "The client faced high transaction costs, lengthy paperwork, and a lack of transparency in real estate transactions.",
                        "Manual processes led to errors, fraud, delays, and mistrust among stakeholders.",
                        "These challenges deterred potential investors and slowed market growth.",
                        "Required a scalable, secure, and efficient blockchain-based solution to remain competitive."
                    ]}
                    imageSrc="https://www.comfygen.com/image/challenges-image-blockchain-based-real-estate-tokenization-software.webp"
                />
                <InfomationSecound
                    heading="Solution:"
                    points={[
                        "Designed and implemented a blockchain-based platform tailored to the client’s real estate needs.",
                        "Utilized Ethereum smart contracts to automate property transactions for speed and accuracy.",
                        "Integrated a decentralized property registry for a transparent and immutable ownership record.",
                        "Developed an intuitive investor dashboard with real-time data on property performance and investment opportunities.",
                        "Built with scalability in mind, enabling future expansion of real estate offerings."
                    ]}
                    imageSrc="https://www.comfygen.com/image/solutions-image-blockchain-based-real-estate-tokenization-software.webp"
                />
                <InfomationFirst
                    heading="Business Benefits"
                    points={[
                        " <span class='font-semibold'>Cost Reduction: </span> Automated processes reduced transaction costs by 30%.",
                        " <span class='font-semibold'>Increased Transparency: </span> Blockchain technology eliminates fraud and improves trust among stakeholders.",
                        " <span class='font-semibold'>Faster Transactions: </span> Smart contracts cut transaction times from weeks to just a few days.",
                        " <span class='font-semibold'>Broader Investor Base: </span> Fractional ownership attracted smaller investors, increasing participation by 40%.",
                        " <span class='font-semibold'>Regulatory Compliance: </span> Built-in compliance checks ensured adherence to local real estate laws, minimizing legal risks."
                    ]}
                    imageSrc="https://www.comfygen.com/image/business-benefits-image-blockchain-based-real-estate-tokenization-software.webp"
                />

                <TechStack
                    title="Our Edgy Tech-Stacks Use for finance management app development"
                    description="The only focus is not the engagement, but building a highly-secured and robust web or application. For strong Dating app development, some edgy tech stacks are being used."
                    filterCategory={["crypto"]}
                />


                <section className='bg-[#fff] lg:py py-10'>
                    <div className='2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto space-y-6'>
                        <div className='space-y-2'>
                            <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                                What Our Client Says
                            </h2>
                            <p className='xl:text-base text-sm text-black'>500+ Reviews Of Delighted Clients with clutch <span className='text-[#FFB600]'>4.5 Star</span> Rating</p>
                        </div>

                        <div>
                        <div className={styles.testimonial}>
                            <h3 className='lg:text-xl text-lg text-[#212121] font-medium ml-4'>Faisal Al-Qahtani </h3>
                            <p className='text-[#5556D1] md:text-base text-sm font-medium ml-4'>Dammam, EAS, Saudi Arabia</p>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <div className=''>
                                <span className='text-[#FFB600] flex '><MdStar size={24} /> <MdStar size={24} /><MdStar size={24} /><MdStar size={24} /> <MdStarHalf size={24} /></span>
                            </div>
                            <div>
                                <p className='md:text-base text-sm text-black'>"Working with Comfygen was a game-changer for our business. Their blockchain expertise transformed our real estate transaction process, making it faster, more secure, and cost-effective. The tokenization platform they built has opened up new investment opportunities and significantly improved transparency. We highly recommend their services to anyone looking to innovate in the real estate industry"</p>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                </section>
                <FormSec />
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