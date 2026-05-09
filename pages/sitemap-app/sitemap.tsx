import React from 'react'
import SitemapSection from '../../components/SitemapSection'

import Head from 'next/head'
import JSON_DATA from "./sitemap.json"

export default function SitemapPage() {
    return (

        <>



            <Head>
                <title>
                 Sitemap | Comfygen Technologies – App Development Company 

                </title>
                <meta
                    name="description"
                    content="Explore Comfygen Technologies sitemap to find all our services, including mobile app development, healthcare apps, fintech solutions, and custom software development."
                />
                <link
                    rel="canonical"
                    href="https://www.comfygen.com/sitemap-app/sitemap"
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
            </Head>

             {/* <Navbar /> */}
            <SitemapSection sitemapData={JSON_DATA.sitemapData} />
        </>
    )
}


