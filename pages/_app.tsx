import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import MainLayout from "./MainLayout";
// import GoogleAnalytics from "./GoogleAnalytics";

const Talkchat = dynamic(
  () => import("../components/Newcomponet/layout/Talkchat"),
  { ssr: false }
);

const ContactLinks = dynamic(
  () => import("../components/Newcomponet/comman/ContactLinks"),
  { ssr: false }
);

const GoogleTagManager = dynamic(
  () => import("./GoogleTagManager"),
  { ssr: false }
);

const GoogleAnalytics = dynamic(
  () => import("./GoogleAnalytics"),
  { ssr: false }
);


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

      {/* non-blocking */}
      <GoogleTagManager />
      <GoogleAnalytics />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-M6QT7LCW"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <ContactLinks />
      <Talkchat />
    </>
  );
}
