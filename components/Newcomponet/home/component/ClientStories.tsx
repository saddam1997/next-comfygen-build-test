import React, { useState, useRef, useEffect } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Check,
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    RotateCcw,
} from "lucide-react";
import Image from "next/image";

export default function ClientStories() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [modalPlay, setModalPlay] = useState(false);

    const videoRef = useRef(null);
    const controlsTimeoutRef = useRef(null);

    const isYoutube = (url: any) =>
        url.includes("youtube.com") || url.includes("youtu.be");

    const benefits = [
        "Dedicated and accountable development resources",
        "Cost-efficient development with flexible pricing models",
        "Fast team onboarding with no long-term contract lock-ins",
        "Easy team scaling based on project needs",
        "High client retention through consistent delivery",
        "Strict NDA and data security compliance",
        "Clear, reliable communication at every stage"
    ];

    const testimonials = [
        {
            videoUrl:
                "https://www.youtube.com/watch?v=kedGnt6T-DI",
            thumbnail: "https://www.comfygen.com/comfygen-images/thumbnail/bookmytuterappreviewthumbnail.webp",
            clientName: "Nitesh Rajput",
            company: "Book My Tuter",
        },
        {
            videoUrl:
                "https://www.youtube.com/watch?v=-AkHiORQTjA",
            thumbnail:
                "https://www.comfygen.com/comfygen-images/thumbnail/forgeflexrreviewthambnail.webp",
            clientName: "Sayead Shadab Arif",
            company: "Froge Flex",
        }

    ];

    // MP4 Events
    useEffect(() => {
        const video = videoRef.current;
        if (!video || isYoutube(testimonials[currentTestimonial].videoUrl)) return;

        const updateProgress = () => {
            const progressPercent = (video.currentTime / video.duration) * 100;
            setProgress(progressPercent);
            setCurrentTime(video.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuration(video.duration);
        };

        video.addEventListener("timeupdate", updateProgress);
        video.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            video.removeEventListener("timeupdate", updateProgress);
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
    }, [currentTestimonial, isPlaying]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        resetVideoState();
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        resetVideoState();
    };

    const resetVideoState = () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
    };
    const handlePlayVideo = () => {
        // OPEN MODAL ONLY
        setOpenModal(true);
        setModalPlay(true);

        // STOP inline video from playing
        setIsPlaying(false);

        if (!isYoutube(testimonials[currentTestimonial].videoUrl)) {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    };



    // const handlePlayVideo = () => {
    //   setIsPlaying(true);

    //   if (!isYoutube(testimonials[currentTestimonial].videoUrl)) {
    //     videoRef.current?.play();
    //   }
    // };

    const togglePlayPause = () => {
        if (isYoutube(testimonials[currentTestimonial].videoUrl)) return;

        if (isPlaying) {
            videoRef.current?.pause();
            setIsPlaying(false);
        } else {
            videoRef.current?.play();
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        if (isYoutube(testimonials[currentTestimonial].videoUrl)) return;

        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleProgressClick = (e) => {
        if (isYoutube(testimonials[currentTestimonial].videoUrl)) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        const newTime = percentage * duration;

        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        setProgress(percentage * 100);
    };

    const handleRestart = () => {
        if (isYoutube(testimonials[currentTestimonial].videoUrl)) return;

        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsPlaying(true);
    };

    const handleFullscreen = () => {
        if (videoRef.current && videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    const formatTime = (seconds: any) => {
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <section className="relative  bg-[#F0F0FB] py-2 overflow-hidden  flex flex-col items-center justify-center">
            {/* World map background */}
            <div className="absolute  inset-0 bg-[url('/Explore-Portfolio.png')] bg-cover bg-no-repeat opacity-80" />
            <div className="relative z-10 lg:container w-full  p-4 md:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                    {/* Left Column */}
                    <div className="space-y-4 mt-5">
                        <p className="text-xl font-medium text-purple-600 ">

                            <Image src="https://www.comfygen.com/comfygen-images/home/Vector.webp" alt="quote-icon" width={30} height={30} className="inline-block mr-2 mb-2" />
                            What our clients say about Comfygen.
                        </p>

                        <h2 className="text-2xl md:text-4xl  font-bold text-gray-900 ">
                            Stories from Our Happy Clients
                        </h2>

                        <ul className="space-y-3 hidden  md:block">
                            {benefits.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <span className=" mt-1 w-5 h-5 border border-blue-600 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-blue-600" />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Video */}
                    <div className="relative">
                        <div className="relative z-20 rounded-2xl  overflow-hidden shadow-xl bg-black">
                            {!isPlaying ? (
                                <div className="relative cursor-pointer" onClick={handlePlayVideo}>
                                    <img
                                        src={testimonials[currentTestimonial].thumbnail}
                                        className="md:w-full lg:h-[400px]  object-contain min-w-full"
                                        alt="thumbnail"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
                                            <Play className="w-8 h-8 text-white ml-1" />
                                        </div>
                                    </div>
                                </div>
                            ) : isYoutube(testimonials[currentTestimonial].videoUrl) ? (
                                <iframe
                                    src={`https://www.youtube.com/embed/${testimonials[currentTestimonial].videoUrl.split("v=")[1]
                                        }?autoplay=1`}
                                    className="w-full h-[400px]"
                                    allow="autoplay"
                                    loading="lazy"
                                ></iframe>
                            ) : (
                                <div className="relative">
                                    <video
                                        ref={videoRef}
                                        src={testimonials[currentTestimonial].videoUrl}
                                        className="w-full h-[400px] object-cover"
                                        onClick={togglePlayPause}
                                        onEnded={() => setIsPlaying(false)}
                                    />

                                    {/* Custom Controls (MP4 only) */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60">
                                        <div
                                            className="w-full h-1 bg-white/30 rounded cursor-pointer mb-3"
                                            onClick={handleProgressClick}
                                        >
                                            <div
                                                className="h-full bg-red-600 rounded"
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>

                                        <div className="flex items-center justify-between text-white">
                                            <div className="flex items-center gap-3">
                                                <button onClick={togglePlayPause}>
                                                    {isPlaying ? <Pause /> : <Play />}
                                                </button>

                                                <button onClick={handleRestart}>
                                                    <RotateCcw />
                                                </button>

                                                <button onClick={toggleMute}>
                                                    {isMuted ? <VolumeX /> : <Volume2 />}
                                                </button>

                                                <span className="text-sm ml-2">
                                                    {formatTime(currentTime)} / {formatTime(duration)}
                                                </span>
                                            </div>

                                            <button onClick={handleFullscreen}>
                                                <Maximize />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="absolute -left-10 -bottom-8 h-24 w-24 bg-yellow-400/70 rounded-full text-white text-3xl"
                        // onClick={() => {
                        //     setOpenModal(false);
                        //     setModalPlay(false);
                        // }}
                        >

                        </div>
                        {/* Navigation */}
                        {/* <div className="flex justify-center gap-4 mt-6">
                            <button
                                aria-label="Previous testimonial"
                                onClick={prevTestimonial}
                                className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center"
                            >
                                <ChevronLeft className="text-red-600" />
                            </button>

                            <button
                                aria-label="Next testimonial"
                                onClick={nextTestimonial}
                                className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center"
                            >
                                <ChevronRight className="text-red-600" />
                            </button>
                        </div> */}

                        {/* Dots */}
                        <div className="absolute z-20 right-10  bottom-8 flex justify-center gap-2 mt-4">
                           
                            {testimonials.map((_, i) => (
                                <button
                                    aria-label="Dots testimonial"
                                    key={i}
                                    onClick={() => {
                                        setCurrentTestimonial(i);
                                        resetVideoState();
                                    }}
                                    className={`h-2 rounded-full ${i === currentTestimonial ? "w-2 bg-red-600" : "w-2 bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>


                    </div>
                </div>
            </div>

            {/* ===================== VIDEO POPUP MODAL ====================== */}
            {openModal && (
                <div className="fixed  inset-0 bg-black/70 flex items-center justify-center z-[9999]">
                    <div className="bg-black rounded-2xl p-4 relative max-w-3xl w-full">

                        {/* Close Button */}
                        <button
                            aria-label="Open Modal"
                            className="absolute -top-10 right-0 text-white text-3xl"
                            onClick={() => {
                                setOpenModal(false);
                                setModalPlay(false);
                            }}
                        >
                            ✕
                        </button>






                        {/* If YouTube */}
                        {isYoutube(testimonials[currentTestimonial].videoUrl) ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${testimonials[currentTestimonial].videoUrl.split("v=")[1]
                                    }?autoplay=1`}
                                className="w-full h-[400px] rounded-xl"
                                allow="autoplay"
                            ></iframe>
                        ) : (
                            <video
                                src={testimonials[currentTestimonial].videoUrl}
                                className="w-full h-[400px] rounded-xl"
                                autoPlay={modalPlay}
                                controls
                            />
                        )}
                    </div>
                </div>
            )}
            {/* ===================== END MODAL ====================== */}



        </section>
    );
}
