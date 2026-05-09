

import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

const ContactFrom = dynamic(() => import("../comman/ContactFrom"), {
  ssr: false,
});

export default function npHeroSection(props: any) {
  return (
    <section
      className="relative pt-20 pb-6 sm:pt-20 sm:pb-10 lg:pt-[70px] lg:pb-[70px] h-full flex flex-col justify-center overflow-hidden bg-[#5951cd]"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* ✅ LCP IMAGE — MUST BE IMMEDIATE */}
      <Image
        src={props.bgImage || "/landing-hero-img.webp"}
        alt="Comfygen Web & Mobile App Development"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={75}
        className="object-cover object-center z-10 hidden md:block"
      />

      {/* ================= LCP CONTENT ================= */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row md:items-center md:space-x-20 py-10 md:py-20 w-11/12 mx-auto">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[65%] xl:w-[58%]">
          <div className="space-y-4">

            {/* TEXT (can also be LCP on mobile) */}
            {props.isHome ? (
              <h1 className="text-white text-3xl xl:text-5xl font-bold xl:leading-[4rem]">
                <span className="block text-2xl xl:text-4xl font-medium">
                  Web & Mobile App Development
                </span>
                <b className="block">Solution & Service Provider</b>
              </h1>
            ) : (
              <h1 className="text-white text-3xl xl:text-4xl font-extrabold">
                {props.heading}
              </h1>
            )}

            <p className="text-white text-sm lg:text-base 2xl:text-lg">
              {props.ptag}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-5">
            <Link href="#">
              <button
                className="btn btn-fix"
                onClick={props.openModal}
                aria-label="Talk to an expert"
              >
                Talk to an expert!
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MODAL (NOT LCP) ================= */}
      {props.talkToExpertModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <ContactFrom />
        </div>
      )}
    </section>
  );
}
