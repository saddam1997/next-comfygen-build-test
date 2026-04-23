
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./nft-wallet-development.json";
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

import AppCardClones from "../../components/AppCardClones"

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});
import ClientTestimonials from "../../components/TestimonialSection";
import ClientStories from "../../components/ClientStories";
const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);

export default function ClinicalApp(props: any) {
  let { initialData } = props;


  const jsonLdData = [



    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "NFT Wallet Development",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen provides secure, scalable, and feature-rich NFT wallet development solutions with multi-chain support, marketplace integration, and white-label customization for startups and enterprises.",
      "url": "https://www.comfygen.com/nft-wallet-development",
      "mainEntityOfPage": "https://www.comfygen.com/nft-wallet-development",
      "areaServed": "Global",
      "serviceType": [
        "NFT Wallet Development",
        "Multi-Chain NFT Wallet Solutions",
        "Custom NFT Wallets",
        "NFT Marketplace Integration",
        "White-Label NFT Wallets"
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
          "item": "https://www.comfygen.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Wallet Development Comapny",
          "item": "https://www.comfygen.com/wallet-development-company"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "NFT Wallet Development",
          "item": "https://www.comfygen.com/nft-wallet-development "
        }
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an NFT wallet, and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An NFT wallet is a secure digital wallet that allows users to store, manage, and trade NFTs safely. It is crucial for protecting digital assets, enabling seamless transactions, and managing NFT portfolios efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Can I integrate my NFT wallet with existing marketplaces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Comfygen’s NFT wallets can be integrated with popular marketplaces, enabling users to mint, buy, sell, and trade NFTs directly from the wallet."
          }
        },
        {
          "@type": "Question",
          "name": "Which blockchains do you support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our NFT wallet development solutions support multiple blockchains, including Ethereum, Solana, Polygon, and Binance Smart Chain, providing multi-chain NFT management and cross-platform flexibility."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure wallet security?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We implement enterprise-grade security, including private key management, two-factor authentication, encrypted storage, and regular audits to safeguard all digital assets and ensure secure NFT transactions."
          }
        },
        {
          "@type": "Question",
          "name": "How long does NFT wallet development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The timeline depends on the features and customization required. Comfygen delivers fast, scalable, and secure NFT wallet solutions, ensuring timely deployment without compromising quality."
          }
        }
      ]
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Best NFT Wallet Development Company | Secure & Scalable NFT Wallets
        </title>
        <meta
          name="description"
          content="Comfygen is the best NFT wallet development company, delivering secure, scalable, and feature-rich wallets for managing, and trading NFTs. Get blockchain-integrated wallets with advanced security."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/nft-wallet-development"
        />
        <meta name="keywords" content="NFT Wallet Development, Multi-Chain NFT Wallet Solutions, Custom NFT Wallets, NFT Marketplace Integration, White-Label NFT Wallets" />

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
        <meta name="apple-mobile-web-app-title" content="NFT Wallet Development" />


        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom NFT Wallet Development Services | Multi-Chain NFT Wallets" />
        <meta name="twitter:description" content=" Launch your feature-rich NFT wallet with Comfygen. Enjoy enterprise-grade security, multi-chain blockchain support, and seamless digital asset management." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Faceb/ook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/nft-wallet-development/nft-wallet-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/nft-wallet-development/nft-wallet-development.webp" />
        <meta property="og:image:alt" content="NFT Wallet Development Company | Secure & Scalable NFT Crypto Wallets" />
        <meta property="og:url" content="https://www.comfygen.com/nft-wallet-development" />
        <meta property="og:title" content="Comfygen NFT Wallet Solutions | Secure, Scalable & User-Friendly" />
        <meta property="og:description" content="Develop secure NFT wallets with Comfygen. Our solutions include multi-chain support, marketplace integration, intuitive portfolio management, and white-label customization." />


        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>


       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <Solution techData={JSON_DATA.Business} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />


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