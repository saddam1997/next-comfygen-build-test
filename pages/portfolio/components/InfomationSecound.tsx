import React from "react";
import Image from "next/image";

const InfomationFirst = (props) => {
    const {
        heading,
        points,
        imageSrc,
    } = props;

    return (
        <section className="bg-white lg:py-16 py-10">
            <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
                <div className="grid lg:grid-cols-2 mx-auto items-center gap-14">
                    <div>
                        <div className="space-y-4">
                            <h2 className="xl:text-4xl text-3xl text-[#212121] mt-3 font-bold">
                                {heading}
                            </h2>
                            <div className="space-y-4 ">
                                <ul className="space-y-2">
                                    {points?.map((point, index) => (
                                        <li key={index} className="text-[#212121] md:text-base text-sm " dangerouslySetInnerHTML={{ __html: point }}>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image width={782} height={798} className=" rounded-2xl" src={imageSrc} alt="About Us" />
                    </div>
                </div>
            </div>
        </section>
    );
};
InfomationFirst.defaultProps = {
    heading: "",
    points: [],
    imageSrc: "",
};

export default InfomationFirst;

