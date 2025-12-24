"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screens = [
    "https://www.comfygen.com/comfygen-images/grocery/about.webp",
    "https://www.comfygen.com/comfygen-images/grocery/checkout.webp",
    "https://www.comfygen.com/comfygen-images/grocery/explore.webp",
    "https://www.comfygen.com/comfygen-images/grocery/myCart.webp",
    "https://www.comfygen.com/comfygen-images/grocery/order-accepted.webp",
    "https://www.comfygen.com/comfygen-images/grocery/product-Detail.webp",
    "https://www.comfygen.com/comfygen-images/grocery/search.webp",
    "https://www.comfygen.com/comfygen-images/grocery/sign-up.webp",
    "https://www.comfygen.com/comfygen-images/grocery/sing-in.webp",
    "https://www.comfygen.com/comfygen-images/grocery/splash-Screen.webp",
];


const CARD_WIDTH = 260;
const CARD_HEIGHT = 420;
const GAP = 10;
const VISIBLE = 5; // must be odd
const AUTO_DELAY = 4000;

export default function AppShowcaseSlider() {
    const [active, setActive] = useState(0);
    const total = screens.length;
    const center = Math.floor(VISIBLE / 2);
    const intervalRef = useRef(null);

    const getIndex = (i: any) => ((i % total) + total) % total;

    const next = () => setActive((i) => i + 1);
    const prev = () => setActive((i) => i - 1);

    /* ---------- AUTO SLIDE ---------- */
    useEffect(() => {
        startAuto();
        return stopAuto;
    }, []);

    const startAuto = () => {
        stopAuto();
        intervalRef.current = setInterval(next, AUTO_DELAY);
    };

    const stopAuto = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    return (
        <section className="bg-[#0b0f14] py-24 overflow-hidden">
            {/* TITLE */}
            <div className="text-center mb-14">
                <h2 className="text-white text-3xl font-bold">
                    Our Grocery Delivery App Screens
                </h2>
                <div className="w-16 h-1 bg-red-500 mx-auto mt-4" />
            </div>

            <div
                className="relative flex items-center justify-center overflow-hidden"
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
            >
                {/* LEFT */}
                <button
                    onClick={() => {
                        prev();
                        startAuto();
                    }}
                    className="absolute left-10 z-40 w-12 h-12 rounded-full  text-black bg-white flex items-center justify-center shadow-lg"
                >
                    <ChevronLeft />
                </button>

                {/* TRACK */}
                <div className="flex items-center gap-10">
                    {Array.from({ length: VISIBLE }).map((_, i) => {
                        const position = active + i - center;
                        const index = getIndex(position);
                        const isCenter = i === center;

                        return (
                            <div
                                key={position}
                                className={`relative flex-shrink-0 transition-[transform,opacity,filter] duration-700 p-8 ease-[cubic-bezier(.22,.61,.36,1)] ${isCenter ? "scale-110 z-30" : "scale-100 blur-sm opacity-40"}`}
                                style={{
                                    width: CARD_WIDTH,
                                    height: CARD_HEIGHT,
                                }}
                            >
                                {isCenter && (
                                    <div className="absolute inset-0 rounded-[38px] ring-4 ring-emerald-400 pointer-events-none" />
                                )}

                                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black shadow-2xl">
                                    <Image
                                        src={screens[index]}
                                        width={640}
                                        height={340}
                                        alt="App Screen"
                                        // fill
                                        className="object-cover h-full w-full"
                                    // priority={isCenter}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* RIGHT */}
                <button
                    onClick={() => {
                        next();
                        startAuto();
                    }}
                    className="absolute right-10 z-40 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
}
