import React from "react";
import { GiRoundStar } from "react-icons/gi";
import Image from 'next/image';
export default function Testimonial() {
  const Arena = [
    {
      num: "1",
      name: "JOSEPH",
      city: "England",
      img: "https://www.comfygen.com/images/profileimg.webp",
      alt: "JOSEPH",
      decs: "The team at Comfygen is highly experienced and knowledgeable in the field of blockchain technology and cryptocurrencies. They have a vast knowledge of the technology and are very capable of creating customized solutions for my project.",
      icon: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon1: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon2: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon3: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon4: <GiRoundStar size={20} className=' text-slate-200' />,
    },
    {
      num: "2",
      name: "Aarav",
      city: "India",
      img: "https://www.comfygen.com/img/arav.webp",
      alt: "Aarav",
      decs: "Overall, I am very happy with the service that I received from Comfygen. I would highly recommend them to anyone looking for reliable and cost-effective cryptocurrency development services.",
      icon: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon1: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon2: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon3: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon4: <GiRoundStar size={20} className=' text-yellow-500' />,
    },
    {
      num: "3",
      name: "DYLAN",
      city: "Saudi Arabia",
      img: "https://www.comfygen.com/img/jerry.webp",
      alt: "DYLAN",
      decs: "I recently had the pleasure of working with Comfygen, a Ludo Game Development Service Provider. From the start, they provided excellent customer service and were always available to answer my questions. They provided a comprehensive collection of game development services that included game design, development, testing, and launch. They also provided helpful advice throughout the entire process, ensuring the game was of the highest quality. In the end, they delivered the final product on time and within budget. I would highly recommend them for any ludo game development project.",
      icon: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon1: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon2: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon3: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon4: <GiRoundStar size={20} className=' text-slate-200' />,
    },
    {
      num: "4",
      name: "Jhon",
      city: "Wales",
      img: "https://www.comfygen.com/img/tom.webp",
      alt: "Jhon", 
      decs: "I had the pleasure of working with Comfygen on a recent project and I couldn't be happier with the results. From the very beginning, the team was professional, responsive, and easy to work with. They took the time to understand my needs and provided valuable input and suggestions on how to enhance the functionality of my app. I highly recommend this App Development Company to anyone in need of top-notch app development services. They truly exceeded my expectations and I look forward to working with them again in the future.",
      icon: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon1: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon2: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon3: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon4: <GiRoundStar size={20} className=' text-yellow-500' />,
    },
    {
      num: "5",
      name: "Sarika Mahewshari",
      city: "India",
      img: "https://www.comfygen.com/img/sarika.webp",
      alt: "Sarika Mahewshari", 
      decs: "I recently worked with comfygen and must say my experience was very positive. The team was friendly and helpful throughout the entire process and provided me with the support and guidance I needed to get the job done. They helped me understand the process and offered advice on the best course of action. The end result was a successful, secure, and compliant token launch. I would highly recommend this company to anyone looking to develop a cryptocurrency token. They are professional, knowledgeable and a pleasure to work with.",
      icon: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon1: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon2: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon3: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon4: <GiRoundStar size={20} className=' text-yellow-500' />,
    },
    {
      num: "6",
      name: "Abdalla",
      city: "African",
      img: "https://www.comfygen.com/img/ishan.webp",
      alt: "Abdalla" ,
      decs: " I highly recommend Comfygen to anyone looking for a reliable and comprehensive cricket live line service provider. Their quality of service is top-notch, and their prices are very reasonable. If you're looking for a great way to keep up with the cricketing world, then Comfygen is definitely the way to go.",
      icon: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon1: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon2: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon3: <GiRoundStar size={20} className=' text-yellow-500' />,
      icon4: <GiRoundStar size={20} className=' text-slate-200' />,
    },
  ]
  return (
    <section className="md:space-y-0 space-y-2 items-center bg-white  ">
      <div className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12  py-7 lg:py-10">
        <div className="py-0 bg-white">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-3xl font-bold text-[#0E1F51]">
                  Clients Testimonial
                </h2>
                <p className="text-lg font-medium capitalize text-[#0E1F51]">
                  What Our Client Saying ?
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center mx-auto py-0 lg:py-10">
          {Arena.map((elem) => {
            const { city, img, name, decs, icon, icon1, icon2, icon3, icon4 } = elem;
            return (
              <div className="bg-white p-6 rounded-[40px] text-center space-y-4 shadow cursor-pointer  scale-95 transition-all duration-300 transform hover:scale-105   " >
                <div className="flex justify-center ">
                  <Image width={80} height={80} src={img} className="h-20 w-20 rounded-full object-cover border-2 border-white shadow-lg" alt="Profile" />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <p className="text-base text-slate-600 capitalize">
                      {city}
                    </p>
                  </div>
                  <p className="line-clamp-5 ">
                    {decs}
                  </p>
                  <div className="justify-center flex space-x-2">
                    <span>{icon}</span>
                    <span>{icon1}</span>
                    <span>{icon2}</span>
                    <span>{icon3}</span>
                    <span>{icon4}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section >
  );
}
