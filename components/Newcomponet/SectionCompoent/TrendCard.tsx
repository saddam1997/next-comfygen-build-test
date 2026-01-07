import React from "react";
import Image from "next/image";

interface TrendCardProps {
  img?: string;
  title: string;
  decs: string;
  num: string;
}

const TrendCard: React.FC<TrendCardProps> = ({ img, title, decs, num }) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        {/* If image is provided, show it */}
        {img?.length > 0 ? (
          <Image
            src={img}
            alt={title}
            width={35}
            height={35}
            className="object-contain"
          />
        ) : (
          // If no image, show the number
          <span className="text-center text-2xl font-bold bg-purple-100 py-2 px-4  rounded-full text-purple-600">{num}</span>
        )}
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p
        className="mt-3 text-white"
        dangerouslySetInnerHTML={{ __html: decs }}
      ></p>
    </div>
  );
};

export default TrendCard;
