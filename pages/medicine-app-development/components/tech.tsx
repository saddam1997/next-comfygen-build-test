import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import styles from "../styles.module.css";

const accordionData = [
  {
    title: "Search Functionality",
    content:
      " Easy search for medicines and alternatives",
  },
  {
    title: "Order Tracking",
    content: "Real-time order status and notifications",
  },
  {
    title: "Prescription Upload",
    content: "Simple way for users to upload prescriptions",
  },
  {
    title: "Payment Integration",
    content:
      "Multiple secure payment options (credit/debit, blockchain wallets)",
  },
  {
    title: "User Accounts",
    content: "Personalized dashboards with order history and health tips",
  },
];

const accordionData1 = [
  {
    title: "Inventory Management",
    content: " Automated tracking and replenishment alerts",
  },
  {
    title: "Order Fulfillment",
    content: "Streamlined process for managing incoming orders",
  },
  {
    title: "Customer Engagement",
    content: "Tools for promotions and customer feedback",
  },
];

const accordionData2 = [
  {
    title: "Analytics Dashboard",
    content: " Insights on user behavior, sales, and inventory",
  },
  {
    title: "User Management",
    content: "Tools for managing user accounts and permissions",
  },
];


const OptionalFeatures = [
  {
    title: "Seamless Appointment Management",
    content: "Our medical mobile app makes it easy to book appointments for clinics and doctors. You can schedule visits on your own healthcare app. The app will sync with your calendar. It sends reminders so you don't forget. You can even have video visits with your doctor.",
  },
  {
    title: "Comprehensive Health Tracking",
    content: "The best medicine order app helps you track your health. Log your symptoms, moods, and diet. Connect data from your fitness devices. Share information with your healthcare team. See your progress over time. Get alerts if something looks concerning.",
  },
  {
    title: "Prescription and Medicine Tools",
    content: "Prescriptions present many complications. The apps to order medicine can send them right to your pharmacy, ask for refills and transfers, recognize pills and help with dosage, remind you to take your medicine, and video chat with a pharmacist.",
  },
  {
    title: "Engaging Patient Education",
    content: "The best medicine order app teaches you about health. It has animated explainers about conditions and treatments. Look up info on medications. Get helpful health tips. See your personalized care plan. Connect with others in health forums.",
  },
  {
    title: "Streamlined Billing and Insurance",
    content: "An online medicine order mobile apps make billing easier. Scan your insurance card to save the details. Submit claims and check their status. Set up payment plans. Get paperless bills.",
  },
  {
    title: "Diverse Communication Channels",
    content: "This best custom medical application development lets you stay connected with your healthcare team. Message directly with providers. Share photos of health issues. Get announcements sent to your caregivers. Receive check-ins automatically. Two-way communication keeps everyone informed.",
  },
  {
    title: "ePrescriptions and Medication Management",
    content: "The app automates prescriptions. Doctors can digitally sign and send them to your pharmacy. Connect your pharmacy loyalty card. Scan your pills to get safety info. Request refills with alerts to your doctor. Modern tools help you take meds properly.",
  },
  {
    title: "Symptom Checker and Virtual Triage",
    content: "The app has a smart symptom checker. Describe your issues and it asks follow-up questions. It checks your symptoms against medical info. Then it suggests where to get care based on urgency. You can book visits right from the suggestions.",
  },
  {
    title: "Image and Video Recognition",
    content: "Machine learning in healthcare models enhance remote diagnosis and monitoring. The app for medicine order uses AI for remote care. It can screen eye changes from retinal images. Further, it can detect skin issues to assist dermatology and analyze physical therapy movements. It can flag breathing problems from chest X-rays. Special algorithms expand virtual care options.",
  },
  {
    title: "PHI Safeguards",
    content: "The app for medicine ordering protects your private health data. It uses strong encryption for HIPAA compliance. Providers can only see what they need. All activity is logged. Reports use anonymous grouped data. Built-in security keeps your info safe as the best app to order medicine adds features.",
  },

];

export default function Tech() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* technology*/}

      <div className={styles.tabs}>
        <div className="bg-[#5556D1] rounded-tr-lg rounded-tl-lg p-3 overflow-hidden overflow-x-auto	 ">
          <div className={styles.tabList}>
            {["User Features", "Pharmacy Features", "Admin Features", "Optional Features"].map(
              (tab, index) => (
                <button
                  key={index}
                  className={`${styles.tabButton} ${activeTab === index ? styles.active : ""} `}
                  onClick={() => handleTabClick(index)}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>
        <div className={styles.tabContent}>
          {activeTab === 0 && (
            <div className={styles.tabPane}>
              <div className='lg:p-6'>
                <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 text-left items-center">
                  <div>
                    <div className="">
                      {accordionData.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 my-3 bg-[#161f33]/80 text-white rounded-[6px]">
                          <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-left px-4 py-3 focus:outline-none"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-medium">{item.title}</span>
                              <svg
                                className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                  }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </button>
                          {activeIndex === index && (
                            <div className="p-4 text-white transition-all duration-300 ease-in-out" dangerouslySetInnerHTML={{ __html: item.content }}>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Image src="https://www.comfygen.com/img/online-medicine-store-patient-app.webp" alt="best healthcare app development company" width={529} height={529} priority className="mx-auto" />

                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className={styles.tabPane}>
              <div className='p-6'>
                <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 text-left items-center">
                  <div className="">
                    {accordionData1.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 my-3 bg-[#161f33]/80 text-white rounded-[6px]">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full text-left px-4 py-3 focus:outline-none"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">{item.title}</span>
                            <svg
                              className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </button>
                        {activeIndex === index && (
                          <div className="p-4 text-white transition-all duration-300 ease-in-out" dangerouslySetInnerHTML={{ __html: item.content }}>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    <Image src="https://www.comfygen.com/img/online-medicine-store-for-business-owners.webp" alt="healthcare app development company in India" width={529} height={529} priority className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className={styles.tabPane}>
              <div className='lg:p-6'>
                <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 text-left items-center">
                  <div className="">
                    {accordionData2.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 my-3 bg-[#161f33]/80 text-white rounded-[6px]">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full text-left px-4 py-3 focus:outline-none"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">{item.title}</span>
                            <svg
                              className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </button>
                        {activeIndex === index && (
                          <div className="p-4 text-white transition-all duration-300 ease-in-out" dangerouslySetInnerHTML={{ __html: item.content }}>

                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    <Image src="https://www.comfygen.com/img/apps-for-professionals-image.svg" alt="healthcare app development company usa" width={629} height={629} priority className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className={styles.tabPane}>
              <div className='lg:p-6'>
                <div className="grid lg:grid-cols-2 xl:gap-10 gap-10 text-left items-center">
                  <div className="">
                    {OptionalFeatures.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 my-3 bg-[#161f33]/80 text-white rounded-[6px]">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full text-left px-4 py-3 focus:outline-none"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">{item.title}</span>
                            <svg
                              className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </button>
                        {activeIndex === index && (
                          <div className="p-4 text-white transition-all duration-300 ease-in-out" dangerouslySetInnerHTML={{ __html: item.content }}>

                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                  <Image src="https://www.comfygen.com/img/apps-for-professionals-image.svg" alt="healthcare app development company usa"  width={629} height={629} priority className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}