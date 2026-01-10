import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import ContactFrom from "../comman/ContactFrom";
import CommonImage from "../comman/CommonImage";

export default function HeroSectionForAllPages(props: any) {


  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsMobile(window.innerWidth < 640);
  //   };

  //   checkScreenSize();

  //   window.addEventListener('resize', checkScreenSize);
  //   return () => window.removeEventListener('resize', checkScreenSize);
  // }, []);

  // const data = props?.btnLink;
  // if (!data) {
  //   return <div>Loading....</div>;
  // }

  return (
    <section
      className="relative pt-20 pb-6 
             sm:pt-20 sm:pb-10 
             lg:pt-[70px] lg:pb-[70px]
             h-full flex flex-col justify-center 
             overflow-hidden bg-[#5951cd] lg:bg-transparent">
      <div className="absolute inset-0 -z-10 hidden md:block">
        <div className="w-full h-full relative">
          <Image
            src={props.bgImage}
            alt="Comfygen Hero Background"
            fill
            className="object-cover object-center -z-10 hidden md:block  bg-no-repeat bg-fixed"
            priority
            fetchPriority="high"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="/blur-placeholder.webp"
            quality={75}
            loading="eager"
          />

        </div>
      </div>
      <div className="flex md:py-8 py-2 sm:-mb-[45px] flex-col lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="w-full ">
          <div className="space-y-4 lg:pt-0">
            <div>
              <h1 className="text-white text-lg md:text-3xl  font-extrabold   ">
                {props.heading}
              </h1>
              <p className="w-full mx-auto text-sm font-bold text-white lg:text-base mt-2">
                {props.subhead}
              </p>
              <p className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2" dangerouslySetInnerHTML={{ __html: props.ptag }}>
              </p>
              <p className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2" dangerouslySetInnerHTML={{ __html: props.ptag1 }}>
              </p>
              <p className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2" dangerouslySetInnerHTML={{ __html: props.ptag2 }}>

              </p>
            </div>

            <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal">
              {props.li && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
                  <span dangerouslySetInnerHTML={{ __html: props.li }} />
                </li>
              )}
              {props.li1 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
                  <span dangerouslySetInnerHTML={{ __html: props.li1 }} />
                </li>
              )}
              {props.li2 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
                  <span dangerouslySetInnerHTML={{ __html: props.li2 }} />
                </li>
              )}
              {props.li3 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
                  <span dangerouslySetInnerHTML={{ __html: props.li3 }} />
                </li>
              )}
              {props.li4 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
                  <span dangerouslySetInnerHTML={{ __html: props.li4 }} />
                </li>
              )}
              {props.li5 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
                  <span dangerouslySetInnerHTML={{ __html: props.li5 }} />
                </li>
              )}
              {props.li6 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
                  <span dangerouslySetInnerHTML={{ __html: props.li6 }} />
                </li>
              )}
            </ul>


            <p className="w-full mx-auto text-sm font-light text-white lg:text-base">
              {props.ptag3}
            </p>
          </div>
          <div className="md:py-6 py-4">
            <button
              className="btn btn-fix lazyloaded"
              onClick={props.openModal}
            >
              {props.btnName}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.231"
                height="11.738"
                viewBox="0 0 24.231 11.738"
              >
                {" "}
                <path
                  id="Path_1487529"
                  data-name="Path 1487529"
                  d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                  transform="translate(-521.511 -1346.214)"
                  fill="#fff"
                ></path>{" "}
              </svg>{" "}
            </button>
          </div>
        </div>
        <div className="w-full lg:flex justify-end items-end hidden">
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
                      <div className="flex justify-center lg:h-[600px]">
                        <div className="w-[40%] hidden  bg-center bg-no-repeat bg-cover lg:flex rounded-tl-xl rounded-bl-xl  items-end p-8 bg-[url('https://www.comfygen.com/comfygen-images/from/from.webp')]">
                          <div className="space-y-3 ">
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










// import Link from "next/link";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import ContactFrom from "../comman/ContactFrom";
// import CommonImage from "../comman/CommonImage";

// export default function HeroSectionForAllPages(props: any) {


