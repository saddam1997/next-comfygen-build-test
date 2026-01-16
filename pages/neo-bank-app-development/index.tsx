import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/neobankappdevelopment.json";


import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import Milestones from "../../components/Newcomponet/comman/Milestones";

const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);


const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(() => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CoreFeaturesSection = dynamic(() => import("../../components/Newcomponet/SectionCompoent/CoreFeaturesSection"),
  { loading: loader, ssr: true }
);


const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);



const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
)

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
)

const TrendsSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TrendsSection"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
)

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
)

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
)

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
)
const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


const Process = [
  {
    title: "Discovery & Planning",
    description:
      "We analyze your goals, target users, and compliance needs to create a detailed project roadmap. This phase ensures your NeoBank app is strategically planned for market success.",
  },
  {
    title: "UI/UX Design",
    description:
      "We design intuitive, mobile-first banking interfaces with user-friendly navigation. Our UI/UX enhances customer engagement, ensuring your NeoBank app delivers seamless, secure, and enjoyable digital experiences.",
  },
  {
    title: "Backend Architecture",
    description:
      "Our developers build a secure, high-performance backend to manage data, transactions, and users. This architecture ensures your NeoBank app is scalable, reliable, and ready for real-time operations.",
  },
  {
    title: "API & Fintech Integrations",
    description:
      "We integrate essential APIs including KYC, payments, and banking services. These enable your NeoBank app to deliver core financial functionalities and seamless ecosystem connectivity for users.",
  },
  {
    title: "Compliance & Testing",
    description:
      "We ensure full compliance with PCI DSS, GDPR, and other standards. Rigorous testing guarantees your NeoBank app is secure, stable, and ready for public launch.",
  },
  {
    title: "Launch & Deployment",
    description:
      "After testing, we deploy your NeoBank app to app stores and cloud environments. Our team manages a smooth launch with minimal downtime and complete technical documentation.",
  },
  {
    title: "Maintenance & Continuous Support",
    description:
      "Post-launch, we offer 24/7 support, system monitoring, and regular updates. Our services keep your NeoBank app optimized, secure, and aligned with evolving user and compliance requirements.",
  }
];



const jsonLdData = [


  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Comfygen",
    "url": "https://www.comfygen.com/",
    "logo": "https://www.comfygen.com/svg/Logo1.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "contactOption": "WhatsApp",
      "telephone": "+91 9587867258",
      "areaServed": ["US", "IN", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
      "email": "sales@comfygen.com",
      "availableLanguage": "en, in"
    },
    "sameAs": [
      "https://www.facebook.com/comfygen",
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://youtube.com/@comfygenbusiness",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://in.pinterest.com/comfygenpvt/"
    ]

  },

  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Comfygen",
    "image": "https://www.comfygen.com/svg/Logo1.svg",
    "@id": "Comfygen",
    "url": "https://www.comfygen.com/",
    "telephone": "+91-958-786-7258",
    "priceRange": "$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
        "addressLocality": "Jaipur",
        "postalCode": "302006",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/comfygen",
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://www.youtube.com/@ComfygenBusiness",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://in.pinterest.com/comfygenpvt/"
    ]
  },

  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Build Your NeoBank App – Innovative Digital Banking Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/"
    },
    "description": "Partner with Comfygen for expert NeoBank app development. We offer secure, scalable, and AI-powered banking apps designed to redefine digital finance.",
    "url": "https://www.comfygen.com/neo-bank-app-development",
    "mainEntityOfPage": "https://www.comfygen.com/neo-bank-app-development",
    "areaServed": "Global",
    "serviceType": [
      "NeoBank app development",
      "NeoBank software development",
      "Digital banking app development",
      "Fintech app development",
      "Custom NeoBank app solutions",
      "NeoBank MVP development",
      "NPCI and Bank API Integration",
      "Digital Wallet Integration"

    ],

    "sameAs": [
      "https://www.facebook.com/comfygen",
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://www.youtube.com/@ComfygenBusiness",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://in.pinterest.com/comfygenpvt/"

    ]
  },

  {
    "@context": "http://www.schema.org",
    "@type": "Product",
    "brand": "Comfygen Private Limited",
    "name": "Neo Bank App Development Services",
    "image": "https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-hero.webp",
    "description": "Partner with Comfygen for expert NeoBank app development. We offer secure, scalable, and AI-powered banking apps designed to redefine digital finance.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1928"
    }
  },

  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Comfygen",
    "url": "https://www.comfygen.com/",
    "logo": "https://www.comfygen.com/svg/Logo1.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "contactOption": "WhatsApp",
      "telephone": "+91 9587867258",
      "areaServed": ["US", "IN", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU", "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL", "HK", "IS", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM", "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG", "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"],
      "email": "sales@comfygen.com",

      "availableLanguage": "en, in"
    },
    "sameAs": [
      "https://www.facebook.com/comfygen",
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://youtube.com/@comfygenbusiness",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://in.pinterest.com/comfygenpvt/"
    ]
  },


  {
    "@context": "https://schema.org/",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to develop a NeoBank app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of NeoBank app development depends on features, tech stack, platform, and compliance requirements. A basic MVP may start from $25,000, while a full-featured online banking app can exceed $100,000. We provide customized quotes based on your business goals and functionality."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a NeoBank app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline for NeoBank software development varies by complexity. A simple NeoBank MVP can take 10–14 weeks, while advanced apps with full banking features may require 6+ months. We follow agile development for faster iteration and delivery without compromising on security or compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What compliance standards are followed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We ensure your NeoBank app meets all key financial regulations including PCI DSS, GDPR, and KYC/AML requirements. Our mobile banking app development experts stay updated with global compliance standards to deliver secure, legally compliant mobile banking app development solutions for both startups and financial institutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer post-launch support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer complete post-launch support and maintenance for all our NeoBank app development services. From bug fixes and updates to performance monitoring, our team ensures your app runs smoothly, stays secure, and evolves with user needs and fintech regulations."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party APIs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our team has deep expertise in integrating third-party APIs such as Plaid, Mambu, Yodlee, and Stripe. These integrations enhance your NeoBank software with features like account aggregation, digital payments, and real-time data, all while maintaining security and a seamless user experience."
        }
      }
    ]
  }


];



