import Head from 'next/head';
import ContactUs from "../../components/ContactUs"
import Navbar from '../../components/Navbar';

import ClientStories from '../../components/Newcomponet/SectionCompoent/ClientStories';
import ClientTestimonials from '../../components/TestimonialSection';
import PortfolioSlider from "../../components/Newcomponet/comman/PortfolioSlider";
import BlogSection from '../../components/BlogSection';

const customTestimonials = [
  {
    "text": "We hired Comfygen to build our eCommerce app. The design, performance, and support exceeded expectations. They’re a reliable partner for any serious brand looking to scale digitally.",
    "name": "Jessica Moore",
    "title": "Texas, USA"
  },
  {
    "text": "We needed a healthcare app for our hospital. Comfygen built a user-friendly, secure app that integrates with our systems. Excellent work from planning to deployment.",
    "name": "Ravi Deshmukh",
    "title": "Pune, India"
  },
  {
    "text": "Comfygen Technologies developed a robust telemedicine app for our hospital. Their team’s knowledge of healthcare compliance and patient data security truly impressed us. Highly recommended for any healthcare IT project!",
    "name": "Dr. Priya Sharma",
    "title": "India"
  },
  {
    "text": "We hired Comfygen to build a remote patient monitoring app, and they exceeded expectations. The app’s performance, design, and IoT integration have greatly improved our patient engagement",
    "name": "James Anderson",
    "title": "UK"
  },
  {
    "text": "Comfygen turned our vision into a fully functional grocery delivery app that customers love. Their team was responsive, skilled, and easy to work with. The app is fast, user-friendly, and full of features we needed.",
    "name": "Michael Carter",
    "title": "New York, USA"
  },
  {
    "text": "We hired Comfygen to build a grocery app for our chain of stores in Dubai, and they exceeded expectations. From UI design to deployment, everything was on point. Their expertise in real-time tracking and backend integration stood out.",
    "name": "Ayesha Khan",
    "title": "UAE"
  },
  {
    "text": "“Comfygen delivered an exceptional doctor appointment app for our clinic. The AI-driven scheduling and telemedicine features have greatly improved patient engagement and satisfaction. Their team was professional and responsive throughout the project.”",
    "name": "Dr. Riya Sharma ",
    "title": "India"
  },
  {
    "text": "“We hired Comfygen for our hospital’s appointment app in the USA, and the results exceeded our expectations. The app is secure, easy to use, and has streamlined our workflow. Patients love the online consultation feature.”",
    "name": "Dr. Michael Johnson, ",
    "title": "New York, USA"
  },
  {
    "text": "Comfygen developed a top-notch medicine delivery app for our pharmacy chain. Their expertise in AI and secure payment integration made our platform user-friendly and highly efficient",
    "name": "Emma Watson",
    "title": "London, UK"
  },
  {
    "text": "We partnered with Comfygen for our on-demand medicine delivery startup, and their Flutter-based solution streamlined operations and improved customer experience. Highly recommend their development team!",
    "name": "Rahul Sharma",
    "title": "Jaipur, India"
  },
  {
    "text": "“The team delivered exactly what we needed for our education platform. The app is smooth, easy to use, and our students love the experience.”",
    "name": "Rahul Sharma",
    "title": "New Delhi, India"
  },
  {
    "text": "“Their education app developers understood our requirements clearly and delivered a reliable learning solution on time. Communication was transparent throughout.”",
    "name": "Sarah Williams",
    "title": "London, UK"
  },
  {
    "text": "We partnered with Comfygen Technologies for ecommerce app development, and the results were outstanding. The app is secure, user-friendly, and has significantly improved customer engagement and conversions.",
    "name": "Neha Patel",
    "title": "(India)"
  },
  {
    "text": "Comfygen Technologies delivered a powerful ecommerce app with smooth performance and excellent UI. Their team understood our requirements clearly and helped us scale our online sales faster than expected.",
    "name": "Amit Verma",
    "title": "(India)"
  },
  {
    "text": "Working with Comfygen was a game-changer for my salon business. They delivered a user-friendly, beautifully designed booking app that our clients love. Their team was responsive, professional, and clearly experts in salon app development.",
    "name": "Priya Sharma",
    "title": "Mumbai, India"
  },
  {
    "text": "I hired Comfygen to build an on-demand beauty services app, and they exceeded expectations. From seamless scheduling to secure payments, every feature was spot-on. Their support team is top-notch, always ready to help.",
    "name": "Jessica Allen",
    "title": "Los Angeles, USA"
  },
  {
    "text": " Comfygen helped us build a taxi app that works flawlessly. The AI-based ride allocation and real-time GPS tracking are game-changers. Their support from development to launch was excellent.",
    "name": "Rohit Shah, Mumbai",
    "title": "India"
  },
  {
    "text": "Fantastic experience working with Comfygen. The team delivered a secure, scalable, and user-friendly taxi app on time. Highly recommended for startups and enterprises alike.",
    "name": "Priya Kapoor",
    "title": "Bangalore"
  },
  {
    "text": "Comfygen transformed our food delivery startup with a sleek, user-friendly app. Their team was responsive, delivering on time and within budget. The app’s performance and customer feedback have been outstanding!",
    "name": "Riya Sharma",
    "title": "Mumbai, India"
  },
  {
    "text": "Working with Comfygen was seamless from start to finish. Their expertise in on-demand food delivery app development helped us launch a scalable platform quickly. Their 24/7 support has been invaluable.",
    "name": "James Wilson",
    "title": "New York, USA"
  },
  {
    "text": " Comfygen did an excellent job developing our astrology app. The app is fast, user-friendly, and includes all the features we needed. Their team was responsive and supportive throughout the project.",
    "name": "Amit Sharma ",
    "title": "New Delhi, India"
  },
  {
    "text": " We partnered with Comfygen for astrology app development, and the experience was smooth from start to finish. Their AI-based features improved user engagement and helped us grow our customer base.",
    "name": "Priya Mehta",
    "title": "Mumbai, India"
  },
  {
    "text": "Comfygen developed a fully customized logistics app for our local courier business. Their attention to detail and real-time tracking features helped us streamline our delivery operations and boost customer satisfaction.",
    "name": "Rahul Mehta",
    "title": "India"
  },
  {
    "text": "We hired Comfygen to build a fleet management app, and they delivered beyond expectations. The UI was smooth, the backend was powerful, and the team was highly professional throughout the project.",
    "name": "Jessica Turner",
    "title": "USA"
  },
  {
    "text": "Comfygen launched the app, which already garnered a large user base and generated a steady revenue stream. The app also received positive user feedback for its intuitive design and smooth performance. Moreover, the team implemented the client's feedback quickly and communicated consistently.",
    "name": "<a class='text-blue-500' href='https://clutch.co/go-to-review/42d5aeaa-1099-4697-8dde-7f93b7f00407/324114' rel='nofollow noopener noreferrer' target='_blank' >Rishabh Shukla</a>",
    "title": "Noida, India"
  },
  {
    "text": "I had an amazing experience with Comfygen! They built a highly interactive and secure dating app for my business. The team was professional, and responsive, and delivered everything on time. Highly recommended!",
    "name": "Aarav Mehta",
    "title": "India"
  },
  {
    "text": "Comfygen Technologies brought our instant grocery delivery vision to life with a sleek and lightning-fast app. The team really understands the Q-commerce space and delivered a solution that can scale as we grow.",
    "name": "Ananya Verma",
    "title": "India"
  },
  {
    "text": "We hired Comfygen Technologies to develop a 10-minute medicine delivery app, and the results were phenomenal. Their developers were responsive, skilled, and worked like true partners. Our users love the real-time tracking and easy UI.",
    "name": "Daniel Brooks",
    "title": "UK"
  },
  {
    "text": "Comfygen transformed our billing operations with a smart, easy-to-use billing software solution. Invoice automation, payment tracking, and GST compliance are now seamless, saving us time and reducing manual errors across our finance team.",
    "name": "Amit Verma",
    "title": "(Delhi, India)"
  },
  {
    "text": "Comfygen delivered a powerful billing solution that streamlined our invoicing and payment processes. Real-time reporting and automated reminders significantly improved our cash flow and financial visibility. Their support team is highly responsive and reliable.",
    "name": "Rahul Mehta",
    "title": "(Ahmedabad, India)"
  }
]

