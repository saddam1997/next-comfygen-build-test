import React from 'react'
import JSON_DATA from "./json/grocery.json"
import Header from '../../components/Landing/Header'
import TopNavbar from "../../components/Landing/TopNavbar"
import Hero from '../../components/Landing/Hero'
import BrandsBar from '../../components/Landing/BrandsBar'
import Deliverables from '../../components/Landing/Deliverables'
import AppScreens from '../../components/Landing/AppScreens'
import AppTypes from '../../components/Landing/AppTypes'
import TechStack from '../../components/Landing/TechStack'
import Steps from '../../components/Landing/Steps'
import ComparisonTable from '../../components/Landing/ComparisonTable'
import Testimonials from '../../components/Landing/Testimonials'
import FAQ from '../../components/Landing/FAQ'
import CTASection from '../../components/Landing/CTASection'
import FoodDeliveryUISection from '../../components/Landing/FoodDeliveryUISection'
import Footer from '../../components/Landing/Footer'
import FinalCTA from '../../components/Landing/FinalCTA'




const index = () => {
  return (
    <main className="bg-white font-dm-sans text-dark relative">
      {/* <TopNavbar /> */}
      <Header />
      <div className='mt-12'>
        <Hero AppType={JSON_DATA?.AppType} DATA={JSON_DATA.HeroContent} />
      </div>
      <BrandsBar DATA={JSON_DATA.BrandBar} />
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
