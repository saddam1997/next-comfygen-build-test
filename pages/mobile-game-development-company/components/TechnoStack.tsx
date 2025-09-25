import { useState } from 'react';
import styles from '../styles.module.css'
import Image from "next/image";




const Panelheader = [
  {
    num: "01",
    title: "Technology Stack",
    decs: "As the world steps into a new era of technological advancements, it is reasonable to believe that mobile game developers must adopt the latest technologies. We have been successful in fulfilling our client's expectations by utilizing the latest technologies in mobile development. "
  },
];


const technologies = [
  {
    title: "Overview of the Technology Stack",
    data: [
      {
        img: "https://www.comfygen.com/images/overview-of-the-technology-stack.webp",
        title: "Overview of the Technology Stack",
        pera: "The technology stack used by mobile game studios provides a glimpse of their effectiveness in creating mobile games. You can rely on our services for developing mobile games tailored to modern trends by using a comprehensive technology stack. The list of technologies we use for creating mobile games can help you determine our effectiveness in developing innovative games.",
        num: "1"
      }
    ]
  },
  {
    title: "Detailed Technologies Used",
    data: [
      {
        img: "https://www.comfygen.com/images/unity.webp",
        title: "Detailed Technologies Used:",
        pera: "Let us show you some of the most powerful technologies we use for developing mobile gaming apps.",
        num: "1"
      }
    ]
  },
  {
    title: "Unreal Engine",
    data: [
      {
        img: "https://www.comfygen.com/images/unreal-engine.webp",
        title: "Unreal Engine",
        pera: "Unreal Engine is a popular video game development tool by one of the notable names in video game development, Epic Games. The tool helps developers build simulations, edit videos or sound, and render animations. It offers a broad collection of game creation tools that help developers design, simulate, and render 3D content with support for complex animations.",
        num: "1"
      }
    ]
  },
  {
    title: "Unity",
    data: [
      {
        img: "https://www.comfygen.com/images/unity.webp",
        title: "Unity",
        pera: "Unity is a comprehensive game engine for creating two-dimensional and three-dimensional multiplatform experiences and games. It provides access to a large collection of game development tools and focuses largely on developing games for mobile platforms. The Unity game engine also supports graphics APIs on different platforms such as Direct3D, OpenGL, WebGL, and other proprietary APIs.",
        num: "1"
      }
    ]
  },
  {
    title: "Cocos2d-x",
    data: [
      {
        img: "https://www.comfygen.com/img/push-notifications-and-chat.webp",
        title: "Cocos2d-x",
        pera: "Cocos2d-x is a game development framework based on C++ programming language, featuring a thin platform-dependent layer. It can help in game development and creation of cross-platform interactive programs with GUIs. Cocos2d-x has been licensed under MIT, and developers could push the limits of their creativity by leveraging the new features of the open-source framework.",
        num: "1"
      }
    ]
  },
  {
    title: "Phaser",
    data: [
      {
        img: "https://www.comfygen.com/img/push-notifications-and-chat.webp",
        title: "Phaser",
        pera: "Phaser is a free and interactive 2D game development framework for creating HTML5 games for mobile and desktop web browsers. The latest version of Phaser includes a custom WebGL renderer to cater to the requirements of new 2D games. The game development framework uses JavaScript and helps in rendering games across different platforms for operations on desktop and mobile devices.",
        num: "1"
      }
    ]
  },
  {
    title: "Swift (for iOS)",
    data: [
      {
        img: "https://www.comfygen.com/img/push-notifications-and-chat.webp",
        title: "Swift (for iOS)",
        pera: "Swift is an intuitive and powerful programming language across all Apple platforms, including iOS devices. It has become one of the most popular programming languages for development of high-performance and engaging games on iOS and Mac platforms. Swift offers exclusive features such as low-level memory access and integration with game development frameworks to simplify mobile gaming app development projects.",
        num: "1"
      }
    ]
  },
  {
    title: "Kotlin (for Android)",
    data: [
      {
        img: "https://www.comfygen.com/img/push-notifications-and-chat.webp",
        title: "Kotlin (for Android)",
        pera: "Kotlin is a general-purpose programming language used for development projects on Android devices and the Java Virtual Machine. It is a combination of object-oriented and functional programming paradigms, and more than 60% of professional Android developers rely on Kotlin. The primary value advantages of Kotlin include code safety and productivity boosts alongside developer satisfaction.",
        num: "1"
      }
    ]
  },
  {
    title: "ARKit (for AR)",
    data: [
      {
        img: "https://www.comfygen.com/img/push-notifications-and-chat.webp",
        title: "ARKit (for AR)",
        pera: "ARKit is a popular tool used by mobile game development services worldwide for integration of AR functionalities in mobile games. It is an Augmented Reality development platform created by Apple for iOS mobile devices. ARKit is a powerful resource for creating interactive AR experiences for Apple mobile devices such as iPhones and iPads. It offers unique features such as stable AR tracking and environmental tracking.",
        num: "1"
      }
    ]
  },
  {
    title: "VR Platforms",
    data: [
      {
        img: "https://www.comfygen.com/img/push-notifications-and-chat.webp",
        title: "VR Platforms",
        pera: "Virtual Reality or VR platforms are the systems that help you experience three-dimensional worlds. The platforms leverage intuitive user interfaces and high-performance computing for creating immersive experiences. We specialize in the development of mobile games for VR platforms, including HTC Vive, Oculus, and Meta Quest. The VR platforms can transform simple mobile games into immersive virtual worlds with seamless user experiences.",
        num: "1"
      }
    ]
  },

];

