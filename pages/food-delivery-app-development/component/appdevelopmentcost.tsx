import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import LazyLoad from "react-lazy-load";
import Image from "next/image";
import ContactFrom from "../../../components/Newcomponet/comman/ContactFrom";

const Appdevelopmentcost = ({
  heading = "",
  text = "",
  text1 = "",
  text2 = "",
  buttonText = "Get Started",
  buttonLink = "#",
  imageSrc = "",
  imageAlt = "Call to Action",
  listItems = [],
  listheading = "",
}) => {
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };
  return (
    <section className="lg:py-16 py-10 bg-[#fff]">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 relative bg-[#17162B] rounded-[24px]">
        <div className="lg:px-14 px-8 lg:flex gap-8">
          <div className="lg:w-[60%] w-full lg:py-16 py-6">
            <div className="space-y-4">
              <h2 className="xl:text-4xl text-3xl text-[#fff] mt-3 font-semibold">
                {heading}
              </h2>
              <div className="space-y-2">
                <p
                  className="text-base text-white"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
                <p
                  className="text-base text-white"
                  dangerouslySetInnerHTML={{ __html: text1 }}
                />
                <p
                  className="text-base text-white"
                  dangerouslySetInnerHTML={{ __html: text2 }}
                />
              </div>

              <div className="text-semibold text- text-white">
                <p dangerouslySetInnerHTML={{ __html: listheading }} />
              </div>

              {listItems.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {listItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start  gap-2 text-white"
                    >
                      <span className="w-3 h-3 border border-white rounded-full flex-shrink-0 mt-1"></span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-8">
              <button
                onClick={openModal}
                className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1] border border-[#fff] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1"
              >
                {buttonText} <MdOutlineArrowOutward />
              </button>
            </div>
          </div>
          <div className="lg:w-[40%] w-full mx-auto flex justify-center items-end lg:mt-0 mt-5">

            <Image
              className="w-full hidden sm:block"
              src={imageSrc}
              alt={imageAlt}
              width={907}
              height={762}
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 907px"
            />

            {/* {imageSrc ? (
              <Image
                className="w-full hidden sm:block"
                src={imageSrc}
                alt={imageAlt}
                width={907}
                height={762}
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 907px"
              />
            ) : null} */}
          </div>
        </div>
      </div>

      <div>
        {talkToExpertModal && (
          <>
            <div
              className={`fixed inset-0 z-50 overflow-y-auto max-w-[1600px] mx-auto  ${talkToExpertModal ? "block" : "hidden"}`}
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-center min-h-screen">
                <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
                <div className="modal-dialog modal-dialog-centered bg-white  rounded-xl shadow-lg z-[999] mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
                  <div className="modal-content">
                    <div className="flex justify-center lg:h-[600px]">
                      <div className="w-[40%] hidden  bg-center bg-no-repeat bg-cover lg:flex rounded-tl-xl rounded-bl-xl  items-end p-8 bg-[url('https://www.comfygen.com/comfygen-images/home/contect-form.webp')]">
                        <div className="space-y-3 ">
                          <div>
                            <Image
                              alt="COMFYGEN LIMITED Logo"
                              src="https://www.comfygen.com/image/comfygen-form-logo.svg"
                              height={40}
                              width={186}
                            />
                            <p className="text-white text-base">
                              Comfygen is a result-oriented IT Service Provider
                              that builds secured and scaled apps to fulfill the
                              needs of every business in various industries
                            </p>
                          </div>
                          <div className="flex gap-3 items-center">
                            <a
                              target="_blank"
                              href="https://api.whatsapp.com/send?phone=919587867258"
                              aria-label="Chat with Comfygen on WhatsApp"
                            >
                              <Image
                                alt="WhatsApp Icon"
                                src="https://www.comfygen.com/image/whatsapp-form-icon.svg"
                                height={40}
                                width={40}
                              />
                            </a>
                            <a
                              target="_blank"
                              href="https://www.facebook.com/comfygen.technologies"
                              aria-label="Visit Comfygen Facebook Page"
                            >
                              <Image
                                alt="Facebook Icon"
                                src="https://www.comfygen.com/image/fb-form-icon.svg"
                                height={40}
                                width={40}
                              />
                            </a>

                            <a
                              target="_blank"
                              href="https://www.linkedin.com/company/comfygen-private-limited"
                              aria-label="Visit Comfygen LinkedIn Page"
                            >
                              <Image
                                alt="LinkedIn Icon"
                                src="https://www.comfygen.com/image/linkedin-form-icon.svg"
                                height={40}
                                width={40}
                              />
                            </a>

                            {/* <a
                                      target="_blank"
                                      href="https://teams.live.com/l/invite/FEA1DE8RvRmi0bg0wM"
                                      aria-label="Join Comfygen on Teams"
                                    >
                                      <Image
                                        alt="Teams Icon"
                                        src="https://www.comfygen.com/image/join-comfygen-on-teams.svg"
                                        height={40}
                                        width={40}
                                      />
                                    </a> */}

                            <a
                              target="_blank"
                              href="https://x.com/Comfygen_Tech"
                              aria-label="Follow Comfygen on Twitter"
                            >
                              <Image
                                alt="Twitter Icon"
                                src="https://www.comfygen.com/image/x-form-icon.svg"
                                height={40}
                                width={40}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-[60%] w-full mt-8">
                        <div className="modal-header border-b-0 flex justify-end items-center p-4">
                          <button
                            type="button"
                            className="text-gray-500 text-3xl hover:text-gray-700 cursor-pointer"
                            onClick={closeModal}
                          >
                            &times;
                          </button>
                        </div>
                        <div>
                          <ContactFrom />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Appdevelopmentcost;
