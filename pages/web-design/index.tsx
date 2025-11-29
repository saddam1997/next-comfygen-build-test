import React, { useEffect, useState } from "react";
import Head from "next/head";
import JSON_DATA from "./json/mobile.json";
import LazyLoad from "react-lazy-load";
import Header from "../Newcomponet/layout/Header";
import HeroSectionForAllPages from "../Newcomponet/SectionCompoent/HeroSectionForAllPages";

import dynamic from "next/dynamic";

const AboutSection = dynamic(
  () => import("../Newcomponet/SectionCompoent/AboutSection"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ServicesSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Portfolio = dynamic(
  () => import("../Newcomponet/SectionCompoent/Portfolio"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const CallToAction = dynamic(
  () => import("../Newcomponet/SectionCompoent/CallToAction"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../Newcomponet/SectionCompoent/ProcessSec"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const TechStack = dynamic(
  () => import("../Newcomponet/SectionCompoent/TechStack"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);

const Faq = dynamic(
  () => import("../Newcomponet/SectionCompoent/Faq"),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" />, ssr: true }
);



// import AboutSection from "../Newcomponet/SectionCompoent/AboutSection";
// import ServicesSec from "../Newcomponet/SectionCompoent/ServicesSec";
// import Portfolio from "../Newcomponet/SectionCompoent/Portfolio";
// import CallToAction from "../Newcomponet/SectionCompoent/CallToAction";
// import ProcessSec from "../Newcomponet/SectionCompoent/ProcessSec";
// import TechStack from "../Newcomponet/SectionCompoent/TechStack";
// import WhyChoose from "../Newcomponet/SectionCompoent/WhyChooseUs";
// import HireDeveloper from "../Newcomponet/SectionCompoent/HireDeveloper";
// import Faq from "../Newcomponet/SectionCompoent/Faq";



const BreadcrumbSchema = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://www.comfygen.com"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Web Design Company",
    "item": "https://www.comfygen.com/web-design"
  }]
};
const ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Web Design Company",
  "provider": {
    "@type": "Organization",
    "name": "Comfygen Technologies",
    "url": "https://www.comfygen.com/"
  },
  "description": "Comfygen is a professional web design company offering creative, scalable, and mobile-friendly websites to startups, brands, and enterprises. 100% client satisfaction guaranteed.",
  "url": "https://www.comfygen.com/web-design",
  "mainEntityOfPage": "https://www.comfygen.com/web-design",
  "areaServed": "Global",
  "serviceType": [
    "Ecommerce Web Design Service",
    "WordPress Web Design Service",
    "Corporate Website Design",
    "Custom Website Design",
    "UI/UX Design Services",
    "Responsive Web Design Service",
    "Website Redesign Services",
    "Landing Page Design Services",
    "B2B Web Design Services"

  ],

  "sameAs": [
    "https://www.facebook.com/comfygen.technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies",
    "https://www.linkedin.com/company/comfygen-technologies"

  ]
};
const ldJson = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Top Mobile App Development Company In India | Comfygen",
  url: "https://www.comfygen.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: "{search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comfygen",
  url: "https://www.comfygen.com/",
  logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
  sameAs: [
    "https://twitter.com/comfygentech",
    "https://www.instagram.com/comfygen_",
    "https://www.linkedin.com/company/comfygen-private-limited",
    "https://www.facebook.com/comfygen",
  ],
};
const ProductSchema = {
  "@context": "http://www.schema.org",
  "@type": "Product",
  "brand": "Comfygen Technologies",
  "Name": "Affordable Custom Web Design Services",
  "image": "https://www.comfygen.com/comfygen-images/website/website-about.webp",
  "description": "Looking for an affordable web design company? Comfygen builds responsive, SEO-friendly websites tailored for businesses across industries. Get a quote today!",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "476"
  }
};

const faqSchema = {
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you redesign my existing website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in redesigning websites to improve user experience, design aesthetics, and performance. Whether you need a complete overhaul or just a few updates, our team can help refresh your website to meet modern standards and enhance its functionality."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to design a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline for website design depends on the complexity and requirements of your project. On average, a custom website design can take anywhere from 2 to 5 weeks, from research and planning to launch. We give priority to providing high-quality work while accepting project deadlines."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate e-commerce features into my website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We can integrate e-commerce functionality like product catalogs, shopping carts, secure payment gateways, and order management systems. Whether you need a full-fledged online store or just basic e-commerce features, we’ve got you covered."
      }
    },
    {
      "@type": "Question",
      "name": "Will my website be optimized for speed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, website speed is a top priority. We optimize images, use efficient coding practices, and implement caching techniques to ensure your website loads quickly. A fast website improves user experience and contributes to better SEO rankings."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of businesses do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with businesses of all sizes across various industries, including startups, small businesses, e-commerce stores, educational institutions, healthcare providers, and more. Our team customizes each website design to the unique needs and goals of your business."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started with my website design project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To get started, simply reach out to us through our contact form or give us a call. We’ll schedule a consultation to discuss your project needs, goals, and vision, and then provide you with a customized plan to bring your website to life."
      }
    }
  ],
};

