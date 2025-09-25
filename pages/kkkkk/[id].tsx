import { useState } from "react";
import React from 'react'
import Head from 'next/head';
import LazyLoad from 'react-lazy-load';
import BlogSection from '../componentsnew/BlogSection';
import Header from '../componentsnew/Header';
import  {componentsMap} from "../../super-admin-components/AllComponents";

export default function Mobile(props) {

    let { initialData, pageData } = props;
    const [talkToExpertModal, setTalkToExpertModal] = useState(false);
    const openModal = () => {
        setTalkToExpertModal(true);
    };
    const closeModal = () => {
        setTalkToExpertModal(false);
    };
    if (!pageData) {
        return (<h1 className="text-red-900">Page not found.</h1>)
    }
    const metaComponents = pageData?.metsKeyValues || [];
    const dynamicComponents = pageData?.components || [];

    return (
        <>
            <Head>
                <title>{pageData?.siteTitle || "Comfygen"}</title>
                <link rel="canonical" href={pageData?.url || "https://comfygen.com"} />
                {
                    metaComponents.map((meta: any, i: number) => {
                        const [property, content] = Object.entries(meta)[0] || [];
                        return (<meta key={i} property={property} content={String(content)} />)
                    })
                }
            </Head>
            <div className="">
                <LazyLoad height={80} offset={100}>
                    <Header />
                </LazyLoad>
            </div>
            <div className="overflow-hidden">
                {dynamicComponents?.map((component: any, index: number) => {
                    const Component = componentsMap[component.componentId?.name];
                    if (component.componentId?.name === "HeroSectionForAllPages") {
                        return Component ? <Component key={index}
                            {...component.propValues}
                            openModal={openModal}
                            talkToExpertModal={talkToExpertModal}
                            setTalkToExpertModal={setTalkToExpertModal}
                            closeModal={closeModal} /> : null;
                    } else {
                        return Component ? <Component key={index} {...component.propValues} /> : null;
                    }
                })}
                <BlogSection initialData={initialData} />
            </div >
        </>
    );
}

export async function getServerSideProps(context) {
    try {

        const { params, res } = context;
        const { id } = params; // Get the dynamic id from the URL

        const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
        const data = await resData.json();
        const pageData = await fetch(`https://dynamic.comfygen.in/api/v1/page/get?name=${id}`);
        // const pageData = await fetch(`https://comfygen-dynamic.jamsara.com/api/v1/page/get?name=${id}`);
        // const pageData = await fetch(`http://localhost:1225/api/v1/page/get?name=${id}`);
        const pageDataJson = await pageData.json();
        res.setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
        );
        return { props: { initialData: data, pageData: pageDataJson?.data } };
    } catch (error) {
        console.log("error", error);
        return { props: { initialData: [], pageData: [] } };

    }
}