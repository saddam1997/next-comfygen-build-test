import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
// import JSON_DATA from "../json/teleMedicine.json";

export default function Tech() {
  const [tech, setTech] = useState(0);

  const sections = [
    {
      title: "For general public",
      description:
        "Here are some important features that make the user flow easy for the general public and readers. These features ensure that the public gets news on time and can stay in touch with what happens in real-time.",
      listItems: [
        "User profile and customization options ",
        "Personalized news feed powered by AI",
        "Push notifications for breaking news",
        "Real-time news updates",
        "Embedded video and audio player"
      ],
      imageSrc: "https://www.comfygen.com/img/for-general-public.webp",
    },
    {
      title: "For Media Professionals ",
      description:
        "Here are some important features for media professionals and publishers who might need the help of publisher tools, polls, analytics, and other data management tools integrated into the application. This allows them to moderate content and interact with the users. ",
      listItems: [
        "Social media sharing buttons",
        "In-app discussion and comments ",
        "Moderation tools for discussion management ",
        "Real-time polling and results display",
        "Content performance metrics for publishers "
      ],
      imageSrc: "https://www.comfygen.com/img/for-media-professionals.webp",
    },
    {
      title: "For students",
      description:
        "For students, we create applications that can focus their attention on the most necessary topics and also have increased readability so that a student can learn and interact at any time, anywhere. ",
      listItems: [
        "Dynamic adaptation of news feed",
        "Topic-based notifications and alerts",
        "Offline reading capabilities for any-time reading",
        "Interactive charts and photo gallery ",
        "Voice-activated search functions"
      ],
      imageSrc: "https://www.comfygen.com/img/for-students.webp",
    },
  ];

  return (
    <section className="lg:py-16 py-10 ">
      <div className="space-y-10 mx-auto 2xl:w-10/12 w-10/12 lg:w-11/12 ">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
            Best-in-class features integrated into new media and news applications!
          </h2>
          <p className="text-base text-black">
            At Comfygen, we focus on including the most diverse and updated features in the application that is developed with our News App development services. Here are the most trendy and on-demand features of news applications that we include in our digital product. livery application performance. Check out the collection of interesting features for different participants who use our pharmacy delivery apps.
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
        <div className="grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5 bg-white rounded-lg">
          {sections.map((section, index) => (
            tech === index && (
              <div key={index} className="flex flex-col lg:flex-row py-10 px-4 lg:px-10 rounded-[42px] items-center lg:space-y-0 space-y-6">
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
