
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/otccryptoexchangedevelopment.json";
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

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

import AppCardClones from "../../components/AppCardClones"

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});
import ClientTestimonials from "../../components/TestimonialSection";
import ClientStories from "../../components/ClientStories";
const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);



export default function Page(props: any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Best OTC Crypto Exchange Development Company | OTC Trading Platform
        </title>
        <meta
          name="description"
          content="Comfygen is the best OTC crypto exchange development company delivering secure, scalable OTC trading platforms with transparent pricing, and advanced security for enterprises and startups."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/otc-crypto-exchange-development"
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
        <meta name="apple-mobile-web-app-title" content="Comfygen" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
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
        <meta
          name="keywords"
          content="OTC crypto exchange development, OTC trading platform development, custom OTC crypto exchange, OTC crypto trading software, institutional crypto trading platform, OTC crypto exchange software development company"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best OTC Crypto Exchange Development Company | Custom OTC Trading Platform"
        />
        <meta
          name="twitter:description"
          content="Partner with a leading OTC crypto exchange development company to build a tailored OTC trading platform. Benefit from robust security, high liquidity, and regulatory adherence for your crypto OTC business."
        />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/otc-crypto-exchange-development/otc-crypto-exchange-development.webp" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/otc-crypto-exchange-development"
        />
        <meta
          property="og:title"
          content="Best OTC Crypto Exchange Development Company | Custom OTC Trading Platform"
        />
        <meta
          property="og:description"
          content="Partner with a leading OTC crypto exchange development company to build a tailored OTC trading platform. Benefit from robust security, high liquidity, and regulatory adherence for your crypto OTC business."
        />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/otc-crypto-exchange-development/otc-crypto-exchange-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/otc-crypto-exchange-development/otc-crypto-exchange-development.webp" />
        <meta property="og:image:alt" content="OTC Crypto Exchange Development" />




        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygens} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygen} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Solution techData={JSON_DATA.Benefits} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <Solution techData={JSON_DATA.Needs} />
      <ClientTestimonials
        heading="Testimonials from Our Clients"
        testimonials={JSON_DATA.testimonials}
      />
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

