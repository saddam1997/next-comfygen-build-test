import "../styles/globals.css";
import { useCallback, useMemo } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import footerConfig from "../pageRoute/pagedataroute.json";

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
  { ssr: false }
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
  const { asPath } = router;

  const matchesAny = useCallback(
    (routes: string[]) => routes.some((r) => asPath.includes(r)),
    [asPath]
  );

  const footerType = useMemo(() => {
    if (matchesAny(footerConfig.blockchain)) return "blockchain";
    if (matchesAny(footerConfig.ecommerce)) return "ecommerce";
    if (matchesAny(footerConfig.excluded)) return "none";
    return "default";
  }, [matchesAny]);
  return (
    <>
      <Component {...pageProps} />
      <GetinTouch />
      {footerType === "blockchain" && <BlockchainFooter />}
      {footerType === "ecommerce" && <EcommerceFooter />}
      {footerType === "default" && <Footer />}
      {!asPath.includes("/career") && <Talkchat />}
      <ContactLinks />
    </>
  );
}






