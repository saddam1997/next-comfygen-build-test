
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/hireBlockchain.json";

const Navbar = dynamic(() => import("../../components/Navbar"), {
  ssr: true,
});

const HeroSectionNewCls = dynamic(() => import("../../components/HeroSectionNewCls"), {
  ssr: true,
});

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});
const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});

const TechStacks = dynamic(() => import("../../components/TechStacks"), {
  ssr: true,
});

const IndustryGrid = dynamic(() => import("../../components/IndustryGrid"), {
  ssr: true,
});


const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
  ssr: true,
});



export default function Mobile(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Hire Blockchain Developers | Secure & Scalable Blockchain App Development
        </title>
        <meta
          property="og:title"
          content="Hire Blockchain Developers in India | Hire blockchain developers from India"
        />
        <meta
          name="description"
          content="Hire expert blockchain developers to build secure, scalable, and high-performance blockchain apps. Get custom DApps, smart contracts, crypto solutions, and enterprise blockchain development."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hire-blockchain-developer"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Elevate Your Blockchain Development Projects with Comfygen Experienced Blockchain Developers - Start Building Now!"
        />
        <meta
          property="og:facebook_description"
          content="Are you looking to hire the best blockchain developers in India for your project? We provide skilled blockchain developers and programmers for hire."
        />
        <meta
          property="og:twitter_title"
          content="The Best Blockchain Developers For Hire In India | Hire Blockchain Developers / Programmers India | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Hire Expert Blockchain Developers with Comfygen: Secure, Scalable Solutions for Your Business. Find Top Talent Globally & Launch Your Project Today!."
        />
        <meta property="schema:type" content="Website" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Hire Blockchain Developers / Programmers India | Comfygen"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="summary"
          content="Empower Your Business with Secure and Scalable Blockchain Applications Designed by Experienced Blockchain Developers."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Blockchain Application Developer Company in India startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Hire Blockchain Developer or Programmer from India"
          content="Are you looking to hire the best blockchain developers in India for your project? We provide skilled blockchain developers and programmers for hire."
        />
        <meta
          name="category"
          content="BLOCKCHAIN DEVELOPERS: Hire blockchain developers skilled in building decentralized app for blockchain development protocols like Ethereum Blockchain app development, Hyperledger Blockchain app development, Polkadot Blockchain app development, Stellar Blockchain app development, Tezos Blockchain app development, Neo Blockchain app development, etc. by Comfygen"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Best hire Blockchain dedicated mobile app developers in India - Best Dedicated Blockchain app developers in Jaipur, India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.faqData) }}
        />

      </Head>

      <div className="min-h-[60px] md:min-h-[70px]">
        <Navbar />
      </div>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <div className="min-h-[700px] sm:min-h-[650px] lg:min-h-[500px]">
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      </div>

      <div className="min-h-[750px] sm:min-h-[650px] lg:min-h-[400px]">
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
      </div>

      <div className="min-h-[400px]">
        <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      </div>

      <div className="min-h-[1000px] sm:min-h-[800px] lg:min-h-[400px]">
        <Solution techData={JSON_DATA.NFTBenefits} />
      </div>

      <div className="min-h-[800px] sm:min-h-[600px] lg:min-h-[500px]">
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      </div>


      <div className="min-h-[1000px] sm:min-h-[800px] lg:min-h-[400px]">
        <Solution techData={JSON_DATA.Business} />
      </div>

      <div className="min-h-[900px] sm:min-h-[700px] lg:min-h-[500px]">
        <WhyChooseSection pageData={JSON_DATA.pageData} />
      </div>

      <div className="min-h-[450px] sm:min-h-[350px] lg:min-h-[250px]">
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      </div>
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />


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

