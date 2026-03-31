import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function ContactUs() {
    return (
        <footer className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white px-6 md:px-10 lg:px-20 py-12 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Contact Us */}
                <div>
                    <h2 className="text-xl font-bold tracking-widest uppercase mb-6">
                        Contact Us
                    </h2>

                    <div className="flex flex-col gap-5">
                        <div className="flex items-start gap-3">
                            <MdLocationOn className="text-2xl mt-1 shrink-0" />
                            <div className="text-sm leading-relaxed">
                                <p className="font-semibold text-base">Comfygen Technologies</p>
                                <p className="text-white font-semibold">
                                    A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar,
                                    Nirmohi Nagar <br />
                                    Jaipur, Rajasthan 302019, India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdPhone className="text-2xl shrink-0 " />
                            <a href="tel:+919358911121" className="text-sm hover:underline font-semibold">
                                +91 9587867258
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdEmail className="text-2xl shrink-0 " />
                            <a href="mailto:sales@comfygen.com" className="text-sm hover:underline font-semibold">
                                sales@comfygen.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Career */}
                <div>
                    <h2 className="text-xl font-semibold mb-6">Career</h2>

                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <MdPhone className="text-2xl shrink-0" />
                            <a href="tel:+919829109153" className="text-sm hover:underline font-semibold">
                                +91 9587867258
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <MdEmail className="text-2xl shrink-0" />
                            <a href="mailto:hr@comfygen.com" className="text-sm hover:underline font-semibold">
                                 hr@comfygen.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Links (Optional but recommended) */}
                {/* <div>
      <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
      <ul className="flex flex-col gap-3 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>
    </div> */}

                {/* Social */}
                <div>
                    <h2 className="text-xl font-semibold mb-6">Follow Us</h2>

                    <div className="flex flex-wrap gap-3">
                        {[
                            { icon: <FaFacebookF />,   href:"https://www.facebook.com/comfygen.technologies"},
                            { icon: <FaXTwitter />, href: "https://x.com/Comfygen_Tech" },
                            { icon: <FaInstagram />, href: "https://www.instagram.com/comfygen_technologies" },
                            { icon: <FaThreads />, href: "https://www.threads.com/@comfygen_technologies" },
                            { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/comfygen-technologies" },
                            { icon: <FaYoutube />, href: "https://www.youtube.com/@Comfygentechnologies" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition duration-300"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom */}
            {/* <div className="hidden border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/80">
                © {new Date().getFullYear()} Comfygen Pvt Ltd. All rights reserved.
            </div> */}
        </footer>
    );
}