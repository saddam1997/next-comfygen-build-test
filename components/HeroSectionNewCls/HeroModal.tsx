

import dynamic from "next/dynamic";
import Image from "next/image";
// ✅ form lazy load
const ContactFrom = dynamic(() => import("./ContactFrom"), {
  ssr: false,
  loading: () => <div className="h-[300px]" />, // prevent CLS
});

export default function TalkToExpertModal({isOpen, onClose,}:any) {
    if (!isOpen) return null;


    return (
       <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
    
            {/* Overlay */}
            <div
                className="absolute bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            {/* CENTER WRAPPER (VERY IMPORTANT) */}
            <div className="relative z-10 w-full flex justify-center items-center">
                {/* MODAL BOX */}
                <div className={`w-full relative max-w-[950px] lg:h-[600px] h-full bg-white rounded-xl shadow-xl overflow-hidden transform    transition-all duration-300 ${isOpen ? "scale-100" : "scale-95"}`}>
                    <div className="flex flex-col lg:flex-row h-full">
                       {/* LEFT IMAGE */}
                        <div className="relative hidden lg:block w-[45%] h-full">
                            <Image
                                src="https://www.comfygen.com/comfygen-images/home/form.webp"
                                alt="Contact"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                                className="object-cover "
                                priority
                            />
                            <div className="absolute bottom-0 z-10 flex flex-col justify-end p-8 w-full  text-white">
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

                                        <SocialIcon
                                            href="https://www.instagram.com/comfygen_technologies"
                                            icon="https://www.comfygen.com/comfygen-images/icons/image.webp"
                                            label="Instagram"
                                        />

                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* RIGHT FORM */}
                        <div className="w-full lg:w-[55%] h-full flex flex-col relative">

                            {/* CLOSE BUTTON */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 text-2xl text-gray-500 z-10"
                            >
                                ✕
                            </button>

                            {/* CONTENT */}
                            <div className="h-full">
                                <div className="lg:p-8 p-0">
                                    <ContactFrom />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

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
                className="hover:scale-110 transition h-auto w-auto rounded-md"
            />
        </a>
    );
}
