import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/applicationConsulting.json";

import HeroSectionNewCls from "../../../components/HeroSectionNewCls"
const ServicesComponet = dynamic(() => import("../../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});
const AboutComponent = dynamic(() => import("../../../components/Abouts/AboutComponent"), {
  ssr: true,
});
import Solution from "../../../components/Solution";

const CallToActionSection = dynamic(() => import("../../../components/CallToActionSection"), {
  ssr: true,
});

import Emerging from "../../../components/Emerging";

import Features from "../../../components/Features";

import ReviewCard from "../../../components/ReviewCard";
const PortfolioSection = dynamic(() => import("../../../components/PortfolioSection"), {
  ssr: true,
});
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


export default function Mobile(props) {
  let { initialData } = props;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an educational app and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An educational app is a digital platform designed to deliver learning content through videos, quizzes, assessments, and interactive modules. These apps support E-Learning App Development, mobile learning, and skill-based education for students, educators, and businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What types of educational apps can be developed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Educational apps include Learning Management Systems (LMS), language learning apps, kids’ educational apps, exam preparation apps, online course marketplace platforms, and advanced AI-based or AR/VR educational apps, depending on learning objectives."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to develop an educational app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of Educational Mobile App Development depends on features, platforms, UI complexity, and technology used. Basic apps cost less, while advanced AI-based educational apps, LMS platforms, or AR/VR learning solutions require higher investment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer custom e-learning and LMS app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide custom E-Learning App Development and Learning Management System (LMS) Development tailored to your business needs, including course management, assessments, analytics, user roles, and secure cloud integration."
        }
      },
      {
        "@type": "Question",
        "name": "Does Comfygen develop AI-based educational applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in AI-Based Educational App Development, integrating features like personalized learning paths, AI chatbots, smart recommendations, predictive analytics, and adaptive testing to enhance learning outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries can benefit from educational app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Educational app development benefits schools, universities, EdTech startups, coaching institutes, corporate training providers, and skill-based learning platforms by enabling scalable, interactive, and accessible digital education solutions."
        }
      }
    ]
  };

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Advanced Education App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen Technologies delivers scalable and innovative education app development services, including e-learning platforms, LMS solutions, AI-powered educational apps, and mobile learning applications for global clients.",
      "url": "https://www.comfygen.com/ca/education-app-development-company",
      "mainEntityOfPage": "https://www.comfygen.com/ca/education-app-development-company",
      "areaServed": "Global",
      "serviceType": [
        "Education App Development",
        "Educational Mobile App Development",
        "E-Learning App Development",
        "Learning Management System (LMS) Development",
        "AI-Based Educational App Development",
        "Online Course Marketplace Development",
        "Language Learning App Development",
        "Kids’ Educational App Development",
        "Exam Preparation App Development",
        "AR/VR Educational App Development",
        "Educational App Testing Services",
        "EdTech App Development Company",
        "Custom Education Software Development",
        "School Management App Development",
        "Online Learning Platform Development"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.comfygen.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Education App Development",
          "item": "https://www.comfygen.com/ca/education-app-development-company"
        }
      ]
    },

  ]


  return (
    <>
      <Head>
        <title>
          Education App Development Company in Canada | eLearning App Services
        </title>
        <meta
          name="description"
          content="Comfygen is a leading education app development company in Canada offering custom eLearning app development services for universities and EdTech startups. Build scalable learning apps."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/education-app-development-company"
        />
        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
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
          name="keywords"
          content="E-Learning App Development, Learning Management System (LMS) Development, AI-Based Educational App Development, Online Course Marketplace Development, Educational App Testing Services, Educational Mobile App Development, Language Learning App Development, Kids' Educational App Development, Exam Preparation App Development, AR/VR Educational App Development"
        />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="On-Demand Educational App Development Company in Canada"
        />
        <meta
          name="twitter:description"
          content=" Comfygen is a leading Educational app development company offering custom education app development services in Canada, USA, UK, and globally. Hire expert developers now!"
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/media/og-images/education-app-development-og.webp"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="https://www.comfygen.com/media/og-images/education-app-development-og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/media/og-images/education-app-development-og.webp" />
        <meta property="og:image:alt" content="education app development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ca/education-app-development-company"
        />
        <meta property="og:title" content="Education App Development Company" />
        <meta
          property="og:description"
          content="Comfygen is a top Educational app development company offering tailored Education app development services across Canada, USA, UK, and worldwide. Hire skilled developers today for custom, feature-rich EdTech solutions."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>

      <HeroSectionNewCls Data={JSON_DATA.Herosection} />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.Customized} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.featuresData} />
      <Emerging emerging={JSON_DATA.EmergingData} />
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
      `${process.env.URL}/api/v1/posts?tag=education-app-development&per_page=3`
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
