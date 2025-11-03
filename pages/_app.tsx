import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
// import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { FaChevronUp } from "react-icons/fa6";
import ProtectedLayoutWrapper from "./super-admin/layout";
import ClientTestimonials from "./components/ClientTestimonials";
import BlockchainFooter from "./componentsnew/blockchain-Footer";
import EcommerceFooter from "./componentsnew/ecommerce-Footer";
import Script from "next/script";

import { Poppins } from 'next/font/google';
import Head from "next/head";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// import ProtectedLayoutWrapper from "./super-admin/layout";
const blogPostSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.comfygen.com/",
  name: "Mobile App and Web Development Company",
  image: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  url: "https://www.comfygen.com/",
  telephone: "+91 9587867258",
  review: {
    "@type": "Review",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4.9",
    bestRating: "5",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
    addressLocality: "Vaishali Nagar",
    addressRegion: "Jaipur",
    postalCode: "302021 ,",
    addressCountry: "IN",
  },
  offers: {
    "@type": "Offer",
    price: "20-25",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  author: {
    "@type": "Person",
    name: "Comfygen",
  },
};

const DreamProject = dynamic(() => import("./components/DreamProject"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Talkchat = dynamic(() => import("./components/Talkchat"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const GoogleTagManagerScript = dynamic(
  () => import("./components/GoogleTagManagerScript"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
const GoogleTagManagerNoScript = dynamic(
  () => import("./components/GoogleTagManagerNoScript"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
const GetinTouch = dynamic(() => import("./components/Getintouch"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ContactLinks = dynamic(() => import("./components/ContactLinks"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), {
  loading: () => <p>Loading...</p>,
});

export const config = {
  unstable_runtimeJS: false,
};

function top() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function MyApp({ Component, pageProps }: AppProps, props: any) {
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const isSuperAdminPage = router.asPath.includes("/super-admin");
  const isSuperAdminLogin = router.asPath.includes("/super-admin/login");
  return (
    <React.Fragment>
    
      {/* <NextSeo
        title="Custom Blockchain & Mobile App Development Company"
        openGraph={{
          url: "https://www.comfygen.com/",
          type: "Website",
          images: [{ url: "https://www.comfygen.com/media/svg/comfygen-logo.svg" }],
        }}
        additionalMetaTags={[
          { property: "schema:type", content: "LocalBusiness" },
          {
            property: "schema:mainEntityOfPage",
            content: "https://www.comfygen.com/",
          },
          { property: "schema:telephone", content: "+91 9587867258" },
          {
            property: "schema:LocalBusiness",
            content: JSON.stringify(blogPostSchema),
          },
        ]}
      /> */}
      {isSuperAdminLogin ? (
        <Component {...pageProps} />
      ) : isSuperAdminPage ? (
        <>
          <ProtectedLayoutWrapper>
            <Component {...pageProps} />
          </ProtectedLayoutWrapper>
        </>
      ) : (

        <main className={`${poppins.className} overflow-y-auto max-w-[1600px] mx-auto`}>

          {/* <PagesTopLoader /> */}
          <Component {...pageProps} />
          {!router?.asPath?.includes("/crypto-trading-bot-development") &&
            !router?.asPath?.includes("/astrology-app-development") &&
            !router?.asPath?.includes("/tutor-app-development") &&
            !router?.asPath?.includes("/medicine-app-development") &&
            !router?.asPath?.includes("/cryptocurrency-exchange-development") &&
            !router?.asPath?.includes("/blockchain-development") &&
            !router?.asPath?.includes("/blockchain-consulting-services") &&
            !router?.asPath?.includes("/crypto-wallet-development") &&
            !router?.asPath?.includes(
              "/cryptocurrency-mlm-software-development"
            ) &&
            !router?.asPath?.includes("/decentralized-exchange-development") &&
            !router?.asPath?.includes("/crypto-token-development-company") &&
            !router?.asPath?.includes("/mobile-banking-app-development") &&
            !router?.asPath?.includes("/ico-development") &&
            !router?.asPath?.includes("/upi-payment-app-development") &&
            !router?.asPath?.includes("/neo-bank-app-development") &&
            !router?.asPath?.includes("/banking-software-development") &&
            !router?.asPath?.includes("/insurance-app-development") &&
            !router?.asPath?.includes(
              "/white-label-crypto-exchange-development"
            ) &&
            !router?.asPath?.includes("/salon-app-development") &&
            !router?.asPath?.includes(
              "/centralized-crypto-exchange-development"
            ) &&
            !router?.asPath?.includes("/hybrid-crypto-exchange-development") &&
            !router?.asPath?.includes("/stock-trading-app-development") &&
            !router?.asPath?.includes("/crypto-launchpad-development") &&
            !router?.asPath?.includes("/credit-scoring-app-development") &&
            !router?.asPath?.includes("/otc-crypto-exchange-development") &&
            !router?.asPath?.includes("/ewallet-app-development") &&
            !router?.asPath?.includes("/crypto-nft-exchange-development") &&
            !router?.asPath?.includes(
              "/crypto-derivatives-exchange-development"
            ) &&
            !router?.asPath?.includes("/p2p-payment-app-development") &&
            !router?.asPath?.includes(
              "/crypto-margin-trading-exchange-development"
            ) &&
            !router?.asPath?.includes("/islamic-bank-app-development") &&
            !router?.asPath?.includes("/crypto-payment-gateway-development") &&
            !router?.asPath?.includes("/ai-crypto-exchange-development") &&
            !router?.asPath?.includes("/exam-preparation-app-development") &&
            !router?.asPath?.includes(
              "/multi-currency-crypto-exchange-development"
            ) &&
            !router?.asPath?.includes("/language-learning-app-development") &&
            !router?.asPath?.includes("/food-delivery-app-development") &&
            !router?.asPath?.includes(
              "/ai-interview-scheduling-software-development"
            ) &&
            !router?.asPath?.includes(
              "/crypto-exchange-admin-panel-development"
            ) &&
            !router?.asPath?.includes("/telemedicine-app-development-new") &&
            !router?.asPath?.includes("/quick-commerce-app-development") &&
            !router?.asPath?.includes("/grocery-app-development") &&
            !router?.asPath?.includes("/ecommerce") &&
            !router?.asPath?.includes("/mobile-app-development") &&
            !router?.asPath?.includes("/data") &&
            !router?.asPath?.includes("/white-label-mobile-app-development") &&
            !router?.asPath?.includes("/blockchain-development") &&
            !router?.asPath?.includes("/personal-finance-app-development") &&
            !router?.asPath?.includes("/car-finance-app-development") &&
            !router?.asPath?.includes("/roadside-assistance-app-development") &&
            !router?.asPath?.includes("/milk-delivery-app-development") &&
            !router?.asPath?.includes("/flower-delivery-app-development") &&
            !router?.asPath?.includes("/business-directory-app-development") &&
            !router?.asPath?.includes("/home-service-app-development") &&
            !router?.asPath?.includes("/health-tracking-app-development") &&
            !router?.asPath?.includes("/logistics-app-development") &&
            !router?.asPath?.includes("/water-delivery-app-development") &&
            !router?.asPath?.includes("/pizza-delivery-app-development") &&
            !router?.asPath?.includes("/blockchain-wallet-development") &&
            !router?.asPath?.includes("/ai-development") &&
            !router?.asPath?.includes("/dating-app-development") ? (
            <>
              {/* <ClientTestimonials /> */}
            </>
          ) : null}
          {!router?.asPath?.includes("/de/") &&
            !router?.asPath?.includes("/ca/") &&
            router?.asPath !== "/" &&
            !router?.asPath?.includes("/thank-you") &&
            !router?.asPath?.includes("/portfolio") &&
            !router?.asPath?.includes("/contact-us") &&
            !router?.asPath?.includes("/career") ? (
            <GetinTouch />
          ) : null}

          {/* {!router?.asPath?.includes("/de/") &&
          !router?.asPath?.includes("/ads/mobile-app-development") ? (
            <Footer />
          ) : null} */}

          {router?.asPath?.includes("/blockchain-development") ||
            router?.asPath?.includes("/blockchain-consulting-services") ||
            router?.asPath?.includes("/custom-blockchain-development-company") ||
            router?.asPath?.includes("/substrate-development-company") ||
            router?.asPath?.includes("/polygon-blockchain-development") ||
            router?.asPath?.includes("/hyperledger-blockchain-development") ||
            router?.asPath?.includes("/multichain-blockchain-development") ||
            router?.asPath?.includes("/solana-blockchain-development-company") ||
            router?.asPath?.includes("/stellar-blockchain-development-company") ||
            router?.asPath?.includes(
              "/ethereum-blockchain-development-company"
            ) ||
            router?.asPath?.includes("/metaverse-development") ||
            router?.asPath?.includes("/pow-blockchain-development-company") ||
            router?.asPath?.includes("/poa-blockchain-development-company") ||
            router?.asPath?.includes("/dpos-blockchain-development-company") ||
            router?.asPath?.includes("/dapp-development-company") ||
            router?.asPath?.includes("/defi-development-company") ||
            router?.asPath?.includes("/defi-smart-contract-development") ||
            router?.asPath?.includes("/smart-contract-development") ||
            router?.asPath?.includes("/smart-contract-mlm-software") ||
            router?.asPath?.includes("/ico-development") ||
            router?.asPath?.includes("/cardano-blockchain-development-company") ||
            router?.asPath?.includes("/hire-blockchain-developer") ||
            router?.asPath?.includes("/enterprise-blockchain-development") ||
            router?.asPath?.includes("/private-blockchain-development") ||
            router?.asPath?.includes("/public-blockchain-development") ||
            router?.asPath?.includes("/blockchain-wallet-development") ||
            router?.asPath?.includes("/crypto-wallet-development") ? (
            <BlockchainFooter />
          ) : router?.asPath?.includes("/ecommerce") ||
            router?.asPath?.includes("/quick-commerce-app-development") ||
            router?.asPath?.includes("/grocery") ||
            router?.asPath?.includes("/e-commerce-app-development") ||
            router?.asPath?.includes("/fmcg") ? (
            <EcommerceFooter />) : (
            !router?.asPath?.includes("/de/") &&
            !router?.asPath?.includes("/ads/mobile-app-development") && (
              <>

                <Footer />
              </>
            )
          )}

          {loaded && (
            <>
              <div></div>
              <GoogleAnalytics />
              {!router?.asPath?.includes("/career") ? <Talkchat /> : null}
              {/* <Talkchat /> */}
              <GoogleTagManagerScript />
              <GoogleTagManagerNoScript />
              <ContactLinks />
              <div>
                {isVisible && (
                  <div className="fixed lg:bottom-10 bottom-[6rem] z-40 left-10">
                    <button
                      className="btn btn-5 bg-[#5556D1] text-white rounded-full p-3 flex justify-center items-center"
                      aria-label="Top"
                      onClick={handleGoToTop}
                    >
                      <FaChevronUp className="text-[1.3rem]" />
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
          {/* )} */}
        </main>

      )}


    </React.Fragment>
  );
}
