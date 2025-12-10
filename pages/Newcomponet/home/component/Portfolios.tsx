"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

import Image from "next/image";
import { useState, useRef } from "react";

// Helper hook for the scrolling animation
const useContinuousScroll = (
  isPaused,
  direction = "left",
  duration = 25,
  gap = 16
) => {
  const x = useMotionValue(0); 
  const ref = useRef(null);
  const totalDuration = duration * 1000;
  const speed = 100 / (duration / 2); 

  useAnimationFrame((time) => {
    if (ref.current && !isPaused) {
      const contentWidth = ref.current.scrollWidth / 2;
      

      const progress = (time % totalDuration) / totalDuration;

      let targetX = contentWidth * progress;

      if (direction === "left") {
        targetX = -targetX;
      } else {

        targetX = -contentWidth + targetX;
      }

      x.set(targetX);
    }
  });
  
  return { x, ref };
};

export default function Portfolios() {
  const [pauseTop, setPauseTop] = useState(false);
  const [pauseBottom, setPauseBottom] = useState(false);

  const images = [
    "/portfolio/image1.png",
    "/portfolio/Frame2.png",
    "/portfolio/image3.png",
    "/portfolio/Frame4.png",
  ];

  const { x: xTop, ref: refTop } = useContinuousScroll(pauseTop, "left", 30); 
  const { x: xBottom, ref: refBottom } = useContinuousScroll(pauseBottom, "right", 30);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gray-50 py-16">

      {/* Header (Keep your existing Header code) */}
      <div
        className="container mx-auto mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.03, textShadow: "0px 0px 12px rgba(0,0,0,0.15)" }}

          className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Web & App Development Portfolio
        </motion.h2>
        <p className="text-lg text-gray-600 mx-auto max-w-4xl">
          Explore our selection of accomplished projects that highlight our proficiency...
        </p>
      </div>

      {/* ---------------- TOP SLIDER (LEFT → RIGHT) ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overflow-hidden w-full mb-4"
        onMouseEnter={() => setPauseTop(true)}
        onMouseLeave={() => setPauseTop(false)}
      >
        <motion.div
          style={{ x: xTop }} 
          ref={refTop} 
          className="flex items-center gap-4 whitespace-nowrap w-[200%]" 
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className={`h-[400px] cursor-pointer ${src.includes("Frame") ? "min-w-[197px]" : "min-w-[667px]"
                } rounded-2xl shrink-0`} 
            >
              <Image
                src={src}
                width={640}
                height={340}
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ---------------- BOTTOM SLIDER (RIGHT → LEFT) ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="overflow-hidden w-full"
        onMouseEnter={() => setPauseBottom(true)}
        onMouseLeave={() => setPauseBottom(false)}
      >
        <motion.div
          style={{ x: xBottom }}
          ref={refBottom}
          className="flex items-center gap-4 whitespace-nowrap w-[200%]" 
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className={`h-[400px] cursor-pointer ${src.includes("Frame") ? "min-w-[197px]" : "min-w-[667px]"
                } rounded-2xl shrink-0`} 
            >
              <Image
                src={src}
                width={640}
                height={340}
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>


    </motion.div>
  );
}



// "use client";
// import { motion } from "framer-motion";

// import Image from "next/image";
// import { useState } from "react";

// export default function Portfolios() {
//   const [pauseTop, setPauseTop] = useState(false);
//   const [pauseBottom, setPauseBottom] = useState(false);

//   const images = [
//     "/portfolio/image1.png",
//     "/portfolio/Frame2.png",
//     "/portfolio/image3.png",
//     "/portfolio/Frame4.png",
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className="bg-gray-50 py-16">

//       {/* Header */}
//       <div
//         className="container mx-auto mb-16 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           whileHover={{ scale: 1.03, textShadow: "0px 0px 12px rgba(0,0,0,0.15)" }}

//           className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
//           Explore Our Web & App Development Portfolio
//         </motion.h2>
//         <p className="text-lg text-gray-600 mx-auto max-w-4xl">
//           Explore our selection of accomplished projects that highlight our proficiency...
//         </p>
//       </div>

//       {/* ---------------- TOP SLIDER (LEFT → RIGHT) ---------------- */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="overflow-hidden w-full mb-4"
//         onMouseEnter={() => setPauseTop(true)}
//         onMouseLeave={() => setPauseTop(false)}
//       >
//         <div
//           className={`flex items-center gap-4 whitespace-nowrap ${pauseTop ? "paused" : "animate-scroll-left"
//             }`}
//         >
//           {[...images, ...images].map((src, i) => (
//             <div
//               key={i}
//               className={`h-[400px] cursor-pointer ${src.includes("Frame") ? "min-w-[197px]" : "min-w-[667px]"
//                 } rounded-2xl`}
//             >
//               <Image
//                 src={src}
//                 width={640}
//                 height={340}
//                 alt=""
//                 className="w-full h-full rounded-2xl object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* ---------------- BOTTOM SLIDER (RIGHT → LEFT) ---------------- */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="overflow-hidden w-full"
//         onMouseEnter={() => setPauseBottom(true)}
//         onMouseLeave={() => setPauseBottom(false)}
//       >
//         <div
//           className={`flex items-center gap-4 whitespace-nowrap ${pauseBottom ? "paused" : "animate-scroll-right"
//             }`}
//         >
//           {[...images, ...images].map((src, i) => (
//             <div
//               key={i}
//               className={`h-[400px] cursor-pointer ${src.includes("Frame") ? "min-w-[197px]" : "min-w-[667px]"
//                 } rounded-2xl`}
//             >
//               <Image
//                 src={src}
//                 width={640}
//                 height={340}
//                 alt=""
//                 className="w-full h-full rounded-2xl object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         .animate-scroll-left {
//           animation: scroll-left 25s linear infinite;
//         }
//         .animate-scroll-right {
//           animation: scroll-right 25s linear infinite;
//         }
//         .paused {
//           animation-play-state: paused !important;
//         }

//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes scroll-right {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </motion.div>
//   );
// }
