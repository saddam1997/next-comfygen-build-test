
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./pharmacyApp.json";
import Features from "../../components/Features"
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
import Emerging from "../../components/Emerging";

const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});

import AppCardClones from "../../components/AppCardClones"

const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

const PortfolioSection = dynamic(() => import("../../components/PortfolioSection"), {
  ssr: true,
});

const CallToActionSection = dynamic(() => import("../../components/CallToActionSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const TechSection = dynamic(() => import("../../components/TechSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});
import ClientTestimonials from "../../components/TestimonialSection";
import ClientStories from "../../components/ClientStories";
const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});

const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);


export default function ClinicalApp(props: any) {
  let { initialData } = props;


  const jsonLdData = [

    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Online Pharmacy App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen offers top-notch online pharmacy app development services to build secure, scalable, and feature-rich ePharmacy apps. Deliver medicines, manage prescriptions, and grow your pharmacy business with our custom solutions.",
      "url": "https://www.comfygen.com/pharmacy-app-development",
      "mainEntityOfPage": "https://www.comfygen.com/pharmacy-app-development",
      "areaServed": "Global",
      "serviceType": [
        "On-demand Pharmacy App Development",
        "Medicine Delivery App Development",
        "White-label Pharmacy App Solutions",
        "E-pharmacy software development",
        "Online drug store app development",
        "AI Pharmacy App Development",
        "Pharmacy Marketplace Development",
        "B2B Medical Distributors App Development",
        "Telemedicine App Development"

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
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How long does it take to build a pharmacy app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide the best pharmacy mobile app development service with a ready-to-use base system that includes Android & iOS customer apps, an admin dashboard, and a pharmacist panel. If you need only branding changes, the app can be launched quickly within 2–3 weeks. For extra features, custom design, or third-party integrations, the timeline may extend based on your requirements.  For an exact estimate, you can contact our team anytime—we’ll guide you with the best development plan."
        }
      }, {
        "@type": "Question",
        "name": "Are pharmacy apps legally compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build pharmacy apps that follow all required healthcare rules like HIPAA, GDPR, and e-prescription compliance to keep user data safe and secure."
        }

      }, {
        "@type": "Question",
        "name": "What features are necessary for an online pharmacy app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Must-have features for online pharmacy app development include medicine search, prescription upload, secure payments, order tracking, delivery management, user profiles, and push notifications."
        }

      }, {
        "@type": "Question",
        "name": "How much does pharmacy app development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The online pharmacy app development costs usually range from $5,000 to $50,000, depending on features, complexity, design, and platform (Android/iOS)."
        }

      }, {
        "@type": "Question",
        "name": "How can my business benefit from a pharmacy app development service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By using the best pharmacy mobile app development service, your business can reach more customers, increase sales, automate daily operations, reduce manual errors, offer faster medicine delivery, improve customer loyalty, and grow your pharmacy store online with ease."
        }


      }]
    }
  ];


  return (
    <>
      <Head>
        <title>Best Pharmacy App Development Company | ePharmacy App Solutions</title>
        <meta
          name="description"
          content="Best pharmacy app development company building secure ePharmacy & medicine delivery apps with ePrescriptions, payments & real-time tracking."
        />
        <meta name="keywords" content="On-demand Pharmacy App Development,Medicine Delivery App Development,White-label Pharmacy App Solutions, E-pharmacy Software Development, Online Drug Store App Development, AI Pharmacy App Development, Pharmacy Marketplace Development, B2B Medical Distributors App Development, Telemedicine App Development, Pharmacy App Developers, Custom Pharmacy App Development, Medicine Ordering App Solutions, Online Pharmacy Software, Pharma Delivery App Development, Healthcare App Development ">
        </meta>

        <link
          rel="canonical"
          href="https://www.comfygen.com/pharmacy-app-development"
        />


        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Online Pharmacy App Development Company | Comfygen" />
        <meta name="twitter:description" content=" Build a secure and scalable online pharmacy app with Comfygen, a leading pharmacy app development company in India. Get feature-rich ePharmacy solutions for medicine delivery, digital prescriptions, and subscriptions." />
        <meta name="twitter:image" content="https://www.comfygen.com/media/og-images/pharmacy-app-development.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />
        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/media/og-images/pharmacy-app-development.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/media/og-images/pharmacy-app-development.webp" />
        <meta property="og:image:alt" content="Custom Pharmacy App Development" />
        <meta property="og:url" content="https://www.comfygen.com/pharmacy-app-development" />
        <meta property="og:title" content="Online Pharmacy App Development Company" />
        <meta property="og:description" content="Looking for a custom pharmacy app development company? Comfygen offer on-demand pharmacy app development solution with real-time tracking, prescription management, and secure, HIPAA-compliant solutions." />

        {/* Structured Data Scripts */}
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
      <AppCardClones AppClons={JSON_DATA.AppClons} />
      <PortfolioSection Portfoliodata={JSON_DATA.Portfoliodata} />
      <CallToActionSection CallToAction={JSON_DATA.CallToAction} />
      <Features featuresData={JSON_DATA.featuresData} />
      <Emerging emerging={JSON_DATA.Technologies} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <TechSection TechStack={JSON_DATA.TechStack} />
      <Solution techData={JSON_DATA.AIPowered} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
      <ClientStories />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ClientTestimonials
        heading="What Our Clients Say About"
        testimonials={JSON_DATA.customTestimonials}
      />
      <FaqSection faqData={JSON_DATA.Frequently} />
      <BlogSection initialData={initialData} />

    </>
  );
}




export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.URL}/api/v1/posts?tag=pharmacy-app-development&per_page=3`
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
