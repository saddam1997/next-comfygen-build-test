import React from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";

const NewSection = () => {
    const featuresData = {
        title: "Transform Your Business with AI Courier Delivery App Development Solutions",
        subtitle: "At Comfygen, we specialize in AI-powered courier delivery app development solutions that optimize operations, cut costs, and enhance customer experience. Our artificial intelligence courier apps empower businesses with automation, real-time tracking, and advanced analytics for sustainable growth.",
        features: [
            {
                id: 1,
                title: "AI-Powered Dispatching",
                description: "Automate courier assignment with AI-based algorithms that match drivers, optimize routes, and minimize delays, ensuring timely parcel deliveries every time."
            },
            {
                id: 2,
                title: "Predictive Delivery Analytics",
                description: "Leverage AI insights to forecast delivery times, identify patterns, and improve efficiency, helping your courier business meet customer expectations seamlessly."
            },
            {
                id: 3,
                title: "Smart Route Optimization",
                description: "AI-driven route optimization reduces fuel costs, avoids traffic delays, and ensures faster last-mile delivery, maximizing operational efficiency and customer satisfaction."
            },
            {
                id: 4,

                title: "Intelligent Customer Support",
                description: "Integrate AI chatbots for instant customer assistance, automated queries, and proactive notifications, ensuring a smooth and engaging user experience 24/7."
            },
            {
                id: 5,

                title: "Fraud Detection & Secure Payments",
                description: "Our best AI parcel delivery app provides safe courier transactions with fraud detection, real-time alerts, and blockchain-based secure payment gateways for a trustworthy courier app ecosystem."
            },
            {
                id: 6,

                title: "Data-Driven Business Insights",
                description: "AI-powered analytics track performance, customer preferences, and delivery trends, enabling smarter business decisions and growth-focused strategies for courier companies."
            }
        ]
    };

    // const getIcon = (iconType: string) => {
    //     const iconProps = { size: 24, className: "text-red-500" };
    //     return <IoIosCheckmarkCircleOutline {...iconProps} />;
    // };

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
                                    src="https://www.comfygen.com/comfygen-images/courier-delivery-app-development/transform-app-development-solution.webp"
                                    alt="delivery-app-development"
                                    width={970}
                                    height={940}
                                    className="object-contain bg-center "
                                    priority
                                    quality={75}
                                    unoptimized
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
