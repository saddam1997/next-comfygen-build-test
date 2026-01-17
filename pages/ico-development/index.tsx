import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/icodevelopment.json";
import { useState } from "react";
// import BlockchainNav from "../Newcomponet/layout/blockchain-navbar";
import HeroSectionForAllPages from "../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";
import BlockChainHeader from "../../components/Newcomponet/layout/BlockChainHeader";
import Milestones from "../../components/Newcomponet/comman/Milestones";


const loader = () => (
  <div className="h-96 bg-gray-100 animate-pulse" />
);

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const CardItem = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CardItem"),
  { loading: loader, ssr: true }
);

const ModelsSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ModelsSec"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const ClientTestimonials = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);


const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import CardItem from "../Newcomponet/SectionCompoent/CardItem";
// import ModelsSec from "../Newcomponet/SectionCompoent/ModelsSec";
// import ConsultancyApproach from "../Newcomponet/SectionCompoent/ConsultancyApproach";
// import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
// import TechStack from "../Newcomponet/SectionCompoent/TechStack";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import ClientTestimonials from "../Newcomponet/SectionCompoent/ClientTestimonials";
// import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
// import Faq from "../Newcomponet/SectionCompoent/Faq";




const defaultTestimonials = [
  {
    text: "Comfygen’s expertise in ICO development was invaluable to our project. They guided us through every step, from token creation to security integration. Their professional approach made the entire process seamless, and we couldn’t be happier with the outcome!",
    name: "John Patel",
    title: "India",
    rating: "★★★★★ (5 Ratings)"
  },
  {
    text: "Working with Comfygen was a fantastic experience. Their team provided expert insights on smart contracts and helped us with everything from blockchain selection to regulatory compliance. Thanks to their efforts, our ICO launch was a major success!",
    name: "Lena Johnson",
    title: "USA",
    rating: "★★★★★ (5 Ratings)"
  },
  {
    text: "Comfygen’s ICO development team took our project to the next level. They worked closely with us to ensure everything was perfect, from tokenomics to post-launch support. We were impressed with their professionalism and attention to detail.",
    name: "Andrés Sánchez",
    title: "Spain",
    rating: "★★★★★ (5 Ratings)"
  },
  {
    text: "We trusted Comfygen with our ICO development, and they delivered beyond expectations. The platform they developed was secure, scalable, and easy to use. They were transparent throughout the process, making it a great partnership.",
    name: "Yasmin Wong",
    title: "Singapore",
    rating: "★★★★★ (5 Ratings)"
  }
];


const Processs = [
  {
    title: "Initial Consultation & Planning",
    description:
      "We begin by understanding your project goals, target market, and technical requirements to create a strategic plan for your ICO."
  },
  {
    title: "Blockchain Selection & Token Design",
    description:
      "Based on your project’s needs, we choose the most suitable blockchain platform and design a custom tokenomics model that drives long-term value."
  },
  {
    title: "Smart Contract Development & Security Audit",
    description:
      "Our team develops and audits secure smart contracts to ensure they meet all security standards and function seamlessly."
  },
  {
    title: "ICO Platform Development",
    description:
      "We build a user-friendly, scalable ICO platform that can handle large-scale token sales and investor interactions."
  },
  {
    title: "Regulatory Compliance & KYC/AML Integration",
    description:
      "We integrate KYC/AML protocols to ensure your ICO is compliant with legal and regulatory standards globally."
  },
  {
    title: "ICO Marketing & Community Engagement",
    description:
      "We support you with marketing strategies to promote your ICO, build a community, and engage investors before, during, and after the token sale."
  },
  {
    title: "Token Distribution & Post-ICO Support",
    description:
      "After the ICO, we assist with token distribution and provide ongoing post-ICO support to ensure long-term success."
  }
];



