import { useState } from 'react';
import styles from '../styles.module.css'
import Link from 'next/link';
import Image from "next/image";

const IosApp = [
  { img: "https://www.comfygen.com/img/stackimg/swift.webp", alt: 'SwiftLint', title: "SwiftLint", url: "#", num: "1" },
  { img: "https://www.comfygen.com/img/stackimg/objective-c.webp", alt: ' Objective-C', title: " Objective-C", url: "#", num: "2" },
  { img: "https://www.comfygen.com/img/stackimg/rx-swift.webp", alt: 'RxSwift', title: "RxSwift", url: "#", num: "3" },
  { img: "https://www.comfygen.com/img/stackimg/circle-ci.webp", alt: 'CircleCI', title: "CircleCI", url: "#", num: "4" },
  { img: "https://www.comfygen.com/img/stackimg/swift.webp", alt: 'Swift', title: "Swift", url: "#", num: "5", },
  { img: "https://www.comfygen.com/img/stackimg/swift-ui.webp", alt: 'SwiftUI', title: "SwiftUI", url: "#", num: "6" },
  { img: "https://www.comfygen.com/img/stackimg/cocoapods.webp", alt: 'CocoaPods', title: "CocoaPods", url: "#", num: "7" },
  { img: "https://www.comfygen.com/img/stackimg/flutter.webp", alt: 'Flutter', title: "Flutter", url: "/flutter-development-company", num: "8" },
  { img: "https://www.comfygen.com/img/stackimg/xcode.webp", alt: 'Xcode', title: "Xcode", url: "#", num: "9" },
];
const AndroidApp = [
  { img: "https://www.comfygen.com/img/stackimg/kotlin.webp", alt: 'Kotlin', title: "Kotlin", url: "#", num: "1" },
  { img: "https://www.comfygen.com/img/stackimg/fastlane.webp", alt: 'Fastlane', title: "Fastlane", url: "#", num: "2" },
  { img: "https://www.comfygen.com/img/stackimg/gradle.webp", alt: 'Gradle', title: "Gradle", url: "#", num: "3" },
  { img: "https://www.comfygen.com/img/stackimg/coroutines.webp", alt: 'Coroutines', title: "Coroutines", url: "#", num: "4" },
  { img: "https://www.comfygen.com/img/stackimg/dagger-2.webp", alt: 'Dagger2', title: "Dagger2", url: "#", num: "5" },
  { img: "https://www.comfygen.com/img/stackimg/jetpack.webp", alt: 'JetPack', title: "JetPack", url: "#", num: "6" },
  { img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", alt: 'Javascript', title: "javascript", url: "#", num: "7" },
  { img: "https://www.comfygen.com/images/java-script.webp", alt: 'Java', title: "Java", url: "#", num: "8" },
  { img: "https://www.comfygen.com/images/dot-net-stack-technology.webp", alt: '.Net', title: ".Net", url: "#", num: "9" },
];
const CrossApp = [
  { num: "1", img: "https://www.comfygen.com/images/unity-stack-technology.webp", url: "#", title: "Unity" },
  { num: "2", img: "https://www.comfygen.com/img/stackimg/electron.webp", url: "#", title: "Electron", },
  { num: "3", img: "https://www.comfygen.com/img/stackimg/ionic.webp", url: "#", title: "Ionic", },
  { num: "4", img: "https://www.comfygen.com/img/stackimg/xamarin.webp", url: "#", title: "Xamarin", },
  { num: "5", img: "https://www.comfygen.com/img/stackimg/flutter.webp", url: "/flutter-development-company", title: "Flutter", },
  { num: "6", img: "https://www.comfygen.com/media/svg/tech/react-original.svg", url: "/react-native-development", title: "React Native", },
  { num: "7", img: "https://www.comfygen.com/img/stackimg/native-script.webp", url: "#", title: "Native Script", },
  { num: "8", img: "https://www.comfygen.com/media/svg/tech/typescript-original.svg", url: "#", title: "TypeScript", },
  { num: "9", img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", url: "#", title: "Javascript", },
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
    title: "Our Full Stack Technology for Agile Mobile App Development Projects",
    decs: "To build a robust mobile application, our experts gained high-level skills, got trained, and experienced for years, and handled complex projects. We are experts in core technologies to make our mobile application strong and stable. From the front-end to the back-end, from Kotlin to Swift; we know all and we opt all."
  },
];




export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    <section className=' bg-gray-200'>
      <div className=" space-y-2 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  py-10">
        {Panelheader.map((elem: any) => {
          const { title, decs } = elem;
          return (
            <div className="flex flex-col justify-center text-center  mx-auto">
              <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                {title}
              </h2>
              <p className='text-base text-slate-800'>{decs}</p>
            </div>
          );
        })}
        <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10">
          <div className="flex flex-col items-center space-y-6  justify-start xl:w-[40%] bg-white p-4 w-full">
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            >
              iOS App Development
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            >
              Android App Development
            </span>
            <span
              onClick={() => setTech(tech === 2 ? 0 : 2)}
              className={
                tech === 2
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Cross-platform App
            </span>
            <span
              onClick={() => setTech(tech === 3 ? 0 : 3)}
              className={
                tech === 3
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-2xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full"
              }
            > Backend Development
            </span>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[60%] w-full bg-white p-4">
            {tech === 0 ? (
              <>
                {IosApp.map((elem: any) => {
                  const { img, num, title, url, bg } = elem;
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
            ) : null}

            {tech === 1 ? (
              <>
                {AndroidApp.map((elem: any) => {
                  const { img, title, num, url, bg } = elem;
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
            ) : null}

            {tech === 2 ? (
              <>
                {CrossApp.map((elem: any) => {
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
            ) : null}
            {tech === 3 ? (
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
            ) : null}

          </div>
        </div>
      </div>
    </section>


  );
}
