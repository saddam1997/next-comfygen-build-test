

import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "../ui/Button";
const TalkToExpertModal = dynamic(() => import("../modals/TalkToExpertModal"), {
    ssr: false,
});

export default function HeroClientCTA() {

    const [talkToExpertModal, setTalkToExpertModal] = useState(false);

    useEffect(() => {
        document.body.style.overflow = talkToExpertModal ? "hidden" : "";
        // if (talkToExpertModal) {
        //     document.body.style.overflow = "hidden";
        // } else {
        //     document.body.style.overflow = "";
        // }

        // return () => {
        //     document.body.style.overflow = "";
        // };
    }, [talkToExpertModal]);

    const openModal = () => {
        setTalkToExpertModal(true);
    };

    const closeModal = () => {
        setTalkToExpertModal(false);
    };

    return (
        <>
            <div className="pt-3 sm:pt-4 relative hidden lg:block">
                <Button onClick={openModal} variant="primary">Talk to an expert!</Button>
            </div>

            <div className="pt-3 sm:pt-4 relative lg:hidden ">
                <Link
                    href="/contact-us"
                    aria-label="Talk to an expert"
                    className={`w-fit  flex items-center text-sm sm:text-base text-[18px] font-semibold py-1 px-3 rounded-full`}
                >
                    <Button onClick={openModal} variant="primary">Talk to an expert!</Button>
                </Link>
            </div>

            {talkToExpertModal && (
                <div
                    className="fixed w-full inset-0 z-50 overflow-hidden bg-black/60"
                    role="dialog"
                    aria-modal="true"
                >
                    <TalkToExpertModal isOpen={talkToExpertModal}
                        onClose={closeModal} />
                </div>
            )}
        </>
    );
}