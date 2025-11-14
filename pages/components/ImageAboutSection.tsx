import Image from "next/image";
import React from "react";

const ImageAboutSection = ({
  src = "",
  alt = "",
  width = 600,
  height = 360,
  className = "",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"        // Lazy loading
      decoding="async"      // Faster decode
      quality={70}          // Smaller size = better LCP
      sizes="(max-width: 768px) 100vw, 600px"
      className={className}
      priority={false}      // Not LCP image
      unoptimized={false}   // Keep Next.js optimization
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default ImageAboutSection;
