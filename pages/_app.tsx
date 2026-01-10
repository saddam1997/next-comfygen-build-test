import "../styles/globals.css";//8888 8888 // Need to make very short css file. 
import React, { useEffect, useState } from "react"; //8888 8888 // Unusual import
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import Head from "next/head";
import GlobalAfterLCP from "../components/Newcomponet/home/GlobalAfterLCP";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {/* 🔹 Minimal global head */}
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />
      </Head>

      <main
        className={`${poppins.className} overflow-hidden h-full ${
          router.pathname === "/comfy-text-page"
            ? "w-full"
            : "max-w-[1600px] mx-auto"
        }`}
      >
        <Component {...pageProps} />
        <GlobalAfterLCP/>
      </main>
    </>
  );
}







