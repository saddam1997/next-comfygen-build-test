// app/components/YouTubeTestimonials.tsx
// A Next.js component that displays YouTube testimonial videos with thumbnails
// All video URLs are clearly visible in the source code as requested

import { Play, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Data is embedded directly in the component source code as requested
// All video URLs are visible here in the source view
const testimonialsData = {
  benefits: [
    "Dedicated and accountable development resources",
    "Cost-efficient development with flexible pricing models",
    "Fast team onboarding with no long-term contract lock-ins",
    "Easy team scaling based on project needs",
    "High client retention through consistent delivery",
    "Strict NDA and data security compliance",
    "Clear, reliable communication at every stage"
  ],
  testimonials: [
    {
      // Video URL: https://www.youtube.com/watch?v=kedGnt6T-DI
      videoUrl: "https://www.youtube.com/watch?v=kedGnt6T-DI",
      thumbnail: "https://www.comfygen.com/comfygen-images/comfygen/Nitesh Rajput.webp",
      clientName: "Nitesh Rajput",
      company: "Book My Tutor",
      // Extract video ID from URL for embedding: kedGnt6T-DI
      videoId: "kedGnt6T-DI"
    },
    {
      // Video URL: https://www.youtube.com/watch?v=-AkHiORQTjA
      videoUrl: "https://www.youtube.com/watch?v=-AkHiORQTjA",
      thumbnail: "https://www.comfygen.com/comfygen-images/comfygen/Sayead Shadab Arif.webp",
      clientName: "Sayead Shadab Arif",
      company: "Froge Flex",
      // Extract video ID from URL for embedding: -AkHiORQTjA
      videoId: "-AkHiORQTjA"
    }
  ]
};

// Helper function to extract YouTube video ID from various URL formats
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?]+)/,
    /(?:youtube\.com\/embed\/)([^/]+)/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function YouTubeTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Client Success Stories
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Hear what our clients have to say about their experience working with us
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonialsData.testimonials.map((testimonial, index) => {
            const videoId = testimonial.videoId || getYouTubeVideoId(testimonial.videoUrl);
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                data-testimonial-index={index}
                data-client-name={testimonial.clientName}
                data-video-url={testimonial.videoUrl}
                data-thumbnail-url={testimonial.thumbnail}
              >
                {/* Video URL visible in source code - prominently displayed for SEO/visibility */}
                <div className="hidden bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <p className="text-xs text-gray-600 font-mono truncate">
                    <span className="font-semibold">📹 Video URL:</span> {testimonial.videoUrl}
                  </p>
                  <p className="text-xs text-gray-500 font-mono truncate mt-1">
                    <span className="font-semibold">🖼️ Thumbnail URL:</span> {testimonial.thumbnail}
                  </p>
                </div>
                
                {/* Video Player Section */}
                {activeVideo === testimonial.videoId ? (
                  <div className="relative">
                    <div className="aspect-video">
                      <iframe
                        src={embedUrl}
                        title={`${testimonial.clientName} testimonial video`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-2 right-2 bg-black/70 hover:bg-black rounded-full p-1 transition-colors"
                      aria-label="Close video"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                ) : (
                  /* Video Thumbnail with Play Button */
                  <button
                    onClick={() => setActiveVideo(testimonial.videoId)}
                    className="relative block w-full group cursor-pointer"
                    aria-label={`Play ${testimonial.clientName} testimonial video from ${testimonial.company}`}
                  >
                    <Image
               
                    width={800}
                    height={450}
                      src={testimonial.thumbnail}
                      alt={`${testimonial.clientName} from ${testimonial.company} testimonial video`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </button>
                )}
                
                {/* Client Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.clientName}
                  </h3>
                  <p className="text-indigo-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Benefits Section - Also visible in source */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Our Clients Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div> */}
        
        {/* Source Note - All URLs are explicitly visible in the source code */}
        <div className="mt-12 hidden text-center text-xs text-gray-500 border-t pt-6">
          <div className="font-mono space-y-1">
            <p className="font-semibold text-gray-600">📋 All Video URLs (Visible in Page Source):</p>
            {testimonialsData.testimonials.map((t, i) => (
              <p key={i} className="break-all">
                {i + 1}. {t.clientName} ({t.company}): <span className="text-blue-600">{t.videoUrl}</span>
              </p>
            ))}
          </div>
          <p className="mt-3 text-gray-400">
            This component is server-side rendered. All URLs are embedded in the HTML source for maximum visibility.
          </p>
        </div>
      </section>
    </div>
  );
}








// import React, { useState, useRef, useEffect, useCallback } from "react";
// import JSON_DATA from "./stories.json";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Check,
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   Maximize,
//   RotateCcw,
// } from "lucide-react";
// import HeadingTwo from "../ui/HeadingTwo";

// export default function ClientStories() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [showControls, setShowControls] = useState(true);
//   const [openModal, setOpenModal] = useState(false);
//   const [modalPlay, setModalPlay] = useState(false);
//   const [touchStartX, setTouchStartX] = useState(0);
//   const [touchEndX, setTouchEndX] = useState(0);

//   const videoRef = useRef<HTMLVideoElement>(null);
//   const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const swipeThreshold = 50; // minimum distance for swipe

//   const isYoutube = (url: string) =>
//     url.includes("youtube.com") || url.includes("youtu.be");


//   // Touch swipe handlers
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEndX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStartX || !touchEndX) return;
    
//     const distance = touchStartX - touchEndX;
    
//     // Left swipe
//     if (distance > swipeThreshold) {
//       nextTestimonial();
//     }
    
//     // Right swipe
//     if (distance < -swipeThreshold) {
//       prevTestimonial();
//     }
    
//     // Reset touch values
//     setTouchStartX(0);
//     setTouchEndX(0);
//   };

//   // MP4 Events
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video || isYoutube(JSON_DATA?.testimonials[currentTestimonial].videoUrl)) return;

