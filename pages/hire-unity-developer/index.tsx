import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/unitydeveloper.json"
import Link from "next/link";
import LazyLoad from "react-lazy-load";
import styles from './styles.module.css'
import Header from "../../components/Newcomponet/layout/Header";


const HeroSectionForm = dynamic(() => import('../../components/Newcomponet/SectionCompoent/HeroSectionForm'), {
  loading: () => <p>Loading...</p>,
})


const AdviceSection = dynamic(() => import('../../components/Newcomponet/SectionCompoent/Advice'), {
  loading: () => <p>Loading...</p>,
})

const FaqSection = dynamic(() => import('../../components/Newcomponet/SectionCompoent/Faq'), {
  loading: () => <p>Loading...</p>,
})
const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);

export default function Unity(props) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>Hire Unity developer| Hire Unity Developers</title>
        <meta name='description' content="Comfygen is a Leading unity agency that helps to create a game with high-end technologies. Comfygen offers a very unique 3D virtual gaming platform on any decentralized network. Contact us today!" />
        <link rel='canonical' href='https://www.comfygen.com/hire-unity-developer' />
        <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
        <meta charSet="UTF-8" />
        <meta property="og:facebook_title" content="Hire Unity developer| unity Services | Unity Services" />
        <meta property="og:facebook_description" content="Our certified metaverse game developers at Comfygen are the best metaverse game app programmers in the industry. unity Services with end-to-end expertise. With Unity, turn ideas into reality!" />
        <meta property="og:twitter_title" content="Metaverse Development Company in the United States" />
        <meta property="og:twitter_description" content="Hire Unity developerin the United States, Comfygen provide you top notch services of metaverse game application development with any game platform services and solutions with bets unity Programmers." />
        <meta property="schema:type" content="Website" />
        <meta name='copyright' content='Comfygen Private Limited' />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name='language' content='En' />
        <meta name='abstract' content='Top rated unity Agency' />
        <meta name='summary' content='Leading unity Firm' />
        <meta name='author' content='Mr. Saddam Husen, sales@comfygen.com' />
        <meta name='reply-to' content='sales@comfygen.com' />
        <meta name='owner' content='A Founder is one of the individuals who helped establish a comprehensive Hire Unity developerin India, the USA, the UK startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement.' />
        <meta name="Best unity Company' content='Empowering businesses with cutting-edge unity Services and solutions and Comfygen's experts unity game development services to drive innovation and sustainable growth in the digital economy." />
        <meta name='category' content='unity Company, Services - Metaverse blockchain dApp game development' />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />
        <meta name='subtitle' content='Best Hire Unity developer- Unity Game Development Solution Firm in India, The USA, UK' />
        <meta name="MobileOptimized" content="320" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='og:latitude' content='26.912434°' />
        <meta name='og:longitude' content='75.787271°' />

      </Head>

      <div className="bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://www.comfygen.com/img/hero-section-bg.webp")` }}>
        <div className=" bg-[#1B1C30CC]">
     
           {/* <Header /> */}

          <div className="md:py-28 py-5">
            <HeroSectionForm
              heading='Hire Unity Developer'
              ptag1="Develop captivating gameplay elements that will awe your users. Being Comfygen, we develop the right product for you. Hire Unity game developers in India and witness your gaming aspiration being carried out perfectly using high knowledge and skill."
              btnName="Discuss Now"
              btnLink='/contact-us'
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: `url("https://www.comfygen.com/media/gif/unity-developer-bg.webp")` }}>
        <div className="bg-black/80">
          <AdviceSection
            heading='Scale Up Your Team with Dedicated Unity Developers'
            ptag="Our team of Unity Developers awaits you to convert your gaming thoughts into reality. We use their robust understanding of the many Unity abilities and their proven ability to create exceptional projects to guarantee that your project gets the required attention. We can adapt to your needs, whether you need a single developer or a whole team."
            imgSrc='https://www.comfygen.com/media/metaverse/create-a-new-generation-of-gaming-experiences-on-the-metaverse-with-experts.webp'
            imgW={550}
            imgH={500}
            altTag='Scale Up Your Team with Dedicated Unity Developers' />


          <section className="overflow-hidden bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://www.comfygen.com/img/unity-service-bg.webp")` }}>
            <div className="bg-[#21242A]/60 py-10">
              <div className="py-4 lg:py-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-4">
                <div className="flex flex-col justify-center text-center ">
                  <h2 className="py-2 text-2xl lg:text-4xl text-[#ffffff] font-bold  leading-tight lg:leading-[3rem]">Our Unity 2D/3D Games Development Services</h2>
                </div>
                <div className="grid gap-10 py-10 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 xl:gap-10">
                  {JSON_DATA.Arena.map((elem) => {
                    const { title, img, decs, num } = elem;
                    return (
                      <div key={num} className=" w-full">
                        <div className={`${styles.weffwfasd} bg-black/70 h-full w-full text-gray-50 rounded-xl p-8 space-y-7`} >
                          <div className="w-28 h-28 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center">
                            <Image src={img} alt="Casino Game Development Company in India" width={100} height={100} />
                          </div>
                          <div>
                            <div className="text-2xl font-extrabold text-white">{title}</div>
                            <p className="leading-snug text-white text-base mt-2 ">{decs}</p>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <Link href="/contact-us" passHref={true}>
                    <button className="block text-base font-medium w-40 mx-auto active text-white  bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] rounded px-6 lg:py-3 py-2 text-center hover:text-white   lg:mt-0  cursor-pointer transition duration-300 relative">
                      Contact Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </section>
          <section >

          </section>

          <section className="bg-[#F3F4F6]" >
            <div className="py-20 w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
              <div className="space-y-4 text-center ">
                <h2 className="text-4xl font-bold text-[#000] ">Powerful Features We Use With Unity 2D/3D Game Development</h2>
              </div>
              <div className="grid gap-16 pt-10 lg:grid-cols-3 md:grid-cols-2 xl:gap-12">
                {JSON_DATA.ProcessNFT.map((elem) => {
                  const { title, img, num, items } = elem;
                  return (
                    <div key={num} className="p-6 bg-[#201325] border rounded-xl group hover:bg-white transition-all duration-200 space-y-2">
                      <div className="flex items-center justify-center w-16 h-16 p-2 text-xl font-semibold bg-white group-hover:bg-[#201325] rounded-full bg-gradient-to-t">
                        <Image width={100} height={100} src={img} alt={title} title={title} className="w-16" />
                      </div>
                      <h3 className="text-xl font-extrabold group-hover:text-[#0E1F51] transition-all duration-200 text-left text-white">{title}</h3>
                      <ul className=" text-white space-y-2 p-0">
                        {items.map((item, index) => (
                          <li className="font-medium text-left text-white group-hover:text-black gap-2 text-base flex  transition duration-200 ease-in-out" key={index}>
                            <span>➤ </span>{item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

          </section>
          <section className=" py-10  w-11/12  space-y-6 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">Embark on Your Unity Development Journey with Us</h2>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 divide-y divide-x">
              {
                JSON_DATA.TecnologisStack.map(nftmarketplace => {
                  return (
                    <div key={nftmarketplace.num} className="p-6 text-center bg-white space-y-2 hover:bg-[#000000]/60 transition-all duration-300 ease-in-out group">
                      <Image src={nftmarketplace.img} alt={nftmarketplace.title} className="mx-auto" width={400} height={200} />
                      <h3 className="bg-clip-text text-transparent bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] font-bold text-2xl group-hover:text-white">{nftmarketplace.title}</h3>
                      <p className="group-hover:text-white text-base"> {nftmarketplace.stack} </p>
                    </div>
                  );
                })
              }
            </div>
          </section>

          <section className="overflow-hidden bg-no-repeat bg-cover py-10 lg:py-20" style={{ backgroundImage: `url("https://www.comfygen.com/img/why-choose-img.webp")` }}  >
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-[#ffffff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">Why Choose Confygen's Unity Developers India?</h2>
            </div>
            <div className="flex flex-col-reverse items-center mx-auto space-y-10 w-11/12 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex-row md:space-x-10 md:space-y-0 py-10">
              <div className="flex justify-center  lg:justify-start pb-10 lg:pb-0 w-full">
                <Image
                  className="rounded-md"
                  title="Our Process for Developing Immersive Metaverse Games"
                  alt="Our Process for Developing Immersive Metaverse Games"
                  src="https://www.comfygen.com/media/metaverse/our-process-for-developing-immersive-metaverse-games.webp"
                  height={450}
                  width={800}

                  unoptimized={true}
                />
              </div>
              <div className="w-full space-y-6 text-left">
                <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
                  {JSON_DATA.ImmersiveMetaverse.map((elem) => {
                    const { title, decs, num } = elem;
                    return (
                      <div key={num} className="p-6 space-y-4 bg-[#BE6314] border shadow-sm shadow-[#16BDFA] hover:border-[#BE5EBC] rounded-xl group  transition-all duration-200">
                        <h3 className="text-2xl font-extrabold  transition-all duration-200 text-left text-white">{title}</h3>
                        <p className="font-medium text-lg text-left text-white  break-all transition duration-200 ease-in-out">{decs}</p>
                      </div>
                    )
                  })
                  }
                </div>
              </div>
            </div>
          </section>
          <section className=" lg:py-20 py-10 bg-[#D4F0FF]">
            <div className="2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 xl:mb-0 xl:w-5/12">
                  <div className="flex xl:py-12">
                    <Image src="https://www.comfygen.com/media/metaverse/do-you-have-more-questions-on-metaverse-game-development-services.webp" width={800} height={521} blurDataURL="URL" placeholder="blur" 
                      unoptimized={true} className="w-full rounded-lg shadow-lg dark:shadow-black/20 xl:ml-[50px] z-[10]" alt=" Do You Have More Questions on Metaverse Game Development Services?" />
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 xl:w-7/12">
                  <div className="flex h-full items-center rounded-lg bg-[#0E1F51]/80 p-6 text-center text-white xl:pl-12 xl:text-left">
                    <div className="xl:pl-12 space-y-2">
                      <h2 className="mb-6 text-3xl font-bold">
                        Schedule a Meeting With Our Dedicated Unity Developers!
                      </h2>
                      <p className="">It is time to take your gaming endeavor to a higher level! At Comfygen, we would be glad to hear from you so we can find you the right Unity developers in India. Our team can help you create a game that keeps your audiences glued and forever remembers you in the gaming world. </p>
                      <div className="pt-8">
                        <Link href="/contact-us" passHref={true}>
                          <button type="button"
                            className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-900 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                            data-te-ripple-init data-te-ripple-color="light">
                            Get in touch now.
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
        <FaqSection
          faqData={JSON_DATA.Frequently}
          title="  Metaverse Game Development "
        />
        <BlogSection initialData={initialData} />

      </div>
    </>
  );
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
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.error("getStaticProps error:", error);

    return {
      props: { initialData: [] },
      revalidate: 3600, // retry in 1 hour
    };
  }
}