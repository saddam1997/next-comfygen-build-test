"use client";
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



    const [talkToExpertModal, setTalkToExpertModal] = useState(false);

    const openModal = () => {
        setTalkToExpertModal(true);
    };

    const closeModal = () => {
        setTalkToExpertModal(false);
    };





    /* ================= LOADER ================= */


    return (
        <section className="relative flex  min-h-[740px] sm:min-h-[50vh] lg:min-h-[740px] items-centeroverflow-hidden bg-[#5951cd] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24"
            itemScope
            itemType="https://schema.org/WebPage"
        >
            {/* ================= LCP IMAGE ================= */}
            <Image
                src={props.bgImage || "/landing-hero-img.webp"}
                alt="Comfygen Web & Mobile App Development"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                quality={75}
                className=" object-cover object-center hidden lg:block"
            />

            {/* ================= CONTENT ================= */}
            <div className=" relative z-10  w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col   justify-center"
            >
                <div className=" w-full max-w-full lg:max-w-[65%]  xl:max-w-[58%] space-y-4 sm:space-y-5 lg:space-y-6"
                >
                    {/* ================= HEADING ================= */}
                    {props.isHome ? (
                        <h1 className="text-white text-3xl xl:text-5xl font-bold xl:leading-[4rem] ">
                             <b className="block">AI-Based Mobile App & Web </b>
                            <span className="block text-2xl xl:text-4xl font-medium">
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

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="12"
                                viewBox="0 0 24.231 11.738"
                                className="text-black"
                            >
                                <path
                                    d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                                    transform="translate(-521.511 -1346.214)"
                                    fill="#fff"
                                />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* ================= MODAL ================= */}
            {talkToExpertModal && (
                <div
                    className="fixed inset-0 z-50 overflow-y-auto bg-black/60"
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