const jsonLdData = [
  {
    "@context": "http://www.schema.org",
    "@type": "Product",
    "brand": "Comfygen Private Limited",
    "Name": "ICO development Services",
    "image": "Hero section image",
    "description": "Launch your ICO with Comfygen, a leading ICO development company. We offer comprehensive ICO development services, including token creation, smart contracts, blockchain integration, and post-ICO support. Secure, scalable, and compliant solutions.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1748"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "PostalAddress",
    "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
    "addressLocality": "Jaipur, Rajasthan",
    "addressRegion": "India",
    "postalCode": "302006",
    "telephone": "+91-958-786-7258"
  },
  {
    "@context": "https://schema.org",
    "@type": "PostalAddress",
    "streetAddress": "40 Tuxedo Ct, Toronto, ON",
    "addressLocality": "Toronto",
    "addressRegion": "Canada",
    "postalCode": "M1G3S7",
    "telephone": "+1 579-977-4475"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ICO Development Company",
    "provider": {
      "@type": "Organization",
      "name": "Comfygen",
      "url": "https://www.comfygen.com/"
    },
    "description": "Launch your ICO with Comfygen, a leading ICO development company. We offer comprehensive ICO development services, including token creation, smart contracts, blockchain integration, and post-ICO support. Secure, scalable, and compliant solutions.",
    "url": "https://www.comfygen.com/ico-development",
    "mainEntityOfPage": "https://www.comfygen.com/ico-development",
    "areaServed": "Global",
    "serviceType": [
      "ico-development",
      "ICO development services",
      "ICO development",
      "ICO software development company",
      "ICO development companies",
    ],
    "sameAs": [
      "https://www.facebook.com/comfygen",
      "https://www.linkedin.com/company/comfygen-private-limited"
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
    "@type": "Organization",
    "name": "Comfygen",
    "url": "https://www.comfygen.com/",
    "logo": "https://www.comfygen.com/svg/Logo1.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "contactOption": "Voice",
      "telephone": "+91 9587867258",
      "areaServed": [
        "IN", "US", "CA", "GB", "AD", "AU", "AT", "BS", "BH", "IO", "KM", "CU",
        "AR", "CW", "CY", "DK", "DM", "EG", "FK", "FI", "FR", "DE", "GR", "GL",
        "HK", "IS", "ID", "IT", "JP", "JE", "JO", "KW", "KG", "KR", "MX", "FM",
        "NZ", "NI", "OM", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "SA", "SG",
        "SE", "SZ", "CH", "TH", "TR", "TN", "UA", "UM", "AE", "039", "155", "154", "151", "150"
      ],
      "availableLanguage": ["en", "in"]
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
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an Initial Coin Offering (ICO)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An ICO is a fundraising method where a project sells its own cryptocurrency or tokens in exchange for capital. It’s typically used to raise funds for new cryptocurrency or blockchain ventures."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose Comfygen for ICO development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comfygen offers end-to-end ICO development services, from token creation to post-ICO support. With a strong focus on security, scalability, and compliance, we ensure that your ICO is successful and aligns with global standards."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop an ICO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline for developing an ICO can vary based on the complexity of the project. Generally, it takes anywhere from 4 to 6 months to launch a fully functional ICO, including token creation, smart contract development, and platform integration."
        }
      },
      {
        "@type": "Question",
        "name": "What blockchain platforms do you use for ICO development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in multiple blockchain platforms including Ethereum, Binance Smart Chain, Polkadot, and Solana, ensuring that your ICO benefits from the best blockchain for your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "How does Comfygen ensure the security of my ICO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We employ the latest security protocols, including multi-signature wallets, smart contract audits, and KYC/AML integration to protect your ICO from potential security breaches and fraud."
        }
      },
      {
        "@type": "Question",
        "name": "What is tokenomics, and why is it important for my ICO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tokenomics refers to the economic model behind your token, including its distribution, value, and utility. A well-designed tokenomics strategy is essential for attracting investors and ensuring long-term project success."
        }
      },
      {
        "@type": "Question",
        "name": "Can Comfygen help with ICO marketing and promotion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide comprehensive ICO marketing services, including PR campaigns, social media strategies, influencer marketing, and targeted advertising to ensure your ICO gets the attention it deserves."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of a smart contract in ICO development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smart contracts automate the ICO process by ensuring transparent, secure, and efficient transactions. They’re essential for handling token sales, investor funds, and distribution without the need for intermediaries."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure my ICO complies with regulations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comfygen follows global ICO regulations, including KYC/AML compliance, ensuring that your ICO meets the legal requirements of different regions, reducing the risk of legal challenges post-launch."
        }
      },
      {
        "@type": "Question",
        "name": "What support do you offer after the ICO launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive post-ICO support, including token distribution, wallet integration, security monitoring, and ongoing platform updates to ensure that your project continues to thrive long after the ICO ends."
        }
      }
    ]
  }
];



