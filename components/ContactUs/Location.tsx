import Image from "next/image";
import dynamic from "next/dynamic";

import { MapPin, Phone } from "lucide-react";


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

const Location = () => (
  <section>
  <div className="h-full bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 px-4 sm:px-6 lg:px-8 py-8">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-10 sm:mb-12">
        {/* <h2 className="lg:text-4xl text-xl font-semibold text-white mb-8">
          Contact Us Anytime For Quick Assistance
        </h2> */}

        {/* Top Contact Info */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          
          
          <a
            href="tel:9587867258"
            className="flex items-center gap-4 text-white md:justify-center justify-start"
          >
            <Image src="https://www.comfygen.com/image/call-Location-icon.svg" alt="" height={56} width={55} loading="lazy" />
            <div className="text-left">
              <span className="text-base block">Phone Number</span>
              <p className="lg:text-lg text-base font-semibold">+91 9587867258</p>
            </div>
          </a>

          
          <a
            href="mailto:sales@comfygen.com"
            className="flex items-center gap-4 text-white md:justify-center justify-start"
          >
            <Image src="https://www.comfygen.com/image/mail-form-icon.svg" alt="" height={56} width={55} loading="lazy" />
            <div className="text-left">
              <span className="text-base block">Email Address</span>
              <p className="text-lg font-semibold">sales@comfygen.com</p>
            </div>
          </a>

        
          <a
            href="https://www.comfygen.com"
            className="flex items-center gap-4 text-white md:justify-center justify-start"
          >
            <Image src="https://www.comfygen.com/image/site-form-icon.svg" alt="" height={56} width={55} loading="lazy" />
            <div className="text-left">
              <span className="text-base block">Site Address</span>
              <p className="text-lg font-semibold">www.comfygen.com</p>
            </div>
          </a>
        </div> */}

        {/* Social Icons */}
         {/* <div className="flex justify-start md:justify-center  gap-4">
           <div className="flex items-center gap-8 ">
             <button className="rounded-full backdrop-blur-sm hover:bg-white/20 transition text-white">
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
          </div> */}
      </div>

      {/* Main Grid */}
      

        {/* Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 sm:p-6 text-white flex flex-col sm:flex-row gap-6"
            >
              {/* Country */}
              <div className="flex sm:flex-col gap-4 items-center sm:items-start">
                <h3 className="lg:text-[24px] text-base font-semibold">
                  {location.country}
                </h3>

                <Image
                  src={location.img}
                  alt={location.country}
                  width={50}
                  height={50}
                  className="w-20 h-auto sm:w-24"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <p className="lg:text-lg text-sm font-semibold">Phone Number</p>
                    <a href={location.number} className="lg:text-lg text-sm font-semibold">
                      {location.phone}
                    </a>
                  </div>
                </div>

                <a href={location.loction} className="flex gap-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <p className="lg:text-lg text-sm font-semibold opacity-80">
                      Office Location
                    </p>
                    <p className="lg:text-[16px] text-sm">
                      {location.address}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

       
      

    
    </div>
  </div>
</section>

);

export default Location;
