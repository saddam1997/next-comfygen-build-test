import React from 'react'

const Heading = ({ heading }) => {
    return (
        <div>
            <h2 className="text-sm lg:text-lg xl:text-[45px] font-poppins font-semibold text-[#000] lg:leading-tight">
                {heading}
            </h2>
        </div>
    )
}

export default Heading
