import React from 'react'
import { IoMdMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";

const BreadCume = ({ isScrolled }) => {

    const headerClasses = isScrolled
        ? " w-full bg-white z-50 py-2  mx-auto "
        : " w-full bg-black/40 hidden  lg:block py-2 text-white z-50  mx-auto ";
    return (
        <div
            className={headerClasses}
        //  className='py-2 items-center  bg-black/40 hidden lg:block'
        >
            <div className='flex justify-between  2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto px-2'>
                <div>
                    <p className="hidden lg:block">
                        <a href="mailto:sales@comfygen.com" className="flex  gap-2">
                            <IoMdMail className=" mt-1" /> sales@comfygen.com
                        </a>
                    </p>
                </div>

                <div>
                    <p className="hidden lg:block">
                        <a
                            className="flex  gap-1"
                            href="https://api.whatsapp.com/send?phone=919587867258"
                        >
                            <MdAddCall className=" mt-1" />
                            +91 9587867258
                        </a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default BreadCume
