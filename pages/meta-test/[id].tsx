import React from 'react';
import Head from 'next/head';

export default function OgTags(props) {
  let { initialData, dynamicComponents, metaComponents } = props;

  return (
    <>
      <Head>
        <title>Top Android App Development Company in Jaipur, India</title>
        {
          metaComponents.map((meta) => {
            const [property, content] = Object.entries(meta)[0] || [];
           return (<meta property={property} content={String(content)} />)
          }) 
        }

      </Head>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint neque. Blanditiis dolorem nam, commodi deleniti voluptatem reiciendis rerum dolorum ipsam itaque, vero, sequi asperiores. Reprehenderit eaque numquam earum dignissimos!
      </p>  
    </>
  )

}

export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params; // Get the dynamic id from the URL
  const pathname = "Android App Development";
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  const data = await resData.json();
  const pageData = await fetch(`https://comfygen-dynamic.jamsara.com/api/v1/page/get?name=${id}`);
  // const pageData = await fetch(`http://localhost:1225/api/v1/page/get?name=${id}`);
  const pageDataJson = await pageData.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data, dynamicComponents: pageDataJson.data.components || [], metaComponents: pageDataJson?.data?.metsKeyValues || [] } };
}