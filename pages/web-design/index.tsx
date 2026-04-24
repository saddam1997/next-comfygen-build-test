
import Head from "next/head";
import JSON_DATA from "./json/mobile.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import dynamic from "next/dynamic";
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

const Solution = dynamic(() => import("../../components/Solution"), {
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
          Best Web Design Company in Jaipur, India | Best Website Design Services
        </title>

        <meta
          name="description"
          content="Comfygen is a trusted web design company in Jaipur, India, offering responsive, and custom websites design Service for startups, enterprises, and global brands."
        />
        <meta
          name="keywords"
          content="Ecommerce Web Design Service, WordPress Web Design Service, Corporate Website Design, Custom Website Design, UI/UX Design Services, Responsive Web Design Service, Website Redesign Services, Landing Page Design Services, B2B Web Design Services, Web Design Company in Jaipur, India, Custom Website Design Services, SEO-Friendly Websites"
        />
        <link rel="canonical" href="https://www.comfygen.com/web-design" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="author" content="Comfygen Technologies" />
        <meta name="language" content="English" />
        <meta name="distribution" content="Global" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta
          property="og:title"
          content="Best Web Design Company in Jaipur, India | Custom Website Design Services"
        />
        <meta
          property="og:description"
          content="Comfygen is a top-rated web design company in Jaipur, India, offering responsive, SEO-friendly, and custom websites for startups, enterprises, and global brands. 300+ projects delivered."
        />
        <meta property="og:url" content="https://www.comfygen.com/web-design" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/website/website-og.webp"
        />
        <meta property="og:image:alt" content="Web Design Company in Jaipur" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Web Design Company in Jaipur, India | Custom Website Design Services"
        />
        <meta
          name="twitter:description"
          content="Comfygen is a top-rated web design company in Jaipur, India, offering responsive, SEO-friendly, and custom websites for startups, enterprises, and global brands. 300+ projects delivered."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/website/website-og.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />

       
      </Head>
       {/* <Navbar /> */}
      <div className="overflow-hidden lg:pt-0 pt-16">
        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <Solution techData={JSON_DATA.technologyData} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <TechSection TechStack={JSON_DATA.TechStack} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
        <TestimonialSection testimonials={JSON_DATA.customTestimonials} />
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