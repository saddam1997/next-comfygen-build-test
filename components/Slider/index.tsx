"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface SlideItem {
    id: number;
    title: string;
    description: string;
    image: string;
    tag: string;
}

const slides: SlideItem[] = [
    {
        id: 1,
        title: "Diwali Celebration",
        description:
            "A festival of lights, laughter, and unforgettable memories at our firm.",
        image: "https://www.comfygen.com/comfygen-images/life-at-comfygen/image-9.webp",
        tag: "Festival",
    },
    {
        id: 2,
        title: "Diwali Celebration",
        description:
            "A festival of lights, laughter, and unforgettable memories at our firm.",
        image: "https://www.comfygen.com/comfygen-images/life-at-comfygen/image-8.webp",
        tag: "Festival",
    },
    {
        id: 3,
        title: "Holi Celebration",
        description:
            "Colors, joy, and togetherness — celebrating the festival of colors with our team.",
        image: "https://www.comfygen.com/comfygen-images/life-at-comfygen/image-13.webp",
        tag: "Festival",
    },
    //   {
    //     id: 3,
    //     title: "Team Outing",
    //     description:
    //       "Bonding beyond the office — a day full of adventure and team spirit.",
    //     image: "https://www.comfygen.com/comfygen-images/life-at-comfygen/image-10.webp",
    //     tag: "Outing",
    //   },
    //   {
    //     id: 4,
    //     title: "Annual Party",
    //     description:
    //       "Celebrating milestones, achievements, and the brilliant people behind them.",
    //     image: "https://www.comfygen.com/comfygen-images/life-at-comfygen/image-10.webp",
    //     tag: "Party",
    //   },
    //   {
    //     id: 5,
    //     title: "Christmas Bash",
    //     description:
    //       "Santa hats, carols, and cheer — the most wonderful time of the year at our office.",
    //     image: "https://www.comfygen.com/comfygen-images/life-at-comfygen/image-10.webp",
    //     tag: "Festival",
    //   },
    //   {
    //     id: 6,
    //     title: "Foundation Day",
    //     description:
    //       "Marking another year of growth, gratitude, and great teamwork together.",
    //     image: "https://www.comfygen.com/comfygen-images/life-at-comfygen/image-10.webp",
    //     tag: "Milestone",
    //   },
];

const VISIBLE_CARDS = { sm: 1, md: 2, lg: 3 };
const AUTO_PLAY_INTERVAL = 3500;

export default function CelebrationSlider({ Data }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [dragStart, setDragStart] = useState<number | null>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Responsive visible count
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) setVisibleCount(VISIBLE_CARDS.sm);
            else if (w < 1024) setVisibleCount(VISIBLE_CARDS.md);
            else setVisibleCount(VISIBLE_CARDS.lg);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = Data.slides.length - visibleCount;

    const goTo = useCallback(
        (index: number) => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
            setTimeout(() => setIsTransitioning(false), 400);
        },
        [isTransitioning, maxIndex]
    );

    const prev = useCallback(() => {
        goTo(currentIndex === 0 ? maxIndex : currentIndex - 1);
    }, [currentIndex, maxIndex, goTo]);

    const next = useCallback(() => {
        goTo(currentIndex === maxIndex ? 0 : currentIndex + 1);
    }, [currentIndex, maxIndex, goTo]);

    // Auto-play
    useEffect(() => {
        if (isPaused) return;
        timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [next, isPaused]);

    // Touch/drag handlers
    const handleDragStart = (clientX: number) => setDragStart(clientX);
    const handleDragEnd = (clientX: number) => {
        if (dragStart === null) return;
        const diff = dragStart - clientX;
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
        setDragStart(null);
    };

    const cardWidthPercent = 100 / visibleCount;
    const translateX = -(currentIndex * cardWidthPercent);

    return (
        <section className="w-full bg-white py-10 px-4 sm:px-8 font-[system-ui]">
            {/* Header */}
            <div className="flex items-end justify-between mb-8 max-w-7xl mx-auto">
                <div>
                    {/* <p className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-1">
            Our Culture
          </p> */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                        <span className="relative inline-block">
                            {Data.heading}
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-orange-400 rounded-full" />
                        </span>
                    </h2>
                </div>

                {/* Arrow Controls */}
                <div className="flex gap-2 shrink-0">
                    <button
                        onClick={prev}
                        aria-label="Previous"
                        className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200 disabled:opacity-30"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next"
                        className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Slider Track */}
            <div
                className="max-w-7xl mx-auto overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onMouseDown={(e) => handleDragStart(e.clientX)}
                onMouseUp={(e) => handleDragEnd(e.clientX)}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
            >
                <div
                    className="flex"
                    style={{
                        transform: `translateX(${translateX}%)`,
                        transition: isTransitioning ? "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)" : "none",
                        willChange: "transform",
                    }}
                >
                    {Data?.slides.map((slide: any) => (
                        <div
                            key={slide.id}
                            className="shrink-0 px-2"
                            style={{ width: `${cardWidthPercent}%` }}
                        >
                            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        draggable={false}
                                    />
                                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-orange-500 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                                        {slide.tag}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-1">
                                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                                        {slide.title}
                                    </h3>
                                    <p className="text-sm text-gray-900 font-medium leading-relaxed">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot Indicators */}
            {/* <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all duration-300 ${i === currentIndex
                                ? "w-6 h-2 bg-orange-400"
                                : "w-2 h-2 bg-gray-300 hover:bg-orange-200"
                            }`}
                    />
                ))}
            </div> */}
        </section>
    );
}