import Link from "next/link";
import { useState } from "react";
import { Plus } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Minus } from 'lucide-react';
import Image from 'next/image';

const ItemDataSection = ({ Head, ItemData, imageSrc, buttonText, buttonLink }) => {

    const [currentCount, setCurrentCount] = useState(0);
    if (!Head || !ItemData) {
        return <div>Loading...</div>;
    }

    return (
      <section className="lg:py-16 py-10 bg-gradient-to-r from-[#272868] to-[#5556D1] text-white">
      <div className="items-center space-y-10 lg:flex lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="lg:flex items-start lg:space-x-10 lg:space-y-0 space-y-6 w-full gap-10">
    
          <div className="w-full lg:text-left">
            {Head.map((elem) => (
              <div key={elem.num} className="w-full lg:text-left">
                <div className="space-y-6">
                  <Image
                    className=""
                    src={imageSrc}
                    alt={elem.title}
                    width={754}
                    height={210}
                  />
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold lg:text-3xl text-white">
                      {elem.title}
                    </h2>
                    <p
                      className="text-base text-gray-200"
                      dangerouslySetInnerHTML={{ __html: elem.desc }}
                    />
                    <p
                      className="text-base text-gray-200"
                      dangerouslySetInnerHTML={{ __html: elem.desc1 }}
                    />
                  </div>
                  <div className="flex">
                    <Link href={buttonLink || "#"} passHref>
                      <button className="text-base font-medium text-white border border-white rounded-full px-6 py-2.5 text-center hover:bg-white hover:text-[#5556D1] transition duration-300 flex gap-2 items-center">
                        {buttonText} <ArrowUpRight />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          <div className="w-full space-y-4">
            {ItemData.map((elem, index) => (
              <div
                key={elem.num}
                className={`p-4 mt-2 border border-white/40 rounded-lg cursor-pointer w-full ${
                  currentCount === index ? "bg-white/10 text-white" : "bg-white text-black"
                }`}
                onClick={() => setCurrentCount(currentCount === index ? null : index)}
              >
                <div className="flex justify-between w-full text-base font-medium text-left rounded-lg md:text-lg">
                  <span
                    className={`font-semibold lg:text-lg text-base ${
                      currentCount === index ? "text-white" : "text-black"
                    }`}
                  >
                    {elem.title}
                  </span>
                  {currentCount === index ? (
                    <Minus size={26} className={currentCount === index ? "text-white" : "text-black"} />
                  ) : (
                    <Plus size={26} className={currentCount === index ? "text-white" : "text-black"} />
                  )}
                </div>
                <div
                  className={`pt-4 text-medium ${
                    currentCount === index ? "text-white" : "hidden"
                  }`}
                  dangerouslySetInnerHTML={{ __html: elem.desc }}
                />
              </div>
            ))}
          </div>
    
        </div>
      </div>
    </section>
    );    
};

export default ItemDataSection;

export async function getServerSideProps({ res }) {
  const resData = await fetch(process.env.URL + "/api/v1/posts?per_page=3");
  if (!resData.ok) {
    // console.error("API Request failed:", await resData);
    return { props: { initialData: [] } };
  }
  // console.log(resData)
  const data = await resData.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return { props: { initialData: data } };
}

