import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// import { Poppins } from "next/font/google";
import Head from "next/head";
// import Script from "next/script";


import footerConfig from "../pageRoute/pagedataroute.json";
import { FaChevronUp } from "react-icons/fa6";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// /* Non-blocking scripts */
// const GoogleAnalytics = dynamic(
//   () => import("../components/Newcomponet/GoogleComponent/GoogleAnalytics"),
//   { ssr: false }
// );



// const GoogleTagManagerNoScript = dynamic(
//   () => import("../components/Newcomponet/GoogleComponent/GoogleTagManagerNoScript"),
//   { ssr: false }
// );

const Talkchat = dynamic(
  () => import("../components/Newcomponet/layout/Talkchat"),
  { ssr: false }
);

const ContactLinks = dynamic(
  () => import("../components/Newcomponet/comman/ContactLinks"),
  { ssr: false }
);

const GetinTouch = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/GetinTouch"),
  { ssr: true }
);


const Footer = dynamic(
  () => import("../components/Newcomponet/layout/Footer"),
  { ssr: true }
);

const BlockchainFooter = dynamic(
  () => import("../components/Newcomponet/layout/BlockchainFooter/blockchain-Footer"),
  { ssr: true }
);

const EcommerceFooter = dynamic(
  () => import("../components/Newcomponet/layout/EcommerceFooter/ecommerce-Footer"),
  { ssr: true }
);




export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 8888
  const matchesAny = (routes: string[]) =>
    routes.some((r) => router.asPath.includes(r));

  const showBlockchainFooter = matchesAny(footerConfig.blockchain);
  const showEcommerceFooter = matchesAny(footerConfig.ecommerce);
  const isExcluded = matchesAny(footerConfig.excluded);

  return (
    <>
      {/* 🔹 Minimal global head */}
      {/* // 8888 */}
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />
        {/* <!-- Google Tag Manager --> */}
      </Head>

      {/* // 8888 */}
      <main
        className="max-w-[1600px] mx-auto overflow-y-auto"
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
        {/* // 8888 */}
        {/* Scripts */}
        {/* <GoogleAnalytics />
        <GoogleTagManagerNoScript /> */}
        {!router.asPath.includes("/career") && <Talkchat />}
        <ContactLinks />
        {/* // 8888 */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed lg:bottom-10 bottom-[6rem] left-10 z-40 bg-[#5556D1] text-white rounded-full p-3"
        >
          <FaChevronUp />
        </button>


      </main>
    </>
  );
}






