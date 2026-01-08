"use client";

import Image from "next/image";

export default function HeroBgImage() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/Rectangle 331.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover pointer-events-none"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
