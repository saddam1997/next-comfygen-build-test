import React, { useState } from "react";

import Head from "next/head";
import Header from "../../components/Newcomponet/layout/Header"
import HeroSectionForCompany from "../../components/Newcomponet/comman/HeroSectionForCompany";
import ClientTestimonials from "./component/ClientTestimonials";
import ClientStories from "../../components/ClientStories";





const ReviewData = {
  "heading": "What Our Clients Say",
  "description": "",
  "Review": [
    {
      "text": "My overall experience working with the company was very positive. The team demonstrated professionalism and strong technical skills throughout the project. Communication was clear and timely, which helped us stay on schedule. They were responsive to our feedback and flexible in adapting to changes. The final product met all our expectations and was delivered on time. Some minor improvements could be made in the testing phase, but overall, I am very satisfied with the collaboration.",
      "name": "Nhi Do",
      "image": "https://www.comfygen.com/comfygen-images/Review/designrush.webp",
      "location": "Vietnam",
      "Source": "DesignRush",
      "URL": "https://www.designrush.com/agency/profile/comfygen#reviews"
    },
    {
      "name": "Rob Lipps ",
      "location": "Madison",
      "text": "Sonic Foundry Inc. noted that Confygen consistently fulfilled its commitments and demonstrated strong project management skills, keeping the app's development on track. The client was pleased with the final result.",
      "Source": "DesignRush",
      "URL": "https://www.designrush.com/agency/profile/comfygen#reviews",
      "image": "https://www.comfygen.com/comfygen-images/Review/designrush.webp"
    },
    {
      "name": "Avinash",
      "location": "Atlanta, Indiana",
      "text": "Comfygen Technologies developed and designed a blockchain and a web wallet for a cryptocurrency company. The team built a Proof of Authority blockchain based on Geth and a user-friendly web wallet.",
      "Source": "Clutch",
      "URL": "https://clutch.co/go-to-review/42d5aeaa-1099-4697-8dde-7f93b7f00407/425248",
      "image": "https://www.comfygen.com/comfygen-images/Review/clutch.webp"
    },
    {
      "name": "Rishabh Shukla",
      "location": "Noida, India",
      "text": "An IT company hired Comfygen to design and build a dating app for both iOS and Android. The team also integrated features, including geolocation-based matching, swipe functionality, and a secure payment system",
      "Source": "Clutch",
      "URL": "https://clutch.co/go-to-review/42d5aeaa-1099-4697-8dde-7f93b7f00407/324114",
      "image": "https://www.comfygen.com/comfygen-images/Review/clutch.webp"
    },
    {
      "name": "Raman Mathur",
      "location": "Jaipur, India",
      "text": "Comfygen Technologies developed and designed a food delivery app for a mobile app and website development company. The team was responsible for creating a user-friendly and scalable mobile app.",
      "Source": "Clutch",
      "URL": "https://clutch.co/go-to-review/42d5aeaa-1099-4697-8dde-7f93b7f00407/425232",
      "image": "https://www.comfygen.com/comfygen-images/Review/clutch.webp"
    },
    {
      "name": "Sayead Shadab Arif",
      "location": "Dubai, United Arab Emirates",
      "text": "Comfygen provided software development services for an IT project management company. The team worked on three projects involving blockchain and e-commerce.",
      "Source": "Clutch",
      "URL": "https://clutch.co/go-to-review/42d5aeaa-1099-4697-8dde-7f93b7f00407/395690",
      "image": "https://www.comfygen.com/comfygen-images/Review/clutch.webp"
    },
    {
      "name": "Raunak Pradhan",
      "location": "Denver, New York",
      "text": "Comfygen built a custom healthcare mobile app for a review writer company. The app included appointment scheduling, patient record management, and a telemedicine feature. The team also worked on its UI.",
      "Source": "Clutch",
      "URL": "https://clutch.co/go-to-review/42d5aeaa-1099-4697-8dde-7f93b7f00407/323578",
      "image": "https://www.comfygen.com/comfygen-images/Review/clutch.webp"
    },
    {
      "name": "Saurav Gupta",
      "location": "Denver, New York",
      "text": "I had a great experience working with Comfygen Technologies. The team is professional, responsive, and truly understands client requirements. Their technical expertise and timely delivery made the entire process smooth and stress-free. I’d definitely recommend Comfygen Technologies to anyone looking for reliable and quality IT solutions.",
      "Source": "Google",
      "URL": "https://share.google/SmBMWdDMK2xOz92Bw",
      "image": "/Google - Original.png"
    },
    {
      "name": "Devguru Enterprises",
      "location": "India",
      "text": "The team at Comfygen pvt ltd. is highly knowledgeable and professional. From the initial consultation to the final implementation, they were able to provide expert advice and guidance. Their commitment to excellence and customer satisfaction is truly impressive, and I look forward to working with them again in the future",
      "Source": "Google",
      "URL": "https://share.google/ZQyOmM1BtcuDCWvGP",
      "image": "/Google - Original.png"
    },
    {
      "name": " Mazhar.H. Ansari",
      "location": "Oman",
      "text": "Comfygen Private Limited is the best blockchain app development company in India that I have come across in recent years. They can deliver projects within the given timeline and as per our expectations. I recommend everyone to try Comfygen Private Limited services and products.",
      "Source": "Google",
      "URL": "https://share.google/ycfErAHqln9LNKdhK",
      "image": "/Google - Original.png"
    },
    {
      "name": "Tom Baker",
      "location": "Germany",
      "text": "Very professional company. Everyone very friendly. The app we developed for us exceeded our expectations. I also think it's very good that the company also has a branch in Germany and that's why the overall communication was very good. We will develop the next project with you again.",
      "Source": "Google",
      "URL": "https://share.google/ppp6z1YpQfJ1KxmWq",
      "image": "/Google - Original.png"
    }
  ]
}



