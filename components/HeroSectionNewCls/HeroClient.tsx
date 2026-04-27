import dynamic from "next/dynamic";
import { useState, } from "react";

const HeroModal = dynamic(() => import("./HeroModal"), {
    ssr: false,
});


export default function HeroClient() {
    const [open, setOpen] = useState(false);


    return (
        <>
            {/* CTA */}
            <div className="">
                <button
                    onClick={() => setOpen(true)}
                    className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
                >
                    Talk to an Expert
                </button>
            </div>

            {/* Modal */}
            {/* ✅ only load when needed */}
            {open && (
                <HeroModal isOpen={open} onClose={() => setOpen(false)} />
            )}
        </>
    );
}