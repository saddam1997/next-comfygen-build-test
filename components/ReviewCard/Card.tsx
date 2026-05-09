

import Image from "next/image";
import Link from "next/link";
import ParagraphText from "../ui/ParagraphText";

export default function Card({ item }: any) {
  return (
    <div className="h-full">
      <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition duration-300 relative">

        {/* Top Section */}
        <div>
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500">{item.location}</p>
          </div>

          {/* Content */}
          <p className="text-gray-600 text-sm ">
            {item.text}
          </p>
        </div>

        {/* Bottom Badge */}
        <div className="mt-4  absolute top-0 right-2">
          <Link
            href={item.URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center  w-fit gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
          >
            <Image
              src={item.image}
              alt={item.Source}
              width={80}
              height={40}
              className="h-5 w-auto object-contain"
            />
            <p className="text-xs mt-0.5 text-gray-600 font-medium">
              {/* {item.Source}  */}
              Review
            </p>
          </Link>
        </div>
        {/* <div className="mt-4 lg:hidden ">
          <Link
            href={item.URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center  w-fit gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
          >
            <Image
              src={item.image}
              alt={item.Source}
              width={80}
              height={40}
              className="h-5 w-auto object-contain"
            />
            <p className="text-xs mt-0.5 text-gray-600 font-medium">
              {item.Source} Review
            </p>
          </Link>
        </div> */}

      </div>
    </div>
  );
}