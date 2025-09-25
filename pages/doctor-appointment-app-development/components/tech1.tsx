import React, { useState } from "react";
import Image from "next/image";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { MdOutlineArrowOutward } from "react-icons/md";

const backend = [
  {
    img: "https://www.comfygen.com/img/instant-booking.webp",
    alt: 'Easy Login and Registration',
    name: "Easy Login and Registration",
    desc: "The users or patients are supposed to register themselves and make a profile for further use of the app. ",
    num: "1"
  },
  {
    img: "https://www.comfygen.com/img/ride-details.webp",
    alt: 'Book Schedule/ Appointments',
    name: "Book Schedule/ Appointments",
    desc: " Later they need to choose one doctor from the options given to cure their diseases.",
    num: "2"
  },
  {
    img: "https://www.comfygen.com/img/video-audio-consultations.svg",
    alt: 'Video/Audio Consultations:',
    name: "Video/Audio Consultations:",
    desc: "The patients can book audio and video consultations with the doctor.",
    num: "3"
  },
  {
    img: "https://www.comfygen.com/img/avail-notifications.svg",
    alt: 'Avail Notifications',
    name: "Avail Notifications",
    desc: "The patients can also receive notifications for medications, doctor appointment reminders, etc. ",
    num: "4"
  },
  {
    img: "https://www.comfygen.com/img/online-payments.svg",
    alt: 'Online Payments',
    name: "Online Payments",
    desc: "The users can make payments through different gateways integrated with the applications. ",
    num: "5"
  },
  {
    img: "https://www.comfygen.com/img/push-notifications.webp",
    alt: 'Upload medical reports',
    name: "Upload medical reports ",
    desc: "The patients can also upload their medical reports, and other health documents in the app only.",
    num: "6"
  }  ,
  {
    img: "https://www.comfygen.com/img/view-health-tips-and-articles.svg",
    alt: 'View Health Tips and Articles',
    name: "VView Health Tips and Articles ",
    desc: "There are some apps, which also share some tips and articles on your health conditions to help you stay better. ",
    num: "7"
  },
  {
    img: "https://www.comfygen.com/img/search-doctors-and-view-profiles.svg",
    alt: 'Search Doctors and View Profiles',
    name: "Search Doctors and View Profiles  ",
    desc: "You can search for a particular doctor, and check their profiles to know whether they suit best or not. ",
    num: "8"
  }

];

const frontend = [
  {
    img: "https://www.comfygen.com/img/docter-profile.webp",
    alt: 'Doctor Profile',
    name: "Doctor Profile",
    desc: "The doctors are supposed to make their profile on the app and register themselves. ",
    num: "1"
  },
  {
    img: "https://www.comfygen.com/img/appointment-status.svg",
    alt: 'Appointment Status',
    name: "Appointment Status",
    desc: "The feature enables doctors to fix appointments, and constantly inform them about their upcoming schedules.",
    num: "2"
  },
  {
    img: "https://www.comfygen.com/img/e-prescription.svg",
    alt: 'E-prescription',
    name: "E-prescription",
    desc: "The doctors can provide e-prescription to the patients through the app only. ",
    num: "3"
  },
  {
    img: "https://www.comfygen.com/img/accept-reject-booking.svg",
    alt: 'Accept/ Reject Booking',
    name: "Accept/ Reject Booking",
    desc: "Doctors have the right to accept or cancel the appointment request. ",
    num: "4"
  },
  {
    img: "https://www.comfygen.com/img/social-media-login.svg",
    alt: 'Social Media Login',
    name: "Social Media Login",
    desc: "These professional medical experts can also log in and register themselves through their social media accounts. ",
    num: "5"
  },
  {
    img: "https://www.comfygen.com/img/view-patient-details.svg",
    alt: 'View Patient Details:',
    name: "View Patient Details:",
    desc: "The application will provide all the patient’s details to doctors for better and deeper consultation to suggest treatment. ",
    num: "6"
  }  ,
  {
    img: "https://www.comfygen.com/img/set-availability.svg",
    alt: 'Set Availability',
    name: "Set Availability  ",
    desc: "The doctors can set their available hours on the app so that patients can pursue them according to their availability.",
    num: "7"
  },
  {
    img: "https://www.comfygen.com/img/treatment-history.svg",
    alt: 'Treatment History',
    name: "Treatment History  ",
    desc: "Doctors can receive the patient medical condition and prior treatment history to suggest the best treatment and measures.",
    num: "8"
  }

];
const mobile = [
  {
    img: "https://www.comfygen.com/img/instant-booking.webp",
    alt: 'Manage booking',
    name: "Manage booking",
    desc: "The admin panel will manage bookings and streamline the process more simply. ",
    num: "1"
  },
  {
    img: "https://www.comfygen.com/img/secure-login.svg",
    alt: 'Secure Login',
    name: "Secure Login",
    desc: "The admin ensures the right and secured log-in process, and also ensures that no data will ever be leaked from the app. ",
    num: "2"
  },
  {
    img: "https://www.comfygen.com/img/patient-management.svg",
    alt: 'Patient Management:',
    name: "Patient Management:",
    desc: "The panel ensures the patient’s management, and streamlines their appointment on time.",
    num: "3"
  },
  {
    img: "https://www.comfygen.com/img/doctor-management.svg",
    alt: 'Doctor Management',
    name: "Doctor Management",
    desc: "Also this feature enables doctors, and manage their appointments as well.",
    num: "4"
  },
  {
    img: "https://www.comfygen.com/img/report-management.svg",
    alt: 'Report Management',
    name: "Report Management ",
    desc: " The reports, documents, and other data of patients will be secured appropriately and managed well through the admin panel. ",
    num: "5"
  },
  {
    img: "https://www.comfygen.com/img/approve-doctor-profile.svg",
    alt: 'Approve Doctor Profile',
    name: "Approve Doctor Profile",
    desc: "The admin panel is responsible for cross-verifying doctors’ backgrounds, experiences, and documents. ",
    num: "6"
  }  ,
  {
    img: "https://www.comfygen.com/img/treatment-history.svg",
    alt: 'Treatment History',
    name: "Treatment History",
    desc: "This panel keeps the treatment history fully safe and secured to ensure the data will not be leaked.",
    num: "7"
  }
];


