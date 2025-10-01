import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DeliverySection = (props) => {

    const { hideUrl } = props;

    const [visibleCount, setVisibleCount] = useState(8);

    const apps = [

        {
            title: "Fuel Delivery App Development",
            description: "We develop fuel delivery apps that allow customers to order fuel anytime, anywhere. With GPS tracking, secure payments, and driver management, our solutions make fuel delivery simple and profitable.",
            link: "https://www.comfygen.com/fuel-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/fuel-delivery-app-development-services.webp",
            gradient: "from-violet-500 to-purple-500"
        },

        {
            title: "Delivery App Development",
            description: "Comfygen offers custom delivery app development for startups and enterprises. From food and grocery to logistics and courier, we build secure, scalable, and feature-rich delivery apps that boost business growth and customer satisfaction.",
            link: "https://www.comfygen.com/delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/logistics-delivery-app-development-services.webp",
            gradient: "from-orange-500 to-red-500",
        },
        {
            title: "Food Delivery App Development",
            description: "We create custom food delivery apps like Zomato, Talabat, or UberEats. Our apps come with real-time tracking, multiple payment options, and easy ordering. Start your food delivery business with our scalable food delivery app development services.",
            link: "https://www.comfygen.com/food-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/food-delivery-app-development-services.webp",
            gradient: "from-green-500 to-teal-500",
            key: "food-delivery-app-development"
        },
        {
            title: "Grocery Delivery App Development",
            description: "Comfygen builds user-friendly grocery delivery apps that make shopping easy for customers. From product listings to doorstep delivery, our apps ensure fast, secure, and hassle-free service. Launch your grocery delivery business with our powerful solutions.",
            link: "https://www.comfygen.com/ecommerce/grocery",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/grocery-delivery-app-development-services.webp",
            gradient: "from-blue-500 to-cyan-500",
            key: "grocery-app-development"
        },
        {
            title: "Medicine Delivery App Development",
            description: "We design secure and compliant medicine delivery apps with features like e-prescriptions, easy ordering, and real-time delivery tracking. Start your online pharmacy with our trusted medicine delivery app development services.",
            link: "https://www.comfygen.com/medicine-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/medicine-delivery-app-development-services.webp",
            gradient: "from-sky-500 to-blue-500"
        },
        {
            title: "Courier Delivery App Development",
            description: "Our courier delivery apps simplify parcel pickup and delivery with route optimization, live tracking, and digital proof of delivery. Build your own courier business platform with our advanced courier delivery app development solutions.",
            link: "https://www.comfygen.com/courier-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/courier-and-parcel-delivery-app-development-services.webp",
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            title: "Water Delivery App Development",
            description: "We create custom water delivery apps for businesses offering bottled water services. With subscription models, scheduling, and payment gateways, our apps make water delivery easier for businesses and customers.",
            link: "https://www.comfygen.com/water-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/water-delivery-app-development-services.webp",
            gradient: "from-pink-500 to-rose-500",
            key: "water-delivery-app-development"
        },
        {
            title: "Milk Delivery App Development",
            description: "Comfygen offers milk delivery app development with subscription features, recurring orders, and payment integration. Launch your online dairy business with our scalable and easy-to-use milk delivery app solutions.",
            link: "https://www.comfygen.com/milk-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/milk-delivery-app-development-services.webp",
            gradient: "from-purple-500 to-pink-500",
            key: "milk-delivery-app-development"
        },
        {
            title: "Parcel Delivery App Development",
            description: "We design parcel delivery apps with live tracking, order management, and quick dispatch features. Our solutions help startups and enterprises manage deliveries efficiently with robust parcel delivery app development.",
            link: "",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/parcel-delivery-app-development-services.webp",
            gradient: "from-yellow-500 to-orange-500"
        },
        // {
        //     title: "Logistics Delivery App Development",
        //     description: "Our logistics app development services cover fleet management, warehouse tracking, and delivery scheduling. We build enterprise-level logistics delivery apps that optimize supply chain operations and ensure fast, reliable deliveries.",
        //     link: "https://www.comfygen.com/logistics-app-development",
        //     image: "https://www.comfygen.com/comfygen-images/delivery-app-development/logistics-delivery-app-development-services.webp",
        //     gradient: "from-teal-500 to-cyan-500"
        // },

        // {
        //     title: "Liquor Delivery App Development",
        //     description: "Comfygen builds liquor delivery apps with age verification, secure payments, and doorstep delivery. Launch your online alcohol delivery service with our feature-rich liquor delivery app development solutions.",
        //     link: "",
        //     image: "https://www.comfygen.com/comfygen-images/delivery-app-development/liquor-delivery-app-development-services.webp",
        //     gradient: "from-red-500 to-pink-500"
        // },

        {
            title: "Fish Delivery App Development",
            description: "Our fish delivery apps help seafood businesses deliver fresh products to customers quickly. With order tracking, freshness updates, and easy payments, our solutions enhance customer trust and satisfaction.",
            link: "",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/fish-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500"
        },
        {
            title: "Flower Delivery App Development",
            description: "We create elegant flower delivery apps with scheduling, customization, and real-time delivery tracking. Perfect for florists and flower businesses, our apps ensure timely and beautiful flower deliveries.",
            link: "https://www.comfygen.com/flower-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/flower-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500",
            key: "flower-delivery-app-development"
        },
        {
            title: "Meat Delivery App Development",
            description: "Comfygen develops meat delivery apps that ensure freshness and timely delivery. With subscription options, real-time updates, and secure payments, our apps support butcher shops and meat businesses.",
            link: "https://www.comfygen.com/meat-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/meat-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500"
        },
        {
            title: "Gas Cylinder Delivery App Development",
            description: "We build gas cylinder delivery apps with order scheduling, refill tracking, and safety compliance. Our solutions help businesses and households manage gas deliveries with ease and security.",
            link: "",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/gas-cylinder-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500"
        },
        {
            title: "Ice Cream Delivery App Development",
            description: "Our ice cream delivery apps allow customers to order their favorite flavors with real-time delivery tracking. Enhance your dessert business with our custom ice cream delivery app solutions.",
            link: "https://www.comfygen.com/ice-cream-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/ice-cream-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500"
        },
        {
            title: "Pizza Delivery App Development",
            description: "We design pizza delivery apps with quick ordering, real-time tracking, and multi-payment options. Start your pizza chain app like Domino's with our scalable pizza delivery app development services.",
            link: "https://www.comfygen.com/pizza-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/pizza-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500"
        },
        {
            title: "Pet Food Delivery App Development",
            description: "Comfygen builds pet food delivery apps with subscription models, product catalogs, and doorstep delivery. Grow your pet supply business with our advanced pet food delivery app solutions.",
            link: "",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/pet-food-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500"
        },
        {
            title: "Hyperlocal Delivery App Development",
            description: "We create hyperlocal delivery apps that connect local stores with nearby customers. With real-time tracking and instant delivery, our apps empower small businesses to compete in the digital market.",
            link: "",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/hyperlocal-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500"
        },
        {
            title: "Cake Delivery App Development",
            description: "Our cake delivery apps help bakeries and cake shops deliver fresh cakes with live tracking, custom orders, and secure payments. Start your online bakery business with our cake delivery app solutions.",
            link: "",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/cake-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500"
        },

        {
            title: "Alcohol Delivery App Development",
            description: "Comfygen is a top alcohol delivery app development company offering custom, white-label, and on-demand liquor app solutions with AI-powered, blockchain-based, scalable features.",
            link: "https://www.comfygen.com/alcohol-delivery-app-development",
            image: "https://www.comfygen.com/comfygen-images/delivery-app-development/cake-delivery-app-development-services.webp",
            gradient: "from-emerald-500 to-green-500"
        },





    ];

    const filterData = hideUrl
        ? apps.filter((app) => app.link !== hideUrl)
        : apps;

    const visibleApps = filterData.slice(0, visibleCount);

    const hasMore = visibleCount < filterData.length;

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 8);
    };

    return (
        <section className="bg-gradient-to-br mb-10 mt-10 from-slate-50 to-gray-100 lg:py-20 py-12 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
            </div>

            <div className="relative z-10 2xl:w-10/12 w-11/12 lg:w-11/12 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="xl:text-4xl text-2xl md:text-3xl text-[#212121] font-bold">
                        We Provide Custom Delivery App Development Services in Diverse Sectors
                    </h2>

                    <p className="text-base font-normal mt-2 lg:w-2/3 mx-auto w-full">
                        The Comfygen team creates powerful and easy-to-use delivery apps for a variety of industries. Whether you run a startup, small business, or large enterprise, our custom delivery app development services are made to fit your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {visibleApps.map((app, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    height={740}
                                    width={1240}
                                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                                    priority={true}
                                    quality={75}
                                    unoptimized
                                />
                            </div>

                            <div className="absolute inset-0 bg-white translate-y-[80%] group-hover:translate-y-0 group-hover:py-2 transition-transform duration-500 ease-out flex flex-col px-2">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 transform translate-y-4 group-hover:text-blue-500 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    {app.link ? (
                                        <Link href={app.link}>
                                            {app.title}
                                        </Link>
                                    ) : (
                                        <span>{app.title}</span>
                                    )}

                                </h3>
                                <p
                                    className="text-gray-600 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200"
                                    dangerouslySetInnerHTML={{ __html: app.description }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="text-center mt-10">
                        <button
                            onClick={handleShowMore}
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

// DeliverySection.defaultProps = {
//     hideUrl: ""
// };

export default DeliverySection;