export default function Mobile(props: any) {
  let { } = JSON_DATA;

  let { initialData } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };

  const webDesignBenefits = [
    {
      title: "Healthcare Web Design",
      desc: "We build HIPAA-compliant, responsive <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/healthcare-app-development' >healthcare</a> websites for hospitals, clinics, and health startups—ensuring a smooth patient experience, <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/doctor-appointment-app-development'>appointment booking</a>, and trust-building digital presence.",
    },
    {
      title: "eCommerce Web Design",
      desc: "Our <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/e-commerce-app-development' >eCommerce</a> websites deliver a seamless shopping experience with product filtering, cart optimization, and secure checkout. Ideal for growing online stores and retail brands.",
    },
    {
      title: "Real Estate Web Design",
      desc: "We design powerful real estate websites with property listings, map integration, and lead capture features—perfect for brokers, developers, and real estate agents.",
    },
    {
      title: "Education Web Design",
      desc: "Custom <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/e-learning-app-development' >education websites</a> for schools, institutes, and edtech startups. We focus on content delivery, course integration, and student engagement with modern UI/UX.",
    },
    {
      title: "Travel Web Design",
      desc: "Responsive websites for travel agencies, tour operators, and booking platforms. We create user-friendly layouts with itineraries, booking engines, and destination guides.",
    },
    {
      title: "Finance Web Design",
      desc: "Scalable and secure websites for financial institutions, <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/finance-app-development' >fintech</a> startups, and consultants. We emphasize trust, performance, and compliance-driven UI/UX for your finance business.",
    },
  ];

  const Process = [
    {
      title: "Research and Discover",
      description:
        "We start by understanding the user’s business, audience, and <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/web-development' >website development</a> industry. Our skilled website designing team conducts in-depth market research to collect insights, study competitors, and define your goals. It ensures that we create a website that meets your needs and stands out in your market.",
    },
    {
      title: "Planning and Strategy",
      description:
        "Once the research is complete, we develop a strategic plan that aligns with the user’s business objectives. We define the project scope, timeline, and key deliverables to ensure we stay on track throughout the design process.",
    },
    {
      title: "Wireframing and Prototyping",
      description:
        "A web design company near me creates wireframes to outline the website’s structure, focusing on layout and functionality. Prototypes are built to visualize the user journey and demonstrate how the website will interact, providing a clear roadmap for design.",
    },
    {
      title: "Visual Design",
      description:
        "Our dedicated website design team starts creating the visual aesthetics, ensuring that the website’s design is consistent with the user’s brand identity. We focus on creating an attractive and engaging user interface that promotes a perfect experience and drives conversions.",
    },
    {
      title: "Responsive Design",
      description:
        "We ensure that the customer’s website is fully responsive, meaning it looks great and functions perfectly on all devices and screen sizes. This step guarantees that the customer’s website provides a smooth experience, whether viewed on desktops, tablets, or smartphones.",
    },
    {
      title: "Feedback and Revision",
      description:
        "We value client input and incorporate feedback at every step of the website design process. After presenting the initial web design, we refine and revise it based on your feedback to ensure the final result exceeds the customer’s expectations.",
    },
    {
      title: "Final Delivery",
      description:
        "Once the website design is approved and polished, we prepare for the final delivery. The client’s website will be fully optimized, tested, and ready to go live, ensuring that all functionalities are in place, and the website design aligns perfectly with the client’s vision.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Best Web Design Company in Jaipur, India | Custom Website Design Services
        </title>

        <meta
          name="description"
          content="Comfygen is a top-rated web design company in Jaipur, India, offering responsive, SEO-friendly, and custom websites for startups, enterprises, and global brands. 300+ projects delivered."
        />
        <meta
          name="keywords"
          content="Ecommerce Web Design Service, WordPress Web Design Service, Corporate Website Design, Custom Website Design, UI/UX Design Services, Responsive Web Design Service, Website Redesign Services, Landing Page Design Services, B2B Web Design Services, Web Design Company in Jaipur, India, Custom Website Design Services, SEO-Friendly Websites"
        />
        <link rel="canonical" href="https://www.comfygen.com/web-design" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta name="author" content="Comfygen Technologies" />
        <meta name="language" content="English" />
        <meta name="distribution" content="Global" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta
          property="og:title"
          content="Best Web Design Company in Jaipur, India | Custom Website Design Services"
        />
        <meta
          property="og:description"
          content="Comfygen is a top-rated web design company in Jaipur, India, offering responsive, SEO-friendly, and custom websites for startups, enterprises, and global brands. 300+ projects delivered."
        />
        <meta property="og:url" content="https://www.comfygen.com/web-design" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/website/website-og.webp"
        />
        <meta property="og:image:alt" content="Web Design Company in Jaipur" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Web Design Company in Jaipur, India | Custom Website Design Services"
        />
        <meta
          name="twitter:description"
          content="Comfygen is a top-rated web design company in Jaipur, India, offering responsive, SEO-friendly, and custom websites for startups, enterprises, and global brands. 300+ projects delivered."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/website/website-og.webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Comfygen",
              legalName: "Comfygen Pvt. Ltd.",
              url: "https://www.comfygen.com/",
              logo: "https://www.comfygen.com/media/svg/comfygen-logo.svg",
              foundingDate: "2019",
              founders: [
                { "@type": "Person", name: "Saddam Husen" },
                { "@type": "Person", name: "Saddam Husen" },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "F-152, Dayanand Marg, Nemi Nagar",
                addressLocality: "Vaishali Nagar",
                addressRegion: "Jaipur, Rajasthan, India",
                postalCode: "302021",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+91 9587867258",
                email: "sales@comfygen.com",
              },
              areaServed: ["IN", "US", "CA", "GB", "AE", "DE"],
              sameAs: [
                "https://twitter.com/comfygentech",
                "https://www.instagram.com/comfygen_/?hl=en",
                "https://www.linkedin.com/company/comfygen-private-limited",
                "https://www.facebook.com/comfygen",
              ],
            }),
          }}
        />
      </Head>

      <div className="">
        <LazyLoad height={80} offset={100}>
          <Header />
        </LazyLoad>
      </div>

      <div className="overflow-hidden lg:pt-[20px]">

        <div className="">
          <HeroSectionForAllPages
            heading="Best Web Design Company in Jaipur, India"
            ptag="Comfygen is a leading web design company in Jaipur, India, crafting visually stunning, responsive, and user-friendly websites for startups, brands, and enterprises. Our creative web designers blend innovation with strategy to deliver designs that engage users and drive results. From idea to execution, we transform your vision into an impactful digital experience."
            li=""
            li1=""
            li2=""
            li3=""
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
            bgImage="https://www.comfygen.com/comfygen-images/website/website-hero1.webp"
          />
        </div>
        {/* <ContactFromCenter /> */}

        <AboutSection
          title=""
          heading="Why We Are the Best Web Designing Company in Jaipur"
          description1="Comfygen stands out as a leading web designing company in Jaipur by combining creativity, strategy, and modern technology. We don’t just design websites — we build digital experiences that are visually stunning, user-centric, and built to perform."
          description2="Our team of expert UI/UX designers and front-end developers deliver high-quality, responsive web designs that adapt beautifully to every screen. Whether you're a startup, SME, or enterprise, we create custom web"
          description3="solutions that align with your brand, engage users, and drive business growth."
          description4="With 300+ websites delivered across industries like eCommerce, healthcare, <a class='text-blue-500 font-semibold' href='https://www.comfygen.com/ca/education-app-development-company' >education</a>, travel, and fintech, we’ve earned the trust of clients across India and globally."
          imageSrc="https://www.comfygen.com/comfygen-images/website/website-about.webp"
          link="/about-us"
          linkText="Explore More"
        />


        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">We Offer Affordable Website Design Services In Jaipur</h2>
              <p className="text-base text-center font-normal">Comfygen is a top creative web design agency in Jaipur, offering a wide range of solutions to enhance your online presence. Our custom web design services are customized to meet your specific business needs, ensuring your website not only looks great but also functions perfectly.</p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Portfolio – Websites That Speak for Themselves"
            description="At Comfygen, we take pride in crafting high-performing and visually appealing websites for various industries. As a trusted UI/UX  web design and development company, we have delivered custom, responsive, and SEO-optimized websites that help brands grow faster and engage better. Take a look at some of our latest work."
          />
        </section>


        <section className="lg:py-16 py-10 bg-[#fff]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4 text-center">
              <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
                <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                  Experience Across a Wide Variety of Industries
                </h2>
                <p className="text-base text-center lg:w-2/3 mx-auto w-full">
                  We are a leading Web Design agency in India, delivering custom
                  websites for businesses across industries with creativity,
                  speed, and precision.
                </p>
              </div>
              <div className="grid gap-10 pt-8 text-left lg:grid-cols-2">
                {webDesignBenefits.map((elem, idx) => (
                  <div
                    key={idx}
                    className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/40 rounded-2xl"
                  >
                    <h3 className="text-2xl text-[#212121] font-semibold">
                      {elem.title}
                    </h3>
                    <p
                      className="text-base font-normal mt-2"
                      dangerouslySetInnerHTML={{ __html: elem.desc }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CallToAction
          heading="Ready to Build a Stunning Website?"
          text="Partner with a leading web design company to grow your digital presence."
          buttonText="Talk to a Designer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />


        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">How We Approach the Web Design Process
              </h2>
              <p className="text-base font-normal mt-2">
                As a top website design companies in Jaipur, India, experts in providing cutting-edge web design services in Jaipur, India. We follow a systematic design process to ensure every website we create is not only visually stunning but also highly functional and aligned with the user’s business goals. Here’s how we approach every project
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>


        <TechStack
          customTechData={null}
          title="Technologies We Use for Website Design"
          description="Comfygen leverages the latest and most advanced technologies to deliver high-quality web solutions that meet your business needs. Our team of experts is proficient in a wide range of technologies, ensuring that we can provide the best tools and platforms for your project. Here’s a look at some of the key technologies we use"
        />


        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire Web Designer In Jaipur"
          text="Looking to create a user-friendly website that stands out in the digital world? Hire our top website UI/UX designer in Jaipur to bring your vision to life. As a custom web design company in Jaipur, India With years of experience and a passion for innovation. Our web designers specialize in creating visually appealing, responsive, and high-performing websites customized to user’s business needs."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Custom Website Design Solutions",
            "Responsive Designs",
            "SEO-Friendly Web Design",
            "Cost-Effective Services",
            "Web Design Studio",
            "Timely Delivery",
          ]}
        />
        <Faq faqData={JSON_DATA.Frequently} title=" " />
      </div>
    </>
  );
}

export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  if (!resData.ok) {
    // console.error("API Request failed:", await resData);
    return { props: { initialData: [] } };
  }
  // console.log(resData)
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}