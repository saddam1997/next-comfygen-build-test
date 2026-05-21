
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeadingTwo from "../ui/HeadingTwo";
import Link from "next/link";

export default function PharmaAppBanner({ Data }) {
    return (
        <section className="w-full overflow-hidden px-3 py-5 sm:px-4 md:px-6 lg:px-8 lg:py-10">
            {/* Heading Section */}
            <section className="space-y-2 py-3 text-center lg:px-16 lg:py-16">
                <HeadingTwo
                    color="black"
                    text={Data.heading.title}
                />
            </section>
            {/* Main Banner */}
            <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[12px] border border-cyan-400  px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-5"
                style={{
                    background: `linear-gradient(to right, ${Data?.bgGradient?.from}, ${Data?.bgGradient?.to})`
                }}
            >
                <div className="absolute right-0 top-0 z-0 h-full w-full opacity-20">
                    <Image
                        src={Data?.banner?.backgroundImage}
                        alt={Data?.banner?.alt}
                        fill
                        className="object-cover object-right"
                    />
                </div>

                <div className="relative flex flex-col items-center lg:min-h-[620px] lg:flex-row">
                    {/* Left Image */}
                    <div className="relative z-20 flex w-full justify-center lg:w-[58%] lg:justify-start">
                        <div className="relative h-[260px] w-full max-w-[240px] sm:h-[360px] sm:max-w-[320px] md:h-[480px] md:max-w-[420px] lg:h-[560px] lg:max-w-[500px] xl:ml-24">

                            <Image
                                src={Data?.banner?.mainImage.image}
                                alt={Data?.banner?.mainImage.alt}
                                fill
                                priority
                                quality={100}
                                unoptimized
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                            />

                        </div>
                    </div>

                    {/* Right Content Card */}
                    <div className="relative mt-6 w-full overflow-hidden rounded-[24px] border-[4px] border-white/80  p-5 shadow-2xl sm:mt-8 sm:rounded-[30px] sm:p-7 md:max-w-[680px] md:p-8 lg:absolute xl:right-40 lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[560px] lg:-translate-y-1/2 lg:rounded-[40px] lg:p-6 bg-transparent"


                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={Data?.banner?.card?.backgroundImage}
                                alt={Data?.banner?.card?.alt || "Background"}
                                fill
                                className="object-cover object-right"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 z-10"
                            style={{
                                backgroundColor: Data?.banner?.card?.cardBgColor?.bg,
                                opacity: 0.65,
                            }}
                        ></div>

                        {/* Content */}
                        <div className="relative z-20 xl:ml-28 lg:ml-40">
                            {/* Logo */}
                            <div className="mb-4 flex items-center gap-3 sm:gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white sm:h-14 sm:w-14 lg:h-20 lg:w-20">
                                    <Image
                                        src={Data?.banner?.card?.logo?.image}
                                        alt={Data?.banner?.card?.logo?.alt}
                                        width={420}
                                        height={280}
                                        className="h-16 w-16 object-contain"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-[40px]">
                                    {Data?.banner?.card?.appName}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="max-w-[430px] text-sm leading-6 text-white/90 sm:text-lg sm:leading-8 md:text-xl md:leading-2 lg:text-[15px] lg:leading-[20px]">
                                {Data?.banner?.card?.description}

                            </p>

                            {/* Store Buttons */}
                            <div className="mt-6 flex flex-wrap gap-2 sm:gap-4">
                                {Data?.banner?.card?.storeButtons.map((button: any, index: any) => (
                                    <Link
                                        key={index}
                                        href={button.link}
                                        target="_blank"
                                        rel='nofollow'
                                        className="relative z-30 flex w-fit items-center gap-2 rounded-lg bg-white px-2 py-2 text-xs font-medium text-gray-800 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-5 sm:py-3 sm:text-sm lg:px-2"
                                    >
                                        <Image
                                            src={button.icon}
                                            alt={button.name}
                                            width={18}
                                            height={18}
                                            className="h-4 w-4 object-contain"
                                        />
                                        <span>{button.name}</span>
                                    </Link>
                                ))
                                }

                            </div>

                            {/* CTA Button */}
                            <Link
                                href={Data?.banner?.card?.ctaButton?.link}
                                className="relative z-30 mt-8 flex w-fit items-center gap-3 rounded-full border-2 border-white bg-white/10 px-6 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#1A3ED8] sm:px-8 sm:py-3 sm:text-lg lg:mt-10 lg:px-10 lg:py-2 lg:text-lg"
                            >
                                {Data?.banner?.card?.ctaButton?.text}

                                <ArrowRight className="h-5 w-5 lg:h-7 lg:w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}