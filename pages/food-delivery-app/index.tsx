import React from 'react'
import JSON_DATA from './foodDeliveryApp.json'
import Hero from '../../components/Landing/Hero'
import TrustBar from '../../components/Landing/TrustBar'
import Deliverables from '../../components/Landing/Deliverables'
import StickyElements from '../../components/Landing/StickyElements'
import Footer from '../../components/Landing/Footer'
import AppTypes from '../../components/Landing/AppTypes'
import Pricing from '../../components/Landing/Pricing'
import Testimonials from '../../components/Landing/Testimonials'
import Comparison from '../../components/Landing/Comparison'
import Process from '../../components/Landing/Process'
import TechStack from '../../components/Landing/TechStack'
import FAQ from '../../components/Landing/FAQ'
import FinalCTA from '../../components/Landing/FinalCTA'
import Header from '../../components/Landing/Header'
import FoodDeliveryUISection from '../../components/Landing/FoodDeliveryUISection'



const index = () => {
  return (
    <div className=''>
      <Header />
       <Hero DATA={JSON_DATA.HeroContent}/>
       <TrustBar DATA={JSON_DATA.reviewed}/>
       <Deliverables DATA={JSON_DATA.Deliverables}/>
       {/* <StickyElements/> */}
       <AppTypes DATA={JSON_DATA.AppTypes}/>
       <FoodDeliveryUISection DATA={JSON_DATA.FoodDelivery}/>
       <Pricing DATA={JSON_DATA.Pricing}/>
       {/* <Testimonials/> */}
       <Comparison DATA={JSON_DATA.Comparison}/>
       <Process/>
       <TechStack/>
       <FAQ/>
       <FinalCTA/>
       <Footer/>
    </div>
  )
}

export default index
