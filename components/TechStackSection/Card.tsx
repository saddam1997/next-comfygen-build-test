import Image from "next/image";
import Link from "next/link";

const Card = ({ title, image, link }) => {
  const cardContent = (
    <div
      className={`rounded-2xl h-full overflow-hidden shadow-lg transition-transform duration-300 ${
        link ? "hover:scale-105 cursor-pointer" : "opacity-80 cursor-default"
      }`}
    >
      <Image
        src={image}
        alt={title}
        width={372}
        height={209}
        className="w-full h-full object-contain"
      />
    </div>
  );

  // If link exists → use Link
  if (link) {
    return <Link href={link}>{cardContent}</Link>;
  }

  // If link is null → render normal div
  return cardContent;
};

export default Card;