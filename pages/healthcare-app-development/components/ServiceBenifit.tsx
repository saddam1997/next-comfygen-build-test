import React, { useState, useEffect } from "react";
import Image from 'next/image';
interface ServiceItem {
  num: string;
  img: string;
  title: string;
  urlLink?: string;
  decs: string;
  altTag: string;
}

const services: ServiceItem[] = [
  {
    num: "01",
    img: "https://www.comfygen.com/image/8665941_suitcase_medical_healthcare_icon (1) 1.png",
    altTag: "medical_healthcare_icon",
    title: "Healthcare Business Startups",
    urlLink: "/ca/startup-app-development",
    decs: "Custom software helps startups streamline operations, improve patient engagement, and efficiently manage healthcare services from day one.",
  },
  {
    num: "02",
    urlLink: "/web-design",
    img: "https://www.comfygen.com/image/_x31_8_x2C__report_x2C__record_x2C__health_x2C__healthcare.png",
    altTag: "Business Enterprise",
    title: "Healthcare Business Enterprise",
    decs: "Enterprises benefit by enhancing data management, improving workflow automation, and integrating innovative solutions for better patient care.",
  },
  {
    num: "03",
    img: "https://www.comfygen.com/img/Custom Healthcare App Development Services.webp",
    altTag: "Hospital and Clinics",
    title: "Hospital and Clinics",
    decs: "Hospitals and clinics can streamline patient records, optimize appointment scheduling, and improve communication with integrated custom software.",
  },
  {
    num: "04",
    img: "https://www.comfygen.com/img/Healthcare Support and Maintenance.webp",
    altTag: "Telemedicine",
    urlLink: "/telemedicine-app-development",
    title: "Telemedicine Providers",
    decs: "Custom telemedicine software ensures seamless video consultations, patient data management, and secure communication between healthcare providers and patients.",
  },

  {
    num: "05",
    img: "https://www.comfygen.com/image/Medicine.png",
    title: "Pharmaceutical Companies",
    altTag: "Pharmaceutical Companies",
    decs: "Software solutions can enhance drug tracking, streamline research processes, and efficiently manage inventory and supply chains.",
  },
  {
    num: "06",
    img: "https://www.comfygen.com/image/Vector (8).png",
    title: "Medical Device Manufacturers",
    altTag: "Medical Device Manufacturers",
    decs: "Custom software helps manage compliance, track production, and provide real-time insights into device performance and distribution.",
  },
  {
    num: "08",
    img: "https://www.comfygen.com/image/_x30_1.png",
    altTag: "Healthcare NGOs",

    title: "Healthcare NGOs",
    decs: "Custom software helps NGOs manage patient data, streamline reporting, and track health initiatives in underserved communities.",
  },
  {
    num: "09",
    img: "https://www.comfygen.com/image/layer2.png",
    altTag: "Healthcare Insurance ",

    title: "Healthcare Insurance Providers",
    decs: "Custom solutions improve claims processing, automate policy management, and offer better customer service through streamlined communication channels.",
  },
  {
    num: "10",
    img: "https://www.comfygen.com/image/Group (5).png",
    altTag: "Rehabilitation",

    title: "Rehabilitation Centers",
    decs: "Software solutions aid in managing patient records, tracking progress, and offering personalized rehabilitation programs for improved outcomes.",
  },
  {
    num: "11",
    img: "https://www.comfygen.com/image/8665941_suitcase_medical_healthcare_icon (1) 1.png",
    altTag: "Long-term Care Facilities",

    title: "Long-term Care Facilities",
    decs: "The software helps manage patient care plans, automate medication administration, and track residents' health conditions for efficient care delivery.",
  },
  {
    num: "12",
    img: "https://www.comfygen.com/img/Healthcare Support and Maintenance.webp",
    altTag: "Mental Health Facilities",

    title: "Mental Health Facilities",
    decs: "Custom solutions enable better patient monitoring, secure communication, and personalized treatment plans for improved mental health outcomes.",
  },
  {
    num: "13",
    img: "https://www.comfygen.com/image/_14-Hospital.png",
    altTag: "Specialty Care Clinics",

    title: "Specialty Care Clinics",
    decs: "Custom software helps manage specialized treatments, enhance patient records, and streamline appointment scheduling for niche healthcare services.",
  },
  {
    num: "14",
    img: "https://www.comfygen.com/image/8665941_suitcase_medical_healthcare_icon (1) 1.png",
    altTag: "Hospice Care Providers",

    title: "Hospice Care Providers",
    decs: "Hospice care providers benefit from efficient patient care management, record-keeping, and tracking end-of-life care services with custom software.",
  },
  {
    num: "15",
    img: "https://www.comfygen.com/image/8677964_government_line_business_icon 1.png",
    altTag: "Government Health Departments",
    title: "Government Health Departments",
    decs: "Custom software aids in data management, resource allocation, and monitoring of public health programs for improved healthcare services",
  },
];

const ServiceBenefit: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(
    services[0]
  );

  const leftServices = services.slice(0, 7);
  const rightServices = services.slice(7, 16);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* Left Column */}
      <div className="w-full md:w-1/4 p-4 space-y-4 bg-white rounded">
        {leftServices.map((service, index) => (
          <div
            key={index}
            className="space-y-4 "
          >
            <button
              className={`text-left w-full p-2  ${selectedService.num === service.num
                ? "bg-[#5556D1] border-none font-bold text[#000000] py-3 rounded-[4px]"
                : "bg-white text-[#5556D1] font-bold hover:bg-blue-100 border border-[#5556D1]/30  py-3 rounded-[4px]"
                }`}
              onClick={() => setSelectedService(service)}
            >
              {service.title}
            </button>
          </div>
        ))}
      </div>

      {/* Center Column: Description */}
      <div className="w-full lg:w-[26%] sm:w-[50%] p-6 min-h-[550px] flex items-center justify-center px-16" style={{
        backgroundImage: "url('https://www.comfygen.com/image/mobile-screen-bg.webp')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} >
        <div>
          <div className="flex justify-center place-items-center pt-6 pb-2">
            <div className="bg-white p-4 rounded-md">
              <Image
                src={selectedService.img} alt={selectedService?.altTag ? selectedService?.altTag : "Icon_alt"} className="w-8 h-8"
                height={50}
                width={50}
              />
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold  text-center">
              <a href={selectedService.urlLink} className="cursor-pointer">{selectedService.title}</a>
            </h2>
            <p className="text-center mx-auto">{selectedService.decs}</p>
          </div>

        </div>

      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/4 p-4 space-y-4 bg-white rounded">
        {rightServices.map((service, index) => (
          <div
            key={index}
            className="space-y-4 "
          >
            <button
              className={`text-left w-full p-2  ${selectedService.num === service.num
                ? "bg-[#5556D1] border-none font-bold text[#000000] py-3 rounded-[4px]"
                : "bg-white text-[#5556D1] font-bold hover:bg-blue-100 border border-[#5556D1]  py-3 rounded-[4px]"
                }`}
              onClick={() => setSelectedService(service)}
            >
              {service.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBenefit;
