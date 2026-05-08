"use client";

export default function TrustBar() {

  const stats = [
    {
      number: "150+",
      label: "Food Apps Delivered",
    },
    {
      number: "30+",
      label: "Countries Served",
    },
    {
      number: "8+",
      label: "Years of Experience",
    },
    {
      number: "98%",
      label: "On-Time Delivery",
    },
  ];

  const logos = [
    "Clutch",
    "GoodFirms",
    "DesignRush",
    "SelectedFirms",
    "TopDevelopers",
  ];

  return (
    <section className="border-y border-[#E8E2DD] bg-white py-8 sm:py-12">

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

        {/* STATS */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:mb-9 sm:grid-cols-4 sm:gap-5 md:gap-6">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="px-2 text-center sm:px-3"
            >

              {/* NUMBER */}
              <div className="
                mb-[6px]
                font-[Fraunces]
                text-[32px]
                font-semibold
                leading-none
                tracking-[-0.03em]
                text-[#FF5A3C]
                min-[480px]:text-[36px]
                md:text-[40px]
                lg:text-[44px]
              ">
                {stat.number}
              </div>

              {/* LABEL */}
              <div className="
                text-[11px]
                font-medium
                text-[#7A716C]
                min-[480px]:text-[12px]
                sm:text-[13px]
              ">
                {stat.label}
              </div>

            </div>
          ))}

        </div>

        {/* LOGOS */}
        <div className="border-t border-[#E8E2DD] pt-6 sm:pt-8">

          {/* LABEL */}
          <div className="
            mb-2
            text-center
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#7A716C]
            min-[480px]:text-[12px]
          ">
            As featured & reviewed on
          </div>

          {/* LOGO LIST */}
          <div className="
            flex flex-wrap items-center justify-center
            gap-4
            min-[480px]:gap-6
            md:gap-8
          ">

            {logos.map((logo, index) => (
              <div
                key={index}
                className="
                  min-w-[80px]
                  cursor-pointer
                  text-center
                  font-[Fraunces]
                  text-[14px]
                  font-semibold
                  text-[#7A716C]
                  opacity-70
                  transition-opacity
                  duration-200
                  hover:opacity-100
                  min-[480px]:text-[16px]
                  sm:min-w-0
                  sm:text-[18px]
                "
              >
                {logo}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}