import React from 'react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Image from "next/image";

const BusinessSolustion = ({BusinessSolustion, imageSrc="https://www.comfygen.com/comfygen-images/delivery-app-development/transdelivery-delivery-app-development-app-solutions.webp"}) => {


    const getIcon = (iconType: string) => {
        const iconProps = { size: 24, className: "text-red-500" };
        return <IoIosCheckmarkCircleOutline {...iconProps} />;
    };

    return (
        <div className=" bg-white w-full py-12 px-4">
            <div className="w-full">
                {/* Header Section */}
                <div className="text-center">
                    <h2 className="text-3xl px-1 mt-6 text-center font-bold mb-6 max-w-8xl">
                        {BusinessSolustion?.title}
                    </h2>
                    <p className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto text-base text-center font-normal" dangerouslySetInnerHTML={{ __html: BusinessSolustion?.subtitle }}>
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 items-center gap-6 mt-1">
                    {/* left side */}
                    <div className="w-full flex justify-center lg:justify-end">
                        <div className="w-full max-w-[970px] p-2">
                            <div className="overflow-hidden ">
                                <Image
                                    src={imageSrc}
                                    alt="delivery-app-development"
                                    width={970}
                                    height={940}
                                    className="object-contain bg-center "
                                    priority
                                    quality={75}
                                />
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="w-full">
                        <div className="grid md:grid-cols-2">
                            {BusinessSolustion?.features?.map((feature:any) => (
                                <div key={feature.id} className="p-3">
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight" dangerouslySetInnerHTML={{ __html: feature?.title }} >
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature?.description }}>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSolustion;
