

import React, { useEffect, useState } from "react";
import HeadingTwo from "../../../components/ui/HeadingTwo";
import Card from "./Card";

/* ================= DATA ================= */


/* ================= COMPONENT ================= */
const ClientTestimonials = ({ Data }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 6;

  /* ================= RESPONSIVE ================= */
  useEffect(() => {
    const checkView = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkView();
    window.addEventListener("resize", checkView);
    return () => window.removeEventListener("resize", checkView);
  }, []);



  return (
    <section className="py-6 bg-white">
      <div className="mx-auto container px-4">

        {/* Heading */}
        <div className="text-center mb-6">
          <HeadingTwo color="black" text={Data?.heading} />
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-4 grid-cols-2"

          >
            {Data?.Review?.length > 0 &&
              Data.Review.map((item: any, i: number) => (
                <div key={i} className="px-3 shrink-0">
                  <Card item={item} />
                </div>
              ))}
          </div>
        </div>




      </div>
    </section>
  );
};

export default ClientTestimonials;
