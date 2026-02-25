
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/applicationConsulting.json";
import Header from "../../../components/Newcomponet/layout/Header";
import Milestones from "../../../components/Newcomponet/comman/Milestones";
import HeroSection from "../../../components/HeroSection";
import ClientStories from "../../../components/Newcomponet/SectionCompoent/ClientStories";

const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const IndustriesServe = dynamic(
  () =>
    import("../../../components/Newcomponet/SectionCompoent/IndustriesServe"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const ConsultancyApproach = dynamic(
  () =>
    import("../../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const LatestTechnology = dynamic(
  () =>
    import("../../../components/Newcomponet/SectionCompoent/LatestTechnology"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);

const Faq = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Faq"),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
    ssr: true,
  }
);


const BlogSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/BlogSection"),
  { ssr: true }
);


export default function Mobile(props: any) {
  let { initialData } = props;






  return (
    <>
      <Head>
        <title>Application Consulting Services mobile app development</title>
        <meta
          property="og:title"
          content="Mobile App Development & consulting services Company 📲🤝"
        />
        <meta
          name="description"
          content="Comfygen provide best mobile app consulting services with 5+ Experience Experts Centric provides app consulting to mobile app development. Consult with us today!"
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/application-consulting-services"
        />
        <meta name="robots" content="index,follow" />
        <meta charSet="UTF-8" />
        <meta
          property="og:facebook_title"
          content="Mobile App Consulting Services & mobile App Development Company | Comfygen"
        />
        <meta
          property="og:facebook_description"
          content="Unlock your business's global potential with our Consultancy expert in mobile app development, delivering custom mobile application services, user-friendly app development solutions to elevate your brand's presence in the marketplace."
        />
        <meta
          property="og:twitter_title"
          content="Best Custom Mobile Application Development & Consulting Services"
        />
        <meta
          property="og:twitter_description"
          content="Comfygen, a Best Custom mobile application development and consultancy company in India & the USA that offers iPhone/iOS, Android app development consulting services from startup to enterprise level Business."
        />
        <meta property="schema:type" content="LocalBusiness" />
        <meta name="copyright" content="Comfygen Private Limited" />
        <meta name="language" content="en-us" />
        <meta
          name="abstract"
          content=" Mobile Application Consulting Services And App Development Company in India and USA"
        />
        <meta
          name="summary"
          content="Comfygen Pvt. LTD. is the best custom mobile app development Firm and Top-notch mobile app Consultant service provider in India."
        />
        <meta name="author" content="Mr. Saddam Husen, sales@comfygen.com" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta
          name="owner"
          content="A Founder is one of the individuals who helped establish a mobile application development & App consultancy agency in Bharat, startup or organization. They typically share the vision, passion, and responsibility for the success of the venture with other Founders. Founders can have varying levels of involvement."
        />
        <meta
          name="Mobile Application Consulting and application Development Company"
          content="Comfygen is a top-notch Mobile app development and Consultancy services organization in the USA & India. Get ahead of the competition with the top mobile app development services, company In India. Our expert team can bring your ideas to Business Goal."
        />
        <meta
          name="category"
          content="Mobile App Development & Application Consulting Company in India"
        />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta
          name="subtitle"
          content="Mobile App Consulting Services & Mobile app Development Organization"
        />
        <meta name="MobileOptimized" content="320" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="og:country-name" content="India, USA, UK, UAE" />
        <meta name="og:latitude" content="43.781269°" />
        <meta name="og:longitude" content="-79.230759" />
        <meta
          property="og:type"
          content="Mobile App Development & Consultancy app services Company In India"
        />
        <meta
          name="google-site-verification"
          content="Qb7PUETD8bdViY1MfXM5ce-OZDO4vNj3lPLqfxVX9cg"
        />
      </Head>
      <div className="">
        <Header />
      </div>
      <div className="overflow-hidden lg:pt-[90px] ">
        <HeroSection
          heading="Application Development Consulting Services"
          ptag="Comfygen provides expert Mobile Application Development Consulting Services to help businesses define the right strategy, reduce risks, and build successful digital products. As an experienced mobile app development consulting company, we analyze your business goals, market opportunities, and user expectations to create a clear, result-driven app roadmap."
          ptag1="Our app consultants and market research experts guide you through ideation, technology selection, feature planning, and scalability strategies—ensuring your mobile application stands out in competitive markets and delivers long-term value."
          li="Expert Mobile App Development Consulting"
          li1="Business & User-Centric App Strategy"
          li2="Innovative, Scalable App Development Ideas"
          bgImage="https://www.comfygen.com/herosection/application-consulting-services-hero-img.webp"
          btnName="Talk With Expert"
          btnLink="/contact-us"

        />
        <Milestones />
        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Mobile App Development Consultancy Services
              </h2>
              <p className="text-base text-center font-normal">
                The mobile app development idea and application integration
                services need to be evaluated in certain ways. Here are the
                top-notch strategic mobile application development consulting
                services we provide to assess the app development requirements.
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>
        <AboutSection
          title=""
          heading="Leading Mobile App Consultancy for a Futuristic Market"
          description1="Comfygen is an 8+ years experienced application development firm that has acquired the talents of 10 to 15+ years of experienced developers, researchers, and analysts. This company is more focused on delivering quality over quantity. We cater <a href='https://www.comfygen.com/mobile-app-development' class='text-blue-600 font-semibold'>mobile application development</a> consulting services to clients with optimum innovative approaches to development, deployment, and even post-deployment support & maintenance. Our mobile app developers are attentive to cutting-edge technologies and trending techs to build robust mobile applications that carry the potential to engage users in the long run."
          description2="Not only the expertise we have, but our team of IT engineers also understands every domain, niche, and industrial type. Every industry is revolutionized by technological advancements and unique ideations. Our app development consultants are well-versed in the current revolutions and possible futuristic changes. Therefore, they can comment better on the clientele’s app development idea and suggest bright application consultancy to build a potent mobile application that fulfills every need with vast engagement."
          description3=""
          imageSrc="https://www.comfygen.com/gallery/about-images/application-consulting-services-about-us-img.webp"
          link="/about-us"
          linkText="Explore More"
        />
        {/* <ContactFromCenter /> */}

        <IndustriesServe
          heading="Industries We Serve As Best Mobile App Development Company"
          description="Comfygen provides custom web and mobile app development solutions across a wide range of industries. By combining deep domain expertise with modern technologies, we help businesses improve efficiency, drive innovation, and achieve long-term digital success."
          sliderData={JSON_DATA.IndustriesServe}
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/image/application-consulting-services-consultancy-approach.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <HireDeveloper
          heading="Hire App Development Consulting to success"
          text="Looking for incredible mobile applications with modernized technical solutions? You have come to the absolute right platform “Comfygen”, where the highly skilled and years of experienced mobile app developers. "
          text1=" "
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-consulting-img.webp"
          imageAlt="hire-developer"
        />
        <LatestTechnology
          heading="Adopting the Latest Technology Trends in App Development"
          subheading="Comfygen is widely known for its extensive knowledge of various technologies essential for application consulting services. Let's delve into a detailed analysis, highlighting crucial aspects:"
          techData={JSON_DATA.technologyData}
        />
        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />

        <ClientStories/>
        <Faq
          faqData={JSON_DATA.Frequently}
          title=""
        />
        {/* <FormSec /> */}
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
