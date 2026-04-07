
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/blockchainconsulting.json";
import { MdOutlineArrowOutward } from "react-icons/md";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import HeroSectionforcls from "../../components/HeroSectionforcls"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});



const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);

import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import ReviewCard from "../../components/ReviewCard";


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  { ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { ssr: true }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { ssr: true }
);

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  { ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { ssr: true }
);
const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { ssr: true }
);

const GuidSectionBlockchain = dynamic(
  () => import("./components/GuidSectionBlockchain"),
  { ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { ssr: true }
);



const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { ssr: true }
);


export default function rummy(props: any) {
  let { initialData } = props;









  return (
    <>
      <Head>
        <title>
          Blockchain Consulting Services India and USA Enterprise blockchain Solutions
        </title>
        <meta
          name="description"
          content="Comfygen offers blockchain consulting services in India and USA to help businesses implement secure, scalable, and innovative blockchain solutions, smart contracts, and decentralized apps."
        />
        <meta name="keywords" content="Blockchain Consultancy Company, Blockchain Consultancy Services, Blockchain Strategy Consulting, Enterprise Blockchain Solutions, Custom Blockchain Development, DeFi Consulting, NFT Project Consulting, Smart Contract Consulting, Ethereum Consulting, Polygon Consulting, Solana Consulting, Hyperledger Consulting, Blockchain Architecture Design, Blockchain Implementation Support"
        />

        <link rel="canonical" href="https://www.comfygen.com/blockchain-consulting-services " />

        <meta name="apple-mobile-web-app-title" content="Blockchain Consulting Services" />
        <meta name="keywords" content="Blockchain Consulting Company, Blockchain Consulting Services, Blockchain Solutions" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/blockchain-consulting-services/og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/blockchain-consulting-services/og.webp" />
        <meta property="og:image:alt" content="Blockchain Consulting Company - Comfygen" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.comfygen.com/blockchain-consulting-services " />
        <meta property="og:title" content="Blockchain Consulting Company | Expert Blockchain Consulting Services" />
        <meta property="og:description" content="Partner with Comfygen, a trusted Blockchain Consulting Company. We help enterprises, startups, and innovators design, develop, and implement blockchain solutions—covering dApps, DeFi, NFTs, smart contracts, and more." />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blockchain Consulting Company | Expert Blockchain Consulting Services" />
        <meta name="twitter:description" content="Comfygen offers blockchain consulting services for enterprises and startups. Build secure, scalable, and future-ready blockchain solutions tailored to your business." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/blockchain-consulting-services/og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
      <div className="">
        <BlockChainHeader />
      </div>

      <div className="overflow-hidden lg:pt-16 pt-16">
        <HeroSectionforcls herosection={JSON_DATA.Herosection} />


        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Blockchain Consulting Services
              </h2>
              <p className="text-base text-center font-normal">
                Comfygen offers end-to-end blockchain consulting services to help businesses innovate, optimize, and scale. Our experienced consultants guide you from strategy to deployment, delivering secure, scalable, and business-aligned blockchain development solutions.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Why Choose Blockchain Consulting Service?"
          description1="Adopting blockchain technology can unlock powerful new opportunities, but without the clear strategy, businesses risk wasting time and resources. Expert blockchain consulting services help businesses identify the best use cases, create a clear roadmap, and implement <a href='https://www.comfygen.com/blockchain-development' class='text-blue-600 font-semibold'>blockchain app development</a> solutions that actually deliver results."
          description2=""
          description3=""
          description4=""
          description5=""
          points={[
            "<b>Right Use Cases</b> – Identify where blockchain adds real value, from DeFi apps to supply chain and enterprise solutions.",
            "<b>Lower Costs & Risks</b> – Avoid costly mistakes with expert blockchain strategy consulting and compliance guidance.",
            "<b>Faster Time-to-Market</b> – Get a clear roadmap for launching crypto wallets, NFT platforms, or blockchain integrations quickly.",
            "<b>Scalable Solutions</b> – Build with smart contract advisory and tokenomics planning for long-term growth."
          ]}
          imageSrc="https://www.comfygen.com/comfygen-images/blockchain-consulting-services/blockchain-consulting.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}


        <CallToAction
          heading="Ready to Transform Your Business with Blockchain?"
          text="Get expert blockchain consulting to unlock secure, scalable, and innovative solutions for your business."
          buttonText="Let's Talk"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <SolutionSec
          heading="Why Blockchain Consulting Service Is a Game Changer for Your Business"
          subheading="Unlock the potential of blockchain with our expert blockchain consulting services. We help businesses implement secure, scalable, and innovative blockchain development solutions that drive efficiency, enhance transparency, and prepare your organization for the digital future."
          techData={JSON_DATA.technologyData}
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Blockchain Consulting Service Portfolio"
            description="Our blockchain consulting services help businesses across industries achieve real results. From custom blockchain solutions to DeFi integrations and tokenization, we deliver innovative projects that drive growth, efficiency, and measurable value."
          />
        </section>


        <IndustriesServe
          heading="Industries We Serve as a Blockchain Consulting Service Expert"
          description="At Comfygen, we provide blockchain consulting across industries—finance, healthcare, supply chain, and real estate—delivering tailored solutions that drive digital transformation, boost efficiency, and unlock new business opportunities."

        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our End-to-End Blockchain Consulting Services Process
              </h2>
              <p className="text-base font-normal mt-2">
                Our blockchain consultation journey follows a structured roadmap—from discovery to deployment—designed to deliver measurable business impact. With a focus on innovation, scalability, and technical precision, we guide you through every stage of blockchain adoption, ensuring a seamless transformation from concept to execution. At Comfygen, success isn’t just about building solutions—it’s about creating long-term value through strategic blockchain integration.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>

        <TechStack
          title="Our Technology Stack"
          description="At Comfygen, we leverage a robust and versatile tech stack to deliver scalable, secure, and cutting-edge solutions. Our expertise spans multiple layers of development, including:"

          customTechData={JSON_DATA.techData}
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />




        <section
          className="bg-gradient-to-r from-[#272868]/95 to-[#5556D1]/95"

        >
          <div className="lg:py-16 py-10 bg-gradient-to-r from-[#272868]/95 to-[#5556D1]/95">
            <div className="space-y-4 bg-gradient-to-r from-[#272868] to-[#5556D1] p-8 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto rounded-xl">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto space-y-4">
                <h2 className=" text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem] ">
                  Different Blockchain Development Platforms Where We Work
                </h2>
                <p className="text-base text-white">
                  Our advisors specialize in a wide range of popular Layer-1 and
                  Layer-2 blockchain platforms, ensuring businesses leverage the
                  right technology for their needs. As leading Blockchain
                  Consulting Firms, we provide in-depth expertise in each
                  platform’s unique features, capabilities, and limitations,
                  offering strategic guidance to help you choose the most
                  efficient and scalable blockchain solution for your specific
                  use case.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.businessData.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 space-y-4  transition-all duration-200 border"
                  >
                    <div className="flex items-center justify-center font-semibold bg-white rounded-md shadow-xl h-24 w-24">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      {item.url ? (
                        <a
                          href={item.url}
                          className="text-xl font-extrabold  transition-all duration-200 hover:underline underline-offset-2 text-[#fff]"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <p className="text-xl font-extrabold  transition-all duration-200 text-[#fff]">
                          {item.title}
                        </p>
                      )}
                    </div>
                    <div
                      className="text-[#fff] transition duration-200 ease-in-out"
                      dangerouslySetInnerHTML={{ __html: item.decs }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <a href="/contact-us">
                  <button className="text-[#fff] hover:bg-[#fff] hover:text-[#5556D1]  border border-[#fff] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                    Get a QUOTE <MdOutlineArrowOutward />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <HireDeveloper
          heading="Hire Blockchain Consultants at Comfygen"
          text="Unlock the potential of blockchain technology with our expert blockchain consultants. At Comfygen, we offer tailored consulting services to help you navigate the complexities of blockchain adoption. Our consultants bring years of industry experience and in-depth knowledge to design custom solutions that align with your business goals. Whether you're looking to implement smart contracts, develop decentralized applications, or integrate blockchain into your existing infrastructure, our team is here to guide you through every step of the process. <a class='font-semibold' href='/hire-blockchain-developer'>Hire blockchain consultants</a>  from Comfygen and transform your business today."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Industry Expertise",
            "Tailored Blockchain Strategies",
            "<a class='font-semibold' href='/smart-contract-development'>Smart Contract Development</a>",
            "End-to-End Blockchain Integration",
            "Comprehensive Support",
            "Scalable Solutions",
          ]}
        />

        <GuidSectionBlockchain />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="Frequently Asked Questions (FAQs)"
        />
  <ReviewCard testimonials={JSON_DATA.ReviewData}/>
        {/* <ClientTestimonials
          testimonials={JSON_DATA.testimonialData}
          heading="What Our Clients Say"
        /> */}

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