//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     checkScreenSize();

//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // const data = props?.btnLink;
//   // if (!data) {
//   //   return <div>Loading....</div>;
//   // }

//   return (
//     <section
//       className="relative lg:h-full h-screen flex flex-col justify-center overflow-hidden bg-[#5951cd] sm:bg-transparent py-10">
//       <div className="absolute inset-0 -z-10 hidden sm:block">
//         <div className="w-full h-full relative">
//           <div className="absolute inset-0 -z-10">
//             <Image
//               src={props.bgImage}
//               alt="Comfygen Hero Background"
//               fill
//               priority
//               fetchPriority="high"
//               sizes="(max-width: 768px) 100vw, 100vw"
//               className="object-cover object-center"
//               placeholder="blur"
//               blurDataURL="/blur-placeholder.webp"
//               quality={75}
//             />
//           </div>
//           {/* <Image
//             src={props.bgImage}
//             alt="Comfygen Hero Background"
//             fill
//             className="object-cover object-center -z-10 hidden sm:block bg-no-repeat bg-fixed"
//             priority
//             fetchPriority="high"
//             sizes="100vw"
//             placeholder="blur"
//             blurDataURL="/blur-placeholder.webp"
//             quality={75}
//             loading="eager"
//           /> */}

//         </div>
//       </div>
//       <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
//         <div className="w-full 2xl:py-20 xl:py-16 py-10">
//           <div className="space-y-4">
//             <div>
//               <h1 className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  ">
//                 {props.heading}
//               </h1>
//               <p className="w-full mx-auto text-2xl font-bold text-white lg:text-base mt-2">
//                 {props.subhead}
//               </p>
//               <p className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2" dangerouslySetInnerHTML={{ __html: props.ptag }}>
//               </p>
//               <p className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2" dangerouslySetInnerHTML={{ __html: props.ptag1 }}>
//               </p>
//               <p className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2" dangerouslySetInnerHTML={{ __html: props.ptag2 }}>

//               </p>
//             </div>

//             <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal">
//               {props.li && (
//                 <li className="flex items-start gap-2">
//                   <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
//                   <span dangerouslySetInnerHTML={{ __html: props.li }} />
//                 </li>
//               )}
//               {props.li1 && (
//                 <li className="flex items-start gap-2">
//                   <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
//                   <span dangerouslySetInnerHTML={{ __html: props.li1 }} />
//                 </li>
//               )}
//               {props.li2 && (
//                 <li className="flex items-start gap-2">
//                   <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
//                   <span dangerouslySetInnerHTML={{ __html: props.li2 }} />
//                 </li>
//               )}
//               {props.li3 && (
//                 <li className="flex items-start gap-2">
//                   <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
//                   <span dangerouslySetInnerHTML={{ __html: props.li3 }} />
//                 </li>
//               )}
//               {props.li4 && (
//                 <li className="flex items-start gap-2">
//                   <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
//                   <span dangerouslySetInnerHTML={{ __html: props.li4 }} />
//                 </li>
//               )}
//               {props.li5 && (
//                 <li className="flex items-start gap-2">
//                   <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
//                   <span dangerouslySetInnerHTML={{ __html: props.li5 }} />
//                 </li>
//               )}
//               {props.li6 && (
//                 <li className="flex items-start gap-2">
//                   <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
//                   <span dangerouslySetInnerHTML={{ __html: props.li6 }} />
//                 </li>
//               )}
//             </ul>