export default function GuidSectionBlockchain() {
  const [tech, setTech] = useState(0);
  return (
    <>
      <section className="py-10 bg-start bg-cover bg-fixed" style={{ backgroundImage: `url("https://www.comfygen.com/img/tab-bg.webp")` }}>
        <div className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 py-10">
          {Panelheader.map((elem, index) => (
            <div key={index} className="flex flex-col justify-center text-center mx-auto">
              <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize m">{elem.title}</h2>
              <p className="text-base text-white">{elem.decs}</p>
            </div>
          ))}
          <div className="xl:flex  items-start xl:space-x-16 xl:space-y-0 space-y-8 w-full py-10 px-8 rounded-2xl bg-[#BA68C8] relative mt-5">
            <div className={`${styles.stepTab} flex flex-col items-center space-y-6 justify-start rounded bg-[#BA68C8] p-6 w-full border border-white relative mt-5`}>
              {technologies.map((techItem, index) => (
                <span
                  key={index}
                  onClick={() => setTech(index)}
                  className={`${tech === index ? "bg-blue-600 border border-blue-600 text-white" : "bg-transparent text-white border border-rounded-600"
                    } px-6 py-2 text-1xl font-bold rounded-full capitalize xl:w-96 cursor-pointer w-full`}
                >
                  {techItem.title}
                </span>
              ))}
            </div>

            <div className={`${styles.Tabafter} grid md:grid-cols-1 grid-cols-1 divide-x-1 md:gap-6 gap-4 relative capitalize xl:w-[100%] w-full bg-[#2563EB] p-4`}>
              {technologies[tech].data.map((elem) => (
                <div
                  key={elem.num}
                  className="bg-[#2563EB] flex flex-col justify-start items-start rounded-lg space-y-3 px-6 py-4 hover:shadow-lg transition-all duration-200 cursor-pointer group border"
                >
                  <div className="h-100 w-100 font-semibold flex items-start justify-start">
                    <Image src={elem.img} alt={elem.title} width={50} height={50} className="group-hover:scale-105 transition-all duration-200 transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{elem.title}</h3>
                  </div>
                  <div>
                    <p className="text-sm text-white">{elem.pera}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>


  );
}
