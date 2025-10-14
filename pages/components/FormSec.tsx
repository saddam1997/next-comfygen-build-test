// import ContactFrom from "./ContactFrom";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const ContactFrom = dynamic(() => import("./ContactFrom"), { ssr: false });

const Form = () => (
  <section>
    <div
      className="bg-cover relative bg-fixed "
      style={{
        backgroundImage:
          'url("https://www.comfygen.com/image/form-bg-img.webp")',
      }}
    >
      <div className=" lg:py-16 py-10 relative z-40 mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-start">
          <div>
            <h2 className="lg:text-4xl text-3xl text-[#fff] text-start font-semibold">
              Contact us anytime for quick assistance
            </h2>
            <div className="space-y-5 mt-8">
              <a
                href="tel:9587867258"
                className="flex items-center gap-3 cursor-pointer"
              >
                <Image
                  src="https://www.comfygen.com/image/call-form-icon.svg"
                  alt=""
                  height={56}
                  width={55}
                />
                <div>
                  <span className="text-white text-base">Phone Number</span>
                  <p className="text-white text-lg font-semibold">
                    +91 9587867258
                  </p>
                </div>
              </a>
              <a
                href="mailto:sales@comfygen.com"
                className="flex items-center gap-3 cursor-pointer"
              >
                <Image
                  src="https://www.comfygen.com/image/mail-form-icon.svg"
                  alt=""
                  height={56}
                  width={55}
                />
                <div>
                  <span className="text-white text-base">Email Address</span>
                  <p className="text-white text-lg font-semibold">
                    sales@comfygen.com
                  </p>
                </div>
              </a>
              <a
                href="https://www.comfygen.com"
                className="flex items-center gap-3 cursor-pointer"
              >
                <Image
                  src="https://www.comfygen.com/image/site-form-icon.svg"
                  alt="site-form"
                  height={56}
                  width={55}
                />
                <div>
                  <span className="text-white text-base">Site Address</span>
                  <p className="text-white text-lg font-semibold">
                    www.comfygen.com
                  </p>
                </div>
              </a>
            </div>

            {/* <div className="mt-6">
              <h2 className="text-white font-semibold lg:text-xl md:text-lg text-base">
                Social Links
              </h2>
              <div className=" flex justify-start gap-4 mt-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/comfygen"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src="https://www.comfygen.com/image/facebook-form-icon.svg"
                    alt=""
                    height={51}
                    width={50}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/comfygen_/?hl=en"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src="https://www.comfygen.com/image/insta-form-icon.svg"
                    alt=""
                    height={51}
                    width={50}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/comfygentech"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src="https://www.comfygen.com/image/x-form-icon-img.svg"
                    alt=""
                    height={51}
                    width={50}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/comfygen-private-limited"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src="https://www.comfygen.com/image/linkedin-form-icon-img.svg"
                    alt=""
                    height={51}
                    width={50}
                  />
                </a>
              </div>
            </div> */}

            <div className="mt-6">
              <h2 className="text-white font-semibold lg:text-xl md:text-lg text-base">
                Social Links
              </h2>
              <div className=" flex justify-start gap-4 mt-2">
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
                  />
                </a>
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
                  />
                </a>
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
                  />
                </a>
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
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@Comfygentechnologies"
                  className="flex items-center gap-3 cursor-pointer"
                  aria-label="Youtube"
                >
                  <Image
                    src="https://www.comfygen.com/comfygen-images/contactFormIcons/youtubecontact.svg"
                    alt="Youtube Logo"
                    height={51}
                    width={51}
                    style={{ width: "auto", height: "auto" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <ContactFrom />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-14 gap-8 items-start mt-6">
          <div className="bg-[#242424] py-6 px-6 h-full rounded-xl xl:gap-8 gap-4 grid lg:grid-cols-3 grid-cols-1 items-center ">
            <div>
              <Image
                src="https://www.comfygen.com/image/india-icon-img.svg"
                alt="india"
                height={236}
                width={270}
              />
            </div>
            <div className="space-y-5 col-span-2">
              <a href="tel:9587867258" className="flex items-start gap-2">
                <Image
                  src="https://www.comfygen.com/image/call-icon-mapp.svg"
                  alt="call-icon"
                  height={37}
                  width={36}
                />
                <div>
                  <span className="text-white lg:text-base text-sm">
                    Phone Number
                  </span>
                  <p className="text-white lg:text-lg text-base font-semibold">
                    +91 9587867258
                  </p>
                </div>
              </a>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/ZioMz8iAfPoLJGRz5"
                className="flex items-start gap-2"
              >
                <Image
                  src="https://www.comfygen.com/image/location-icon-icon.svg"
                  alt=""
                  height={37}
                  width={36}
                />
                <div>
                  <span className="text-white lg:text-base text-sm">
                    Office Location
                  </span>
                  <p className="text-white lg:text-lg text-base font-semibold">
                    {" "}
                    A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar,
                    Jaipur, Rajasthan 302006
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-[#242424] py-6 px-6 h-full rounded-xl xl:gap-8 gap-4 grid lg:grid-cols-3 grid-cols-1 items-center">
            <div>
              <Image
                src="https://www.comfygen.com/image/canada-location-img.svg"
                alt=""
                height={244}
                width={270}
              />
            </div>
            <div className="space-y-5 lg:col-span-2">
              <a href="tel:579-977-4475" className="flex items-start gap-2">
                <Image
                  src="https://www.comfygen.com/image/call-icon-mapp.svg"
                  alt="call-icon"
                  height={37}
                  width={36}
                />
                <div>
                  <span className="text-white lg:text-base text-sm">
                    Phone Number
                  </span>
                  <p className="text-white lg:text-lg text-base font-semibold">
                    +1 579-977-4475
                  </p>
                </div>
              </a>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/zazMknjBpVCo9xe57"
                className="flex items-start gap-2"
              >
                <Image
                  src="https://www.comfygen.com/image/location-icon-icon.svg"
                  alt=""
                  height={37}
                  width={36}
                />
                <div>
                  <span className="text-white lg:text-base text-sm">
                    Office Location
                  </span>
                  <p className="text-white lg:text-lg text-base font-semibold">
                    40 Tuxedo Ct, Toronto, ON M1G 3S7, Canada
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#fff] lg:py-16 py-10">
      <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
        <div className="grid lg:grid-cols-1 grid-cols-1 space-y-4">
          <div>
            <h2 className="xl:text-4xl text-3xl text-[#0E1F51] text-start font-bold">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-4 pt-4">
            <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300 bg-white">
              <Link
                target="_blank"
                href="https://clutch.co/profile/comfygen"
                passHref={true}
              >
                <Image
                  src="https://www.comfygen.com/img/cluth-logo.webp"
                  alt="Clutch"
                  className="rounded-xl"
                  width={150}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                  unoptimized
                  priority={true}
                  quality={75}
                />
              </Link>
            </div>
            {/* <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
              <Link
                target="_blank"
                href="https://develop4u.co/company/comfygen"
                passHref={true}
              >
                <Image
                  src="https://www.comfygen.com/img/Develop-4u.webp"
                  alt="Developer4"
                  className=" rounded-xl"
                  width={150}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                  unoptimized
                  priority={true}
                  quality={75}
                />
              </Link>
            </div> */}
            <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
              <Link
                target="_blank"
                href="https://www.glassdoor.co.in/Overview/Working-at-Comfygen-EI_IE8613382.11,19.htm"
                passHref={true}
              >
                <Image
                  src="https://www.comfygen.com/img/Glass-door.webp"
                  alt="Glassdoor"
                  className="rounded-xl"
                  width={150}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                  unoptimized
                  priority={true}
                  quality={75}
                />
              </Link>
            </div>
            <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
              <Link
                target="_blank"
                href="https://www.trustpilot.com/review/comfygen.com"
                passHref={true}
              >
                <Image
                  src="https://www.comfygen.com/img/Trust-pilot.webp"
                  alt="Trustpilot"
                  className="rounded-xl"
                  width={150}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                  unoptimized
                  priority={true}
                  quality={75}
                />
              </Link>
            </div>
            <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
              <Link
                target="_blank"
                href="https://www.goodfirms.co/company/comfygen"
                passHref={true}
              >
                <Image
                  src="https://www.comfygen.com/img/good-firmas.webp"
                  alt="Goodfirms"
                  className="rounded-xl"
                  width={150}
                  height={100}
                  style={{ width: "auto", height: "auto" }}
                  unoptimized
                  priority={true}
                  quality={75}
                />
              </Link>
            </div>
            <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
              <Link
                target="_blank"
                href="https://itrate.co/company/comfygen-pvt-ltd"
                passHref={true}
              >
                <Image
                  width={150}
                  height={100}
                  src="https://www.comfygen.com/img/itrate.webp"
                  alt="Goodfirms"
                  className="w-20 rounded-xl "
                  unoptimized
                  priority={true}
                  quality={75}
                />
              </Link>
            </div>
            <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
              <Link
                target="_blank"
                href="https://www.topdevelopers.co/profile/comfygen"
                passHref={true}
              >
                <Image
                  width={150}
                  height={100}
                  src="https://www.comfygen.com/img/topdevelopers-img.webp"
                  alt="topdevelopers"
                  className="w-20 rounded-xl "
                  unoptimized
                  priority={true}
                  quality={75}
                />
              </Link>
            </div>
            <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
              <Link
                target="_blank"
                href="https://www.designrush.com"
                passHref={true}
              >
                <Image
                  width={150}
                  height={100}
                  src="https://www.comfygen.com/image/designrush-img.webp"
                  alt="DesignRush"
                  className="w-20 rounded-xl "
                  unoptimized
                  priority={true}
                  quality={75}
                />
              </Link>
            </div>
            <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
              <Link
                target="_blank"
                href="https://selectedfirms.co/agency/comfygen-private-limited"
                passHref={true}
              >
                <Image
                  width={150}
                  height={100}
                  src="https://www.comfygen.com/img/selectedFirms.webp"
                  alt="Top Mobile App Development Company"
                  className="w-20 rounded-xl "
                  unoptimized
                  priority={true}
                  quality={75}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Form;
