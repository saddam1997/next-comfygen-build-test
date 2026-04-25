

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
                    className="bg-transparent border-white border text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-black  cursor-pointer transition duration-300"
                >
                    Talk To Consultant
                </button>
            </div>

            {/* Modal */}
            <HeroModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}