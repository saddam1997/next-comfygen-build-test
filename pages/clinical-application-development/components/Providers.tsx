import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import JSON_DATA from "../json/clicnicalApp.json";

export default function Tech() {
  const [tech, setTech] = useState(0);

  const sections = [
    {
      title: "Clinical Apps for Admin",
      description:
        "By Managing administrative tasks in a clinical application development setting can be complex, but with the help of clinical apps designed specifically for administrative purposes, the process becomes much more efficient.",
      listItems: [
        "Billing Applications.",
        "Wearable tech applications.",
        "Time-table scheduling apps.",
        "Clinical assistance apps.",
        "Medical device data collection platforms.",
        "Electronic Health Record Systems.",
        "Drug inventory tracking apps.",
        "Health management software.",
      ],
      imageSrc: "https://www.comfygen.com/img/Clinical-Apps-For-Admin.webp",
    },
    {
      title: "Clinical Apps for Medical Professionals",
      description:
        "You can rely on our clinical application development company in Canada, and the USA to develop feature-rich clinical applications development services for medical professionals. We can help you create the following clinical applications that can simplify the job of medical professionals.",
      listItems: [
        "Healthcare practice management apps.",
        "Medical research apps.",
        "Remote patient monitoring apps.",
        "HER data aggregation and analysis apps.",
      ],
      imageSrc: "https://www.comfygen.com/img/clinical-apps-for-medical-professionals.webp",
    },
    {
      title: "Clinical Apps for Patients",
      description:
        "We are the most popular destination for creating patient-facing apps that blend usability with efficiency and productivity. You can leverage our expertise to create the following types of apps for patients.",
      listItems: [
        "Mental health apps.",
        "Patient engagement apps.",
        "Telemedicine apps.",
        "Appointment scheduling apps.",
        "Symptom checker apps.",
        "Fitness and wellness apps.",
        "Medication intake tracking apps.",
      ],
      imageSrc: "https://www.comfygen.com/img/Apps-For-Patients.webp",
    },
  ];

  return (
    <section className="lg:py-16 py-10 bg-gray-100">
      <div className="space-y-10 mx-auto 2xl:w-10/12 lg:w-11/12 lg:px-0 px-6 w-full">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
            
           Clinical Apps for Healthcare App Development Service Providers
          </h2>
          <p className="text-base text-slate-800">
          We specialise in creating clinical apps for healthcare providers to address different types of functionalities. Our experts specialise in clinical software development and help you create the following variants of clinical apps.
          </p>
        </div>
        <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap">
          {sections.map((section, index) => (
            <span
              key={index}
              onClick={() => setTech(index)}
              className={
                tech === index
                  ? "bg-[#5556D1] border border-[#5556D1] text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-[#5556D1] border border-[#5556D1] px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              {section.title}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5 bg-white">
          {sections.map((section, index) => (
            tech === index && (
              <div key={index} className="flex flex-col lg:flex-row py-10 px-4 lg:px-10 rounded-[42px] items-center">
                {index % 2 === 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h2>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="flex justify-center w-full md:justify-center">
                  <Image
                    className="rounded-md"
                    title="Custom Sports Betting App Development"
                    alt=""
                    src={section.imageSrc}
                    height={400}
                    width={400}
                    loader={uploadcareLoader}
                    unoptimized={true}
                  />
                </div>
                {index % 2 !== 0 ? (
                  <div className="w-full space-y-[5px] text-left">
                    <h2 className="text-[24px] lg:text-4xl font-bold text-[#0E1F51]">{section.title}</h2>
                    <p className="py-6 text-base text-black">{section.description}</p>
                    <ul className="list-disc px-6">
                      {section.listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
