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
    title: "Customer Panel",
    description:
      "Delight customers with a seamless pizza ordering and tracking experience.",
    points: [
      "Browse & Customize Pizza with Toppings",
      "Track Orders with Live Pizza-making Status",
      "Multiple & Secure Payment Options",
      "Save Favorite Orders for Quick Reorder",
      "Real-Time Delivery Tracking on Map",
      "Exclusive Deals, Coupons & Rewards",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/pizza-delivery-app-development/customer.webp",
  },
  vendor: {
    title: "Restaurant Panel",
    description:
      "Enable restaurants to manage pizza orders, menus, and sales efficiently.",
    points: [
      "Smart Menu Management ",
      "Instant New Order Alerts with Prep Time Control",
      "Kitchen Dashboard for Streamlined Pizza Orders",
      "Daily Sales & Revenue Insights",
      "Inventory Tracking for Ingredients & Dough",
      "Manage Offers, Combos & Discounts",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/pizza-delivery-app-development/restaurant.webp",
  },
  manager: {
    title: "Delivery Agent Panel",
    description:
      "Empower delivery agents with tools for efficient and timely pizza delivery.",
    points: [
      "Optimized Routes for Fastest Pizza Delivery",
      "Real-Time Order Pickup & Drop Updates",
      "Earnings Tracker with Daily/Weekly Reports",
      "Proof of Delivery via OTP or Photo",
      "Automatic Order Assignment for Nearby Drivers",
      "In-app Chat with Customers & Restaurants",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/pizza-delivery-app-development/delivery.webp",
  },
  admin: {
    title: "Admin Panel",
    description:
      "Oversee all pizza delivery operations, revenue, and performance from one place.",
    points: [
      "Centralized Dashboard for Complete Control",
      "Manage Users, Restaurants & Drivers Seamlessly",
      "Real-Time Analytics on Orders & Revenue",
      "Commission Management & Payment Settlements",
      "Marketing & Promotional Campaign Tools",
      "Multi-level Access for Staff & Managers",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/pizza-delivery-app-development/admin.webp",
  },
} as const;


type PanelKey = keyof typeof panelContent;

const PanelSwitcher = () => {
  const [activePanel, setActivePanel] = useState<PanelKey>("user");
  const data = panelContent[activePanel];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
        Features We Implement in Your Pizza Delivery App to Make it Stand Out
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
        At Comfygen, we build feature-rich pizza delivery apps designed to simplify ordering, improve restaurant operations, and ensure faster deliveries. Each panel is crafted with powerful features to deliver a seamless experience for customers, restaurants, delivery agents, and admins.
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
