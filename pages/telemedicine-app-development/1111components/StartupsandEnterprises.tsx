import React, { useState } from "react";

const FeaturesSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const featuresData = [
    {
      id: 1,
      title: "Increased Healthcare Access",
      icon: "🛒", // You can replace this with an actual icon component like Heroicons
      description: "Having a medicine ordering app allows organizations and patients to get doorstep medicine deliveries. It’s a breakthrough for the healthcare industry; where medication is accessible to everyone. ",
    },
    {
      id: 2,
      title: "Rapid Business Growth ",
      icon: "⚙️",
      description: "61% of buyers are buying drugs online, therefore the market is continuously launching new updated on-demand medicine delivery applications. So building a new medicine ordering application with some unique strategies enables the entrepreneur to grow massively. ",
    },
    {
      id: 3,
      title: "Scalability and Growth Potential",
      icon: "🤝",
      description: "With the surging demand from patients for online medicine deliveries; startups can break through in the market with their new launches. Engage the targeted audience with some robust app launches; that lead towards potential growth. ",
    },
    {
      id: 4,
      title: "Recurring Revenue Model",
      icon: "🔁",
      description:
        "Investing in online medicine delivery apps enables startups and enterprises to create a recurring revenue model through subscription services or delivery fees. This predictable income stream ensures financial stability, allowing businesses to reinvest in technology and marketing, ultimately enhancing user experience and fostering customer loyalty.",
    },
    {
        id: 5,
        title: "Emerging Technologies Driving Innovation",
        icon: "💻",
        description:
          "The integration of AI, machine learning, and blockchain in online medicine delivery apps is revolutionizing the industry. These technologies streamline operations, improve inventory management, and enhance customer service, making healthcare more efficient and secure.",
      },
      {
        id: 6,
        title: "Diversified Revenue Streams",
        icon: "💰",
        description:
          "By offering additional services like telemedicine, health consultations, and personalized medication management, online pharmacies can tap into various revenue streams. This diversification not only boosts profitability but also strengthens customer relationships by providing comprehensive healthcare solutions.",
      },,
      {
        id: 7,
        title: "Government Initiatives and Favorable Regulations",
        icon: "📜",
        description:
          "Supportive government initiatives and regulatory frameworks are paving the way for the growth of online medicine delivery services. With policies promoting telehealth and e-pharmacy, businesses can thrive in a conducive environment, ensuring compliance and fostering trust among consumers.",
      },
  ];
  

  return (
    <div className="py-10 p-2 bg-white">
      <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold">
        Why Should Startups and Enterprises Invest in Online Medicine Delivery
        Apps?
      </h2>
      <p className="text-base text-center mx-auto w-[75%] pt-4">
        The global online pharmacy market size was worth USD 18.5 Billion in
        2022 and is anticipated to cross USD 38.2 Billion by 2030. With a
        growing CAGR of 9.5%, the investment in on-demand medicine delivery app
        development is proven revenue-generating. Besides the market analysis,
        certain listed reasons also claim the investment is beneficial.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto my-8">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className={`relative p-4 rounded-lg shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-start justify-between ${
              hoveredId === feature.id
                ? "bg-white text-black"
                : "bg-[#060E41] text-white "
            }`}
            onMouseEnter={() => setHoveredId(feature.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex items-center">
              <span className="text-3xl mr-4">{feature.icon}</span>
              <h3 className="text-lg font-medium">{feature.title}</h3>
            </div>

         
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${hoveredId === feature.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="mt-2 text-base text-start">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
