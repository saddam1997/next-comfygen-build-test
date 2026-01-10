

import Image from "next/image";
import dynamic from "next/dynamic";
// import { TbX } from "react-icons/tb";
// import { useEffect, useState } from "react";

const ContactFrom = dynamic(() => import("../comman/ContactFrom"), {
  ssr: true,
});

export default function HeroClientUI(props: any) {

  return (
    <>

      <Image
        src={props.bgImage}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover"
        priority={false}
        loading="lazy"
      />
      {/* {showImage && (
        <>
          <Image
            src={props.bgImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority={false}
            loading="lazy"
          />

         
        </>
      )} */}

      <div
        className="absolute inset-0 bg-black/60 z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Modal */}
      {props.talkToExpertModal && (
        <div>
          {props.talkToExpertModal && (
            <>
              <div
                className={`fixed inset-0 z-50 overflow-y-auto max-w-[1600px] mx-auto  ${props.talkToExpertModal ? "block" : "hidden"}`}
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
                                loading="lazy"
                              />
                              <p className="text-white text-base">
                                Comfygen is a result-oriented IT Service
                                Provider that builds secured and scaled apps to
                                fulfill the needs of every business in various
                                industries
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
                                  loading="lazy"
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
                                  loading="lazy"
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
                                  loading="lazy"
                                />
                              </a>
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
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="lg:w-[60%] w-full">
                          <div className="modal-header border-b-0 flex justify-end items-center p-4">
                            <button
                              type="button"
                              className="text-gray-500 text-3xl hover:text-gray-700 cursor-pointer"
                              onClick={props.closeModal}
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
      )}
    </>
  );
}
