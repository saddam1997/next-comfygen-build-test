import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const backend = [
  {
    img: "https://www.comfygen.com/img/instant-booking.webp",
    alt: 'Instant Booking:',
    name: "Instant Booking",
    desc: "Passengers can book their rides in just a few clicks through the taxi booking mobile app. You need to check with your destination, click on booking the ride, and get the ride at the destination",
    num: "1"
  },
  {
    img: "https://www.comfygen.com/img/ride-details.webp",
    alt: 'Ride Details',
    name: "Ride Details",
    desc: " In the custom taxi app development services, the customers will receive ride details, required driver’s personal information, and his contact number for the convenience of customers to get safe drive. ",
    num: "2"
  },
  {
    img: "https://www.comfygen.com/img/scheduled-booking.webp",
    alt: 'Scheduled Booking',
    name: "Scheduled Booking",
    desc: "The customers can also schedule the rides according to their plans. This is a very convenient feature for the customers to get rides on time with no hassle afterwards. ",
    num: "3"
  },
  {
    img: "https://www.comfygen.com/img/multiple-payment-gateways.webp",
    alt: 'Multiple Payment Gateways',
    name: "Multiple Payment Gateways:",
    desc: <p>The customers have access to multiple payment gateways, through which they can pay for their rides. Even the taxi booking app development has an in-app  <a href="/crypto-wallet-development">crypto wallet feature</a> to pay while booking the ride. </p> ,
    num: "4"
  },
  {
    img: "https://www.comfygen.com/img/real-time-tracking.webp",
    alt: 'Real-Time Tracking',
    name: "Real-Time Tracking",
    desc: "The users can track their rides through applications in real-time. Even, the customers can track where the drivers are and till when they are coming.",
    num: "5"
  },
  {
    img: "https://www.comfygen.com/img/push-notifications.webp",
    alt: 'Push Notifications',
    name: "Push Notifications",
    desc: "The cab booking app development services will showcase you the notifications all the time for every update; whether the ride is coming, till when it will reach, is there any delay, ride accepted, ride cancelled, and about every single update.  ",
    num: "6"
  }

];

const frontend = [
  {
    num: "1",
    img: "https://www.comfygen.com/img/registration-and-profile-management.webp",
    alt: 'Registration and Profile Management',
    name: "Registration and Profile Management",
    item: "Seamless onboarding process for drivers.",
    item1: "Profile creation and management, including personal information and vehicle details.",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/img/real-time-location-tracking.webp",
    alt: 'Real-Time Location Tracking',
    name: "Real-Time Location Tracking",
    item: "GPS integration for live tracking of the driver's location.",
    item1: "Dynamic route optimization for efficient navigation.",

  },
  {
    num: "3",
    img: "https://www.comfygen.com/img/booking-management.webp",
    alt: 'Booking Management',
    name: "Booking Management ",
    item: "Accept or reject ride requests",
    item1: "View and manage upcoming and completed trips.",
  },
  {
    num: "4",
    img: "https://www.comfygen.com/img/earnings-and-payment.webp",
    alt: 'Earnings and Payment',
    name: "Earnings and Payment",
    item: "Real-time earning updates.",
    item1: "In-app wallet or direct bank transfer for payments.",
  },
  {
    num: "5",
    img: "https://www.comfygen.com/img/communication-tools.webp",
    alt: 'Communication Tools',
    name: "Communication Tools",
    item: "In-app chat or call functionality with passengers.",
    item1: "Automated notifications for new ride requests, updates, and promotions.",
  },
  {
    num: "6",
    img: "https://www.comfygen.com/img/feedback-and-Ratings.webp",
    alt: 'Feedback and Ratings',
    name: "Feedback and Ratings",
    item: "Provide and receive feedback from passengers.",
    item1: "Maintain a rating system for drivers based on their performance.",
  },

];
const mobile = [
  {
    num: "1",
    img: "https://www.comfygen.com/img/dashboard-and-analytics.webp",
    alt: 'Dashboard and Analytics',
    name: "Dashboard and Analytics",
    item: "Comprehensive overview of all ongoing activities.",
    item1: "Analytics tools for monitoring key performance indicators.",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/img/user-and-driver-management.webp",
    alt: 'User and Driver Management',
    name: "User and Driver Management",
    item: "Admin controls for user and driver accounts.",
    item1: "Verify and approve new driver registrations.",

  },
  {
    num: "3",
    img: "https://www.comfygen.com/img/trip-management.webp",
    alt: 'Trip Management',
    name: "Trip Management",
    item: "Monitor and manage live trips ",
    item1: "Access trip history, including details of completed rides.",
  },
  {
    num: "4",
    img: "https://www.comfygen.com/img/fare-and-pricing-management.webp",
    alt: 'Fare and Pricing Management',
    name: "Fare and Pricing Management",
    item: "Set and adjust pricing structures.",
    item1: "Apply dynamic pricing during peak hours or high demand.",
  },
  {
    num: "5",
    img: "https://www.comfygen.com/img/promotions-and-discounts.webp",
    alt: 'Promotions and Discounts:',
    name: "Promotions and Discounts",
    item: "Create and manage promotional campaigns. ",
    item1: "Implement discount codes for users.",
  },
  {
    num: "6",
    img: "https://www.comfygen.com/img/safety-and-Compliance.webp",
    alt: 'Safety and Compliance',
    name: "Safety and Compliance:",
    item: "Ensure compliance with local regulations",
    item1: "Implement safety features such as SOS buttons and trip verification.",
  },
];


