import Image from "next/image";
import dynamic from "next/dynamic";
import style from "./Button/button.module.css";
import HeadingOne from "../../../components/ui/HeadingOne";
import ParagraphText from "../../../components/ui/ParagraphText";
import ContactFrom from "../../../components/Newcomponet/comman/ContactFrom";


// const ContactFrom = dynamic(() => import("../comman/ContactFrom"), {
//   ssr: false,
// });

export default function HeroSectionForAllPages(props: any) {
  const imageAlt = props?.altTag || props?.heading || "Hero background image";

  const paragraphs = [props.ptag, props.ptag1, props.ptag2].filter(Boolean);

  const listItems = [
    props.li,
    props.li1,
    props.li2,
    props.li3,
    props.li4,
    props.li5,
    props.li6,
  ].filter(Boolean);

  return (
    <section className="relative flex items-center overflow-hidden
      bg-[#5951cd]
      min-h-[640px] sm:min-h-[680px] lg:min-h-[720px]">

      {/* Background Image */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={props.bgImage}
          alt={imageAlt}
          fill
          fetchPriority="high"
          quality={60}
          className="object-cover object-center hidden lg:block"
        />
      </div>

      <div className="flex z-20 flex-col lg:flex-row lg:items-center lg:gap-10 w-11/12 max-w-7xl mx-auto md:py-8 py-2 lg:mt-8">

        {/* Left Content */}
        <div className="w-full lg:max-w-[65%] xl:max-w-[58%] space-y-6">

          <div className="space-y-4">

            <HeadingOne color={"white"} text={props.heading} />

            {props?.subhead && (
              <ParagraphText color={"white"} text={props.subhead} />
            )}

            {/* Paragraphs */}
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-sm font-light text-white lg:text-base"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}

          </div>

          {/* Bullet List */}
          {listItems.length > 0 && (
            <ul className="text-white grid gap-2 text-base font-normal">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5"></div>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          )}

          {props.ptag3 && (
            <p className="text-sm font-light text-white lg:text-base">
              {props.ptag3}
            </p>
          )}

          {/* CTA Button */}
          <div className="pt-4">
            <button
              type="button"
              className={`${style.btnfix} flex items-center gap-2 text-base font-semibold px-6 py-2.5 text-white border border-white rounded-full hover:bg-white hover:text-[#5556D1] transition-colors`}
              onClick={props.openModal}
            >
              {props.btnName}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="12"
                viewBox="0 0 24 12"
              >
                <path
                  d="M542.348,1353.029H522.873"
                  fill="none"
                  stroke="currentColor"
                />
              </svg>
            </button>
          </div>

        </div>

        {/* Modal */}
        {props.talkToExpertModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-5xl">

              <div className="flex">

                {/* Left Image */}
                <div className="hidden lg:block w-[40%] relative">
                  <Image
                    src="https://www.comfygen.com/comfygen-images/home/contect-form.webp"
                    alt="Contact Background"
                    fill
                    className="object-cover rounded-l-xl"
                  />
                </div>

                {/* Form */}
                <div className="w-full lg:w-[60%] p-6">

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-gray-500 text-3xl"
                      onClick={props.closeModal}
                    >
                      &times;
                    </button>
                  </div>

                  <ContactFrom />

                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}


























// import Image from "next/image";
// import dynamic from "next/dynamic";

// const ContactFrom = dynamic(
//   () => import("../comman/ContactFrom"),
//   { ssr: false }
// );

// import style from "../Button/button.module.css"
// import HeadingOne from "../../ui/HeadingOne";
// import ParagraphText from "../../ui/ParagraphText";

// export default function HeroSectionForAllPages(props:any) {
//   const imageAlt = props?.altTag || props?.heading || "Hero background image";

//   return (
//     <section
//       className="relative pt-10 pb-6 sm:pt-20 sm:pb-10 lg:pt-[10px] lg:pb-[70px] h-full flex flex-col justify-center  overflow-hidden bg-[#5951cd] lg:bg-transparent">

//       <div className=" absolute inset-0 -z-10">
//         <Image
//           src={props.bgImage}
//           alt={props.heading || "Comfygen Hero Background"}
//           fill
//           priority
//           fetchPriority="high"
//           sizes="(max-width: 1024px) 0px"
//           quality={60}
//           className="object-cover object-center hidden lg:block"
//         />
       
//       </div>

//       <div className="flex md:py-8 py-2 sm:-mb-[45px] lg:mt-[2rem] mt-[3rem] flex-col lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
//         <div className="w-full  lg:max-w-[65%] xl:max-w-[58%] space-y-4 sm:space-y-5 lg:space-y-6">
//           <div className="space-y-4 lg:pt-0">
//             <div>
//  <HeadingOne color={"white"} text={props.heading} />

//               {/* <h1 className="text-white text-lg md:text-4xl  font-extrabold   ">
//                 {props.heading}
//               </h1> */}

//                 {props?.subhead && (
//             <ParagraphText color={"white"} text={props.subhead} />
//           )}

//               {/* <p className="w-full mx-auto text-sm font-bold text-white lg:text-base mt-2">
//                 {props.subhead}
//               </p> */}
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
//           <div className="md:py-6 py-4">
//             <button
//               className={`${style.btnfix} flex items-center gap-2 text-base font-semibold  px-6 py-2.5 text-white border border-white rounded-full hover:bg-white hover:text-[#5556D1] transition-colors duration-300`}
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
//         {/* <div className="w-full lg:flex justify-end items-end hidden">
//           <Image
//             src={props.img}
//             alt={props.img}
//             width={props.Width}
//             height={props.Height}
//           />
//         </div> */}
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
//                         <div className="w-[40%] hidden relative bg-center bg-no-repeat bg-cover lg:flex rounded-tl-xl rounded-bl-xl  items-end ">

//                           <div className="w-full h-full rounded-tl-xl rounded-bl-xl overflow-hidden">
//                             <Image
//                               src="https://www.comfygen.com/comfygen-images/home/contect-form.webp"
//                               alt="Contact Background"
//                               width={700}
//                               height={400}
//                               sizes=""
//                               className="w-full h-full object-cover"
//                             />
//                           </div>


//                           <div className="space-y-3 absolute  bottom-4 left-4">
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
//                         <div className="lg:w-[60%] w-full z-20">
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




