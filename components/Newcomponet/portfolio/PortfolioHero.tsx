import React, { useState } from "react";
import Link from "next/link";
import ContactFrom from "../comman/ContactFrom";
import { X , ArrowUpRight} from 'lucide-react';
import Image from "next/image";



const PortfolioHeader = ({Data}:any) => {
    const [talkToExpertModal, setTalkToExpertModal] = useState(false);
    const openModal = () => setTalkToExpertModal(true);
    const closeModal = () => setTalkToExpertModal(false);

  return (
    <section>
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="lg:grid-cols-2 grid md:items-center lg:space-x-20 lg:space-y-0 space-y-6 mx-auto ">
          <div>
            <div className="space-y-2">
              <h1 className="text-white xl:text-4xl text-xl font-extrabold xl:leading-[3rem]  text-start">
                {Data?.heading}
              </h1>
              <h2 className="w-full mx-auto xl:text-3xl text-xl font-normal text-white text-start">
                {Data?.subhead}
              </h2>
              {Data?.ptag && (
                <p
                  className="w-full mx-auto text-sm font-light text-white lg:text-base"
                  dangerouslySetInnerHTML={{ __html: Data?.ptag }}
                />
              )}
              {Data?.ptag1 && (
                <p
                  className="w-full mx-auto text-sm font-light text-white lg:text-lg text-start"
                  dangerouslySetInnerHTML={{ __html: Data?.ptag1 }}
                />
              )}
              {Data?.ptag2 && (
                <p className="w-full mx-auto text-sm font-light text-white lg:text-lg text-start">
                  {Data?.ptag2}
                </p>
              )}
            </div>
            {Data?.buttonText && (
              <div className="mt-6 text-center">
                <Link href={Data?.buttonLink} passHref>
                  <button
                    onClick={openModal}
                    className="text-base font-medium text-white border border-white rounded-full px-6 py-2.5 text-center hover:text-black hover:bg-white cursor-pointer transition duration-300 relative flex gap-3 items-center"
                  >
                    {Data?.buttonText}
                    <ArrowUpRight size={22} />

                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="hidden lg:block relative w-full h-[260px] sm:h-[320px] md:h-[369px]">
            <Image
              src={Data?.imageSrc}
              alt={Data?.heading}
              fill
              priority
              sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           640px"
              className="object-contain"
            />
          </div>

        </div>
      </div>

      {/* Modal Section */}
      {talkToExpertModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto mx-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="modal-overlay fixed inset-0 bg-black/80"></div>
            <div className="modal-dialog modal-dialog-centered bg-white rounded-xl shadow-lg z-[999] mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 relative">
              <div className="modal-content">
                <div className="flex justify-center">
                  <div className="w-[40%] hidden relative bg-center bg-no-repeat bg-cover lg:flex rounded-tl-xl rounded-bl-xl items-end ">

                    <div className="w-full h-full rounded-tl-xl rounded-bl-xl overflow-hidden">
                      <Image
                        src="https://www.comfygen.com/image/modal-form-img.webp"
                        alt="Contact Background"
                        width={700}
                        height={400}
                        sizes=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-4 absolute  bottom-4 left-4">
                      <Image
                        alt="COMFYGEN LIMITED Logo"
                        src="https://www.comfygen.com/image/comfygen-form-logo.svg"
                        height={40}
                        width={186}
                      />
                      <p className="text-white text-base">
                        Comfygen is a result-oriented IT Service Provider that
                        builds secured and scaled apps to fulfill the needs of
                        every business in various industries
                      </p>
                  
                      <div className="flex gap-3 items-center">
                        <a
                          target="_blank"
                          href="https://www.facebook.com/comfygen"
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
                          href="https://twitter.com/comfygentech"
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
                  <div className="lg:w-[60%] w-full">
                    <div className="modal-header border-b-0 flex justify-end items-center p-4">
                      <button
                        type="button"
                        className="text-black w-10 h-10 rounded-full flex justify-center items-center bg-gray-100 text-3xl hover:text-gray-700 cursor-pointer absolute top-6 right-6"
                        onClick={closeModal}
                      >
                        <X className="w-6 h-6" />
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
      )}
    </section>
  );
};

export default PortfolioHeader;
