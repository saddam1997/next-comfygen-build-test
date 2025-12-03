import React from "react";

const EmargingTech: React.FC = () => {
  const technologies = [
    {
      title: "Artificial Intelligence (AI) & Machine Learning (ML) 🤖",
      description:
        "AI and ML enable personalized medicine recommendations based on health data, manage inventory smartly, and offer efficient chatbots or virtual health assistants to answer queries and enhance user experience.",
    },
    {
      title: "Augmented Reality (AR) & Virtual Reality (VR) 🕶️",
      description:
        "AR can provide detailed medicine information via interactive displays, while VR can offer virtual consultations, enabling telemedicine for remote diagnosis and treatment, and improving patient engagement.",
    },
    {
      title: "Blockchain Technology 🔐",
      description:
        "Blockchain ensures secure transactions and data sharing, protecting sensitive medical information. It also enhances drug traceability, preventing counterfeit medications from entering the supply chain.",
    },
    {
      title: "Data Science & Predictive Analytics 📊",
      description:
        "Data science provides deep insights into customer behavior, helping predict future trends. Predictive analytics can forecast health outcomes, allowing the app to offer proactive care recommendations.",
    },
    {
      title: "Internet of Medical Things (IoMT) ⚕️",
      description:
        "IoMT integrates smart medical devices with the app, enabling real-time monitoring of patient’s health metrics, ensuring better medical care, and improving treatment accuracy.",
    },
  ];

  return (
    <div className="max-w-full p-8 bg-gradient-to-br from-[#31384d] via-[#384b86] to-[#1c284b] text-white ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center  bg-clip-text text-white">
          Emerging Technologies in Pharmacy App Development
        </h1>
        <p className="text-base text-center mx-auto w-[75%] py-4">
          Some latest trending technologies for pharmacy app development to make it stand-alone out-of-the-box in the market
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-purple-700 to-blue-700 rounded-2xl p-6 text-white shadow-3xl hover:shadow-4xl transform hover:-translate-y-2 hover:scale-110 transition-transform duration-500 ease-in-out"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-purple-400 to-blue-600 opacity-40  rounded-2xl"></div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                {tech.title}
              </h2>
              <p className="text-md leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmargingTech;
