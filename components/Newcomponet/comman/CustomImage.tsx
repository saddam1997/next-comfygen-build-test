import Image from "next/image";
import { useState } from "react";

type CustomImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className:string
};

export default function CustomImage({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 1280px",
  ...props
}: CustomImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      width={1280}
      height={720}
      loading="lazy"
   // ✅ ONLY true for hero image
      sizes={sizes}       // ✅ responsive image loading
      quality={70}        // ✅ optimal balance
      placeholder="empty" // ✅ remove heavy blur
      onError={() =>
        setImgSrc("/images/defaultImage.png") // ✅ local fallback
      }
    />
  );
}















// import { useState } from 'react'
// import Image from 'next/image';
// export default function CustomImage({ alt, ...props }) {
//   const [src, setSrc] = useState(props.src);
//   return (
//     <Image
//       {...props}
//       src={src}
//       alt={alt}
//       onError={() => setSrc('https://www.comfygen.com/images/defaultImage.png')}
//       placeholder="blur"
//       blurDataURL="https://www.comfygen.com/images/defaultImage.png"
//       width={1280}
//       height={720}
//       unoptimized
//       priority={true}
//       quality={75}

//     />
//   );
// }