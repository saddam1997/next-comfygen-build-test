import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import { ChevronRight } from 'lucide-react';



export default function Custom404() {

  return (
    <>
      <div className="overflow-hidden">
        <Head>
          <title> Thankyou - Comfygen.com </title>
          <link rel="canonical" href="https://www.comfygen.com/404" />
          <meta
            name="description"
            content="Opps Page is not available Kindly go to the Home Page."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Thankyou - Comfygen.com " />
          <meta property="og:description" content="Opps Page is not available Kindly go to the Home Page." />
          <meta property="og:url" content="https://www.comfygen.com/404" />
          <meta property="og:site_name" content="Comfygen" />
          <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
          <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
          <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@comfygentech" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="8 minutes" />
        </Head>

        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC] text-center">

            <div className="md:py-28 py-5">
              <div className="flex items-center justify-center py-6">
                <Image
                  className="rounded-lg"
                  src="https://www.comfygen.com/img/thank-you-envelope.webp"
                  alt="Thank you"
                  width={256}
                  height={256}
                />
              </div>
              <div className='space-y-4'>
                <h2 className='text-white text-5xl font-bold'>Thank You</h2>
                <p className='text-white text-lg capitalize font-semibold'>for contacting us, we will reply promptly once your message is received.</p>
              </div>
              <div className="py-10 text-center">
                <Link href="https://www.comfygen.com/">
                  <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer   bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white overflow-hidden">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                    <span className="relative font-semibold"> Back To Home</span>
                    <ChevronRight className="ml-2 transition-all duration-200 ease-out " size={28} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
