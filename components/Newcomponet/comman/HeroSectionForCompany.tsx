import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactFrom from "./ContactFrom";
import SearchCareer from "../about/SearchCareer";
import { useRouter } from "next/router";
import { MdArrowOutward } from "react-icons/md";

export default function HeroSectionForAllPages(props: any) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 600);
    }
  }, []);
  const data = props.btnLink;
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className=" ">
      <div className="flex flex-col lg:flex-row   lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="w-full 2xl:py-16  py-10">
          <div className="space-y-4">
            <div>
              <h1 className="text-[#212121] xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  lg:text-start text-center ">
                {props.heading}
              </h1>
              <p className="w-full mx-auto text-2xl font-bold text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                {props.subhead}
              </p>
              <p className="w-full mx-auto text-sm font-light text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                {props.ptag}
              </p>
              <p className="w-full mx-auto text-sm font-light text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                {props.ptag1}
              </p>
              <p className="w-full mx-auto text-sm font-light text-[#212121] lg:text-base mt-2 lg:text-start text-center">
                {props.ptag2}
              </p>
            </div>
            <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal">
              {props.li && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
                  {props.li}
                </li>
              )}
              {props.li1 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>{" "}
                  {props.li1}
                </li>
              )}
              {props.li2 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>{" "}
                  {props.li2}
                </li>
              )}
              {props.li3 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>{" "}
                  {props.li3}
                </li>
              )}
              {props.li4 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>{" "}
                  {props.li4}
                </li>
              )}
            </ul>
          </div>
          {router?.asPath !== "/career" && (
            <div className="lg:py-4 flex lg:justify-start justify-center ">
              <div className="flex flex-row">
                <button
                  onClick={props.openModal}
                  className="text-base font-medium text-[#5556D1] border border-[#5556D1] rounded-full px-6 py-2.5 text-center hover:text-white hover:bg-[#5556D1] cursor-pointer transition duration-300 relative flex gap-2 items-center"
                >
                  {props.btnName} <MdArrowOutward />{" "}
                </button>
              </div>
            </div>
          )}

          {router?.asPath === "/career" && <SearchCareer />}
        </div>
        <div className="w-full lg:flex justify-end items-end ">
          <Image
            src={props.img}
            alt={props.img}
            width={props.Width}
            height={props.Height}
          />
        </div>
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
                      <div className="flex justify-center ">
                        <div className="w-[40%] hidden relative bg-center bg-no-repeat bg-cover lg:flex rounded-tl-xl rounded-bl-xl  items-end ">

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


                          <div className="space-y-3 absolute  bottom-4 left-4">
                            <div>
                              <Image
                                alt="COMFYGEN LIMITED Logo"
                                src="https://www.comfygen.com/image/comfygen-form-logo.svg"
                                height={40}
                                width={186}
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
      </div>
    </section>
  );
}
