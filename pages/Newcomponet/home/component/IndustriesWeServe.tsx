"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';





const defaultSliderData = [
    {
        imgSrc: "https://www.comfygen.com/image/industries-ecommerce-img.webp",
        title: "E-Commerce",
        description: "Revolutionizing online shopping with feature-rich, secure, and user-friendly mobile app solutions.",
        link: "/e-commerce-app-development"
    },
    {
        imgSrc: "https://www.comfygen.com/image/industries-healthcare-img.webp",
        title: "Healthcare",
        description: "Empowering health services with innovative, patient-centric healthcare app development for better outcomes.",
        link: "/healthcare-app-development"
    },
    {
        imgSrc: "https://www.comfygen.com/image/industries-blockchain-img.webp",
        title: "Blockchain",
        description: "Transforming industries with secure, transparent, and decentralized blockchain app development solutions.",
        link: "/blockchain-development"
    },
    {
        imgSrc: "https://www.comfygen.com/image/industries-education-img.webp",
        title: "Education",
        description: "Enhancing learning experiences with interactive, engaging, and scalable education apps.",
        link: "/ca/education-app-development-company"
    },
    {
        imgSrc: "https://www.comfygen.com/image/transportation-industries-img.webp",
        title: "Transportation",
        description: "Simplifying travel with seamless, efficient transportation app innovations."
    },

    {
        imgSrc: "https://www.comfygen.com/image/construction-industries-img.webp",
        title: "Construction",
        description: "Driving project efficiency with modern construction management and planning applications."
    },
    {
        imgSrc: "https://www.comfygen.com/image/game-industries-img.webp",
        title: "Game",
        description: "Creating immersive, engaging gaming experiences with cutting-edge app development technologies.",
        link: "/game-development-company"
    },
    {
        imgSrc: "https://www.comfygen.com/image/entertainment-industries-img.webp",
        title: "Entertainment",
        description: "Innovating entertainment platforms with personalized, accessible digital experiences."
    },
    {
        imgSrc: "https://www.comfygen.com/image/social-media-app-industries-img.webp",
        title: "Social Media App",
        description: "Connecting users worldwide through innovative, feature-rich social media app solutions.",
        link: "/social-media-app-development"
    },
    {
        imgSrc: "https://www.comfygen.com/image/finance-industries-img.webp",
        title: "Finance",
        description: "Delivering secure, user-friendly financial apps tailored to modern customer needs.",
        link: "/finance-app-development"
    },
    {
        imgSrc: "https://www.comfygen.com/image/dating-industries-img.webp",
        title: "Dating",
        description: "Crafting intuitive dating platforms to foster meaningful connections seamlessly.",
        link: "/dating-app-development"
    },
    {
        imgSrc: "https://www.comfygen.com/image/restaurant-industries-img.webp",
        title: "Restaurant industries",
        description: "Enhancing dining experiences with user-focused, efficient restaurant management and ordering apps.",
        link: "/food-delivery-app-development"
    }
];

const IndustriesWeServe = ({
    heading = "Industries We Empower with Our Digital Solutions",
    description = "We provide innovative and tailored solutions across diverse industries, helping businesses thrive with cutting-edge technology and seamless integrations.",
    industries = defaultSliderData }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);

    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const slideCrd = React.useRef<HTMLDivElement | null>(null);

    const scrollcards = (direction: "left" | "right") => {
        if (!slideCrd.current) return;

        const scrollAmount = direction === "left" ? -300 : 300;

        slideCrd.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    const checkScroll = () => {
        if (!slideCrd.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = slideCrd.current;

        // Hide left arrow at the start
        setShowLeftArrow(scrollLeft > 10);

        // Hide right arrow at the end
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    };

    useEffect(() => {
        if (!slideCrd.current) return;
        const ref = slideCrd.current;

        checkScroll(); // check on mount

        ref.addEventListener("scroll", checkScroll);
        return () => ref.removeEventListener("scroll", checkScroll);
    }, []);


    const itemsPerPage = 6;
    const totalPages = Math.ceil(industries.length / itemsPerPage);

    const handlePageChange = (pageIndex: any) => {
        setCurrentPage(pageIndex);
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const handleCardClick = (link: any) => {
        window.location.href = link;
    };

    const currentIndustries = industries.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section className=" bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-[45px] font-poppins  text-[#000000] font-SemiBold mb-4 cursor-pointer">
                        {heading}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Navigation Arrows for Mobile/Tablet */}
                <div className="flex justify-between items-center mb-8 lg:hidden">


                    <button
                        onClick={handlePrev}
                        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                        disabled={currentPage === 0}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <span className="text-gray-600 font-medium">
                        {currentPage + 1} / {totalPages}
                    </span>
                    <button
                        onClick={handleNext}
                        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                        disabled={currentPage === totalPages - 1}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-8">
                    {currentIndustries.map((industry, index) => (
                        <div
                            
                            className='bg-white  max-w-[573px] rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer'
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleCardClick(industry.link)}
                        >
                            <div className="p-4 flex items-center justify-between border-b">
                                <h2 className="md:text-[24px] font-poppins  text-[#000000] font-Medium">
                                    {industry.title}
                                </h2>
                                <Link href={industry.link || '#'}
                                    className={`bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-all duration-300 `}
                                // onClick={(e) => {
                                //     e.stopPropagation();
                                //     handleCardClick(industry.link);
                                // }}
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="px-6 py-2 h-20 overflow-hidden">
                                <p className="text-[15px] font-poppins text-[#616161]">
                                    {industry.description.slice(0, 90) + "...."}
                                </p>
                            </div>


                            <div

                                className='rounded-md p-4' >
                                <Image
                                    width={640}
                                    height={460}
                                    src={industry.imgSrc}
                                    alt={industry.title}
                                    className="rounded-[20px]"
                                />
                            </div>
                        </div>

                    ))}

                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-12 gap-3">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index)}
                            className={`transition-all duration-300 rounded-full ${currentPage === index
                                ? 'w-8 h-3 bg-purple-600'
                                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Desktop Navigation Arrows */}
                <div className="hidden lg:flex justify-center mt-8 gap-4">
                    <button
                        onClick={handlePrev}
                        className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === 0}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === totalPages - 1}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                </div>
            </div>




        </section>
    );
};

export default IndustriesWeServe;