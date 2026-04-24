import Head from "next/head";
import JSON_DATA from "./json/whitelabelmobileappdevelopment.json";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import ReviewCard from "../../components/ReviewCard";
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const LatestTechnology = dynamic(() => import("../../components/LatestTechnology"), {
  ssr: true,
});

const IndustriesSection = dynamic(() => import("../../components/IndustriesSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const TestimonialSection = dynamic(() => import("../../components/TestimonialSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);


export default function Mobile(props: any) {
  let { } = JSON_DATA;

  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          White Label Mobile App Development Company | Ready-to-Use App Solutions
        </title>

        <meta
          name="description"
          content="Comfygen best white label mobile app development company offering customisable mobile apps. Launch your branded app faster with pre-built architecture, scalability for startups, agencies."
        />

        <meta
          name="keywords"
          content="Custom White Label App Development, White Label Mobile App Builder, On-Demand White Label App Development, White Label App Development Services for agency, startup, or enterprise, White Label App Solutions"
        />

        <meta
          property="og:title"
          content="White Label Mobile App Development | Rebrandable App Solutions - Comfygen"
        />
        <meta
          property="og:description"
          content="Launch your branded app quickly with Comfygen's white label mobile app development—complete customization, full ownership, and fast go-to-market solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/white-label-mobile-app-development"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/white-label-mobile-app-development-og.webp"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="og:locale" content="en_US" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434" />
        <meta name="og:longitude" content="75.787271" />
        <meta property="fb:page_id" content="110909321596135" />

        <meta
          name="twitter:title"
          content="White Label Mobile App Development Services | Comfygen"
        />
        <meta
          name="twitter:description"
          content="Rebrandable mobile app development services with full customization and expert support. Launch your app fast with Comfygen."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/white-label-mobile-app-development/white-label-mobile-app-development-og.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="canonical"
          href="https://www.comfygen.com/white-label-mobile-app-development"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en-us" />
        <meta name="author" content="Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="owner" content="Comfygen Private Limited" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="abstract"
          content="White Label Mobile App Development Company"
        />
        <meta
          name="summary"
          content="Rebrandable White Label App Development Solutions from Comfygen"
        />
        <meta
          name="category"
          content="White Label Mobile App Development Company"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />

      </Head>

      <div className="">
         {/* <Navbar /> */}
      </div>

      <div className="lg:pt-0 pt-16">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Consultancy consultancyData={JSON_DATA.consultancyData} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <LatestTechnology latesttech={JSON_DATA.latesttech} />
        <IndustriesSection Industries={JSON_DATA.Industries} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
        {/* <TestimonialSection testimonials={JSON_DATA.customTestimonials} /> */}
         <ReviewCard testimonials={JSON_DATA.ReviewData}/>
        <FaqSection faqData={JSON_DATA.Frequently} />

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
