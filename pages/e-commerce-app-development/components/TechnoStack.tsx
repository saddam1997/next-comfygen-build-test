import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const IosApp = [
  { img: "https://www.comfygen.com/media/svg/tech/html5-original.svg", title: "html5", num: "1", url: "" },
  { img: "https://www.comfygen.com/media/svg/tech/css3-original.svg", title: "css3", num: "2", url: "" },
  { img: "https://www.comfygen.com/media/svg/tech/nextjs-original.svg", title: "nextjs", num: "3", url: "" },
  { img: "https://www.comfygen.com/media/svg/tech/react-original.svg", title: "react js", num: "4", url: "" },
  { img: "https://www.comfygen.com/media/svg/tech/tailwindcss-plain.svg", title: "tailwindcss", num: "5", url: "" },
  { img: "https://www.comfygen.com/media/svg/tech/angularjs-original.svg", title: "angular js", num: "6", url: "" },
  { img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", title: "javascript", num: "7", url: "" },
  { img: "https://www.comfygen.com/media/svg/tech/typescript-original.svg", title: "typescript", num: "8", url: "" },
  { img: "https://www.comfygen.com/media/svg/tech/bootstrap-original.svg", title: "bootstrap", num: "9", url: "" },
];
const AndroidApp = [
  { img: "https://www.comfygen.com/media/svg/tech/mongodb-original.svg", title: "mongodb", num: "1", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/googlecloud-original.svg", title: "google Cloud", num: "2", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/azure-original.svg", title: "azure", num: "3", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/nginx-original.svg", title: "nginx", num: "4", url: "#" },
  { img: "https://www.comfygen.com/images/python-stack-technology.webp", title: "Python", num: "5", url: "/python-development" },
  { img: "https://www.comfygen.com/media/svg/tech/mysql-original-wordmark.svg", title: "mysql", num: "6", url: "#" },
  { img: "https://www.comfygen.com/img/stackimg/rails.webp", title: "Rails", num: "7", url: "#" },
  { img: "https://www.comfygen.com/img/stackimg/nodejs.svg", title: "Node.js", num: "8", url: "/node-js-development" },
  { img: "https://www.comfygen.com/img/stackimg/ruby.webp", title: "Ruby", num: "8", url: "#" },
];
const CrossApp = [
  { img: "https://www.comfygen.com/media/svg/tech/mongodb-original.svg", title: "mongodb", num: "1", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/googlecloud-original.svg", title: "google Cloud", num: "2", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/azure-original.svg", title: "azure", num: "3", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/nginx-original.svg", title: "nginx", num: "4", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/mysql-original-wordmark.svg", title: "mysql", num: "6", url: "#" },
  { img: "https://www.comfygen.com/img/stackimg/rails.webp", title: "Rails", num: "7", url: "#" },
  { img: "https://www.comfygen.com/img/stackimg/ruby.webp", title: "Ruby", num: "8", url: "#" },
];
const BackendApp = [
  { img: "https://www.comfygen.com/media/svg/tech/wordpress.webp", title: "WordPress", num: "1", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/drupal.webp", title: "Drupal", num: "2", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/joomla.webp", title: "Joomla", num: "3", url: "#" }
];
const EcommApp = [
  { img: "https://www.comfygen.com/media/svg/tech/magento.webp", title: "Magento", num: "1", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/shopify.webp", title: "Shopify", num: "2", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/woo-commerce.webp", title: "WooCommerce", num: "3", url: "#" }
];
const DevopsApp = [
  { img: "https://www.comfygen.com/media/svg/tech/mongodb-original.svg", title: "mongodb", num: "1", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/amazonwebservices-original.svg", title: "AWS", num: "2", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/azure-original.svg", title: "azure", num: "3", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/nginx-original.svg", title: "nginx", num: "4", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/docker.webp", title: "Docker", num: "5", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/mysql-original-wordmark.svg", title: "mysql", num: "6", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/kubernetes.webp", title: "Kubernetes", num: "7", url: "#" }
];
const Panelheader = [
  {
    num: "01",
    title: "Technologies We Use for Website Development",
    decs: "Comfygen leverages the latest and most advanced technologies to deliver high-quality web solutions that meet your business needs. Our team of experts is proficient in a wide range of technologies, ensuring that we can provide the best tools and platforms for your project. Here’s a look at some of the key technologies we use"
  },
];

export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);

  const techData = [
    IosApp,
    AndroidApp,
    CrossApp,
    BackendApp,
    EcommApp,
    DevopsApp
  ];

  return (
    <>
      <section className=' bg-[#F3F4F6]'>
        <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  py-10">
          {Panelheader.map((elem) => {
            const { title, decs } = elem;
            return (
              <div key={elem.num} className="flex flex-col justify-center text-center mx-auto">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                  {title}
                </h2>
                <p className='text-base text-slate-800'>{decs}</p>
              </div>
            );
          })}
          <div className="xl:flex items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
            <div className="flex flex-col items-center space-y-6 justify-start xl:w-[40%] bg-white p-10 w-full rounded-lg">
              {["Frontend", "Backend", "Database", "Content Management", "eCommerce", "Cloud and Devops"].map((techTitle, index) => (
                <span
                  key={index}
                  onClick={() => setTech(index)}
                  className={
                    tech === index
                      ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                      : "bg-transparent text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  }
                >
                  {techTitle}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full bg-white p-4 rounded-lg">
              {techData[tech].map((elem, index) => (
                <Link key={index} href={elem.url} passHref>
                  <div className="flex flex-col justify-center items-center rounded-lg bg-white space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border">
                    <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
                      <Image src={elem.img} alt={elem.title} width={50} height={50} className="group-hover:scale-105 transition-all duration-200 transform" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black">
                        {elem.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
