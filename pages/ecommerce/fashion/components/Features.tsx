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
    icon: <i className="fas fa-user text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/fashion/fashion-portfolio1.webp",
    additionalDetails: [
      { details: "Easy Sign-Up & Login", emoji: "", content: "" },
      { details: "Personalized Product Recommendations (AI-Based)", emoji: "", content: "" },
      { details: "Smart Search & Advanced Filters", emoji: "", content: "" },
      { details: "Wishlist & Favorite Items", emoji: "", content: "" },
      { details: "Virtual Try-On (AR Integration)", emoji: "", content: "" },
      { details: "Secure Checkout & Multiple Payment Options", emoji: "", content: "" },
      { details: "Order Tracking & Return Requests", emoji: "", content: "" },
      { details: "Ratings & Reviews for Products", emoji: "", content: "" }
    ],
  },
  {
    id: 2,
    title: "Seller/Vendor Panel",
    icon: <i className="fas fa-store text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/fashion/fashion-portfolio6.webp",
    additionalDetails: [
      { details: "Vendor Registration & Profile Management", emoji: "", content: "" },
      { details: "Product Upload & Inventory Control", emoji: "", content: "" },
      { details: "Order Notifications & Fulfillment Tracking", emoji: "", content: "" },
      { details: "Discount & Coupon Management", emoji: "", content: "" },
      { details: "Sales Reports & Analytics Dashboard", emoji: "", content: "" },
      { details: "Earnings & Commission Tracking", emoji: "", content: "" },
      { details: "Customer Query Handling", emoji: "", content: "" },
      { details: "Multi-language & Region Settings", emoji: "", content: "" }
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    icon: <i className="fas fa-tools text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/fashion/fashion-portfolio5.webp",
    additionalDetails: [
      { details: "User & Vendor Management", emoji: "", content: "" },
      { details: "Product & Category Control", emoji: "", content: "" },
      { details: "Commission, Revenue & Tax Settings", emoji: "", content: "" },
      { details: "Inventory, Logistics & Delivery Oversight", emoji: "", content: "" },
      { details: "Push Notification & Promotion Management", emoji: "", content: "" },
      { details: "Real-Time Reporting & Analytics", emoji: "", content: "" },
      { details: "Content Moderation & Review Monitoring", emoji: "", content: "" },
      { details: "Security, GDPR & Data Privacy Settings", emoji: "", content: "" }
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
     <section className="bg-center bg-repeat bg-fixed " >
           <div className=" lg:py-16 py-10 bg-gray-100">
             <div className="space-y-2">
               <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold ">
               Fully Functional App Panels Tailored for Home Service Businesses
               </h2>
               <p className="lg:max-w-6xl mx-auto text-center">At Comfygen Technologies, we develop powerful, easy-to-use home service app panels tailored to all user types. Whether you’re a customer, service provider, admin, or vendor, we create feature-rich panels to manage and grow your business smoothly.</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 mt-10 ">
               {featuresData.map((feature) => (
                 <div
                   key={feature.id}
                   className={`rounded-full flex justify-center border border-gray-300 cursor-pointer max-w-[450px] ${openedFeature?.id === feature.id
                     ? "bg-white hover:bg-gray-100"
                     : "bg-[#5556D1] text-white border-[#5556D1]"
                     }`}>
                   <button
                     className="text-lg font-medium p-2 focus:outline-none w-full mx-auto"
                     onClick={() => handleButtonClick(feature)}>
                     {feature.title}
                   </button>
                 </div>
               ))}
             </div>
             {openedFeature && (
               <div className="mt-6 p-4 grid grid-cols-1 md:grid-cols-2 mx-auto  2xl:w-10/12 w-10/12 lg:w-11/12 items-center">
                 {openedFeature.img && (
                   <div className="mb-4 flex mx-auto ">
                     <Image
                       src={openedFeature.img}
                       alt={openedFeature.title}
                       unoptimized
                       width={500}
                       height={500}
                       className="w-full md:h-[300px] lg:h-[400px] border pb-3 sm:pb-0 border-[#fff]/10 rounded-lg"
                     />
                   </div>
                 )}
                 <div className="mt-2 py-2 mx-4">
                   {openedFeature.additionalDetails.map((detail, index) => (
                     <ul className="max-w-xl" key={index}>
                       <li className="py-4 border-b border-[#5556D1] flex justify-start place-items-center gap-8">
                         <div>
                           <h3 className="">{detail?.details}</h3>
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