//             <p className="w-full mx-auto text-sm font-light text-white lg:text-base">
//               {props.ptag3}
//             </p>
//           </div>
//           <div className="md:py-6   ">
//             <button
//               className="btn btn-fix lazyloaded"
//               onClick={props.openModal}
//             >
//               {props.btnName}{" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24.231"
//                 height="11.738"
//                 viewBox="0 0 24.231 11.738"
//               >
//                 {" "}
//                 <path
//                   id="Path_1487529"
//                   data-name="Path 1487529"
//                   d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
//                   transform="translate(-521.511 -1346.214)"
//                   fill="#fff"
//                 ></path>{" "}
//               </svg>{" "}
//             </button>
//           </div>
//         </div>
//         <div className="w-full lg:flex justify-end items-end hidden">
//           <Image
//             src={props.img}
//             alt={props.img}
//             width={props.Width}
//             height={props.Height}
//           />
//         </div>
//         <div>
//           {props.talkToExpertModal && (
//             <>
//               <div
//                 className={`fixed inset-0 z-50 overflow-y-auto max-w-[1600px] mx-auto  ${props.talkToExpertModal ? "block" : "hidden"}`}
//                 role="dialog"
//                 aria-modal="true"
//               >
//                 <div className="flex items-center justify-center min-h-screen">
//                   <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
//                   <div className="modal-dialog modal-dialog-centered bg-white  rounded-xl shadow-lg z-[999] mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
//                     <div className="modal-content">
//                       <div className="flex justify-center lg:h-[600px]">
//                         <div className="w-[40%] hidden  bg-center bg-no-repeat bg-cover lg:flex rounded-tl-xl rounded-bl-xl  items-end p-8 bg-[url('https://www.comfygen.com/comfygen-images/from/from.webp')]">
//                           <div className="space-y-3 ">
//                             <div>
//                               <Image
//                                 alt="COMFYGEN LIMITED Logo"
//                                 src="https://www.comfygen.com/image/comfygen-form-logo.svg"
//                                 height={40}
//                                 width={186}
//                               />
//                               <p className="text-white text-base">
//                                 Comfygen is a result-oriented IT Service
//                                 Provider that builds secured and scaled apps to
//                                 fulfill the needs of every business in various
//                                 industries
//                               </p>
//                             </div>
//                             <div className="flex gap-3 items-center">
//                               <a
//                                 target="_blank"
//                                 href="https://api.whatsapp.com/send?phone=919587867258"
//                                 aria-label="Chat with Comfygen on WhatsApp"
//                               >
//                                 <Image
//                                   alt="WhatsApp Icon"
//                                   src="https://www.comfygen.com/image/whatsapp-form-icon.svg"
//                                   height={40}
//                                   width={40}
//                                 />
//                               </a>
//                               <a
//                                 target="_blank"
//                                 href="https://www.facebook.com/comfygen.technologies"
//                                 aria-label="Visit Comfygen Facebook Page"
//                               >
//                                 <Image
//                                   alt="Facebook Icon"
//                                   src="https://www.comfygen.com/image/fb-form-icon.svg"
//                                   height={40}
//                                   width={40}
//                                 />
//                               </a>

//                               <a
//                                 target="_blank"
//                                 href="https://www.linkedin.com/company/comfygen-private-limited"
//                                 aria-label="Visit Comfygen LinkedIn Page"
//                               >
//                                 <Image
//                                   alt="LinkedIn Icon"
//                                   src="https://www.comfygen.com/image/linkedin-form-icon.svg"
//                                   height={40}
//                                   width={40}
//                                 />
//                               </a>


//                               {/* <a
//                                 target="_blank"
//                                 href="https://teams.live.com/l/invite/FEA1DE8RvRmi0bg0wM"
//                                 aria-label="Join Comfygen on Teams"
//                               >
//                                 <Image
//                                   alt="Teams Icon"
//                                   src="https://www.comfygen.com/image/join-comfygen-on-teams.svg"
//                                   height={40}
//                                   width={40}
//                                 />
//                               </a> */}


//                               <a
//                                 target="_blank"
//                                 href="https://x.com/Comfygen_Tech"
//                                 aria-label="Follow Comfygen on Twitter"
//                               >
//                                 <Image
//                                   alt="Twitter Icon"
//                                   src="https://www.comfygen.com/image/x-form-icon.svg"
//                                   height={40}
//                                   width={40}
//                                 />
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="lg:w-[60%] w-full">
//                           <div className="modal-header border-b-0 flex justify-end items-center p-4">
//                             <button
//                               type="button"
//                               className="text-gray-500 text-3xl hover:text-gray-700 cursor-pointer"
//                               onClick={props.closeModal}
//                             >
//                               &times;
//                             </button>
//                           </div>
//                           <div>
//                             <ContactFrom />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