//     const updateProgress = () => {
//       const progressPercent = (video.currentTime / video.duration) * 100;
//       setProgress(progressPercent);
//       setCurrentTime(video.currentTime);
//     };

//     const handleLoadedMetadata = () => {
//       setDuration(video.duration);
//     };

//     video.addEventListener("timeupdate", updateProgress);
//     video.addEventListener("loadedmetadata", handleLoadedMetadata);

//     return () => {
//       video.removeEventListener("timeupdate", updateProgress);
//       video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//     };
//   }, [currentTestimonial, isPlaying]);

//   const nextTestimonial = useCallback(() => {
//     setCurrentTestimonial((prev) => (prev + 1) % JSON_DATA?.testimonials.length);
//     resetVideoState();
//   }, [JSON_DATA?.testimonials.length]);

//   const prevTestimonial = useCallback(() => {
//     setCurrentTestimonial((prev) => (prev - 1 + JSON_DATA?.testimonials.length) % JSON_DATA?.testimonials.length);
//     resetVideoState();
//   }, [JSON_DATA?.testimonials.length]);

//   const resetVideoState = () => {
//     setIsPlaying(false);
//     setProgress(0);
//     setCurrentTime(0);
//   };

//   const handlePlayVideo = () => {
//     setOpenModal(true);
//     setModalPlay(true);
//     setIsPlaying(false);

//     if (!isYoutube(JSON_DATA?.testimonials[currentTestimonial].videoUrl)) {
//       if (videoRef.current) {
//         videoRef.current.pause();
//         videoRef.current.currentTime = 0;
//       }
//     }
//   };

//   const togglePlayPause = () => {
//     if (isYoutube(JSON_DATA?.testimonials[currentTestimonial].videoUrl)) return;

//     if (isPlaying) {
//       videoRef.current?.pause();
//       setIsPlaying(false);
//     } else {
//       videoRef.current?.play();
//       setIsPlaying(true);
//     }
//   };

//   const toggleMute = () => {
//     if (isYoutube(JSON_DATA?.testimonials[currentTestimonial].videoUrl)) return;

//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (isYoutube(JSON_DATA?.testimonials[currentTestimonial].videoUrl)) return;

//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const percentage = x / rect.width;
//     const newTime = percentage * duration;

//     if (videoRef.current) {
//       videoRef.current.currentTime = newTime;
//       setCurrentTime(newTime);
//       setProgress(percentage * 100);
//     }
//   };

//   const handleRestart = () => {
//     if (isYoutube(JSON_DATA?.testimonials[currentTestimonial].videoUrl)) return;

//     if (videoRef.current) {
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleFullscreen = () => {
//     if (videoRef.current && videoRef.current.requestFullscreen) {
//       videoRef.current.requestFullscreen();
//     }
//   };

//   const formatTime = (seconds: number) => {
//     if (!seconds) return "0:00";
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins}:${secs.toString().padStart(2, "0")}`;
//   };

//   // LCP Optimization: Preload first thumbnail
//   useEffect(() => {
//     if (JSON_DATA?.testimonials[0]?.thumbnail) {
//       const img = new Image();
//       img.src = JSON_DATA?.testimonials[0].thumbnail;
//     }
//   }, []);

//   return (
//     <div className=" flex items-center justify-center p-2 sm:p-4 md:p-8">
//       <div className="max-w-7xl w-full bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl p-3 sm:p-6 md:p-8 lg:p-16">
//         <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
//           {/* Left Column */}
//           <div className="space-y-6 sm:space-y-8">
//                 <HeadingTwo color={"black"} text="Stories from Our Happy Clients" />
           

//             <div className="space-y-2 sm:space-y-3">
//               {JSON_DATA?.benefits.map((benefit, i) => (
//                 <div key={i} className="flex gap-2 sm:gap-3">
//                   <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-100 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
//                     <Check className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
//                   </div>
//                   <p className="text-sm sm:text-base text-gray-700">{benefit}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Video */}
//           <div className="relative">
//             <div 
//               ref={containerRef}
//               className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl bg-black"
//               onTouchStart={handleTouchStart}
//               onTouchMove={handleTouchMove}
//               onTouchEnd={handleTouchEnd}
//             >
//               {!isPlaying ? (
//                 <div 
//                   className="relative cursor-pointer" 
//                   onClick={handlePlayVideo}
//                   role="button"
//                   aria-label="Play video"
//                 >
//                   <img
//                     src={JSON_DATA?.testimonials[currentTestimonial].thumbnail}
//                     className="w-full h-auto aspect-video object-cover"
//                     alt={`${JSON_DATA?.testimonials[currentTestimonial].clientName} testimonial`}
//                     loading={currentTestimonial === 0 ? "eager" : "lazy"}
//                     width={800}
//                     height={450}
//                   />

//                   <div className="absolute inset-0 flex items-center justify-center bg-black/10">
//                     <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl hover:bg-red-700 transition-colors">
//                       <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-0.5 sm:ml-1" />
//                     </div>
//                   </div>
//                 </div>
//               ) : isYoutube(JSON_DATA?.testimonials[currentTestimonial].videoUrl) ? (
//                 <div className="relative w-full aspect-video">
//                   <iframe
//                     src={`https://www.youtube.com/embed/${JSON_DATA?.testimonials[currentTestimonial].videoUrl.split("v=")[1]}?autoplay=1`}
//                     className="absolute inset-0 w-full h-full"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     title="YouTube video player"
//                     loading="lazy"
//                   />
//                 </div>
//               ) : (
//                 <div className="relative">
//                   <video
//                     ref={videoRef}
//                     src={JSON_DATA?.testimonials[currentTestimonial].videoUrl}
//                     className="w-full aspect-video object-cover"
//                     onClick={togglePlayPause}
//                     onEnded={() => setIsPlaying(false)}
//                     playsInline
//                     preload="metadata"
//                   />

