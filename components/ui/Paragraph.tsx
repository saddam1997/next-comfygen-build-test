import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Paragraph({
  children,
  className = "",
  size = "md",
}: ParagraphProps) {
  const sizeStyles = {
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl",
  };

  return (
    <p
      className={`
        text-gray-700
        leading-relaxed
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </p>
  );
}
