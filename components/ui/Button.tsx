// components/ui/Button.tsx

import React from "react";
import Link from "next/link";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  radius?: Radius;
}

/* Base styles */
const baseStyles =
  "inline-flex items-center justify-center  font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

type Radius = "sm" | "md" | "lg" | "full";

const radiusStyles: Record<Radius, string> = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-xl",
  full: "rounded-full",
};

/* Variants */
const variants: Record<Variant, string> = {
  primary:
    "bg-transparent border-white border text-white font-semibold hover:bg-white hover:text-black  focus:ring-blue-500",
  secondary:
    "bg-[#5556D1] text-white rounded-full focus:ring-gray-400",
  outline:
    "border border-[#453de3] hover:bg-[#6C63FF] hover:text-white",
  ghost:
    "text-gray-700 hover:bg-gray-100",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

/* Sizes */
const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  href,
  radius = "lg",
  onClick,
  type = "button",
  className,
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    radiusStyles[radius || "lg"],
    isDisabled && "opacity-50 cursor-not-allowed",
    className
  );

  const content = (
    <>
      {/* LEFT */}
      {loading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        leftIcon && <span className="mr-2">{leftIcon}</span>
      )}

      {/* TEXT */}
      <span>{children}</span>

      {/* RIGHT */}
      {!loading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </>
  );

  /* Link Mode */
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={isDisabled}
      >
        {content}
      </Link>
    );
  }

  /* Button Mode */
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};