//                   {/* Custom Controls (MP4 only) - Hidden on mobile, visible on tablet+ */}
//                   <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
//                     <div
//                       className="w-full h-1 sm:h-1.5 bg-white/30 rounded cursor-pointer mb-2 sm:mb-3"
//                       onClick={handleProgressClick}
//                       role="progressbar"
//                       aria-label="Video progress"
//                     >
//                       <div
//                         className="h-full bg-red-600 rounded"
//                         style={{ width: `${progress}%` }}
//                       />
//                     </div>

//                     <div className="flex items-center justify-between text-white">
//                       <div className="flex items-center gap-2 sm:gap-3">
//                         <button 
//                           onClick={togglePlayPause}
//                           className="p-1 sm:p-2"
//                           aria-label={isPlaying ? "Pause video" : "Play video"}
//                         >
//                           {isPlaying ? (
//                             <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
//                           ) : (
//                             <Play className="w-4 h-4 sm:w-5 sm:h-5" />
//                           )}
//                         </button>

//                         <button 
//                           onClick={handleRestart}
//                           className="p-1 sm:p-2"
//                           aria-label="Restart video"
//                         >
//                           <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
//                         </button>

//                         <button 
//                           onClick={toggleMute}
//                           className="p-1 sm:p-2"
//                           aria-label={isMuted ? "Unmute video" : "Mute video"}
//                         >
//                           {isMuted ? (
//                             <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
//                           ) : (
//                             <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
//                           )}
//                         </button>

//                         <span className="text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
//                           {formatTime(currentTime)} / {formatTime(duration)}
//                         </span>
//                       </div>

//                       <button 
//                         onClick={handleFullscreen}
//                         className="p-1 sm:p-2"
//                         aria-label="Enter fullscreen"
//                       >
//                         <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Navigation Buttons - Hidden on mobile/tablet, visible on desktop */}
//             <div className="hidden lg:flex justify-center gap-4 mt-6">
//               <button
//                 aria-label="Previous testimonial"
//                 onClick={prevTestimonial}
//                 className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
//               >
//                 <ChevronLeft className="text-red-600 w-5 h-5" />
//               </button>

//               <button
//                 aria-label="Next testimonial"
//                 onClick={nextTestimonial}
//                 className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
//               >
//                 <ChevronRight className="text-red-600 w-5 h-5" />
//               </button>
//             </div>


            
           
//           </div>
//         </div>
//       </div>

//       {/* Video Modal */}
//       {openModal && (
//         <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4">
//           <div className="relative w-full max-w-4xl">
//             <button
//               aria-label="Close modal"
//               className="absolute -top-10 right-0 sm:-right-10 text-white text-2xl sm:text-3xl hover:text-gray-300 transition-colors"
//               onClick={() => {
//                 setOpenModal(false);
//                 setModalPlay(false);
//               }}
//             >
//               ✕
//             </button>

//             {isYoutube(JSON_DATA?.testimonials[currentTestimonial].videoUrl) ? (
//               <div className="relative w-full aspect-video">
//                 <iframe
//                   src={`https://www.youtube.com/embed/${JSON_DATA?.testimonials[currentTestimonial].videoUrl.split("v=")[1]}?autoplay=1`}
//                   className="w-full h-full rounded-lg sm:rounded-xl"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   title="YouTube video player"
//                 />
//               </div>
//             ) : (
//               <video
//                 src={JSON_DATA?.testimonials[currentTestimonial].videoUrl}
//                 className="w-full h-auto max-h-[80vh] rounded-lg sm:rounded-xl"
//                 autoPlay={modalPlay}
//                 controls
//                 playsInline
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }