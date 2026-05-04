
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/iot.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"

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

const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

export default function Altcoin(props: any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>Top Rated IoT Development Company in India | IoT App Development</title>
        <meta
          name="description"
          content="Comfygen is a world-class IoT development company in India offering custom IoT app and software development services. We build secure, scalable, and smart IoT solutions for startups and enterprises."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/iot-development-company"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Best Custom IoT App Development Company in India"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading custom IoT App development company in India, offering cutting-edge IoT app & software development services to build smart, secure, and scalable IoT solutions for enterprise businesses."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/iot-development-company"
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
          content="https://www.comfygen.com/images/next-js-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Top-notch IoT Development Company In India"
        />
        <meta
          property="og:facebook_description"
          content="Comfygen is a leading IoT development company in India and The USA, that offers IoT consultancy services through our expert IoT developers and App consultants. Contact us today for a free consultation."
        />
        <meta
          property="og:twitter_title"
          content="Custom IoT Development Company In India and The USA."
        />
        <meta
          property="og:twitter_description"
          content="Comfygen offer Best Delivering custom IOT Services and solutions to make businesses more smarter and innovative. Find Top Talent Globally & Launch Your Project Today!"
        />
        <meta property="schema:type" content="Website, Article" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="En_US" />
        <meta
          name="abstract"
          content="Internet Of Things (IoT) Development Agency in India | Best team of IoT developers | Comfygen"
        />
        <meta
          name="summary"
          content="Comfygen offer top-notch team of IoT developers for your Business Project, we specializing in Creating and Delivering custom IOT Services, and solutions to make businesses more smarter and innovative. Our expert team is dedicated to enhancing and updating your Internet Of Things (IoT) App Development Services to meet the latest standards."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a comprehensive Custom IoT Development Services & Solutions startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="A Top Custom IoT Development Company in India and the USA"
          content="Are you looking to hire the best leading IoT Development for your project? We provide skilled Mobile App developers and programmers for hire."
        />
        <meta
          name="category"
          content="In the current digital landscape, our team of IoT developers ensures that businesses worldwide, spanning various industries, receive tailored IoT development solutions aligned with their specific development needs. Find dedicated IOT App Developers for IOT App with Expertise in Android iot app development and iOS iot app development! Are you ready to transform your business with the power of the Internet of Things (IoT)? Comfygen is your trusted partner for all your IoT Development Solutions."
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Discover a specialized IoT Development Company offering dedicated IoT App Developers proficient in Android and iOS IoT app development. Are you prepared to revolutionize your business utilizing the transformative potential of the Internet of Things (IoT)? Partner with Comfygen for comprehensive IoT Development Solutions."
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="US ,CA,DE" />
        <meta name="og:latitude" content="43.781269°" />
        <meta name="og:longitude" content="-79.230759" />
        <meta
          property="og:type"
          content="Hire Best IOT App development Company In India | offshore Iot App developer or Programmers"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

      {/* <Header /> */}
      <div className="overflow-hidden ">
        <HeroSectionNewCls Data={JSON_DATA.Herosection} />
        <ServicesComponet servicesData={JSON_DATA.ServicesData} />
        <AboutComponent AboutData={JSON_DATA.AboutSection} />
        <Solution techData={JSON_DATA.Trading} />
        <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
        <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
        <ProcesSection ProcessData={JSON_DATA.ProcessData} />
        <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
        <WhyChooseSection pageData={JSON_DATA.pageData} />
        <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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