
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/healthCare.json";


import Navbar from "../../components/Navbar";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const CardGrid = dynamic(() => import("../../components/CardGrid"), {
  ssr: true
});

const Features = dynamic(() => import("../../components/Features"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const Emerging = dynamic(() => import("../../components/Emerging"), {
  ssr: true,
});

const AppCard = dynamic(() => import("../../components/AppCard"), {
  ssr: true,
});

const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

import TechStacks from "../../components/TechStacks";

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const ClientStories = dynamic(
  () => import("../../components/ClientStories"),
  { ssr: true }
);

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});





export default function Mobile(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>Best Healthcare Mobile App Development Company in India | Comfygen</title>
        <meta name="description" content="Comfygen is a leading healthcare mobile app development company in India, delivering secure, scalable telemedicine, EHR, and AI healthcare solutions." />

        <meta name="keywords" content="Healthcare App Development, Medical App Development Company, HIPAA Compliant Healthcare App, Telemedicine App Development, Custom Healthcare App Development, AI Healthcare Solutions, Hospital Management App, HealthTech App Developers, Medical Software Development, Healthcare App Consultation Services, Remote Patient Monitoring App Development, Healthcare CRM App Development, EHR & EMR App Development, Doctor Appointment App Development, Pharmacy App Development, Fitness App Development" />


        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/healthcare-app-development" />

        {/* <!-- Robots → */}
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />

        {/* <!-- Compatibility Meta → */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* <!-- Viewport and Mobile Optimization → */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="My App" />

        {/* <!-- New in iOS6 -->
        <!-- Author and Company Information --> */}

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        {/* <!-- SEO Meta --> */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* <!-- Geo Location Meta --> */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* <!-- Open Graph (OG) Tag --> */}
        <meta name='og:type' content='website' />
        <meta name='og:site_name' content='Comfygen Technologies' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name='fb:page_id' content='110909321596135' />
        <meta name='og:email' content='sales@comfygen.com' />
        <meta name='og:phone_number' content='+91-958-786-7258' />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Healthcare App Development Services | HIPAA-Compliant Medical Apps" />
        <meta name="twitter:description" content="Partner with Comfygen Technologies for cutting-edge healthcare app development. We create HIPAA-compliant, AI-powered, and scalable medical apps tailored for hospitals, doctors, and startups." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/healthcare-app-development/healthcare-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/healthcare-app-development/healthcare-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/healthcare-app-development/healthcare-app-development.webp" />
        <meta property="og:image:alt" content="Healthcare App Development" />
        <meta property="og:url" content="https://www.comfygen.com/healthcare-app-development" />
        <meta property="og:title" content="Revolutionize Healthcare with Comfygen’s Custom Medical App Development Solutions" />
        <meta property="og:description" content="Build next-gen healthcare apps with Comfygen Technologies. From telemedicine to AI-driven diagnostics, we develop secure, scalable, and HIPAA-compliant healthcare applications for your business success." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />

      </Head>

      <div className="min-h-[60px] md:min-h-[70px]">
        <Navbar />
      </div>
      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Trading} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Features featuresData={JSON_DATA.FeaturesData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Solution techData={JSON_DATA.FutureDrivenData} />
      {/* 
      <div className=" py-8">
        <div className="bg-black">
          <section className="items-center py-20  space-y-10  md:flex md:space-x-10 md:space-y-0 mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="w-full space-y-6 text-center md:text-left">
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-1">
                <div className="flex flex-col space-y-2">
                  <Image
                    className="rounded-lg bg-contain"
                    alt="Our Secured and Compliance-Friendly mHealth Applications Meeting Industry Standards"
                    src="https://www.comfygen.com/comfygen-images/healthcare-app-development/Next Gen Healthcare App.webp"
                    width={640}
                    height={360}
                  />
                  <h2 className="py-2 lg:py-4 xl:text-4xl text-3xl font-bold xl:leading-[3rem] text-white">
                    Next-Gen Healthcare App Development Company for Diverse Medical Sectors
                  </h2>
                  <p className="text-base text-white">At <Link href='https://www.comfygen.com' className="underline font-semibold">Comfygen Technologies</Link>, we are a next-gen healthcare app development company delivering custom, secure, and scalable healthcare app solutions for diverse medical sectors. Our expertise covers patient care management, clinical workflows, telemedicine platforms, and AI-powered healthcare applications, enabling hospitals, clinics, startups, and enterprises to enhance care delivery, streamline operations, ensure HIPAA compliance, and drive sustainable digital healthcare transformation.
                  </p>

                </div>
                <div className="grid gap-4 p-8 text-left lg:grid-cols-1 md:grid-cols-1 max-h-[650px] overflow-auto head-scroll">
                  {JSON_DATA.WhyChoosed.map((elem) => {
                    const { num } = elem;
                    return (
                      <div key={num} className="group  pb-6 space-y-4 transition-all duration-200">
                        <div className="flex gap-2">
                          <span><FaDotCircle className="text-white" /></span>
                          <p className="text-white" dangerouslySetInnerHTML={{ __html: elem.decs }}></p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />


    </>
  );
}


export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=healthcare-app-development&per_page=3`
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
