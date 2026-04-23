import dynamic from 'next/dynamic';
import Head from 'next/head';;
import React from 'react'
import Header from '../../components/Newcomponet/layout/Header';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Get a Free Quote Now - comfygen.com</title>
        <meta
          name="description"
          content="Get a free quote from our service experts. Our services are tailored to meet your individual needs, so you can get the best value for your money. Get started today and find out how our services can help you reach your goals." />
        <link rel="canonical" href="https://www.comfygen.com/quote" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Get a Free Quote Now - comfygen.com" />
        <meta property="og:description" content="Get a free quote from our service experts. Our services are tailored to meet your individual needs, so you can get the best value for your money. Get started today and find out how our services can help you reach your goals." />
        <meta property="og:url" content="https://www.comfygen.com/quote" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-01T13:05:06+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Contactus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
      </Head>
      <div
        className="bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }} >
        <div className=" bg-[#1B1C30CC] pb-24">
         {/* <Header /> */}
        </div>
      </div>
      <section>
        <div className='mx-auto 2xl:w-9/12 xl:w-5/6  w-11/12 space-y-14 lg:py-28 py-10'>
          <h1 className='text-center text-[#0E1F51] md:text-5xl text-3xl font-bold'>Get A Quote</h1>
          <p className='text-[#000000] text-center text-xl  tracking-wide'>Interested in learning further about our capabilities, or just want to get in touch? Fill out the form below to connect with a Comfygen team members today!</p>
        </div>
      </section>
    </>
  )
}