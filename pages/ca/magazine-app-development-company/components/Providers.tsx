import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";


export default function Tech() {
  const [tech, setTech] = useState(0);

  const sections = [
    {
      title: "For Readers",
      description:
        "We craft a magazine app for Android for readers to offer diverse content, personalized recommendations, offline access, and interactive features. We try to enhance convenience with subscription management features and provide a seamless and engaging reading experience across multiple devices. Here are the different features we prioritize for readers",
      listItems: [
        "Content diversity with a wide range of genres. ",
        "Tailored recommendations based on reading habits.",
        "Offline access by downloading content.",
        "Interactive elements such as videos and quizzes.",
        "Intuitive navigation and seamless reading experience.",
        "Convenient management of subscriptions and payments.",
        "Easy sharing of articles and content on social media."
      ],
      imageSrc: "https://www.comfygen.com/img/for-readers.svg",
    },
    {
      title: "For News Publishers",
      description:
        "We develop magazine apps for news publishers that feature real-time updates, interactive maps, and personalized alerts. Our App Developer Magazine tries to enhance readers with features of breaking news and in-depth reporting. Here are the features we add;",
      listItems: [
        "24/7 connectivity with readers.",
        "Enhancement of app quality with recent updates.",
        "Social media integration.",
        "Access to valuable insights.",
        "Multiple publishing modes.",
        "Analytics to understand reader behavior.",
        "Customizable notifications."

      ],
      imageSrc: "https://www.comfygen.com/img/for-media-professionals.webp",
    },
    {
      title: "For Other Industrial Publishers",
      description:
        "Our magazine app development firm provides services to different industrial sectors. We align the features based on their specific requirements. Here are the common features for all industrial publishers;",
      listItems: [
        "Real-time content update feature of industry news.",
        "Multimedia integration of industry-specific videos and images.",
        "Personalization based on reader preferences.",
        "Metrics to get insights for content optimization.",
        "Easy subscription options and management.",
        "Ability to download content for offline reading.",
        "Targeted advertising placements for industry-specific services." ,
        "Industry-specific articles, reports, and insights."
      ],
      imageSrc: "https://www.comfygen.com/img/for-other-industrial-publishers.svg",
    },
  ];

  return (
    <section className="lg:py-16 py-10 bg-[#fff]">
      <div className="space-y-10 mx-auto 2xl:w-10/12 lg:w-11/12 lg:px-0 px-6 w-full">
        <div className="flex flex-col justify-center text-center">
          <h2 className="py-4 text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
          Features You Should Look For in Magazine Apps!
          </h2>
          <p className="text-base text-[#212121]">
          When developing Magazine Mobile App Development, we prioritize features such as interactive content for engagement, seamless navigation, offline access for convenience, personalization options to tailor content, social sharing for connectivity, and robust search functionality. Our service supports frequent updates, multimedia integration, subscription management, and analytics for a comprehensive reading and user experience.
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
