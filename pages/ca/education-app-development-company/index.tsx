import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import {
  IconBadgeVr,
  IconBook,
  IconBookUpload,
  IconBrandAsana,
  IconBriefcase,
  IconCalendarEvent,
  IconCode,
  IconCrop11,
  IconDevices,
  IconDevicesQuestion,
  IconFirstAidKit,
  IconLanguage,
  IconMath,
  IconMoodKid,
  IconSchool,
  IconVideo,
  IconWorldDollar,
  IconWorldWww,
} from "@tabler/icons-react";

import JSON_DATA from "./json/applicationConsulting.json";
import { IconTools } from "@tabler/icons-react";

import { MdControlPointDuplicate } from "react-icons/md";

import Header from "../../../components/Newcomponet/layout/Header";
import HeroSectionForAllPages from "../../../components/Newcomponet/SectionCompoent/HeroSectionForAllPages";

import dynamic from "next/dynamic";
import Milestones from "../../../components/Newcomponet/comman/Milestones";

const loader = () => <div className="h-96 bg-gray-100 animate-pulse" />;

const AboutSection = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/AboutSection"),
  { loading: loader, ssr: true }
);

const ServicesSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ServicesSec"),
  { loading: loader, ssr: true }
);

const SolutionSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Solution"),
  { loading: loader, ssr: true }
);

const Features = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Features"),
  { loading: loader, ssr: true }
);

const ConsultancyApproach = dynamic(
  () =>
    import("../../../components/Newcomponet/SectionCompoent/ConsultancyApproach"),
  { loading: loader, ssr: true }
);

const TechStack = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/TechStack"),
  { loading: loader, ssr: true }
);

const ProcessSec = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/ProcessSec"),
  { loading: loader, ssr: true }
);

const Portfolio = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Portfolio"),
  { loading: loader, ssr: true }
);

const WhyChoose = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/WhyChooseUs"),
  { loading: loader, ssr: true }
);

const HireDeveloper = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/HireDeveloper"),
  { loading: loader, ssr: true }
);

const CallToAction = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/CallToAction"),
  { loading: loader, ssr: true }
);

const Faq = dynamic(
  () => import("../../../components/Newcomponet/SectionCompoent/Faq"),
  { loading: loader, ssr: true }
);

const Process = [
  {
    title: "Requirement Analysis",
    description:
      "We begin by understanding your vision, target audience, and business goals. Our team conducts in-depth research to define app features, functionality, and technology stack. As a custom education app development company, we ensure the app aligns with industry standards and provides a seamless learning experience.",
  },
  {
    title: "UI/UX Design",
    description:
      "Our expert designers craft intuitive, visually appealing, and engaging user interfaces to enhance the learning experience. We focus on accessibility, easy navigation, and responsive design, ensuring a smooth interaction for students, educators, and administrators. Our goal is to create an immersive education app UI/UX design that keeps users engaged.",
  },
  {
    title: "App Development & Integration",
    description:
      "Using the latest technologies, we develop scalable and high-performing educational applications. Our Education App Development services include seamless integration of AI, gamification, real-time collaboration tools, and third-party APIs. Whether web-based or mobile-first, our custom solutions ensure reliability, security, and efficiency in delivering quality education.",
  },
  {
    title: " Testing & QA",
    description:
      "Before deployment, our team conducts rigorous testing to ensure a flawless user experience. We perform functional, performance, and security testing to identify and fix any issues. Our education app quality assurance process guarantees that your application meets industry compliance and runs smoothly on all platforms and devices.",
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Once your app is ready, we ensure a hassle-free deployment on app stores or custom servers. Our post-launch support includes regular updates, security patches, and performance optimization. As a leading education app development company, we provide ongoing maintenance to keep your app running efficiently and securely.",
  },
  {
    title: "Content & Course Management",
    description:
      "We help integrate and manage educational content efficiently, ensuring seamless course organization, assessments, and multimedia support. Our custom educational app development services allow instructors to update content dynamically, track learner progress, and personalize courses for an optimized learning experience.",
  },
  {
    title: "Performance Optimization & Scaling",
    description:
      "As your user base grows, we ensure that your app remains fast, responsive, and scalable. Our education app development services include optimizing server infrastructure, enhancing app speed, and integrating cloud-based solutions for seamless scalability. We future-proof your application for long-term success.",
  },
];

