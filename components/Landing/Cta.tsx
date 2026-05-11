export default function CTA() {

  const scrollToForm = () => {
    const form = document.getElementById("hero-form");

    if (form) {
      const y =
        form.getBoundingClientRect().top + window.pageYOffset - 100;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

    return (
        <div className="bg-[#FAF6F2] px-4 sm:px-6 ">
            <div className="mx-auto max-w-[1200px] py-7 flex flex-col sm:flex-row items-center justify-between gap-6 ">
                {/* Text Content */}
                <div className="max-w-2xl">

                    <h2 className="mb-4 font-[Fraunces] text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1A1614] min-[480px]:text-[32px]  md:text-[36px] lg:text-[22px] lg:leading-[1.1]">

                        Build a Powerful Food Delivery App Like Zomato, Swiggy, or UberEats{" "}

                        <span className=" text-[#FF5A3C]">
                            {""}
                        </span>

                    </h2>

                    <p className=" mb-4 text-[12px] leading-[1.55] text-[#7A716C] min-[480px]:text-[13px] sm:text-[14px]">
                        From restaurant aggregators to hyperlocal delivery apps, Comfygen helps startups and
                        enterprises develop scalable, feature-rich food delivery solutions with modern UI,
                        real-time tracking, smart dispatch, and secure payment integration.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="shrink-0">
                    <button  onClick={scrollToForm} className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] cursor-pointer">

                        {/* Smooth Animated Border */}
                        <span className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,#ffdfd6,#ff8a65,#ffd9cf,#ffb199,#ffdfd6)] bg-[length:300%_300%] animate-[gradientMove_6s_ease_infinite]" />

                        {/* Inner Button */}
                        <span className="relative inline-flex items-center gap-2 rounded-full bg-[#e8522a] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#d94a24] shadow-[0_8px_25px_rgba(232,82,42,0.35)]">

                            {/* Soft Shine */}
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute left-[-150%] top-0 h-full w-[80%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 transition-all duration-1000 group-hover:left-[180%]" />
                            </span>

                            {/* Content */}
                            <span className="relative z-10 flex items-center gap-2">
                                Get Free Consultation

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 12h14M13 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </span>
                    </button>
                </div>
                {/* <div className="shrink-0">
                    <button className="bg-[#e8522a] hover:bg-[#d4471f] active:bg-[#c03d18] text-white text-sm font-medium px-5 py-3 rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer">
                        Get Free Consultation
                    </button>
                </div> */}
            </div>
        </div>
    );
}