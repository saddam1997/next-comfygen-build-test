
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/applicationConsulting.json";

import Navbar from "../../../components/Navbar";
import HeroSectionforHome from "../../../components/HeroSectionforHome"
const Milestones = dynamic(() => import("../../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../../components/Consultancy"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../../components/CallToActionSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../../components/TechSection"), {
  ssr: true,
});

const LatestTechnology = dynamic(() => import("../../../components/LatestTechnology"), {
  ssr: true,
});

const IndustriesSection = dynamic(() => import("../../../components/IndustriesSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../../components/WhyChooseSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../../components/ClientStories"), {
  ssr: true,
});


const HireSection = dynamic(() => import("../../../components/HireSection"), {
  ssr: true,
});

const TestimonialSection = dynamic(() => import("../../../components/TestimonialSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../../components/BlogSection"),
  { ssr: true }
);







export default function Mobile(props: any) {
  let { initialData } = props;






  return (
    <>
      <Head>
        <title>Application Consulting Services mobile app development</title>
        <meta
          property="og:title"
          content="Mobile App Development & consulting services Company 📲🤝"
        />
        <meta
          name="description"
          content="Comfygen provide best mobile app consulting services with 5+ Experience Experts Centric provides app consulting to mobile app development. Consult with us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/application-consulting-services"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile App Consulting Services & mobile App Development Company | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our Consultancy expert in mobile app development, delivering custom mobile application services, user-friendly app development solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Custom Mobile Application Development & Consulting Services"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best Custom mobile application development and consultancy company in India & the USA that offers iPhone/iOS, Android app development consulting services from startup to enterprise level Business."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content=" Mobile Application Consulting Services And App Development Company in India and USA"
        />
        <meta
          name="summary"
          content="Comfygen Pvt. LTD. is the best custom mobile app development Firm and Top-notch mobile app Consultant service provider in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a mobile application development & App consultancy agency in Bharat, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Mobile Application Consulting and application Development Company"
          content="Comfygen is a top-notch Mobile app development and Consultancy services organization in the USA & India. Get ahead of the competition with the top mobile app development services, company In India. Our expert team can bring your ideas to Business Goal."
        />
        <meta
          name="category"
          content="Mobile App Development & Application Consulting Company in India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Mobile App Consulting Services & Mobile app Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="43.781269°" />
        <meta name="og:longitude" content="-79.230759" />
        <meta
          property="og:type"
          content="Mobile App Development & Consultancy app services Company In India"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="">
        <Navbar />
      </div>

        <HeroSectionforHome herosection={JSON_DATA.Herosection} />
        <Milestones />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <IndustriesSection Industries={JSON_DATA.Industries} />
        <Consultancy consultancyData={JSON_DATA.consultancyData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <LatestTechnology latesttech={JSON_DATA.latesttech} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />

        <ClientStories />
        {/* <TestimonialSection testimonials={JSON_DATA.customTestimonials} /> */}
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
