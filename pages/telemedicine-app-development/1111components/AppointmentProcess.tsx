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
                Diverse Functionalities in Telemedicine Apps for Everyone</h2>
              <p className='text-base text-white  '>We have worked on app development projects across different domains of healthcare, such as clinical app development and pharmacy app development. Our telehealth development company can cater to your diverse requirements for entering into the telemedicine space. We can help you create different types of telemedicine solutions with advanced feature sets according to your requirements.</p>
            </div>
            <div className="grid gap-10  py-10 text-left lg:grid-cols-1  xl:gap-8">
              <div className="col-md-12">
                <div className={`${styles.Yearlytimeline}`}>
                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title} text-black text-4xl font-bold`} >Telemedicine Apps for Clinical Administration </h3>
                      <p className={`${styles.description} text-black text-start`}>Our telemedicine application development solutions for clinical administration can help you capitalize on the benefits of diverse features. We are your best pick for creating clinical administration telemedicine apps with following features.</p>
                      <ul className="list-disc	px-6">
                        <li> Automated billing.</li>
                        <li> EHR system integration.</li>
                        <li> Timetable scheduling.</li>
                        <li> Drug inventory tracking.</li>
                        <li> Medical device data collection.</li>
                      </ul>
                    </a>
                  </div>

                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title}`}>Telemedicine Apps for Healthcare Professionals</h3>
                      <p className={`${styles.description} text-black text-start`}>As your best pick to create a telemedicine app for healthcare professionals, we strive to achieve excellence in our solutions. The following feature set in our telemedicine apps for healthcare professionals simplifies their job. </p>
                      <ul className="list-disc	px-6">
                        <li> Real-time access to patient information.</li>
                        <li> Medical research and training.</li>
                        <li>Remote real-time consultations.</li>
                        <li> Emergency patient care.</li>
                      </ul>
                    </a>
                  </div>
                  <div className={`${styles.timeline}`}>
                    <a href="" className={`${styles.timelinecontent}`}>
                      <div className={`${styles.timelineicon}`}><i className="fa fa-instagram"></i></div>
                      <h3 className={`${styles.title}`}>Telemedicine Apps for Patients</h3>
                      <p className={`${styles.description} text-black text-start`}>We use our experience in telemedicine app development to elevate the quality of treatment for patients. Our telemedicine apps can deliver usability and accessibility with an intuitive interface and new features.</p>
                      <ul className="list-disc	px-6">
                        <li> Mental health monitoring.</li>
                        <li> Physical exercise logs.</li>
                        <li> Medication intake tracker.</li>
                        <li>  Symptom checker and management.</li>
                        <li>Flexible appointment schedules.</li>
                      </ul>
                    </a>
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