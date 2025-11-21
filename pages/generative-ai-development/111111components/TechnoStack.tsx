import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const IosApp = [
  { img: "https://www.comfygen.com/img/programming-languages-icon.webp", 
  alt: 'SwiftLint', 
  title: "Programming languages ", 
  pera:"We specialize in different programming languages such as JavaScript, PHP, Django, and Swift for creating the backend code of your social media apps. Our experts also use React native social media integration to offer immersive frontend experiences to your target users.", 
  url: "#", 
  num: "1" },
];
const AndroidApp = [
  { img: "https://www.comfygen.com/img/databases.webp", 
  alt: 'Databases',
   title: "Databases",
   pera:"Our social media app development expertise also involves the use of powerful database technologies to store and manage data associated with your social apps. We utilize the best-in-class options for database technology, such as MySQL, Amazon S3, and PostgreSQL.   ", 
   url: "#", 
   num: "1" },
  
];
const CrossApp = [
  { num: "1", 
  img: "https://www.comfygen.com/img/push-notifications-and-chat.webp",
   url: "#", 
   title: "Push notifications and chat" ,
   pera:"We also incorporate seamless functionalities for communication and interactive experiences in your social media app by using push notifications and chat. Our experts leverage tools such as OneSignal and FCM to offer the best way to navigate through social apps through push notifications and chat functionalities.", 
  },
  
];
const BackendApp = [
  { img: "https://www.comfygen.com/media/svg/tech/mongodb-original.svg", alt: 'Mongodb', title: "mongodb", num: "1", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/googlecloud-original.svg", alt: 'Googlecloud', title: "google Cloud", num: "2", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/azure-original.svg", alt: 'Azure', title: "azure", num: "3", url: "#" },
  { img: "https://www.comfygen.com/media/svg/tech/nginx-original.svg", alt: 'Nginx', title: "nginx", num: "4", url: "#" },
  { img: "https://www.comfygen.com/images/python-stack-technology.webp", alt: 'Python', title: "Python", num: "5", url: "/python-development" },
  { img: "https://www.comfygen.com/media/svg/tech/mysql-original-wordmark.svg", alt: 'Mysql', title: "mysql", num: "6", url: "#" },
  { img: "https://www.comfygen.com/img/stackimg/rails.webp", alt: 'Rail', title: "Rails", num: "7", url: "#" },
  { img: "https://www.comfygen.com/img/stackimg/nodejs.svg", alt: 'Node js', title: "Node.js", num: "8", url: "/node-js-development" },
  { img: "https://www.comfygen.com/img/stackimg/ruby.webp", alt: 'Ruby', title: "Ruby", num: "8", url: "#" },
];
const Panelheader = [
  {
    num: "01",
    title: "Technology Stack We Use for Social Media App Development Services",
    decs: "We are a trusted social media app development company for our proven track record in using a powerful technology stack. Our experts utilize the latest technologies that provide a distinctive identity to your social media apps in terms of quality, visual appeal, user experience, and performance. "
  },
];




export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    <section className=' bg-[#DBEAFE]'>
      <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  py-10 ">
        {Panelheader.map((elem: any) => {
          const { title, decs } = elem;
          return (
            <div className="flex flex-col justify-center text-center  mx-auto ">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                {title}
              </h2>
              <p className='text-base text-slate-800'>{decs}</p>
            </div>
          );
        })}
        <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10 px-8 rounded bg-[#BA68C8]">
          <div className="flex flex-col items-center space-y-8  justify-start xl:w-[40%] rounded	bg-[#BA68C8]  p-6 w-full border  border-white ">
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-rounded-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full "
              }
            >
              Programming languages
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent text-white border border-white-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            >
              Databases
            </span>
            <span
              onClick={() => setTech(tech === 2 ? 0 : 2)}
              className={
                tech === 2
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-white border border-white-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Push notifications and chat
            </span>
            {/* <span
              onClick={() => setTech(tech === 3 ? 0 : 3)}
              className={
                tech === 3
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent text-white border border-white-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Backend Development
            </span> */}
          </div>
          <div className="grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[100%] w-full bg-white p-4">
            {tech === 0 ? (
              <>
                {IosApp.map((elem: any) => {
                  const { img, num, title, url,pera , bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        <div className="h-100 w-100 font-semibold flex items-start justify-start ">
                          <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-black">
                            {pera}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 1 ? (
              <>
                {AndroidApp.map((elem: any) => {
                  const { img, title, num, url,pera, bg } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-start justify-start ">
                          <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-black">
                            {pera}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}

            {tech === 2 ? (
              <>
                {CrossApp.map((elem: any) => {
                  const { img, num, title, bg,pera, url } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-start items-start rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-start justify-start ">
                          <Image src={img} alt={title} width={50} height={50} className=" group-hover:scale-105 transition-all duration-200 transform " />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {title}
                          </h3>
                        </div>
                        <div>
                          <p className="text-sm text-black">
                            {pera}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : null}
            {/* {tech === 3 ? (
              <>
                {BackendApp.map((elem: any) => {
                  const { img, num, title, bg, url } = elem;
                  return (
                    <Link href={url} passHref={true}>
                      <div
                        key={num}
                        className="flex flex-col justify-center items-center rounded-lg bg-white  space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                      >
                        <div className="h-16 w-16 rounded-lg bg-white font-semibold flex items-center justify-center shadow-xl">
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
            ) : null} */}

          </div>
        </div>
      </div>
    </section>


  );
}
