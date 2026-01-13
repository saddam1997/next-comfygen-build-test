import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const WallOfFame = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const awards = [
    {
      id: 1,
      title: 'Clutch',
      description: 'Top App Developers for Healthcare in India',
      image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    },
    {
      id: 2,
      title: 'GoodFirms',
      description: 'Top Dating App Development Company',
     image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    },
    {
      id: 3,
      title: 'Top Developers',
      description: 'Best AI Consulting Company in Canada',
     image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    },
    {
      id: 4,
      title: 'Right Firms',
      description: "Mobile App Development Company in UAE",
    image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    },
    {
      id: 5,
      title: 'Designrush',
      description: 'Top Blockchain Development Company in Canada',
    image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    {
      id: 6,
      title: 'Superb Companies',
      description: 'Top Blockchain Development Company in india',
     image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    },
    {
      id: 7,
      title: 'Selected Firms',
      description: 'Top Ecommerce Development Company',
     image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    },  
    {
      id: 8,                                                                                                                                                                                                                                                                                                                                                                                        
      title: 'ItRate',
      description: 'Top Custom Software Development Company',
     image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    },
    {
      id: 9,
      title: 'Mobile App Daily',
      description: 'Top App Development Company 2026',
      image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    },
    {
      id: 10,
      title: 'F6S',
      description: 'Top NFT MarketPlace Development Company in Canada',
     image: 'https://www.comfygen.com/comfygen-images/icons/clutch.webp'
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Desktop scroll handling
  const handleScroll = () => {
    if (scrollContainerRef.current && window.innerWidth >= 768) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 6;
      const scrollPosition = container.scrollLeft;
      const newSlide = Math.round(scrollPosition / cardWidth);
      setCurrentSlide(newSlide);
    }
  };

  // Mouse drag handling for desktop
  const handleMouseDown = (e) => {
    if (window.innerWidth >= 768 && scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || window.innerWidth < 768 || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handling for mobile
  const handleTouchStart = (e) => {
    if (window.innerWidth < 768 && scrollContainerRef.current) {
      setStartX(e.touches[0].clientX);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e) => {
    if (window.innerWidth < 768 && scrollContainerRef.current) {
      const x = e.touches[0].clientX;
      const walk = (startX - x) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft + walk;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const totalSlides = Math.ceil(awards.length / 6);

  const scrollToSlide = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth / 6;
    container.scrollTo({
      left: index * cardWidth * 6,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section 
        className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden"
        role="region"
        aria-label="Awards and Recognition"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header - Prevent Layout Shift */}
          <div className="mb-8 sm:mb-10 md:mb-12 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] flex items-center">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center md:text-left w-full"
              itemProp="name"
            >
              Our Wall of Fame as a Mobile App<br className="hidden sm:block" /> Development Company
            </h1>
          </div>

          {/* Awards Container */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:overflow-x-auto md:gap-4 lg:gap-6 md:pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:snap-x md:snap-mandatory"
              style={{
                scrollBehavior: 'smooth',
                cursor: isClient && window.innerWidth >= 768 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                userSelect: isDragging ? 'none' : 'auto',
                WebkitOverflowScrolling: 'touch'
              }}
              role="list"
              itemProp="itemListElement"
            >
              {awards.map((award:any, index) => (
                <article
                  key={award.id}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 ease-out flex-shrink-0 md:w-72 lg:w-80 md:snap-start group will-change-transform min-h-[240px] sm:min-h-[260px] md:min-h-[280px] flex flex-col"
                  itemScope
                  itemType="https://schema.org/Award"
                  itemProp="itemListElement"
                  role="listitem"
                  aria-label={"Clutch"}
                >
                  {/* <meta itemProp="position" content={String(index + 1)} /> */}
                  
                  <div className="flex flex-col items-center text-center h-full justify-between">
                    {/* Badge with Laurel Wreath - Fixed Height */}
                    <div className="mb-4 sm:mb-5 md:mb-6 group-hover:scale-105 transition-transform duration-300 ease-out h-20 sm:h-24 md:h-28 flex items-center justify-center w-full">
                      <div 
                        className="w-32 h-32 flex justify-center bg-transparent"
                        role="img"
                        aria-label={"Clutch"}
                      >
                        <Image width={440} height={220} alt='all icons image' src={award.image} className='h-full w-full flex justify-center object-contain' />
                       
                      </div>
                      
                    </div>

                    {/* Content - Fixed Height */}
                    <div className="flex flex-col gap-2 sm:gap-3 flex-1 justify-center">
                      {/* Title */}
                      <h2 
                        className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight"
                        itemProp="name"
                      >
                        {award.title}
                      </h2>

                      {/* Description */}
                      {/* <p 
                        className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed line-clamp-3"
                        itemProp="description"
                      >
                        {award.description}
                      </p> */}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Dots - Desktop Only - Fixed Height */}
            <div className="hidden md:flex justify-center items-center gap-2 mt-6 md:mt-8 h-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`transition-all duration-300 ease-out rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                    currentSlide >= index * 6 && currentSlide < (index + 1) * 6
                      ? 'w-8 h-3 bg-blue-600'
                      : 'w-3 h-3 bg-blue-300 hover:bg-blue-400'
                  }`}
                  aria-label={"Clutch"}
                  aria-current={currentSlide >= index * 6 && currentSlide < (index + 1) * 6 ? 'true' : 'false'}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preload hint for better LCP */}
      {isClient && (
        <link 
          rel="preload" 
          as="image" 
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
        />
      )}
    </>
  );
};

export default WallOfFame;