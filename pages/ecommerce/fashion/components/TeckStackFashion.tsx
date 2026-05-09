import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowUpRight } from 'lucide-react';

export default function Tech({ title, description, filterCategory = [], customTechData = null }) {
  const [tech, setTech] = useState(0);
  const router = useRouter(); // ✅ 2. Add router hook

  const defaultTechData = {
    "frontend": [
      { img: "https://www.comfygen.com/media/svg/tech/html5-original.svg", alt: 'Html5', name: "Html5", num: "1" },
      { img: "https://www.comfygen.com/media/svg/tech/css3-original.svg", alt: 'Css3', name: "Css3", num: "2" },
      { img: "https://www.comfygen.com/media/svg/tech/react-original.svg", alt: 'React', name: "React Native", num: "3" },
      { img: "https://www.comfygen.com/media/svg/tech/flutter-plain.svg", alt: 'Flutter', name: "Flutter", num: "4" },
      { img: "https://www.comfygen.com/media/svg/tech/javascript-original.svg", alt: 'Javascript', name: "Javascript", num: "5" },
    ],
    "backend": [
      { img: "https://www.comfygen.com/media/svg/tech/nodejs-original.svg", alt: 'Nodejs', name: "Nodejs", num: "1" },
      { img: "https://www.comfygen.com/media/svg/tech/Python-icon.svg", alt: 'Python', name: "Python", num: "7" },
      { img: "https://www.comfygen.com/comfygen-images/fashion/laravel.svg", alt: 'Laravel', name: "Laravel", num: "8" },
    ],
    "Frameworks": [
      { img: "https://www.comfygen.com/comfygen-images/fashion/Shopify.svg", alt: 'Shopify', name: "Shopify", num: "1" },
      { img: "https://www.comfygen.com/comfygen-images/fashion/Magento.svg", alt: 'Magento', name: "Magento", num: "2" },
      { img: "https://www.comfygen.com/comfygen-images/fashion/Woo1.svg", alt: 'WooCommerce', name: "Woo", num: "3" },
    ],
    "Database": [
      { img: "https://www.comfygen.com/comfygen-images/fashion/mongodb.svg", alt: 'MongoDB', name: "MongoDB", num: "1" },
      { img: "https://www.comfygen.com/comfygen-images/fashion/mysql.svg", alt: 'MySQL', name: "MySQL", num: "2" },
      { img: "https://www.comfygen.com/comfygen-images/fashion/firebase.svg", alt: 'Firebase', name: " Firebase", num: "3" },
    ],
  };


  const techData = customTechData || defaultTechData;


  const filteredTechData = Object.keys(techData)
    .filter((key) => !filterCategory.includes(key))
    .reduce((obj, key) => {
      obj[key] = techData[key];
      return obj;
    }, {});


  const techCategories = Object.keys(filteredTechData);

  return (
    <section className="lg:py-16 py-10 bg-[#F3F4F6]">
      <div className="bg-[#0C0F18] mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 md:py-14 py-8 md:px-10 px-6 rounded-3xl">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">

          <div>
            <div className="py-4">
              <h2 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl text-white">{title}</h2>
              <p className="text-lg mt-2 text-white" dangerouslySetInnerHTML={{__html: description}}/> 
            </div>
            <div className="mt-4">
              
                <button 
                // onClick={() => router.push('/contact-us')} 
                onClick={(e) => {
                            if (e.metaKey || e.ctrlKey) {
                              window.open("/contact-us", "_blank");
                            } else {
                              router.push("/contact-us");
                            }
                          }}
                className="text-white hover:bg-[#5556D1] bg-[#0C0F18] border border-white px-8 py-2.5 text-lg font-semibold rounded-full flex items-center gap-1">
                  Connect Experts <ArrowUpRight />
                </button>
              
            </div>
          </div>

          <div>
            <div className="flex whitespace-nowrap items-center gap-3 justify-start mt-2 overflow-x-auto button-scroll py-2">
              {techCategories.map((key, index) => (
                <span
                  key={index}
                  onClick={() => setTech(index)}
                  className={`px-6 py-2 md:text-base  text-sm font-normal rounded-full cursor-pointer capitalize ${tech === index
                      ? "bg-[#5556D1] border border-[#5556D1] text-white"
                      : "text-white border border-white/20"
                    }`}
                >
                  {key}
                </span>
              ))}
            </div>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 max-h-[275px] overflow-y-auto  overflow-hidden  head-scroll">
              {filteredTechData[techCategories[tech]]?.map((elem) => (
                <div
                  key={elem.num}
                  className="flex items-center border bg-[#181b24] border-white/10 px-6 py-2 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="h-16 w-16 flex items-center justify-center">
                    <Image src={elem.img} alt={elem.name} width={50} height={50} loading="lazy" />
                  </div>
                  <h3 className="text-lg font-semibold text-white ml-3">{elem.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
