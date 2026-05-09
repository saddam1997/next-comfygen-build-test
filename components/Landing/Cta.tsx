export default function CTA() {
    return (
        <div className=" bg-[#f5f0eb] px-4 sm:px-6 rounded-xl  ">
            <div className="mx-auto max-w-[1200px] py-7 flex flex-col sm:flex-row items-center justify-between gap-6 mt-5">
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
                    <button className="bg-[#e8522a] hover:bg-[#d4471f] active:bg-[#c03d18] text-white text-sm font-medium px-5 py-3 rounded-md transition-colors duration-200 whitespace-nowrap cursor-pointer">
                        Get Free Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}