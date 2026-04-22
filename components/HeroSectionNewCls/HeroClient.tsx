

import { useState, } from "react";
import HeroModal from "./HeroModal";

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
            <HeroModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}