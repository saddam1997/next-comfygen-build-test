
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
      "Empower customers with seamless shipment booking and tracking features.",
    points: [
      "Easy order booking and shipment scheduling",
      "Real-time shipment tracking with ETA",
      "In-app payments and invoice generation",
      "Delivery status notifications & alerts",
      "Rate and review drivers",
      "Order history and rebooking options",
      "Address book and saved preferences",
      "Multi-language and multi-currency support",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/customer.webp",
  },
  vendor: {
    title: "Driver Panel",
    description:
      "Equip your delivery partners with all tools needed for efficient execution.",
    points: [
      "Real-time job alerts and assignments",
      "GPS navigation and route guidance",
      "Digital proof of delivery (POD) upload",
      "In-app communication with dispatchers",
      "Trip history and performance logs",
      "Earnings tracking and fuel expense input",
      "Task checklist and delivery confirmations",
      "Emergency support & compliance alerts",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/driver.webp",
  },
  manager: {
    title: "Dispatcher/Manager Panel",
    description:
      "Real-time visibility and control for dispatchers and operational managers.",
    points: [
      "Real-time view of fleet and driver location",
      "Smart dispatching with load balancing",
      "Manual or auto driver assignment",
      "Order and delivery status monitoring",
      "Delivery zone and region management",
      "Exception and delay management",
      "Trip logs and audit trail",
      "Communication with drivers and customers",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/manager.webp",
  },
  admin: {
    title: "Admin Panel",
    description:
      "Oversee all logistics operations, pricing, and performance analytics from one place.",
    points: [
      "Centralized fleet and driver management",
      "Route planning and optimization controls",
      "Real-time shipment and delivery tracking",
      "Dynamic pricing and cost configuration",
      "Warehouse and inventory management",
      "Customer and vendor profile control",
      "Revenue analytics and reporting dashboard",
      "Role-based access and user permissions",
    ],
    image:
      "https://www.comfygen.com/comfygen-images/logistics-app-development/admin.webp",
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
          Feature-Rich Panels We Build for Transport and Logistics App
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          Comfygen Technologies is one of the top logistics app development
          company for delivering a wide range of
          successful transport and logistics apps. We develop powerful
          interfaces for admins, drivers, customers, and dispatchers — ensuring
          smooth operations at every level of your transport and logistics
          ecosystem.
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
