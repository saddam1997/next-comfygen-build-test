import React, { useRef, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowallet.json";

import HeroSectionforHome from "../../components/HeroSectionforHome"
import Emerging from "../../components/Emerging";

import Header from "../../components/Newcomponet/layout/Header"
import IndustryGrid from "../../components/IndustryGrid";

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const InfoSection = dynamic(
  () => import("../../components/InfoSection"),
  { ssr: true }
);

const CardFeatures = dynamic(
  () => import("../../components/CardFeatures"),
  { ssr: true }
);
const CardWallets = dynamic(
  () => import("../../components/CardWallets"),
  { ssr: true }
);

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


export default function Ecommerce(props: any) {
  let { initialData } = props;
  const slider: any = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };





  const jsonLdData = [


    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Wallet Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen offers secure, scalable, and user-friendly wallet development solutions, including e-wallets, crypto wallets, DeFi wallets, NFT wallets, and enterprise-grade digital payment systems.",
      "url": "https://www.comfygen.com/wallet-development-company ",
      "mainEntityOfPage": "https://www.comfygen.com/wallet-development-company ",
      "areaServed": "Global",
      "serviceType": [
        "E-Wallet Development",
        "Crypto Wallet Development",
        "NFT Wallet Development",
        "DeFi Wallet Development",
        "Enterprise Wallet Solutions",
        "Mobile Wallet App Development",
        "White Label Wallet Development"
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
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is wallet development, and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wallet development is the process of building digital or crypto wallets that allow users to securely store, send, receive, and manage money or digital assets. It is essential for enabling secure, fast, and convenient transactions for businesses and customers."
          }
        },
        {
          "@type": "Question",
          "name": "What types of wallets can be developed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wallets can include e-wallets, crypto wallets, multi-currency wallets, DeFi wallets, NFT wallets, mobile wallets, web and desktop wallets, and specialized wallets for industries like gaming, healthcare, travel, and finance."
          }
        },
        {
          "@type": "Question",
          "name": "Can a wallet be customized to match a brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wallets can be fully customized with branding options, UI/UX design, and feature tailoring to meet unique business requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Are wallets secure for handling digital assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Secure wallets use multi-layer encryption, multi-signature security, cold storage options, and regulatory compliance measures to protect both fiat and crypto assets."
          }
        },
        {
          "@type": "Question",
          "name": "Are wallets suitable for both startups and large enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Scalable wallet solutions can cater to startups, fintechs, banks, corporates, and large enterprises, maintaining reliability even with millions of transactions."
          }
        },
        {
          "@type": "Question",
          "name": "What platforms do wallets support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wallets can be developed for mobile (iOS, Android), web, desktop, and hardware devices, ensuring cross-platform accessibility and seamless user experience."
          }
        },
        {
          "@type": "Question",
          "name": "Can wallets handle multiple currencies and cryptocurrencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wallets can support multi-currency fiat payments, multiple cryptocurrencies, tokens, stablecoins, and NFTs, including cross-chain and multi-asset management."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to develop a wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Development time depends on features and complexity. Simple e-wallets can be launched in a few weeks, while advanced crypto or enterprise wallets may take several months."
          }
        },
        {
          "@type": "Question",
          "name": "Are ready-to-launch wallet solutions available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. White-label wallet solutions can be deployed quickly with full customization and branding, ideal for businesses entering the market fast."
          }
        },
        {
          "@type": "Question",
          "name": "Can payment gateways be integrated into a wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wallets can integrate debit/credit cards, UPI, net banking, and crypto payment gateways for seamless transactions."
          }
        }
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.comfygen.com/ ",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blockchain Development",
          item: "https://www.comfygen.com/blockchain-development ",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: " Wallet Development Company",
          item: "https://www.comfygen.com/wallet-development-company ",
        },
      ],
    },
  ];

  return (
    <>
      <Head>

        <title>
          On-Demand Wallet Development Service | Custom Digital Wallet App
        </title>
        <meta name="description" content="Launch a secure digital wallet with our on-demand wallet development service. We build scalable wallet apps with payments, transfers, and advanced security features." />

        <meta name="keywords" content="E-Wallet Development, Crypto Wallet Development, NFT Wallet Development, DeFi Wallet Development, Enterprise Wallet Solutions, Mobile Wallet App Development, White Label Wallet Development" />

        {/* canonical */}
        <link rel="canonical" href="https://www.comfygen.com/wallet-development-company" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wallet Development Company" />
        <meta name="twitter:description" content=" Build powerful e-wallets and crypto wallets with Comfygen. From mobile payments to enterprise-grade crypto storage, our wallet development services ensure security, scalability, and seamless user experience." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/crypto-wallet-development/crypto-wallet-development-og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/wallet-development-company/wallet-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/wallet-development-company/wallet-development-company.webp" />
        <meta property="og:image:alt" content="wallet development company" />
        <meta property="og:url" content="https://www.comfygen.com/wallet-development-company" />
        <meta property="og:title" content="Secure & Scalable Wallet Development Solutions | Comfygen" />
        <meta property="og:description" content="Build powerful e-wallets and crypto wallets with Comfygen. From mobile payments to enterprise-grade crypto storage, our wallet development services ensure security, scalability, and seamless user experience." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-24 pt-16">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <InfoSection InformationData={JSON_DATA?.InformationData} />
        <CardFeatures featuresData={JSON_DATA.featuresData} />
        <CardWallets featuresData={JSON_DATA.featuresData2} />
        <Emerging emerging={JSON_DATA.EmergingData} />
        <Solution techData={JSON_DATA.technologyData} />
        <IndustryGrid />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <TestimonialSection testimonials={JSON_DATA.testimonialData} />
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


