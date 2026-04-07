"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const TalkToExpertModal = dynamic(
  () => import("../modals/TalkToExpertModal"),
  { ssr: false }
);

export default function TalkButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Talk to an expert"
        className={`${styles.btnFix} text-sm sm:text-base`}
      >
        Talk to an expert!
        <span className="bg-transparent hrt">
          <Image
            src="/unnamed.webp"
            alt="heart"
            width={20}
            height={20}
          />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60"
          role="dialog"
          aria-modal="true"


        >
          <TalkToExpertModal
            isOpen={open}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}