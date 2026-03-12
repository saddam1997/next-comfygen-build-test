

import { useEffect, useState } from "react";
import TalkToExpertModal from "../modals/TalkToExpertModal";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import Link from "next/link";


export default function HeroClientCTA() {

    const [talkToExpertModal, setTalkToExpertModal] = useState(false);

    // const openModal = () => {
    //     setTalkToExpertModal(true);
    // };

    // const closeModal = () => {
    //     setTalkToExpertModal(false);
    // };

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

            <div className="pt-3 sm:pt-4 relative lg:hidden ">

                <Link
                    href="/contact-us"
                    aria-label="Talk to an expert"
                    className={`bg-[#fff] w-fit  flex items-center text-sm sm:text-base text-[18px] font-semibold py-1 px-3 rounded-full`}
                >
                    Talk to an expert!

                    <span className="bg-transparent  bg-[#5556d1] rounded-full">
                        <Image src="/unnamed.webp"
                            alt="heart"
                            width={20}
                            height={20}
                            className="h-[35px] w-[35px] rounded-full"
                        />
                    </span>
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