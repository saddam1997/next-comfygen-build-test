
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptowallet.json";
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
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
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

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});


const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});
import IndustryGrid from "../../components/IndustryGrid";

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);



export default function Ecommerce(props: any) {
  let { initialData } = props;



  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a white label crypto wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A white label crypto wallet is a ready-made, fully customizable wallet solution that allows businesses to launch their own branded cryptocurrency platform without building from scratch. It comes pre-integrated with essential features like multi-currency support, security protocols, and user management."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on customization and features, a white label crypto wallet can be launched in 4–8 weeks. Comfygen ensures fast deployment without compromising on security or performance."
          }
        },
        {
          "@type": "Question",
          "name": "Can you customize design & features?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer complete UI/UX customization, branding, and feature integration, including NFT support, DeFi modules, staking, and more, so your wallet matches your business goals."
          }
        },
        {
          "@type": "Question",
          "name": "Is it secure and compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our wallets include bank-level security, two-factor authentication, biometric verification, private key encryption, and multi-signature support. We also integrate KYC/AML compliance to meet global regulations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost range?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of a white label crypto wallet depends on features, customization, blockchain integrations, and additional modules. Contact us for a personalized quote tailored to your business needs."
          }
        }
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
          "name": "Wallet development company",
          "item": "https://www.comfygen.com/wallet-development-company  "
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": " Smart Contract Wallet Development Company",
          "item": "https://www.comfygen.com/smart-contract-wallet-development  "
        }

      ]
    }
    ,
  ];

  return (
    <>
      <Head>
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <title>
          Best Smart Contract Wallet Development Services | Comfygen
        </title>
        <meta
          name="description"
          content="Comfygen offers smart contract wallet development services with secure, scalable, and multi-chain solutions. Enable automated transactions, DeFi integration, and advanced blockchain security."
        />

        <link
          rel="canonical"
          href=" https://www.comfygen.com/smart-contract-wallet-development"
        />


        {/* keywords */}
        <meta name="keywords" content="Smart Contract Wallet Development, Custom Crypto Wallet Development, Multi-Chain Wallet Solutions, DeFi Wallet Integration, Automated Crypto Wallets, Enterprise Blockchain Wallet Solutions, Secure Digital Asset Management" />


        {/* <!-- Robots → */}

        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />


        {/* <!-- Viewport and/ Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Smart contract Wallet Development" />



        {/* <!-- New in iOS6 -->
<!-- Author and Company Information --> */}

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
        <meta name="twitter:title" content="Comfygen Smart Contract Wallet Development Services" />
        <meta name="twitter: description" content=" Create scalable, user-friendly smart contract wallets with advanced features, cross-chain support, and seamless digital asset management." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-image.jpg" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/smart-contract-wallet-development/smart-contract-wallet-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/smart-contract-wallet-development/smart-contract-wallet-development.webp" />
        <meta property="og:image:alt" content="smart contract wallet development" />
        <meta property="og:url" content="https://www.comfygen.com/smart-contract-wallet-development" />
        <meta property="og: title" content=" Expert Smart Contract Wallet Development Company" />
        <meta property="og: description" content="Comfygen builds secure, automated, and multi-chain smart contract wallets for DeFi, NFT platforms, and enterprise blockchain solutions." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones/>
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Solution techData={JSON_DATA.Wallets} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <IndustryGrid />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <FaqSection faqData={JSON_DATA.Frequently} title="" />
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

