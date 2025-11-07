
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

  return (
    <React.Fragment>
      <main className={`${poppins.className} overflow-y-auto max-w-[1600px] mx-auto`}>
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
