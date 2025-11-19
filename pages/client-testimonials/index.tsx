import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSectionForCompany from "../components/HeroSectionForCompany";
import LazyLoad from "react-lazy-load";
export default function Altcoin(props:any) {
  let { initialData } = props;

  const Header = dynamic(() => import("../components/Header"), {
    loading: () => <p>Loading...</p>,
  });;

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };


  return (
    <>
      <Head>
        <title>Client Testimonisal - Comfygen.com</title>
        <meta
          name="description"
          content="We aim to provide the best development services and our company is added with top designers who are experts in their field."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/client-testimonials"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Client Testimonisal - Comfygen.com"
        />
        <meta
          property="og:description"
          content=" We aim to provide the best development services and our company is added with top designers who are experts in their field."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/client-testimonials"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/client-testimonials"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <div className="overflow-hidden">
        <div className="lg:bg-right bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/career-hero-img.webp')]">
          <HeroSectionForCompany
            heading="Client Testimonials"
            ptag="Empowering Innovators to Shape the Future of IT."
            btnName="Talk With Expert"
            btnLink="/contact-us"
            img={{
              src: "https://www.comfygen.com/image/client-testimonials-hero-img.webp",
              width: 755,
              height: 360
            }}
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />

        </div>
        {/* <Testimonial /> */}
       
      </div>
    </>
  );
}

