import React, { useState } from "react";
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
    img: "https://www.comfygen.com/image/customer-panel-medicine-delivery-app-development.png",
    additionalDetails: [
      { details: "Easy registration & login", emoji: "", content: "" },
      { details: "Medicine search & order", emoji: "", content: "" },
      { details: "Prescription Upload", emoji: "", content: "" },
      { details: "Real-time Order Tracking", emoji: "", content: "" },
      { details: "Multiple Payment Options", emoji: "", content: "" },
      { details: "Medicine Reminders", emoji: "", content: "" },
      { details: "Order History", emoji: "", content: "" }
    ],
  },
  {
    id: 2,
    title: "Pharmacy Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/pharmacy-panel-image-medicine-delivery-app-development.png",
    additionalDetails: [
      { details: "Order Management ", emoji: "", content: "" },
      { details: "Manage medicine inventory", emoji: "", content: "" },
      { details: "Upload Prescriptions & Verify Medicines ", emoji: "", content: "" },
      { details: "Payment Settlement ", emoji: "", content: "" },
      { details: "Notifications", emoji: "", content: "" },
      { details: "Sales tracking & analytics", emoji: "", content: "" },
      { details: "Customer Interaction & Support ", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    img: "https://www.comfygen.com/image/admin-panel-medicine-delivery-app-development.png",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "User & Pharmacy Management", emoji: "", content: "" },
      { details: "Order tracking & Management", emoji: "", content: "" },
      { details: "Offers & Discounts Control", emoji: "", content: "" },
      { details: "Payment Management ", emoji: "", content: "" },
      { details: "Reports & Analytics Dashboard", emoji: "", content: "" },
      { details: "Inventory Control", emoji: "", content: "" },
      { details: "Secure Data Management", emoji: "", content: "" }
    ],
  },
  {
    id: 4,
    title: "Delivery Panel",
    img: "https://www.comfygen.com/image/delivery-panel-medicine-delivery-app-development.png",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Real-time Delivery Requests", emoji: "", content: "" },
      { details: "Order Assignment ", emoji: "", content: "" },
      { details: "GPS Navigation", emoji: "", content: "" },
      { details: "Delivery Status Updates", emoji: "", content: "" },
      { details: "Earnings Tracking", emoji: "", content: "" },
      { details: "Delivery Confirmation", emoji: "", content: "" },
      { details: "Delivery History", emoji: "", content: "" }
    ],
  }
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
    <div className="lg:py-16 py-10 bg-[#fff]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
       Advanced Features of Developing Medicine Delivery Apps
        </h2>
        <p className="text-base text-center font-normal lg:w-1/2 w-full mx-auto">Comfygen specializes in developing feature-rich medicine delivery app solutions with advanced control panels for seamless operations. Medicine doorstep delivery app development enhances user convenience, streamlines pharmacy management, and ensures efficient deliveries.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
        {featuresData.map((feature) => (
         <button
         key={feature.id}
         onClick={() => handleButtonClick(feature)}
         className={`rounded-full flex justify-center items-center border border-gray-300 cursor-pointer text-lg font-medium p-2 focus:outline-none transition
           ${
             openedFeature?.id === feature.id
               ? "bg-[#5556D1] text-white border-[#5556D1]"
               : "bg-white hover:bg-gray-100"
           }`}
       >
         {feature.title}
       </button>       
        ))}
      </div>
      {openedFeature && (
        <div className="mt-6 mx-auto p-4 grid grid-cols-1 lg:gap-6 md:grid-cols-2 2xl:w-10/12 w-10/12 lg:w-11/12">
          {openedFeature.img && (
            <div className="mb-4 flex mx-auto ">
              <Image
                src={openedFeature.img}
                alt={openedFeature.title}
                width={1920}
                height={1280}
                className="rounded-lg w-full" 
              />
            </div>
          )}
          <div className="mt-2 py-2 mx-4">
            {openedFeature.additionalDetails.map((detail, index) => (
              <ul className="max-w-xl" key={index}>
                <li className="py-4 border-b border-[#5556D1] flex justify-start place-items-center gap-8">
                  <div>
                    <h3>{detail?.details}</h3>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;

