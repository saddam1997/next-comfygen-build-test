import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react'
import GetinTouch from '../components/Getintouch';
import Image from 'next/image';
import Link from 'next/link';
import LazyLoad from 'react-lazy-load';
const BlogSection = dynamic(() => import('../components/BlogSection1'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
export default function Contact(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>  Contact us | App and Web Development Team | Get in Touch - Comfygen</title>
        <link rel="canonical" href="https://www.comfygen.com/contact-us" />
        <meta name="description" content="Contact Comfygen to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started."/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="  Contact us | App and Web Development Team | Get in Touch - Comfygen" />
        <meta property="og:description" content="Contact Comfygen to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started." />
        <meta property="og:url" content="https://www.comfygen.com/contact-us" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-01T13:05:06+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Contactus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
      </Head>
      <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      <div className="overflow-hidden">
      <section className="lg:py-[7rem] py-[5rem] bg-no-repeat bg-cover bg-[url('https://www.comfygen.com/image/contact-us-hero-bg.webp')]">
        <div className=" lg:space-y-0 space-y-6 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className='space-y-2 flex justify-center items-center'>
              <h1 className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem] text-start">
                Contact Us
              </h1>
          </div>
        </div>
       </section>
       {/* <div className="bg-white md:py-4 pt-0 ">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6  w-11/12 space-y-10 py-7 lg:py-10">
            <div className="text-center space-y-8 ">
              <h2 className=" font-bold capitalize text-[#212121] xl:text-4xl text-3xl">Find us on google map</h2>
              <div className=" pt-4 w-full grid lg:grid-cols-2 grid-cols-1 gap-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7841688626927!2d75.73872277598645!3d26.910344060191452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3134aeb1007%3A0x6b2253a37cf5c82e!2sCOMFYGEN%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1698326442450!5m2!1sen!2sin" className="w-full md:h-[31.25rem] h-[15rem]"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d961.2816598674892!2d-79.2306634850052!3d43.78136510332271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1589864dd35%3A0x802002f86fbcc7e4!2sComfygen%20Private%20Limited!5e0!3m2!1sen!2sin!4v1698313780224!5m2!1sen!2sin" className="w-full md:h-[31.25rem] h-[15rem]"></iframe>
              </div>
            </div>
          </section>
        </div> */}
        <GetinTouch />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  )
}
export async function getServerSideProps({ req, res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}
