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




