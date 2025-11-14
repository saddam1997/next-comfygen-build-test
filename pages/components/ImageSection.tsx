import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface LazyImageProps extends ImageProps {
  fallbackSrc?: string;
}

export default function ImageSection({
  src,
  alt,
  fallbackSrc = "/fallback.webp",
  ...props
}: LazyImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL="/blur-placeholder.webp"
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
