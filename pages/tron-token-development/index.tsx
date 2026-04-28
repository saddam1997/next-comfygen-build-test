
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./data.json";
import HeroSectionNewCls from "../../components/HeroSectionNewCls"
import TechStacks from "../../components/TechStacks";
import InformationSection from "../../components/InformationSection";
const Consultancy = dynamic(() => import("../../components/Consultancy"), {
  ssr: true,
});
import ReviewCard from "../../components/ReviewCard";
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"),
  { ssr: true},
);
const WhyChooseSection = dynamic(
  () => import("../../components/WhyChooseSection"),
  { ssr: true },
);
const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});
const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});
const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});
const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"),
  { ssr: true},
);
import AboutComponent from "../../components/Abouts/AboutComponent";
const BlogSection = dynamic(() => import("../../components/BlogSection"), {
  ssr: true,
});
import Solution from "../../components/Solution";

export default function Tron(props:any) {
  let { initialData } = props;

  return (
    <>
      <Head>
        <title>
          Tron Token Development Services | TRC-10 & TRC-20 Token Solutions – Comfygen

        </title>
        <meta
          name="description"
          content="Comfygen offers secure and scalable Tron token development services, including TRC-10 & TRC-20 token creation, smart contract integration, NFT support, and launch-ready solutions for ICOs, STOs, and dApps."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/tron-token-development"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
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
        <meta name="apple-mobile-web-app-title" content="My App" />
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
          name="og:title"
          content="Tron Token Development Company | Custom TRC10 & TRC20 Token Services"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://www.comfygen.com/tron-token-development"
        />
        <meta name="og:image" content="url" />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="Comfygen provides end-to-end Tron token development services. As a top Tron token development company, we deliver secure TRC10 & TRC20 tokens, wallets, and ICO solutions."
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tron Token Development Company | Custom TRC10 & TRC20 Token Services"
        />
        <meta
          name="twitter:description"
          content=" Comfygen provides end-to-end Tron token development services. As a top Tron token development company, we deliver secure TRC10 & TRC20 tokens, wallets, and ICO solutions."
        />
        <meta name="twitter:image" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/image/blockchain-and-mobile-app-development-company.webp" />
        <meta
          property="og:image:alt"
          content="Tron Token Development Company | Custom TRC10 & TRC20 Token Services"
        />


       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA?.jsonLdData) }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection2} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection3} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection4} />
      <Solution techData={JSON_DATA.cardData} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection5} />
      <InformationSection InfoSectionData={JSON_DATA.InfoSection6} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechStacks
        TabData={JSON_DATA.Tabs}
        TechData={JSON_DATA.TechstackData}
        Default={JSON_DATA.Tabs[0]}
      />
      <Consultancy consultancyData={JSON_DATA.ModelsSec} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ReviewCard testimonials={JSON_DATA.ReviewData} />
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
