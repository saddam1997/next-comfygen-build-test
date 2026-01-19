
import Head from "next/head";
import JSON_DATA from "./json/mobile.json";
import dynamic from "next/dynamic";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSection from "../../components/HeroSection";

const AboutSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/AboutSection"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ServicesSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ServicesSec"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const Solution = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Solution"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const LatestTechnology = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/LatestTechnology"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const Portfolio = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Portfolio"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const TechStack = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/TechStack"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const IndustriesServe = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const WhyChoose = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ClientTestimonials = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/ClientTestimonials"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const Milestones = dynamic(
  () => import("../../components/Newcomponet/comman/Milestones"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const CallToAction = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/CallToAction"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const BlogSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);



export default function Mobile(props: any) {

  let { initialData } = props;
  return (
    <>
      <Head>
        <title>
          Best Mobile App Development Company in Jaipur, India | Comfygen
        </title>

        <meta
          name="description"
          content="Comfygen Technologies is the best mobile app development company in Jaipur, India. We provide custom mobile app development services and solutions for Android, iOS platforms to startups and enterprise-level companies."
        />

        <meta
          name="keywords"
          content="Android App Development, iOS App Development, Cross-Platform App Development, React Native App Development, Flutter App Development, On-Demand Mobile App Development, Hybrid Mobile App Development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/mobile-app-development"
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
        <meta name="apple-mobile-web-app-title" content="Comfygen App" />

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        <meta
          name="description"
          content="Comfygen Technologies is a leading mobile app development company in Jaipur, India. We provide custom mobile app development services and solutions for Android, iOS platforms to startups and enterprise-level companies."
        />
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

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="fb:page_id" content="110909321596135" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-og.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-og.webp"
        />
        <meta property="og:image:alt" content="Mobile App Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/mobile-app-development"
        />
        <meta
          property="og:title"
          content="Best Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="Looking for mobile app developers in Jaipur? Comfygen offers professional mobile app development services for Android, iOS & hybrid apps. Trusted by 100+ clients across India and abroad."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Mobile App Development Company in India | Comfygen Technologies"
        />
        <meta
          name="twitter:description"
          content="Comfygen Technologies is a trusted mobile app development company in India, offering custom Android and iOS app development services tailored for startups, enterprises, and growing businesses across industries."
        />
        <meta
          name="twitter:image"
          content="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-og.webp"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.BreadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.ServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.ldJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.ProductSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.faqSchema) }}
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

      <div className="h-full">
        <Header />
      </div>

      <div className="overflow-hidden lg:pt-[110px] ">
        <div className="">
          <HeroSection
            heading="Leading Mobile App Development Company in Jaipur"
            ptag="Grow your business with smart, secure, and user-friendly mobile applications built to perform. Comfygen Technologies is a trusted mobile app development company in Jaipur delivering innovative Android, iOS, and cross-platform app solutions that enhance customer experience and drive business success. We turn your ideas into high-quality apps with seamless functionality and beautiful design."
            li="Custom Android & iOS App Development"
            li1="Cross-Platform & Scalable Mobile Solutions"
            li2="Secure, High-Performance App Architecture"
            li3="Business-Focused UI/UX Design"
            bgImage="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-hero.webp"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            
          />
        </div>
        {/* <Sponser /> */}
        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Professional Mobile App Development Services in Jaipur, India
              </h2>
              <p className="text-base text-center font-normal">
                We offer a full suite of custom mobile app development services
                in Jaipur tailored to your business goals. Whether you're
                building a new product or upgrading an existing one, our mobile
                app development expert team delivers high-quality mobile
                application solutions for every platform.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title=""
          heading="Future Ready Mobile App Development Solutions for Global Businesses"
          description1="Comfygen Technologies is a trusted mobile app development company in Jaipur, India, delivering high-performing mobile apps for startups and enterprises. Based in Jaipur, we build feature-rich Android, iOS, and cross-platform apps for Healthcare, Fintech, Blockchain, Education, Gaming, On-Demand, and Entertainment industries."
          description2="With a skilled team of mobile app developers in Jaipur and 250+ successful projects, we offer end-to-end app development services using the latest technologies. Whether you need AI-powered apps, intuitive UI UX design, or high-quality gaming app development, we bring your idea to life with innovation and excellence."
          description3=""
          imageSrc="https://www.comfygen.com/comfygen-images/mobile-app/mobile-app-about.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Explore Our Portfolio of Successful Mobile App Projects"
            description="Showcasing innovative, user-focused apps crafted with precision and creativity, each project reflects our dedication to excellence and client satisfaction."
          />
        </section>

        <CallToAction
          heading="Have an App Idea in Mind?"
          text="Our expert developers are here to make it happen. From concept to launch, we’ll build your app with precision and innovation."
          buttonText="Start Your Project"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />

        <Solution
          heading="Grow Your Business with Comfygen’s Custom Mobile App Development Solutions"
          subheading="We offer a full suite of custom mobile app development services in Jaipur tailored to your business goals. Whether you're building a new product or upgrading an existing one, our mobile app development expert team delivers high-quality application development solutions for every platform."
          techData={JSON_DATA.technologyData}
        />

        <LatestTechnology
          heading="Emerging Technologies We Leverage For Mobile Application Development"
          subheading=""
          techData={JSON_DATA.latesttech}
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                End-to-End Mobile App Development Process
              </h2>
              <p className="text-base font-normal mt-2">
                As a reliable mobile application development company in Jaipur.
                Our mobile app development process is a structured approach
                focused on delivering innovative and high-performing custom
                mobile app solutions customized to user business needs.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>

        <TechStack
          customTechData={null}
          title="Full Stack Technology for Agile Mobile App Development"
          description="The full-stack technology we use encompasses the front end, back end, database, DevOps, and quality assurance to develop agile, high-performance mobile apps. Your business needs will be met by seamless, scalable, and reliable app solutions."
        />

        <IndustriesServe heading={null} description={null} />

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <HireDeveloper
          heading="Hire our Dedicated Mobile App Developer in Jaipur"
          text="Looking to develop a user-friendly mobile app? <a class='font-semibold underline' href='https://www.comfygen.com/hire-mobile-app-developer' >Hire mobile app developers</a> at Comfygen and boost your business to new heights with custom mobile solutions. As an affordable mobile app development company in Jaipur, India, we specialize in providing high-performance, scalable, and innovative apps for both iOS and Android platforms. Whether you need on-demand mobile app development services or complex enterprise app development solutions, our team ensures your app meets the highest standards of quality and functionality."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "10+ Years of experience in mobile app development",
            "Expertise in Latest Technologies",
            "Timely Delivery",
            "Scalable and Secure Apps",
          ]}
        />
        <ClientTestimonials
          heading="Client Testimonial"
          testimonials={JSON_DATA.customTestimonials}
        />
        <Faq faqData={JSON_DATA.Frequently} title=" " />
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