export default function Ecommerce(props:any) {
  let { initialData } = props;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  const faqSchema = {



  };

  return (
    <>
      <Head>
        <title>ICO Development Company | Secure & Scalable ICO Solutions</title>
        <meta
          name="description"
          content="Comfygen is an ICO development company providing secure, end-to-end ICO solutions including token creation, smart contracts, and dashboards."
        />
        <link rel="canonical" href="https://www.comfygen.com/ico-development" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Compatibility */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen" />

        {/* Author */}
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />

        {/* SEO */}
        <meta name="googlebot" content="all" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="language" content="English" />

        {/* Geo Tags */}
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
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/ico-development/ico-development-og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/ico-development/ico-development-og.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ICO Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/ico-development" />
        <meta property="og:title" content="Custom ICO Development Company | End-to-End ICO Services | Comfygen" />
        <meta property="og:description" content="Launch your ICO with Comfygen, a leading ICO development company. We offer comprehensive ICO development services, including token creation, smart contracts, blockchain integration, and post-ICO support. Secure, scalable, and compliant solutions." />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ICO Development Company | End-to-End ICO Services | Comfygen" />
        <meta name="twitter:description" content="Launch your ICO with Comfygen, a leading ICO development company. We offer comprehensive ICO development services, including token creation, smart contracts, blockchain integration, and post-ICO support. Secure, scalable, and compliant solutions." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/ico-development/ico-development-og.webp" />
        <meta name="twitter:site" content="@comfygentech" />


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />



      </Head>

      <BlockChainHeader />
      <div className="overflow-hidden lg:pt-[115px]">


        <HeroSectionForAllPages
          heading="ICO Development Service "
          subhead='Secure, Scalable & End-to-End ICO Launch Solutions'
          ptag="Comfygen is a trusted ICO development company delivering secure, scalable, and fully customized Initial Coin Offering (ICO) solutions for startups and enterprises. We provide end-to-end ICO development services, including token creation, smart contract development, investor dashboards, and launch support. Our experts ensure audited smart contracts, compliant tokenomics, and seamless fundraising execution—helping you launch your ICO with confidence and transparency."
          li="End-to-End ICO Development Services"
          li1="Secure & Audited Smart Contract Development"
          li2="Custom Token Creation & Deployment"
          li3="Whitepaper Drafting & Tokenomics Support"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/ico-development/ico-development-hero1.webp"
        />
        {/* <NewSection NewSection={JSON_DATA.NewSections} /> */}

        <Milestones/>

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">Over End-to-End ICO Development Services
              </h2>
              <p className="text-base text-center font-normal">At <a className='text-blue-500' href='/'>comfygen</a> , we specialize in delivering end-to-end ICO development services to help startups and enterprises launch successful ICO campaigns. Our services cover every step of the process, from initial planning to post-ICO support, ensuring that your ICO is secure, compliant, and primed for success. Here's a breakdown of the services we offer</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Empower Your Vision with Professional ICO Development"
          description1="Launching a successful Initial Coin Offering (ICO) takes more than just creating a token, it demands a strategic, end-to-end approach. As a leading ICO development company, Comfygen offers full-scale ICO development services, from blockchain and smart contract setup to tokenomics and post-ICO support. With deep expertise in crypto fundraising platforms, we ensure your ICO is secure, compliant, and investor-ready."
          points={
            ["5+ years of hands-on experience in ICO and <a class='text-blue-500' href='/blockchain-development'>blockchain development</a>",
              "A team of certified blockchain experts and security auditors",
              "Proven track record with successful ICO launches across industries",
              "Transparent processes",
              "Dedicated post-launch support and platform scaling services"
            ]
          }

          imageSrc="https://www.comfygen.com/comfygen-images/ico-development/ico-development-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}

        



        <CardItem
          heading="Our ICO Development Solutions"
          subheading="At Comfygen, we provide ICO development solutions designed to meet the unique needs of startups and enterprises. Our solutions are custom-tailored to ensure your ICO is secure, efficient, and investor-friendly. We provide:"
          techData={JSON_DATA.cardData2}

        />


        <ModelsSec Qa={JSON_DATA.Qa} Whycomfygen={JSON_DATA.Whycomfygen} />
        <CardItem
          heading="Top Security Features for Secure ICO Development Mechanisms"
          subheading="Ensuring the security of your ICO is crucial for protecting investor data, assets, and overall project integrity. Our development mechanisms incorporate advanced security features to safeguard every aspect of your ICO."
          techData={JSON_DATA.cardData}

        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />


        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">Our Step-by-Step ICO Development Process</h2>
              <p className="text-base font-normal mt-2">
               Our ICO development process is meticulously structured to ensure a smooth and successful token launch. We follow a comprehensive, step-by-step approach to deliver a secure, compliant, and high-performance ICO platform tailored to your business needs.
              </p>
            </div>
            <ProcessSec processSlides={Processs} />
          </div>
        </section>






        <TechStack
          title="Our ICO Development Technology Stack"
          description="We use the latest technologies to build secure, scalable, and high-performance ICO platforms:"
        />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Our Initial Coin Offering Developer"
          text="When you choose to hire an ICO developer at Comfygen, you’re partnering with a skilled team ready to bring your project vision to life. Our experienced ICO developers are proficient in creating secure, scalable, and high-performing ICO platforms that meet your specific needs. Whether you need custom blockchain solutions, tokenomics strategy, or smart contract development, we offer top-tier expertise that ensures your ICO’s success."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Expertise in Blockchain & ICO Development",
            "Tailored ICO Solutions",
            "Full Spectrum of Services",
            "Security and Compliance Focused",
            "Proven Track Record",

          ]}
        />


        <ClientTestimonials heading="What Our Clients Say" testimonials={defaultTestimonials} />
        <CallToAction
          heading="Let’s hear what you have to say?"
          text="Get in touch with us and discuss your needs and requirements with our experts."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />
        <Faq
          faqData={JSON_DATA.Frequently}
          title=""
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