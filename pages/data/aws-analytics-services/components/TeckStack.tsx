import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Tech({
  title,
  description,
  filterCategory = [],
  customTechData = null,
}) {
  const [tech, setTech] = useState(0);
  const router = useRouter();

  const defaultTechData = {
    "Data Warehousing": [
      {
        img: "https://www.comfygen.com/comfygen-images/data/Amazon-Redshift.svg",
        alt: "Amazon Redshift",
        name: "Amazon Redshift",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/data/Snowflake.svg",
        alt: "Snowflake ",
        name: "Snowflake",
        num: "2",
      },
    ],
    "Big Data Processing": [
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/EMR.svg",
        alt: "AWS EMR",
        name: "AWS EMR",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/Spark.svg",
        alt: "Apache Spark",
        name: "Apache Spark",
        num: "2",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/data/Hadoop.svg",
        alt: "Hadoop",
        name: "Hadoop",
        num: "3",
      },
    ],

    "Real-Time Analytics": [
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/EMR.svg",
        alt: "Amazon Kinesis",
        name: "Kinesis",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/Flink.svg",
        alt: "Apache Flink",
        name: "Flink",
        num: "2",
      },
    ],

    "BI & Visualization": [
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/QuickSight.svg",
        alt: "Amazon QuickSight",
        name: "QuickSight",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/Tableau.svg",
        alt: "Tableau on AWS",
        name: "Tableau/AWS",
        num: "2",
      },
    ],

    "ETL & Data Integration": [
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/Glue.svg",
        alt: "AWS Glue",
        name: "AWS Glue",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/Apache-NiFi.svg",
        alt: "Apache NiFi",
        name: "Apache NiFi",
        num: "2",
      },
    ],

    "AI & Machine Learning": [
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/SageMaker.svg",
        alt: "Amazon SageMaker",
        name: "Amazon SageMaker",
        num: "1",
      },
      {
        img: "https://www.comfygen.com/comfygen-images/aws-analytics-services/TensorFlow.svg",
        alt: "TensorFlow",
        name: "TensorFlow",
        num: "2",
      },
    ],
  };

  const techData = customTechData || defaultTechData;

  const filteredTechData = Object.keys(techData)
    .filter((key) => !filterCategory.includes(key))
    .reduce((obj, key) => {
      obj[key] = techData[key];
      return obj;
    }, {});

  const techCategories = Object.keys(filteredTechData);

  return (
    <section className="lg:py-16 py-10 bg-[#F3F4F6]">
      <div className="bg-[#0C0F18] mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 md:py-14 py-8 md:px-10 px-6 rounded-3xl">
        <div className="">
          <div>
            <div className="py-4">
              <h2 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl text-white">
                {title}
              </h2>
              <p
                className="text-base mt-2 text-white"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>

          <div>
            <div className="flex whitespace-nowrap items-center gap-3 justify-start mt-2 overflow-x-auto button-scroll py-3">
              {techCategories.map((key, index) => (
                <span
                  key={index}
                  onClick={() => setTech(index)}
                  className={`px-6 py-2 md:text-base  text-sm font-normal rounded-full cursor-pointer capitalize ${
                    tech === index
                      ? "bg-[#5556D1] border border-[#5556D1] text-white"
                      : "text-white border border-white/20 hover:bg-gray-950"
                  }`}
                >
                  {key}
                </span>
              ))}
            </div>

            <div className="grid xl:grid-cols-4 gap-2 md:grid-cols-3 grid-cols-1 mt-3 max-h-[275px] overflow-y-auto  overflow-hidden  head-scroll">
              {filteredTechData[techCategories[tech]]?.map((elem) => (
                <div
                  key={elem.num}
                  className="flex items-center border justify-center rounded bg-[#1d1d1d] border-white/5 px-6 py-2 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="h-16 w-16 flex items-center justify-center">
                    <Image
                      src={elem.img}
                      alt={elem.name}
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white ml-3">
                    {elem.name}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                // onClick={() => router.push('/contact-us')}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey) {
                    window.open("/contact-us", "_blank");
                  } else {
                    router.push("/contact-us");
                  }
                }}
                className="text-white hover:bg-[#5556D1] bg-[#0C0F18] border border-whitesss px-8 py-2.5 text-lg font-semibold rounded-full flex items-center  gap-1"
              >
                Connect Experts <MdOutlineArrowOutward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
