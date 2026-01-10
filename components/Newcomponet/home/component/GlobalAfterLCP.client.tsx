"use client";
import dynamic from "next/dynamic";
import { FaChevronUp } from "react-icons/fa6";
import { useRouter } from "next/router";
import ContactLinks from "../../comman/ContactLinks";
import { useAfterLCP } from "../utils/useAfterLCP";



const GetinTouch = dynamic(
  () => import("../../SectionCompoent/GetinTouch"),
  { ssr: false }
);

const Footer = dynamic(
  () => import("../../layout/Footer"),
  { ssr: false }
);

const BlockchainFooter = dynamic(
  () => import("../../layout/BlockchainFooter/blockchain-Footer"),
  { ssr: false }
);

const EcommerceFooter = dynamic(
  () => import("../../layout/EcommerceFooter/ecommerce-Footer"),
  { ssr: false }
);

const Talkchat = dynamic(
  () => import("../../layout/Talkchat"),
  { ssr: false }
);


const GoogleAnalytics = dynamic(
  () => import("../../GoogleComponent/GoogleAnalytics"),
  { ssr: false }
);

const GoogleTagManagerNoScript = dynamic(
  () => import("../../GoogleComponent/GoogleTagManagerNoScript"),
  { ssr: false }
);



export default function GlobalAfterLCPClient({ footerConfig }: any) {
  const router = useRouter();

  const {
    show,
    showTop,
    showBlockchainFooter,
    showEcommerceFooter,
    isExcluded,
  } = useAfterLCP(router.asPath, footerConfig);

  if (!show) return null;

  return (
    <>
      <GetinTouch />

      {showBlockchainFooter ? (
        <BlockchainFooter />
      ) : showEcommerceFooter ? (
        <EcommerceFooter />
      ) : !isExcluded ? (
        <Footer />
      ) : null}

      {/* Scripts */}
      <GoogleAnalytics />
      <GoogleTagManagerNoScript />

      {!router.asPath.includes("/career") && <Talkchat />}
      <ContactLinks />

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed lg:bottom-10 bottom-[6rem] left-10 z-40 bg-[#5556D1] text-white rounded-full p-3"
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
}
