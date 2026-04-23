import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/ios.json";
import Header from "../../components/Newcomponet/layout/Header";
import HeroSection from "../../components/HeroSection";
import ClientStories from "../../components/Newcomponet/SectionCompoent/ClientStories";

import ReviewCard from "../../components/ReviewCard";
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
const LatestTechnology = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/LatestTechnology"),
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

const ProcessSec = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/ProcessSec"),
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

const Faq = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/Faq"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const InfoSection = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/InfoSection"),
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
        <title>Best iOS App Development Company | Custom iPhone App Developers</title>

        <meta
          name="description"
          content="Comfygen is the best iOS app development company delivering custom iPhone, iPad, and iOS applications with modern UI/UX, scalable architecture, and high-performance mobile solutions."
        />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="iOS App Development Company | Custom iPhone & iPad App Solutions - Comfygen"
        />
        <meta
          name="twitter:description"
          content="Build high-performance iOS apps with Comfygen. We create secure, fast, and user-friendly iPhone and iPad applications using Swift, SwiftUI, and the latest Apple technologies."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-ios-app-image.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Custom iOS App Development by Comfygen"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Meta --> */}

        <meta property="og:image" content="ADD-IMAGE-URL" />
        <meta property="og:image:secure_url" content="ADD-IMAGE-URL" />
        <meta
          property="og:image:alt"
          content="iOS App Development Company - Comfygen"
        />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ios-app-development "
        />
        <meta
          property="og:title"
          content="Comfygen iOS App Development Services | Custom iPhone & iPad App Solutions"
        />
        <meta
          property="og:description"
          content="Build high-quality iOS applications with Comfygen. We develop secure, scalable, and user-friendly iPhone and iPad apps using Swift, SwiftUI, and the latest Apple technologies."
        />

        {/* Structured Data Scripts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_DATA.jsonLdData) }}
        />
      </Head>

     {/* <Header /> */}

      <div className="overflow-hidden ">
        <HeroSection
          heading="Best IOS App Development Company"
          ptag="Create powerful, secure, and high-performance iOS applications with Comfygen, the Best iOS App Development Company.We help startups and enterprises build custom iPhone, iPad, and macOS apps using Swift, SwiftUI, and Apple’s latest development standards."
          ptag1="From intuitive UI/UX design to scalable architecture and App Store deployment, our iOS developers deliver seamless user experiences, optimized performance, and long-term app reliability tailored to your business goals."
          li="Custom iOS App Development for Startups & Enterprises"
          li1="Native iPhone, iPad & macOS App Solutions"
          li2="Secure, Scalable & High-Performance Architecture"
          li3="End-to-End iOS App Development & App Store Launch"
          btnName="Talk With Expert"
          btnLink="/contact-us"

          bgImage="https://www.comfygen.com/herosection/ios-app-dev-hero-img.webp"
        />

        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our IOS App Development Services
              </h2>
              <p className="text-base text-center font-normal">
                As a trusted <a href='https://www.comfygen.com/mobile-app-development' className="text-blue-600 font-semibold">mobile app development company</a>, we deliver high-performance, secure, and scalable iOS applications tailored to your business goals. Our expert iOS developers leverage the latest Apple technologies to build intuitive, feature-rich apps that deliver seamless user experiences across iPhone, iPad, Apple Watch, and Apple TV.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title="About Company"
          heading="Why Businesses Choose Dedicated IOS App Development"
          description1="IOS remains one of the most lucrative mobile ecosystems, with millions of active users worldwide who value speed, security, and seamless experiences. This makes dedicated IOS mobile app development a strategic choice for businesses looking to engage premium audiences and boost app monetization."
          description2="The Apple ecosystem offers unmatched performance, regular updates, and robust security features, giving your app the reliability users expect. Brands investing in professional IOS app development benefit from native app capabilities, smoother UI/UX, and access to features like ARKit, SiriKit, and Apple Pay."
          description3="Compared to cross-platform solutions, native IOS apps deliver superior performance, faster load times, and better integration with Apple devices, ensuring your app runs flawlessly across iPhones, iPads, and even Apple Watches. For businesses aiming for long-term growth and customer satisfaction, dedicated iOS app development is the clear choice."
          imageSrc="https://www.comfygen.com/gallery/about-images/ios-app-development-about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <CallToAction
          heading="Ready to Build Your iOS App?"
          text="Turn your idea into a fast, secure, and beautifully designed iOS application with Comfygen. Let’s create an app your users will love from day one."
          buttonText="Get Started"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Future of Technology"
        />

        <LatestTechnology
          heading="End-to-End IOS App Development for Diverse Business Domains"
          subheading="As a top IOS app development company in India, we specialize in providing cutting-edge IOS app development services across various industries. Whether you're looking to build on-demand IOS apps or create a niche application, we ensure innovation and seamless functionality."
          techData={JSON_DATA.technologyData}
        />

        <IndustriesServe heading="" description="" />

        <InfoSection
          heading="Market Overview & IOS App Development Demand"
          description1="The IOS App Development market keeps expanding, and users on the Apple system consistently show higher spending power and stronger brand loyalty. That’s why all app Development companies across fintech, healthcare, e-commerce, travel, on-demand services, and SaaS lean toward custom iOS app development when they want better engagement and long-term retention."
          description2="What this really means is that businesses are no longer building basic IOS apps. They’re investing in AI-powered iOS applications, fintech mobile apps for iPhone, IoT-enabled iOS solutions, and secure apps that tap into Apple’s ecosystem features like Face ID, Apple Pay, Core ML, and ARKit."
          description3="The demand is rising because IOS gives brands a stable platform, reliable updates, tighter security, and an audience that’s comfortable paying for premium app development services. If you’re planning to scale, the IOS App development market gives you the clarity, stability, and spending-ready users you want."
          dec=""
          points={[]}
          imageSrc="https://www.comfygen.com/img/what-is-the-Significance-of-poa-blockchain-development.webp"
          link="/contact-us"
          linkText="Lets Discuss"
        />

        <TechStack
          title=" Our Advanced Tech Stack for iOS App Development"
          description="Our iOS mobile app development company utilizes the latest technologies to empower new iOS apps for unique business ideas. We utilize the most robust and latest app development tools and frameworks to build your custom iOS apps. The selection of the right tools and frameworks for iOS app development has helped us serve our clients with user-friendly, secure, and robust iOS applications."
          filterCategory={["mobile"]}
        />

        <section className="bg-white lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our end-to-end iOS app development process
              </h2>
              <p className="text-base font-normal mt-2">
                As a leading IOS app development company in India, Comfygen
                delivers high-quality iPhone and iPad app development services
                through a clear, structured, and collaborative approach. The
                idea is simple: build apps that look great, work smoothly, and
                scale without headaches.
              </p>
            </div>
            <ProcessSec processSlides={JSON_DATA.Process} />
          </div>
        </section>



        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <ClientStories />

        <HireDeveloper
          heading="Hire Our iOS App Developers"
          text="Need fast, budget-friendly IOS app development without compromising quality? Hire skilled IOS app developers from Comfygen and get clean code, smooth performance, and on-time delivery."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "Clear project understanding",
            "Certified iOS developers",
            "Updated with the latest iOS trends",
            "Follows Apple App Store guidelines",
            "Post-launch support",
          ]}
        />

 <ReviewCard testimonials={JSON_DATA.ReviewData}/>

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

