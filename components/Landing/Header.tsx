"use client";

export default function Header() {

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
    <header className="sticky top-0 z-[100] bg-white py-[14px]">

      <div className="mx-auto max-w-[1200px] px-6">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="font-[Fraunces] text-[22px] font-bold tracking-[-0.02em] text-[#1A1614]">

            comfygen
            <span className="text-[#FF5A3C]">.</span>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3">

            {/* PHONE */}
            <a
              href="tel:+919587867258"
              className="
                hidden
                text-[14px]
                font-semibold
                text-[#3D3835]
                md:block
              "
            >
              📞 +91 9587 867 258
            </a>

            {/* BUTTON */}
            <button
              onClick={scrollToForm}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#FF5A3C]
                px-5
                py-3
                text-[13px]
                font-semibold
                text-white
                shadow-[0_4px_14px_rgba(255,90,60,0.35)]
                transition-all
                duration-200
                hover:-translate-y-[2px]
                hover:bg-[#E63E20]
                sm:px-[22px]
                sm:text-[14px]
              "
            >
              Get Free Quote
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}