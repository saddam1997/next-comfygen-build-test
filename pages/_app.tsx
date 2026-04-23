import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import MainLayout from "./MainLayout";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { usePathname } from "next/navigation";


// "use client";

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
      {/* ✅ GTM optimized (NO blocking JS) */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-5K96GNBB'+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5K96GNBB');
          `,
        }}
      />

      {/* ✅ Main App */}
      <div className={poppins.className}>
        <MainLayout>

          <Component {...pageProps} />
        </MainLayout>
      </div>
    </>
  );
}




























