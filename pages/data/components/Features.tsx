import React, { useState } from "react";
import Image from "next/image";

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
    icon: <i className="fas fa-user text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-customer.webp",
    additionalDetails: [
      {
        details: "Easy Login/Signup with OTP or Social",
        emoji: "",
        content: "",
      },
      {
        details: "Advanced Product Search & Smart Filters",
        emoji: "",
        content: "",
      },
      { details: "Wishlist & Save for Later", emoji: "", content: "" },
      { details: "Real-Time Order Tracking", emoji: "", content: "" },
      { details: "Secure Multiple Payment Gateways", emoji: "", content: "" },
      { details: "Personalized Recommendations", emoji: "", content: "" },
      { details: "Ratings, Reviews & Order History", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Store/Vendor Panel",
    icon: <i className="fas fa-scissors text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-store.webp",
    additionalDetails: [
      {
        details: "Seller Registration & Profile Management",
        emoji: "",
        content: "",
      },
      { details: "Product Listing & Bulk Upload", emoji: "", content: "" },
      { details: "Order Alerts & Fulfillment Tools", emoji: "", content: "" },
      { details: "Offer/Coupon Creation", emoji: "", content: "" },
      { details: "Sales Analytics & Earnings Reports", emoji: "", content: "" },
      { details: "Inventory Updates & Stock Alerts", emoji: "", content: "" },
      { details: "Chat Support Integration", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    icon: <i className="fas fa-tools text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-admin.webp",
    additionalDetails: [
      { details: "Complete User & Seller Management", emoji: "", content: "" },
      { details: "Order, Refund & Payment Oversight", emoji: "", content: "" },
      { details: "Commission Setup & Tax Management", emoji: "", content: "" },
      {
        details: "CMS for Banners, Blogs & Promotions",
        emoji: "",
        content: "",
      },
      { details: "Real-Time Performance Dashboards", emoji: "", content: "" },
      {
        details: "Security Controls & Role Management",
        emoji: "",
        content: "",
      },
      { details: "Multi-Store Management Support", emoji: "", content: "" },
    ],
  },
  {
    id: 4,
    title: "Delivery Agent Panel",
    icon: <i className="fas fa-tools text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-delivery.webp",
    additionalDetails: [
      {
        details: "Agent Registration & Task Assignment",
        emoji: "",
        content: "",
      },
      {
        details: "Real-Time Delivery Route Optimization",
        emoji: "",
        content: "",
      },
      { details: "Order Pickup & Drop Confirmation", emoji: "", content: "" },
      { details: "GPS Navigation & Live Tracking", emoji: "", content: "" },
      { details: "Delivery Status Updates", emoji: "", content: "" },
      { details: "In-App Calling & Messaging", emoji: "", content: "" },
      { details: "Earnings & Delivery History", emoji: "", content: "" },
    ],
  },
];

const Features: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(
    featuresData[0]
  );
  const handleButtonClick = (feature: Feature) => {
    if (openedFeature?.id !== feature.id) {
      setOpenedFeature(feature);
    }
  };

  return (
    <section
      className="bg-center bg-repeat bg-fixed "
      style={{
        backgroundImage: `url("https://www.comfygen.com/img/grid-box-dark.svg")`,
      }}
    >
      <div className="bg-gradient-to-r from-[#272868]/95 to-[#5556D1]/95 lg:py-16 py-10">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white">
            Essential Features for Your E-commerce Development
          </h2>
          <p className="text-white lg:w-1/2 mx-auto text-center">
            Comfygen develops eCommerce apps and websites to ensure seamless
            business operations and an outstanding user experience. We offer
            affordable custom eCommerce development with dynamic panels for
            customers, vendors, admins, delivery agents, inventory managers, and
            marketing teams.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-full flex justify-center border border-gray-300 cursor-pointer ${
                openedFeature?.id === feature.id
                  ? "bg-white hover:bg-gray-100"
                  : "bg-[#5556D1] text-white border-[#5556D1]"
              }`}
            >
              <button
                className="text-lg font-medium p-2 focus:outline-none w-full mx-auto"
                onClick={() => handleButtonClick(feature)}
              >
                {feature.title}
              </button>
            </div>
          ))}
        </div>
        {openedFeature && (
          <div className="mt-6 p-4 grid grid-cols-1 md:grid-cols-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12">
            {openedFeature.img && (
              <div className="mb-4 flex mx-auto ">
                <Image
                  src={openedFeature.img}
                  alt={openedFeature.title}
                  width={1920}
                  height={1280}
                  className="w-full border border-[#fff]/10 rounded-lg"
                />
              </div>
            )}
            <div className="mt-2 py-2 mx-4">
              {openedFeature.additionalDetails.map((detail, index) => (
                <ul className="max-w-xl" key={index}>
                  <li className="py-4 border-b border-[#fff] flex justify-start place-items-center gap-8">
                    <div>
                      <h3 className="text-white">{detail?.details}</h3>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
