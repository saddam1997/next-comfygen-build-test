
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
      "Give customers a seamless water ordering and subscription experience.",
    points: [
      "Easy Registration & Profile Setup",
      "Browse & Order Bottled/Mineral Water",
      "Real-time Delivery Tracking",
      "Manage Subscriptions (Daily/Weekly/Monthly)",
      "Secure Online Payment Options",
      "Order History & Reorder Feature",
      "Push Notifications & Alerts",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/water-delivery-app-development/customer.webp",
  },
  vendor: {
    title: "Delivery Agent Panel",
    description:
      "Equip delivery agents with tools to manage and complete water deliveries efficiently.",
    points: [
      "Simple Login & Profile Management",
      "Accept/Reject Delivery Requests",
      "Real-time Navigation & Route Optimization",
      "Order Pickup & Delivery Updates",
      "Track Daily Earnings & Delivery History",
      "In-app Chat/Call with Customers",
      "Availability Toggle (Online/Offline Mode)",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/water-delivery-app-development/delivery.webp",
  },
  admin: {
    title: "Admin Panel",
    description:
      "Full control over customers, agents, payments, and delivery operations.",
    points: [
      "Manage Customers & Delivery Agents",
      "Order & Subscription Management",
      "Inventory & Water Stock Tracking",
      "Delivery Route & Logistics Optimization",
      "Payment & Revenue Dashboard",
      "Offers, Discounts & Notification Management",
      "Data Security & Performance Analytics",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/water-delivery-app-development/admin.webp",
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
          We Develop Water Delivery Apps With Advanced Panel Features
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          At Comfygen Technologies, we integrate advanced features into our
          water delivery app development services to ensure a smooth experience
          for customers, delivery agents, and admins. Our scalable and
          user-friendly app panels help businesses manage daily operations,
          streamline deliveries, and enhance customer satisfaction.
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
            <h3 className=" text-xl sm:text-3xl font-semibold pt-6 mb-6">
              {data.title}
            </h3>
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
