import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Footer from "./Newcomponet/layout/Footer";
import BlockchainFooter from "./Newcomponet/layout/BlockchainFooter/blockchain-Footer";
import EcommerceFooter from "./Newcomponet/layout/EcommerceFooter/ecommerce-Footer";
import footerConfig from "../pageRoute/pagedataroute.json";
import { FaChevronUp } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Non-blocking scripts */
const GoogleAnalytics = dynamic(
  () => import("./Newcomponet/GoogleComponent/GoogleAnalytics"),
  { ssr: false }
);

const GoogleTagManager = dynamic(
  () => import("./Newcomponet/GoogleComponent/GoogleTagManagerScript"),
  { ssr: false }
);

const GoogleTagManagerNoScript = dynamic(
  () => import("./Newcomponet/GoogleComponent/GoogleTagManagerNoScript"),
  { ssr: false }
);

const Talkchat = dynamic(
  () => import("./Newcomponet/layout/Talkchat"),
  { ssr: false }
);

const ContactLinks = dynamic(
  () => import("./Newcomponet/comman/ContactLinks"),
  { ssr: false }
);

const GetinTouch = dynamic(
  () => import("./Newcomponet/SectionCompoent/GetinTouch"),
  { ssr: false }
);

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [showTop, setShowTop] = useState(false);

  /* Optimized scroll handler */
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const matchesAny = (routes: string[]) =>
    routes.some((r) => router.asPath.includes(r));

  const showBlockchainFooter = matchesAny(footerConfig.blockchain);
  const showEcommerceFooter = matchesAny(footerConfig.ecommerce);
  const isExcluded = matchesAny(footerConfig.excluded);

  return (
    <>
      {/* 🔹 Minimal global head */}
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />
      </Head>

      <main
        className={`${poppins.className} overflow-hidden ${
          router.pathname === "/comfy-test-page"
            ? "w-full"
            : "max-w-[1600px] mx-auto"
        }`}
      >
        <Component {...pageProps} />

        <GetinTouch />

        {showBlockchainFooter ? (
          <BlockchainFooter />
        ) : showEcommerceFooter ? (
          <EcommerceFooter />
        ) : !isExcluded ? (
          <Footer />
        ) : null}

        {/* Scripts */}
        <GoogleAnalytics />
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
        {!router.asPath.includes("/career") && <Talkchat />}
        <ContactLinks />

        {/* Scroll to top */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed lg:bottom-10 bottom-[6rem] left-10 z-40 bg-[#5556D1] text-white rounded-full p-3"
          >
            <FaChevronUp />
          </button>
        )}
      </main>
    </>
  );
}







