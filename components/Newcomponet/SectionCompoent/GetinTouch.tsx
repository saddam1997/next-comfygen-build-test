import Image from "next/image";
import dynamic from "next/dynamic";

import { MapPin, Phone } from "lucide-react";
const ContactFrom = dynamic(() => import("../comman/ContactFrom"), { ssr: false });

const locations = [
  {
    country: 'INDIA',
    phone: '+91 9587867258',
    number: "tel:9587867258",
    loction: "https://maps.app.goo.gl/ZioMz8iAfPoLJGRz5",
    address: 'A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar, Nirmohi Nagar, Jaipur, Rajasthan 302019',
    img: "https://www.comfygen.com/comfygen-images/comfygen/india-loction.svg"
  },


  {
    country: 'CANADA',
    phone: '+1 579-977-4475',
    number: "tel:579-977-4475",
    loction: "https://maps.app.goo.gl/hTU69XuusSfVET116",
    address: '40 Tuxedo Ct, Toronto, ON M1G 3S7, Canada',
    img: "https://www.comfygen.com/comfygen-images/comfygen/hq-canada.svg"
  },

  {
    country: 'GERMANY',
    phone: '+49 1515 1402200',
    number: "tel:1515 1402200",
    loction: "https://maps.app.goo.gl/nzzVJvVWSJ3xeeaGA",
    address: 'Rhederstraße 34, 53881 Euskirchen, Germany',
    img: "https://www.comfygen.com/comfygen-images/comfygen/india-loction.svg"
  }
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Form = () => (
  <section>
    <div className="h-full bg-gradient-to-br py-8 from-indigo-900 via-indigo-800 to-purple-900 px-4 ">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl text-xl font-semibold text-white mb-8">
            Contact Us Anytime For Quick Assistance
          </h2>

          {/* Top Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-center sm:gap-8 md:gap-16 mb-8 sm:px-36 gap-4 ">
            <div className="flex items-center gap-3 text-white ">
              <a
                href="tel:9587867258"
                className="flex items-center gap-3 cursor-pointer"
              >
                <Image
                  src="https://www.comfygen.com/image/call-form-icon.svg"
                  alt=""
                  height={56}
                  width={55}
                   loading="lazy"
                />
                <div>
                  <span className="text-white text-base flex justify-start">Phone Number</span>
                  <p className="text-white lg:text-lg text-base font-semibold">
                    +91 9587867258
                  </p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3 text-white">
              <a
                href="mailto:sales@comfygen.com"
                className="flex items-center gap-3 cursor-pointer"
              >
                <Image
                  src="https://www.comfygen.com/image/mail-form-icon.svg"
                  alt=""
                  height={56}
                  width={55}
                   loading="lazy"
                />
                <div>
                  <span className="text-white text-base flex justify-start">Email Address</span>
                  <p className="text-white text-lg font-semibold">
                    sales@comfygen.com
                  </p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3 text-white">
              <a
                href="https://www.comfygen.com"
                className="flex items-center gap-3 cursor-pointer"
              >
                <Image
                  src="https://www.comfygen.com/image/site-form-icon.svg"
                  alt="site-form"
                  height={56}
                  width={55}
                   loading="lazy"
                />
                <div>
                  <span className="text-white text-base flex justify-start">Site Address</span>
                  <p className="text-white text-lg font-semibold">
                    www.comfygen.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <button className=" rounded-full backdrop-blur-sm hover:bg-white/20 transition text-white">
              <a
                target="_blank"
                href="https://www.facebook.com/comfygen.technologies"
                className="flex items-center gap-3 cursor-pointer"
                aria-label="Facebook"
              >
                <Image
                  src="https://www.comfygen.com/image/facebook-form-icon.svg"
                  alt="Facebook Logo"
                  height={51}
                  width={50}
                   loading="lazy"
                />
              </a>
            </button>
            <button className=" rounded-full backdrop-blur-sm hover:bg-white/20 transition text-white">
              <a
                target="_blank"
                href="https://www.instagram.com/comfygen_technologies"
                className="flex items-center gap-3 cursor-pointer"
                aria-label="Instagram"
              >
                <Image
                  src="https://www.comfygen.com/image/insta-form-icon.svg"
                  alt="Instagram Logo"
                  height={51}
                  width={50}
                   loading="lazy"
                />
              </a>
            </button>
            <button className=" rounded-full backdrop-blur-sm hover:bg-white/20 transition text-white">
              <a
                target="_blank"
                href="https://x.com/Comfygen_Tech"
                className="flex items-center gap-3 cursor-pointer"
                aria-label="Twitter"
              >
                <Image
                  src="https://www.comfygen.com/image/x-form-icon-img.svg"
                  alt="Twitter Logo"
                  height={51}
                  width={50}
                   loading="lazy"
                />
              </a>
            </button>
            <button className="rounded-full backdrop-blur-sm hover:bg-white/20 transition text-white">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/comfygen-technologies"
                className="flex items-center gap-3 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Image
                  src="https://www.comfygen.com/image/linkedin-form-icon-img.svg"
                  alt="LinkedIn Logo"
                  height={51}
                  width={50}
                   loading="lazy"
                />
              </a>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid items-center sm:grid-cols-2 justify-center  gap-8">
          {/* Left Side - Location Cards */}
          <div className="space-y-10 h-full">
            {locations.map((location, index) => (
              <div key={index} className="bg-white/10 lg:flex flex-cols gap-8 py-6 items-center  backdrop-blur-md rounded-2xl p-6 text-white border border-white/20">
                <div className="flex-col items-start ">

                  <h3 className="lg:text-[24px] text-base font-semibold text-[#FFFFFF]">{location.country}</h3>
                  <div className="text-4xl hidden lg:block ">
                    <div className="">
                      <Image
                        src={location.img}
                        alt={location.country}
                        width={50}
                        height={50}
                        quality={50}
                      
                        className="bg-contain w-28"
                         loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white lg:text-lg text-sm font-semibold">Phone Number</p>
                        <p className="text-white lg:text-lg text-sm font-semibold"><a href={location.number}>{location.phone}</a></p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                     <MapPin className="lg:w-8 lg:h-8 h-5 w-5 mt-1 flex-shrink-0" />
                       <a href={location.loction}>
                        <p className="text-white lg:text-lg text-sm font-semibold opacity-80">Office Location</p>
                        <p className="lg:text-[16px] text-sm">{location.address}</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="h-full bg-white rounded-2xl shadow-2xl ">
            <div className=" ">
              <ContactFrom />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Form;
