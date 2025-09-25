import { useState } from "react";

interface SlideContent {
  title: string;
  description?: string; // Make description optional
  li?: string[];        // Make li an optional array
}

interface ImageSliderProps {
  slides: SlideContent[];
}

const ProcessSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  if (!slides || slides.length === 0) {
    return <p>No slides available</p>; // Fallback content
  }

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchCurrentX = e.touches[0].clientX;
    const diffX = touchStartX - touchCurrentX;

    if (diffX > 50) {
      handleNext();
      setTouchStartX(null);
    }

    if (diffX < -50) {
      handlePrev();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  return (
    <div
      className="relative w-full max-w-xl mx-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden p-6 bg-[#26304F] text-white rounded-md h-60">
        <h1 className="text-xl font-bold transition-all duration-500 ease-in-out">
          {slides[currentIndex].title}
        </h1>

        {slides[currentIndex].li ? (
          <ul className="mt-4 transition-all duration-500 ease-in-out list-disc pl-6">
            {slides[currentIndex].li.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p
            className="mt-4 transition-all duration-500 ease-in-out"
            dangerouslySetInnerHTML={{
              __html: slides[currentIndex].description || "",
            }}
          />
        )}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-8 h-8 flex justify-center items-center rounded-full text-white cursor-pointer transition-colors duration-300 
              ${index === currentIndex ? "bg-gray-900" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProcessSlider;
