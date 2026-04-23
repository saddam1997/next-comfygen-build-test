// "use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import HeadingTwo from "../../../components/ui/HeadingTwo";

const CARD_WIDTH = 1200;

export default function Portfolio({ projects = [], heading, description }: any) {
  const [index, setIndex] = useState(0);

  /* ---------- ONLY 3 SLIDES ---------- */
  const visibleSlides = useMemo(() => {
    if (!projects.length) return [];

    const prev = projects[(index - 1 + projects.length) % projects.length];
    const current = projects[index];
    const next = projects[(index + 1) % projects.length];

    return [prev, current, next];
  }, [projects, index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const truncateText = (text: string, limit = 200) =>
    !text ? "" : text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <section className="relative w-full overflow-hidden py-8 bg-gray-50">

      {/* Heading */}
      <div className="text-center mx-auto max-w-7xl space-y-3 py-8">
        <HeadingTwo color={"#212121"} text={heading} />
        <p className="text-base font-normal">{description}</p>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex w-full  gap-6">
        {visibleSlides.map((item: any, i: number) => (
          <div
            key={item.id}
            className={`transition-all duration-300 ${i === 1 ? "scale-100" : "scale-95 opacity-70"
              }`}

          >
            <div className="h-[390px] rounded-3xl bg-white shadow-xl p-5 flex items-center gap-10 w-full">

              <div className="w-full space-y-6">
                <h3 className="text-3xl font-semibold">{item.title}</h3>

                <p className="text-gray-800 text-sm">
                  {truncateText(
                    item.description.replace(/<[^>]*>?/gm, ""),
                    200
                  )}
                </p>

                <Link href={item.link}>
                  <span className="inline-flex items-center gap-2 border border-[#453de3]
                    text-[#453ecf] px-6 py-2 rounded-full
                    hover:bg-[#6C63FF] hover:text-white transition">
                    View Case Study <MdOutlineArrowOutward />
                  </span>
                </Link>
              </div>

              <div className="w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={460}
                  height={360}
                  loading="lazy"
                  unoptimized   // 🔥 BIG FIX
                  sizes="460px"
                  className="object-contain"
                />

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory">
        {projects.slice(0, 5).map((item: any) => (
          <div key={item.id} className="shrink-0 w-[90vw] max-w-sm snap-center">
            <div className="rounded-3xl bg-gray-100 shadow-xl p-4 flex flex-col gap-5">

              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  unoptimized
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm font-semibold">{item.title}</h3>

              <p className="text-xs text-gray-900">
                {truncateText(
                  item.description.replace(/<[^>]*>?/gm, ""),
                  200
                )}
              </p>

              <Link href={item.link}>
                <span className="inline-flex items-center gap-2 border border-[#2821a8]
                  text-[#322bbd] px-4 py-2 rounded-full text-xs
                  hover:bg-[#6C63FF] hover:text-white transition">
                  View Case Study <MdOutlineArrowOutward />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="hidden md:flex justify-center gap-4 mt-8">
        <button onClick={prevSlide} className="w-10 h-10 border rounded-full">←</button>
        <button onClick={nextSlide} className="w-10 h-10 border rounded-full">→</button>
      </div>
    </section>
  );
}