import { useEffect, useState } from 'react';
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineClose } from 'react-icons/md';
import ContactFrom from '../../components/ContactFrom';

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center space-x-4 md:justify-start">
        <div onClick={() => setModalOpen(!modalOpen)} className="group [transform:translateZ(0)] px-6 font-medium py-3 rounded-full overflow-hidden  relative before:absolute cursor-pointer bg-gradient-to-l to-[#16BDFA] from-[#BE5EBC] before:bg-white before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[10] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 text-white   "><span className="relative z-0 transition duration-500 ease-in-out group-hover:text-blue-500 font-medium  ">Discuss Now</span>
        </div>
      </div>
      {
        modalOpen ?
          <div className="w-full md:-top-4 -top-10 left-0 fixed z-40 flex justify-center items-center">
            <section data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="xl:w-3/6 w-full h-[92%] md:h-3/6 bg-gradient-to-r to-blue-500 from-purple-600  overflow-y-auto 2xl:p-10 2xl:px-14 p-5 lg:p-3 xl:p-5 rounded-lg m-10 xl:m-0">
              <div className="text-center space-y-1 2xl:space-y-3">
                <div onClick={() => setModalOpen(!modalOpen)} className="w-full flex justify-between">
                  <div className=''>
                  <h3 className="text-3xl font-semibold capitalize text-white text-center">get in touch</h3>
                  </div>
                 <div className='pb-2'>
                 <div className="p-1 2xl:p-2 rounded-full border-2 border-white ">
                    <MdOutlineClose className="h-5 2xl:h-6 w-5 2xl:w-6 cursor-pointer text-white" />
                  </div>
                 </div>
                </div>
                <div id="down" className="space-y-2">
                  <ContactFrom />
                </div>
              </div>
            </section>
          </div>
          : null
      }
    </>
  )
}