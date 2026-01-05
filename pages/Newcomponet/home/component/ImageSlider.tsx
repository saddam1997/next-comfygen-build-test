// components/TwoViewSlider.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, MoreHorizontal } from "lucide-react"; 

// --- SLIDER DATA ---
const SLIDER_DATA = [
  {
    id: 1,
    src: "https://www.comfygen.com/image/industries-ecommerce-img.webp", 
    title: "1. The Sarpaneva Castle",
    description: "Architectural study blending ancient Roman stone structures with modern minimalist glasswork.",
  },
  {
    id: 2,
    src: "https://www.comfygen.com/image/industries-healthcare-img.webp",
    title: "2. Citadel Ruins Project",
    description: "Restoration plans focusing on structural integrity and historical preservation using new materials.",
  },
  {
    id: 3,
    src: "https://www.comfygen.com/image/industries-blockchain-img.webp",
    title: "3. Mediterranean Fortress",
    description: "Detailed rendering of a coastal fortification, emphasizing light and shadow in a harsh climate.",
  },
  {
    id: 4,
    src: "https://www.comfygen.com/image/industries-education-img.webp",
    title: "4. Interior Design Concept",
    description: "Conceptual design for turning a section of the ruins into an open-air museum or gallery space.",
  },
  {
    id: 5,
    src: "https://www.comfygen.com/image/transportation-industries-img.webp",
    title: "5. Ancient Watchtower",
    description: "Focus on the isolated structures, highlighting the scale and remote beauty of the landscape.",
  },
];

export default function TwoViewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Since we show 2 items, the number of possible slides/steps is totalItems - 1
  const maxSteps = SLIDER_DATA.length - 1; 

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxSteps : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === maxSteps ? 0 : prevIndex + 1
    );
  };
  
  const translateValue = (currentIndex / maxSteps) * 100;

  return (
    <div className="flex justify-center items-center py-20 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-[#212429] rounded-2xl shadow-2xl relative">
        
        {/* === Top Progress and Controls === */}
        <div className="flex items-center justify-between px-2 mb-6">
          <div className="flex-grow h-1 bg-gray-700 rounded-full mr-4">
            <div 
              className="h-1 bg-white rounded-full transition-all duration-700 ease-in-out"
              style={{ width: `${translateValue}%` }} 
            ></div>
          </div>
          <MoreHorizontal className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white transition" />
        </div>
        
        {/* === SLIDER VIEWPORT (CROP) & NAVIGATION === */}
        <div className="overflow-hidden rounded-xl relative shadow-inner shadow-black/50">
          
          {/* SLIDES CONTAINER */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
                width: `${(SLIDER_DATA.length / 2) * 100}%`,
                transform: `translateX(-${translateValue}%)` 
            }}
          >
            {SLIDER_DATA.map((slide, index) => (
              <div 
                key={slide.id} 
                className="w-1/2 flex-shrink-0 relative" 
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  {/* Image */}
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500"
                  />

                  {/* Bottom Info Block (Only on the first visible slide) */}
                  {index === currentIndex && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-black/40 text-white flex justify-between items-end">
                      
                      {/* Text */}
                      <div className="flex-grow pr-4">
                        <h3 className="text-xl font-bold">{slide.title}</h3>
                        <p className="text-sm text-gray-300 line-clamp-2">{slide.description}</p>
                      </div>
                      
                      {/* Counter */}
                      <div className="text-3xl font-light">
                        {currentIndex + 1} / {maxSteps + 1}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* === FIXED NAVIGATION BUTTONS (New Placement!) === */}
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 p-3 bg-white/20 text-white hover:bg-white/30 transition duration-300 rounded-full border border-white/50 focus:outline-none z-20"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 p-3 bg-white/20 text-white hover:bg-white/30 transition duration-300 rounded-full border border-white/50 focus:outline-none z-20"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

        </div>

        {/* === Dot Indicators === */}
        <div className="flex justify-center mt-6 space-x-2">
          {SLIDER_DATA.slice(0, maxSteps + 1).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none 
                ${index === currentIndex 
                  ? 'bg-white w-4 h-4 shadow-lg' 
                  : 'bg-gray-500 hover:bg-gray-400'
                }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}