
import styles from "./HeroSection.module.css";
import Image from "next/image";
import TalkToExpertModal from "../modals/TalkToExpertModal";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import HeroLoader from "./HeroLoader";
import { useState } from "react";

export default function HeroSection(props: any) {

    const listItems = [
        props.li,
        props.li1,
        props.li2,
        props.li3,
        props.li4,
        props.li5,
        props.li6,
    ].filter(Boolean);

    const imageAlt = props?.altTag || props?.heading || "Hero background image";

    const [talkToExpertModal, setTalkToExpertModal] = useState(false);

    const openModal = () => {
        setTalkToExpertModal(true);
    };

    const closeModal = () => {
        setTalkToExpertModal(false);
    };


    /* ================= LOADER ================= */


    return (
        <section className="relative flex  min-h-[600px] lg:min-h-[700px] items-center overflow-hidden bg-[#5951cd] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24"
        // itemScope
        // itemType="https://schema.org/WebPage"
        >

            {/* ================= LCP IMAGE ================= */}

            <div className="hidden lg:block absolute inset-0 ">
                <Image
                    src={props.bgImage}
                    alt={imageAlt}
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 0px"
                    quality={60}
                    className="object-cover object-center"
                />
            </div>
            {/* mobile */}



            {props.mobileBgImage && (
                <div className="lg:hidden absolute inset-0 ">
                    <Image
                        src={props.mobileBgImage}
                        alt="Comfygen Hero Background"
                        fill
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        quality={60}
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                </div>
            )}



            {/* ================= CONTENT ================= */}
            <div className=" relative z-10  w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col   justify-center"
            >
                <div className=" w-full max-w-full lg:max-w-[65%]  xl:max-w-[58%] space-y-4 sm:space-y-5 lg:space-y-6"
                >
                    {/* ================= HEADING ================= */}
                    {props.isHome ? (
                        <h1 className="text-white text-2xl lg:text-3xl xl:text-5xl font-bold xl:leading-[4rem] ">
                            <b className="block ">AI-Based Mobile App & Web </b>
                            <span className="block text-xl xl:text-4xl font-medium">
                                Development Company
                            </span>
                        </h1>
                    ) : (
                        <>
                            <Heading as={1} className="text-white ">
                                {props.heading}
                            </Heading>

                        </>
                    )}

                    {props?.subhead && (
                        <Paragraph size="sm" className="text-white">
                            <span className="font-semibold"> {props.subhead}</span>
                        </Paragraph>
                    )}




                    {/* ================= DESCRIPTION ================= */}

                    <Paragraph size="sm" className="text-white">
                        {props.ptag}
                    </Paragraph>


                    {props.ptag1 && (
                        <Paragraph size="sm" className="text-white">
                            {props.ptag1}
                        </Paragraph>
                    )}


                    {props.ptag3 && (
                        <Paragraph size="sm" className="text-white">
                            {props.ptag3}
                        </Paragraph>
                    )}






                    {listItems.length > 0 && (
                        <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"
                                    />
                                    <span
                                        dangerouslySetInnerHTML={{ __html: item as string }}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}



                    {/* ================= CTA ================= */}
                    <div className="pt-3 sm:pt-4">
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

                </div>
            </div>

            {/* ================= MODAL ================= */}
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
        </section>
    );
}
