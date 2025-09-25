import { useEffect, useState } from 'react';
import React from 'react'
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

const HeroSectiondesign2 = dynamic(() => import('../components/HeroSectiondesign2'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <p>Loading...</p>,
})
export default function TermsAndConditions() {
  const [tech, setTech] = useState(0);


  return (
    <>
      <div className="overflow-hidden">
        <Head>
          <title> Custom Altcoin Creation - comfygen.com </title>
          <link rel="canonical" href="https://www.comfygen.com/custom-altcoin-creation" />
          {/* <meta name="description" content=" Read our ComfyGen terms and conditions carefully before using our website. Learn about our policies on privacy, intellectual property, and user-generated content. By accessing and using our website." />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content=" Terms and Conditions - comfygen.com " />
          <meta property="og:description" content=" Read our ComfyGen terms and conditions carefully before using our website. Learn about our policies on privacy, intellectual property, and user-generated content. By accessing and using our website." />
          <meta property="og:url" content="https://www.comfygen.com/custom-altcoin-creation" />
          <meta property="og:site_name" content="Comfygen" />
          <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
          <meta property="article:modified_time" content="2022-09-10T07:43:51+00:00" />
          <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Aboutus.svg?size=1024" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@comfygentech" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="8 minutes" /> */}
        </Head>
        {/* hero section */}
        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">
            <Header />
            <div className="py-20">
              <HeroSectiondesign2
                heading='CUSTOM ALTCOIN CREATION'
                ptag="Comfygen will help you in creating your own cryptocurrency based on your specifications and needs. You will be provided with your coin's source code and compiled secure window cyryptocurrency wallet. Wanted help ? Try one of the following resources!"
              />
            </div>
          </div>
        </div>

        {/* Term and conditions */}
        <div className="bg-white  py-10">
          <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
            <div className="bg-white text-center   space-y-4  p-4 flex-1">
              <h2 className="md:text-4xl text-xl text-[#0E1F51] font-bold">Would You Like To Create A</h2>
              <div className="flex items-center  md:justify-center justify-start overflow-x-auto whitespace-nowrap ">
                <span
                  onClick={() => setTech(tech === 0 ? 0 : 0)}
                  className={
                    tech === 0
                      ? "bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-10 rounded py-2.5 text-lg font-semibold capitalize cursor-pointer"
                      : "bg-[#F1F5F9]  duration-300 trasition text-black px-10 rounded py-2.5 text-lg font-semibold capitalize cursor-pointer"
                  }
                >
                  CYRPTO COIN
                </span>
                <span
                  onClick={() => setTech(tech === 1 ? 0 : 1)}
                  className={
                    tech === 1
                      ? "bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white px-10 rounded py-2.5 text-lg font-semibold capitalize cursor-pointer"
                      : "bg-[#F1F5F9]  duration-300 trasition text-black px-10 rounded py-2.5 text-lg font-semibold capitalize cursor-pointer"
                  }
                >
                  TOKENS
                </span>

              </div>
            </div>


            {tech === 0 ? (
              <div className="w-full bg-grey-lightest">
                <div className='bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] p-3'>
                  <p className='text-white text-xl font-bold'>Personal Information</p>
                </div>

                <div className="container mx-auto p-4 shadow space-y-6">
                  <div className="py-6 lg:w-96 w-full px-8">
                    <div className="flex items-center">
                      <div className="flex items-center text-white relative">
                        <div className="flex justify-center items-center text-xl font-bold rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 bg-green-600">
                          1
                        </div>
                        <div className="absolute top-0 -ml-7 text-center mt-16 w-32 text-xs font-medium uppercase text-black">Coin Information</div>
                      </div>
                      <div className='w-full flex items-center'>

                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-2 border-green-600"></div> <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-2 border-red-500"></div>
                      </div>
                      <div className="flex items-center text-white relative">
                        <div className="flex justify-center items-center text-xl font-bold rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 bg-red-500 ">
                          2
                        </div>
                        <div className="absolute top-0 -ml-10  text-center mt-16 w-32 text-xs font-medium uppercase text-black">Personal Information</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4  text-black text-xl border-b border-grey-lighter">Hashing Algorithm</div>
                  <div className=" bg-gray-200 rounded shadow">
                    <div className="py-4 px-8">
                      <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Coin Name *</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" />
                        </div>
                        <div className="w-1/2 ml-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Coin Index</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" />
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-1/2 mr-1 relative ">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Select Hashing *</label>
                          <select name="Algorithm" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-white" id="Algorithm">
                            <option value="volvo">Select Hashing Algorithm </option>
                            <option value="saab">SHA256</option>
                            <option value="mercedes">Scrypt</option>
                            <option value="audi">Equihash</option>
                            <option value="audi">Quark</option>
                            <option value="audi">X11</option>
                          </select>
                          <span className='absolute right-1 bottom-3'><BiChevronDown size={20} /></span>
                        </div>
                        <div className="w-1/2 ml-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2">Coin Type *</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" />
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Base Coin *</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" />
                        </div>
                        <div className="w-1/2 ml-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Total Supply *</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" />
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Premine? (Number)</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" />
                        </div>
                        <div className="w-1/2 ml-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Detail Description *</label>
                          <textarea name="msg" cols={18} rows={4} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-8">
                    <button className="inline-flex items-center shadow-xl bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white font-bold py-2 px-4 rounded border" type="submit">
                      Next Step <span className=''><BiChevronRight size={24} /></span>
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
            {tech === 1 ? (
              <div className="w-full bg-grey-lightest">
                <div className='bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] p-3'>
                  <p className='text-white text-xl font-bold'>Tokens Information</p>
                </div>

                <div className="container mx-auto p-4 shadow space-y-6">
                  <div className="py-6 lg:w-96 w-full px-8">
                    <div className="flex items-center">
                      <div className="flex items-center text-white relative">
                        <div className="flex justify-center items-center text-xl font-bold rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 bg-green-600">
                          1
                        </div>
                        <div className="absolute top-0 -ml-7 text-center mt-16 w-32 text-xs font-medium uppercase text-black">Coin Information</div>
                      </div>
                      <div className='w-full flex items-center'>

                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-2 border-green-600"></div> <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-2 border-red-500"></div>
                      </div>
                      <div className="flex items-center text-white relative">
                        <div className="flex justify-center items-center text-xl font-bold rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 bg-red-500 ">
                          2
                        </div>
                        <div className="absolute top-0 -ml-10  text-center mt-16 w-32 text-xs font-medium uppercase text-black">Personal Information</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4  text-black text-xl border-b border-grey-lighter">Fork a coin</div>
                  <div className=" bg-gray-200 rounded shadow">
                    <div className="py-4 px-8">
                      <div className="flex mb-4">
                        <div className="w-1/2 mr-1 relative ">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Token Type *</label>
                          <select name="Algorithm" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-white" id="Algorithm">
                            <option value="volvo">UTILITY</option>
                            <option value="saab">SECURITY</option>
                            <option value="mercedes">NFT</option>
                            <option value="audi">METAVERSE</option>
                            <option value="audi">OTHER</option>
                          </select>
                          <span className='absolute right-1 bottom-3'><BiChevronDown size={20} /></span>
                        </div>
                        <div className="w-1/2 mr-1 relative ">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Token Standard</label>
                          <select name="Algorithm" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-white" id="Algorithm">
                            <option value="volvo">ERC20 </option>
                            <option value="saab">ERC233</option>
                            <option value="mercedes">ERC777</option>
                            <option value="audi">ERC721X</option>
                            <option value="audi">ERC865</option>
                            <option value="audi">ERC827</option>
                          </select>
                          <span className='absolute right-1 bottom-3'><BiChevronDown size={20} /></span>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Token Name *</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" />
                        </div>
                        <div className="w-1/2 ml-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Token Index</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" />
                        </div>
                      </div>

                      <div className="flex mb-4">
                        <div className="w-1/2 mr-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Decimal</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" />
                        </div>
                        <div className="w-1/2 ml-1">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Total Supply *</label>
                          <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" />
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="w-full mr-1 relative ">
                          <label className="block text-grey-darker text-sm font-bold mb-2" >Do you need whitepaper?</label>
                          <select name="Algorithm" className="appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-white" id="Algorithm">
                            <option value="volvo">Yes</option>
                            <option value="saab">No</option>
                          </select>
                          <span className='absolute right-1 bottom-3'><BiChevronDown size={20} /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-8">
                    <button className="inline-flex items-center shadow-xl bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white font-bold py-2 px-4 rounded border" type="submit">
                      Next Step <span className=''><BiChevronRight size={24} /></span>
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

          </section>

        </div>


      </div>
    </>
  )
}
