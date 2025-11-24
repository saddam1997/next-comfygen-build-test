import React from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";

const NewSection = () => {
    const featuresData = {
        title: "Transform Your Business with Smart AI Delivery App Solutions",
        subtitle: "At Comfygen Technologies, we build powerful AI-powered delivery app solutions that make your business smarter and faster. Our AI-powered delivery apps help startups, enterprises, and on-demand businesses boost performance, save time, and delight customers.",
        features: [
            {
                id: 1,
                icon: 'heart',
                title: "AI-Powered Route Optimization",
                description: "Our AI system identifies the most efficient routes in real time, reducing fuel costs, delivery time, and delays. This makes your delivery app development solution more reliable, efficient, and cost-effective."
            },
            {
                id: 2,
                icon: 'message',
                title: "Smart Demand Forecasting",
                description: "With advanced AI algorithms, our delivery mobile apps forecast order demand based on past data and trends. This enables better planning, prevents shortages, and ensures smooth on-demand delivery management system."
            },
            {
                id: 3,
                icon: 'users',
                title: "Personalized User Experience",
                description: "We build AI-based delivery apps that recommend products, meals, or services based on user history and behavior. This creates a personalized experience, boosts satisfaction, and encourages repeat orders."
            },
            {
                id: 4,
                icon: 'brain',
                title: "AI Chatbots & Virtual Assistants",
                description: "Our delivery apps feature AI-powered chatbots that provide instant support, answer FAQs, and reduce response times. This enhances customer satisfaction and streamlines support for your delivery business."
            },
            {
                id: 5,
                icon: 'shield',
                title: "Fraud Detection & Secure Payments",
                description: "AI-powered security ensures safe transactions by detecting unusual activity and preventing fraud. This makes your AI delivery app development company solution more secure and trustworthy."
            },
            {
                id: 6,
                icon: 'trending-up',
                title: "Real-Time Tracking with AI Insights",
                description: "We integrate AI and machine learning to offer precise real-time tracking, delivery updates, and actionable insights, keeping both customers and businesses informed at all times."
            }
        ]
    };

    const getIcon = (iconType: string) => {
        const iconProps = { size: 24, className: "text-red-500" };
        return <IoIosCheckmarkCircleOutline {...iconProps} />;
    };

    return (
        <div className=" bg-white w-full py-12 px-4">
            <div className="w-full">
                {/* Header Section */}
                <div className="text-center">
                    <h2 className="text-3xl px-1 mt-6 text-center font-bold mb-6 max-w-8xl">
                        {featuresData.title}
                    </h2>
                    <p className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto text-base text-center font-normal">
                        {featuresData.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 items-center gap-6 mt-10">
                    {/* left side */}
                    <div className="w-full flex justify-center lg:justify-end">
                        <div className="w-full max-w-[970px] p-2">
                            <div className="overflow-hidden ">
                                <Image
                                    src="https://www.comfygen.com/comfygen-images/delivery-app-development/transdelivery-delivery-app-development-app-solutions.webp"
                                    alt="delivery-app-development"
                                    width={970}
                                    height={940}
                                    className="object-contain bg-center "
                                    priority
                                    quality={75}
                                />
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="w-full">
                        <div className="grid md:grid-cols-2">
                            {featuresData.features.map((feature) => (
                                <div key={feature.id} className="p-3">
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection;
