"use client";

const appTypes = [
  {
    tag: "MOST REQUESTED",
    title: "Zomato Clone App",
    description:
      "Restaurant discovery + food ordering platform with reviews, ratings, table reservations, and real-time tracking. Ready in 4 weeks.",
  },
  {
    tag: "FAST LAUNCH",
    title: "Swiggy Clone App",
    description:
      "Multi-vendor delivery marketplace with smart routing, instant payouts, and aggregator-style restaurant onboarding.",
  },
  {
    tag: "GLOBAL READY",
    title: "UberEats / DoorDash Clone",
    description:
      "International-grade food delivery app with multi-currency, multi-language, and surge pricing logic for global markets.",
  },
  {
    tag: "HIGH MARGIN",
    title: "Cloud Kitchen App",
    description:
      "Manage multiple virtual brands from one kitchen. Smart order routing, KDS integration, and aggregator order pull.",
  },
  {
    tag: "DIRECT ORDERS",
    title: "Single Restaurant App",
    description:
      "Branded ordering app for your restaurant. No commission cuts. Loyalty programs, reservations, and direct customer data.",
  },
  {
    tag: "15-MIN DELIVERY",
    title: "Hyperlocal Delivery App",
    description:
      "Geofencing-based ultra-fast delivery (15–30 min). Smart driver dispatch, kitchen prep prediction, dark store support.",
  },
  {
    tag: "RECURRING REVENUE",
    title: "Meal Subscription App",
    description:
      "Tiffin services, diet meal plans, office catering. Weekly/monthly subscriptions, pause/cancel anytime, predictable revenue.",
  },
  {
    tag: "B2B MARKETPLACE",
    title: "Restaurant Aggregator",
    description:
      "Build the next Zomato. Multi-restaurant onboarding, payout management, commission engine, and 1,000+ vendor scale.",
  },
  {
    tag: "CUSTOM BUILD",
    title: "Something Else?",
    description:
      "Got a unique food delivery idea? We've built grocery, pharmacy, alcohol, ice cream, meat, and milk delivery apps too.",
  },
];

export default function AppTypes() {

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
    <section className="bg-[#FAF6F2] py-12 sm:py-16 lg:py-24">

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
            Choose Your Model
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

            Which type of food app do you want{" "}

            <em className="italic text-[#FF5A3C]">
              to build?
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
            From single-restaurant ordering to multi-country
            marketplaces — we've built every major food delivery
            model. Click any to get a tailored quote.
          </p>

        </div>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          md:gap-[18px]
          lg:grid-cols-3
          lg:gap-5
        ">

          {appTypes.map((type, index) => (
            <button
              key={index}
              onClick={scrollToForm}
              className="
                w-full
                cursor-pointer
                rounded-2xl
                border border-[#E8E2DD]
                bg-white
                p-5
                text-left
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#FF5A3C]
                hover:shadow-[0_16px_40px_rgba(255,90,60,0.12)]
                min-[480px]:p-6
                lg:p-7
              "
            >

              {/* TAG */}
              <span className="
                mb-3 inline-block
                rounded-full
                bg-[#FFF0EB]
                px-2 py-[3px]
                text-[9px]
                font-bold
                tracking-[0.05em]
                text-[#E63E20]
                min-[480px]:px-[10px]
                min-[480px]:py-1
                min-[480px]:text-[11px]
              ">
                {type.tag}
              </span>

              {/* TITLE */}
              <h3 className="
                mb-2
                font-[Fraunces]
                text-[18px]
                font-semibold
                tracking-[-0.01em]
                text-[#1A1614]
                min-[480px]:text-[20px]
                sm:text-[22px]
              ">
                {type.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="
                mb-4
                text-[12px]
                leading-[1.55]
                text-[#7A716C]
                min-[480px]:text-[13px]
                sm:text-[14px]
              ">
                {type.description}
              </p>

              {/* LINK */}
              <span className="
                inline-flex
                items-center
                gap-[6px]
                text-[12px]
                font-bold
                text-[#FF5A3C]
                min-[480px]:text-[13px]
              ">
                Get Quote →
              </span>

            </button>
          ))}

        </div>

      </div>

    </section>
  );
}