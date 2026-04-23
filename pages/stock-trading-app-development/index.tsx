
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./mobilebankingappdevelopment.json";
import Navbar from "../../components/Navbar";
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

const Features = dynamic(() => import("../../components/Features"), {
  ssr: true,
});

const Emerging = dynamic(() => import("../../components/Emerging"), {
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

const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const ClientStories = dynamic(() => import("../../components/ClientStories"), {
  ssr: true,
});

const TestimonialSection = dynamic(() => import("../../components/TestimonialSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});


export default function ClinicalApp(props: any) {
  let { initialData } = props;



  return (
    <>
      <Head>
        <title>Best Stock Trading App Development Service</title>
        <meta
          name="description"
          content="Comfygen provide stock trading app development service that builds secure, real-time, and AI-driven trading apps. We create stock, crypto, and hybrid platforms tailored for fintech startups and brokerages."
        />

        <meta
          name="keywords"
          content="Custom Stock Trading App Development, Native & Cross-Platform App Development, Stock Trading Web App Development, Trading Bot App Development, AI-Powered Stock Trading App Development, Blockchain-Based Stock Trading App Development, White Label Stock Trading App Development, iOS Stock Trading App Development, Android Stock Trading App Development, Crypto Trading App Development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/stock-trading-app-development"
        />

        {/* Robots */}
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        {/* Compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport and Mobile Optimization */}
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
        <meta name="apple-mobile-web-app-title" content="Stock Trading App" />

        {/* Author Info */}
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />

        {/* SEO Meta */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Geo Meta */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.region" content="US" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.region" content="DE" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Private Limited" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:email" content="sales@comfygen.com" />
        <meta property="og:phone_number" content="+91-958-786-7258" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-og-image.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-og-image.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Stock Trading App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/stock-trading-app-development"
        />
        <meta
          property="og:title"
          content="Best Stock Trading App Development Company"
        />
        <meta
          property="og:description"
          content="Comfygen is a trusted stock trading app development company that builds secure, real-time, and AI-driven trading apps. We create stock, crypto, and hybrid platforms tailored for fintech startups and brokerages."
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Stock Trading App Development Company"
        />
        <meta
          name="twitter:description"
          content="Comfygen is a trusted stock trading app development company that builds secure, real-time, and AI-driven trading apps. We create stock, crypto, and hybrid platforms tailored for fintech startups and brokerages."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-og-image.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Stock Trading App Development",
              operatingSystem: "ANDROID, iOS, Web",
              applicationCategory: "FinanceApplication",
              url: "https://www.comfygen.com/stock-trading-app-development",
              description:
                "Leading stock trading app development company building AI and blockchain-powered custom trading platforms.",
              author: {
                "@type": "Organization",
                name: "Comfygen Private Limited",
              },
              publisher: {
                "@type": "Organization",
                name: "Comfygen Private Limited",
                url: "https://www.comfygen.com",
              },
              image:
                "https://www.comfygen.com/comfygen-images/stock-trading-app-development/stock-trading-app-og-image.webp",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />

      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Features featuresData={JSON_DATA.featuresData} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <Features featuresData={JSON_DATA.featuresData1} />
      <Emerging emerging={JSON_DATA.EmergingData} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />

      <ClientStories />
      <TestimonialSection testimonials={JSON_DATA.customTestimonials} />
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

