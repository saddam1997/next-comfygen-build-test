// components/Card.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeadingThree from "../ui/HeadingThree";
import ParagraphText from "../ui/ParagraphText";
import { Button } from "../ui/Button";

const Card = ({ item, isActive }: any) => {
  return (
    <div
      className={`rounded-2xl border bg-white shadow-lg flex flex-col lg:flex-row lg:items-center lg:gap-6
      p-3 lg:p-4 transition-all duration-300 ${isActive ? "scale-100" : "scale-95 opacity-80"
        }`}
    >
      <div className=" w-full">
        <Image
          src={item.image}
          alt={item.title}
          width={700}
          height={450}
          className="object-contain h-80 "
          draggable={false}
          loading="lazy"
          fetchPriority="low"

        />
      </div>

      <div className="w-full">
        <HeadingThree color="black" text={item.title} />
        <ParagraphText color="black" text={item.description} />

        <Link
          href={item.link}
          aria-label={`View ${item.title} case study`}
          className="flex items-center"
        >
          <Button variant="outline" className="mt-4 items-center">View Portfolio <span className="mb-4">→</span></Button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Card);













