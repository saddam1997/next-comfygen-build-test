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
    title: "Admin Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/image/advance-functionality-admin-panel.webp",
    additionalDetails: [
      {
        emoji:
          "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "User Management",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/8333833_content_marketing_management_seo_icon 1.png",
        details: "Order management",
        content: "",
      },

      {
        emoji: "https://www.comfygen.com/image/5027845_analytics_graph_online_statistics_icon 1.png",
        details: "Analytics and Reporting",
        content: "",
      },
      {
        emoji:
          "https://www.comfygen.com/image/3993856_alert_bell_notice_notifications_notify_icon 1.png",
        details: "Analytics and Reporting",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/299107_money_icon 1.png",
        details: "Payment processing",
        content: "",
      },
      {
        emoji:
          "https://www.comfygen.com/image/7038099_chart_marketing_graph_business_profit_icon 1.png",
        details: "Marketing Tools",
        content: "",
      },
    ],
  },
  {
    id: 2,
    title: "Customer Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/advance-functionality-customer-panel.webp",

    additionalDetails: [
      {
        emoji:
          "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "Prescription upload",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/9004811_search_find_magnifier_zoom_icon 1.png",
        details: "Medication search and ordering",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/897244_courses_language_learn_speak_icon 1.png",
        details: "Order tracking",
        content: "",
      },
      { emoji: "https://www.comfygen.com/image/image 48.png", details: "Payment options", content: "" },

      {
        emoji: "https://www.comfygen.com/image/3377041_logo_media_slack_social_icon 1.png",
        details: "Refill reminders",
        content: "",
      }
    ],
  },
  {
    id: 3,
    title: "Pharmacist Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/advance-funcnality-pharmacist-panel.webp",

    additionalDetails: [
      {
        emoji:
          "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "Prescription verification",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/9004811_search_find_magnifier_zoom_icon 1.png",
        details: "Order processing",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/897244_courses_language_learn_speak_icon 1.png",
        details: "Inventory management",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/image 48.png",
        details: "Communication with customers",
        content: ""
      },
    ],
  },
  {
    id: 4,
    title: "Additional Features",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/image/advance-functionality-additional-features.webp",

    additionalDetails: [
      {
        emoji:
          "https://www.comfygen.com/image/5737120_business_filled_line_management_profile_icon 1.png",
        details: "Push notifications",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/9004811_search_find_magnifier_zoom_icon 1.png",
        details: "Integration with pharmacy management systems",
        content: "",
      },
      {
        emoji: "https://www.comfygen.com/image/897244_courses_language_learn_speak_icon 1.png",
        details: "Loyalty programs",
        content: "",
      },
      { emoji: "https://www.comfygen.com/image/image 48.png", details: "AI-powered recommendations", content: "" },
      {
        emoji:
          "https://www.comfygen.com/image/5978650_corona_coronavirus_covid_germs_people_icon 1.png",
        details: "Real-time chat support",
        content: "",
      }
    ],
  }
];

const AdvanceFunction: React.FC = () => {
  const [openedFeature, setOpenedFeature] = useState<Feature | null>(
    featuresData[0]
  );

  const handleButtonClick = (feature: Feature) => {
    setOpenedFeature(openedFeature === feature ? null : feature);
  };

  return (
    <div className="py-10 bg-white">
      <div className="space-y-4 w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 py-10">
        <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold text-center">
          Our Whitelabel Pharmacy App Takes your Business On the next Hike With Advance Functionality
        </h2>
        <p className="text-base text-slate-800 text-center">Elevate your pharmacy business with our customizable white-label pharmacy app. Offer convenient prescription delivery, easy ordering, and personalized features.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 p-2 w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 border-2 rounded-full border-[#5556D1]/10">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className={`relative rounded-full flex justify-center place-items-center transition-all duration-300 cursor-pointer ${openedFeature?.id === feature.id
              ? "bg-[#5556D1] text-white border-teal-500"
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

      {openedFeature && (
        <div className="mt-6 lg:w-[80%] w-full mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 ">
          {openedFeature.img && (
            <div className="my-4">
              <Image
                className="mx-auto"
                src={openedFeature.img}
                alt={openedFeature.title}
                height={640}
                width={373}
              />
            </div>
          )}

          <div className="mt-2 py-2 mx-4 ">
            {openedFeature.additionalDetails.map((detail, index) => (
              <ul className="max-w-xl  ">
                <li
                  key={index}
                  className="py-4 border-b border-green-200 flex justify-start place-items-center gap-8"
                >
                  <Image
                    src={detail.emoji}
                    alt={detail?.details}
                    height={30}
                    width={30}
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

export default AdvanceFunction;
