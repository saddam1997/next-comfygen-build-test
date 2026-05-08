"use client";

import React from "react";
import MobileDropdown from "./MobileDropdown";
import { mobileMenuData } from "./menuData";

type Props = {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({
    menu,
    setMenu,
}: Props) {
    return (
        <div
            className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white z-40 transition-all duration-300 overflow-y-auto lg:hidden ${menu
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
                }`}
        >
            <div className="p-5 space-y-5">
                {mobileMenuData.map((menuItem, index) => (
                    <MobileDropdown
                        key={index}
                        title={menuItem.title}
                        items={menuItem.items}
                        setMenu={setMenu}
                    />
                ))}


                {/* 
                <Link className="pt-5" href="/contact-us" onClick={() => setMenu(false)}>
                    <Button
                        variant="secondary"
                        radius="full"
                        className="w-full py-3 mt-5 text-white rounded-full"
                    >
                        Get a Quote →
                    </Button>
                </Link> */}

                {/* CONTACT */}

                {/* <div className="pt-5 border-t space-y-4">
                    <a
                        href="mailto:sales@comfygen.com"
                        className="flex items-center gap-2 text-sm text-gray-700"
                    >
                        <Mail size={18} />
                        sales@comfygen.com
                    </a>

                    <a
                        href="https://api.whatsapp.com/send?phone=919587867258"
                        className="flex items-center gap-2 text-sm text-gray-700"
                    >
                        <PhoneMissed size={18} />
                        +91 9587867258
                    </a>
                </div> */}
            </div>
        </div>
    );
}