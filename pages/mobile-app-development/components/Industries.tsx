import styles from "./styles.module.css";
import { MdSend } from "react-icons/md";
import { MdOutlineWhatsapp, MdEmail, MdOutlineAddIcCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { MdAddLocation } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";

const IndustriesForm = () => (
  <section >
    <div className="bg-[#fff] lg:py-16 py-10">
      <div className="w-11/12 mx-auto 2xl:w-10/12 xl:w-5/6 lg:w-11/12">
        <div className="grid lg:grid-cols-1 grid-cols-1 space-y-2">
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
                    height="100"
                    width="150"
                    src="https://www.comfygen.com/img/cluth-logo.webp"
                    alt="Clutch"
                    className=" rounded-xl"
                  />
                </Link>
              </div>
              <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                <Link
                  target="_blank"
                  href="https://develop4u.co/company/comfygen"
                  passHref={true}
                >
                  <Image
                    height="100"
                    width="150"
                    src="https://www.comfygen.com/img/Develop-4u.webp"
                    alt="Developer4"
                    className=" rounded-xl"
                  />
                </Link>
              </div>
              <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                <Link
                  target="_blank"
                  href="https://www.glassdoor.co.in/Overview/Working-at-Comfygen-EI_IE8613382.11,19.htm"
                  passHref={true}
                >
                  <Image
                    height="100"
                    width="150"
                    src="https://www.comfygen.com/img/Glass-door.webp"
                    alt="Glassdoor"
                    className=" rounded-xl"
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
                    height="100"
                    width="150"
                    src="https://www.comfygen.com/img/Trust-pilot.webp"
                    alt="Trustpilot"
                    className=" rounded-xl"
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
                    height="100"
                    width="150"
                    src="https://www.comfygen.com/img/good-firmas.webp"
                    alt="Goodfirms"
                    className=" rounded-xl "
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
                    height="100"
                    width="150"
                    src="https://www.comfygen.com/img/itrate.webp"
                    alt="Goodfirms"
                    className="w-20 rounded-xl "
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
                    height="100"
                    width="150"
                    src="https://www.comfygen.com/img/topdevelopers-img.webp"
                    alt="topdevelopers"
                    className="w-20 rounded-xl "
                  />
                </Link>
              </div>
              <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                <Link
                  target="_blank"
                  href="https://www.designrush.com/agency/profile/comfygen"
                  passHref={true}
                >
                  <Image
                    height="100"
                    width="150"
                    src="https://www.comfygen.com/image/designrush-img.webp"
                    alt="DesignRush"
                    className="w-20 rounded-xl "
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
                    height="100"
                    width="150"
                    src="https://www.comfygen.com/img/selectedFirms.webp"
                    alt="Top Mobile App Development Company"
                    className="w-20 rounded-xl "
                  />
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default IndustriesForm;
