"use client";

import Image from "next/image";
import Link from "next/link";

export default function TrustBar({DATA}:any) {
  const logos = [
    {
      "img": "https://www.comfygen.com/comfygen-images/reviewed/clutch.webp",
      "alt": "Clutch Logo",
      "link": "https://clutch.co/profile/comfygen-technologies",
    },
    {
      "img": "https://www.comfygen.com/comfygen-images/reviewed/goodfirms.webp",
      "alt": "GoodFirms Logo",
      "link": "https://www.goodfirms.co/company/comfygen-technologies",
    },
    {
      "img": "https://www.comfygen.com/comfygen-images/reviewed/designerush.webp",
      "alt": "Designerush Logo",
      "link": "https://www.designrush.com/agency/profile/comfygen",
    },
    {
      "img": "https://www.comfygen.com/comfygen-images/reviewed/selectedfirms.webp",
      "alt": "SelectedFirms Logo",
      "link": "https://selectedfirms.co/agency/comfygen-private-limited",
    },
    {
      "img": "https://www.comfygen.com/comfygen-images/reviewed/topdeveloper.webp",
      "alt": "TopDeveloper Logo",
      "link": "https://www.topdevelopers.co/profile/comfygen",
    },
  ];

  return (
    <section className="border-y border-[#E8E2DD] bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

        {/* LABEL */}
        <div className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7A716C] sm:text-[12px]">
          As featured & reviewed on
        </div>

        {/* LOGOS */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          {DATA.map((logo:any, index:any) => (
            <Link href={logo.link} target="_blank" rel="noopener noreferrer"
              key={index}
              className="
                relative
                flex
                h-[70px]
                w-[140px]
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <Image
                src={logo.img}
                alt={logo.alt}
                fill
                quality={100}
                unoptimized
                className="object-contain"
                sizes="(max-width: 768px) 140px, 180px"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}