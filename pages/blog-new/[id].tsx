import Head from 'next/head'
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import RecentPost from '../components/RecentPost';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from "swr";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import moment from "moment";

const fetcher1 = (url: string) => fetch(url,).then((res) => res.json()).then((res) => res?.data.list)
// let { initialData } = props;

const Post = (props: any) => {

  const router = useRouter();
  console.log('22222 ', router.query);

  const [panelsData, changePanel] = useState(props.newsDetails);
  useEffect(() => {
    changePanel(props.newsDetails);
    console.log('lllllllllllllll', router.pathname);
  }, [router.query.id]);

  const { data: finalData } = useSWR<any[]>("https://comfyblog.jamsara.com/api/v1/getBlogList?pageNo=1&size=11", fetcher1);

  return <>
    <Head>

      <title>{props.newsDetails && props.newsDetails.titlemenu ? props.newsDetails.titlemenu : "-"}</title>
      <meta name="description" content={props.newsDetails && props.newsDetails.shortdesc ? props.newsDetails.shortdesc : "-"} />
      <meta property="og:url" content={`https://https://comfyblog.jamsara.com/${props.newsDetails && props.newsDetails.titleurl ? props.newsDetails.titleurl : "-"}`} />
      <meta property="og:site_name" content="Comfygen"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.newsDetails && props.newsDetails.titlemenu ? props.newsDetails.titlemenu + " | Comfygen.com" : "| Comfygen.com"} />
      <meta property="og:description" content={props.newsDetails && props.newsDetails.shortdesc ? props.newsDetails.shortdesc : "-"} />
      <meta property="og:image" content={props.newsDetails && props.newsDetails.imageLinkUrl ? props.newsDetails.imageLinkUrl : "https://www.comfygen.com/images/defaultImage.png"} />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="630" />
      <link rel="canonical" href={`https://www.comfynews.site/News/${props.newsDetails && props.newsDetails.titleurl.replace("/", "-").split(' ').join('-') ? props.newsDetails.titleurl.replace("/", "-").split(' ').join('-') : "-"}`}></link>
    </Head>
    <div className=' w-full mx-auto '>
      <div
        className="bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }} >
        <div className=" bg-[#1B1C30CC] py-3">
          <Header />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:space-x-10 container 2xl:w-9/12 xl:w-5/6 w-11/12  mx-auto py-6 md:px-2'>
        <div className='lg:w-[70%]'>
          {props.newsDetails ?
            <div className='bg-white '>
              <div className='w-full h-auto relative object-cover' >
                <Image loader={uploadcareLoader} layout="responsive" unoptimized={true} alt="imgs" src={props.newsDetails && props.newsDetails.imageLinkUrl ? props.newsDetails.imageLinkUrl : "https://www.comfygen.com/images/defaultImage.png"}
                  className='object-cover  w-full' width="1280" height="720" />
              </div>
              <div className='bg-white space-y-6 md:p-6 p-4 border'>
                <h3 className='text-black md:text-[24px] text-xl font-semibold'>{props.newsDetails.name}</h3>
                <div className='flex space-x-1'>
                  <p className='text-[15px] text-gray-800 hover:text-sky-500' > Leave a Comment</p>/
                  <a className='text-[15px] text-gray-800 hover:text-sky-500' href="#"> By Team Comfygen</a>/
                  <p className='text-[15px] text-gray-800 hover:text-sky-500' > {moment(new Date(parseInt(props.newsDetails.createdAt))).utcOffset("+05:30").format("DD-MM-YYYY")} </p>
                </div>
                <p dangerouslySetInnerHTML={{ __html: props.newsDetails && props.newsDetails.story ? props.newsDetails.story : "-" }}></p>
              </div>
            </div>
            : null}
          <div className='flex justify-between p-5 test-xl '>
            <span >next</span>
            <span>Previous</span>
          </div>
        </div>
        <RecentPost />
      </div>

    </div>


  </>
}

export async function getServerSideProps(context: any) {
  let url = `https://comfyblog.jamsara.com/api/v1/getBlogBytitleurl?titleurl=${context.query.id}`;
  const res = await fetch(url);
  const resJson = await res.json();
  console.log('resJsonresJsonresJson', resJson);
  return {
    props: {
      newsDetails: resJson.data,
    },
  };
}

export default Post



// This gets called on every request
// export async function getServerSideProps() {

//   const res = await fetch(process.env.URL + '/blog/wp-json/wp/v2/posts?per_page=3')
//   const data = await res.json()
//   let finalData = data.map((element) => ({
//     link: element.link,
//     og_image: element.yoast_head_json.og_image[0].url,
//     title: element.title.rendered,
//     description: element.yoast_head_json.description
//   }))
//   return { props: { initialData: finalData } }
// }