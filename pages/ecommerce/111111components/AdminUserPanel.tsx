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
    title: "User Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/e-learning-user-panel.webp",
    additionalDetails: [
      {
        emoji:
          "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "Personalized Dashboard",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/8333833_content_marketing_management_seo_icon 1.png",
        details: "AI-Based Course Recommendations",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/image 48.png",
        details: "Live Classes & Video Lectures",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/299107_money_icon 1.png",
        details: "Performance Tracking & Reports",
        content: "",
      },

      {
        emoji: "https://www.comfygen.com/image/5027845_analytics_graph_online_statistics_icon 1.png",
        details: "Gamification & Rewards",
        content: "",
      },
      {
        emoji:
          "https://www.comfygen.com/image/3993856_alert_bell_notice_notifications_notify_icon 1.png",
        details: "Offline Learning Mode",
        content: "",
      },
      {
        emoji:
          "https://www.comfygen.com/image/7038099_chart_marketing_graph_business_profit_icon 1.png",
        details: "Discussion Forums & Chat Support",
        content: "",
      },
      {
        emoji:
          "https://www.comfygen.com/image/7038099_chart_marketing_graph_business_profit_icon 1.png",
        details: "Secure Payment & Subscription Management",
        content: "",
      },
    ],
  },
  {
    id: 2,
    title: "Admin Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/e-learning-admin-panel.webp",

    additionalDetails: [
      {
        emoji:
          "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "Dashboard & Analytics",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/9004811_search_find_magnifier_zoom_icon 1.png",
        details: "Course Management",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/897244_courses_language_learn_speak_icon 1.png",
        details: "User Role Management",
        content: "",
      },
      { emoji: "https://www.comfygen.com/image/image 48.png", details: "Live Class Scheduling & Notifications ", content: "" },
      {
        emoji:
          "https://www.comfygen.com/image/5978650_corona_coronavirus_covid_germs_people_icon 1.png",
        details: "AI-Powered Performance Insights",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/3377041_logo_media_slack_social_icon 1.png",
        details: "Monetization & Payment Processing",
        content: "",
      },
      {
        emoji:
          "https://www.comfygen.com/image/2921813_badge_banner_emblem_guarantee_premium_icon 1.png",
        details: "Content Moderation & Compliance",
        content: "",
      },
      {
        emoji:
          "https://www.comfygen.com/image/2921813_badge_banner_emblem_guarantee_premium_icon 1.png",
        details: "Multi-Language & Accessibility Support",
        content: "",
      }
    ],
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
    <div className="lg:py-16 py-10 bg-[#fff]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold ">
          We provide Advanced Panel Features for E-learning App Development
        </h2>
        <p className="text-base text-center font-normal lg:w-2/4 mx-auto">Efficient and feature-rich panels for seamless learning and management. The User Panel enhances the student experience, while the Admin Panel provides complete control over course management and analytics.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2  mx-auto border-2 rounded-full border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10 ">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className={`relative rounded-full flex justify-center place-items-center border border-gray-300 shadow-lg transition-all duration-300 cursor-pointer p-2 text-lg font-medium ${openedFeature?.id === feature.id
              ? "bg-[#5556D1] text-white border-[#5556D1]"
              : "bg-white hover:bg-gray-100"
              }`}
            onClick={() => handleButtonClick(feature)}
          >
            {feature.title}

          </div>
        ))}
      </div>

      {openedFeature && (
        <div className="mt-6  w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-2 ">
          {openedFeature.img && (
            <div className="mb-4 flex mx-auto ">
              <Image
                src={openedFeature.img}
                alt={openedFeature.title}
                width={640}
                height={427}
                className=""
              />
            </div>
          )}

          <div className="mt-2 py-2 mx-4 ">
            {openedFeature.additionalDetails.map((detail, index) => (
              <ul className="max-w-xl  ">
                <li
                  key={index}
                  className="py-4 border-b border-[#5556D1] flex justify-start place-items-center gap-8"
                >
                  <Image
                    src={detail.emoji}
                    alt={detail?.details}
                    width={30}
                    height={30}
                    className=""
                  />
                  <div>
                    <h3 className="">{detail?.details}</h3>
                    <span>{detail?.content}</span>
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
