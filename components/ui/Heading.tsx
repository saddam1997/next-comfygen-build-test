import React from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  as?: HeadingLevel;        // h1–h6
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  as = 2,
  children,
  className = "",
}: HeadingProps) {
  const Tag = `h${as}` as keyof JSX.IntrinsicElements;

  const baseStyles =
    "font-bold text-gray-900 leading-tight";

  const sizeStyles: Record<HeadingLevel, string> = {
    1: "text-xl sm:text-xl lg:text-2xl xl:text-3xl",
    2: "text-2xl sm:text-3xl lg:text-4xl",
    3: "text-xl sm:text-2xl lg:text-3xl",
    4: "text-lg sm:text-xl lg:text-2xl",
    5: "text-base sm:text-lg",
    6: "text-sm sm:text-base",
  };

  return (
    <Tag className={`${baseStyles} ${sizeStyles[as]} ${className}`}>
      {children}
    </Tag>
  );
}
