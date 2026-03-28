
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./poker.json";
import Navbar from "../../components/Navbar";
import HeroSectionforHome from "../../components/HeroSectionforHome"
const Milestones = dynamic(() => import("../../components/Milestones"), {
  ssr: true,
});
const ServicesComponet = dynamic(() => import("../../components/ServicesSection/ServicesComponet"), {
  ssr: true,
});

const AboutComponent = dynamic(() => import("../../components/Abouts/AboutComponent"), {
  ssr: true,
});
const Solution = dynamic(() => import("../../components/Solution"), {
  ssr: true,
});

import GameCard from "../../components/GameCard"

const ProcesSection = dynamic(() => import("../../components/ProcesSection"), {
  ssr: true,
});

const WhyChooseSection = dynamic(() => import("../../components/WhyChooseSection"), {
  ssr: true,
});

const HireSection = dynamic(() => import("../../components/HireSection"), {
  ssr: true,
});

const FaqSection = dynamic(() => import("../../components/FaqSection"), {
  ssr: true,
});


const BlogSection = dynamic(
  () => import("../../components/BlogSection"),
  { ssr: true }
);


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Poker Game Development Services",
  "provider": {
    "@type": "Organization",
    "name": "Comfygen Technologies",
    "url": "https://www.comfygen.com/"
  },
  "description": "Looking for reliable poker game development? Comfygen offers custom poker game development services in India and the USA. Get feature-rich and secure poker apps tailored to your needs.",
  "url": "https://www.comfygen.com/poker-game-development",
  "mainEntityOfPage": "https://www.comfygen.com/poker-game-development",
  "areaServed": "Global",
  "serviceType": [
    "Blockchain-Based Poker Platform",
    "Mobile Poker Game Development",
    "Blockchain-Based Poker Platform",
    "Turnkey Poker Game Solutions"

  ],

  "sameAs": [
    "https://www.facebook.com/comfygen.technologies",
    "https://x.com/Comfygen_Tech",
    "https://www.instagram.com/comfygen_technologies",
    "https://www.linkedin.com/company/comfygen-technologies"

  ]
}


const breadCrum = {
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
    "name": "Game Development",
    "item": "https://www.comfygen.com/poker-game-development"
  }]
}

const faqSchema = {
  "@context": "https://schema.org/",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Is Poker Game App Development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Poker game app development is a process of developing game app interfaces for various mobile devices such as iOS and Android."
      }
    },
    {
      "@type": "Question",
      "name": "What Technologies Do You Use To Develop Poker Games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For the backend, we use Java, and for the database, we rely on MySQL and PostgreSQL. The front end, we use technologies like Vue, Flutter, React Native, JavaScript, Angular, etc."
      }
    },
    {
      "@type": "Question",
      "name": "Have You Ever Worked In Game Development Before?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have developed 1000+ games for a number of clients. YES, we do have specialized in poker game development as per requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How Much Does Poker Game App Development Cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Connect with our expert to know ballpark estimation. Besides, we provide poker game development services at pocket-friendly rates."
      }
    }
  ]
};

export default function PokerGame(props:any) {


  let { initialData } = props;
  
  return (
    <>
      <Head>
        <title>Poker Game Development Company in India and USA | Comfygen</title>
        <meta
          name="description"
          content="Comfygen is the No.1 poker game development company in India and the USA, offering customized poker game development services. Hire comfygen developers for scalable, secure, and engaging poker platforms."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/poker-game-development"
        />

        <link
          rel="canonical"
          href="https://www.comfygen.com/poker-game-development"
        />

        <meta
          name="robots"
          content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW"
        />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />

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

        <meta name="author" content="Comfygen Technologies" />
        <meta name="web-author" content="Comfygen Technologies" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

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

        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Technologies" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_DE" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />

        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top-Rated Poker Game Development Firm | India & USA

"
        />
        <meta
          name="twitter:description"
          content=" Comfygen offers cutting-edge poker game development in India and the USA. From concept to launch, our expert developers create dynamic, secure, and user-friendly poker experiences.
"
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="Poker Game Development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/poker-game-development"
        />
        <meta
          property="og:title"
          content="Real-Money Poker Game Development Company"
        />
        <meta
          property="og:description"
          content="Comfygen builds secure, real-money poker game platforms in India & the USA. Get customized poker games with payment gateway integration and anti-fraud systems. Launch your poker app today!

"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrum) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>


      <Navbar />
      <HeroSectionforHome herosection={JSON_DATA.Herosection} />
      <Milestones />
      <ServicesComponet servicesData={JSON_DATA.ServicesData} />
      <AboutComponent AboutData={JSON_DATA.AboutSection} />
      <Solution techData={JSON_DATA.PokerGame} />
      <GameCard GameCardData={JSON_DATA.GameCardData} />
      <Solution techData={JSON_DATA.Features} />
      <HireSection HireDeveloper={JSON_DATA.HireDeveloper} />
      <ProcesSection ProcessData={JSON_DATA.ProcessData} />
      <WhyChooseSection pageData={JSON_DATA.pageData} />
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
