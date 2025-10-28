import React, { useEffect, useState } from "react";
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  icon: JSX.Element;
  img: string;
  additionalDetails: { emoji: string; details: string; content: string }[];
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "User Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/astrology-app-development/p5.webp",
    additionalDetails: [
      { details: "Profile Management", emoji: "", content: "" },
      { details: "Daily Horoscopes", emoji: "", content: "" },
      { details: "Zodiac Details", emoji: "", content: "" },
      { details: "Personalized Readings", emoji: "", content: "" },
      { details: "Compatibility Analysis", emoji: "", content: "" },
      { details: "Prediction Tracking", emoji: "", content: "" },
      { details: "Booking Consultations", emoji: "", content: "" },
      { details: "Health & Wealth Forecast View", emoji: "", content: "" },
      { details: "Favorite Astrologers", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Astrologer Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/astrology-app-development/p3.webp",
    additionalDetails: [
      { details: "Profile Setup & Management", emoji: "", content: "" },
      { details: "Consultation Scheduling", emoji: "", content: "" },
      { details: "Real-Time Chat & Video Calls", emoji: "", content: "" },
      { details: "Earnings Dashboard", emoji: "", content: "" },
      { details: "Horoscope & Kundli Analysis Tools", emoji: "", content: "" },
      { details: "Customer Management", emoji: "", content: "" },
      { details: "Availability Settings", emoji: "", content: "" },
      { details: "Review & Rating Management", emoji: "", content: "" },
      { details: "Astrology Content Publishing", emoji: "", content: "" },
      { details: "Notification & Alert System", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/astrology-app-development/p4.webp",
    additionalDetails: [
      { details: "User & Astrologer Management", emoji: "", content: "" },
      { details: "Consultation Booking & Tracking", emoji: "", content: "" },
      { details: "Secure Payment Management", emoji: "", content: "" },
      { details: "Subscription & Revenue Analytics", emoji: "", content: "" },
      { details: "AI-Based Insights & Reports", emoji: "", content: "" },
      { details: "Content & Horoscope Management", emoji: "", content: "" },
      { details: "Multi-Language & Localization Settings", emoji: "", content: "" },
      { details: "Security & Data Privacy Controls", emoji: "", content: "" },
      { details: "Advanced Dashboard & Analytics", emoji: "", content: "" }
    ],
  }
];

const Features: React.FC = () => {

  const [openedFeature, setOpenedFeature] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile view
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      // If desktop, open first feature by default
      if (!mobile && featuresData?.length > 0) {
        setOpenedFeature(featuresData[0]);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [featuresData]);

  const handleButtonClick = (feature: any) => {
    // On mobile: toggle accordion
    if (isMobile) {
      setOpenedFeature((prev: any) =>
        prev?.id === feature.id ? null : feature
      );
    } else {
      // On desktop: change the opened feature
      setOpenedFeature(feature);
    }
  };


  return (
    <section className="bg-center bg-repeat bg-fixed">
      <div className="lg:py-16 py-10 bg-[#F5F5F9]">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h2 className="xl:text-4xl text-3xl font-bold">
            We Develop Astrology Apps With Advanced Panel Features
          </h2>
          <p className="text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
            At Comfygen, we integrate cutting-edge features into our astrology
            app development services to enhance user experience, streamline
            management, and optimize astrology consultations.
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
          {featuresData.map((feature: any) => (
            <div key={feature.id} className="flex flex-col">
              {/* Button */}
              <div
                className={`rounded-full flex justify-center border border-gray-300 cursor-pointer transition-all duration-200 ${
                  openedFeature?.id === feature.id
                    ? "bg-[#5556D1] text-white border-[#5556D1]"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <button
                  className="text-lg font-medium p-2 focus:outline-none w-full"
                  onClick={() => handleButtonClick(feature)}
                >
                  {feature.title}
                </button>
              </div>

              {/* Mobile detail view (accordion style) */}
              {isMobile && openedFeature?.id === feature.id && (
                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-4 transition-all duration-300">
                  {feature.img && (
                    <div className="hidden mb-4 lg:flex justify-center">
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        width={400}
                        height={300}
                        className="rounded-md w-full h-auto"
                        quality={75}
                        priority={true}
                      />
                    </div>
                  )}
                  {feature.additionalDetails.map((detail: any, index: number) => (
                    <ul className="max-w-xl mx-auto" key={index}>
                      <li className="py-2 border-b border-[#5556D1]/40 text-gray-700">
                        {detail.details}
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop detail view (below all buttons) */}
        {!isMobile && openedFeature && (
          <div className="mt-10 p-4 grid grid-cols-1 md:grid-cols-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 items-center">
            {openedFeature.img && (
              <div className="hidden lg:flex justify-center">
                <Image
                  src={openedFeature.img}
                  alt={openedFeature.title}
                  width={500}
                  height={400}
                  className="rounded-lg border border-gray-200"
                  quality={75}
                  priority={true}
                />
              </div>
            )}
            <div className="mt-2 py-2 mx-4">
              {openedFeature.additionalDetails.map(
                (detail: any, index: number) => (
                  <ul className="max-w-xl" key={index}>
                    <li className="py-3 border-b border-[#5556D1]/40 flex gap-3">
                      <h3 className="text-gray-800">{detail.details}</h3>
                    </li>
                  </ul>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;

