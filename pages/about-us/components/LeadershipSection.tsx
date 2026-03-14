
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from 'react-icons/fa';

export default function LeadershipSection() {
    return (
        <section className=" py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Leadership Card */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-10 flex flex-col lg:flex-row items-center justify-between">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl text-white">
                        <span className="bg-white/20 font-semibold text-sm px-4 py-1 rounded-full">
                            Our Leadership Team
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-semibold mt-4">
                            Mr. Saddam Husen
                        </h2>

                        <p className="mt-2 text-white font-medium">
                            (Comfygen Technology CTO)
                        </p>

                        <p className="mt-6 text-white font-medium leading-relaxed text-sm">
                            Mr. Saddam Husen, CTO at Comfygen, is a renowned Blockchain expert and IT consultant with extensive experience in blockchain development, crypto wallets, DeFi, ICOs, and smart contracts. Passionate about digital transformation, he helps businesses harness blockchain technology’s potential, driving innovation and enhancing IT infrastructure for global success
                        </p>
                        <button className='text-base mt-4 font-medium  border border-white rounded-full px-6 py-1 text-center hover:text-white cursor-pointer transition duration-300 relative '>
                            <Link className='flex gap-3 items-center' target='_blank' href={'https://in.linkedin.com/in/saddam-husen'}>
                                Linkdin <FaLinkedin />
                            </Link>
                        </button>
                        {/* <button className="mt-6 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition">
              Schedule a Meeting →
            </button> */}
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative mt-10 lg:mt-0">
                        <Image
                            src="/saadam_cto2.png"
                            alt="Nikhil Bansal"
                            width={320}
                            height={420}
                            className="object-contain rounded-md"
                        />

                        <div className="text-white text-center mt-4">
                            <p className="font-semibold">Mr. Saddam Husen </p>
                            <p className="text-sm text-white font-medium">
                                (Comfygen Technology CTO)
                            </p>
                        </div>
                    </div>
                </div>

                {/* TEAM CARDS */}
                {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                 
                    {[
                        {
                            name: "Reena Bhagat",
                            role: "Head of Delivery",
                            img: "https://www.comfygen.com/image/mr-saddam-husen.webp",
                        },
                        {
                            name: "Rishi Pahwa",
                            role: "Project Manager",
                            img: "https://www.comfygen.com/image/mr-saddam-husen.webp",
                        },
                        {
                            name: "Diksha Verma",
                            role: "Head of HR",
                            img: "https://www.comfygen.com/image/mr-saddam-husen.webp",
                        },
                        {
                            name: "Sandeep Singh",
                            role: "Design Lead",
                            img: "https://www.comfygen.com/image/mr-saddam-husen.webp",
                        },
                    ].map((member, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={140}
                                    height={160}
                                    className="object-contain"
                                />
                            </div>

                            <div className="border-t mt-4 pt-4">
                                <p className="font-semibold">{member.name}</p>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>  */}
            </div>
        </section>
    );
}