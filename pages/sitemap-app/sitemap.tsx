import React from 'react'
import SitemapSection from '../../components/SitemapSection'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import JSON_DATA from "./sitemap.json"

export default function SitemapPage() {
    return (

        <>
            <Head>
                <title>Sitemap - ComfyGen</title>
                <meta name="description" content="Explore the sitemap of ComfyGen to easily navigate through our website and find the information you need about our AI solutions, services, and resources." />
            </Head>

            <Navbar />
            <SitemapSection sitemapData={JSON_DATA.sitemapData} />
        </>
    )
}


