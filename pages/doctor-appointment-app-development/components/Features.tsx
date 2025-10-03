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
    title: "Patient Panel",
    icon: <i className="fas fa-shopping-bag text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/patient-panel.webp",
    additionalDetails: [
      { details: "Easy Sign-Up & Secure Login", emoji: "", content: "" },
      { details: "Search & Book Doctor Appointments", emoji: "", content: "" },
      { details: "Telemedicine & Video Consultation Access", emoji: "", content: "" },
      { details: "Prescription & Medical History Management", emoji: "", content: "" },
      { details: "In-App Payments & Digital Receipts", emoji: "", content: "" },
      { details: "Ratings & Reviews for Doctors", emoji: "", content: "" },
      { details: "Real-Time Notifications & Reminders", emoji: "", content: "" },
      { details: "Lab Test & Pharmacy Booking Integration", emoji: "", content: "" },
    ],
  },
  {
    id: 2,
    title: "Doctor Panel",
    icon: <i className="fas fa-mobile-alt text-4xl"></i>,
    img: "https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/doctor-panel.webp",
    additionalDetails: [
      { details: "Manage Availability & Appointment Slots", emoji: "", content: "" },
      { details: "Accept/Reject Booking Requests", emoji: "", content: "" },
      { details: "Video Consultation & Chat with Patients", emoji: "", content: "" },
      { details: "E-Prescriptions & Medical Records Access", emoji: "", content: "" },
      { details: "Track Earnings & Commission Reports", emoji: "", content: "" },
      { details: "Manage Patient Feedback & Ratings", emoji: "", content: "" },
      { details: "Automated Reminders & Notifications", emoji: "", content: "" },
      { details: "Analytics for Patient Consultations", emoji: "", content: "" },
    ],
  },
  {
    id: 3,
    title: "Admin Panel",
    img: "https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/admin-web-panel.webp",
    icon: <i className="fas fa-wallet text-4xl"></i>,
    additionalDetails: [
      { details: "Dashboard with Real-Time Metrics", emoji: "", content: "" },
      { details: "Manage Patients & Doctors Seamlessly", emoji: "", content: "" },
      { details: "Appointment & Cancellation Tracking", emoji: "", content: "" },
      { details: "Revenue & Commission Settings", emoji: "", content: "" },
      { details: "Content Management (CMS) for Promotions", emoji: "", content: "" },
      { details: "Approve/Reject Doctor Registrations", emoji: "", content: "" },
      { details: "Multi-Clinic or Hospital Branch Management", emoji: "", content: "" },
      { details: "Data Security & HIPAA Compliance Tools", emoji: "", content: "" },
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
    <div className="lg:py-16 py-10 bg-[#F5F5F9]">
      <div className="space-y-2">
        <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
          We Develop Doctor Appointment Apps With Advanced Panel Features
        </h2>
        <p className="text-center text-gray-600 max-w-6xl mx-auto lg:px-8 px-4">
          At Comfygen Technologies, we design and develop doctor appointment apps with advanced and easy-to-use panels for patients, doctors, and admins. Our custom app solutions ensure seamless communication, better healthcare management, and enhanced user experience for clinics, hospitals, and startups.

        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-2 mx-auto border-2 rounded-full border-[#f1f1f1] 2xl:w-10/12 w-10/12 lg:w-11/12 mt-10">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className={`rounded-full flex justify-center border border-gray-300 cursor-pointer ${openedFeature?.id === feature.id
              ? "bg-[#5556D1] text-white border-[#5556D1]"
              : "bg-white hover:bg-gray-100"
              }`}>
            <button
              className="text-lg font-medium p-2 focus:outline-none"
              onClick={() => handleButtonClick(feature)}>
              {feature.title}
            </button>
          </div>
        ))}
      </div>
      {openedFeature && (
        <div className="mt-6 w-full mx-auto p-4 grid grid-cols-1 md:grid-cols-2">
          {openedFeature.img && (
            <div className="mb-4 flex mx-auto w-[60%]">
              <Image
                src={openedFeature.img}
                alt={openedFeature.title}
                width={640}
                height={538}
                className="w-full h-auto object-cover rounded-lg"
                priority={true}
                quality={75}
                unoptimized
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

