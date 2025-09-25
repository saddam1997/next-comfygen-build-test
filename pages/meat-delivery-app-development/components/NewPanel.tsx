"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PanelData {
  title: string;
  description: string;
  points: string[];
  image: string;
}

const panelContent = {
  user: {
    title: "Customer App Features",
    description:
      "",
    points: [
      "Easy Profile Registration & Management",
      "Browse & Search Fresh Meat, Poultry & Seafood",
      "Real-Time Order Tracking & Delivery Updates",
      "Multiple Payment Gateway Integration",
      "Subscription & Scheduled Meat Orders",
      "Wishlist & Order History",
      "Push Notifications for Offers & Discounts"
    ],
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/customer.webp",
  },
  vendor: {
    title: "Butcher/Store App Features",
    description:
      "",
    points: [
      "Store Profile Setup & Inventory Management",
      "Product Listing with Images & Pricing",
      "Order Alerts & Delivery Status Updates",
      "Manage Discounts, Offers & Promotions",
      "Earnings & Sales Dashboard",
      "Customer Communication Tools",
      "Stock Availability & Restocking Alerts"
    ],
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/driver.webp",
  },
  manager: {
    title: "Admin Panel Features",
    description:
      "",
    points: [
      "Customer & Store/Butcher Management",
      "Order Monitoring & Delivery Tracking",
      "Secure Payment & Commission Management",
      "Subscription Plan Setup & Analytics",
      "AI-Based Insights & Sales Reports",
      "Multi-Vendor & Marketplace Control",
      "Content & Notification Management"
    ],
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/manager.webp",
  }
} as const;

type PanelKey = keyof typeof panelContent;

const PanelSwitcher = () => {
  const [activePanel, setActivePanel] = useState<PanelKey>("user");
  const data = panelContent[activePanel];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Feature-Rich Meat Delivery App Panels for Customers, Butchers & Admins
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          At Comfygen, we design feature-rich meat delivery app development solutions with advanced panels for customers, butchers, and administrators. Our goal is to enhance the user experience, streamline order management, and optimize meat delivery operations. Each panel is built with intuitive features to ensure smooth functionality and scalability.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {(Object.keys(panelContent) as PanelKey[]).map((panel) => (
          <button
            key={panel}
            onMouseEnter={() => setActivePanel(panel)}
            className={`text-sm sm:text-md px-3 sm:px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${
              activePanel === panel
                ? "text-white bg-[#5556D1]"
                : "hover:border-[#5556D1] hover:text-[#5556D1] border-[#5556D1] text-[#5556D1]"
            }`}
          >
            {panelContent[panel].title}
          </button>
        ))}
      </div>

      <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center">
        <div className="flex flex-col justify-start items-end max-w-lg w-full">
          <div className="h-full flex flex-col justify-end">
            <h3 className=" text-xl sm:text-3xl font-semibold pt-6 mb-6">{data.title}</h3>
            <ul className="space-y-4 list-disc list-inside">
              {data.points.map((point, idx) => (
                <li key={idx} className="sm:text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="sticky top-24">
            <Image
              src={data.image}
              alt={`${data.title} Screenshot`}
              width={400}
              height={400}
              unoptimized
              priority
              className="rounded-xl shadow-xl object-cover w-full h-auto max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelSwitcher;
