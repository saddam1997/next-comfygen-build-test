import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "./MainLayout";
import { Poppins } from "next/font/google";
import Script from "next/script";
import GlobalSchema from "../components/seo/GlobalSchema";
import dynamic from "next/dynamic";
import Head from "next/head";
// const GoogleTagManager = dynamic(() => import("./GoogleTagManager"), {
//   ssr: true,
// });




const GTM_ID = "GTM-5K96GNBB";

// ✅ Font optimized
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "Arial"], // ✅ prevent CLS
});

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <link
        rel="preconnect"
        href="https://www.googletagmanager.com"
      />

      <link
        rel="dns-prefetch"
        href="https://www.googletagmanager.com"
      />

      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];
      w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `,
        }}
      />


      <div className={poppins.className}>
        <MainLayout>
          <GlobalSchema />
          <Component {...pageProps} />
        </MainLayout>
        {/* <GoogleTagManager /> */}
      </div>
    </>
  );
}




























