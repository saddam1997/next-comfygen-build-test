import { useState } from 'react'
import Image from 'next/image';
export default function CustomImage({ alt, ...props }) {
  const [src, setSrc] = useState(props.src);
  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setSrc('https://www.comfygen.com/images/defaultImage.png')}
      placeholder="blur"
      blurDataURL="https://www.comfygen.com/images/defaultImage.png"
      width={1280}
      height={720}
      unoptimized
      priority={true}
      quality={75}

    />
  );
}