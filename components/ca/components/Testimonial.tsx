import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    text: "Comfygen Private Limited baked in India, And there team exceeded my expectations in developing my mobile application. Their attention to detail and willingness to go the extra mile were truly remarkable. I am extremely satisfied with the end result and would highly recommend their mobile app services to anyone looking for top-notch mobile app development.",
    name: "Emilia",
    project: "Mobile application",
    location: "UK"
  },
  {
    text: "I am based in Germany and had the pleasure of partnering with Comfygen Pvt. Ltd. for my blockchain application based with MLM project. Their team displayed exceptional professionalism and proficiency in the development process. The final product exceeded my expectations, and I am delighted with the results. I wholeheartedly endorse Comfygen for their outstanding work.",
    name: "Matteo",
    project: "Blockchain Application with MLM Project",
    location: "Germany"
  },
  {
    text: "It was a pleasure collaborating with Comfygen Private Limited for the development of my clinical application. The team from Jaipur, Rajasthan, India, showcased remarkable expertise and dedication throughout the project. Their attention to detail and commitment to delivering a flawless solution were truly commendable. I am grateful for their exceptional work and highly recommend their services to anyone seeking clinical application development.",
    name: "Nitin Sharma",
    project: "Clinical Application",
    location: "India Ahemdabad"
  },
  {
    text: "Working with Comfygen was a fantastic experience. Their expertise in healthcare application development is unparalleled. They not only delivered a high-quality product but also provided excellent support throughout the process. I am grateful for their dedication and would collaborate with them again in the future.",
    name: "Hannah",
    project: "Healthcare Application",
    location: "Australia"
  },
  {
    text: "Comfygen's game development services are truly exceptional. Their team in Mumbai delivered an innovative and engaging gaming experience that perfectly aligned with my vision. Their commitment to quality and creativity sets them apart, and I am incredibly satisfied with the outcome. I would undoubtedly choose Comfygen for future gaming projects.",
    name: "Harish chandra",
    project: "Game development Services",
    location: "India mumbai"
  },
  {
    text: "Comfygen expertise in news and web app development impressed me beyond words. The team from Rajasthan demonstrated a deep understanding of my requirements and delivered a solution that surpassed my expectations. Their professionalism and attention to detail were outstanding, and I am immensely pleased with the final product. Comfygen is my go-to choice for all my future projects.",
    name: "Sarita Chabra",
    project: "News & Web App Development",
    location: "India Rajasthan"
  }
];

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-[#F8F9FE]">
      <div className="space-y-8 py-8 lg:py-20 mx-auto max-w-[1200px] xl:w-5/6 w-11/12">
        <div>
          <h2 className="py-4 text-3xl font-bold text-[#0E1F51] text-center">
            Client Testimonials
          </h2>
        </div>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
              >
                <div className="bg-white shadow-lg p-8 md:p-14 text-center rounded-lg mx-2">
                  <div className="mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-xl text-gray-900">
                      {testimonial.name} ({testimonial.project})
                    </h3>
                    <span className="text-base font-semibold text-[#c9366c]">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? 'bg-[#0E1F51] w-8 h-3' 
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}