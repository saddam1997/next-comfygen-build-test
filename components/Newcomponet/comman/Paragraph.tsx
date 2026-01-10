import React from 'react'

const Paragraph = ({ description }) => {
    return (
        <div>
            <p
                className="text-[#444] text-sm lg:text-sm xl:text-[16px] lg:leading-relaxed font-normal font-poppins"
                dangerouslySetInnerHTML={{ __html: description }}
            />

        </div>
    )
}

export default Paragraph