const portfolio = [
  {
    "id": 1,
    "image": "https://www.comfygen.com/image/hero-image-pharmacy-chain-app.webp",
    "title": "Pharmacy Chain App",
    "description": "Pharmacy Chain App is a feature-rich medicine delivery app developed for a leading pharmacy chain. It allows users to upload prescriptions, order medicines, and track deliveries in real-time. The app integrates secure payment gateways and AI-powered medicine recommendations, ensuring a smooth user experience.",
    "link": "/portfolio/pharmacy-chain-app"
  },
  {
    "id": 2,
    "image": "https://www.comfygen.com/image/hero-image-ai-powered-medicine-ordering-app.webp",
    "title": "AI-Powered Medicine Ordering",
    "description": "The Medicine Ordering App combines AI and ML to suggest medicines based on users' health conditions. With a simple UI, seamless payment integration, and multi-vendor support, this app has helped thousands of users conveniently access medicines.",
    "link": "/portfolio/ai-powered-medicine-ordering-app"
  },

  {
    "id": 3,
    "image": "https://www.comfygen.com/image/hero-image-pharmacy-chain-app.webp",
    "title": "Pharmacy Chain App",
    "description": "Pharmacy Chain App is a feature-rich medicine delivery app developed for a leading pharmacy chain. It allows users to upload prescriptions, order medicines, and track deliveries in real-time. The app integrates secure payment gateways and AI-powered medicine recommendations, ensuring a smooth user experience.",
    "link": "/portfolio/pharmacy-chain-app"
  },
  {
    "id": 4,
    "image": "https://www.comfygen.com/image/e-pharmapluse-hero-image.webp",
    "title": "E-PharmaPluse App – A Complete E-Pharmacy Solution",
    "description": "E-PharmaPluse is a cloud-based medicine delivery app developed for an enterprise client. The app features real-time GPS tracking, multi-language support, and a subscription model for monthly medicine deliveries, ensuring enhanced accessibility and efficiency.",
    "link": "/portfolio/e-pharmapluse"
  },

  {
    "id": 5,
    "image": "https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-zepto.webp",
    "title": "Zepto-Style Quick Commerce App",
    "description": "Inspired by Zepto, this app supports ultra-fast grocery delivery in under 10 minutes. Includes dark store integration, real-time delivery tracking, push notifications, and advanced inventory management for micro-fulfillment.",
    "link": "#"
  },
  {
    "id": 6,
    "image": "https://www.comfygen.com/comfygen-images/grocery-app-development/grocery-app-development-custom.webp",
    "title": "Custom Supermarket App Solution",
    "description": "A custom grocery app solution built for a supermarket chain with over 20 branches. Features barcode-based in-store scanning, loyalty rewards, click & collect scheduling, and integration with existing POS and ERP systems.",
    "link": "#"
  },
  {
    "id": 7,
    "image": "https://www.comfygen.com/img/doctor-appointment-portfolio-image.webp",
    "title": "Doctor Appointment App",
    "description": "At Comfygen Private Limited, we excel at innovative doctor appointment apps designed to make healthcare easier for patients and healthcare professionals. Our apps boast user-friendly interfaces, seamless appointment scheduling, and robust features such as real-time notifications, ",
    "link": "#"
  },

  {
    "id": 8,
    "image": "https://www.comfygen.com/image/hero-image-pharmacy-chain-app.webp",
    "title": "Pharmacy Chain App",
    "description": "Pharmacy Chain App is a feature-rich medicine delivery app developed for a leading pharmacy chain. It allows users to upload prescriptions, order medicines, and track deliveries in real-time. The app integrates secure payment gateways and AI-powered medicine recommendations, ensuring a smooth user experience.",
    "link": "/portfolio/pharmacy-chain-app"
  },
  {
    "id": 9,
    "image": "https://www.comfygen.com/image/hero-image-ai-powered-medicine-ordering-app.webp",
    "title": "AI-Powered Medicine Ordering",
    "description": "The Medicine Ordering App combines AI and ML to suggest medicines based on users' health conditions. With a simple UI, seamless payment integration, and multi-vendor support, this app has helped thousands of users conveniently access medicines.",
    "link": "/portfolio/ai-powered-medicine-ordering-app"
  },
  {
    "id": 10,
    "image": "https://www.comfygen.com/comfygen-images/comfygen/personal-finance-management-app.webp",
    "title": "FinFlow - A Personal Finance Management App",
    "description": "FinFlow is a personal finance management app, that tracks and manages the user’s finances very conveniently. The app includes a multitude of features; such as expense tracking, budget creation, finance goal setting, etc. These features make the app more efficient.",
    "link": "/portfolio/personal-finance-management-app"
  },
  {
    "id": 11,
    "image": "https://www.comfygen.com/comfygen-images/comfygen/mobile-payment-solution.webp",
    "title": "PayMaster - A Mobile Payment Solution",
    "description": "PayMaster is a fast and very secure app for mobile payments. It allows bill splitting, peer-to-peer transfers, and contactless payments. The app works in conjunction with bank accounts and digital wallets so that people can perform their transactions with a few taps. It has an effective design to match the use of every kind of user. ",
    "link": "/portfolio/mobile-payment-app-solution"
  },
  {
    "id": 12,
    "image": "https://www.comfygen.com/media/images/hero-book-my-tutor1.webp",
    "title": "Book My Tutor",
    "description": "Book My Tutor aims to revolutionize the education sector in Canada by providing a seamless platform for students to connect with experienced and qualified tutors. The vision is to make quality education accessible to every student, regardless of their location or academic level.",
    "link": "https://www.comfygen.com/portfolio/book-my-tutor"
  },
  {
    "id": 13,
    "image": "https://www.comfygen.com/image/ai-powered-e-learning-app.webp",
    "title": "AI-Powered E-Learning App",
    "description": "E-learning app is an innovative AI-driven education app designed for personalized learning experiences. It features interactive video lessons, real-time quizzes, and AI-based recommendations tailored to each student’s learning pace.",
    "link": "#"
  },
  {
    "id": 14,
    "image": "https://www.comfygen.com/comfygen-images/ecommerce/ecommerce-panel4.webp",
    "title": "Luxury Lifestyle eCommerce Platform",
    "description": "A premium B2C eCommerce mobile app for a high-end lifestyle brand. Built with a headless architecture, the app features immersive product galleries, AR-powered previews, loyalty programs, and cross-device shopping continuity.",
    "link": "#"
  },
  {
    "id": 15,
    "image": "https://www.comfygen.com/img/e-commerce-portfolio-img.webp",
    "title": "E-Commerce",
    "description": "Our E-Commerce project envisions creating a seamless online shopping experience for users, offering a diverse range of products. The primary goal is to establish a user-friendly platform that simplifies the process of browsing, selecting, and purchasing items, while also providing a secure and efficient transaction system.",
    "link": "#"
  },
  {
    "id": 16,
    "image": "https://www.comfygen.com/comfygen-images/salon-app-development/salon-development-on-demand-beauty-booking-app.webp",
    "title": "On-Demand Beauty Booking App",
    "description": "A user-friendly app that connects customers with beauty professionals for at-home services. Features include service browsing, real-time booking, live location tracking, and secure payment. Designed for convenience and seamless user experience.",
    "link": "https://www.comfygen.com/contact-us"
  },
  {
    "id": 17,
    "image": "https://www.comfygen.com/comfygen-images/salon-app-development/salon-development-freelance-stylist-appointment-app.webp",
    "title": "Freelance Stylist Appointment App",
    "description": "Built specifically for solo beauty professionals, this mobile app includes personal branding tools, service listings, availability management, and a smooth booking experience. Clients can leave reviews, upload inspiration photos, and make direct payments.",
    "link": "https://www.comfygen.com/contact-us"
  },
  {
    "id": 18,
    "image": "https://www.comfygen.com/image/hero-image-ride-hailing-app.webp",
    "title": "Urban Ride-Hailing Startup",
    "description": "Challenge: A startup wanted to enter the competitive ride-hailing market with a unique offering.",
    "link": "/portfolio/ride-hailing-app"
  },
  {
    "id": 19,
    "image": "https://www.comfygen.com/image/hero-image-corporate-taxi-service-provider.webp",
    "title": "Corporate Taxi Service Provider",
    "description": "Challenge: A corporate taxi service needed a streamlined solution for employee transportation.",
    "link": "/portfolio/corporate-taxi-service-provider"
  },
  {
    "id": 20,
    "image": "https://www.comfygen.com/image/portfolio-image-food-delivery-app-development1.webp",
    "title": "Food Delivery App – Food 24Hr",
    "description": "Food 24Hr is a high-performance food delivery app developed for a client seeking a reliable and user-friendly solution. The app features real-time order tracking, AI-based food recommendations, and a smooth user interface for both customers and delivery partners.",
    "link": "/portfolio/food-delivery-app"
  },
  {
    "id": 21,
    "image": "https://www.comfygen.com/image/portfolio-image-food-delivery-app-development2.webp",
    "title": "Online Food Ordering App",
    "description": "This robust online food ordering app was created to streamline the ordering process for multi-restaurant platforms. It supports advanced search filters, restaurant listings, order scheduling, and delivery tracking—delivering a comprehensive food delivery experience tailored for both single vendors and aggregators.",
    "link": "/portfolio/online-food-ordering-app"
  },
  {
    "id": 22,
    "image": "https://www.comfygen.com/image/hero-section-love-horoscope-app.webp",
    "title": "Love Horoscope App",
    "description": "A personalized love horoscope app development solution that provides daily, weekly, and monthly love predictions based on zodiac compatibility. Integrated with AI-driven astrology insights, real-time astrologer consultations, and interactive matchmaking features, this app enhances the love and relationship experience for users.",
    "link": "/portfolio/love-horoscope-app"
  },
  {
    "id": 23,
    "image": "https://www.comfygen.com/image/hero-image-tarot-card-reading-app.webp",
    "title": "Tarot Card Reading App",
    "description": "A virtual tarot reading app development platform designed to offer accurate and insightful tarot card readings. Featuring AI-powered tarot interpretations, live tarot reader consultations, customizable card decks, and in-app purchase options, this app provides a seamless and intuitive tarot reading experience.",
    "link": "/portfolio/tarot-card-reading-app"
  },
  {
    "id": 24,
    "image": "https://www.comfygen.com/comfygen-images/logistics-app-development/p1.webp",
    "title": "Uber Freight-Style Transport App",
    "description": "A powerful freight management app built for a regional trucking company to digitize load booking and automate driver assignments. The platform matches available trucks with nearby loads and enables real-time route tracking and e-documentation—similar to the Uber Freight model.",
    "link": "https://www.comfygen.com/contact-us"
  },
  {
    "id": 25,
    "image": "https://www.comfygen.com/comfygen-images/logistics-app-development/p2.webp",
    "title": "Courier & Parcel Delivery App for Urban Logistics",
    "description": "A custom courier delivery solution developed for a same-day urban delivery startup. The app features dynamic order assignment, GPS tracking, digital proof of delivery, and an intuitive dispatcher dashboard, helping streamline hyperlocal delivery operations.",
    "link": "https://www.comfygen.com/contact-us"
  },
  {
    "id": 26,
    "image": "https://www.comfygen.com/image/swipe-based-dating-app.webp",
    "title": "Swipe-Based Dating App",
    "description": "Our swipe-based dating app development offers an intuitive user experience with AI-driven matchmaking, real-time chat, and seamless profile swiping to enhance engagement and connections.",

    "link": "/portfolio/swipe-based-dating-app",
  },
  {
    "id": 27,
    "image": "https://www.comfygen.com/image/match-making-datingapp.webp",
    "title": "Matchmaking Dating App",
    "description": "We develop AI-powered matchmaking apps with personality-based matching algorithms, ensuring users find meaningful relationships through smart recommendations and compatibility analysis.",
    "link": "/portfolio/ai-matchmaking-dating-app-development",
  },
  {
    "id": 28,
    "image": "https://www.comfygen.com/comfygen-images/quick-commerce-app-development/quick-commerce-app-development-panel1.webp",
    "title": "Hyperlocal Grocery Delivery App",
    "description": "An ultra-fast grocery delivery platform designed for metro cities. Users can browse nearby dark stores, track live delivery, and reorder essentials in just a few taps. The app includes real-time inventory sync, multi-location support, and integrated e-wallets—empowering the client to reduce delivery time to under 10 minutes.",
    "link": "#"
  },
  {
    "id": 29,
    "image": "https://www.comfygen.com/comfygen-images/comfygen/Instant-pharma-delivery-app.webp",
    "title": "Instant Pharma Delivery App",
    "description": "Developed for a healthcare startup, MediRun connects users with local pharmacies for express medicine delivery. The app allows prescription uploads, doctor chat, and same-day doorstep delivery. Features include AI-based product suggestions, secure payment gateways, and automated refill reminders, ensuring both compliance and convenience.",
    "link": "#"
  },
  {
    "id": 30,
    "image": "https://www.comfygen.com/comfygen-images/billing-software-development/smart-billing-&-Invoicing-system.webp",
    "title": "Smart Billing & Invoicing System",
    "description": "A powerful billing software designed to automate invoicing, tax calculation, and payment tracking. It helps businesses reduce manual errors, improve cash flow, and manage finances efficiently through a secure and user-friendly dashboard.",
    "link": "https://www.comfygen.com/contact-us"
  },
  {
    "id": 31,
    "image": "https://www.comfygen.com/comfygen-images/billing-software-development/cloud-Based-Subscription-Billing-Platform.webp",
    "title": "Cloud-Based Subscription Billing Platform",
    "description": "This cloud billing solution enables businesses to manage recurring billing, subscriptions, and automated payments effortlessly. With real-time reporting, multi-currency support, and scalable architecture, it ensures smooth billing operations for growing businesses.",
    "link": "https://www.comfygen.com/contact-us"
  },
];



