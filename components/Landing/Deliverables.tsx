"use client";


export default function Deliverables({ DATA }: any) {
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
          gap-3
          sm:grid-cols-2
          sm:gap-[14px]
          lg:grid-cols-3
          lg:gap-4
        ">

          {DATA.deliverables.map((item: any, index: number) => (
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