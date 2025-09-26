import React from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";

const NewSection = () => {
    const featuresData = {
        title: "Next-Gen Fuel Delivery App Development with AI Innovation",
        subtitle: "We are a leading AI-powered fuel delivery app development company at Comfygen Technologies. Our advanced AI-driven features make your app smarter, more cost-efficient, and customer-centric, empowering startups and enterprises to stay ahead in the competitive fuel delivery industry.",
        features: [
            {
                id: 1,
                icon: 'heart',
                title: "Smart Route Planning",
                description: "AI finds the fastest and most fuel-efficient routes for deliveries by checking traffic, road conditions, and weather. This helps drivers deliver fuel quickly while saving time and fuel."
            },
            {
                id: 2,
                icon: 'message',
                title: "Smart Fuel Demand Predictions",
                description: "AI looks at past orders and local trends to predict fuel demand. Businesses can keep the right stock, avoid running out of fuel, and plan deliveries better."
            },
            {
                id: 3,
                icon: 'users',
                title: "Real-Time Transaction Protection",
                description: "AI checks all online payments for unusual activity. It helps prevent fraud and keeps your customers’ transactions safe and secure."
            },
            {
                id: 4,
                icon: 'brain',
                title: "Track Driver Performance",
                description: "AI tracks driver speed, idle time, and routes. Managers get insights to improve efficiency, reward good drivers, and make sure deliveries are safe."
            },
            {
                id: 5,
                icon: 'shield',
                title: "Instant Customer Support",
                description: "AI chatbots answer customer questions, update delivery status, and handle requests immediately. Any complicated issues are quickly sent to support staff."
            },
            {
                id: 6,
                icon: 'trending-up',
                title: "Grow Your Business with Insights",
                description: "AI gives clear data on high-demand areas, customer habits, and delivery performance. Businesses can make smart decisions, improve services, and grow faster."
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
                                    src="https://www.comfygen.com/comfygen-images/fuel-delivery-app-development/innovation.webp"
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
