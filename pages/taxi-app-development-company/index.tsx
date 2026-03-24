
import Head from "next/head";
import JSON_DATA from "./json/taxi.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import dynamic from "next/dynamic";
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import AppcardSlider from "../../components/AppcardSlider"

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});
import Features from "../../components/Features"

import ComparisonSection from "../../components/ComparisonSection"

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});


const CardFeatures = dynamic(
  () => import("../../components/CardFeatures"),
  { ssr: true }
);

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
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


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);


export default function Ecommerce(props) {
  let { initialData } = props;

  



  const jsonLdData = [

    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.comfygen.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mobile App Development",
          item: "https://www.comfygen.com/mobile-app-development",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Taxi App Development Company",
          item: "https://www.comfygen.com/taxi-app-development-company",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I customize my Taxi Booking Application Development Services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Comfygen offers fully customizable cab booking app development services. Tailor features, design, and functionalities like branding, real-time tracking, and payment gateways to meet your business needs seamlessly.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to build a taxi booking app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Taxi booking app development costs range from $5,000 for a simple app up to $40,000 for complex solutions, depending on the platform, features, app complexity, custom designs, and client needs.",
          },
        },
        {
          "@type": "Question",
          name: "Will Comfygen sign an NDA for the project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we sign a Non-Disclosure Agreement (NDA) for our clients; so that they feel satisfied and have trust in us for their projects. We ensure the security, confidentiality, and privacy of the project. This NDA is a security, which cannot be breached by our company or experts at all.",
          },
        },
        {
          "@type": "Question",
          name: "Will Comfygen deploy the Uber-like app development solution?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Comfygen can deploy Uber-like app development solutions customized to your specific requirements. They specialize in creating feature-rich, scalable, and customizable taxi-booking apps.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to develop a taxi booking app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The development timeline varies based on the complexity and features of the app. On average, it can take 2-6 months. We provide detailed project timelines after understanding your needs.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms do you develop taxi apps for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We develop taxi apps for Android, iOS, and cross-platform solutions, ensuring compatibility across devices.",
          },
        },
        {
          "@type": "Question",
          name: "Is the taxi app scalable for future growth?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we build scalable taxi apps that can handle increasing user demands and allow easy integration of new features as your business grows.",
          },
        },
        {
          "@type": "Question",
          name: "Can the app support multiple languages and currencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we can integrate multiple languages and currency support to make your app accessible to a global audience.",
          },
        },
        {
          "@type": "Question",
          name: "Can the app be customized for specific business needs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our taxi app solutions are fully customizable to meet your specific requirements, including unique features, branding, and functionality.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Trusted Taxi App Development Company | Taxi App Development Experts</title>
        <meta
          name="description"
          content="Trusted taxi app development company to create custom ride-hailing apps with GPS tracking, in-app payments, driver management, and scalable architecture for your business."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/taxi-app-development-company"
        />
        <meta
          name="keywords"
          content="White-Label Taxi App Development, Custom Taxi Booking App Development, Cab Booking App Development, Uber Ride Booking App Development, Car Rental App Development"
        />
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        {/* <!-- ================= OPEN GRAPH ================= --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Taxi App Development Company | Comfygen" />
        <meta property="og:description" content="Build scalable taxi booking and ride-hailing apps with Comfygen. We develop secure, feature-rich, and user-friendly taxi solutions for startups and enterprises." />
        <meta property="og:url" content="https://www.comfygen.com/taxi-app-development-company" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/taxi-app-development-company.webp"></meta>


        {/* <!-- ================= TWITT/ER CARD ================= --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taxi App Development Company | Comfygen" />
        <meta name="twitter:description" content="Launch scalable taxi booking and ride-hailing apps with Comfygen. Secure, feature-rich, and enterprise-ready taxi app development solutions." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/taxi-app-development-company/taxi-app-development-company.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>
      <Navbar />
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <AppcardSlider SliderDATA={JSON_DATA.Industries} />
      <Features featuresData={JSON_DATA.featuresData} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CardFeatures featuresData={JSON_DATA.featuresCardData} />
      <ComparisonSection data={JSON_DATA.BookingComparison} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
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

