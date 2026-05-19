import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "./MainLayout";
import { Poppins } from "next/font/google";
import Script from "next/script";
import GlobalSchema from "../components/seo/GlobalSchema";
import dynamic from "next/dynamic";
const GoogleTagManager = dynamic(() => import("./GoogleTagManager"), {
  ssr: true,
});




// const GTM_ID = "GTM-5K96GNBB";

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
      <div className={poppins.className}>
        <MainLayout>
          <GlobalSchema/>
          <Component {...pageProps} />
        </MainLayout>
         <GoogleTagManager />
      </div>
    </>
  );
}




























