import Image from "next/image";
import Link from "next/link";

export default function CompanyLink() {
    return (
        <section className="pb-4">
            <div className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 w-11/12 mx-auto text-center">
                <div className="grid lg:grid-cols-9 md:grid-cols-3 gap-6 pt-4">
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300 bg-white">
                        <Link target="_blank" href="https://clutch.co/profile/comfygen" passHref={true}>
                            <Image
                                width={150}      
                                height={100}
                                src="https://www.comfygen.com/img/cluth-logo.webp"
                                alt="Clutch"
                                className=" rounded-xl"
                                style={{ width: "auto", height: "auto" }}
                                  
                            />
                        </Link>
                    </div>
                    {/* <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://develop4u.co/company/comfygen" passHref={true}>
                            <Image
                                width={150}        // numeric
                                height={100}
                                src="https://www.comfygen.com/img/Develop-4u.webp"
                                alt="Developer4"
                                className=" rounded-xl"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div> */}
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.glassdoor.co.in/Overview/Working-at-Comfygen-EI_IE8613382.11,19.htm" passHref={true}>
                            <Image
                                width={150}        // numeric
                                height={100}
                                src="https://www.comfygen.com/img/Glass-door.webp"
                                alt="Glassdoor"
                                className=" rounded-xl"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.trustpilot.com/review/comfygen.com" passHref={true}>
                            <Image
                                width={150}        // numeric
                                height={100}
                                src="https://www.comfygen.com/img/Trust-pilot.webp"
                                alt="Trustpilot"
                                className=" rounded-xl"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.goodfirms.co/company/comfygen" passHref={true}>
                            <Image
                                width={150}        // numeric
                                height={100}
                                src="https://www.comfygen.com/img/good-firmas.webp"
                                alt="Goodfirms"
                                className=" rounded-xl "
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://itrate.co/company/comfygen-pvt-ltd" passHref={true}>
                            <Image
                                width={150}        // numeric
                                height={100}
                                src="https://www.comfygen.com/img/itrate.webp"
                                alt="Goodfirms"
                                className="w-20 rounded-xl "
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.topdevelopers.co/profile/comfygen" passHref={true}>
                            <Image
                                width={150}        // numeric
                                height={100}
                                src="https://www.comfygen.com/img/topdevelopers-img.webp"
                                alt="topdevelopers"
                                className="w-20 rounded-xl "
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href="https://www.designrush.com" passHref={true}>
                            <Image
                                width={150}        // numeric
                                height={100}
                                src="https://www.comfygen.com/img/designrush.webp"
                                alt="Best Mobile App Development Company"
                                className="w-20 rounded-xl "
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center border-double border-4 border-gray-400  py-1  hover:scale-90 transition-all duration-300  bg-white">
                        <Link target="_blank" href='/' passHref={true}>
                            <Image
                                width={150}        // numeric
                                height={100}
                                src="https://www.comfygen.com/img/selectedFirms.webp"
                                alt="Top Mobile App Development Company"
                                className="w-20 rounded-xl "
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
