import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";


export default function CallToAction({ CallToAction }:any) {
  
    return (
        <section className="lg:py-16 bg-white">
            <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 relative bg-[#0C0F18] rounded-[24px] overflow-hidden">
                {/* ===== Main Content ===== */}
                <div className="relative z-10 lg:py-12 py-4 lg:px-14 px-8 lg:flex gap-8 items-center">

                    {/* ===== Text Section ===== */}
                    <div className="space-y-3 lg:w-[70%] w-full">
                        <h2 className="md:text-2xl text-sm text-white font-semibold">
                            {CallToAction?.heading}
                        </h2>

                        {/* Trusted CMS content */}
                        <p
                            className="text-base text-white"
                            dangerouslySetInnerHTML={{ __html: CallToAction?.text }}
                        />

                        <div className="mt-7">
                            <Link
                                href={CallToAction?.buttonLink || "#"}
                                className="inline-flex items-center gap-1 text-white border border-white px-10 py-2 text-lg font-semibold rounded-full capitalize hover:bg-white hover:text-[#5556D1] transition"
                            >
                                {CallToAction?.buttonText}
                                <MdOutlineArrowOutward />
                            </Link>
                        </div>
                    </div>

                    {/* ===== Image Section ===== */}
                    <div className="lg:w-[30%] w-full flex justify-center lg:mt-0 mt-5">
                        <Image
                            src={CallToAction?.imageSrc}
                            alt={CallToAction?.imageAlt}
                            width={400}
                            height={225}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw,"
                            className="hidden sm:block"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
