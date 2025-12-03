import React, { useState } from "react";
import Image from "next/image";
import styles from '../styles.module.css'
import Link from "next/link";

export default function AppointmentProcess() {
  return (
    <>
      <section className="bg-start bg-cover  bg-fixed   " style={{ backgroundImage: `url("https://www.comfygen.com/img/doctor-booking-app-development-process.webp")` }} >
        <div className="bg-[#120933]/90">
          <div className=" py-10  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="py-4 text-[#fff] xl:text-4xl text-3xl  w-70 font-bold xl:leading-[3rem]">
              Doctor Booking App Development Process</h2>
              <p className='text-base text-white  '>Comfygen follows a very streamlined and transparent process to build a doctor appointment booking mobile application. Here are the key steps we follow</p>
            </div>
            <div className="grid gap-10  py-10 text-left lg:grid-cols-1  xl:gap-8">
              <div className={`${styles.Roadmapcontainer}`}>
                <div className={`${styles.timelineblock} ${styles.timelineblockright}`}>
                  <div className={`${styles.marker}`} ></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Discovery and Planning</h3>
                    <p>The developers and entrepreneurs will figure out our optimum business goals, analyse the current market competitors, know their audience, and also plan for development. They will gather all the functional and non-functional requirements. This step involved a complete roadmap of app development.</p>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockleft}`}>
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>UX & UI Designs</h3>
                    <p>Here the designers will come into action, where they integrate some designs, elements, animations, and other attractions. They will first create wireframes for deep analysis and later get done with prototyping using a suitable tech stack.</p>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockright}`}>
                  <div className={`${styles.marker}`} ></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Development</h3>
                    <p>Here the team is responsible for building user-interface and server sides. We build the backend and frontend architecture and implement the security features. This stage is responsible for creating functionalities and adding features. </p>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockleft}`}>
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Testing and Quality Check</h3>
                    <p>The quality analysts (QAs) will cross-verify the app’s functioning and operations. The QA will check if the app is entirely debugged, if there is any issue, if the app is working, if it is streamlined and seamlessly navigational, etc. The final objective of this step is to ensure that the on-demand doctor booking appointment app is all set to launch.</p>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockright}`}>
                  <div className={`${styles.marker}`} ></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Deployment</h3>
                    <p>Once the team gets approval on the application from QAs, then the app will be launched or deployed on the decided dedicated platform (either Google PlayStore or Apple AppStore.) One can also choose to build cross-platform apps on both the OS (iOS and Android.)</p>
                  </div>
                </div>
                <div className={`${styles.timelineblock} ${styles.timelineblockleft}`}>
                  <div className={`${styles.marker}`}></div>
                  <div className={`${styles.timelinecontent}`}>
                    <h3>Support & Maintenance </h3>
                    <p>This is an optional service also known as the “Post-Deployment” service, where the developer ensures to keep an eye on the app after launch to know what sort of changes require more, what are some extra features to add, and what’s in there to eliminate.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <a href='/contact-us' >
                <button className="shadow-2xl hover:scale-75 transition-all duration-300 ease-in relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
                  Let's Communicate With IT Expert!
                </button>
              </a>
            </div>
          </div >
        </div>

      </section>
    </>
  );
}