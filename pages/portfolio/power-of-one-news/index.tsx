import Image from 'next/image';

import Link from 'next/link';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import JSON_DATA from "./power-of-one-news.json"
import { BsArrowRight } from 'react-icons/bs';


import Header from '../../../components/Newcomponet/layout/Header';

const TechnologyStack = dynamic(() => import('../../../components/Newcomponet/portfolio/TechnologyStack'), {
  loading: () => <p>Loading...</p>,
})


const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


 

export default function about(props:any) {
  let { initialData } = props;
  return (
    <div className='overflow-hidden'>
      <Head>
        <title> Power of One News - Innovative News App Development </title>
        <link rel="canonical" href="https://www.comfygen.com/about-us" />
        <meta
          name="description"
          content="Power of One News is a dynamic news app designed for real-time updates, personalized news feeds, and seamless user experience. Stay informed with cutting-edge news app development."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" About comfygen.com a App and Web Development Company " />
        <meta property="og:description" content="Comfygen is a full-service app and web development company that specializes in creating custom solutions for businesses. Our team of experienced developers, designers, and project managers work collaboratively to deliver high-quality software products that meet our clients' needs." />
        <meta property="og:url" content="https://www.comfygen.com/about-us" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
      </Head>
      <div className="overflow-hidden" >
        <div className="bg-gradient-to-r from-[#1E3358] via-[#2B3E74] to-[#251F55]">
          <div className='  w-full bg-[length:20rem_auto] bg-no-repeat bg-right-bottom'>
            <div className=" bg-[#1B1C30CC]/80">
             {/* <Header /> */}
              <div className="flex  justify-center items-center w-11/12 space-x-4 mx-auto 2xl:w-9/12 xl:w-5/6  md:space-y-20  py-8">
                <div className="w-full">
                  <div className="space-y-6 text-start">
                    <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
                      News Application
                    </h1>
                    <p className="text-white text-base">Power of One News is a dynamic and innovative news website designed to revolutionize the way individuals consume and interact with news content. The vision behind this project is to create a platform that empowers users with reliable, unbiased, and personalized news experiences. We aim to foster a sense of community engagement and provide a one-stop destination for staying informed on a wide range of topics.
                    </p>
                    <div className="py-4">
                      <Link href="/contact-us" passHref={true}>
                        <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center shadow-xl cursor-pointer bg-[#fff] text-slate-800 overflow-hidden">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-[#D0FFDA] rounded-full group-hover:w-60 group-hover:h-60 "></span>
                          <span className="relative"> Let's Discuss</span>
                          <BsArrowRight className="ml-2 transition-all duration-200 ease-out z-10" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden w-full md:flex justify-center md:py-0 ">
                  <Image className=" " src="https://www.comfygen.com/img/powe-of-one-news.webp" width={600} height={300} alt=' hero great wallet' loading="eager" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <section className=" h-full w-11/12 mx-auto space-y-0 2xl:w-4/6 xl:w-5/6 lg:space-y-10">
            <div className="items-center space-y-10 md:flex md:space-y-0 md:space-x-10 w-full">
              <div className="w-full space-y-6 text-center md:text-left">
                <h2 className=" text-slate-900 xl:text-4xl text-3xl font-bold xl:leading-[3rem]">Business Benefits</h2>
                <p><span className='text-lg font-bold'> Information Accessibility: </span> Power of One News ensures easy access to diverse news categories, catering to the varied interests of users.</p>
                <p><span className='text-lg	 font-bold'>Community Building: </span> The platform fosters a sense of community by enabling users to engage in discussions, share perspectives, and connect with like-minded individuals.</p>
                <p><span className='text-lg	 font-bold'>Personalized Experience: </span> Through advanced algorithms, users receive customized news feeds based on their preferences, enhancing their overall experience.</p>
                <p><span className='text-lg	 font-bold'>Trustworthy Source: </span> The platform prioritizes accuracy and reliability, establishing itself as a trustworthy source of information in the digital landscape.</p>
              </div>
              <div className="flex justify-center items-end w-full md:justify-end ">
                <Image src="https://www.comfygen.com/img/business-benefits-power-of-one-news.webp" className="rounded-lg" unoptimized={true} width={800} height={800} alt="Business Benefits" />
              </div>
            </div>
          </section>
        </div>
        <div className={`bg-gradient-to-r from-[#1E3358] via-[#2B3E74] to-[#251F55] md:py-10 py-6`} >
          <section className="w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                Features
              </h2>
              <p className='text-[#fff] text-white-800'><span className='text-xl font-bold'>Personalized News Feeds</span> Tailored content based on user preferences and browsing history.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Community Forums </span> Discussion boards and forums for users to share opinions and engage in conversations.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Multimedia Integration:  </span> Inclusion of videos, images, and interactive elements for a richer news consumption experience.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Real-time Updates: </span> Timely delivery of breaking news and updates to keep users informed.</p>
              <p className='text-[#fff] text-white-800'><span className='text-lg	 font-bold'>Search and Archive:</span> Robust search functionality and an archive system for easy retrieval of past articles.</p>
            </div>
            <div className="w-full space-y-4 text-center md:text-left">
              <h2 className="py-2 text-[#fff] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
                The Challenge
              </h2>
              <p className='text-[#fff] text-white-800'>The challenge was to create a platform that not only aggregated news but also provided a sense of community and personalization, overcoming the information overload often associated with traditional news websites. Striking the right balance between automation and human curation posed a challenge in delivering a personalized yet diverse news experience.</p>
            </div>
          </section>
        </div>

        <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0 py-10">
          <div className="flex justify-center w-full lg:justify-start pt-10 lg:pt-0">
            <Image
              src="https://www.comfygen.com/img/solution-powe-of-one-nesw.webp"
              alt="Experts to Build and Manage Decentralised Solutions"
              className="rounded-lg"
              width={800}
              height={800}
            />
          </div>
          <div className="w-full space-y-4 text-center md:text-left">
            <h2 className="py-2 text-[#0E1F51] xl:text-3xl text-2xl font-bold xl:leading-[3rem]">
              Solution
            </h2>
            <p className='text-base text-slate-800'>Our solution involved the implementation of cutting-edge algorithms for content recommendation, fostering community engagement through intuitive forum features, and integrating multimedia elements for a more immersive experience. Human moderation was employed to ensure the quality and reliability of the news content. A user-friendly interface was developed to make navigation seamless, and the platform was optimized for various devices.
            </p>
          </div>
        </section>

        <div className={`bg-gradient-to-r from-[#1E3358] via-[#2B3E74] to-[#251F55]  py-20`}>
          <section className="items-center w-11/12 space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto flex flex-col-reverse lg:flex-row  md:space-x-10 md:space-y-0">
            <div className="flex justify-center w-full ">
              <Image src="https://www.comfygen.com/img/tools-power-of-one-news.webp" alt="Tools Technologies" className="rounded-lg " unoptimized={true} width={800} height={600} />
            </div>
            <div className='space-y-2 w-full'>
              <h3 className='text-4xl font-bold text-white' >Tools & Technologies</h3>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Backend Development:  </span>Node.js, Express.js</p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Frontend Development: </span> React.js</p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Database:  </span> MongoDB</p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>User Authentication: </span>JWT (JSON Web Tokens)</p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Content Recommendation:  </span>Machine learning algorithms</p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Multimedia Integration: </span>HTML5, CSS3</p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Version Control:  </span>Git</p>
              <p className="text-[#fff] text-white-800"><span className='text-lg	 font-bold'>Hosting: </span> AWS (Amazon Web Services)</p>
              <p className="text-[#fff] text-white-800"> Power of One News is not just a news website; it's a dynamic platform that puts the power of information in the hands of users, fostering a sense of community and individual empowerment.</p>
            </div>
          </section>
        </div>

        <div className='2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='p-4 bg-gray-200 rounded-t-md col-span-8'>
              <Image src="https://www.comfygen.com/img/news-portfolio-footer-img.webp" alt='' width={989} height={742} className='w-full' />
            </div>
          </div>
        </div>
        <TechnologyStack />
      </div>
      <BlogSection initialData={initialData} />
    </div>
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