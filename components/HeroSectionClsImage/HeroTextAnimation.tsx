"use client";

import { useEffect, useState } from "react";

const texts = [
  "Microsoft Power Platform",
  "Digital Transformation",
  "Business Automation",
  "DATA & AI",
  "Cloud Implementation",
];

export default function HeroTextAnimation() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const current = texts[index];

    const typing = setInterval(() => {
      setText(current.slice(0, i + 1));
      i++;

      if (i === current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <p className="text-blue-400 text-lg font-medium">
      {text}
    </p>
  );
}