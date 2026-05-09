

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "David Ams",
    role: "Co-founder – Luxbubble",
    thumbnail: "/videos/david.jpg",
    videoUrl: "/videos/david.mp4",
  },
  {
    id: 2,
    name: "Marco Perez",
    role: "Co-founder – Bancreach",
    thumbnail: "/videos/marco.jpg",
    videoUrl: "/videos/marco.mp4",
  },
  {
    id: 3,
    name: "Meshari ALMaqhawi",
    role: "Founder & CEO – Logibide",
    thumbnail: "/videos/meshari.jpg",
    videoUrl: "/videos/meshari.mp4",
  },
  {
    id: 4,
    name: "David Ams",
    role: "Co-founder – Luxbubble",
    thumbnail: "/videos/david.jpg",
    videoUrl: "/videos/david.mp4",
  },
  {
    id: 5,
    name: "Marco Perez",
    role: "Co-founder – Bancreach",
    thumbnail: "/videos/marco.jpg",
    videoUrl: "/videos/marco.mp4",
  },
  {
    id: 6,
    name: "Meshari ALMaqhawi",
    role: "Founder & CEO – Logibide",
    thumbnail: "/videos/meshari.jpg",
    videoUrl: "/videos/meshari.mp4",
  },
];

const CARD_WIDTH = 360;

export default function VideoTestimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // 🔁 3x duplicate
  const loopData = [...testimonials, ...testimonials, ...testimonials];
  const middleStart = testimonials.length * CARD_WIDTH;

  // ✅ Start from middle (important)
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = middleStart;
    }
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const max = middleStart + testimonials.length * CARD_WIDTH;
    const min = middleStart - testimonials.length * CARD_WIDTH;

    // ✅ BEFORE edge hit → silent reset
    if (sliderRef.current.scrollLeft >= max) {
      sliderRef.current.scrollLeft = middleStart;
    }

    if (sliderRef.current.scrollLeft <= min) {
      sliderRef.current.scrollLeft = middleStart;
    }
  };

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -CARD_WIDTH : CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">
          See What Our Clients
        </h2>

        <div className="flex gap-3">
          <button onClick={() => scroll("left")} className="w-10 h-10 border rounded-full">←</button>
          <button onClick={() => scroll("right")} className="w-10 h-10 border rounded-full">→</button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth"
      >
        {loopData.map((item, index) => (
          <article
            key={`${item.id}-${index}`}
            className="shrink-0 w-[320px] md:w-[340px] h-[460px] rounded-3xl overflow-hidden relative cursor-pointer"
            onClick={() => setActiveVideo(item.videoUrl)}
          >
            <Image
              src={item.thumbnail}
              alt={item.name}
              fill
              className="object-cover"
              loading={index < 3 ? "eager" : "lazy"}
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white">
                ▶
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm opacity-90">{item.role}</p>
            </div>
          </article>
        ))}
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setActiveVideo(null)}
        >
          <video
            src={activeVideo}
            controls
            autoPlay
            preload="none"
            className="max-w-3xl w-full rounded-xl"
          />
        </div>
      )}
    </section>
  );
}

