'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import React from 'react';

function Portfolio({ projects, heading, description }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };


  // ✅ Stable interval
  useEffect(() => {
    if (isHovered) return;
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, [projects, isHovered]);

  return (
    <div className="bg-[#F5F5F9] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="xl:text-4xl text-2xl md:text-3xl text-[#212121] font-bold">{heading}</h2>
          <p
            className="text-base font-normal mt-2 mx-auto w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <div className="py-8 relative">
          <div className="overflow-hidden h-full ">
            <div
              className="flex transition-transform duration-500 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.isArray(projects) && projects.length > 0 && projects?.map((project: any, index: any) => (
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  key={index}
                  className="w-full flex-shrink-0 py-5 cursor-pointer">
                  <div className="border rounded-3xl shadow-xl md:p-12 mx-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <Image
                          className="bg-center bg-contain h-[160] md:h-[400px] w-full"
                          src={project?.image}
                          alt={project?.title}
                          width={297}
                          height={192}
                          quality={50}
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 907px"
                        />
                      </div>
                      <div className="p-2 sm:p-0">
                        <h3 className="sm:text-4xl text-center sm:text-start text-sm font-bold text-gray-900">
                          {project?.title}
                        </h3>
                        <p
                          className="text-black py-3 text-base block md:hidden sm:text-4xl text-center"
                          dangerouslySetInnerHTML={{
                            __html: project?.description.slice(0, 80) + '...',
                          }}
                        />
                        <p
                          className="text-black py-3 text-base hidden md:block"
                          dangerouslySetInnerHTML={{
                            __html: project?.description,
                          }}
                        />
                        <div>
                          <Link href={project?.link} passHref>
                            <button aria-label="Explore Now" className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-3 sm:px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                              Explore Now <MdOutlineArrowOutward />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <button aria-label="prev Slide" onClick={prevSlide} className="w-12 h-12 absolute top-[40%] -left-28 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button aria-label="next Slide" onClick={nextSlide} className="w-12 h-12 absolute top-[40%] -right-28 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}


          {/* Dots */}
          {/* <div className="flex justify-center gap-2 mt-6">
            {projects?.map((_: any, index: number) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className="flex items-center justify-center w-4 h-4" // <-- larger tap area (32×32 px)
              >
                <span
                  className={`block w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'bg-indigo-600 w-8' // active indicator larger
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              </button>
            ))}
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default React.memo(Portfolio);

