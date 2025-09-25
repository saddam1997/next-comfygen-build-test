import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import useSWR from "swr";
import { useEffect, useState } from "react";
import React from "react";
import moment from "moment";
import useSwr from "swr";
import { useRouter } from "next/router";
import { BiChevronDown, BiTime } from "react-icons/bi";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import CustomImage from "../components/CustomImage";
import useSWRInfinite from "swr/infinite";
import dynamic from 'next/dynamic';
import Pagination from '../components/Pagination';
 

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
const HeroSectionForm = dynamic(() => import('../components/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})
const fetcher = (url: string) => fetch(url,).then((res) => res.json()).then((res) => res?.data.list) 
const postsPerPage = 10 // Set the number of posts per page

export default function blog(posts) { 

  const router = useRouter();
  const { data: finalData } = useSWR<any[]>(
    "https://comfyblog.jamsara.com/api/v1/getBlogList?pageNo=1&size=6",
    fetcher
  );

  const [currentPage, setCurrentPage] = useState(1)

  // Calculate the index of the last post to display
  const indexOfLastPost = currentPage * postsPerPage

  // Calculate the index of the first post to display
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  // Get the current page of posts
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage)

  // Generate an array of page numbers for pagination links
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
  useEffect(() => {
    AOS.init();
  });
  return (
    // <>
    <div className="overflow-hidden">
      <Head>
        <title>Discover Comfygen - The Ultimate Solution for Comfortable and Customizable Development</title>
        <link rel="canonical" href="https://www.comfygen.com/blog/" />
        <meta
          name="description"
          content="Learn from expert app developers at Comfygen as they share their top tips and insights for successful app development. Discover the latest trends, best practices, and tools to help you create the best apps for your business. Read our blog now!"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Home - Discover Comfygen - The Ultimate Solution for Comfortable and Customizable Development"
        />
        <meta
          property="og:description"
          content="Learn from expert app developers at Comfygen as they share their top tips and insights for successful app development. Discover the latest trends, best practices, and tools to help you create the best apps for your business. Read our blog now!"
        />
        <meta property="og:url" content="https://www.comfygen.com/blog/" />
        <meta
          property="og:site_name"
          content="Blog Comfygen | Altcoin Development | Tech Info"
        />
        <meta
          property="article:modified_time"
          content="2022-09-24T07:18:10+00:00"
        />
        <meta
          property="og:image"
          content="http://www.comfygen.com/_next/image?url=%2Fimages%2Fkindpng7.webp&w=640&q=75?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="3 minutes" />
      </Head>
      <div
        className="bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')` }}>
        <div className=" bg-[#1B1C30CC]">
          <Header />
          <div className="py-2">
             <HeroSectionForm
              heading='Our Blogs'
              ptag="Read out latest articles and posts on latest technology , App and web development and design and blockchain , Alt coin and load more. "
              btnName="Discuss Now"
              btnLink='/contact-us'
              imgSrc='https://www.comfygen.com/images/blog-comfy.webp'
              Width={555}
              Height={600}
              altTag="Comfygen Blog" />
          </div>
        </div>
      </div> 
      <div 
        className="bg-slate-50 py-20">
        <h1 className="text-center text-4xl font-semibold pb-20 ">Our Latest Blogs</h1>
        <section className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 ">
          {/* text-section */}
          <div className="text-center space-y-4">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 ">
              {
                finalData && finalData && finalData && finalData.length > 0 ?
                  finalData.map((element: any, index: any
                  ) => (

                    <div key={index} onClick={() => router.push('/blog/' + element.titleurl)} className="bg-white  space-y-0 text-left  cursor-pointer    border group hover:shadow-2xl">
                      <div className='w-full xl:h-52 lg:h-64 h-60 relative object-cover ' >
                        <CustomImage src={element && element.imageLinkUrl ? element.imageLinkUrl : "Loading..."} loader={uploadcareLoader} width={1200} height={630} unoptimized={true} alt={element && element.name ? element.name : "Loading..."}
                          priority loading="eager" />
                      </div>
                      <div className=" p-4 space-y-2">
                        <h2 className="text-lg font-bold  group-hover:text-blue-500 transition duration-150 line-clamp-2">  {element && element.name ? element.name : null}</h2>
                        <div className='text-xm text-gray-500 flex space-x-4 font-normal'>
                          <span>Posted by : Comfygen </span>
                          <span className=''>
                            {element && element.createdAt ? moment(new Date(parseInt(element.createdAt))).fromNow() : 0}
                          </span>
                        </div>
                        <p className="break-all text-gray-600 text-sm  line-clamp-3 ">{element && element.description ? element.description : null}</p></div>
                      <div className="flex justify-between px-5 py-2 cursor-pointer hover:text-blue-500">
                        <div className=" text-base border rounded-md border-black/10 px-2 py-2" onClick={() => router.push('/blog/' + element.titleurl)}>Read More</div>
                      </div>
                    </div>
                  )
                  )
                  :
                  <div className="skeleton space-y-4 w-full border h-96">
                    <div className="image"></div>
                    <div className='p-6 space-y-4'>
                      <p className="line"></p>
                      <p className="line"></p>
                      <p className="line"></p>
                    </div>
                  </div>
              }
            </div>
          </div>
        </section>



        <div>
        {pageNumbers.map((number) => (
          <Link key={number} href={`/posts?page=${number}`}>
            <a onClick={() => setCurrentPage(number)}>{number}</a>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context: any) {
  let url = `https://comfyblog.jamsara.com/api/v1/getBlogBytitleurl?titleurl=${context.query.id}`;
  const res = await fetch(url);
  const resJson = await res.json();
  // console.log('resJson ', resJson);
  return {
    props: {
      newDetails: resJson.data,
    },
  };
}
