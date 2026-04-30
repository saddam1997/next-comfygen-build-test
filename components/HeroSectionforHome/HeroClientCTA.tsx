

import { useEffect, useState } from "react";
import TalkToExpertModal from "../modals/TalkToExpertModal";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import Link from "next/link";


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

                <button
                    onClick={openModal}
                    aria-label="Talk to an expert"
                    className={`bg-transparent border-white border text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black  cursor-pointer transition duration-300`}
                >
                    Talk to an expert!

                    {/* <span className="bg-transparent hrt">
                        <Image src="/unnamed.webp"
                            alt="heart"
                            width={20}
                            height={20}
                            className=""
                        />
                    </span> */}
                </button>
            </div>

            <div className="pt-3 sm:pt-4 relative lg:hidden ">

                <Link
                    href="/contact-us"
                    aria-label="Talk to an expert"
                    className={`bg-[#fff] w-fit flex items-center gap-8 text-sm sm:text-base text-[18px] font-semibold py-2 px-3 rounded-full`}
                >
                   <span className="text-lg"> Talk to an expert!</span>

                    <span className="bg-transparent  bg-[#5556d1] rounded-full ">
                        <Image src="/unnamed.webp"
                            alt="heart"
                            width={20}
                            height={20}
                            className="h-[35px] w-[35px] rounded-full ml-[4px]"
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