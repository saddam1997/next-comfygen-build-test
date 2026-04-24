
import Head from "next/head";
import JSON_DATA from "./json/mobile.json";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});


const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});
import ReviewCard from "../../components/ReviewCard";

const LatestTechnology = dynamic(() => import("../../components/LatestTechnology"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
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

  let { initialData } = props;



 
  return (
    <>
      <Head>
        <title>Mobile App Development Company in Jaipur | Comfygen</title>

        <meta
          name="description"
          content="Comfygen is a leading mobile app development company in Jaipur, delivering secure, scalable, and feature-rich iOS and Android apps with seamless UI/UX and advanced functionality."
        />

        <meta
          name="keywords"
          content="Android App Development, iOS App Development, Cross-Platform App Development, React Native App Development, Flutter App Development, On-Demand Mobile App Development, Hybrid Mobile App Development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/mobile-app-development"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen App" />

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        <meta
          name="description"
          content="Comfygen Technologies is a leading mobile app development company in Jaipur, India. We provide custom mobile app development services and solutions for Android, iOS platforms to startups and enterprise-level companies."
        />
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-og.webp"
        />
        <meta property="og:image:alt" content="Mobile App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/mobile-app-development"
        />
        <meta
          property="og:title"
          content="Best Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="Looking for mobile app developers in Jaipur? Comfygen offers professional mobile app development services for Android, iOS & hybrid apps. Trusted by 100+ clients across India and abroad."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Mobile App Development Company in India | Comfygen Technologies"
        />
        <meta
          name="twitter:description"
          content="Comfygen Technologies is a trusted mobile app development company in India, offering custom Android and iOS app development services tailored for startups, enterprises, and growing businesses across industries."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />







        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />


      </Head>

      <div className="h-full">
         {/* <Navbar /> */}
      </div>

   
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />

        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Solution techData={JSON_DATA.technologyData} />
        <LatestTechnology latesttech={JSON_DATA.latesttech} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <IndustriesSection Industries={JSON_DATA.Industries} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
       <ReviewCard testimonials={JSON_DATA.ReviewData}/>
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
