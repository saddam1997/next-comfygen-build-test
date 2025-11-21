import React, { useState } from "react";
import Image from 'next/image';
interface Feature {
  id: number;
  title: string;
  icon: JSX.Element;
  img: any;
  additionalDetails: { emoji: string; details: string; content: string }[];
}

const featuresData: Feature[] = [
  {
    id: 1,
    title: "User Panel Features",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-user-panel.webp",
    additionalDetails: [
      {
        emoji: "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "Quick Policy Search & Comparison",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/8333833_content_marketing_management_seo_icon 1.png",
        details: "Smart Claim Submission",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/image 48.png",
        details: "In-App Chat & Virtual Assistant",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/299107_money_icon 1.png",
        details: "Premium Payment & Auto-Renewal",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/5027845_analytics_graph_online_statistics_icon 1.png",
        details: "Policy Document Vault",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/3993856_alert_bell_notice_notifications_notify_icon 1.png",
        details: "Real-Time Claim Status Tracking",
        content: "",
      },
    ]
    
  },
  
  {
    id: 2,
    title: "Admin Panel Features",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/insurance-app-development/insurance-app-admin-panel.webp",
    additionalDetails: [
      {
        emoji: "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "Policy & User Management",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/9004811_search_find_magnifier_zoom_icon 1.png",
        details: "AI-Driven Risk & Claim Analytics",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/897244_courses_language_learn_speak_icon 1.png",
        details: "Agent/Broker Management Tools",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/image 48.png",
        details: "Claims Processing Workflow Automation",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/5978650_corona_coronavirus_covid_germs_people_icon 1.png",
        details: "Reports & Compliance Dashboard",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/3377041_logo_media_slack_social_icon 1.png",
        details: "Blockchain-Based Activity Logs",
        content: "",
      },
    ]
    
  }
  
];

const AdminUserPanel: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(
    featuresData[0]
  );

  const handleButtonClick = (feature: Feature) => {
    setOpenedFeature(openedFeature === feature ? null : feature);
  };

  return (
   
<div className="lg:py-16 py-10 bg-[#5556D1]">
  <div className="space-y-2">
    <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold text-white">
    We Develop Insurance Apps With Advanced Panel Features
    </h2>
    <p className="text-base text-center font-normal lg:w-2/4 mx-auto text-white">
    At Comfygen, we specialize in building feature-rich insurance apps with powerful, intuitive panels for both users and administrators. Our user panels focus on convenience and transparency, while admin panels deliver total control, analytics, and automation to streamline insurance operations.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
  {featuresData.map((feature) => (
    <div
      key={feature.id}
      className={`relative rounded-full flex justify-center items-center shadow-lg transition-all duration-300 cursor-pointer p-2 text-lg font-medium border-2 border-white ${
        openedFeature?.id === feature.id
          ? "bg-white text-[#5556D1]"  // Active button with white background
          : "bg-transparent text-white hover:bg-white hover:text-[#5556D1]"  // Inactive button with transparent background and hover effect
      }`}
      onClick={() => handleButtonClick(feature)}
    >
      {feature.title}
    </div>
  ))}
</div>




  {openedFeature && (
    <div className="mt-6 w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-2">
      {openedFeature.img && (
        <div className="mb-4 flex mx-auto">
          <Image
            src={openedFeature.img}
            alt={openedFeature.title}
            width={640}
            height={427}
          />
        </div>
      )}

      <div className="mt-2 py-2 mx-4">
        {openedFeature.additionalDetails.map((detail, index) => (
          <ul className="max-w-xl" key={index}>
            <li className="py-4 border-b border-white flex justify-start items-center gap-8">
              <Image
                src={detail.emoji}
                alt={detail?.details}
                width={30}
                height={30}
              />
              <div>
                <h3 className="text-white font-semibold">{detail?.details}</h3>
                <span className="text-white text-sm">{detail?.content}</span>
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

export default AdminUserPanel;
