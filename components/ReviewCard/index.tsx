import { useState, useEffect } from "react";
import HeadingTwo from "../ui/HeadingTwo";
import Card from "./Card";

const Index = ({ testimonials }: any) => {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // ✅ Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);   // mobile
      else setSlidesToShow(2);                           // tablet + desktop
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonials?.Review?.length || 0;

  const maxIndex = Math.max(totalSlides - slidesToShow, 0);

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-6 bg-white">
      <div className="mx-auto container px-4">

        {/* Heading */}
        <div className="text-center mb-6">
          <HeadingTwo color="black" text={testimonials?.heading} />
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / slidesToShow}%)`,
            }}
          >
            {testimonials?.Review?.map((item: any, i: number) => (
              <div
                key={i}
                className="px-3 shrink-0"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Index;
