"use client";

import LeadForm from "./LeadForm";

export default function Hero({DATA}:any) {

  const scrollToForm = () => {
    const form = document.getElementById("hero-form");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6F2] py-[56px] md:py-[80px] mt-5">

      {/* BLUR BACKGROUND */}
      <div className="absolute -top-[100px] -right-[100px] h-[400px] w-[400px] rounded-full bg-[#FFF0EB] opacity-60 blur-[80px]" />

      <div className="relative z-[1] mx-auto max-w-[1200px] px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <div>

            {/* RATING */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#E8E2DD] bg-white px-4 py-2 text-[13px] font-medium text-[#1A1614]">

              <span className="tracking-[1px] text-[#F4B400]">
              {DATA.badge.stars}
              </span>

              <span>
                {DATA.badge.text}
              </span>

            </div>

            {/* HEADING */}
            <h1 className="mb-5 font-[Fraunces] text-[32px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#1A1614] sm:text-[40px] lg:text-[52px] lg:leading-[1.05]">

              {DATA.title.start}{" "}

              <span className="font-medium  text-[#FF5A3C]">
                {DATA.title.highlight}
              </span>

              {" "}{DATA.title.end}

            </h1>

            {/* SUBTEXT */}
            <p className="mb-7 max-w-[560px] text-[16px] leading-[1.55] text-[#3D3835] md:text-[17px]">

              {DATA.description}

            </p>

            {/* PILLS */}
            <div className="mb-7 flex flex-wrap gap-2">
              {DATA.pills.map((pill:any, index:any) => (
                <span key={index} className="inline-flex items-center gap-[6px] rounded-full border border-[#E8E2DD] bg-white px-3 py-[6px] text-[12px] font-medium text-[#3D3835] md:px-[14px] md:py-2 md:text-[13px]">
                  <span className="font-bold text-[#1D9E75]">✓</span>
                  {pill}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              {/* PRIMARY BUTTON */}
              <button
                onClick={scrollToForm}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full bg-[#FF5A3C]
                  px-4 py-3
                  text-[13px] font-semibold text-white
                  shadow-[0_4px_14px_rgba(255,90,60,0.35)]
                  transition-all duration-300
                  hover:-translate-y-[2px]
                  hover:bg-[#E63E20]
                  sm:px-6 sm:py-[14px]
                  sm:text-[14px]
                  lg:px-7 lg:py-4
                  lg:text-[15px]
                "
              >
               {DATA.buttonsText} →
              </button>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919587867258"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full bg-[#25D366]
                  px-4 py-3
                  text-[13px] font-semibold text-white
                  transition-all duration-200
                  hover:bg-[#1ebe5a]
                  sm:px-6 sm:py-[14px]
                  sm:text-[14px]
                  lg:px-7 lg:py-4
                  lg:text-[15px]
                "
              >
                💬 Chat on WhatsApp
              </a>

            </div>

            {/* TRUST STATS */}
            <div className="grid grid-cols-2 gap-5 border-t border-[#E8E2DD] pt-6 sm:grid-cols-4 sm:gap-7">
              {DATA.trustStats.map((stat:any, index:any) => (
                <div key={index} className="text-[12px] text-[#7A716C]">
                  <strong className="block font-[Fraunces] text-[20px] font-semibold text-[#1A1614] md:text-[22px]">
                    {stat.value}
                  </strong>
                  {stat.label}
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT FORM */}
          <LeadForm />

        </div>
      </div>
    </section>
  );
}
