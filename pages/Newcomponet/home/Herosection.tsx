import Header from "./Header";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TbX } from "react-icons/tb";
import ContactFrom from "../comman/ContactFrom";

export default function Herosection(props: any) {

  const [words, setWords] = useState([
    "Blockchain Development",
    "AI Development",
    "Custom Web & Apps",
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      setTypedText(word.substring(0, typedText.length + 1));
    }, 100);
    if (typedText === word) {
      setTimeout(() => {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setTypedText("");
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [currentWordIndex, typedText, words]);


  return (
    <div className="relative h-full md:min-h-screen overflow-hidden">

      {/* Background Image with Overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-fixed bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/Rectangle 331.png')"  }}
      >
        <div className="absolute inset-0 bg-[#00000040]/60"></div>
      </div>

      <div className="top-0 absolute z-20">
        <Header />
      </div>


      <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-20 md:py-20 py-32 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto h-full  md:min-h-screen items-center">
        <div className="xl:w-[58%] lg:w-[65%] w-full">
          <div className="space-y-4">
            {props.isHome ? (
              <h1 className="text-white xl:text-5xl sm:text-3xl text-3xl font-bold xl:leading-[4rem] sm:leading-[3rem]">
                <span className="xl:text-4xl md:text-2xl text-2xl overflow-auto font-medium">
                  {typedText}
                </span>
                <br />
                <b className="font-bold text-white">
                  Solution & Service Provider
                </b>
              </h1>
            ) : (
              <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]">
                {props.heading}
              </h1>
            )}
            <p className="w-full mx-auto text-sm 2xl:text-lg lg:text-base font-normal text-white">
              {props.ptag}
            </p>
          </div>

          <div className="mt-4">
            <Link href="#" passHref={true}>
              <button
                className="bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E] text-white rounded-[20px] border-0 flex items-center justify-between
         shadow-[0_2px_36px_rgba(0,0,0,0.06)] text-[18px] font-semibold relative
         whitespace-nowrap transition-all duration-[800ms] h-[55px] w-fit
         py-[5px] pl-[25px] pr-[40px] cursor-pointer gap-10"
                onClick={props.openModal}
              >
                Talk to an expert!{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.231"
                  height="11.738"
                  viewBox="0 0 24.231 11.738"
                >
                  <path
                    id="Path_1487529"
                    data-name="Path 1487529"
                    d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                    transform="translate(-521.511 -1346.214)"
                    fill="#fff"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        {/* Modal code remains the same */}

        <div>
          {props.talkToExpertModal && (
            <>
              <div
                className={`fixed inset-0 z-50 overflow-y-auto max-w-[1600px] mx-auto ${props.talkToExpertModal ? "block" : "hidden"}`}
                role="dialog"
                aria-modal="true"
              >
                <div className="flex items-center justify-center min-h-screen">
                  <div className="modal-overlay fixed inset-0 bg-black/80"></div>
                  <div className="modal-dialog modal-dialog-centered bg-white  rounded-xl shadow-lg z-[999] mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 relative">
                    <div className="modal-content">
                      <div className="flex justify-center ">
                        <div className="w-[40%] hidden  bg-center bg-no-repeat bg-cover lg:flex rounded-tl-xl rounded-bl-xl  items-end p-8 bg-[url('https://www.comfygen.com/image/modal-form-img.webp')]">
                          <div className="space-y-4 ">
                            <div className="space-y-4">
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
                                href="https://teams.live.com/l/invite/FEA1DE8RvRmi0bg0wM"
                                aria-label="Join Comfygen on Teams"
                              >
                                <Image
                                  alt="Teams Icon"
                                  src="https://www.comfygen.com/image/join-comfygen-on-teams.svg"
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
                              onClick={props.closeModal}
                            >
                              <TbX className="w-6 h-6" />
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

    </div>
  );
}
