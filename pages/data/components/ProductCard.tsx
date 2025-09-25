import React from "react";

interface CardProps {
  image: string;
  link: string;
  heading: string;
}

interface ProductCardProps {
  title: string;
  subtitle:string;
  cards: CardProps[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title,subtitle , cards = [] }) => {
  return (
    <div className="p-4 my-10 lg:p-0">
      <h3 className="max-w-8xl text-5xl font-semibold mb-4 ">{title}</h3>

      <h3 className="max-w-8xl text-xl  mb-6 ">{subtitle}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="border pt-4 w-5/5 rounded-lg">
            <div className="relative flex justify-center ">
              <img
                src={card.image}
                alt="logoimage"
                className="w-auto h-16 object-cover rounded"
              />
            </div>
            <a href={card.link}>
              <h2 className="text-xl text-center mt-4 mb-4 font-semibold ">
                {card.heading}
              </h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
