import { useState } from "react";


import styles from "../Button/button.module.css";
import Image from "next/image";

export default function ContactLinks() {
  const [show, setshow] = useState(true);
  return (
    <>
      <div className=" fixed z-40 lg:top-[350px]  bottom-4 right-0 lg:space-y-8 space-y-0 lg:space-x-0 space-x-4 lg:bg-transparent bg-slate-800 lg:p-0 p-3 rounded-lg lg:block hidden flex justify-center items-center">
        <div className={`${styles.social}`}>
          <a
            href="https://wa.me/919587867258"
            target="_blank"
            className="curser-pointer"
          >
            <div className={`${styles.socialbtn} bg-white`}>

              <div>
                <Image src="/WhatsApp.webp" alt="Whatsapp" width={38} height={38} className="text-[#03A84E] bg-transparent rounded-full z-20" />
              </div>
              {/* <span>
                <MdOutlineWhatsapp className="text-[#03A84E]" size={38} />
              </span> */}
              <p className="font-semibold text-lg text-black cursor-pointer">
                Whatsapp
              </p>
            </div>
          </a>
          {/* <a
            href="https://teams.live.com/l/invite/FEA1DE8RvRmi0bg0wM"
            target="_blank"
            className="curser-pointer"
          >
            <div className={`${styles.socialbtn} bg-white`}>
              <span>
                <BsMicrosoftTeams className="text-[#0E72CF]" size={38} />
              </span>
              <p className="font-semibold text-lg text-black cursor-pointer">
                Teams
              </p>
            </div>
          </a> */}
          <a
            href="https://t.me/COMFYGENTECH"
            target="_blank"
            className="curser-pointer"
          >
            <div className={`${styles.socialbtn} bg-white`}>
           <div>
               <Image src="/Telegram.webp" alt="Telegram" width={38} height={38} className="text-[#33A8DA] bg-transparent rounded-full z-20" />
           </div>
              {/* <span>
                <FaTelegram size={38} className="text-[#33A8DA]" />
              </span> */}
              <p className="font-semibold text-lg text-black cursor-pointer">
                Telegram
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="  fixed z-40 lg:top-[350px] bottom-4 left-4 lg:hidden lg:space-y-8 space-y-0 lg:space-x-0 space-x-4 lg:bg-transparent bg-slate-800 lg:p-0 p-3 rounded-lg block flex justify-center items-center">
        <div className=" ">
          <a
            href="https://api.whatsapp.com/send?phone=919587867258"
            title="Whatsapp"
            target="_blank"
          >
            <div className="bg-[#25d366] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] flex items-center justify-center rounded-full text-white pulse cursor-pointer">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="currentColor"
              >
                <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
              </svg>
              <i className="bi bi-whatsapp"></i>
            </div>
          </a>
        </div>
        <div className="hidden md:block">
          <a
            href="https://teams.live.com/l/invite/FEA1DE8RvRmi0bg0wM"
            title="Teams"
            target="_blank"
          >
            <div className="bg-[#7052cd] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] flex items-center justify-center rounded-full text-white pulseskype cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-teams"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7h10v10h-10z" />
                <path d="M6 10h4" />
                <path d="M8 10v4" />
                <path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5 -5v-7h-5" />
                <path d="M18 18a4 4 0 0 0 4 -4v-5h-4" />
                <path d="M13.003 8.83a3 3 0 1 0 -1.833 -1.833" />
                <path d="M15.83 8.36a2.5 2.5 0 1 0 .594 -4.117" />
              </svg>
            </div>
          </a>
        </div>

        <div className="hidden md:block">
          <a href="https://t.me/COMFYGENTECH" title="Telegram" target="_blank">
            <div className="bg-[#1F82B6] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] flex items-center justify-center rounded-full text-white pulsetelegram cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
