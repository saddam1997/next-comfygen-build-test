import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const BlockchainStack = [
  { img: "https://www.comfygen.com/img/react.webp", alt: 'React', title: "React", url: "#", num: "1" },
  { img: "https://www.comfygen.com/img/angular.webp", alt: 'Angular', title: "Angular", url: "#", num: "2" },
  { img: "https://www.comfygen.com/media/svg/tech/nextjs-original.svg", alt: 'Next.js', title: "Next.js", url: "/ethereum-token-development", num: "3" },
  { img: "https://www.comfygen.com/img/Vue.Js-icon.webp", alt: 'Vue.js', title: "Vue.js", url: "#", num: "4" },
  { img: "https://www.comfygen.com/img/flutter.webp", alt: 'Flutter', title: "Flutter", url: "#", num: "5", },
  { img: "https://www.comfygen.com/img/kotlin.webp", alt: 'Kotlin', title: "Kotlin ", url: "#", num: "6" },
  { img: "https://www.comfygen.com/media/svg/tech/html5-original.svg", alt: 'HTML5 & CSS3', title: "HTML5 & CSS3", url: "/solana-token-development", num: "7" },
  { img: "https://www.comfygen.com/img/swift.webp", alt: 'Swift', title: "Swift", url: "/polygon-blockchain-development", num: "8" },
  { img: "https://www.comfygen.com/img/xamarin.webp", alt: 'Xamarin', title: "Xamarin", url: "/polygon-blockchain-development", num: "8" }
];
const FrontendStack = [
  { img: "https://www.comfygen.com/media/svg/tech/nodejs-original.svg", alt: 'Node.js', title: "Node.js", url: "#", num: "1" },
  { img: "https://www.comfygen.com/images/python-stack-technology.webp", alt: 'Python', title: "Python", url: "#", num: "2" },
  { img: "https://www.comfygen.com/img/rails.svg", alt: 'Ruby On Rails', title: "Ruby On Rails ", url: "/next-js-development", num: "3" },
  { img: "https://www.comfygen.com/img/PHP-logo.svg", alt: 'PHP', title: "PHP", url: "#", num: "4" },
  { img: "https://www.comfygen.com/img/java-icon-img.webp", alt: 'Java', title: "Java", url: "#", num: "5" },
  { img: "https://www.comfygen.com/img/django.svg", alt: 'Django', title: "Django", url: "#", num: "6" },
  { img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", alt: 'Express.js', title: "Express.js", url: "#", num: "7" },
  { img: "https://www.comfygen.com/img/spring.svg", alt: 'Spring Boot', title: "Spring Boot", url: "node-js-development", num: "8" },
];
const ProgrammStack = [
  { num: "1", img: "https://www.comfygen.com/img/ios-apple.svg", url: "#", title: "iOS" },
  { num: "2", img: "https://www.comfygen.com/img/android-os.svg", url: "#", title: "Android", },
  { num: "3", img: "https://www.comfygen.com/img/react-native-icon.svg", url: "#", title: "React Native", },
  { num: "4", img: "https://www.comfygen.com/img/flutter-icon.svg", url: "#", title: "Flutter", },
];
const DatabaseStack = [
  { img: "https://www.comfygen.com/media/svg/tech/mongodb-original.svg", alt: 'Mongodb', title: "MongoDB", num: "1", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/mysql-original-wordmark.svg", alt: 'MySQL', title: "MySQL", num: "2", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/firebase-plain.svg", alt: 'Firebase', title: "Firebase", num: "3", url: "#" },
  { img: "https://www.comfygen.com/img/postgresql.svg", alt: 'PostgreSQL', title: "PostgreSQL", num: "4", url: "#" },
  { img: "https://www.comfygen.com/img/file-type-sqlite.svg", alt: 'SQLite', title: "SQLite", num: "5", url: "#" },
  { img: "https://www.comfygen.com/img/oracle-cloud.svg", alt: 'Oracle', title: "Oracle", num: "6", url: "#" },
];
const UXUI = [
  { img: "https://www.comfygen.com/img/adobe-xd.svg", alt: 'Adobe XD', title: "Adobe XD", num: "1", url: "#" },
  { img: "https://www.comfygen.com/img/sketch.svg", alt: 'Sketch', title: "Sketch", num: "2", url: "#" },
  { img: "https://www.comfygen.com/img/figma-icon-img.svg", alt: 'Figma', title: "Figma", num: "3", url: "#" },
  { img: "https://www.comfygen.com/img/invision.svg", alt: 'InVision', title: "InVision", num: "4", url: "#" },
  { img: "https://www.comfygen.com/img/zeplin.svg", alt: 'Zeplin', title: "Zeplin", num: "5", url: "#" },
];
const Panelheader = [
  {
    num: "01",
    title: <h2 className='py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize'> <span className='text-[#B264C0]'>Technologies Used for</span> Taxi Booking App Development</h2> ,
    decs: "We use the core technologies in our cutting edge Taxi Booking App Development Services and solutions to build efficient cab booking app development service to ease users and businesses"
  },
];



export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    <section className='py-10 bg-[#223547]'>
  <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 ">
      {Panelheader.map((elem: any) => {
        const { title,decs } = elem;
        return (
          <div className="flex flex-col justify-center text-center  mx-auto">      
              {title}       
            <p className='text-white'>{decs}</p>
          </div>
        );
      })}
      <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
        <div className="flex flex-col items-start space-y-10  justify-start xl:w-[40%] bg-[#72ABDA] p-8  rounded-xl w-full">
          <span
            onClick={() => setTech(tech === 0 ? 0 : 0)}
            className={
              tech === 0
                ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          >
            FRONTEND
          </span>
          <span
            onClick={() => setTech(tech === 1 ? 0 : 1)}
            className={
              tech === 1
              ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          >
           BACKEND

          </span>
          <span
            onClick={() => setTech(tech === 2 ? 0 : 2)}
            className={
              tech === 2
              ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > PLATFORMS
          </span>
          <span
            onClick={() => setTech(tech === 3 ? 0 : 3)}
            className={
              tech === 3
              ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > DATABASE
          </span>

          <span
            onClick={() => setTech(tech === 4 ? 0 : 4)}
            className={
              tech === 4
              ? "bg-white border border-blue-600 text-[#223547] px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              : "bg-transparent  text-white border border-white-600 px-6 py-2 text-xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
            }
          > UI/UX
          </span>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full">
          {tech === 0 ? (
            <>
              {BlockchainStack.map((elem: any) => {
                const { img, num, title, url, bg } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                   
                      key={num} className={`${styles.TabItem} flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border`}>
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}

          {tech === 1 ? (
            <>
              {FrontendStack.map((elem: any) => {
                const { img, title, num, url, bg } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}className={`${styles.TabItem} flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border`}
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}

          {tech === 2 ? (
            <>
              {ProgrammStack.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num} className={`${styles.TabItem} flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border`}
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}
          {tech === 3 ? (
            <>
              {DatabaseStack.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num} className={`${styles.TabItem} flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border`}
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}

        {tech === 4 ? (
            <>
              {UXUI.map((elem: any) => {
                const { img, num, title, bg, url } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <div
                      key={num}className={`${styles.TabItem} flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border`}
                    >
                      <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center ">
                        <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : null}

        </div>
      </div>
    </div>
    </section>
  


  );
}
