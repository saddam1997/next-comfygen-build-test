import Image from "next/image";
import Link from "next/link";

const Card = ({ title, image, link }) => {
  return (
 <Link href={link}>
      <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <Image
          src={image}
          alt={title}
          width={372}
          height={209}
          className="w-full h-auto object-cover"
        />
      </div>
    </Link>
  )
}

export default Card
