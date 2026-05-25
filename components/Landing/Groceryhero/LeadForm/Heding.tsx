

const Heding = ({DATA}) => {
    return (
        <div>
            <h3 className="mb-1.5 font-[Fraunces] text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1A1614] sm:text-[24px]">
                {DATA.heading}
            </h3>

            {/* Sub Text */}
            <p className="mb-5 flex items-center gap-1.5 text-[13px] text-[#7A716C]">
                {/* <span>🔒</span> */}
               {DATA.description}
            </p>
        </div>
    )
}

export default Heding
