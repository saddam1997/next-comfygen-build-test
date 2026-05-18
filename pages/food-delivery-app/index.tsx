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
import CTA from '../../components/Landing/Cta'
import Head from 'next/head'



const index = () => {
  return (
    <div className=''>
      <Head>
        <title>
          Food Delivery App Development — Launch in 2–4 Weeks | Quote
        </title>
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="Custom food delivery app like Zomato, Swiggy & UberEats. iOS, Android, restaurant & driver apps included. 150+ launched. NDA upfront, source code yours."
        />
        <script async data-twodelayedjs="https://www.googletagmanager.com/gtag/js?id=UA-228613134-1"></script>
        <script data-twodelayedjs="data:text/javascript;base64,CiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTsKICAgIGZ1bmN0aW9uIGd0YWcoKSB7IGRhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7IH0KICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7CiAgICBndGFnKCdjb25maWcnLCAnVUEtMjI4NjEzMTM0LTEnKTsK"></script>
      </Head>

      <Header />
      <Hero DATA={JSON_DATA.HeroContent} />
      <TrustBar DATA={JSON_DATA.reviewed} />
      <Deliverables DATA={JSON_DATA.Deliverables} />
      {/* <StickyElements/> */}
      <AppTypes DATA={JSON_DATA.AppTypes} />
      <CTA />
      <FoodDeliveryUISection DATA={JSON_DATA.FoodDelivery} />
      {/* <Pricing DATA={JSON_DATA.Pricing}/> */}
      <Testimonials DATA={JSON_DATA.Testimonials} />
      <Comparison DATA={JSON_DATA.Comparison} />
      <Process DATA={JSON_DATA.Process} />
      <TechStack DATA={JSON_DATA.Technologies} />
      <FAQ DATA={JSON_DATA.FAQ} />
      <FinalCTA DATA={JSON_DATA.FinalCTA} />
      <Footer />
    </div>
  )
}

export default index
