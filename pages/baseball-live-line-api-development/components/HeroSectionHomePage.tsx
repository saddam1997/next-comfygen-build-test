import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TbX } from "react-icons/tb";
import ContactFrom from "../../../components/old/components/ContactFrom";


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
      className={`lg:min-h-screen h-screen w-fit  items-center bg-[#5951cd] lg:bg-transparent lg:p-0 p-4`}
    // style={{
    //   backgroundColor: isMobile ? "#5951cd" : "transparent",
    // }}
    >

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
      >
        <source src={props.bgImage} type="video/mp4" />
      </video>

      {/* <Image
        src={props.bgImage}
        alt="Comfygen Hero Background"
        layout="fill"
        className="hidden object-cover object-center lg:block"
        priority
        fetchPriority="high"
        sizes="100vw"
        placeholder="blur"
        blurDataURL="/blur-placeholder.webp"
        quality={75}
        loading="eager"
      /> */}


      {/* FIXED OVERLAY */}
      <div className="hidden lg:block absolute inset-0 lg:bg-black/40 z-[1]"></div>
      <div className="flex lg:absolute z-50 flex-col-reverse md:flex-row md:items-center md:space-x-20 md:py-20 py-2 lg:h-full">
        <div className=" w-full ">
          <div className="space-y-4">
            {props.isHome ? (
              <h1 className="text-white xl:text-5xl sm:text-3xl text-3xl font-bold xl:leading-[4rem] sm:leading-[3rem]">
                <span className="xl:text-4xl md:text-2xl text-2xl overflow-auto font-medium">
                  {typedText}
                </span>
                <br />
                {/* <b className="font-bold text-white">
                  Solution & Service Provider
                </b> */}
              </h1>
            ) : (
              <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem] text-center">
                {props.heading}
              </h1>
            )}
            {/* <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]">
              {props.heading}
            </h1> */}

            <p className="w-full mx-auto text-sm 2xl:text-lg lg:text-base font-normal text-white text-center flex justify-center">
              {props.ptag}
            </p>
          </div>




          <div className="py-2 sm:hidden flex items-center justify-center ">
            <div className="max-w-full w-full">
              <div className="grid grid-cols-3 gap-4 items-center">
                {stats.map((stat, index) => {
                  const Icon = stat.img;
                  return (
                    <div
                      key={index}
                      className="text-white  rounded-2xl p-2 "
                    >
                      <div className="flex rounded-md border p-4 bg-white  flex-col items-center text-center space-y-1">
                        <div className={` rounded-full`}>
                          {/* <Icon size={32} strokeWidth={2} /> */}
                          <Image
                            alt="Happy Clients Icon"
                            src={Icon}
                            height={32}
                            width={32}
                            quality={70}
                            loading="eager"
                            className="w-12 h-12 rounded-full object-contain "
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
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:mt-6 mt-2 flex justify-center">
            <Link href="#" passHref={true}>
              <button
                className="btn btn-fix lazyloaded"
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
    </section>
  );
}