const technologyData = [
  {
    img: <IconBook stroke={1.5} className="w-12 h-12" />,
    title: "Educational Mobile App Development",
    desc: "Educational mobile apps make learning opportunities available to students of all ages. These are apps that make it possible for students to learn through their phones. An educational mobile app can be installed on a smartphone or a tablet and used to access the internet and learn resources. Our team at Comfygen takes up customized approaches for educational mobile app development that create highly successful educational apps.",
  },
  {
    img: <IconDevices stroke={1.5} className="w-12 h-12" />,
    title: "Educational Wearable Apps Development",
    desc: "Our team of professional software developers and testers also specializes in creating educational apps that can be installed on wearable devices and mobile gadgets like smartwatches and tags. We help you create wearable apps that will send the students and teachers reminders related to the classes, practice sessions, and other aspects of studies, such as tests. These also help monitor student activity inside a classroom.",
  },
  {
    img: <IconWorldWww stroke={1.5} className="w-12 h-12" />,
    title: "Educational Web App Development",
    desc: "Our team of professionals also recognizes how important it is to create apps that can be accessed from any device. With the development of web educational apps, we ensure that students can easily access your services and study material through just a browser. Apart from full-fledged mobile apps, we also specialize in making web apps that are easy to use and accessible for students from anywhere.",
  },
  {
    img: <IconVideo stroke={1.5} className="w-12 h-12" />,
    title: "Remote Learning Apps",
    desc: "Our team uses its skills and technical knowledge to create applications that come with remotely enabled systems for learning and teaching. We create apps that have remote learning access so students can learn from anywhere and teachers can manage their classrooms from anywhere in the world. We bring teachers and students closer with our advanced remote learning systems.",
  },
  {
    img: <IconTools stroke={1.5} className="w-12 h-12" />,
    title: "Educational Product Development",
    desc: "Apart from software development and the creation of digital products in the educational ecosystem, our team also specializes in creating physical products and new tools that can be coupled with educational apps and classroom environments for better learning opportunities. Our team conducts product research and creates products that are relevant to your educational institution and ecosystem.",
  },
  {
    img: <IconCrop11 stroke={1.5} className="w-12 h-12" />,
    title: "Educational CRM Solution Development",
    desc: "When we create educational mobile apps, we also integrate CRM solutions into them so that teachers can manage their peer relationships, internal workflows, and communication with the parents easily. The CRM solutions ensure that teachers, students, and parents are well connected through the application and can share feedback about the learning processes. We have great CRM solutions that can easily integrate into a new or existing educational application.",
  },
  {
    img: <IconBrandAsana stroke={1.5} className="w-12 h-12" />,
    title: "Educational Management App Development",
    desc: "Comfygen offers development services for educational management applications. We create educational management applications for large-scale school and college chains so that the internal administration and processes can be streamlined and fully managed through an accessible app. We also create office management apps that are specifically designed for the educational sector so that payroll, attendance, and administration of the school staff can be easily managed.",
  },
  {
    img: <IconBookUpload stroke={1.5} className="w-12 h-12" />,
    title: "K-12 Educational App Development",
    desc: "As a leading Education App Development Company, we develop custom K-12 educational apps that provide interactive learning experiences for students from kindergarten to high school. Our custom Education App Development services include curriculum-based lessons, animated storytelling, quizzes, and real-time assessments to enhance knowledge retention. Designed for schools, tutors, and EdTech startups, our solutions ensure personalized learning, allowing students to study at their own pace while enabling teachers to track progress efficiently.",
  },
  {
    img: <IconLanguage stroke={1.5} className="w-12 h-12" />,
    title: "Language Learning App Development",
    desc: "Our language learning apps are designed to make mastering new languages fun and efficient. By integrating AI-powered speech recognition, real-time translation, and interactive exercises, we create solutions that cater to learners of all ages. Whether it's self-paced learning or instructor-led courses, our apps support multiple languages and incorporate gamified elements to keep users motivated while enhancing their pronunciation, vocabulary, and comprehension skills.",
  },
  {
    img: <IconMoodKid stroke={1.5} className="w-12 h-12" />,
    title: "Kids' Educational App Development",
    desc: "Understanding the need for fun and interactive learning for young minds, we create kids' educational apps with engaging animations, storytelling, and interactive exercises. Our apps are designed to enhance early learning skills, cognitive development, and problem-solving abilities. By incorporating gamification and adaptive learning techniques, we make education enjoyable while ensuring knowledge retention in young learners.",
  },
  {
    img: <IconSchool stroke={1.5} className="w-12 h-12" />,
    title: "School & College Management App Development",
    desc: "We develop school and college management apps that assist educational institutions in handling administrative tasks efficiently. These apps enable automation of student enrollment, attendance tracking, timetable management, exam scheduling, and staff coordination. By integrating cloud-based solutions, our applications ensure seamless data management while improving communication between teachers, students, and parents.",
  },
  {
    img: <IconDevicesQuestion stroke={1.5} className="w-12 h-12" />,
    title: "Exam Preparation App Development",
    desc: "Our exam preparation apps are designed to help students prepare for competitive exams with confidence. We integrate features such as mock tests, practice quizzes, AI-powered analytics, and personalized study plans to enhance exam readiness. Whether for standardized tests, entrance exams, or certification courses, our solutions provide real-time progress tracking and performance insights, ensuring effective exam preparation.",
  },
  {
    img: <IconBadgeVr stroke={1.5} className="w-12 h-12" />,
    title: "AR/VR Educational App Development",
    desc: "We leverage Augmented Reality (AR) and Virtual Reality (VR) technologies to create immersive educational experiences. Our AR/VR educational apps transform traditional learning by offering virtual lab simulations, 3D interactive models, and experiential learning environments. These applications enhance understanding in subjects like science, history, and mathematics by making complex concepts more visual and engaging.",
  },
  {
    img: <IconCode stroke={1.5} className="w-12 h-12" />,
    title: "Coding & STEM Learning App Development",
    desc: "Our coding and STEM learning apps are designed to introduce students to programming, robotics, and scientific problem-solving. Through interactive coding lessons, real-world projects, and AI-driven tutors, we help learners grasp the fundamentals of coding and STEM subjects. These applications encourage logical thinking, creativity, and innovation, making technical education more accessible and engaging for students of all ages.",
  },
  {
    img: <IconMath stroke={1.5} className="w-12 h-12" />,
    title: "Math Problem Solving & Calculation App Development",
    desc: "We develop math learning apps that simplify complex mathematical concepts through AI-powered problem-solving tools, step-by-step solutions, and interactive practice exercises. Whether for elementary-level arithmetic or advanced calculus, our apps offer guided learning with automated error detection and instant feedback, helping students improve their problem-solving skills efficiently.",
  },
  {
    img: <IconWorldDollar stroke={1.5} className="w-12 h-12" />,
    title: "Financial & Business Education App Development",
    desc: "Our financial and business education apps provide users with essential knowledge about money management, investing, and entrepreneurship. Through interactive courses, real-world case studies, and financial simulations, learners can gain practical financial literacy skills. We design these apps for students, professionals, and businesses looking to enhance their financial decision-making abilities.",
  },
  {
    img: <IconFirstAidKit stroke={1.5} className="w-12 h-12" />,
    title: "Health Educational App Development",
    desc: "We create health educational apps that promote awareness about fitness, mental well-being, nutrition, and medical education. These apps provide engaging content, expert advice, and real-time health tracking to educate users about maintaining a healthy lifestyle. For medical students and healthcare professionals, we offer solutions that include anatomy learning, disease awareness, and first-aid training modules.",
  },
  {
    img: <IconCalendarEvent stroke={1.5} className="w-12 h-12" />,
    title: "Gamified Educational App Development",
    desc: "Our gamified educational apps enhance user engagement by integrating game mechanics into the learning process. These applications use points, leaderboards, challenges, and rewards to make learning more interactive and enjoyable. By combining education with entertainment, we ensure improved knowledge retention and motivation for learners of all age groups.",
  },
  {
    img: <IconBriefcase stroke={1.5} className="w-12 h-12" />,
    title: "Corporate Training App Development",
    desc: "We develop corporate training apps that help businesses train employees efficiently. These applications provide structured learning modules, skill development courses, and interactive assessments to enhance workforce knowledge. Our corporate training solutions include real-time progress tracking, certification management, and AI-powered recommendations, making learning more accessible and effective for employees across industries.",
  },
];