export default function Tech() {
  const [tech, setTech] = useState(0);

  return (
    <>
      {/* technology*/}
      <section className="py-20  bg-slate-100">
        <div className=" space-y-10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
          <div className=" py-4">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#212121] text-center  mx-auto">
            Key Features of  On-Demand Doctor Appointment  Scheduling App
            </h2>
            <p className="text-[#000] text-center mt-2 text-base">Our Doctor mobile app solution makes the job easier for patients and doctors, both. Here are the features we deliver in the application. </p>
          </div>
          <div className="bg-white p-10 rounded-lg">
          <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap bg-white ">
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0
                  ? "bg-[#5556D1] border border-[#5556D1] text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-[#5556D1] border border-[#5556D1] px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
             Patient Panel
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                  ? "bg-[#5556D1] border border-[#5556D1] text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-[#5556D1] border border-[#5556D1] px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Doctor Panel

            </span>
            <span
              onClick={() => setTech(tech === 2 ? 0 : 2)}
              className={
                tech === 2
                  ? "bg-[#5556D1] border border-[#5556D1] text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-[#5556D1] border border-[#5556D1] px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Admin Web Panel
            </span>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize mt-5">
            {tech === 0 ? (
              <>
                {backend.map((elem: any) => {
                  const { img, name, desc, num } = elem;
                  return (
                    <div key={num} className="flex flex-col justify-start space-y-2 rounded-lg bg-[#F1F5F9]  px-6 py-10 shadow-lg transition-all duration-200 cursor-pointer group ">
                      <div className="h-14 w-14 rounded-lg bg-[#5556D1] font-semibold flex items-center justify-center shadow-xl">
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
                      <div className="h-14 w-14 rounded-lg bg-[#5556D1] font-semibold flex items-center justify-center shadow-xl">
                        <Image src={img} alt={name} width={40} height={40} className=" group-hover:scale-105 transition-all duration-200 transform " />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black text-start">
                          {name}
                        </h3>
                        <p>{desc}</p>
                        {/* <ul className='space-y-1 mt-2'>
                      <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <VscDebugBreakpointLog className="w-4 h-4 text-[#000]"/>
                      </span>{item} </li>
                      <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                      <VscDebugBreakpointLog  className="w-4 h-4 text-[#000]"/>
                      </span>{item1} </li>
                      
                    </ul> */}
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
                     <div className="h-14 w-14 rounded-lg bg-[#5556D1] font-semibold flex items-center justify-center shadow-xl">
                       <Image src={img} alt={name} width={40} height={40} className=" group-hover:scale-105 transition-all duration-200 transform " />
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold text-black text-start">
                         {name}
                       </h3>
                       <p>{desc}</p>
                       {/* <ul className='space-y-1 mt-2'>
                     <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                     <VscDebugBreakpointLog className="w-4 h-4 text-[#000]"/>
                     </span>{item} </li>
                     <li className="flex text-base text-black/80"><span className="pr-2 mt-1.5 text-[#4f4f50]">
                     <VscDebugBreakpointLog  className="w-4 h-4 text-[#000]"/>
                     </span>{item1} </li>
                   </ul> */}
                     </div>
                   </div>
                 );
                })}
              </>
            ) : null}


          </div>
          </div>
          {/* tabs */}


          <div className="flex justify-center items-center mt-5">
                <a href='/quote ' className="mt-5" >
                  <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                     Get A DEMO <MdOutlineArrowOutward /> 
                  </button>
                </a>
              </div>

        
        </div>
      </section>
    </>
  );
}
