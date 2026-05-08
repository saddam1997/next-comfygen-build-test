"use client";

export default function AppTypes({ DATA }: { DATA: any }) {

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
            {DATA.title}
          
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

           {DATA.subtitle.start}{" "}

            <span className=" text-[#FF5A3C]">
              {DATA.subtitle.highlight}
            </span>

          </h2>

          {/* SUBTEXT */}
          <p className="
            text-[14px]
            leading-[1.6]
            text-[#7A716C]
            min-[480px]:text-[15px]
            md:text-[17px]
          ">
            {DATA.description}
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

          {DATA.appTypes.map((type: any, index: number) => (
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