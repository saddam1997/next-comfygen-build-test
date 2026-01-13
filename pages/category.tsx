import Link from 'next/link';
import Image from 'next/image';

import { useEffect } from "react";
import React from 'react'
import moment from 'moment';
import useSwr from 'swr';
import { useRouter } from "next/router";
import { BiChevronDown, BiTime } from 'react-icons/bi';
import Head from 'next/head';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import CustomImage from '../components/old/components/CustomImage';
import useSWRInfinite from "swr/infinite";

const fetcher = (url: string) => fetch(url,).then((res) => res.json()).then((res) => res?.data)

export default function Category() {
  const Spinner = () => (
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  );


  const router = useRouter();

  const { slug } = router.query;

  const { data, error, size, setSize, } = useSWRInfinite(() => `https://www.comfygen.com/api/v1/getCardByCategoryShotName?shortName=TECH`, fetcher);


  const finalData = data ? [].concat(...data) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined")
  return (
    // <>
    <div className='overflow-hidden'>
      <Head>
        <title>Blog Comfygen | Altcoin Development | Tech Info</title>
        <link rel="canonical" href="https://www.comfygen.com/blog/" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Home - Blog Comfygen | Altcoin Development | Tech Info" />
        <meta name="og:description" content="Our Blogs Read out latest articles and posts on latest technology , App and web development and design and blockchain , Alt coin and load more. All Post Tech Blockchain &ndash; Functioning and Advantages and Expert of cryptocurrency August 24, 2022/No Comments A distributed database or ledger which is shared among the nodes of a &hellip; Home Read More &raquo;" />
        <meta name="og:url" content="https://www.comfygen.com/blog/" />
        <meta name="og:site_name" content="Blog Comfygen | Altcoin Development | Tech Info" />
        <meta name="article:modified_time" content="2022-09-24T07:18:10+00:00" />
        <meta name="og:image" content="http://localhost:4548/_next/image?url=%2Fimages%2Fkindpng7.webp&w=640&q=75?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="3 minutes" />
      </Head>

      {/* hero section */}
      <div className="bg-cover bg-no-repeat bg-right" style={{ backgroundImage: `` }}>
        <div className=" xl:h-[calc(100vh-16rem)]  bg-gradient-to-r from-[#386ED4]  to-[#6243BA] bg-opacity-70 re md:flex items-center">
          <div className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto flex md:flex-row flex-col-reverse  md:items-center py-10">
            {/* text-section */}
            <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className="space-y-6 w-full md:text-left text-center ">
              <button className='bg-[#608ADD] text-white px-4 py-1 capitalize text-base   rounded-full'>website</button>
              <h1 data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" className="text-white xl:text-4xl text-2xl font-bold xl:leading-normal ">Website, App, Logo And UI Design.</h1>
              <p className="lg:text-base text-sm text-white">UI designs are very important as it can make or break your customer. It must have a seemless design optimized to your site. At the same time, the menus must be navigable, and must convey your brand value to your customers. At Comfygen, we had a team of highly experienced UI designer that can create a innovative and creative design for your brand. We try to incorporate human center approach in our designs that makes it more users friendly.</p>
              <div className="flex md:justify-start justify-center space-x-4 pb-10 lg:pb-0">
                <Link href='/contact-us/#form' passHref={true} className="group [transform:translateZ(0)] px-6 py-3 rounded-full overflow-hidden  relative before:absolute cursor-pointer before:bg-white   before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 text-white border"><span className="relative z-0  group-hover:text-blue-500 transition ease-in-out duration-500 uppercase">Contact Us</span>
                </Link>
              </div>
            </div>
            {/* img section */}
            <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className="w-full flex md:justify-end justify-center">
              <Image src="https://www.comfygen.com/images/kindpng7.webp" alt="Mobile App Development" title="Mobile App Development" className="w-5/6" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>

      <section
        data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
        <div className="leading-7 text-center py-9 lg:w-4/6 mx-auto">
          <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
            className="text-2xl font-bold text-black capitalize">Our Blogs</h2>
          <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
            className="px-2 py-3">Read out latest articles and posts on latest technology , App and web development and design and blockchain , Alt coin and load more.</p>
        </div>
        <div className='flex justify-center space-x-6'>
          <button className='bg-blue-500 text-white px-3 py-1 rounded-md'>All Post</button>
          <button className='border px-3 py-1 rounded-md'>Tech</button>
        </div>
      </section>




      <div data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="1000" className="bg-white py-20">
        <section className="2xl:w-4/6 xl:w-6/6 w-11/12  mx-auto">
          {/* text-section */}
          {/* {JSON.stringify(data)} */}
          <div className="text-center space-y-4">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-8">
              {
                finalData && finalData && finalData.length > 0 ?
                  finalData.map((element: any, index: any
                  ) => (
                    <div key={index}
                      onClick={() => router.push('/blog' + "/" + element.titleUrl)}
                      data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="bg-white  space-y-0 text-left  cursor-pointer hover:scale-105 scale-100 transition duration-150 shadow-xl border group hover:shadow-2xl">

                      <div className='w-full h-60 relative object-cover' >
                        <CustomImage src={element && element.image ? element.image : "https://www.comfygen.com/images/defaultImage.png"} loader={uploadcareLoader} fill unoptimized={true} alt="imgs"
                          priority loading="eager" />
                      </div>
                      <div className=" p-6 space-y-2">
                        <h3 className="text-lg font-semibold  group-hover:text-blue-500 transition duration-150 line-clamp-2">  {element && element.title ? element.title : null}</h3>
                        <div className='text-xs text-gray-500 flex space-x-4 font-normal'>
                          <span>Posted by : Comfygen </span>
                          <span className=''>{data && data && element.createdAt ? moment(new Date(parseInt(element.createdAt))).fromNow() : null}</span>
                        </div>
                        <p className="break-all text-gray-600 text-sm  line-clamp-5 ">{element && element.desc ? element.desc : null}</p></div>
                    </div>
                  ))

                  : null
              }
            </div>
          </div>
        </section>
      </div>

      <div className="flex  justify-center pb-20">

        {!isLoadingMore ?


          <button
            onClick={() => setSize(size + 1)}
            className="group [transform:translateZ(0)] px-6 py-3 rounded-full overflow-hidden  relative before:absolute cursor-pointer before:bg-blue-500 text-blue-600 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 border border-blue-500 flex items-center space-x-2"><span className="relative z-0 group-hover:text-white transition ease-in-out duration-500 ">Load More</span> <BiChevronDown size={20} className='relative z-0 group-hover:text-white transition ease-in-out duration-500' /></button>
          : <Spinner />
        }

      </div>
    </div>
  )
}