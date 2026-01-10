"use client";
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { SubHeading } from '../ui/SubHeading';





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

    // const handleCardClick = (link: any) => {
    //     window.location.href = link;
    // };

    const currentIndustries = industries.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <section className=" bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center lg:mb-4 mb-2">
                    <Heading text={heading} align="center" />
                    <Paragraph html={description} align="center" />
                   
                </div>

                {/* MOBILE ONLY – HORIZONTAL SLIDER */}
                <div className="lg:hidden overflow-x-auto scroll-hide">
                    <div className="flex flex-nowrap gap-4 w-full py-6">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="w-[320px] shrink-0 bg-white rounded-[24px] shadow-lg cursor-pointer"
                            //  onClick={() => industry.link && handleCardClick(industry.link)}
                            >
                                <div className="p-4 flex items-center justify-between border-b">
                                    <SubHeading text={industry.title} />
                                    <Link
                                        href={industry.link || "#"}
                                        className="bg-red-500 text-white rounded-full p-2 group"
                                    >
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                                    </Link>
                                </div>

                                <div className="px-4 py-2 h-16 overflow-hidden">
                                    <Paragraph html={industry.description} />
                                </div>

                                <div className="p-4">
                                    <Image
                                        width={400}
                                        height={280}
                                        src={industry.imgSrc}
                                        alt={industry.title}
                                        className="rounded-[18px]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-8">
                    {currentIndustries.map((industry: any, index) => (
                        <div
                            key={index}
                            className='bg-white  max-w-[573px] rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer'
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        // onClick={() => handleCardClick(industry.link)}
                        >
                            <div className="p-4 flex items-center justify-between border-b">

                                {industry.link ? (
                                    <Link
                                        href={industry.link}
                                        aria-label={`Go to ${industry.title}`}

                                    >
                                        <h3 className="md:text-[24px] font-poppins  text-[#000000] font-Medium">
                                            {industry.title}
                                        </h3>
                                    </Link>
                                ) : (
                                    <h3 className="md:text-[24px] font-poppins  text-[#000000] font-Medium">
                                        {industry.title}
                                    </h3>
                                )}


                                {industry.link ? (
                                    <Link
                                        href={industry.link}
                                        aria-label={`Go to ${industry.title}`}
                                        className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-all duration-300 group"
                                    >
                                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                                    </Link>
                                ) : (
                                    <Link
                                        href={"#"}
                                        aria-hidden="true"
                                        className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-all duration-300 group"
                                        title="Coming soon"
                                    >
                                        <ArrowUpRight className="w-5 h-5  transition-transform duration-300 group-hover:rotate-45" />
                                    </Link>
                                )}

                            </div>

                            <div className="px-6 py-2 h-20 overflow-hidden">
                                <p className="text-[15px] font-poppins text-[#616161]" dangerouslySetInnerHTML={{ __html: industry.description }}>

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
                <div className="flex justify-center mt-5 gap-3">
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
            </div>




        </section>
    );
};

export default IndustriesWeServe;