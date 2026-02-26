

import { useState } from "react";
import TalkToExpertModal from "../modals/TalkToExpertModal";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroClientCTA() {

    const [talkToExpertModal, setTalkToExpertModal] = useState(false);

    const openModal = () => {
        setTalkToExpertModal(true);
    };

    const closeModal = () => {
        setTalkToExpertModal(false);
    };

    return (
        <>




            <div className="pt-3 sm:pt-4 relative">

                <button
                    onClick={openModal}
                    aria-label="Talk to an expert"
                    className={`${styles.btnFix} text-sm sm:text-base`}
                >
                    Talk to an expert!

                    <span className="bg-transparent hrt">
                        <Image src="/unnamed.webp"
                            alt="heart"
                            width={20}
                            height={20}
                            className=""
                        />
                    </span>
                </button>
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