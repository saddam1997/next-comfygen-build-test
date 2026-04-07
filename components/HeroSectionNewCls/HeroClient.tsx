"use client";

import { useState, useEffect } from "react";
import HeroModal from "./HeroModal";

export default function HeroClient() {
    const [open, setOpen] = useState(false);

    /* ✅ Scroll lock (no CLS) */
    useEffect(() => {
        const scrollbar =
            window.innerWidth - document.documentElement.clientWidth;

        if (open) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbar}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
    }, [open]);

    return (
        <>
            {/* CTA */}
            <div className="min-h-[50px]">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
                >
                    Talk to an Expert
                </button>
            </div>

            {/* Modal */}
            <HeroModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}