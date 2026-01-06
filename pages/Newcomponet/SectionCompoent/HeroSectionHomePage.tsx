import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TbX } from "react-icons/tb";
import dynamic from "next/dynamic";

const ContactFrom = dynamic(() => import("../comman/ContactFrom"), { ssr: false });

export default function HeroSection(props: any) {

  const data = props.btnLink;
  if (!data) {
    return <div>Loading...</div>;
  }

  const [words, setWords] = useState([
    "Blockchain Development",
    "AI Development",
    "Custom Web & Apps",
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkScreen = () => setIsDesktop(window.innerWidth > 1140);
      checkScreen();
      window.addEventListener("resize", checkScreen);
      return () => window.removeEventListener("resize", checkScreen);
    }
  }, []);

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

  const stats = [
    {
      img: "/expreinces.webp",
      value: '700+',
      label: 'Projects Delivered',
      color: 'text-orange-500'
    },
    {
      img: "/project-home.webp",
      value: '6+',
      label: 'Years Experience',
      color: 'text-orange-500'
    },
    {
      img: "/motivation.png",
      value: '95%',
      label: 'Client Happy',
      color: 'text-orange-500'
    },
  ];

  return (
    <section
      className="relative bg-no-repeat bg-cover bg-left sm:bg-center bg-[#5951cd] sm:bg-transparent h-screen flex flex-col justify-center items-center lg:h-full"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Image
        src={props.bgImage || "/landing-hero-img.webp"}
        alt="Comfygen - Web & Mobile App Development Company"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center -z-10"
      />

      <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-20 md:py-20 py-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="xl:w-[58%] lg:w-[65%] w-full">
          <div className="space-y-4">
            {props.isHome ? (
              <h1 className="text-white xl:text-5xl sm:text-3xl text-3xl font-bold xl:leading-[4rem] sm:leading-[3rem]">
                <span className="xl:text-4xl md:text-2xl text-2xl font-medium">
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

          {/* Stats cards with proper Image props */}
          <div className="hidden sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-6">
            <div className="bg-[#FFFFFF] w-full py-4 px-4 rounded-[14px] flex lg:justify-center items-center gap-2">
              <div className="h-8 w-8 relative">
                <Image
                  alt="6+ Years Experience in Digital Transformation"
                  src="https://www.comfygen.com/comfygen-images/comfygen/hero-experience-icon.webp"
                  width={32}
                  height={32}
                  quality={75}
                  className="h-8 w-8"
                />
              </div>
              <p className="font-semibold text-[#000] text-base">
                6+ Year's Experience
              </p>
            </div>

            <div className="bg-[#FFFFFF] w-full py-4 px-4 rounded-[14px] flex lg:justify-center items-center gap-2">
              <div className="h-8 w-8 relative">
                <Image
                  alt="250+ Successful Projects Delivered"
                  src="https://www.comfygen.com/comfygen-images/comfygen/heroproject-delivered-icon.webp"
                  width={32}
                  height={32}
                  quality={75}
                  className="h-8 w-8"
                />
              </div>
              <p className="font-semibold text-[#000] text-base">
                250+ Project Delivered
              </p>
            </div>

            <div className="bg-[#fff] py-4 w-full px-6 rounded-[14px] gap-2">
              <div className=" relative">
                <Image
                  alt="100+ Satisfied Happy Clients"
                  src="https://www.comfygen.com/comfygen-images/comfygen/happy-client-hero-icon.webp"
                  width={32}
                  height={32}
                  quality={75}
                  className="w-auto h-4"
                />
              </div>
              <p className="font-semibold text-[#000] text-base">
                100+ Total Happy Client
              </p>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="py-2 sm:hidden">
            <div className="max-w-full w-full">
              <div className="grid grid-cols-3 gap-4 items-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-white rounded-2xl p-2">
                    <div className="flex rounded-md border p-4 bg-white flex-col items-center text-center space-y-1">
                      <div className="relative w-12 h-12">
                        <Image
                          alt={`${stat.label} - ${stat.value}`}
                          src={stat.img}
                          width={48}
                          height={48}
                          quality={75}
                          className="rounded-full object-contain"
                        />
                      </div>
                      <h3 className="text-sm font-bold text-black">
                        {stat.value}
                      </h3>
                      <p className="text-black font-medium text-xs">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-2">
            <Link href="#" passHref>
              <button
                className="btn btn-fix lazyloaded"
                onClick={props.openModal}
                aria-label="Talk to an expert about your project"
              >
                Talk to an expert!{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.231"
                  height="11.738"
                  viewBox="0 0 24.231 11.738"
                  aria-hidden="true"
                >
                  <path
                    d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                    transform="translate(-521.511 -1346.214)"
                    fill="#fff"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Modal */}
        <div>
          {props.talkToExpertModal && (
            <div
              className="fixed inset-0 z-50 overflow-y-auto max-w-[1600px] mx-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black/80"></div>
                <div className="modal-dialog modal-dialog-centered bg-white rounded-xl shadow-lg z-[999] mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 relative">
                  <div className="modal-content">
                    <div className="flex flex-col lg:flex-row lg:h-[600px]">
                      <div className="lg:w-[40%] hidden bg-center bg-no-repeat bg-cover lg:flex rounded-tl-xl rounded-bl-xl items-end p-8 bg-[url('https://www.comfygen.com/comfygen-images/from/from.webp')]">
                        <div className="space-y-4">
                          <div className="space-y-4">
                            <div className="relative h-10 w-48">
                              <Image
                                alt="COMFYGEN LIMITED - Web & App Development Company"
                                src="https://www.comfygen.com/image/comfygen-form-logo.svg"
                                width={186}
                                height={40}
                              />
                            </div>
                            <p className="text-white text-base">
                              Comfygen is a result-oriented IT Service Provider
                              that builds secured and scaled apps to fulfill the
                              needs of every business in various industries
                            </p>
                          </div>

                          <div className="flex gap-3 items-center">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://api.whatsapp.com/send?phone=919587867258"
                              aria-label="Chat with Comfygen on WhatsApp"
                            >
                              <div className="relative w-10 h-10">
                                <Image
                                  alt="WhatsApp Icon"
                                  src="https://www.comfygen.com/image/whatsapp-form-icon.svg"
                                  width={40}
                                  height={40}
                                />
                              </div>
                            </a>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.facebook.com/comfygen.technologies"
                              aria-label="Visit Comfygen Facebook Page"
                            >
                              <div className="relative w-10 h-10">
                                <Image
                                  alt="Facebook Icon"
                                  src="https://www.comfygen.com/image/fb-form-icon.svg"
                                  width={40}
                                  height={40}
                                />
                              </div>
                            </a>

                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.linkedin.com/company/comfygen-private-limited"
                              aria-label="Visit Comfygen LinkedIn Page"
                            >
                              <div className="relative w-10 h-10">
                                <Image
                                  alt="LinkedIn Icon"
                                  src="https://www.comfygen.com/image/linkedin-form-icon.svg"
                                  width={40}
                                  height={40}
                                />
                              </div>
                            </a>

                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://x.com/Comfygen_Tech"
                              aria-label="Follow Comfygen on Twitter"
                            >
                              <div className="relative w-10 h-10">
                                <Image
                                  alt="Twitter Icon"
                                  src="https://www.comfygen.com/image/x-form-icon.svg"
                                  width={40}
                                  height={40}
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-[60%] w-full">
                        <div className="modal-header border-b-0 flex justify-end items-center p-4">
                          <button
                            type="button"
                            className="text-black w-10 h-10 rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer absolute top-6 right-6"
                            onClick={props.closeModal}
                            aria-label="Close modal"
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
          )}
        </div>
      </div>
    </section>
  );
}









