import React, { useState } from "react";

interface Feature {
  id: number;
  title: string;
  icon: JSX.Element;

  additionalDetails: string[]; // For ul list items
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Customer Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>, // Replace with actual icon
    additionalDetails: [
      "Easy Registration: Simple sign-up process using phone number or email.",
      "Prescription Upload: Quick upload option for prescriptions before ordering.",
      "Order Tracking: Real-time tracking of medicine deliveries.",
      "Multiple Payment Options: Secure payment gateways with various modes like cards, wallets, and UPI.",
      "Medicine Reminders :Automated notifications to remind customers to take their medicines.",
      "Order History:Easy access to previous orders for quick reordering.",
    ],
  },
  {
    id: 2,
    title: "Pharmacy Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>, // Replace with actual icon
    additionalDetails: [
      "Order Management : Efficient dashboard to manage and track orders.",
      "Inventory Management : Keep track of available stock in real-time.",
      "Prescription Verification: Ability to verify prescriptions for prescription-based medications.",
      "Payment Settlement : Seamless payment settlement process with detailed reports.",
      "Notifications: Alerts for new orders and low-stock items.",
      "Customer Support : In-app communication with customers for order clarifications.",
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    icon: <i className="fas fa-wallet text-4xl"></i>, // Replace with actual icon
    additionalDetails: [
      "User Management :Ability to manage customers, pharmacies, and delivery agents.",
      "Order Monitoring:Track every order from placement to delivery.",
      "Payment Management : Monitor all transactions and revenue generation.",
      "Analytics & Reporting : Generate detailed reports on sales, orders, and app performance.",
      "Inventory Control : Oversee stock levels across all pharmacies.",
      "Support Management: Handle customer issues and pharmacy concerns.",
    ],
  },
  {
    id: 4,
    title: "Delivery Panel",
    icon: <i className="fas fa-truck text-4xl"></i>, // Replace with actual icon
    additionalDetails: [
      "Order Assignment : Assign delivery tasks based on availability and proximity.",
      "GPS Navigation : Integrated maps for efficient route guidance.",
      "Delivery Status Updates :Real-time status updates for customers and pharmacies.",
      "Earnings Tracking :View daily earnings and completed deliveries.",
      "Delivery Confirmation : Secure delivery by verifying customer details or OTP.",
      "Delivery History :Record of completed deliveries for future reference.",
    ],
  },
];

const Features: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(featuresData[0]);

  const handleButtonClick = (feature: Feature) => {
    setOpenedFeature(openedFeature === feature ? null : feature); // Toggle the clicked feature
  };

  return (
    <div className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1]">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
        <div>
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white">
            Features of On-Demand Medicine App Development Solutions
          </h2>
          <p className="text-base text-center  pt-4 text-white">
            On-demand medicine ordering app development consists of 4 panels; and
            implementing the significant features in all 4 is majorly imperative.
            Listed are some must-have features in medicine delivery app development:
          </p>
        </div>

        <div>

          <div className="grid grid-cols-1 sm:grid-cols-4 mt-6 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1]">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className={`relative rounded-full flex justify-center place-items-center border border-gray-300 shadow-lg transition-all duration-300 cursor-pointer ${openedFeature?.id === feature.id
                  ? "bg-[#5556D1] text-white border-[#5556D1]"
                  : "bg-white hover:bg-gray-100"
                  }`}
              >
                <div className="">
                  <button
                    className=" text-lg font-medium p-2 focus:outline-none"
                    onClick={() => handleButtonClick(feature)}
                  >
                    {feature.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Card to display selected feature details */}
          {openedFeature && (
            <div className="mt-6  mx-auto p-8 border border-gray-300 rounded-lg shadow-lg bg-white ">
              <h3 className="text-xl font-bold">{openedFeature.title}</h3>

              <ul className="mt-2 py-2 list-disc list-inside">
                {openedFeature.additionalDetails.map((detail, index) => (
                  <li key={index} className="py-1">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default Features;
