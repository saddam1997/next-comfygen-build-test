"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";


import { FaChevronUp } from "react-icons/fa6";

import BlockchainFooter from "../layout/BlockchainFooter/blockchain-Footer";
import EcommerceFooter from "../layout/EcommerceFooter/ecommerce-Footer";
import ContactLinks from "../comman/ContactLinks";
import { useRouter } from "next/router";

import footerConfig from "../../../pageRoute/pagedataroute.json";




const GetinTouch = dynamic(
    () => import("../../ca/components/Getintouch"),
    { ssr: false }
);

const Footer = dynamic(
    () => import("../layout/Footer"),
    { ssr: false }
);

const Talkchat = dynamic(
    () => import("../layout/Talkchat"),
    { ssr: false }
);

const GoogleAnalytics = dynamic(
    () => import("../GoogleComponent/GoogleAnalytics"),
    { ssr: false }
);

const GoogleTagManagerNoScript = dynamic(
    () => import("../GoogleComponent/GoogleTagManagerNoScript"),
    { ssr: false }
);

export default function GlobalAfterLCP() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [showTop, setShowTop] = useState(false);
    /* Optimized scroll handler */
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 500) {
                setShowTop(true);
            } else {
                setShowTop(false);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const matchesAny = (routes: string[]) =>
        routes.some((r) => router.asPath.includes(r));

    const showBlockchainFooter = matchesAny(footerConfig.blockchain);
    const showEcommerceFooter = matchesAny(footerConfig.ecommerce);
    const isExcluded = matchesAny(footerConfig.excluded);

    useEffect(() => {
        // Load ONLY after browser idle (LCP finished)
        if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(() => setShow(true));
        } else {
            setTimeout(() => setShow(true), 2000);
        }
    }, []);

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



<GetinTouch />

