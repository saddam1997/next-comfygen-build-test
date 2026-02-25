import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  image: string;
  link?: string; // optional
  heading: string;
  description?: string;
}

interface ProductCardProps {
  title: string;
  subtitle: string;
  cards: CardProps[];
}

/* ===============================
   Reusable Wrapper
================================ */
const CardWrapper: React.FC<{
  link?: string;
  children: React.ReactNode;
}> = ({ link, children }) => {
  if (!link) {
    return (
      <div className="border pt-4 rounded-lg cursor-default py-4">
        {children}
      </div>
    );
  }

  return (
    <Link
      href={link}
      className="border pt-4 rounded-lg block hover:shadow-md transition py-4"
    >
      {children}
    </Link>
  );
};

/* ===============================
   Main Component
================================ */
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subtitle,
  cards = [],
}) => {
  return (
    <div className="p-4 my-10 lg:p-0">
      <div className="max-w-7xl mx-auto flex justify-center">
       <div>
         <h3 className="max-w-8xl text-3xl text-center font-semibold mb-4">{title}</h3>
        <h3 className="max-w-8xl text-xl mb-6 text-center">{subtitle}</h3>
       </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:py-2">
        {cards.map((card, index) => (
          <CardWrapper key={index} link={card.link}>
            <div className="relative flex justify-center">
              <Image
                src={card.image}
                width={340}
                height={200}
                alt={card.heading}
                className="w-auto object-cover rounded"
              />
            </div>

            <h2 className="text-xl text-center mt-4 font-semibold">
              {card.heading}
            </h2>

            {card.description && (
              <p
                className="text-base font-normal mt-2 text-center px-4"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            )}
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
