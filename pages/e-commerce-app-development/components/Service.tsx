import React, { useState } from "react";

function CustomArrows() {
  const [current, setCurrent] = useState(0);

  const services = [
    {
      number: "01",
      head: "eCommerce App Development Consultancy",
      decs: "We provide expert consultancy for building scalable eCommerce apps with strong architecture and best practices."
    },
    {
      number: "02",
      head: "Custom eCommerce App Development",
      decs: "We create tailored eCommerce application designs to meet your unique needs and goals."
    },
    {
      number: "03",
      head: "Application UX/UI Designs",
      decs: "We design visually appealing user interfaces that enhance engagement and brand trust."
    },
    {
      number: "04",
      head: "Payment Gateway Integration",
      decs: "We integrate secure and fast payment gateways with global support."
    },
    {
      number: "05",
      head: "Order Management System",
      decs: "We streamline order processing and delivery tracking efficiently."
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="bg-white py-12">
      <div className="w-11/12 mx-auto lg:w-10/12">
        <div className="lg:w-[60%]">
          <h3 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold text-[#0E1F51]">
            Result-Oriented eCommerce Application Development Services{" "}
            <span className="text-[#2563EB]">for SMEs</span>
          </h3>
          <p className="text-black text-base">
            We promise to bring eyes on your business with powerful eCommerce development solutions built after deep research and planning.
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {services.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-4">
                <div className="bg-[#fff] border p-8 border-[#0E1F51] shadow-xl rounded-[17px] min-h-[420px]">
                  <span className="w-16 h-16 bg-[#0E1F51] rounded-[12px] font-semibold flex justify-center items-center text-white text-2xl">
                    {card.number}
                  </span>
                  <div className="mt-3">
                    <h3 className="text-[#0E1F51] text-2xl font-bold">
                      {card.head}
                    </h3>
                    <p className="text-gray-700">{card.decs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default CustomArrows;














// import React from "react";
// import Slider from "react-slick";

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 background: "#000",
//                 padding: "20px",
//                 borderRadius: "50%",
//                 position: "absolute",
//                 left: "-38px",
//             }}
//             onClick={onClick}
//         />
//     );
// }

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{
//                 ...style,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 background: "#000",
//                 padding: "20px",
//                 borderRadius: "50%",
//                 position: "absolute",
//                 left: "100%",
//             }}
//             onClick={onClick}
//         />
//     );
// }

// function CustomArrows() {
//     const settings = {
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 1500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             }
//         ]
//     };

//     const services = [
//         {
//             number: "01",
//             head: "eCommerce App Development Consultancy",
//             decs: "We can provide you a result-oriented and user-interactive eCommerce app development consultancy. During the consultancy, our experts will evaluate the idea, check with the best possibilities, provide their own suggestions, figure out the tech-trends to include, make a plan of action, and more.",
//         },
//         {
//             number: "02",
//             head: "Custom eCommerce App Development",
//             decs: "We create tailored eCommerce application designs to meet unique specific needs and goals of the entrepreneurs. The professionals will understand needs, find out the engaging and unique implementations, and make the application visually appealing to grant personalized experiences.",
//         },
//         {
//             number: "03",
//             head: "Application UX/UI Designs",
//             decs: "We can create intuitive and visually appealing user interfaces to deliver personalized user experience for longer customer interactions & engagement. Our UX/UI designing team will add custom designs, animations, and appealing elements to make the application look more valuable and reliable.",
//         },
//         {
//             number: "04",
//             head: "Multiple Platform App Development",
//             decs: "Our development team is expertise in building apps across various platforms; Android, iOS, Cross-Platform, and web. These applications are efficient and seamlessly functioning across every platform with smooth navigation. We ensure consistent performance and user accessibility with our built eCommerce applications.",
//         },
//         {
//             number: "05",
//             head: "Payment Gateway Integration",
//             decs: "We enable your eCommerce applications to integrate with various payment gateways to give a variety of transactional options to end-users for order completion. Also, our App developers are aware of international payment gateway methods and integration to approach widely across the globe. Our methods ensure full safety and security with whatever payment gateway we integrate.",
//         },
//         {
//             number: "06",
//             head: "Shopping Cart Development",
//             decs: "Our eCommerce development services include building shopping carts into the eCommerce applications with eased functioning and features. We create an user-friendly and simplified checkout process to process orders seamlessly. The implementation of shopping cart development ensures for increased sales and reduced cart abandonments guaranteed.",
//         },
//         {
//             number: "07",
//             head: "Product Catalog Management",
//             decs: "Creation of the product catalog management, where we ensure efficient product listing, categories, inventory status & updates, etc. All these makes the product look authentic and reliable to the end-users. The implementation will build an easier navigation, streamlined operations, and real-time inventory management.",
//         },
//         {
//             number: "08",
//             head: "Order Management System",
//             decs: "The eCommerce development includes comprehensive systems to manage the whole process from orders to deliveries. The system has an improved order tracking system, algorithm to allocate orders to delivery partners, streamline the operations, improved efficiency, etc.",
//         },
//         {
//             number: "09",
//             head: "Customer Management and CRM Integration",
//             decs: "We integrate Customer Relationship Management (CRM) systems, which ensures connecting to customers simultaneously and ensures for data security. Moreover, the AI integration ensures for more personalized experiences improving the reliability & authenticity of eCommerce apps competitively.",
//         },
//         {
//             number: "10",
//             head: "Analytics and Reporting",
//             decs: "Our eCommerce app development services include robust analytics and reporting tools. These features allow you to track app performance, user behavior, and sales metrics efficiently. By leveraging this data, you can make informed decisions, optimize performance, and strategize effectively to drive growth and success.",
//         },
//         {
//             number: "11",
//             head: "Security Features",
//             decs: "We prioritize security in our eCommerce app development by implementing advanced measures to protect user data and transactions. This not only enhances trust among your customers but also ensures compliance with regulations and reduces the risk of data breaches, providing a secure shopping environment.",
//         },
//         {
//             number: "12",
//             head: "Maintenance and Support",
//             decs: "Our eCommerce app development services include ongoing maintenance and technical support. This ensures your app remains up-to-date and runs smoothly, with continuous performance improvements and quick issue resolution, offering you peace of mind and reliability in your operations.",
//         },
//         {
//             number: "13",
//             head: "Marketing and SEO Integration",
//             decs: "Boost your app's visibility with our integrated marketing tools and SEO strategies. These features help achieve higher app rankings, increased traffic, and a better return on investment (ROI) for your marketing efforts, making your eCommerce app more accessible and appealing to users.",
//         },
//         {
//             number: "14",
//             head: "Social Media Integration",
//             decs: "Enhance user experience with seamless social media integration. Our eCommerce app development services enable easy social sharing and increased brand visibility, fostering social proof and greater customer engagement, which can lead to higher conversion rates and customer loyalty.",
//         },
//         {
//             number: "15",
//             head: "Multi-language and Multi-currency Support",
//             decs: "Expand your market reach with our multilingual and multi-currency support. Our eCommerce apps cater to a global audience, offering improved user experience for diverse customers and increasing your sales potential by accommodating different languages and currencies seamlessly.",
//         },
//         {
//             number: "16",
//             head: "Augmented Reality (AR) Features",
//             decs: "Provide an immersive shopping experience with our augmented reality (AR) features. These innovative tools allow for enhanced product visualization and interactive shopping, leading to higher customer satisfaction and a more engaging eCommerce experience, setting your app apart from the competition.",
//         },
//     ];

//     return (
//         <section className="bg-[#fff] lg:py-14 py-8">
//             <div className="w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
//                 <div className="lg:w-[60%]">
//                     <h3 className="py-2 lg:py-4 text-2xl lg:text-4xl font-bold leading-[2rem] lg:leading-[3rem] text-[#0E1F51]">
//                         Result-Oriented eCommerce Application Development Services <span className="text-[#2563EB]">for SMEs</span>
//                     </h3>
//                     <p className="text-black text-base">
//                         We promise to bring eyes on your business from a vast audience with our eCommerce application development services. Our services and solutions are built after deep market analysis and research conducted by our creative eCommerce experts. It is an assurance to secure and safely make your business visible globally with empowered eCommerce experiences for SMEs:
//                     </p>
//                 </div>
//                 <div className="slider-container mt-8">
//                     <Slider {...settings}>
//                         {services.map((card, index) => (
//                             <div key={index} className="px-4">
//                                 <div className="bg-[#fff] border p-8 border-[#0E1F51] shadow-xl rounded-[17px] md:min-h-[414px] min-h-[463px] ">
//                                     <span className="w-16 h-16 bg-[#0E1F51] shadow rounded-[12px] font-semibold flex justify-center items-center text-white text-2xl ">{card.number}</span>
//                                     <div className="mt-3">
//                                         <h3 className="text-[#0E1F51] text-2xl font-bold ">{card.head}</h3>
//                                         <p className="flex-grow">{card.decs}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default CustomArrows;
