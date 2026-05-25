import React from 'react'
import ThankYou from '../../components/Landing/ThankYou'
import Header from '../../components/Landing/Header'
import Footer from '../../components/Landing/Footer'
import Head from 'next/head'

const index = () => {
    return (
        <div>
            <Head>
                 <meta name="robots" content="noindex, nofollow" />
            </Head>
            <Header />
            <div className='mt-16'>
                <ThankYou />
            </div>

            <Footer />
        </div>
    )
}

export default index
