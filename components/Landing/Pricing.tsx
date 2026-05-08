"use client";

const pricingPlans = [
  {
    name: "Starter MVP",
    price: "$15K – $25K",
    timeline: "⏱ 8–12 weeks delivery",
    featured: false,
    features: [
      "Customer app (iOS + Android)",
      "Single restaurant or basic multi-vendor",
      "Real-time order tracking",
      "1 payment gateway integration",
      "Basic admin panel",
      "3 months post-launch support",
      "App store deployment",
    ],
  },
  {
    name: "Growth Marketplace",
    price: "$25K – $50K",
    timeline: "⏱ 12–16 weeks delivery",
    featured: true,
    features: [
      "Everything in Starter",
      "Full multi-vendor marketplace",
      "Restaurant + Driver apps",
      "Multi-payment gateway support",
      "Advanced admin dashboard",
      "Push notifications & promo engine",
      "Loyalty program & wallet",
      "6 months post-launch support",
    ],
  },
  {
    name: "Enterprise",
    price: "$50K+",
    timeline: "⏱ 16–24 weeks delivery",
    featured: false,
    features: [
      "Everything in Growth",
      "AI-powered recommendations",
      "Smart route optimization",
      "Multi-country & multi-currency",
      "Custom integrations (POS, ERP, CRM)",
      "Advanced analytics & BI",
      "Enterprise SLA & dedicated PM",
      "12 months priority support",
    ],
  },
];

export default function Pricing() {

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
    <section className="bg-white py-12 sm:py-16 lg:py-24">

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

        {/* HEADER */}
        <div className="mx-auto mb-8 max-w-[720px] text-center sm:mb-10 lg:mb-14">

          {/* EYEBROW */}
          <span className="
            mb-4 inline-block
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#FF5A3C]
            min-[480px]:text-[12px]
          ">
            Transparent Pricing
          </span>

          {/* TITLE */}
          <h2 className="
            mb-4
            font-[Fraunces]
            text-[28px]
            font-semibold
            leading-[1.2]
            tracking-[-0.02em]
            text-[#1A1614]
            min-[480px]:text-[32px]
            md:text-[36px]
            lg:text-[44px]
            lg:leading-[1.1]
          ">

            How much does a food delivery app{" "}

            <em className="italic text-[#FF5A3C]">
              actually cost?
            </em>

          </h2>

          {/* SUBTEXT */}
          <p className="
            text-[14px]
            leading-[1.6]
            text-[#7A716C]
            min-[480px]:text-[15px]
            md:text-[17px]
          ">
            No hidden fees. No "we'll quote later" games.
            Pick the package that fits your stage — or
            get a custom quote.
          </p>

        </div>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          items-stretch
          gap-4
          md:grid-cols-2
          md:gap-[18px]
          lg:grid-cols-3
          lg:gap-5
        ">

          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col
                rounded-[20px]
                border
                p-6
                transition-all
                duration-300
                min-[480px]:px-6
                min-[480px]:py-7
                lg:px-8
                lg:py-9

                ${
                  plan.featured
                    ? `
                      border-[#1A1614]
                      bg-[#1A1614]
                      text-white
                      shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                      lg:scale-[1.04]
                    `
                    : `
                      border-[#E8E2DD]
                      bg-[#FAF6F2]
                    `
                }
              `}
            >

              {/* FEATURED TAG */}
              {plan.featured && (
                <span className="
                  absolute
                  left-1/2
                  top-[-14px]
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  bg-[#FF5A3C]
                  px-4
                  py-[6px]
                  text-[11px]
                  font-bold
                  tracking-[0.08em]
                  text-white
                ">
                  MOST POPULAR
                </span>
              )}

              {/* PLAN NAME */}
              <div className="
                mb-3
                text-[12px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#FF5A3C]
              ">
                {plan.name}
              </div>

              {/* PRICE */}
              <div className="
                mb-[6px]
                font-[Fraunces]
                text-[28px]
                font-semibold
                leading-none
                tracking-[-0.02em]
                min-[480px]:text-[32px]
                lg:text-[38px]
              ">
                {plan.price}
              </div>

              {/* TIMELINE */}
              <div className={`
                mb-6
                text-[12px]
                min-[480px]:text-[14px]

                ${
                  plan.featured
                    ? "text-white/70"
                    : "text-[#7A716C]"
                }
              `}>
                {plan.timeline}
              </div>

              {/* FEATURES */}
              <ul className="mb-7 flex-grow space-y-2">

                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`
                      flex items-start gap-[10px]
                      text-[12px]
                      leading-[1.5]
                      min-[480px]:text-[14px]

                      ${
                        plan.featured
                          ? "text-white/85"
                          : "text-[#3D3835]"
                      }
                    `}
                  >

                    <span className="
                      shrink-0
                      font-bold
                      text-[#FF5A3C]
                    ">
                      ✓
                    </span>

                    {feature}

                  </li>
                ))}

              </ul>

              {/* BUTTON */}
              <button
                onClick={scrollToForm}
                className={`
                  w-full
                  rounded-xl
                  px-4
                  py-3
                  text-[12px]
                  font-bold
                  transition-all
                  duration-200
                  min-[480px]:py-[14px]
                  min-[480px]:text-[14px]

                  ${
                    plan.featured
                      ? `
                        bg-[#FF5A3C]
                        text-white
                        hover:bg-[#E63E20]
                      `
                      : `
                        border border-[#E8E2DD]
                        bg-white
                        text-[#1A1614]
                        hover:border-[#FF5A3C]
                        hover:text-[#FF5A3C]
                      `
                  }
                `}
              >

                {plan.featured
                  ? "Get Growth Quote"
                  : plan.name === "Starter MVP"
                  ? "Get Starter Quote"
                  : "Get Enterprise Quote"}

              </button>

            </div>
          ))}

        </div>

        {/* NOTE */}
        <div className="
          mt-6
          rounded-xl
          bg-[#FFF0EB]
          p-4
          text-center
          text-[12px]
          text-[#3D3835]
          min-[480px]:text-[14px]
          sm:mt-9
          sm:p-5
        ">

          <strong>
            Not sure which fits you?
          </strong>{" "}

          Our consultants will analyze your business
          model and recommend the right package —
          at no cost.

          {" "}

          <button
            onClick={scrollToForm}
            className="
              border-none
              bg-transparent
              font-bold
              text-[#FF5A3C]
            "
          >
            Get a custom quote →
          </button>

        </div>

      </div>

    </section>
  );
}