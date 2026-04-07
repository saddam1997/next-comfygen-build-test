

import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
const TalkToExpertModal = dynamic(() => import("./TalkToExpertModal"), {
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
        <div className="">

            <div className="pt-3 sm:pt-4 ">

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

            <TalkToExpertModal
                isOpen={talkToExpertModal}
                onClose={closeModal}
            />
           
        </div>


    );
}