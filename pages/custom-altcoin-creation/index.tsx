import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ChevronDown } from 'lucide-react';
import { ChevronRight } from 'lucide-react';


const HeroSectiondesign2 = dynamic(() => import('../../components/Newcomponet/SectionCompoent/HeroSectiondesign2'), {
  loading: () => <p>Loading...</p>,
})

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

export default function TermsAndConditions(props: any) {
  let { initialData } = props;
  const [tech, setTech] = useState(0);


  return (
    <>
      <div className="overflow-hidden">
        <Head>
          <title> Custom Altcoin Creation - comfygen.com </title>
          <link rel="canonical" href="https://www.comfygen.com/custom-altcoin-creation" />
        
        </Head>
        {/* hero section */}
        <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }}>
          <div className=" bg-[#1B1C30CC]">

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
                          <span className='absolute right-1 bottom-3'><ChevronDown size={20} /></span>
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
                      Next Step <span className=''><ChevronRight size={24} /></span>
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
                          <span className='absolute right-1 bottom-3'><ChevronDown size={20} /></span>
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
                          <span className='absolute right-1 bottom-3'><ChevronDown size={20} /></span>
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
                          <span className='absolute right-1 bottom-3'><ChevronDown size={20} /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-8">
                    <button className="inline-flex items-center shadow-xl bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white font-bold py-2 px-4 rounded border" type="submit">
                      Next Step <span className=''><ChevronRight size={24} /></span>
                    </button>
                  </div>
                </div>
              </div>
            ) : null}

          </section>

        </div>


        <BlogSection initialData={initialData} />



      </div>
    </>
  )
}
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?per_page=3`
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    return {
      props: { initialData: data },
      revalidate: 3600, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}