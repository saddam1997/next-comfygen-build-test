import React from 'react'
import ThankYou from '../../components/Landing/ThankYou'
import Header from '../../components/Landing/Header'
import Footer from '../../components/Landing/Footer'

const index = () => {
    return (
        <div>
            <Header />
            <div className='mt-16'>
                <ThankYou />
            </div>

            <Footer />
        </div>
    )
}

export default index
