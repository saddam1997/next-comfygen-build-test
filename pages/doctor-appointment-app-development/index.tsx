
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./doctor-appointment-app-development/doctor.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"


const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const FeaturesNewSection = dynamic(() => import("../../components/FeaturesNewSection"), {
  ssr: true,
});

const Trending = dynamic(() => import("../../components/Trending"), {
  ssr: true,
});

const AppClone = dynamic(() => import("../../components/AppClone"), {
  ssr: true,
});


const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});


const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});


const InformationSection = dynamic(() => import("../../components/InformationSection"), {
  ssr: true,
});

const TechStacks = dynamic(() => import("../../components/TechStacks"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});


const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});


const DeliveryCostTable = dynamic(() => import("./components/DeliveryCostTable"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});

const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
  ssr: true,
});




export default function Ecommerce(props:any) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Doctor Appointment App Development for Hospitals, Clinics & Healthcare Startups
        </title>

        <meta
          name="description"
          content="Build custom doctor appointment apps for hospitals, clinics & startups. Features include telemedicine, AI doctor matching, EHR integration & HIPAA compliance."
        />

        {/* keywords */}
        <meta name="keywords" content="On-demand Doctor Appointment App Development, Telemedicine App Development, Hospital Appointment App Development, Clinic Appointment App Development, Doctor Marketplace App Development, Doctor Consultation App Development, AI-Powered Doctor Appointment App Development, Blockchain Doctor Appointment App Development, IoT Doctor Appointment App Development" />
        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/doctor-appointment-app-development" />
        {/* <!-- Viewport a/nd Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doctor Appointment App Development for Hospitals, Clinics & Healthcare Startups" />
        <meta name="twitter:description" content="On-demand Doctor Appointment App Development, Telemedicine App Development, Hospital Appointment App Development, Clinic Appointment App Development, Doctor Marketplace App Development, Doctor Consultation App Development, AI-Powered Doctor Appointment App Development, Blockchain Doctor Appointment App Development, IoT Doctor Appointment App Development" />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/doctor-appointment-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/doctor-appointment-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/doctor-appointment-app-development13/doctor-appointment-app-development.webp" />
        <meta property="og:image:alt" content="Doctor Appointment App Development" />
        <meta property="og:url" content="https://www.comfygen.com/doctor-appointment-app-development" />
        <meta property="og:title" content="Doctor Appointment App Development for Hospitals, Clinics & Healthcare Startups" />
        <meta property="og:description" content="On-demand Doctor Appointment App Development, Telemedicine App Development, Hospital Appointment App Development, Clinic Appointment App Development, Doctor Marketplace App Development, Doctor Consultation App Development, AI-Powered Doctor Appointment App Development, Blockchain Doctor Appointment App Development, IoT Doctor Appointment App Development" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />

      </Head>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <InformationSection InfoSectionData={JSON_DATA?.Information} />
      <AppClone SliderDATA={JSON_DATA.Industries} />
      <FeaturesNewSection FData={JSON_DATA.FData} />
      <Trending
        trendingData={JSON_DATA.trendingData}
        heading="Top-Rated App Development Company Recognized by Global Platforms"
      />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Consultancy consultancyData={JSON_DATA.Nextechnologies} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <DeliveryCostTable Cost={JSON_DATA.DeliveryCost} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />


    </>
  );
}


export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=doctor-appointment-app-development&per_page=3`
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