export default function Contact(props: any) {
  let { initialData } = props;
  return (
    <>
      <Head>
        <title>  Contact us | App and Web Development Team | Get in Touch - Comfygen</title>
        <link rel="canonical" href="https://www.comfygen.com/contact-us" />
        <meta name="description" content="Contact Comfygen to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="  Contact us | App and Web Development Team | Get in Touch - Comfygen" />
        <meta property="og:description" content="Contact Comfygen to discuss your project requirements. Our experienced developers can help you bring your app or web project to life. Get in touch with us today to get started." />
        <meta property="og:url" content="https://www.comfygen.com/contact-us" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="article:publisher" content="https://www.facebook.com/people/Comfygen-Private-Limited/100083835361397/" />
        <meta property="article:modified_time" content="2022-09-01T13:05:06+00:00" />
        <meta property="og:image" content="https://www.comfygen.com/images/illuslator/Contactus.svg?size=1024" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@comfygentech" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="7 minutes" />
      </Head>
     
       {/* <Navbar /> */}
     
      <div className="overflow-hidden">
        <ContactUs />

        <ClientStories />

        <ClientTestimonials
          heading="Client Testimonial"
          testimonials={customTestimonials}
        />

        <PortfolioSlider
          heading="Award-Winning App Development Case Studies & Portfolio with Real-World Business Results"
          portfolio={portfolio}
        />
        <BlogSection initialData={initialData} />


      </div>

    </>
  )
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