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
    icon: <i className="fas fa-user-circle text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/crypto-derivatives-exchange-development/derivatives-user-panel.webp",
    additionalDetails: [
      {
        emoji: "https://www.comfygen.com/image/5027845_analytics_graph_online_statistics_icon 1.png",
        details: "Live Profit & Loss (P&L) Tracking",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/9004811_search_find_magnifier_zoom_icon 1.png",
        details: "Open Orders & Order History",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/3993856_alert_bell_notice_notifications_notify_icon 1.png",
        details: "Real-Time Liquidation Alerts",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/7038099_chart_marketing_graph_business_profit_icon 1.png",
        details: "Portfolio Overview & Leverage Management",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/image 48.png",
        details: "Multi-Asset Support",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "Secure Authentication & User Settings",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/8333833_content_marketing_management_seo_icon 1.png",
        details: "Trade Execution & Order Types",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/299107_money_icon 1.png",
        details: "Deposit and Withdrawal Management",
        content: "",
      }
    ],
  },
  {
    id: 2,
    title: "Admin Panel",
    icon: <i className="fas fa-cogs text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/crypto-derivatives-exchange-development/derivatives-admin-panel.webp",
    additionalDetails: [
      {
        emoji: "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "User Management and Role Control",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/897244_courses_language_learn_speak_icon 1.png",
        details: "Trading Pair and Fee Configuration",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/5027845_analytics_graph_online_statistics_icon 1.png",
        details: "Real-Time Transaction Monitoring",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/2921813_badge_banner_emblem_guarantee_premium_icon 1.png",
        details: "KYC/AML Compliance Dashboard",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/7038099_chart_marketing_graph_business_profit_icon 1.png",
        details: "Risk Management and Liquidation Controls",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/5978650_corona_coronavirus_covid_germs_people_icon 1.png",
        details: "Liquidity and Volume Analytics",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/3377041_logo_media_slack_social_icon 1.png",
        details: "Security and Access Controls",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/9004811_search_find_magnifier_zoom_icon 1.png",
        details: "Automated Reporting and Insights",
        content: "",
      }
    ],
  }
];


const Features: React.FC = () => {

  const [openedFeature, setOpenedFeature] = useState<Feature | null>(featuresData[0]);
  const handleButtonClick = (feature: Feature) => {
    setOpenedFeature(feature);
  };

  return (
    <div className="lg:py-16 py-10 bg-[#fff]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold  lg:w-2/3 mx-auto">
          We Develop Feature-Rich Panels for User and Admin Management
        </h2>
        <p className="text-base text-center font-normal lg:w-2/3 mx-auto">At the core of every successful crypto derivatives exchange is a robust management system. We build powerful, user-friendly panels that empower both traders and administrators to efficiently navigate the platform. Our panels are designed to enhance usability, improve control, and boost overall platform performance.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2  mx-auto md:border-2 md:rounded-full md:border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10 ">
        {featuresData.map((feature) => (
          <div onClick={() => handleButtonClick(feature)}
            key={feature.id}
            className={`relative rounded-full flex justify-center p-2 font-medium place-items-center border border-gray-300 shadow-lg transition-all duration-300 cursor-pointer ${openedFeature?.id === feature.id
              ? "bg-[#5556D1] text-white border-[#5556D1]"
              : "bg-white hover:bg-gray-100"
              }`}
          >

            {feature.title}
          </div>
        ))}
      </div>
      {openedFeature && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto 2xl:w-10/12 lg:w-11/12 lg:px-0 px-6 w-full ">
          {openedFeature.img && (
            <div className="mb-4 flex mx-auto ">
              <Image
                src={openedFeature.img}
                alt={openedFeature.title}
                width={640}
                height={427}
                className="w-full object-contain"
                priority={true}
                quality={75}
                unoptimized
              />
            </div>
          )}

          <div className="mt-2 py-2 ">
            {openedFeature.additionalDetails.map((detail, index) => (
              <ul key={index} className=" ">
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
                    priority={true}
                    quality={75}
                    unoptimized
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

export default Features;
