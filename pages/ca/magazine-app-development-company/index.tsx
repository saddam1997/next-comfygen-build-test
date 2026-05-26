import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/magazine.json";

import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
const ServicesComponet = dynamic(() => import("../../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});
const AboutComponent = dynamic(() => import("../../../components/Abouts/AboutComponent"), {
  ssr: true,
});
import Solution from "../../../components/Solution";

const Consultancy = dynamic(() => import("../../../components/Consultancy"),
  { ssr: true }
);

const CallToActionSection = dynamic(() => import("../../../components/CallToActionSection"), {
  ssr: true,
});


import Features from "../../../components/Features";

import ReviewCard from "../../../components/ReviewCard";

const ProcesSection = dynamic(() => import("../../../components/ProcesSection"), {
  ssr: true,
});
import TechStacks from "../../../components/TechStacks";
const WhyChooseSection = dynamic(() => import("../../../components/WhyChooseSection"), {
  ssr: true,
});
const HireSection = dynamic(() => import("../../../components/HireSection"), {
  ssr: true,
});
const FaqSection = dynamic(() => import("../../../components/FaqSection"), {
  ssr: true,
});
const BlogSection = dynamic(() => import("../../../components/BlogSection"),
  { ssr: true }
);


export default function News(props: any) {
  let { initialData } = props;

  const faqSchema = {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of magazine apps do you develop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in developing various types of magazine apps, including digital replicas of print editions, interactive multimedia apps, subscription-based apps, and apps that deliver personalized content.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies do you use for magazine app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We utilize technologies like React.js for front-end development, Node.js for backend, MongoDB for database management, AWS for hosting, and integration of APIs for seamless functionality.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure the security of magazine apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement SSL/TLS encryption for data transmission and secure authentication methods, and we adhere to best practices in data protection and access control.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide customization options for magazine apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer customizable solutions tailored to your specific needs and branding requirements. From UI/UX design to feature integration, we ensure the app reflects your unique identity and goals.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle content management in magazine apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our on-demand magazine app development provides robust content management systems (CMS) that enable easy publishing, editing, and organizing of articles, images, and multimedia content. This ensures seamless updates and content delivery.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate multimedia content like videos and animations into magazine apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in integrating multimedia content to enhance user engagement. Our apps support videos, animations, audio, and interactive graphics to deliver rich, immersive experiences.",
        },
      },
      {
        "@type": "Question",
        name: "What is your approach to user experience (UX) design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UX design is central to our development process. We focus on intuitive navigation, engaging interfaces, and personalized content delivery to enhance user satisfaction and retention.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer post-launch support and maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide comprehensive post-launch support and maintenance services. This includes monitoring app performance, resolving issues promptly, and implementing updates to ensure continuous optimal functionality.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure the scalability of magazine apps as our user base grows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use cloud-based solutions like AWS to accommodate growing user demands, ensuring the app performs seamlessly even with increasing traffic and content.",
        },
      },
      {
        "@type": "Question",
        name: "Can you provide examples of successful magazine apps you've developed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Magazine App Development agency has developed successful magazine apps across various industries. Examples include apps for education, journalism, media, and the healthcare industry.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Comfygen is the Best Magazine App Development Company in India & USA</title>
        <meta
          name="description"
          content="Comfygen is the best magazine app development company, offering custom digital magazine app development service with interactive features, offline reading, and monetization tools. Build scalable magazine apps to reach global readers today."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/magazine-app-development-company"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="News App and Web App Development Company in India & USA | Comfygen"
        />
        <meta
          property="og:description"
          content="Comfygen is a top-class news & Magzine app development company In India & The USA, offers tailored app services for personalized news, alerts, and engaging features. With expertise in app launches, we can create your global news feed app."
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ca/magazine-app-development-company"
        />
        <meta property="og:site_name" content="Comfygen" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/"
        />
        <meta
          property="article:modified_time"
          content="2022-10-13T10:13:21+00:00"
        />
        <meta
          property="og:image"
          content="https://www.comfygen.com/images/illuslator/banner_vector.webp?size=1024"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Customized} />
      <Consultancy consultancyData={JSON_DATA.consultancyData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <Features featuresData={JSON_DATA.featuresData} />
      <TechStacks TabData={JSON_DATA.Tabs} TechData={JSON_DATA.TechstackData} Default={JSON_DATA.Tabs[0]} />
      <Consultancy consultancyData={JSON_DATA.Whycomfygen} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.NFTProcessData} />
      <Solution techData={JSON_DATA.Chartacterstics} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper1} />
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
