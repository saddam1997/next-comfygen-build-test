import Head from 'next/head';
import React from 'react'
import Header from "../../components/Newcomponet/layout/Header"
import GetinTouch from '../../components/Newcomponet/SectionCompoent/GetinTouch';
import LazyLoad from 'react-lazy-load';

export default function Contact(props:any) {
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

        <GetinTouch />
        {/*<BlogSection initialData={initialData} />*/}
      </div>
    </>
  )
}
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?per_page=3`
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    return {
      props: { initialData: data },
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}
