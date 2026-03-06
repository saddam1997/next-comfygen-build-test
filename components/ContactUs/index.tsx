

import Image from "next/image";
import ContactFrom from "./ContactFrom";
import Link from "next/link";

export default function LeadSection() {
    return (
        <section className="relative lg:py-[7rem] py-[3rem] bg-[#5951cd] lg:bg-transparent overflow-hidden">

            <Image
                src="https://www.comfygen.com/comfygen-images/contactFormIcons/contact.webp"
                alt="Contact Us Background"
                fill
                priority
                className="lg:object-center hidden lg:block -z-20"
            />

            <div className="absolute inset-0 bg-black/40 -z-10"></div>

            <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-center max-w-7xl mx-auto px-4 gap-8">

                {/* left side */}
                <div className="w-full hidden lg:block">
                    <h2 className="text-white text-2xl lg:text-4xl font-bold mb-4">
                        Start Your Project With Us<br></br>

                    </h2>

                    <p className=" text-white mb-3 font-semibold">We’re here to turn your idea into a real product.</p>

                    <ul className=" text-white space-y-3 ">
                        <p className="">What happens after you contact us?</p>
                        <li className="flex items-center gap-2">
                            <span className="bg-sky-500 w-8 h-full p-1 rounded-md  items-center text-center">1</span>
                            <p>Our team will get in touch with you</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-sky-500 w-8 h-full p-1 rounded-md  items-center text-center">2</span>
                            <p>We understand your needs</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-sky-500 w-8 h-full p-1 rounded-md  items-center text-center">3</span>
                            <p>Get helpful guidance — for free</p>
                        </li>
                    </ul>


                    <div className="pt-7 text-white">
                        <p>
                            Fill out the form and our team will reach out shortly.
                            You can also email us <Link href="mailto:sales@comfygen.com" className="underline font-semibold">sales@comfygen.com</Link>
                        </p>
                    </div>

                    <div className="py-2">
                        <p className="text-white">Trusted by</p>
                        <div className="grid grid-cols-4 items-center">
                            <Link href={"https://clutch.co/profile/comfygen-technologies"}>
                                <Image src={"https://www.comfygen.com/comfygen-images/contactFormIcons/clutch.webp"} alt="" className="object-contain" width={640} height={340} />
                            </Link>
                            <Link href={"https://www.designrush.com/agency/profile/comfygen"}>
                                <Image src={"https://www.comfygen.com/comfygen-images/contactFormIcons/designerush top blockchain development companies in canada.webp"} alt="" className="object-contain" width={640} height={340} />
                            </Link>
                            <Link href={"https://www.goodfirms.co/company/comfygen"}>
                                <Image src={"https://www.comfygen.com/comfygen-images/contactFormIcons/goodfirms top dating app development companies.webp"} alt="" className="object-contain" width={640} height={140} />
                            </Link>
                            <Link href={"https://selectedfirms.co/agency/comfygen-private-limited"}>
                                <Image src={"https://www.comfygen.com/comfygen-images/contactFormIcons/selected firms top ecommerce development company.webp"} alt="" className="object-contain" width={640} height={340} />
                            </Link>

                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="w-full">
                    <div className="w-full lg:hidden">
                        <h2 className="text-white text-2xl lg:text-4xl font-bold mb-4">
                            Start Your Project With Us<br></br>
                        </h2>
                        <p className=" text-white mb-3 font-semibold">We’re here to turn your idea into a real product.</p>
                        
                    </div>
                    <ContactFrom />

                     <div className="py-2 lg:hidden">
                        <p className="text-white">Trusted by</p>
                        <div className="grid grid-cols-4 items-center">
                            <Link href={"https://clutch.co/profile/comfygen-technologies"}>
                                <Image src={"https://www.comfygen.com/comfygen-images/contactFormIcons/clutch.webp"} alt="" className="object-contain" width={640} height={340} />
                            </Link>
                            <Link href={"https://www.designrush.com/agency/profile/comfygen"}>
                                <Image src={"https://www.comfygen.com/comfygen-images/contactFormIcons/designerush top blockchain development companies in canada.webp"} alt="" className="object-contain" width={640} height={340} />
                            </Link>
                            <Link href={"https://www.goodfirms.co/company/comfygen"}>
                                <Image src={"https://www.comfygen.com/comfygen-images/contactFormIcons/goodfirms top dating app development companies.webp"} alt="" className="object-contain" width={640} height={140} />
                            </Link>
                            <Link href={"https://selectedfirms.co/agency/comfygen-private-limited"}>
                                <Image src={"https://www.comfygen.com/comfygen-images/contactFormIcons/selected firms top ecommerce development company.webp"} alt="" className="object-contain" width={640} height={340} />
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}