export default function Ecommerce(props:any) {
  let { initialData } = props;

  let { Hire, myList, WhyChoosed } = JSON_DATA;
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const [show, setshow] = useState(true);
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);

  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };
  return (
    <>
      <Head>
        <title>
          Custom NeoBank App Development Company | Digital Banking
        </title>
        <meta
          name="description"
          content="Comfygen Technologies is a custom NeoBank app development company delivering secure, scalable digital banking solutions for fintech startups and banks."
        />

        <meta name="keywords" content="NeoBank app development, NeoBank software development, Digital banking app development, Fintech app development, Custom NeoBank app solutions, NeoBank MVP development, NPCI and Bank API Integration, Digital Wallet Integration" />

        <link
          rel="canonical"
          href=" https://www.comfygen.com/neo-bank-app-development"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />



        {/* Compatibility */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Mobile Banking App" />

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
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-og-image.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Neo Bank App Development" />
        <meta property="og:url" content="https://www.comfygen.com/neo-bank-app-development" />
        <meta property="og:title" content="Next-Gen NeoBank App Development Services for Digital Banking" />
        <meta property="og:description" content="Comfygen delivers cutting-edge NeoBank app development solutions. Build secure, scalable, and AI-driven apps to revolutionize digital banking experiences." />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next-Gen NeoBank App Development Services for Digital Banking" />
        <meta name="twitter:description" content="Comfygen delivers cutting-edge NeoBank app development solutions. Build secure, scalable, and AI-driven apps to revolutionize digital banking experiences." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-og-image.webp" />
        <meta name="twitter:site" content="@comfygentech" />

        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="UPI App Development" />
        <meta property="og:url" content="https://www.comfygen.com/neo-bank-app-development" />
        <meta property="og:title" content="UPI Payment App Development Company" />
        <meta property="og:description" content="Partner with Comfygen, a top UPI payment app development company delivering secure, NPCI-compliant apps with seamless performance for fintech startups and enterprises." />


        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-og-image.webp" />
        <meta property="og:image:alt" content="NeoBanking App Development" />
        <meta property="og:url" content="https://www.comfygen.com/neo-bank-app-development" />
        <meta property="og:title" content="White Label Neo Banking App Development – Scalable & Secure" />
        <meta property="og:description" content="Comfygen offers white label NeoBank app development services. Launch a secure, scalable, and feature-rich digital banking platform with custom branding and AI-powered solutions." />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px]">
        <HeroSectionForAllPages
          heading="Custom NeoBank App Development Company for Digital Banking"
          ptag="Comfygen Technologies is a trusted custom NeoBank app development company for digital banking, helping fintech startups, banks, and financial institutions build secure, scalable, and user-centric NeoBank solutions. We design and develop modern NeoBank applications with features such as digital onboarding, open banking API integration, real-time payments, and advanced security compliance."
          ptag1='Our experienced fintech developers leverage AI-driven technologies and future-ready architectures to deliver high-performance NeoBank platforms that enhance customer experience, ensure regulatory adherence, and support seamless digital banking transformation.'
          li="Custom NeoBank App Development"
          li1="AI & Open Banking API Integration"
          li2="Real-time Payments & Security Compliance"
          li3="Continuous Support & Updates"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-hero.webp"
        />
        <Milestones />

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold" >We Provide Secure and Scalable NeoBank App Development Services</h2>
              <p className="text-base text-center font-normal">As a premier NeoBank app development company, we specialize in creating secure, scalable, and feature-rich banking solutions that redefine digital finance. Our team leverages advanced technologies such as AI/ML, Blockchain, and open banking APIs to craft apps that ensure seamless user experiences and strong security.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          heading="Your Trusted Partner for Next-Gen NeoBank App Development"
          description1="Launching a NeoBank app offers businesses a future-ready approach to digital banking by eliminating the need for physical branches. It enables real-time transactions, personalized financial insights, automated savings, and seamless user experiences—all accessible through a smartphone. With increasing demand for digital-first financial services, NeoBank apps help attract tech-savvy users and boost customer engagement."
          description2="Comfygen is a leading <a class='text-blue-500 font-semibold' href='/finance-app-development'>Fintech app development company</a> specializing in NeoBanking App Development Services. Leveraging advanced technologies like AI/ML, Blockchain, and robust API integrations, we build secure, scalable, and intuitive NeoBank solutions. Our expert team transforms your fintech vision into a high-performance mobile app tailored to meet modern user expectations and industry compliance."
          imageSrc="https://www.comfygen.com/comfygen-images/neo-bank-app-development/neo-bank-app-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />





        <CoreFeaturesSection
          title="Our NeoBank App Development Solutions Come Packed with Powerful Features"
          subtitle="At Comfygen, we design NeoBank applications that offer more than just digital banking—they deliver a complete, user-centric financial experience. Our NeoBanking app development solutions are tailored to meet modern customer expectations with seamless, secure, and intuitive features."
          features={JSON_DATA.LeadingSoftware} />


        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our UPI Payment Apps Portfolio"
            description="Explore Comfygen’s portfolio of UPI payment apps, designed for startups and enterprises. Our secure, scalable solutions offer real-time transactions, multi-banking, QR payments, and AI-based fraud detection—redefining digital finance with seamless user experiences and next-gen fintech innovation."
          />
        </section>


        <TrendsSection
          heading="Advanced Tech We Integrate in NeoBank Apps"
          subtitle="At Comfygen, we empower every NeoBank app with advanced technologies to deliver secure, smart, and scalable digital banking solutions. Here’s how we future-proof your app:"
          trends={JSON_DATA.FoodAppMaker}
        />


        <section className="bg-[#F5F5F9] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our NeoBanking Development Process</h2>
              <p className="text-base font-normal mt-2">
                Our NeoBank app development process is a strategic, end-to-end approach focused on building secure, scalable, and innovative digital banking solutions tailored to your fintech vision.

              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>



        <TechStack
          title="Tech Stack We Use for NeoBank App Development"
          description="We utilize modern, secure, and scalable technologies to build high-performing NeoBank apps that meet industry standards and exceed user expectations.
"
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire FinTech Developers to Build Your NeoBank Clone App"
          text="Looking to launch a scalable and secure digital bank? Hire expert FinTech developers at Comfygen to build a feature-rich NeoBank clone app tailored to your business model. With advanced tech, industry compliance, and exceptional performance, we help you bring your idea to life with NeoBank MVP and online banking app development."
          text1="Whether you're building a full-fledged NeoBank or a custom MVP, our team ensures fast delivery, bank-grade security, and seamless user experience."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "10+ Years of FinTech Development Expertise",
            "Expertise in AI, Blockchain & Banking APIs",
            "On-Time Delivery, Every Time",
            "Scalable, Compliant & Secure Architecture",
          ]}
        />
        <ClientTestimonials
          heading="What Our Clients Say"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title="ReactJS Development Technology"
        />
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