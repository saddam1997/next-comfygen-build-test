"use client";

const testimonials = [
  {
    stars: "★★★★★",
    text: `"The app exceeded our expectations. The Comfygen team is professional, friendly, and the communication was excellent throughout. We'll develop our next project with them too."`,
    author: "Tom Baker",
    location: "Germany",
    initials: "TB",
  },
  {
    stars: "★★★★★",
    text: `"Comfygen developed our food delivery app — user-friendly, scalable, and exactly what we needed. The team understood our requirements and delivered on time."`,
    author: "Raman Mathur",
    location: "Jaipur, India",
    initials: "RM",
  },
  {
    stars: "★★★★★",
    text: `"Highly knowledgeable and professional team. Their commitment to excellence and customer satisfaction is truly impressive. Would definitely work with them again."`,
    author: "Devguru Enterprises",
    location: "India",
    initials: "DG",
  },
];

export default function Testimonials() {
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
            Client Stories
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
            Trusted by 150+ food businesses{" "}

            <em className="italic text-[#FF5A3C]">
              worldwide
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
            From bootstrapped startups to enterprise
            restaurant chains — here's what our clients
            say after launching with us.
          </p>

        </div>

        {/* VIDEO GRID */}
        <div className="
          mb-5
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
          md:gap-5
          sm:mb-6
        ">

          {/* VIDEO 1 */}
          <a
            href="https://www.youtube.com/watch?v=kedGnt6T-DI"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              flex
              aspect-video
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              bg-[#1A1614]
            "
          >

            {/* OVERLAY */}
            <div className="
              absolute
              inset-0
              bg-[linear-gradient(135deg,rgba(255,90,60,0.2),rgba(0,0,0,0.5))]
            " />

            {/* PLAY BUTTON */}
            <div className="
              relative
              z-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-[18px]
              text-[#FF5A3C]
              transition-transform
              duration-200
              group-hover:scale-110
              min-[480px]:h-14
              min-[480px]:w-14
              min-[480px]:text-[20px]
              sm:h-16
              sm:w-16
              sm:text-[22px]
            ">
              ▶
            </div>

            {/* CAPTION */}
            <div className="
              absolute
              bottom-4
              left-4
              z-10
              text-white
            ">

              <strong className="
                block
                font-[Fraunces]
                text-[13px]
                min-[480px]:text-[14px]
                sm:text-[15px]
              ">
                Nitesh Rajput
              </strong>

              <span className="
                text-[10px]
                opacity-85
                min-[480px]:text-[11px]
                sm:text-[12px]
              ">
                Book My Tuter • India
              </span>

            </div>

          </a>

          {/* VIDEO 2 */}
          <a
            href="https://www.youtube.com/watch?v=-AkHiORQTjA"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              flex
              aspect-video
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              bg-[#1A1614]
            "
          >

            {/* OVERLAY */}
            <div className="
              absolute
              inset-0
              bg-[linear-gradient(135deg,rgba(255,90,60,0.2),rgba(0,0,0,0.5))]
            " />

            {/* PLAY BUTTON */}
            <div className="
              relative
              z-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-[18px]
              text-[#FF5A3C]
              transition-transform
              duration-200
              group-hover:scale-110
              min-[480px]:h-14
              min-[480px]:w-14
              min-[480px]:text-[20px]
              sm:h-16
              sm:w-16
              sm:text-[22px]
            ">
              ▶
            </div>

            {/* CAPTION */}
            <div className="
              absolute
              bottom-4
              left-4
              z-10
              text-white
            ">

              <strong className="
                block
                font-[Fraunces]
                text-[13px]
                min-[480px]:text-[14px]
                sm:text-[15px]
              ">
                Sayead Shadab Arif
              </strong>

              <span className="
                text-[10px]
                opacity-85
                min-[480px]:text-[11px]
                sm:text-[12px]
              ">
                Forge Flex • Dubai, UAE
              </span>

            </div>

          </a>

        </div>

        {/* TESTIMONIALS GRID */}
        <div className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          md:gap-[18px]
          lg:grid-cols-3
          lg:gap-4
        ">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-[#E8E2DD]
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
                min-[480px]:p-6
                lg:p-7
              "
            >

              {/* STARS */}
              <div className="
                mb-[10px]
                text-[12px]
                tracking-[2px]
                text-[#F4B400]
                min-[480px]:mb-3
                min-[480px]:text-[14px]
              ">
                {testimonial.stars}
              </div>

              {/* TEXT */}
              <p className="
                mb-4
                text-[12px]
                italic
                leading-[1.6]
                text-[#3D3835]
                min-[480px]:text-[13px]
                sm:text-[14px]
              ">
                {testimonial.text}
              </p>

              {/* AUTHOR */}
              <div className="
                flex
                items-center
                gap-[10px]
                border-t
                border-[#E8E2DD]
                pt-4
                min-[480px]:gap-3
              ">

                {/* AVATAR */}
                <div className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFF0EB]
                  text-[12px]
                  font-bold
                  text-[#FF5A3C]
                  min-[480px]:h-10
                  min-[480px]:w-10
                  min-[480px]:text-[14px]
                ">
                  {testimonial.initials}
                </div>

                {/* INFO */}
                <div>

                  <strong className="
                    block
                    text-[13px]
                    text-[#1A1614]
                    min-[480px]:text-[14px]
                  ">
                    {testimonial.author}
                  </strong>

                  <span className="
                    text-[10px]
                    text-[#7A716C]
                    min-[480px]:text-[12px]
                  ">
                    {testimonial.location}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}