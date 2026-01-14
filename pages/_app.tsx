import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import MainLayout from "./MainLayout";

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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>

      {/* non-blocking */}
      <GoogleTagManager />
      <ContactLinks />
      <Talkchat />
    </>
  );
}
