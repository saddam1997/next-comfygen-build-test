import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface CommonImageProps extends ImageProps {
  fallbackSrc?: string;
  priorityLoad?: boolean; // if true → LCP image
}

export default function CommonImage({
  src,
  alt,
  width,
  height,
  fallbackSrc = "/fallback.webp",
  priorityLoad = false,
  placeholder = "blur",
  blurDataURL,
  ...rest
}: CommonImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
  
      // onError={() => setImgSrc(fallbackSrc)}
      sizes="100vw"
      quality={75}
    />
  );
}
