"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const ContactFrom = dynamic(() => import("../Newcomponet/comman/ContactFrom"), {
  ssr: false,
});

interface TalkToExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TalkToExpertModal({
  isOpen,
  onClose,
}: TalkToExpertModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Wrapper */}
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div
          className="
            relative
            bg-white
            rounded-xl
            shadow-xl
            w-full
            max-w-[1600px]
            2xl:w-9/12
            xl:w-5/6
            lg:w-11/12
          "
        >
          <div className="flex flex-col lg:flex-row lg:h-[600px]">

            {/* LEFT IMAGE / INFO (Desktop only) */}
            <div
              className="
                hidden lg:flex
                w-[40%]
                bg-[url('https://www.comfygen.com/comfygen-images/home/contect-form.webp')]
                bg-cover bg-center
                rounded-l-xl
                p-8
                items-end
              "
            >
              <div className="space-y-4 text-white">
                <Image
                  alt="Comfygen Technologies Logo"
                  src="https://www.comfygen.com/image/comfygen-form-logo.svg"
                  height={40}
                  width={186}
                />

                <p className="text-sm leading-relaxed">
                  Comfygen is a result-oriented IT service provider that builds
                  secure and scalable applications for businesses worldwide.
                </p>

                <div className="flex gap-3 items-center">
                  <SocialIcon
                    href="https://api.whatsapp.com/send?phone=919587867258"
                    icon="https://www.comfygen.com/image/whatsapp-form-icon.svg"
                    label="Chat with Comfygen on WhatsApp"
                  />
                  <SocialIcon
                    href="https://www.facebook.com/comfygen.technologies"
                    icon="https://www.comfygen.com/image/fb-form-icon.svg"
                    label="Visit Comfygen Facebook Page"
                  />
                  <SocialIcon
                    href="https://www.linkedin.com/company/comfygen-private-limited"
                    icon="https://www.comfygen.com/image/linkedin-form-icon.svg"
                    label="Visit Comfygen LinkedIn Page"
                  />
                  <SocialIcon
                    href="https://x.com/Comfygen_Tech"
                    icon="https://www.comfygen.com/image/x-form-icon.svg"
                    label="Follow Comfygen on Twitter"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full lg:w-[60%] flex flex-col">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="text-gray-500 text-3xl hover:text-gray-700"
                >
                  &times;
                </button>
              </div>

              {/* Form */}
              <div className="px-4 pb-6 lg:px-6 overflow-y-auto">
                <ContactFrom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= Helper Component ================= */

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
    <a href={href} target="_blank" aria-label={label}>
      <Image src={icon} alt={label} width={40} height={40} />
    </a>
  );
}
