import React, { useState } from "react";
import Head from "next/head";
import JSON_DATA from "./web3-wallet-development.json";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const LatestTechnology = dynamic(() => import("../../components/LatestTechnology"), {
  ssr: true,
});

const IndustriesSection = dynamic(() => import("../../components/IndustriesSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const TestimonialSection = dynamic(() => import("../../components/TestimonialSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);



import Emerging from "../../components/Emerging";



export default function ClinicalApp(props: any) {
  let { initialData } = props;




  const jsonLdData = [
 

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web3 Wallet Development",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen provides secure, scalable, and feature-rich Web3 wallet development solutions with multi-chain support, DeFi and NFT integration, and custom blockchain wallet solutions for startups and enterprises.",
      "url": "https://www.comfygen.com/web3-wallet-development ",
      "mainEntityOfPage": "https://www.comfygen.com/web3-wallet-development ",
      "areaServed": "Global",
      "serviceType": [
        "Web3 Wallet Development",
        "Multi-Chain Crypto Wallet Solutions",
        "Custom Blockchain Wallets",
        "DeFi Wallet Integration",
        "NFT Wallet Development"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },

  

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.comfygen.com/ "
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wallet Development Company",
          "item": "https://www.comfygen.com/wallet-development-company "
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NFT Wallet Development",
          "item": "https://www.comfygen.com/web3-wallet-development "
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Web3 wallet development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Web3 wallet development involves creating decentralized wallets that allow users to store, manage, and trade cryptocurrencies, NFTs, and digital assets securely without relying on intermediaries. These wallets interact directly with blockchain networks using smart contracts."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a Web3 wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The development timeline depends on the features, blockchain integrations, and customization level. On average, a custom Web3 wallet takes 6 to 12 weeks from design to deployment."
          }
        },
        {
          "@type": "Question",
          "name": "Which blockchains are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comfygen supports major blockchains, including Ethereum, Binance Smart Chain (BSC), Polygon, Solana, Avalanche, and Tron, ensuring seamless multi-chain wallet experiences."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure wallet security?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We implement AES and SHA-256 encryption, multi-signature authentication, private key encryption, and AI-powered security audits to ensure complete data protection."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate DeFi and NFTs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our wallets support DeFi staking, token swaps, liquidity pools, and NFT minting, trading, and marketplace integration, enabling a complete decentralized finance and digital asset experience."
          }
        }
      ]
    }
  ];



  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Best Web3 Wallet Development Company | Crypto Wallets by Comfygen</title>
        <meta
          name="description"
          content="Build secure, scalable, and feature-rich Web3 wallets with Comfygen — a trusted Web3 wallet development company offering multi-chain, DeFi, and NFT integrations."
        />

        <meta name="keywords" content="As a leading Web3 wallet development company, we provide customized wallet development solutions that offer multi-chain, DeFi, and NFT integrations" />

        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/web3-wallet-development" />

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Web3 Wallet Development" />

        {/* <!-- New in iOS6 --> */}
        {/* <!-- Author and Company Information --> */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag --> */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Web3 Wallet Development Services | Multi-Chain Crypto Wallets" />
        <meta name="twitter:description" content="Launch your secure and feature-rich Web3 wallet with Comfygen. Benefit from multi-chain support, DeFi and NFT integration, and seamless digital asset management." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/web3-wallet-development/web3-wallet-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Faceb/ook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/web3-wallet-development/web3-wallet-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/web3-wallet-development/web3-wallet-development.webp" />
        <meta property="og:image:alt" content="Web3 Wallet Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/web3-wallet-development " />
        <meta property="og:title" content="Comfygen Web3 Wallet Solutions | Secure, Scalable & User-Friendly" />
        <meta property="og:description" content="Develop secure Web3 wallets with Comfygen. Our solutions include multi-chain support, DeFi and NFT integration, intuitive digital asset management, and custom blockchain wallet development." />
        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
       {/* <Navbar /> */}
      <div className="overflow-hidden lg:pt-0 pt-16">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Consultancy consultancyData={JSON_DATA.consultancyData} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Emerging emerging={JSON_DATA.EmergingData} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.technologyData} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <IndustriesSection Industries={JSON_DATA.Industries} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
        <TestimonialSection testimonials={JSON_DATA.customTestimonials} />
        <FaqSection faqData={JSON_DATA.Frequently} />
        <BlogSection initialData={initialData} />
      </div>
    </>
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
