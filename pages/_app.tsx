
import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FaChevronUp } from "react-icons/fa6";
import BlockchainFooter from "./componentsnew/blockchain-Footer";
import EcommerceFooter from "./componentsnew/ecommerce-Footer";
import footerConfig from "../pageRoute/pagedataroute.json"
import { Poppins } from 'next/font/google';
import Head from "next/head";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
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

const ContactLinks = dynamic(() => import("./components/ContactLinks"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), {
  loading: () => <p>Loading...</p>,
});
const BlogSection = dynamic(() => import("./components/BlogSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
});

const GetinTouch = dynamic(() => import("./components/FormSec"), { ssr: false });

export const config = {
  unstable_runtimeJS: false,
};
export default function MyApp({ Component, pageProps }: AppProps, props: any) {

  // let { initialData } = props;
  const { initialData } = pageProps; // 👈 now available here

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

  const path = router.asPath;

  // Helper function to check matches
  const matchesAny = (routes: any) => routes.some((r: any) => path.includes(r));

  const showBlockchainFooter = matchesAny(footerConfig.blockchain);
  const showEcommerceFooter = matchesAny(footerConfig.ecommerce);
  const isExcluded = matchesAny(footerConfig.excluded);



  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
      addressLocality: "Jaipur, Rajasthan",
      addressRegion: "India",
      postalCode: "302006",
      telephone: "+91-958-786-7258",
    },
    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      streetAddress: "40 Tuxedo Ct, Toronto, ON",
      addressLocality: "Toronto",
      addressRegion: "Canada",
      postalCode: "M1G3S7",
      telephone: "+1 579-977-4475",
    },
        {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Comfygen Technologies",
      url: "https://www.comfygen.com/",
      logo: "https://www.comfygen.com/svg/Logo1.svg",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        contactOption: "WhatsApp",
        telephone: "+91 9587867258",
        email: "sales@comfygen.com",
        areaServed: ["IN", "US", "CA", "GB"],

        availableLanguage: "en, in",
      },
      sameAs: [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
      ],
    },
  ];

  return (
    <React.Fragment>

      <Head>
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport & Mobile Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen Technologies" />

        {/* Author & Ownership Meta */}
        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* SEO Meta */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Geo Meta */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph Meta */}
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ✅ JSON-LD structured data for all pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <main className={`${poppins.className}overflow-y-auto max-w-[1600px] mx-auto`}>
        <Component {...pageProps} />
        {/* {JSON.stringify(initialData)} */}
        <BlogSection initialData={initialData} />
        <GetinTouch />
        {showBlockchainFooter ? (
          <BlockchainFooter />
        ) : showEcommerceFooter ? (
          <EcommerceFooter />
        ) : !isExcluded ? (
          <>
            <Footer />
          </>
        ) : null}
        {loaded && (
          <>
            <div></div>
            <GoogleAnalytics />
            {!router?.asPath?.includes("/career") ? <Talkchat /> : null}
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
      </main>


    </React.Fragment>
  );
}



export async function getStaticProps() {

  console.log("process.env.URL", process.env.URL)
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();

  return {
    props: { initialData: data },
    // revalidate: 10, // Revalidate data every 10 seconds
    revalidate: 86400, // 24 hours
  };
}
