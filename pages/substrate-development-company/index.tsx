
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/substrate.json";
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
const Solution = dynamic(() => import("../../components/Solution"), {
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


const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
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


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);

import IndustryGrid from "../../components/IndustryGrid";
import ReviewCard from "../../components/ReviewCard";
export default function Ecommerce(props: any) {
  let { initialData } = props;




  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Substrate blockchain development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Substrate blockchain development involves building custom blockchain solutions using the Substrate framework, which provides flexibility, scalability, and interoperability. It allows developers to create tailored blockchain applications with ease and speed.",
        },
      },
      {
        "@type": "Question",
        name: "Why should I choose a Substrate blockchain development company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Substrate blockchain development company offers expertise in building highly efficient, secure, and scalable blockchain networks. With their experience, you can ensure the development of a robust solution that meets your specific business needs.",
        },
      },
      {
        "@type": "Question",
        name: "What services does a Substrate development company provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Substrate development company typically offers services like custom blockchain development, smart contract development, decentralized application (DApp) development, network setup, and blockchain consulting on blockchain architecture and integration.",
        },
      },
      {
        "@type": "Question",
        name: "How does Substrate compare to other blockchain frameworks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Substrate stands out for its modular design, ease of customization, and built-in interoperability. Unlike other blockchain frameworks, it allows developers to create highly personalized blockchains without starting from scratch.",
        },
      },
      {
        "@type": "Question",
        name: "How can Substrate blockchain development benefit my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Substrate enables businesses to build tailor-made blockchain solutions that enhance transparency, security, scalability, and interoperability. This can lead to more efficient operations, reduced costs, and the ability to innovate in areas like supply chain, finance, and healthcare.",
        },
      },
    ],
  };



  return (
    <>
      <Head>
        <title>
          Substrate Blockchain Development Company | Custom Polkadot Solutions
        </title>
        <meta
          property="og:title"
          content="Build scalable and secure blockchain networks with our Substrate blockchain development services. We create custom Polkadot-based solutions, parachains, and decentralized applications."
        />
        <meta
          name="description"
          content="Substrate blockchain development services for custom blockchains, dApps, Polkadot integration, and Rust-based substrate blockchain solutions."
        />
        <meta
          property="og:description"
          content="Partner with a top Substrate Blockchain Development Company offering custom, result-driven Substrate development services tailored to meet the unique needs of your business."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/substrate-development-company"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Substrate Development Services | HIRE SUBSTRATE DEVELOPERS | Substrate blockchain framework | Substrate Blockchain Technology"
        />
        <meta
          property="og:facebook_description"
          content="Choose Substrate blockchain development company to establish a customized and self-sustaining Substrate SDK framework. We stand as a prominent Substrate blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta
          property="og:twitter_title"
          content="Brilliant Substrate Development Services | HIRE SUBSTRATE DEVELOPERS | Substrate blockchain framework | Substrate Blockchain Technology | Substrate Blockchain development solutions by Worldwide"
        />
        <meta
          property="og:twitter_description"
          content="Hire our Substrate developers who are well-versed to establish a customized and self-sustaining Substrate SDK framework. We stand as a prominent Substrate blockchain development company in USA catering to a wide array of businesses.Talk to our best Polkadot Developer"
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Substrate Blockchain Development Industry | Substrate Development Services"
        />
        <meta
          name="summary"
          content="Choose Substrate blockchain development to establish a customized and self-sustaining Substrate SDK framework. We stand as a prominent Substrate Development Company in India & the USA catering to a wide array of businesses."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a Substrate Development Company in India, USA, startup, or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Substrate Development Company in India, USA"
          content="Comfygen is a leading White label Substrate Development Company in the USA, UK, and India."
        />
        <meta
          name="category"
          content="Substrate Blockchain Development Organisation"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Substrate Blockchain Development Firm in India"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Substrate Blockchain Development Services Provider"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/substrate-development-company"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:09:06+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/ogimages/blockchain-development-company.png?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <Solution techData={JSON_DATA.Businesses} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <IndustryGrid />
      <Solution techData={JSON_DATA.Engagement} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientStories />
        <ReviewCard testimonials={JSON_DATA.ReviewData}/>
      <FaqSection faqData={JSON_DATA.Frequently} title="" />
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

