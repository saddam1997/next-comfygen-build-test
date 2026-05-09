
import Head from "next/head";
import JSON_DATA from "./json/reactnative.json";
import dynamic from "next/dynamic";
import ReviewCard from "../../components/ReviewCard";

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

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

import InformationSection from "../../components/InformationSection"

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
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





export default function Altcoin(props: any) {
  let { initialData } = props;



  const jsonLdData = [


    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to develop a pizza delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost of pizza delivery app development typically ranges from $5,000 to $15,000, depending on features, design complexity, and technology stack. As a trusted pizza delivery app development company, Comfygen offers cost-effective and scalable solutions tailored to startups and enterprises, ensuring your pizza delivery app is feature-rich, secure, and user-friendly.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to build a pizza delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline for pizza delivery app development varies based on custom features and integrations. On average, it may take 4–6 weeks for a full-fledged app. At Comfygen, we ensure quick delivery without compromising quality, using agile methods for faster pizza delivery mobile app development.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build a custom white-label pizza delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We specialize in white-label pizza delivery app development solutions that allow businesses to launch quickly with their own branding. Comfygen’s white-label apps come with core features like GPS tracking, secure payments, loyalty programs, and scalability to match your pizza business needs.",
          },
        },
        {
          "@type": "Question",
          name: "What features should be included in a pizza delivery app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A high-performance pizza delivery app should include real-time GPS tracking, AI-powered recommendations, a secure payment gateway, push notifications, discounts, loyalty programs, and an easy-to-use interface. Comfygen integrates advanced technologies to ensure your pizza delivery mobile app stands out with a smooth and engaging user experience.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide post-launch support & maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, as a trusted pizza delivery app development company, Comfygen provides complete post-launch support, regular updates, and technical maintenance. Our mobile app developers provide bug fixing, feature upgrades, and app monitoring so your pizza delivery business runs smoothly and continues to scale successfully after launch.",
          },
        },
      ],
    },
  ];


  return (
    <>
      <Head>
        <title>
          React Native App Development Services | Mobile App Development | Comfygen
        </title>
        <meta
          name="description"
          content="Get expert React Native app development services to build secure, scalable, and high-performance mobile apps for iOS and Android with seamless cross-platform functionality."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/react-native-development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Top React Native Development Company In India & The USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a leading React Native Development Company in India, widely known for its expertise to build web and mobile app development  for your business. Contact us today."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/react-native-development"
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
        <meta name="language" content="en-us" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/react-native-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="14 minutes" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />


      </Head>
       {/* <Navbar /> */}
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <InformationSection InfoSectionData={JSON_DATA?.InfoSection} />
      <InformationSection InfoSectionData={JSON_DATA?.Migration} />
      <InformationSection InfoSectionData={JSON_DATA?.Costof} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
        <ReviewCard testimonials={JSON_DATA.ReviewData}/>
      <FaqSection faqData={JSON_DATA.Frequently} title="" />
      <BlogSection initialData={initialData} />
      {/* <ConsultingSec
        title="React Native Consulting Services"
        description="Build cross-platform applications with a native look and feel by hiring React Native consultants. We’ll guide you through a detailed process after understanding your business requirements."
        image="https://www.comfygen.com/images/react-native-consulting-services.webp"
        contactNumber="9587867258"
        ctaText="Get Instant Professional Advice"
      /> */}








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

