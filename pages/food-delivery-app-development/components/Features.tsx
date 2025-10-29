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
    title: "Customer Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/customer-panel-food-delivery-app-development.webp",
    additionalDetails: [
      { details: "Easy Sign-Up & Social Login", emoji: "", content: "" },
      { details: "Browse Restaurants & Menus", emoji: "", content: "" },
      { details: "Real-Time Order Tracking", emoji: "", content: "" },
      { details: "Ratings & Reviews for Restaurants", emoji: "", content: "" },
      { details: "Multiple Payment Options (Cards, UPI, Wallets, COD)", emoji: "", content: "" },
      { details: "Reorder & Subscription Plans", emoji: "", content: "" },
      { details: "GPS-Based Restaurant Discovery", emoji: "", content: "" },
      { details: "Push Notifications for Offers & Updates", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Restaurant Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/restaurant-panel-food-delivery-app-development.webp",
    additionalDetails: [
      { details: "Manage Menus & Pricing", emoji: "", content: "" },
      { details: "Accept/Reject Orders Instantly", emoji: "", content: "" },
      { details: "Real-Time Order Alerts & Updates", emoji: "", content: "" },
      { details: "Track Deliveries & Assign Drivers", emoji: "", content: "" },
      { details: "Revenue & Commission Tracking", emoji: "", content: "" },
      { details: "Customer Feedback Management", emoji: "", content: "" },
      { details: "Analytics Dashboard for Sales Insights", emoji: "", content: "" },
      { details: "Promotions & Discount Management", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Driver Panel",
    img: "https://www.comfygen.com/image/admin-panel-food-delivery-app-development.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Easy Registration & Profile Setup", emoji: "", content: "" },
      { details: "Accept/Reject Delivery Requests", emoji: "", content: "" },
      { details: "Optimized GPS Routes & Navigation", emoji: "", content: "" },
      { details: "Real-Time Order Pick-Up & Drop Alerts", emoji: "", content: "" },
      { details: "Delivery History & Earnings Reports", emoji: "", content: "" },
      { details: "In-App Chat/Call with Customers", emoji: "", content: "" },
      { details: "Wallet Integration for Payments", emoji: "", content: "" },
      { details: "Push Notifications for New Orders", emoji: "", content: "" },
    ],
  },
  {
    id: 4,
    title: "Admin Panel",
    img: "https://www.comfygen.com/image/driver-panel-food-delivery-app-development.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Centralized Dashboard with Key Metrics", emoji: "", content: "" },
      { details: "Manage Customers, Restaurants & Drivers", emoji: "", content: "" },
      { details: "Order & Delivery Tracking System", emoji: "", content: "" },
      { details: "Revenue & Commission Settings", emoji: "", content: "" },
      { details: "Approve/Reject Vendor Registrations", emoji: "", content: "" },
      { details: "CMS for Content, Offers & Promotions", emoji: "", content: "" },
      { details: "Advanced Analytics & Reporting", emoji: "", content: "" },
      { details: "Multi-Region & Multi-Branch Control", emoji: "", content: "" },


    ],
  },
];

const Features: React.FC = () => {
  // const [openedFeature, setOpenedFeature] = useState<Feature | null>(
  //   featuresData[0]
  // );
  // const handleButtonClick = (feature: Feature) => {
  //   if (openedFeature?.id !== feature.id) {
  //     setOpenedFeature(feature);
  //   }
  // };

  const [openedFeature, setOpenedFeature] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile view
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);


      if (featuresData?.length > 0) {
        setOpenedFeature(featuresData[0]);
      }

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
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10 border border-[#5556D1]">
          {featuresData.map((feature: any) => (
            <div key={feature.id} className="flex flex-col">
              {/* Button */}
              <div
                className={`rounded-full flex justify-center border border-gray-300 cursor-pointer transition-all duration-200 ${openedFeature?.id === feature.id
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
                      <li className="py-2 sm:text-base text-sm border-b border-[#5556D1]/40 text-gray-700">
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

