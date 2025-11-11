import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";
import JSON_DATA from "./json/cryptotoken.json";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import WhyChoose from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import Faq from "../components/Faq";
import CallToAction from "../components/CallToAction";
import TechStack from "../components/TechStack";
import HireDeveloper from "../components/HireDeveloper";
import ConsultancyApproach from "../components/ConsultancyApproach";
import CardItem from "../components/CardItem";
import HeroSectionForAllPages from "../componentsnew/HeroSectionForAllPages";
import ClientTestimonials from "../components/ClientTestimonials";
import ProcessSection from "../componentsnew/ProcessSection";
import ServicesSection from "../componentsnew/ServicesSection";
import Slider from "../components/Slider";
import Features from "../components/Features";
import Trending from "../components/Trending";


const Header = dynamic(() => import("../components/Header"), {
  loading: () => <p>Loading...</p>,
});


const NewSection = dynamic(() => import("../components/NewSection"), {
  loading: () => <p>Loading...</p>,
});
const ContactFromCenter = dynamic(
  () => import("../components/ContactFromCenter"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const defaultTestimonials = [
  {
    text: "Comfygen developed a secure, scalable token on the Solana blockchain that perfectly matched our project goals. Their expert guidance and efficient delivery helped us launch on time.",
    name: "Arjun Patel",
    title: "India",
    rating: 5,
  },
  {
    text: "Their multi-token development approach gave us the flexibility we needed. The team’s transparency and round-the-clock support made the process seamless. Highly recommend!",
    name: "Sophie Laurent",
    title: "France",
    rating: 5,
  },
  {
    text: "We trusted Comfygen with our complex DeFi token launch. Their smart contract expertise and rigorous quality assurance ensured a secure, bug-free product.",
    name: "Carlos Mendoza",
    title: "Mexico",
    rating: 5,
  },
  {
    text: "Comfygen’s token development team brought innovative features like cross-chain compatibility and automated audits to our project, which boosted user trust and adoption.",
    name: "Emily Johnson",
    title: "USA",
    rating: 5,
  },
  {
    text: "From concept to deployment, Comfygen delivered an outstanding token tailored to our needs. Their experienced developers and transparent process were critical to our success.",
    name: "Liam O’Connor",
    title: "Ireland",
    rating: 5,
  },
];




const Arena = [
  {
    num: "1",
    title: "Unlock New Revenue Streams",
    decs: "Crypto tokens enable businesses to create innovative financial models such as Initial Coin Offerings (ICOs), Security Token Offerings (STOs), and tokenized assets. This allows companies to raise capital efficiently while offering investors new avenues for growth."
  },
  {
    num: "2",
    title: "Enhance User Engagement and Loyalty",
    decs: "Tokens can be integrated into loyalty programs and reward systems, incentivizing user participation and retention. This creates a dynamic ecosystem where users are actively involved and benefit directly from the platform’s growth."
  },
  {
    num: "3",
    title: "Decentralization and Transparency",
    decs: "Blockchain-powered tokens operate on decentralized networks, offering enhanced security, immutability, and transparency. This builds greater trust among users and investors, critical factors for long-term success."
  },
  {
    num: "4",
    title: "Access to Global Markets",
    decs: "Tokens transcend geographical barriers, providing seamless access to a global audience. This allows startups and established firms alike to expand their reach and tap into diverse markets without the limitations of traditional financial systems."
  },
  {
    num: "5",
    title: "Tailored Utility and Flexibility",
    decs: "Whether you need utility tokens for platform access, governance tokens for decentralized decision-making, or security tokens representing real-world assets, crypto token development offers customizable solutions to meet specific business goals."
  },
  {
    num: "6",
    title: "Future-Proofing Your Business",
    decs: "With blockchain integration and crypto adoption on the rise, investing in token development positions your business at the forefront of innovation. This proactive approach ensures adaptability as the digital economy evolves."
  }
];



export default function Ecommerce(props) {
  let { initialData } = props;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is crypto token development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Crypto token development is the process of creating digital tokens on a blockchain network like Ethereum, TRON, or Binance Smart Chain. These tokens can represent assets, utilities, or digital currencies used in ICOs, DeFi platforms, and more."
        }
      },
      {
        "@type": "Question",
        "name": "How do I create a blockchain token?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can create a blockchain token by choosing a blockchain platform (like Ethereum or BSC), defining the token standards (ERC20, BEP20), and deploying smart contracts with the help of a crypto token development company."
        }
      },
      {
        "@type": "Question",
        "name": "How are cryptocurrency tokens generated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cryptocurrency tokens are generated by writing and deploying a smart contract on a blockchain network. Developers define the token’s supply, functionality, and features during this process."
        }
      },
      {
        "@type": "Question",
        "name": "How are crypto coins and tokens developed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Crypto coins require building an independent blockchain, while tokens are developed on existing blockchains like Ethereum. Developers write code to define the coin or token’s rules and deploy it via smart contracts."
        }
      },
      {
        "@type": "Question",
        "name": "How to build a secure token system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A secure token system is built by coding smart contracts, auditing them thoroughly, and deploying them on secure and reliable blockchain platforms like Ethereum or Binance Smart Chain."
        }
      },
      {
        "@type": "Question",
        "name": "Is creating a blockchain token profitable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, creating a blockchain token can be profitable, especially for fundraising (ICOs), DeFi projects, or launching utility tokens that offer unique business benefits. Profitability depends on token demand and utility."
        }
      },
      {
        "@type": "Question",
        "name": "Can I create a crypto token free of cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can technically create a crypto token at little to no cost on test networks. However, deploying tokens on the mainnet and ensuring security requires blockchain development expertise and transaction fees."
        }
      },
      {
        "@type": "Question",
        "name": "What is an NFT token in crypto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An NFT (Non-Fungible Token) is a unique digital asset that represents ownership of a specific item, like artwork or music, on the blockchain. Unlike cryptocurrencies, NFTs are not interchangeable."
        }
      },
      {
        "@type": "Question",
        "name": "How do digital tokens work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital tokens work by leveraging blockchain technology. They are managed by smart contracts and can represent assets, provide access to services, or function as digital currencies within decentralized platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Can I create my own crypto coin or token?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can create your own crypto coin by developing a blockchain or creating a token using platforms like Ethereum, BSC, or TRON. Hiring a crypto token development service ensures efficiency and security."
        }
      },
      {
        "@type": "Question",
        "name": "Which cryptocurrency token is the best?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best cryptocurrency token depends on your goals. Popular tokens include Ethereum (ETH), Binance Coin (BNB), and stablecoins like USDT. For NFTs and DeFi, ERC20 and BEP20 tokens are widely used."
        }
      },
      {
        "@type": "Question",
        "name": "How to make a custom crypto token?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can make a custom crypto token by defining its purpose, selecting a blockchain platform (Ethereum, TRON), coding the token’s smart contract, and deploying it with the help of a crypto token developer."
        }
      },
      {

        "@type": "Question",
        "name": "Which cryptocurrency will boom in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Predictions suggest that Ethereum, Solana, and Polkadot could perform well in 2025 due to their technological innovations. Always conduct thorough research before investing."
        }
      },
      {
        "@type": "Question",
        "name": "What are the top 10 altcoins to invest in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The top 10 altcoins (as of 2025 predictions) often include Ethereum, Solana, Cardano, Polkadot, Chainlink, Avalanche, Polygon, Uniswap, Aave, and Cosmos. Markets can fluctuate, so research is key."
        }
      },
      {
        "@type": "Question",
        "name": "What cryptocurrency coin does Elon Musk own?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Elon Musk has publicly endorsed and reportedly owns Bitcoin (BTC), Dogecoin (DOGE), and Ethereum (ETH). His tweets and public statements often influence crypto market trends."
        }
      }
    ]
  };

  const jsonLdData = [
    

    {
      "@context": "https://schema.org",
      "@type": "PostalAddress",
      "streetAddress": "Rhederstraße 34",
      "addressLocality": "Euskirchen",
      "postalCode": "53881",
      "addressCountry": "Germany"
    },


    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Token Development Service",
      "provider": {
        "@type": "Organization",
        "name": "Comfygen Technologies",
        "url": "https://www.comfygen.com/"
      },
      "description": "Comfygen offers secure, scalable, and customizable crypto token development services on Ethereum, BNB Chain, Polygon, Solana, and more. We create utility, security, and DeFi tokens with smart contract integration and audit-ready architecture.",
      "url": "https://www.comfygen.com/crypto-token-development-company ",
      "mainEntityOfPage": "https://www.comfygen.com/crypto-token-development-company ",
      "areaServed": "Global",
      "serviceType": [
        "Crypto Token Development",
        "Utility Token Development",
        "Security Token Development",
        "DeFi Token Development",
        "Custom Blockchain Token Solutions"
      ],
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Comfygen Technologies",
      "image": "https://www.comfygen.com/svg/Logo1.svg",
      "@id": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "telephone": "+91-958-786-7258",
      "priceRange": "$",
      "address": [{
        "@type": "PostalAddress",
        "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
        "addressLocality": "Jaipur",
        "postalCode": "302006",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Rhederstraße 34",
        "addressLocality": "Euskirchen",
        "postalCode": "53881",
        "addressCountry": "Germany"
      }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies",
        "https://www.comfygen.com/"
      ]

    },

    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Comfygen Technologies",
      "url": "https://www.comfygen.com/",
      "logo": "https://www.comfygen.com/svg/Logo1.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "telephone": "+91 9587867258",
        "email": "sales@comfygen.com",
        "areaServed": ["IN", "US", "CA", "GB", "GER"],

        "availableLanguage": "en, in"
      },
      "sameAs": [
        "https://www.facebook.com/comfygen.technologies",
        "https://x.com/Comfygen_Tech",
        "https://www.instagram.com/comfygen_technologies",
        "https://www.linkedin.com/company/comfygen-technologies"
      ]
    },

    {
      "@context": "http://www.schema.org",
      "@type": "Product",
      "brand": "Comfygen Technologies",
      "name": "Crypto Token Development Company | Custom Blockchain Token Solutions",
      "image": "https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-about.webp",
      "description": "Comfygen is a leading crypto token development company specializing in secure, scalable, and customizable blockchain token solutions. We develop utility tokens, security tokens, DeFi tokens, and NFT tokens on Ethereum, BNB Chain, Polygon, Solana, and more for startups and enterprises.",
      "url": "https://www.comfygen.com/crypto-token-development-company ",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "557"
      }
    },

    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.comfygen.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blockchain Development",
          "item": "https://www.comfygen.com/blockchain-development "
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Crypto Token Development",
          "item": "https://www.comfygen.com/crypto-token-development-company "
        }
      ]
    }

  ];
  return (
    <>
      <Head>
        <title>Token Development Company | Custom Crypto Token Creation Service</title>
        <meta
          name="description"
          content="Comfygen offers professional token development services for startups and enterprises. Create ERC20, BEP20, or custom blockchain tokens with full security, scalability, and exchange-ready integration."
        />

        <meta name="keywords" content="Crypto Token Development, Utility Token Development, Security Token Development, DeFi Token Development, Custom Blockchain Token Solutions, Blockchain Token Development Company, Token Creation Services, Cryptocurrency Token Development, Tokenomics Development, Smart Contract Token Development, ERC20 Token Development, BEP20 Token Development" />


        {/* <!-- Canonical Tag --> */}
        <link rel="canonical" href="https://www.comfygen.com/crypto-token-development-company" />


        <meta name="apple-mobile-web-app-title" content="Token Development" />

        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Token Development Company | Custom Token Creation Services" />
        <meta name="twitter:description" content=" Launch your own crypto token with Comfygen. We build secure, scalable, and audited tokens on Ethereum, BNB, Polygon, and more. Get full blockchain integration and expert support." />
        <meta name="twitter:image" content="https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-og.webp" />
        <meta name="twitter:site" content="@Comfygen_Tech" />


        {/* <!-- Facebook Meta --> */}
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-og.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-og.webp" />
        <meta property="og:image:alt" content="Crypto Token Development Company" />
        <meta property="og:url" content="https://www.comfygen.com/crypto-token-development-company" />
        <meta property="og:title" content="Crypto Token Development | Secure, Scalable & Custom Solutions" />
        <meta property="og: description" content=" Launch your own crypto token with Comfygen. We offer secure, scalable, and audit-ready token development on Ethereum, BNB Chain, Polygon, and other leading blockchains." />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

      </Head>


      {/* <LazyLoad height={80} offset={100}> */}
      <Header />
      {/* </LazyLoad> */}
      <div className="overflow-hidden pt-20">


        <HeroSectionForAllPages
          heading="Crypto Token Development Company"
          ptag="Are you searching top-notch crypto token development company to develop your own token for businesses and startups? Our expert blockchain developers help you design, deploy, and scale your token on top blockchain networks like Ethereum, Binance Smart Chain, Polygon, and more."
          li1="Custom Token Solutions"
          li2="Multi-Blockchain Expertise"
          li3="Security & Compliance"
          li4="End-to-End Support"
          li5="  Global Delivery (India | USA | UAE)"
          btnName="Talk With Expert"
          btnLink="/contact-us"
          openModal={openModal}
          talkToExpertModal={talkToExpertModal}
          setTalkToExpertModal={setTalkToExpertModal}
          closeModal={closeModal}
          bgImage="https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-hero.webp"
        />
        {/* <NewSection NewSection={JSON_DATA.NewSections} /> */}

        <AboutSection
          title="About Company"
          heading="Why Businesses Are Investing in Token Development"
          description1="Businesses all over the world want to develop their own crypto token and are looking for best token development company because a token development solution opens new revenue streams, improves customer engagement, and decentralized innovation. Tokens can represent ownership, access, or rewards, allowing companies to create ecosystems that incentivize participation and loyalty."
          description2=" well-developed and designed token can power crowdfunding through ICOs, IDOs, or STOs, streamline transactions within a platform, and also enable governance through voting mechanisms. By taking advantage of blockchain’s transparency and security, businesses reduce reliance on old intermediaries while increasing trust with users."
          points={[]}
          imageSrc="https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-about.webp"
          link="/about-us"
          linkText="Explore More"
        />
        <ContactFromCenter />
        <ServicesSection
          servicesData={JSON_DATA.servicesData}
          heading="Our Token Development Services"
          subtitle="Exploring the token development service for businesses & startups. Comfygen, a top-rated token development service provider, provides its services to cryptocurrency investors worldwide.  Whether you’re launching a new cryptocurrency, powering a DeFi ecosystem, or creating NFT-based assets."
        />

        <CallToAction
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          heading="Boost Your Crypto Development By Launching Quality Tokens!"
          text="Create tokens on the Trending Blockchain Platforms to increase your business reach in the crypto market."
          buttonText="Get Started"
          buttonLink="/contact-us"

          imageAlt="Get in touch now."
        />

        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/comfygen-images/crypto-token-development-company-new/crypto-token-development-company-feature.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <CardItem
          heading="Our Exclusive Token Development Solutions"
          subheading="Next-generation crypto token development Solution designed for startups, enterprises, and blockchain innovators. From NFT creation to tokenized assets, we build secure, scalable, and regulation-ready tokens that empower digital economies. Our end-to-end Token Development Solutions ensure every token is verifiable, traceable, and easy to integrate into your ecosystem."
          techData={JSON_DATA.cardData2}

        />
        <Slider
          projects={JSON_DATA.portfoliodata}
          heading="Our Token Development Portfolio"
          description="Our portfolio showcases a diverse range of successful token projects built across major blockchain networks. From <a href='https://www.comfygen.com/defi-development-company' class='text-blue-500 font-semibold'>DeFi</a> and NFT tokens to security and governance tokens, we’ve helped startups and enterprises launch secure, high-performing crypto assets that drive real value."
        />

        <section className="py-8">
          <Features
            featuresData={JSON_DATA.featuresData}
            grid={4}
            heading="Various ERC Utility Token Development"
            description="Our ERC Utility Token Development Services include everything from fungible to non-fungible and multi-token development systems. Each token is built with secure smart contracts, low gas fees, and full compatibility with leading wallets, exchanges, and <a href='https://www.comfygen.com/dapp-development-company' class='text-blue-500 font-semibold'>dApps</a>. Whether you’re launching a DeFi app, <a href='https://www.comfygen.com/nft-marketplace-development-company' class='text-blue-500 font-semibold'>NFT marketplace</a>, or gaming platform, we create scalable token architectures that run flawlessly on Ethereum and other EVM-compatible networks."

          />
        </section>

        <section className="py-8">
          <Trending
            trendingData={JSON_DATA.trendingData}
            heading="Leading Blockchain Networks for Token Development"
          />
        </section>

        <ProcessSection
          title="Our End-to-End Token Development Process"
          description="Comfygen top-rated token development company that turns your token development idea into a fully functional blockchain asset. Each step is handled by Blockchain development experts who focus on precision, scalability, and long-term sustainability, so your token doesn’t just launch, it lasts."
          processSlides={JSON_DATA.Processs} />


        <div className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1] mt-8 rounded-sm">
          <section className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-4">
              <div className="flex flex-col justify-center text-center ">
                <h2 className=" py-4 text-[#fff] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
                  Why Global Brands Trust Comfygen for Crypto Token Development
                </h2>
                <p className="text-base text-white">
                  In a fast-evolving digital economy, trust and technical excellence are non-negotiable. At Comfygen, we’ve earned the confidence of global brands by delivering future-ready token development.
                </p>
              </div>
              <div className="grid gap-10 py-10 text-left lg:grid-cols-3 md:grid-cols-2 xl:gap-10">
                {JSON_DATA.Develop.map((elem) => {
                  const { title, img, decs } = elem;
                  return (
                    <div className="p-8 space-y-2 bg-[#fff] cursor-pointer rounded-2xl">
                      <div className="flex items-center justify-center bg-[#5556D1]/20 w-16 h-16 p-3 rounded-lg">
                        <Image
                          className="object-cover"
                          src={img}
                          alt={title}
                          width={60}
                          height={60}
                        />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] ">
                        {title}
                      </h3>
                      <p className="font-medium text-black break-all line-clamp-6 group-hover:text-white">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <section className="mt-8">
          <TechStack
            title="Our Crypto Token Development Technology Stack"
            description="We use advanced blockchain tools and platforms to build secure, scalable crypto tokens. Our tech stack supports everything from simple utility tokens to complex DeFi ecosystems with speed, flexibility, and reliability."
          />
        </section>

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />



        <HireDeveloper
          heading="Hire Token Developers"
          text="Work with skilled blockchain experts to build and launch your crypto token. From smart contracts to deployment, our team handles everything with precision and speed."
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
          listItems={[
            "<a href='https://www.comfygen.com/blockchain-development' class='underline font-semibold'>Blockchain development experts</a>",
            "Fast, secure development",
            "Multi-chain experience",
            "Full project support"
          ]}
        />
        <ClientTestimonials heading="What Our Clients Say" testimonials={defaultTestimonials} />

        <Faq
          faqData={JSON_DATA.Frequently}
          title=""
        />
      </div>
    </>
  );
}
