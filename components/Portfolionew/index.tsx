
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import Link from "next/link";

export default function PharmaAppBanner({Data}) {
    return (
        <section className="w-full overflow-hidden px-3 py-5 sm:px-4 md:px-6 lg:px-8 lg:py-10">

            {/* Heading Section */}
            <section className="space-y-2 py-3 text-center lg:px-16 lg:py-16">
                <HeadingTwo
                    color="black"
                    text={Data.heading.title}
                />

                <ParagraphText
                    color="black"
                    text={Data.heading.description}
                />
            </section>

            {/* Main Banner */}
            <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[12px] border border-cyan-400 bg-gradient-to-r from-[#0990FF]  to-[#031C4B] px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-5">
                <div className="absolute right-0 top-0 z-0 h-full w-full opacity-20">
                    <Image
                        src="https://www.comfygen.com/comfygen-images/pharmacy-app-development/bgimage.webp"
                        alt="Background Pills"
                        fill
                        className="object-cover object-right"
                    />
                </div>

                <div className="relative flex flex-col items-center lg:min-h-[620px] lg:flex-row">

                    {/* Left Image */}
                    <div className="relative z-20 flex w-full justify-center lg:w-[58%] lg:justify-start">

                        <div className="relative h-[260px] w-full max-w-[240px] sm:h-[360px] sm:max-w-[320px] md:h-[480px] md:max-w-[420px] lg:h-[560px] lg:max-w-[560px]">

                            <Image
                                src="https://www.comfygen.com/comfygen-images/pharmacy-app-development/mymelemo.webp"
                                alt="MyMelemo App"
                                width={520}
                                height={420}
                                priority
                                className="object-contain w-full h-full"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right Content Card */}
                    <div className="relative mt-6 w-full overflow-hidden rounded-[24px] border-[4px] border-white/80 bg-gradient-to-br from-[#314BD9] to-[#0B1D74] p-5 shadow-2xl sm:mt-8 sm:rounded-[30px] sm:p-7 md:max-w-[680px] md:p-8 lg:absolute lg:right-40 lg:top-1/2 lg:mt-0 lg:w-[560px] lg:-translate-y-1/2 lg:rounded-[40px] lg:p-6">

                        {/* Background Image */}
                        <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
                            <Image
                                src="https://www.comfygen.com/comfygen-images/pharmacy-app-development/bgimagecrad.webp"
                                alt="Background Pills"
                                fill
                                className="object-cover object-right"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-20 lg:ml-28">

                            {/* Logo */}
                            <div className="mb-4 flex items-center gap-3 sm:gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white sm:h-14 sm:w-14 lg:h-20 lg:w-20">
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/pharmacy-app-development/logo.webp"
                                        alt="App Store"
                                        width={420}
                                        height={280}
                                        className="h-16 w-16 object-contain"
                                    />
                                    {/* <span className="text-xl font-bold text-[#314BD9] lg:text-2xl">
                                        +
                                    </span> */}
                                </div>

                                <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-[40px]">
                                    MyMelemo
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="max-w-[430px] text-sm leading-6 text-white/90 sm:text-lg sm:leading-8 md:text-xl md:leading-9 lg:text-[20px] lg:leading-[34px]">
                                Get your medicines delivered quickly and hassle
                                free with MyMelemo.
                            </p>

                            {/* Store Buttons */}
                            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">

                                {/* Google Play */}
                                <Link
                                    href="https://play.google.com/store/apps/details?id=com.pharmacy.mymelemo&hl=en_IN"
                                    target="_blank"
                                   rel='nofollow'
                                    className="relative z-30 flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-5 sm:py-3 sm:text-sm lg:px-6"
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/pharmacy-app-development/palystore.webp"
                                        alt="Google Play"
                                        width={18}
                                        height={18}
                                        className="h-4 w-4 object-contain"
                                    />

                                    <span>Google Play</span>
                                </Link>

                                {/* App Store */}
                                <Link
                                    href="https://apps.apple.com/in/app/mymelemo/id6445808296"
                                    target="_blank"
                                   rel='nofollow'
                                    className="relative z-30 flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-5 sm:py-3 sm:text-sm lg:px-6"
                                >
                                    <Image
                                        src="https://www.comfygen.com/comfygen-images/pharmacy-app-development/Applestore.webp"
                                        alt="App Store"
                                        width={18}
                                        height={18}
                                        className="h-4 w-4 object-contain"
                                    />

                                    <span>App Store</span>
                                </Link>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/contact-us"
                                className="relative z-30 mt-8 flex w-fit items-center gap-3 rounded-full border-2 border-white bg-white/10 px-6 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#1A3ED8] sm:px-8 sm:py-3 sm:text-lg lg:mt-10 lg:px-10 lg:py-2 lg:text-xl"
                            >
                                GET DEMO

                                <ArrowRight className="h-5 w-5 lg:h-7 lg:w-7" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}