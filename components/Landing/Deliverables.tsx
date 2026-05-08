"use client";

const deliverables = [
  {
    icon: "📱",
    title: "Customer App (iOS + Android)",
    description:
      "Native-feel apps with social login, smart search, real-time order tracking, multiple payment options, and push notifications.",
  },
  {
    icon: "🏪",
    title: "Restaurant Vendor App",
    description:
      "Menu management, order acceptance, real-time inventory, sales reports, and earnings dashboard for restaurant partners.",
  },
  {
    icon: "🛵",
    title: "Delivery Driver App",
    description:
      "Auto-assigned orders, optimized GPS routes, in-app navigation, earnings tracker, and one-tap customer support.",
  },
  {
    icon: "📊",
    title: "Web Admin Dashboard",
    description:
      "Manage restaurants, drivers, payments, commissions, promo codes, analytics, and customer data — all from one panel.",
  },
  {
    icon: "💳",
    title: "Payment Gateway Integration",
    description:
      "Razorpay, Stripe, PayU, PhonePe, UPI, Apple Pay, Google Pay, and Cash-on-Delivery — pre-integrated and PCI-compliant.",
  },
  {
    icon: "🗺️",
    title: "Real-Time GPS Tracking",
    description:
      "Live order tracking with Google Maps or Mapbox, ETA prediction, driver location sharing, and geofencing for accuracy.",
  },
  {
    icon: "🔐",
    title: "100% Source Code Ownership",
    description:
      "You own every line of code, the database, and all IP rights. No license fees. Work with any team after delivery.",
  },
  {
    icon: "🎧",
    title: "3 Months Free Support",
    description:
      "Bug fixes, performance monitoring, OS updates, and priority response within 4 hours for critical issues — included.",
  },
  {
    icon: "🚀",
    title: "App Store Deployment",
    description:
      "We handle Apple App Store + Google Play Store submission, compliance checks, and app review approval — done for you.",
  },
];

export default function Deliverables() {
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
            What's Included
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
          ">

            Everything you need to launch a{" "}

            <em className="italic text-[#FF5A3C]">
              complete food delivery business
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
            No surprise costs. No "extras" charged later. Every food
            delivery app we build comes with the full ecosystem ready
            to run a real business from day one.
          </p>

        </div>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          sm:gap-[14px]
          lg:grid-cols-3
          lg:gap-4
        ">

          {deliverables.map((item, index) => (
            <div
              key={index}
              className="
                cursor-pointer
                rounded-2xl
                border border-[#E8E2DD]
                bg-[#FAF6F2]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
                min-[480px]:p-6
                lg:p-7
              "
            >

              {/* ICON */}
              <div className="
                mb-4
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-[#FFF0EB]
                text-[18px]
                text-[#FF5A3C]
                min-[480px]:h-11
                min-[480px]:w-11
                min-[480px]:text-[20px]
                sm:h-12
                sm:w-12
                sm:text-[22px]
              ">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="
                mb-[6px]
                font-[Plus Jakarta Sans]
                text-[15px]
                font-bold
                text-[#1A1614]
                min-[480px]:text-[16px]
                sm:text-[17px]
              ">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="
                text-[12px]
                leading-[1.5]
                text-[#7A716C]
                min-[480px]:text-[13px]
                sm:text-[14px]
              ">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}