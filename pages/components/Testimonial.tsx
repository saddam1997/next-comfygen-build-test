import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../components/styles.module.css'
import { useRouter } from "next/router";
import CustomImage from "./CustomImage";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";






export default function BlogSection(props: any) {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const router = useRouter();
  return (

    <section className="bg-[#F8F9FE]" >
      <div className="space-y-8 py-8 lg:py-20 mx-auto 2xl:w-7/12 xl:w-5/6 w-11/12 " >
        <div> <h2 className="py-4 text-3xl font-bold text-[#0E1F51] text-center">Client Testimonials</h2></div>
        <div >
          <Slider {...settings} >
            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className={`${styles.testiText}`}>
                <p className="text-base ">Comfygen Private Limited baked in India, And there team exceeded my expectations in developing my mobile application. Their attention to detail and willingness to go the extra mile were truly remarkable. I am extremely satisfied with the end result and would highly recommend their mobile app services to anyone looking for top-notch mobile app development.</p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Emilia (Mobile application )</h3>
                <span className="text-base font-semibold text-[#c9366c]">UK</span>
              </div>
            </div>
            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className={`${styles.testiText}`}>
                <p className="text-base ">I am based in Germany and had the pleasure of partnering with Comfygen Pvt. Ltd. for my blockchain application based with MLM project. Their team displayed exceptional professionalism and proficiency in the development process. The final product exceeded my expectations, and I am delighted with the results. I wholeheartedly endorse Comfygen for their outstanding work.</p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Matteo (Blockchain Application with MLM Project )</h3>
                <span className="text-base font-semibold text-[#c9366c]">German</span>
              </div>
            </div>
            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className={`${styles.testiText}`}>
                <p className="text-base ">It was a pleasure collaborating with Comfygen Private Limited for the development of my clinical application. The team from Jaipur, Rajasthan, India, showcased remarkable expertise and dedication throughout the project. Their attention to detail and commitment to delivering a flawless solution were truly commendable. I am grateful for their exceptional work and highly recommend their services to anyone seeking clinical application development.</p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Nitin Sharma (Clinical Application)</h3>
                <span className="text-base font-semibold text-[#c9366c]">India Ahemdabad</span>
              </div>
            </div>
            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className={`${styles.testiText}`}>
                <p className="text-base ">Working with Comfygen was a fantastic experience. Their expertise in healthcare application development is unparalleled. They not only delivered a high-quality product but also provided excellent support throughout the process. I am grateful for their dedication and would collaborate with them again in the future.</p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Hannah (Healthcare Application)</h3>
                <span className="text-base font-semibold text-[#c9366c]">Australia</span>
              </div>
            </div>
            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className={`${styles.testiText}`}>
                <p className="text-base ">Comfygen's game development services are truly exceptional. Their team in Mumbai delivered an innovative and engaging gaming experience that perfectly aligned with my vision. Their commitment to quality and creativity sets them apart, and I am incredibly satisfied with the outcome. I would undoubtedly choose Comfygen for future gaming projects.</p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Harish chandra  (Game development Services )</h3>
                <span className="text-base font-semibold text-[#c9366c]">India mumbai</span>
              </div>
            </div>

            <div className="bg-white shadow-lg p-14 text-center rounded-lg ">
              <div className={`${styles.testiText}`}>
                <p className="text-base ">Comfygen expertise in news and web app development impressed me beyond words. The team from Rajasthan demonstrated a deep understanding of my requirements and delivered a solution that surpassed my expectations. Their professionalism and attention to detail were outstanding, and I am immensely pleased with the final product. Comfygen is my go-to choice for all my future projects.</p>
              </div>
              <div className="mt-1">
                <h3 className="font-bold  text-xl">Sarita Chabra  (News & Web App Development)</h3>
                <span className="text-base font-semibold text-[#c9366c]">India Rajasthan</span>
              </div>
            </div>

          </Slider>

        </div>

      </div>
    </section>


  );
}
