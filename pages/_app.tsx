import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import MainLayout from "./MainLayout";
// import GoogleAnalytics from "./GoogleAnalytics";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // only what you use
  display: "swap",
  preload: true,
});

const Talkchat = dynamic(
  () => import("../components/Newcomponet/layout/Talkchat"),
  { ssr: false }
);

const ContactLinks = dynamic(
  () => import("../components/Newcomponet/comman/ContactLinks"),
  { ssr: false }
);

/* Analytics only (lightweight, idle-loaded internally) */
// const GoogleTagManager = dynamic(() => import("./GoogleTagManager"), {
//   ssr: false,
// });

// const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), {
//   ssr: false,
// });


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

      {/* non-blocking */}
      {/* <GoogleTagManager /> */}
      {/* <GoogleAnalytics /> */}
      <ContactLinks />
      <Talkchat />
    </>
  );
}
