
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/hybrid.json";
import LazyLoad from "react-lazy-load";
import Header from "../../components/Newcomponet/layout/Header";
import Milestones from "../../components/Newcomponet/comman/Milestones";
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

const HireDeveloper = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ConsultancyApproach = dynamic(
  () =>
    import("../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
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

const WhyChooseUs = dynamic(
  () => import("../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
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
          Hybrid Mobile App Development Company | Hire Hybrid App Developers – Comfygen
        </title>
        <meta
          property="og:title"
          content="Best Hybrid Mobile App Development Company in jaipur, India | Get Best Solutions"
        />
        <meta
          name="description"
          content="Comfygen is a leading hybrid mobile app development company in India and the USA, delivering secure, scalable, and cost-effective cross-platform app solutions with expert developers."
        />
        <meta
          name="og:description"
          content="Comfygen, the premier hybrid mobile app development company in Jaipur India, offers top-notch hybrid mobile app development services to bring your app vision to life. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/hybrid-mobile-app-development"
        />
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Are you looking for best Hybrid App Development Company | Hire Hybrid App Developers"
        />
        <meta
          property="og:facebook_description"
          content="Looking for a reliable Hybrid mobile app development Industry? Our expert Hire Hybrid App Developers provide end-to-end Hybrid mobile app development services that meet your business needs."
        />
        <meta
          property="og:twitter_title"
          content="Top Hybrid Mobile App Developers Company India & USA | Hybrid App Development Services | Comfygen"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, the Best Hybrid mobile application development company in India, UK, UAE & USA. Our hybrid mobile app developers can create mobile apps that employ native capabilities while also utilizing the power of HTML5."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content="Hybrid Mobile App Development Company in  India"
        />
        <meta
          name="summary"
          content="Comfygen is the No 1 Hybrid mobile app development Industry in India, USA."
        />
        <meta name="author" content="Mr. Dilip khan, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a company, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Hybrid Mobile App Development Company in  India"
          content="Comfygen is a leading Hybrid Mobile app development company in jaipur, India. Our hybrid mobile app developers can create mobile apps that employ native capabilities while also utilizing the power of HTML5."
        />
        <meta
          name="category"
          content="Hybrid Mobile App Development Company in  India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Hybrid Mobile Application Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="26.912434°" />
        <meta name="og:longitude" content="75.787271°" />
        <meta
          property="og:type"
          content="Hybrid Mobile App Development Company in  India"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <LazyLoad height={80} offset={100}>
        <Header />
      </LazyLoad>
      <HeroSection
        heading="Best Hybrid Mobile App Development Company"
        subhead="Looking for a Hybrid Mobile App Development Service?"
        ptag="Comfygen is a trusted hybrid mobile app development company in India and the USA, delivering high-quality, cost-effective app solutions for businesses of all sizes. Our experienced hybrid app developers help you choose the right frameworks and technologies to build scalable, secure, and performance-driven applications."
        ptag1="With over 5+ years of industry expertise, we develop custom hybrid apps that ensure faster time-to-market, seamless user experience, and cross-platform compatibility—without compromising quality or security."
        li="5+ Years of Hybrid App Development Experience"
        li1="Secure Applications with IP Protection"
        li2="Flexible Hiring & Engagement Models"
        li3="Timely Delivery with Guaranteed Quality"
        bgImage="https://www.comfygen.com/herosection/mobile-app-development-hero-section-img.webp"
        btnName="Talk With Expert"
        btnLink="/contact-us"

      />
      <Milestones />
      <section className="lg:py-16 py-10 bg-[#F5F5F9]">
        <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
              Our Hybrid App Development Services
            </h2>
            <p className="text-base text-center font-normal">
              Accelerate your digital transformation with our cutting-edge
              hybrid app development services. Harnessing the power of
              cross-platform compatibility, cost-effectiveness, and seamless
              user experiences, our team delivers high-performing, feature-rich
              apps that cater to diverse business needs. Partner with us to
              unlock the full potential of hybrid app development companies in
              Jaipur and elevate your business to new heights
            </p>
          </div>
          <div className="">
            <ServicesSec servicesData={JSON_DATA.servicesData} />
          </div>
        </div>
      </section>
      <AboutSection
        title="About Company"
        heading="Best Hybrid App Development Service Provider in India"
        description1="At Comfygen Softwares' Hybrid app developers create apps that not only deliver utility but also deliver EXPERIENCE! Being able to deliver a lasting experience is a real challenge. Our team has delivered hundreds of Hybrid applicationss for hundreds of businesses across a wide range of industries over more than a decade."
        description2="The apps developed by our company feature powerful performance, next-generation features, research-based UX/UI, and support for current technologies such as machine learning app development, IoT app development, augmented reality app development, and 3D modeling. It is our goal to put your enterprise, small business, or startup way ahead of the competition. We are known for our uncompromised work ethics and world-class quality of work. When it comes to turning your idea into a profitable business, we leave no stone unturned."
        imageSrc="https://www.comfygen.com/gallery/about-images/hybrid-mobile-app-development-about-us-img.webp"
        link="/about-us"
        linkText="Explore More"
      />
      <CallToAction
        heading="Let’s Build the Future of Technology Together"
        text="At Comfygen, we use creativity and teamwork to shape the direction of technology. Our innovative solutions help organisations stay ahead of the times in a world that is changing quickly. Together, let's develop the technologies of the future."
        buttonText="Get Started"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
        imageAlt="Future of Technology"
      />




      {/* <ContactFromCenter /> */}
      <ConsultancyApproach
        Head={JSON_DATA.consultancyHead}
        ItemData={JSON_DATA.consultancyData}
        imageSrc="https://www.comfygen.com/image/hybrid-mobile-app-development-advantages-img.webp"
        buttonText="Let’s Discuss"
        buttonLink="/contact-us"
      />
      <InfoSection
        heading="Leading Hybrid Web Application Development Company in India"
        description1="At Comfygen Softwares' Hybrid app developers create apps that not only deliver utility but also deliver EXPERIENCE! Being able to deliver a lasting experience is a real challenge. Our team has delivered hundreds of Hybrid applicationss for hundreds of businesses across a wide range of industries over more than a decade."
        description2="The apps developed by our company feature powerful performance, next-generation features, research-based UX/UI, and support for current technologies such as machine learning app development, IoT app development, augmented reality app development, and 3D modeling. It is our goal to put your enterprise, small business, or startup way ahead of the competition. We are known for our uncompromised work ethics and world-class quality of work. When it comes to turning your idea into a profitable business, we leave no stone unturned."
        description3=""
        dec=""
        points={[]}
        imageSrc="https://www.comfygen.com/image/hybrid-web-application-development-img.webp"
        link="/about-us"
        linkText="Explore More"
      />
      <WhyChooseUs
        title={JSON_DATA.pageData.title}
        description={JSON_DATA.pageData.description}
        mainCardData={JSON_DATA.pageData.mainCardData}
        gridData={JSON_DATA.pageData.gridData}
      />

      <HireDeveloper
        heading="Hire Hybrid App Developers"
        text="If you want a quick delivery of your project at a nominal charge, it would be a great idea to hire professional Hybrid Mobile App Developers. They can focus on your project entirely and deliver you faster results."
        buttonText="Hire Developer"
        buttonLink="/contact-us"
        imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
        imageAlt="hire-developer"
        listItems={[
          "Determine project requirements.",
          "Look for hybrid app development experience.",
          "Evaluate technical skills.",
          "Consider communication skills .",
        ]}
      />
      <IndustriesServe />


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