import dynamic from "next/dynamic";
import { useState, } from "react";
import { Button } from "../ui/Button";

const HeroModal = dynamic(() => import("./HeroModal"), {
    ssr: false,
});


export default function HeroClient() {
    const [open, setOpen] = useState(false);


    return (
        <>
            {/* CTA */}
            <Button onClick={() => setOpen(true)} variant="primary">Talk to an expert!</Button>
            {/* Modal */}
            {open && (
                <HeroModal isOpen={open} onClose={() => setOpen(false)} />
            )}
        </>
    );
}