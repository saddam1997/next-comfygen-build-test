import React, { useState } from "react";
import Image from "next/image";
import styles from '../styles.module.css'
import Link from "next/link";
import { MdControlPointDuplicate } from "react-icons/md";

export default function AppointmentProcess() {
  return (
    <>
      <section className="bg-start bg-cover  bg-fixed   " style={{ backgroundImage: `url("https://www.comfygen.com/img/doctor-booking-app-development-process.webp")` }} >
        <div className="bg-[#120933]/95">
          <div className=" py-20  w-11/12  space-y-4 2xl:w-9/12 xl:w-5/6 lg:w-11/12  mx-auto">
            <div className="flex flex-col justify-center lg:text-center">
              <h2 className="text-[#fff] xl:text-4xl text-3xl  w-70 font-bold xl:leading-[3rem]">
                Diverse Functionalities in Telemedicine Apps for Everyone</h2>
              <p className='text-base text-white  '>We have worked on app development projects across different domains of healthcare, such as clinical app development and pharmacy app development. Our telehealth development company can cater to your diverse requirements for entering into the telemedicine space. We can help you create different types of telemedicine solutions with advanced feature sets according to your requirements.</p>
            </div>
            <div className={styles.ProcessSec}>
              <div className={`${styles.timelineBlock} ${styles.timelineBlockRight}`}>
                <div className={styles.marker}></div>
                <div className={styles.timelineContent}>
                  <h3>Telemedicine Apps for Clinical Administration </h3>
                  <p> Our telemedicine application development solutions for clinical administration can help you capitalize on the benefits of diverse features. We are your best pick for creating clinical administration telemedicine apps with following features.</p>
                  <ul className="list-disc mt-2	">
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" /> Automated billing.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" /> EHR system integration.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" /> Timetable scheduling.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" /> Drug inventory tracking.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" /> Medical device data collection.</li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.timelineBlock} ${styles.timelineBlockLeft}`}>
                <div className={styles.marker}></div>
                <div className={styles.timelineContent}>
                  <h3>Telemedicine Apps for Healthcare Professionals</h3>
                  <p>As your best pick to create a telemedicine app for healthcare professionals, we strive to achieve excellence in our solutions. The following feature set in our telemedicine apps for healthcare professionals simplifies their job.</p>
                  <ul className="list-disc	mt-2">
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" />  Real-time access to patient information.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" />  Medical research and training.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" /> Remote real-time consultations.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" />  Emergency patient care.</li>
                  </ul>
                </div>
              </div>

              <div className={`${styles.timelineBlock} ${styles.timelineBlockRight}`}>
                <div className={styles.marker}></div>
                <div className={styles.timelineContent}>
                  <h3>Telemedicine Apps for Patients</h3>
                  <p>We use our experience in telemedicine app development to elevate the quality of treatment for patients. Our telemedicine apps can deliver usability and accessibility with an intuitive interface and new features.
                  </p>
                  <ul className="list-disc	mt-2">
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" /> Mental health monitoring.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" />Physical exercise logs.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" /> Medication intake tracker.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" />  Symptom checker and management.</li>
                    <li className="flex items-center gap-2"> <MdControlPointDuplicate className="text-[20px]" />Flexible appointment schedules.</li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="flex justify-center items-center">
              <a href='/contact-us' >
                <button className="shadow-2xl relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]  rounded cursor-pointer text-white w-fit group">
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