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

  const isYoutube = (url:any) =>
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
        "https://www.youtube.com/watch?v=yn2dsJOjfQQ",
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

  const formatTime = (seconds:any) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center lg:p-8 p-2">
      <div className="lg:max-w-7xl w-full bg-white rounded-3xl shadow-2xl p-4 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 ">
          {/* Left Column */}
          <div className="space-y-8 mt-5">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-900 ">
             Stories from Our Happy Clients
            </h2>

            <div className="space-y-3">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal-600" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
              {!isPlaying ? (
                <div className="relative cursor-pointer" onClick={handlePlayVideo}>
                  <img
                    src={testimonials[currentTestimonial].thumbnail}
                    className="md:w-full lg:h-[400px]  object-contain min-w-full"
                    alt="thumbnail"
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

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center"
              >
                <ChevronLeft className="text-red-600" />
              </button>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center"
              >
                <ChevronRight className="text-red-600" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentTestimonial(i);
                    resetVideoState();
                  }}
                  className={`h-2 rounded-full ${i === currentTestimonial ? "w-8 bg-red-600" : "w-2 bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== VIDEO POPUP MODAL ====================== */}
      {openModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">
          <div className="bg-black rounded-2xl p-4 relative max-w-3xl w-full">

            {/* Close Button */}
            <button
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

    </div>
  );
}
