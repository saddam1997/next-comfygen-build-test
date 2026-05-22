import React from 'react'
import JSON_DATA from "./json/grocery.json"
import Header from '../../components/Landing/Header'
import TopNavbar from "../../components/Landing/TopNavbar"
import Hero from '../../components/Landing/Hero'
import BrandsBar from '../../components/Landing/BrandsBar'
import Deliverables from '../../components/Landing/Deliverables'
import TrustBar from '../../components/Landing/TrustBar'
import AppTypes from '../../components/Landing/AppTypes'
import TechStack from '../../components/Landing/TechStack'
import Steps from '../../components/Landing/Steps'
import ComparisonTable from '../../components/Landing/ComparisonTable'
import Testimonials from '../../components/Landing/Testimonials'
import FAQ from '../../components/Landing/FAQ'
import CTASection from '../../components/Landing/CTASection'
import FoodDeliveryUISection from './FoodDeliveryUISection'
import Footer from '../../components/Landing/Footer'
import FinalCTA from '../../components/Landing/FinalCTA'
import Head from 'next/head'




const index = () => {
  return (
    <main className="bg-white font-dm-sans text-dark relative">
     <Head>
        <title>
          Grocery Delivery App Development Company | Comfygen Technologies
        </title>
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="Build a powerful grocery delivery app with real-time tracking, online payments, order management, and fast delivery features. Get custom grocery app development solutions today."
        />

        {/* Google Analytics */}
        <script src="https://www.googletagmanager.com/gtag/js?id=G-YNT54R0V73" />
        <script id="google-analytics" >
          {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          gtag('js', new Date());
          gtag('config', 'G-YNT54R0V73');
        `}
        </script>
      </Head>
      <Header />
      <div className='mt-12'>
        <Hero AppType={JSON_DATA?.AppType} DATA={JSON_DATA.HeroContent} />
      </div>
      <TrustBar DATA={JSON_DATA.reviewed} />
      {/* <BrandsBar DATA={JSON_DATA.BrandBar} /> */}
      <Deliverables DATA={JSON_DATA.Deliverables} />
      {/* <AppScreens /> */}
      <FoodDeliveryUISection DATA={JSON_DATA.FoodDelivery} />
      <AppTypes DATA={JSON_DATA.AppTypes} />
      <TechStack DATA={JSON_DATA.Technologies} />
      <Steps DATA={JSON_DATA.processSection} />
      <ComparisonTable DATA={JSON_DATA.comparisonData} />
      <Testimonials DATA={JSON_DATA.Testimonials} />
      <FAQ DATA={JSON_DATA.FAQ} />
      {/* <CTASection /> */}
      <FinalCTA AppType={JSON_DATA?.AppType} DATA={JSON_DATA.FinalCTA} />
      <Footer />

    </main>
  )
}

export default index