export default function Altcoin(props: any) {
  let { initialData } = props;
  const [talkToExpertModal, setTalkToExpertModal] = useState(false);
  const [cryptoAltcoin, setCryptoAltcoin] = useState<any>(1);
  const openModal = () => {
    setTalkToExpertModal(true);
  };
  const closeModal = () => {
    setTalkToExpertModal(false);
  };


  return (
    <>
      <Head>
        <title>Client Testimonials & Reviews | Trusted App Development Partner</title>
        <meta
          name="description"
          content="Explore real client testimonials and verified reviews of our AI-powered app development services. See why global brands trust us for quality, innovation, and timely delivery."
        />
        <link
          rel="canonical"
          href="https://www.comfygen.com/client-testimonials"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        {/* <!-- Twitter Card Tags -->  */}
        {/* <!-- Twitter Card Tags -->  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Success Stories & Testimonials | Reliable App & Software Developers" />
        <meta name="twitter:description" content="See why companies worldwide choose us as their trusted software development partner. Browse genuine testimonials highlighting our performance, reliability, and results." />
        <meta name="twitter:image" content="Add og image url" />
        <meta name="twitter:site" content="@Comfygen_Tech" />

        {/* <!-- Facebook Open Graph Meta --> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Comfygen" />
        <meta property="og:url" content="https://www.comfygen.com/client-testimonials" />
        <meta property="og:title" content="What Our Clients Say | Real Reviews of Our Software Development Services" />
        <meta property="og:description" content="Read authentic customer experiences and success stories. Discover how our expert app development team helps businesses build scalable, high-impact digital solutions." />
        <meta property="og:image" content="https://www.comfygen.com/comfygen-images/client-testimonials/Client Testimonials.webp" />
        <meta property="og:image:secure_url" content="https://www.comfygen.com/comfygen-images/client-testimonials/Client Testimonials.webp" />
        <meta property="og:image:alt" content="Client Testimonials" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <Header />

      <div className="overflow-hidden lg:pt-[110px] pt-[40px]">
        <div className="lg:bg-right bg-no-repeat bg-cover bg-gradient-to-br 
                from-blue-500/40 
                via-blue-300/40
                ">
          <HeroSectionForCompany
            heading="Client Testimonials"
            ptag="At Comfygen, our clients’ satisfaction is our greatest reward. Here’s what some of our valued clients have to say about working with us:"
            btnName="Talk With Expert"
            btnLink="/contact-us"
            img={{
              src: "https://www.comfygen.com/image/client-testimonials-hero-img.webp",
              width: 755,
              height: 360
            }}
            openModal={openModal}
            talkToExpertModal={talkToExpertModal}
            setTalkToExpertModal={setTalkToExpertModal}
            closeModal={closeModal}
          />

        </div>

        {/* <VideoTestimonials /> */}
        <ClientStories />

        <ClientTestimonials Data={ReviewData} />


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