import Head from "next/head";
import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

import dynamic from 'next/dynamic';
import Header from '../../../components/Newcomponet/layout/Header';
import CompanyHeroSection from '../../../components/Newcomponet/portfolio/CompanyHeroSection';
const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);
const Features = dynamic(() => import("../../../components/Newcomponet/portfolio/Features"),
  { loading: loader, ssr: true }
);
const TechStack = dynamic(() => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);







import styles from "../components/styles.module.css";
import { MdStar, MdStarHalf } from "react-icons/md";
import JSON_DATA from "./metaverse.json";

export default function about(props) {
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => setTalkToExpertModal(true);
  const closeModal = () => setTalkToExpertModal(false);

  let { initialData } = props;
  return (
    <div className="overflow-hidden">
      <Head>
        <title>
          VKSChat – Social Metaverse Development Portfolio | Metaverse Apps &
          Software
        </title>
        <link
          rel="canonical"
          href="https://www.comfygen.com/portfolio/ai-powered-medicine-ordering-app"
        />
        <meta
          name="description"
          content="Explore VKSChat’s Social Metaverse development portfolio. We craft cutting-edge Metaverse apps & software with AI, blockchain, and Web3 integration for immersive digital experiences."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="VKSChat – Social Metaverse Development Portfolio | Metaverse Apps & Software"
        />
        <meta
          property="og:description"
          content="Explore VKSChat’s Social Metaverse development portfolio. We craft cutting-edge Metaverse apps & software with AI, blockchain, and Web3 integration for immersive digital experiences."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/portfolio/ai-powered-medicine-ordering-app"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-09-10T07:43:51+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
      </Head>
      <div className="">

         {/* <Header /> */}

      </div>
      <div className="overflow-hidden ">
        <div className="lg:py-[7rem] lg:mt-[110px] py-[5rem] bg-[linear-gradient(135deg,#3f3d9b_0%,#5a59c9_60%,#3b3a8f_100%)] ">
          <CompanyHeroSection
            heading="VKSChat – Social Metaverse Development"
            subhead=""
            ptag="Comfygen played a pivotal role in enhancing VKSChat, a leading Social Metaverse where users interact in customizable virtual worlds using 3D avatars and VR technology. Our team implemented AI-powered avatars, VR networking solutions, and real-time multiplayer experiences to create an engaging and interactive digital environment."
            imageSrc="https://www.comfygen.com/image/hero-section-social-metaverse-development.webp"
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
          heading="Challenges We Solved"
          points={[
            "<b>Scalability Issues – </b> Optimized Metaverse servers to handle high concurrent user traffic.",
            "<b>Latency in VR Communication – </b> Implemented real-time voice processing for low-latency voice chat and interactions.",
            "<b>Security & Moderation – </b> Developed AI-driven user moderation tools to prevent content violations and bot interference.",
          ]}
          imageSrc="https://www.comfygen.com/image/challenges-we-overcame-social-metaverse-development.webp"
        />
        <Features
          heading="Features We Developed"
          points={[
            "<b>Advanced Avatar Customization – </b> Users can create highly detailed 3D avatars with full-body motion tracking.",
            "<b>Interactive Virtual Worlds – </b> Developed user-generated Metaverse spaces for social interaction and events.",
            "<b>Real-Time Multiplayer Connectivity – </b> Designed a low-latency networking system for seamless VR-based communication.",
            "<b>Cross-Platform Compatibility – </b> Ensured smooth integration across PC, Oculus Rift, HTC Vive, and SteamVR.",
            "<b>AI-Powered Content Moderation – </b> Integrated smart moderation tools to detect inappropriate content and enhance community safety.",
          ]}
          imageSrc="https://www.comfygen.com/image/features-social-metaverse-development.webp"
          imagePosition="left"
        />

        <Features
          heading="Our Metaverse Development Solutions"
          points={[
            "<b>AI-Driven Virtual Avatars  </b>– Integrated gesture recognition and emotion-based animations for realistic avatar expressions.",
            "<b>Optimized VR Networking – </b> Developed a cloud-based multiplayer framework to ensure seamless VR interactions.",
            "<b>Customizable Virtual Spaces – </b> Built tools that allow users to create and monetize their virtual environments.",
          ]}
          imageSrc="https://www.comfygen.com/image/solution-social-metaverse-development.webp"
        />
        <Features
          heading="Business Benefits"
          points={[
            "<b>New Revenue Streams – </b> Enabled monetization through virtual events, premium assets, NFT-based avatars, and advertisements.",
            "<b>Global Audience Engagement – </b> Enhanced social networking and user-generated content creation.",
            "<b>Scalable VR Experiences – </b> Designed a flexible architecture to support brand activations, Metaverse commerce, and interactive digital experiences.",
          ]}
          imageSrc="https://www.comfygen.com/image/business-benefits-social-metaverse-development.webp"
          imagePosition="left"
        />

        <TechStack
          title="Technology Stack: Pharmacy Chain App"
          description="Our team of expert developers used the latest technologies to build a robust and scalable medicine delivery platform."
          filterCategory={["crypto"]}
        />
        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                Why Choose Comfygen for Social Metaverse Development?
                </h2>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                {JSON_DATA.LeadingSoftware.map((elem) => {
                  const { title, decs, num } = elem;
                  return (
                    <div className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]">
                      <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                        {num}
                      </div>
                      <h3 className="text-2xl text-[#212121] font-semibold">
                        {title}
                      </h3>
                      <p dangerouslySetInnerHTML={{ __html: decs }}></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F5F5F9] lg:py py-10">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto space-y-6">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                What Our Client Says
              </h2>
              <p className="xl:text-base text-sm text-black">
                500+ Reviews Of Delighted Clients with clutch{" "}
                <span className="text-[#FFB600]">4.5 Star</span> Rating
              </p>
            </div>

            <div>
              <div className={styles.testimonial}>
                <h3 className="lg:text-xl text-lg text-[#212121] font-medium ml-4">
                  {" "}
                  Mateo Kovács
                </h3>
                <p className="text-[#5556D1] md:text-base text-sm font-medium ml-4">
                  Budapest, Hungary
                </p>
              </div>
              <div className="space-y-2 mt-4">
                <div className="">
                  <span className="text-[#FFB600] flex ">
                    <MdStar size={24} /> <MdStar size={24} />
                    <MdStar size={24} />
                    <MdStar size={24} /> <MdStarHalf size={24} />
                  </span>
                </div>
                <div>
                  <p className="md:text-base text-sm text-black">
                    "Comfygen transformed VKSChat into a next-gen Social
                    Metaverse by integrating AI-driven avatars, real-time
                    interactions, and advanced VR networking solutions. Their
                    expertise in Metaverse Development Services helped us scale
                    rapidly while ensuring seamless user experiences!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
       <BlogSection initialData={initialData} />
    </div>
  );
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
