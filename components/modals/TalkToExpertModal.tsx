"use client";

import { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ContactFrom = dynamic(
  () => import("../Newcomponet/comman/ContactFrom"),
  { ssr: false }
);

interface TalkToExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TalkToExpertModal({
  isOpen,
  onClose,
}: TalkToExpertModalProps) {
  /* ================= Scroll Lock + ESC Close ================= */
  // useEffect(() => {
  //   if (!isOpen) return;

  //   document.body.style.overflow = "hidden";

  //   const handleEsc = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") onClose();
  //   };

  //   window.addEventListener("keydown", handleEsc);

  //   return () => {
  //     document.body.style.overflow = "auto";
  //     window.removeEventListener("keydown", handleEsc);
  //   };
  // }, [isOpen, onClose]);

  useEffect(() => {
  if (!isOpen) return;

  // Save current scroll position
  const scrollY = window.scrollY;

  // Lock scroll properly
  document.documentElement.style.position = "fixed";
  document.documentElement.style.top = `-${scrollY}px`;
  document.documentElement.style.left = "0";
  document.documentElement.style.right = "0";

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  window.addEventListener("keydown", handleEsc);

  return () => {
    // Restore scroll
    const top = document.documentElement.style.top;

    document.documentElement.style.position = "";
    document.documentElement.style.top = "";
    document.documentElement.style.left = "";
    document.documentElement.style.right = "";

    window.scrollTo(0, parseInt(top || "0") * -1);

    window.removeEventListener("keydown", handleEsc);
  };
}, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 "
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10  max-h-[90vh] w-[1179px] bg-white rounded-2xl shadow-2xl overflow-y-auto">
        <div className="flex flex-col lg:flex-row lg:h-[600px]">

          {/* ================= LEFT IMAGE SECTION ================= */}
          <div className="relative hidden lg:flex w-[40%] overflow-hidden">
            {/* Background Image */}
            <Image
              src="https://www.comfygen.com/comfygen-images/home/contect-form.webp"
              alt="Contact Background"
              fill
              sizes="(max-width: 1024px) 0vw, 40vw"
              className="object-cover"
            />

            {/* Dark Overlay Content */}
            <div className="relative z-10 flex flex-col justify-end p-8 w-full  text-white">
              <div className="lg:space-y-4">
                <Image
                  alt="Comfygen Technologies Logo"
                  src="https://www.comfygen.com/image/comfygen-form-logo.svg"
                  height={40}
                  width={186}
                />

                <p className="lg:text-sm text-xs leading-relaxed">
                  Comfygen is a result-oriented IT service provider that builds
                  secure and scalable applications for businesses worldwide.
                </p>

                <div className="flex gap-3 items-center">
                  <SocialIcon
                    href="https://api.whatsapp.com/send?phone=919587867258"
                    icon="https://www.comfygen.com/image/whatsapp-form-icon.svg"
                    label="Chat on WhatsApp"
                  />
                  <SocialIcon
                    href="https://www.facebook.com/comfygen.technologies"
                    icon="https://www.comfygen.com/image/fb-form-icon.svg"
                    label="Facebook"
                  />
                  <SocialIcon
                    href="https://www.linkedin.com/company/comfygen-private-limited"
                    icon="https://www.comfygen.com/image/linkedin-form-icon.svg"
                    label="LinkedIn"
                  />
                  <SocialIcon
                    href="https://x.com/Comfygen_Tech"
                    icon="https://www.comfygen.com/image/x-form-icon.svg"
                    label="Twitter"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM SECTION ================= */}
          <div className="w-full lg:w-[60%] flex flex-col bg-white">

            {/* Close Button */}
            <div className=" absolute z-20 right-0 flex justify-end p-4">
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-gray-500 text-3xl hover:text-gray-800 transition"
              >
                &times;
              </button>
            </div>

            {/* Form Scroll Area */}
            <div className="px-4 pb-6 lg:px-8 lg:py-8 overflow-y-auto">
              <ContactFrom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= Social Icon Component ================= */

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Image
        src={icon}
        alt={label}
        width={40}
        height={40}
        className="hover:scale-110 transition"
      />
    </a>
  );
}
