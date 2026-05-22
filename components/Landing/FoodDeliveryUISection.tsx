"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const uiImages = [
    {
        name: "Driver App",
        image:"https://www.comfygen.com/comfygen-images/food-delivery-app/driver-image.webp",
    },
    {
        name: "Admin Panel",
        image:"https://www.comfygen.com/comfygen-images/food-delivery-app/admin.webp",
    },
    {
        name: "User App",
        image: "https://www.comfygen.com/comfygen-images/food-delivery-app/User-image.webp",
    },
    {
        name: "Vendor Panel",
        image:"https://www.comfygen.com/comfygen-images/food-delivery-app/vendor.webp",
    },
];

export default function FoodDeliveryUISection({ DATA }: any) {
    const [active, setActive] = useState(0);

    // AUTO SLIDE
    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % uiImages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    // IMAGE POSITION
    const getPosition = (index: number) => {
        const total = uiImages.length;

        const left = (active - 1 + total) % total;
        const center = active;
        const right = (active + 1) % total;

        // LEFT CARD
        if (index === left) {
            return {
                translate: "-90%",
                scale: "0.82",
                opacity: "0.45",
                zIndex: 10,
            };
        }

        // CENTER CARD
        if (index === center) {
            return {
                translate: "0%",
                scale: "1",
                opacity: "1",
                zIndex: 30,
            };
        }

        // RIGHT CARD
        if (index === right) {
            return {
                translate: "90%",
                scale: "0.82",
                opacity: "0.45",
                zIndex: 10,
            };
        }

        // HIDE OTHER
        return {
            translate: "0%",
            scale: "0",
            opacity: "0",
            zIndex: 0,
        };
    };

    return (
        <section className="relative mt-8 overflow-hidden bg-[#FAF6F2] py-16 sm:py-20 lg:py-10">
            {/* BACKGROUND GLOW */}
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5A3C]/10 blur-3xl sm:h-[500px] sm:w-[500px]" />

            <div className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-6">
                {/* HEADER */}
                <div className="mx-auto mb-8 max-w-3xl text-center">
                    <span className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5A3C] min-[480px]:text-[12px]">
                        {DATA.title}
                    </span>

                    <h2 className="mb-4 font-[Fraunces] text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1A1614] min-[480px]:text-[32px] md:text-[36px] lg:text-[44px]">
                        {DATA.subtitle.start}

                        <span className="text-[#FF5A3C]">
                            {DATA.subtitle.highlight}
                        </span>

                        {DATA.subtitle.end}
                    </h2>

                    <p className="text-[14px] leading-[1.6] text-[#7A716C] min-[480px]:text-[15px] md:text-[17px]">
                        {DATA.description}
                    </p>
                </div>

                {/* SLIDER */}
                <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden sm:min-h-[560px] lg:min-h-[620px]">
                    {DATA.UiOpstion.map((item: any, index: any) => {
                        const pos = getPosition(index);
                        const isActive = index === active;

                        return (
                            <div
                                key={index}
                                style={{
                                    transform: `translateX(${pos.translate}) scale(${pos.scale})`,
                                    // opacity: pos.opacity,
                                    zIndex: pos.zIndex,
                                }}
                                className="absolute transition-all duration-700 ease-in-out"
                            >
                                <div className="flex flex-col items-center">
                                    {/* MOBILE FRAME */}
                                    <div
                                        className={`relative overflow-hidden rounded-[32px]   transition-all duration-500 ${
                                            isActive
                                                ? "p-3 "
                                                : "p-2"
                                        }`}
                                    >
                                        {/* IMAGE */}
                                        <div className="relative w-[200px] sm:w-[220px]  xl:w-[210px]">
                                            <Image
                                               src={item.image}
                                                alt={item.name}
                                                width={1260}
                                                height={1000}
                                                className="h-full w-fit object-contain "
                                            />
                                        </div>
                                        {/* <div className="relative w-[150px] sm:w-[220px] lg:w-[320px] xl:w-[410px]">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={1260}
                                                height={1000}
                                                className="h-full w-full object-contain"
                                            />
                                        </div> */}
                                    </div>

                                    {/* NAME */}
                                    <div
                                        className={`mt-1 transition-all duration-500 ${
                                            isActive
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-4 opacity-0"
                                        }`}
                                    >
                                        <h3 className="text-center text-xl font-bold text-[#1A1614] sm:text-2xl">
                                            {item.name}
                                        </h3>

                                        {/* <p className="mt-1 text-center text-sm text-[#7A716C]">
                                            Modern & smooth interface design
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* DOTS */}
                <div className="mt-8 flex items-center justify-center gap-3">
                    {uiImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`transition-all duration-300 ${
                                active === index
                                    ? "h-[10px] w-[36px] rounded-full bg-[#FF5A3C]"
                                    : "h-[10px] w-[10px] rounded-full bg-[#D8D3CF] hover:bg-[#FF5A3C]/40"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}