export default function Mobile(props) {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Comfygen",
    image: "https://www.comfygen.com/svg/Logo1.svg",
    "@id": "Comfygen",
    url: "https://www.comfygen.com/",
    telephone: "+91-958-786-7258",
    priceRange: "$",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar",
        addressLocality: "Jaipur",
        postalCode: "302006",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "40 Tuxedo Ct, Toronto, ON M1G 3S7",
        addressLocality: "Toronto",
        postalCode: "M1G3S7",
        addressCountry: "Canada",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/comfygen",
      "https://twitter.com/comfygentech",
      "https://www.instagram.com/comfygen_/?hl=en",
      "https://www.youtube.com/@ComfygenBusiness",
      "https://www.linkedin.com/company/comfygen-private-limited",
      "https://in.pinterest.com/comfygenpvt/",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you have expertise in creating educational MVPs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our team specializes in educational MVP development. We help clients transform their MVP ideas into market-ready solutions.",
        },
      },
      {
        "@type": "Question",
        name: "What is the usual time taken to develop an educational app MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Development time varies between two months to several months depending on project complexity and required features.",
        },
      },
      {
        "@type": "Question",
        name: "What emerging technologies do you use in educational mobile app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use AI, ML, predictive analytics, cloud integration, and blockchain to enhance educational mobile apps.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of building an educational app for mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cost varies based on required resources and time. We offer flexible and transparent pricing for our educational app development services.",
        },
      },
      {
        "@type": "Question",
        name: "Do you conduct quality assurance testing on educational apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we ensure thorough testing of educational apps for security and quality assurance before deployment.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
         Best Education App Development Company in India & USA

        </title>
        <meta
          name="description"
          content="Education app development company in India & USA offering custom eLearning, LMS, and digital education solutions to build secure, scalable, and engaging learning apps."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/ca/education-app-development-company"
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
        <meta name="apple-mobile-web-app-title" content="My App" />
        <meta name="author" content="Comfygen" />
        <meta name="web-author" content="Comfygen" />
        <meta name="reply-to" content="sales@comfygen.com" />
        <meta name="rights" content="Copyright Comfygen Private Limited" />
        <meta name="copyright" content="Comfygen Private Limited" />
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
        <meta
          name="keywords"
          content="E-Learning App Development, Learning Management System (LMS) Development, AI-Based Educational App Development, Online Course Marketplace Development, Educational App Testing Services, Educational Mobile App Development, Language Learning App Development, Kids' Educational App Development, Exam Preparation App Development, AR/VR Educational App Development"
        />
        <meta name="author" content="Company Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="og:title"
          content="On-Demand Educational App Development Company"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content="https://www.comfygen.com/ca/education-app-development-company"
        />
        <meta name="og:image" content="url" />
        <meta name="og:site_name" content="Comfygen Private Limited" />
        <meta
          name="og:description"
          content="Comfygen is a leading Educational app development company offering custom education app development services in Canada, USA, UK, and globally. Hire expert developers now!"
        />
        <meta name="fb:page_id" content="110909321596135" />
        <meta name="og:email" content="sales@comfygen.com" />
        <meta name="og:phone_number" content="+91-958-786-7258" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="On-Demand Educational App Development Company in Canada"
        />
        <meta
          name="twitter:description"
          content=" Comfygen is a leading Educational app development company offering custom education app development services in Canada, USA, UK, and globally. Hire expert developers now!"
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@comfygentech" />
        <meta property="og:image" content="add image URL" />
        <meta property="og:image:secure_url" content="Add img URL" />
        <meta property="og:image:alt" content="education app development" />
        <meta
          property="og:url"
          content="https://www.comfygen.com/ca/education-app-development-company"
        />
        <meta property="og:title" content="Education App Development Company" />
        <meta
          property="og:description"
          content="Comfygen is a top Educational app development company offering tailored Education app development services across Canada, USA, UK, and worldwide. Hire skilled developers today for custom, feature-rich EdTech solutions."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div className="">
        <Header />
      </div>
      <div className="overflow-hidden lg:pt-[110px]">
        <div className="lg:bg-center  bg-no-repeat bg-cover bg-left bg-[url('https://www.comfygen.com/herosection/education-app-development-company-hero-img.webp')]">
          <HeroSectionForAllPages
            heading="Education App Development Company in India & USA"
            ptag="Comfygen Technologies is a leading education app development company in India & USA, delivering innovative and scalable digital learning solutions for schools, universities, and EdTech startups. We design and develop feature-rich education apps including eLearning platforms, LMS solutions, virtual classrooms, and online assessment systems. Our expert developers leverage modern technologies, interactive UI/UX, and secure cloud infrastructure to enhance learner engagement and simplify teaching workflows. With a focus on performance, security, and scalability, Comfygen Technologies helps organizations transform traditional education into impactful digital learning experiences."
            li="Custom eLearning & Education App Development"
            li1="AI-Powered Learning & Smart Analytics"
            li2="Secure LMS, Virtual Classrooms & Assessments"
            li3="Scalable Apps for Schools, EdTech & Enterprises"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />
        </div>
        <Milestones/>

        <section className="lg:py-16 py-10 bg-[#F5F5F9]">
          <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
                Our Services Related to Educational App Development
              </h2>
              <p className="text-base text-center font-normal">
                As the most renowned educational app development company in
                Canada, we are offering a range of educational app
                development services to our clients. Our educational app
                development services are as follows
              </p>
            </div>
            <div className="">
              <ServicesSec servicesData={JSON_DATA.servicesData} />
            </div>
          </div>
        </section>

        <AboutSection
          title="About Company"
          heading="Best Custom Educational App Development Company in India"
          description1="Comfygen is India's leading custom educational app development company, offering expert solutions for edtech projects. With a proven track record of successfully delivering 200+ apps, our dedicated team specializes in rapid and customized educational app development."
          description2="We focus on creating innovative and impactful eLearning apps tailored to clients' needs. Our developed education apps enhance knowledge flow, making learning more engaging and efficient. By leveraging cutting-edge technology, we develop scalable solutions that transform education."
          description3="Partnering with Comfygen ensures a cost-effective and systematic development process. Our iterative feedback approach guarantees continuous improvements, resulting in a high-quality product. Get in touch today and turn your vision into a powerful educational app that reaches and benefits countless learners."
          imageSrc="https://www.comfygen.com/image/about-us-image.webp"
          link="/about-us"
          linkText="Explore More"
        />

        <SolutionSec
          heading="We Deliver On-demand Custom Educational App Development Solutions"
          subheading="Comfygen is one of the most renowned educational app development companies in Canada, and it also specializes in custom educational app development. Our team of education app developers, designers, and testers together make sure that you get the best possible customized educational app for your audience and your target market. Here are some of the top-notch custom educational applications that we create and offer to our client companies."
          techData={technologyData}
        />
        {/* <ContactFromCenter /> */}
        <div className="py-8">
          <Features
            heading="Supported Cricket Formats & Leagues for Live Streaming"
            description="Our cricket live streaming app development covers every major format and tournament, ensuring fans can follow matches in real time from anywhere in the world. Whether it’s high-profile international contests, domestic leagues, or women’s cricket, users get seamless access to live cricket matches, ball-by-ball commentary, player statistics, and real-time score updates."
            featuresData={JSON_DATA.featuresData}
            grid={3}
          />
        </div>

        <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868]/90 to-[#5556D1]/90 ">
          <div className="flex flex-col justify-center 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
            <h2 className="py-4 text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#fff]">
              Who Can Avail of our Educational Application Development Services?
            </h2>
            <p className="text-base text-white md:text-center text-justify tracking-tight">
              Our tuition app development services and solutions are open to all
              entrepreneurs who have an idea that can make it big in the edtech
              world but do not know where to start. If you have a general idea
              of the educational problem you want to solve and how to do it but
              lack the technical knowledge for it, then approach Comfygen and
              hire our educational app development services for your next
              project.{" "}
            </p>
            <p className="text-base text-white md:text-center text-justify tracking-tight">
              As one of the best educational app development companies in Canada,
              we help people and schools create something beneficial for
              students and teachers so that the educational process is smoother
              and more fruitful. Our eLearning application development solutions
              are adopted by teachers, schools, edtech thinkers, innovators, and
              existing application owners.{" "}
            </p>
            <p className="text-base text-white md:text-center text-justify tracking-tight">
              We have helped transform existing education systems into more
              advanced and highly effective, technically enabled learning
              environments that help students learn better. We create
              educational applications and tuition app development solutions for
              the following stakeholders.{" "}
            </p>
          </div>
          <div className="justify-between items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex flex-col-reverse lg:flex-row md:space-x-10 md:space-y-0  border-l-4 border-b-4 border-dotted p-4 ">
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-4xl font-bold text-[#fff] ">
                  Educational Apps for School and College
                </h3>
              </div>
              <p className="text-base text-white break w-full lg:w-[85%]">
                Comfygen creates educational apps that help complete
                administrative tasks within a school workflow. We help automate
                and semi-automate the school and college administrative tasks so
                that educational institutions can run more smoothly.
              </p>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title=" Educational Apps for School and College"
                alt=" Educational Apps for School and College"
                src="https://www.comfygen.com/img/educational-apps-for-school-and-college.svg"
                height={500}
                width={550}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0 border-r-4 border-b-4 border-dotted p-4">
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
              <Image
                className="rounded-md"
                title="Educational Apps for School Administration"
                alt="Educational Apps for School Administration"
                src="https://www.comfygen.com/img/educational-apps-for-school-administration.svg"
                height={400}
                width={550}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-4xl font-bold text-[#FFF] ">
                  Educational Apps for School Administration
                </h3>
              </div>
              <div>
                <p className="text-base text-white break">
                  We create efficient and high-performance apps for
                  administration management and internal workflow so that the
                  administrative departments of schools and colleges can work
                  smoothly with appropriate tools.
                </p>
                <ul className="text-white">
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Student information systems{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Student profile updation and
                    processing{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Attendance tracking for students
                    and staff
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Reports and analytics{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> School timetable management{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Assessment management and
                    scheduling{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Report card generation and
                    sharing{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Messages and internal
                    announcements{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="justify-between items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 flex flex-col-reverse lg:flex-row md:space-x-10 md:space-y-0  border-l-4 border-b-4 border-dotted p-4 ">
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-4xl font-bold text-[#fff] ">
                  Educational Apps for Teachers
                </h3>
              </div>
              <p className="text-base text-white break w-full lg:w-[85%]">
                Our team also creates educational apps for teachers so that they
                can manage their timetables, monitor student progress, and
                produce better learning outcomes. Here are some of the important
                features we include in educational apps for teachers.
              </p>
              <ul className="text-white">
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Lesson planning tools and digital
                  plan records{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Digital gradebook with
                  remarks{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Assignment management
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> All the assessments and quizzes
                  are in one place{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Interactive whiteboard for virtual
                  classes{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Communication tools for student
                  and parent feedback{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Parent meeting schedule
                  management{" "}
                </li>
                <li className="flex items-center gap-2">
                  {" "}
                  <MdControlPointDuplicate /> Learning resource library{" "}
                </li>
              </ul>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start pb-10 lg:pb-0">
              <Image
                className="rounded-md"
                title="Educational Apps for Teachers"
                alt=" Educational Apps for Teachers"
                src="https://www.comfygen.com/img/Rectangle 39826.svg"
                height={550}
                width={550}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
          </div>

          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 lg:flex lg:space-x-10 md:space-y-0 border-r-4 border-b-4 border-dotted p-4">
            <div className="flex justify-center w-full lg:w-1/2 lg:justify-start">
              <Image
                className="rounded-md"
                title="Educational Apps for Students "
                alt="Educational Apps for Students "
                src="https://www.comfygen.com/img/educational-apps-for-students.svg"
                height={400}
                width={550}
                loader={uploadcareLoader}
                unoptimized={true}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-4xl font-bold text-[#FFF] ">
                  Educational Apps for Students{" "}
                </h3>
              </div>
              <div>
                <p className="text-base text-white break">
                  In the present era, students are the most tech-savvy and use
                  the internet for learning. Taking this trend a step further,
                  we create educational applications that are highly beneficial
                  for students as they can learn from anywhere and indulge in
                  continuous learning. As education app developers in Canada, we
                  aim to use the application to improve learning standards for
                  students. Here are the advanced features that an educational
                  app might have in it for students.{" "}
                </p>
                <ul className="text-white">
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate />
                    Interactive lessons and tutorials{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Homework records and assignment
                    tracking
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate />
                    Quizzes and assignments for practice
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Multimedia learning content
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Gamified elements for easy
                    learning{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Customized learning paths{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Schedule tracking and
                    management{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdControlPointDuplicate /> Reminders for study{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ConsultancyApproach
          Head={JSON_DATA.consultancyHead}
          ItemData={JSON_DATA.consultancyData}
          imageSrc="https://www.comfygen.com/media/images/why-do-you-need-to-hire-our-android-app.webp"
          buttonText="Let’s Discuss"
          buttonLink="/contact-us"
        />
        <TechStack
          title="The TechStack We Use For Educational App Development"
          description="Our educational development services use an extensive collection of technical tools and frameworks for the management of EdTech app development. We provide our clients with the best quality developed education app product with the help of these top-notch tools and the most advanced technological stack. Some examples of the type of technology we use for educational app development are as follows-"
          filterCategory={["crypto"]}
        />
        <section className="bg-[#fff] lg:py-16 py-10">
          <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
            <div className="text-center">
              <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
                Our Working Methodology
              </h2>
              <p className="text-center text-base text-[#000]">
                At Comfygen, we follow a structured and efficient Education App
                Development process to deliver high-quality, scalable, and
                user-friendly educational applications. As a leading custom
                education app development company, we ensure seamless app
                development from ideation to deployment, focusing on innovation,
                performance, and user engagement.
              </p>
            </div>
            <ProcessSec processSlides={Process} />
          </div>
        </section>

        <section className="py-8">
          <Portfolio
            projects={JSON_DATA.portfoliodata}
            heading="Our Education Apps Portfolio"
            description="As a leading Education App Development Company, we have successfully delivered a wide range of custom education app development solutions tailored for diverse learning needs. Here are some of our top projects that showcase our expertise in Education App Development services"
          />
        </section>

        <WhyChoose
          title={JSON_DATA.pageData.title}
          description={JSON_DATA.pageData.description}
          mainCardData={JSON_DATA.pageData.mainCardData}
          gridData={JSON_DATA.pageData.gridData}
        />
        <HireDeveloper
          heading="Hire Our Educational App Development Experts for your Next Project"
          text="Transform your innovative ideas into impactful edtech solutions with our experienced educational app development experts. Specializing in creating unique and user-centric apps from scratch, we help you revolutionize the educational landscape while unlocking revenue-generating opportunities. Schedule a consultation with our team today to explore the possibilities and bring your vision to life!"
          buttonText="Hire Developer"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/hire-developer-img.webp"
          imageAlt="hire-developer"
        />
        <CallToAction
          heading="Why should you hire our educational app developers now?"
          text="Hire our educational app developers today and benefit from their expertise, dedication, and innovative approach to edtech solutions. Our highly trained and certified developers bring extensive experience to every project, ensuring timely delivery and adherence to milestones. With a commitment to staying ahead of industry trends, our team continuously upskills to integrate the latest technologies and best practices. Their collaborative attitude, positive work ethic, and focus on creating impactful educational apps make them the ideal choice for your next project."
          buttonText="Get in touch now"
          buttonLink="/contact-us"
          imageSrc="https://www.comfygen.com/image/future-of-technology.webp"
          imageAlt="Get in touch now."
        />
        {/* <FaqSection
          faqData={JSON_DATA.Frequently}
          title="Application Consulting Services"
        /> */}
        <Faq faqData={JSON_DATA.Frequently} title="" />
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
