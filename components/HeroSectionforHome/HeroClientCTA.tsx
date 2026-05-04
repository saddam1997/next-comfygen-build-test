

import { useEffect, useState } from "react";
import TalkToExpertModal from "../modals/TalkToExpertModal";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import { Button } from "../ui/Button";


export default function HeroClientCTA() {

    const [talkToExpertModal, setTalkToExpertModal] = useState(false);

    useEffect(() => {
        if (talkToExpertModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
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
                    className={` w-fit flex items-center gap-8 text-sm sm:text-base text-[18px] font-semibold py-2 px-3 rounded-full`}
                >
                    <Button variant="primary">Talk to an expert!</Button>
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