"use client";

import React from "react";

const techStack = [
    "Ansible", "Fingerprint", "JavaScript", "REST API",
    "Apiary", "Firebase", "Jenkins", "Selenium",
    "Appium", "Flutter", "JUnit", "Socket.io",
    "Apple Pay", "JMeter", "Kotlin", "SonarQube",
    "Bluetooth", "GitLab", "Kubernetes", "SQLite",
];

export default function TechStackSection() {
    return (
        <section className="relative bg-gradient-to-br from-[#040B1F] via-[#0B1026] to-[#140A2D] text-white py-10 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>


                    <h2 className="text-2xl md:text-3xl font-bold mt-6 leading-tight">
                        We Provide Custom Delivery App Development Services in Diverse Sectors
                    </h2>

                    <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
                        At TechAhead, we consistently stay ahead of the competition with
                        our latest tools and technologies for mobile app development.
                    </p>
                </div>

                {/* RIGHT SIDE GRID SCROLL */}
                <div className="relative h-[500px] overflow-hidden">

                    {/* Fade Top */}
                    {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#040B1F] to-transparent z-10" /> */}

                    {/* Fade Bottom */}
                    {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#040B1F] to-transparent z-10" /> */}

                    <div className="scroll-wrapper">
                        <div className="scroll-content">

                            {[...techStack, ...techStack].map((tech, index) => (
                                <div key={index} className="card cursor-pointer">
                                    <div className="icon">⚙</div>
                                    <p>{tech}</p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
        .scroll-wrapper {
          height: 100%;
          overflow: hidden;
        }

        .scroll-content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          animation: scrollUp 15s linear infinite;
        }

        @media (min-width: 1024px) {
          .scroll-content {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .card {
          height: 110px;
          background: #1c243b;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
        </section>
    );
}