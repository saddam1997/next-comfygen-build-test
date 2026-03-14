import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import MainLayout from "./MainLayout";
// import GoogleAnalytics from "./GoogleAnalytics";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { usePathname } from "next/navigation";
import GlobalSchema from "../components/seo/GlobalSchema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
const GoogleTagManager = dynamic(() => import("./GoogleTagManager"), {
  ssr: false,
});





export default function MyApp({ Component, pageProps }: AppProps) {

  const pathname = usePathname();

  const hideSchema = pathname.includes("/dating-app-development");
  return (
    <>

      <div className={poppins.className}>
        <MainLayout>
          {!hideSchema && <GlobalSchema />}
          <Component {...pageProps} />
        </MainLayout>
        <GoogleTagManager />
        <ContactLinks />
        <Talkchat />
      </div>

    </>
  );
}
