import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/webdevelopment.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import IndustryGrid from "../../components/IndustryGrid";
import ClientTestimonials from "../../components/TestimonialSection";
import Script from "next/script";

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

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});


const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);



export default function Webdevelopment(props: any) {
  let { initialData } = props;
  let {
  } = JSON_DATA;


  return (
    <>
      <Head>
        <title>Web Development Company in Jaipur | Responsive & SEO-Optimized Websites</title>
        <meta
          name="description"
          content="Comfygen is an award-winning web development company in Jaipur building responsive, SEO-friendly websites and scalable web apps to boost engagement & conversions."
        />
        <link rel="canonical" href="https://www.comfygen.com/web-development" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Web Development Companies in Jaipur | Expert Services"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading web development company in Jaipur with experience of 7 years offering custom web solutions, E-commerce platforms, and responsive design."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/web-development"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-12-26T08:12:32+00:00"
        />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:image:width" content="1024" />
        <meta name="language" content="en-us" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
      <Navbar />
      <div className="overflow-hidden lg:pt-12 pt-16">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Consultancy consultancyData={JSON_DATA.consultancyData} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <IndustryGrid />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
        <ClientTestimonials
          heading="Client Testimonial"
          testimonials={JSON_DATA.customTestimonials}
        />
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