export default function Tech() {
  const [tech, setTech] = useState(0);

  return (
    <>
      {/* technology*/}
      <section className="py-20  bg-slate-100">
        <div className=" space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className=" py-4">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center  mx-auto">
              Key Features in <b className="text-[#3B82F6] font-bold">Taxi Booking</b> Mobile App
            </h2>
            <p className="text-[#0E1F51] text-center mt-2 text-base">Boost your taxi booking mobile application development services with some important and needed features based on the market standards. Our on demand taxi app development company is based in Jaipur adheres all the features to make your app competitive</p>
          </div>
          <div className="bg-white p-10 rounded-lg">
          <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap bg-white ">
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Customer’s or Passenger’s App
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Driver’s App

            </span>
            <span
              onClick={() => setTech(tech === 2 ? 0 : 2)}
              className={
                tech === 2
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Admin Panel
            </span>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5">
            {tech === 0 ? (
              <>
                {backend.map((elem: any) => {
                  const { img, name, desc, num } = elem;
                  return (
                    <div key={num} className="flex flex-col justify-start space-y-2 rounded-lg bg-[#F1F5F9]  px-6 py-10 shadow-lg transition-all duration-200 cursor-pointer group ">
                      <div className="h-14 w-14 rounded-lg bg-[#2563EB] font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={name} width={40} height={40} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black text-start">
                          {name}
                        </h3>
                        <p>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}

            {tech === 1 ? (
              <>
                {frontend.map((elem: any) => {
                  const { img, name, desc, num, item, item1,} = elem;
                  return (
                    <div key={num} className="flex flex-col justify-start space-y-2 rounded-lg bg-[#F1F5F9]  px-6 py-10 shadow-lg transition-all duration-200 cursor-pointer group ">
                      <div className="h-14 w-14 rounded-lg bg-[#2563EB] font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={name} width={40} height={40} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black text-start">
                          {name}
                        </h3>
                        <ul className='space-y-1 mt-2'>
                      <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <VscDebugBreakpointLog className="w-4 h-4 text-[#000]"/>
                      </span>{item} </li>
                      <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <VscDebugBreakpointLog  className="w-4 h-4 text-[#000]"/>
                      </span>{item1} </li>
                      
                    </ul>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}

            {tech === 2 ? (
              <>
                {mobile.map((elem: any) => {
                 const { img, name, desc, num, item, item1,} = elem;
                 return (
                   <div key={num} className="flex flex-col justify-start space-y-2 rounded-lg bg-[#F1F5F9]  px-6 py-10 shadow-lg transition-all duration-200 cursor-pointer group ">
                     <div className="h-14 w-14 rounded-lg bg-[#2563EB] font-semibold flex items-center justify-center shadow-xl">
                       <Image src={img} alt={name} width={40} height={40} className=" group-hover:scale-105 transition-all duration-200 transform " />
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold text-black text-start">
                         {name}
                       </h3>
                       <ul className='space-y-1 mt-2'>
                     <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                     <VscDebugBreakpointLog className="w-4 h-4 text-[#000]"/>
                     </span>{item} </li>
                     <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                     <VscDebugBreakpointLog  className="w-4 h-4 text-[#000]"/>
                     </span>{item1} </li>
                     
                   </ul>
                     </div>
                   </div>
                 );
                })}
              </>
            ) : null}


          </div>
          </div>
          {/* tabs */}

        
        </div>
      </section>
    </>
  );
}
