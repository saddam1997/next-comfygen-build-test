
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/pharmacyApp.json";

import HeroSectionNewCls from "../../components/HeroSectionNewCls"

const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

const InformationSection = dynamic(() => import("../../components/InformationSection"), {
  ssr: true,
});

const Emerging = dynamic(() => import("../../components/Emerging"), {
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


const ReviewCard = dynamic(() => import("../../components/ReviewCard"), {
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
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});


export default function ClinicalApp(props) {
  let { initialData } = props;


  return (
    <>
      <Head>
        <title>
          Best Laboratory App Development Company | Secure & Scalable Lab Apps
        </title>
        <meta
          name="description"
          content="Comfygen is the best laboratory app development company delivering secure, scalable, and efficient lab applications for diagnostic labs, pathology centers, and healthcare organizations with advanced features and intuitive UI/UX."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/laboratory-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Best Laboratory App and Web Development Company In Canada & The USA  | Top-Notch Laboratory App Development Service Provider"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen is dedicated to crafting the best laboratory mobile app development services & solutions and most comprehensive healthcare mobile apps. Our latest innovation integrates online pharmacy services, virtual doctor consultations, lab appointments, and seamless access to lab tests. By addressing the industry-wide challenge of accommodating diverse patient needs, we are revolutionizing the healthcare landscape. Don't hesitate—reach out to us now for a free demo, and let us resolve all your remaining queries instantly!"
        />
        <meta
          property="og:twitter_title"
          content="Online Laboratory App Development Company: Tailored App Development Services / Solutions by Comfygen Private Limited"
        />
        <meta
          property="og:twitter_description"
          content="At Comfygen, we redefine healthcare mobile apps with an innovative integration of online pharmacy, doctor consultations, lab appointments, and tests. Addressing the challenge of accommodating a diverse patient base, our comprehensive solution aims to revolutionize the healthcare industry. Contact us now for a free demo and let us resolve all your remaining queries instantly!"
        />
        <meta
          property="schema:type"
          content="Best Unveiling Excellence: Discover the Top Laboratory Website Development | Laboratory App Development Services"
        />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En" />
        <meta
          name="abstract"
          content="Laboratory Website Development Organization |  Canada & The USA  Best Laboratory App Development Builder | Comfygen"
        />
        <meta
          name="summary"
          content="Comfygen is a reliable and trusted name in the industry, specializing in assisting entrepreneurs in establishing their online laboratory website development Firm. Our seasoned team offers bespoke app development solutions for iOS and Android platforms, guaranteeing smooth and effective laboratory website development experiences tailored to meet your specific business requirements. Elevate your services with Comfygen's innovative and reliable Mobile app development expertise."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Laboratory App Development Company Canada & The USA , firm, industry, startups or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta name="Laboratory App Development Services Company In Canada & The USA ' content='Comfygen is a well-established and trustworthy provider known for empowering entrepreneurs in launching their online Laboratory Website Development businesses. Our experienced team excels in crafting Customized Laboratory Application Development solutions for iOS and Android platforms, ensuring seamless and efficient Healthcare industry experiences tailored to your unique business needs. Elevate your services with Comfygen's cutting-edge and dependable app development expertise." />
        <meta
          name="category"
          content="Leading Laboratory App Development Company In Canada & The USA "
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="No. 1 Laboratory App Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="US" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      <div className="overflow-hidden pt-10 ">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Solution techData={JSON_DATA.LaboratorySolutions} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <Consultancy consultancyData={JSON_DATA.ModelsSec} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <Emerging emerging={JSON_DATA.EmergingData} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ClientStories />
        <ReviewCard testimonials={JSON_DATA.ReviewData} />
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
