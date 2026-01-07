import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const techData = {
  Blockchain: [
    {
      img: "https://www.comfygen.com/media/svg/tech/nodejs-original.svg",
      alt: "Nodejs",
      name: "<a href='/blockchain-development' class='text-blue-600 font-semibold'>Blockchain</a> is revolutionizing healthcare by securely managing patient data. With tamper-proof records and transparent transactions, healthcare apps use blockchain to improve data integrity, streamline processes, and enhance patient privacy, making it easier for providers to share information without compromising security.",
      num: "1",
    },
  ],

  AI_ML: [
    {
      img: "https://www.comfygen.com/media/svg/tech/html5-original.svg",
      alt: "Html5",
      name: "Artificial Intelligence (AI) and Machine Learning (ML) are transforming healthcare software by analyzing large data sets, predicting patient outcomes, and automating administrative tasks. These technologies empower healthcare apps to deliver more personalized care, make faster diagnoses, and improve overall efficiency in patient management.",
      num: "1",
    },
  ],
  Data_Analytics: [
    {
      img: "https://www.comfygen.com/media/svg/tech/android-plain.svg",
      alt: "Android Plan",
      name: "Data analytics in healthcare helps apps turn vast amounts of health data into actionable insights. By analyzing patient data, healthcare providers can predict disease outbreaks, optimize treatment plans, and improve patient outcomes, making healthcare decisions smarter and more data-driven.",
      num: "1",
    },
  ],

  AR_VR: [
    {
      img: "https://www.comfygen.com/media/svg/tech/figma.svg",
      alt: "Figma",
      name: "Augmented Reality (AR) and Virtual Reality (VR) are enhancing patient care by creating immersive experiences for medical training and treatment. These technologies help healthcare apps simulate surgeries, visualize patient anatomy, and provide real-time guidance during procedures, significantly improving precision and learning opportunities.",
      num: "1",
    },
  ],

  IoMT: [
    {
      img: "https://www.comfygen.com/img/stackimg/binance.svg",
      alt: "Binance",
      name: "The Internet of Medical Things (IoMT) connects medical devices to healthcare systems, enabling real-time data sharing and remote monitoring. This technology powers healthcare apps to track patient vitals, automate data collection, and enhance preventive care, offering more personalized and proactive treatment options.",
      num: "1",
    },
  ],
  Computer_Vision: [
    {
      img: "https://www.comfygen.com/img/stackimg/binance.svg",
      alt: "Binance",
      name: "Computer Vision enables healthcare apps to analyze medical images and detect abnormalities with high accuracy. From early cancer detection to automating image-based diagnoses, this technology speeds up diagnosis, reduces human error, and enhances treatment planning, making healthcare more efficient and precise.",
      num: "1",
    },
  ],
  Business_Intelligence: [
    {
      img: "https://www.comfygen.com/img/stackimg/binance.svg",
      alt: "Binance",
      name: "Business Intelligence (BI) tools help healthcare organizations make better decisions by analyzing operational data. Through BI-driven healthcare apps, organizations can optimize resource management, improve patient satisfaction, and monitor key performance indicators (KPIs) for better efficiency and service quality.",
      num: "1",
    },
  ],
  GenAI: [
    {
      img: "https://www.comfygen.com/img/stackimg/binance.svg",
      alt: "Binance",
      name: "Generative AI (Gen AI) is bringing innovation to healthcare by creating personalized treatment plans and automating medical documentation. This cutting-edge technology powers apps to simulate patient outcomes, generate insights from medical data and assist healthcare providers in delivering more accurate and faster care.",
      num: "1",
    },
  ],
  CloudComputing: [
    {
      img: "https://www.comfygen.com/img/stackimg/binance.svg",
      alt: "Binance",
      name: "Cloud computing in healthcare allows software solutions to store and access patient data securely from anywhere. It enables seamless collaboration, real-time updates, and scalable data management, making healthcare services more accessible, efficient, and reliable across platforms and devices.",
      num: "1",
    },
  ],
};

export default function Tech() {
  const [tech, setTech] = useState(0);
  const techKeys = Object.keys(techData);

  const getDisplayKey = (key) => {
    switch (key) {
      case "AI_ML":
        return "AI / ML";
      case "Data_Analytics":
        return "Data Analytics";
      case "AR_VR":
        return "AR / VR";
      case "IoMT":
        return "IoMT";
      case "Computer_Vision":
        return "Computer Vision";
      case "Business_Intelligence":
        return "Business Intelligence";
      case "GenAI":
        return "Generative AI";
      case "CloudComputing":
        return "Cloud Computing";
      default:
        return key.replace(/_/g, " "); // Fallback to converting underscores
    }
  };

  return (
    <>
      <section className="lg:py-16 py-10 bg-[#26304F]">
        <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="gap-10">
            <div>
              <div className="py-4">
                <h2 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#fff] text-center ">
                  Smart Healthcare Software Solutions with Future-Driven
                  Technologies
                </h2>
                <p className="text-lg mt-2 text-white text-center">
                  Step ahead in the future of healthcare using cutting-edge
                  technologies and advanced techs that deliver interactive
                  patient experiences.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 justify-center mt-2">
                {Object.keys(techData).map((key, index) => (
                  <span
                    key={index}
                    onClick={() => setTech(index)}
                    className={
                      tech === index
                        ? "bg-blue-600 border border-blue-600 text-white px-8 py-2 text-lg font-semibold rounded-full capitalize cursor-pointer"
                        : " text-black bg-white px-8 py-2 text-lg font-semibold rounded-full capitalize cursor-pointer"
                    }
                  >
                    {getDisplayKey(key)}
                  </span>
                ))}
              </div>
              <div className="flex justify-center">
                <Link href="/quote" passHref={true}>
                  <button className="btn btn-fix lazyloaded mt-7 border border-[#00000042]">
                    Get In Touch{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.231"
                      height="11.738"
                      viewBox="0 0 24.231 11.738"
                    >
                      {" "}
                      <path
                        id="Path_1487529"
                        data-name="Path 1487529"
                        d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                        transform="translate(-521.511 -1346.214)"
                        fill="#000"
                      ></path>{" "}
                    </svg>{" "}
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="w-full relative pt-6 capitalize">
                {techData[Object.keys(techData)[tech]].map((elem) => (
                  <div
                    key={elem.num}
                    className="flex justify-start items-center rounded-lg bg-white space-x-3 px-6 py-2 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                  >
                    <div className="h-16 w-16  font-semibold flex items-center justify-center ">
                      {/* <Image src={elem.img} alt={elem.name} width={50} height={50} loading="lazy" className="group-hover:scale-105 transition-all duration-200 transform" /> */}
                    </div>
                    <div>
                      <p
                        className="text-black py-3"
                        dangerouslySetInnerHTML={{ __html: elem.name }}
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
