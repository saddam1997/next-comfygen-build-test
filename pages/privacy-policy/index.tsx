import { useEffect } from 'react';
import React from 'react'
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '../../components/Newcomponet/layout/Header';

const HeroSectiondesign2 = dynamic(() => import('../../components/Newcomponet/SectionCompoent/HeroSectiondesign2'), {
  loading: () => <p>Loading...</p>,
})

export default function PrivacyPolicy() {



  return (
    <>
  <div className="overflow-hidden">
  <Head>
        <title> Comfygen Privacy Policy - Protecting Your Personal Information </title>
        <link rel="canonical" href="https://www.comfygen.com/privacy-policy" />
        <meta
          name="description"
          content=" At ComfyGen, we take the privacy and security of your personal information seriously. Our privacy policy outlines how we collect, use, and protect your data when you use our website or services."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content=" Comfygen Privacy Policy - Protecting Your Personal Information " />
        <meta property="og:description" content=" Read our ComfyGen terms and conditions carefully before using our website. Learn about our policies on privacy, intellectual property, and user-generated content. By accessing and using our website." />
        <meta property="og:url" content="https://www.comfygen.com/privacy-policy" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="8 minutes" />
      </Head>
        {/* hero section */}
        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="py-20">
               <HeroSectiondesign2
                heading='Comfygen Development Company Privacy Policy'
                ptag="We value your privacy and are committed to protecting your personal information. We will only collect, use, and disclose your personal information in accordance with applicable laws and our privacy policy. We take reasonable steps to protect your personal information from unauthorized access, disclosure, and misuse."
              />
            </div>
          </div>
        </div>


        {/* Term and conditions */}
        <div className="bg-white py-10">
          <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto">
            {/* text-section */}
            <div className=" ">

              {/* privacy policy */}
         
              <div className="bg-white text-left   space-y-4 p-4 flex-1 pt-8">
                <h2 className="md:text-5xl text-3xl text-[#0E1F51] font-semibold"> Privacy Policy</h2>
                <p>This privacy policy will help you understand how Comfygen uses and protects the data you provide to us when you visit and use www.comfygen.com
                </p>
                <p>We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.
                </p>

                <h3 className="text-3xl text-[#0E1F51] font-semibold">What User Data We Collect</h3>
                <p>When you visit the website, we may collect the following data:</p>
                <p>· Your IP address.</p>
                <p>· Your contact information and email address.</p>
                <p>· Other information such as interests and preferences.</p>
                <p>· Data profile regarding your online behaviour on our website.</p>

                <h3 className="text-3xl text-[#0E1F51] font-semibold">Safeguarding and Securing the Data</h3>
                <p>Comfygen is committed to securing your data and keeping it confidential. Comfygen has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.
                </p>

                <h3 className="text-3xl text-[#0E1F51] font-semibold">Our Cookie Policy</h3>
                <p>Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behaviour (analyze web traffic, web pages you spend the most time on, and websites you visit).
                </p>
                <p>The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.
                </p>
                <p>Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.
                </p>
                <p>If you want to disable cookies, you can do it by accessing the settings of your internet browser.
                </p>

                <h3 className="text-3xl text-[#0E1F51] font-semibold">Third Party Links or Websites</h3>
                <p>Sometimes, we may include links to the third parties on the website. This inclusion of links does not mean that www.comfygen.com endorses the site's policy towards the visitor's privacy. Visiting those websites is not governed by this privacy policy agreement. While landing on a site that is linked to our website, do review their privacy policy before sending the visitors any personal data.
                </p>

                <h3 className="text-3xl text-[#0E1F51] font-semibold ">Restricting the Collection of your Personal Data</h3>
                <p>At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:
                </p>
                <p>When you are filling the forms on the website, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information.
                </p>
                <p>If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you.
                </p>

                <h3>Do We Share Your Personal Data and Information?</h3>
                <p>Comfygen will not lease, sell or distribute your personal information to any third parties under any circumstances, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.
                </p>
                <h3 className="text-4xl text-[#0E1F51] font-semibold">Contact Us</h3>
                <p>If you have any questions about these Terms and Conditions, You can contact us:</p>

                <p>By email:<span className="font-bold text-blue-600"><a href="mailto:sales@comfygen.com"> sales@comfygen.com</a></span>  </p>
                <p>
                  By visiting this page on our website:<span className="font-bold text-blue-600"><a href="https://www.comfygen.com/contact-us"> https://www.comfygen.com/contact</a></span> </p>

                <p>By phone number: <span className="font-bold text-blue-600"><a href="tel:9587867258"> +91 9587867258</a></span></p>
              </div>

            </div>
          </section>

        </div>


      </div>


    </>
  )
}
