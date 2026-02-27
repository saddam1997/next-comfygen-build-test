

import { useState } from "react";
import { MdStars } from "react-icons/md";

interface CardItem {
  CardItem?: string;
  CardDec?: string;
  items?: string[];
}

interface FaqItem {
  id?: string; 
  title?: string;
  desc?: string;
  decs?: string;
  dec1?: string;
  dec2?: string;
  dec3?: string;
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  li5?: string;
  li6?: string;
  li7?: string;
  cards?: CardItem[];
}

interface FaqSectionProps {
  title?: string;
  description?: string;
  faqData?: FaqItem[];
}

export default function FaqSection({
  title = "Frequently Asked Questions",
  description = "",
  faqData = [],
}: FaqSectionProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // 🛡 Safe fallback
  if (!Array.isArray(faqData) || faqData.length === 0) {
    return null;
  }

  return (
    <section className="bg-white lg:py-16 py-10">
      <div className="mx-auto 2xl:max-w-4xl w-full xl:w-5/6 xl:px-0 px-6">
        <div className="space-y-8">

          {/* Heading */}
          <div className="text-center space-y-2">
            <h2 className="xl:text-4xl text-3xl text-[#212121] font-bold">
              {title && title.trim() !== ""
                ? title
                : "Frequently Asked Questions"}
            </h2>
            {description && (
              <p className="text-gray-600 text-sm md:text-base" >
                {description}
              </p>
            )}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = currentIndex === index;

              return (
                <div
                  key={item.id ?? item.title ?? index} // ✅ stable key
                  className="border rounded-[14px] overflow-hidden"
                >
                  {/* Header */}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex(isOpen ? null : index)
                    }
                    className={`flex items-center justify-between w-full px-5 py-4 text-left font-medium transition-colors duration-200 ${isOpen
                        ? "bg-[#5556D1]/10 text-[#212121]"
                        : "bg-white text-[#212121]"
                      }`}
                  >
                    <span className="text-sm md:text-lg font-semibold">
                      {item.title}
                    </span>

                    {/* Icon */}
                    <span
                      className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                        }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen
                        ? "max-h-[1000px] opacity-100 px-5 pb-5"
                        : "max-h-0 opacity-0 overflow-hidden px-5"
                      }`}
                  >
                    <div className="space-y-3 text-sm md:text-base text-gray-800">
                      {item.desc && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.desc,
                          }}
                        />
                      )}

                      {item.decs && <p>{item.decs}</p>}
                      {item.dec1 && <p>{item.dec1}</p>}
                      {item.dec2 && <p>{item.dec2}</p>}
                      {item.dec3 && <p>{item.dec3}</p>}

                      {(item.li1 ||
                        item.li2 ||
                        item.li3 ||
                        item.li4 ||
                        item.li5 ||
                        item.li6 ||
                        item.li7) && (
                          <ul className="list-disc pl-5 space-y-1">
                            {item.li1 && <li>{item.li1}</li>}
                            {item.li2 && <li>{item.li2}</li>}
                            {item.li3 && <li>{item.li3}</li>}
                            {item.li4 && <li>{item.li4}</li>}
                            {item.li5 && <li>{item.li5}</li>}
                            {item.li6 && <li>{item.li6}</li>}
                            {item.li7 && <li>{item.li7}</li>}
                          </ul>
                        )}

                      {/* Nested Cards */}
                      {item.cards?.length ? (
                        <div className="space-y-4">
                          {item.cards.map((card, i) => (
                            <div key={i} className="space-y-2">
                              {card.CardItem && (
                                <h4 className="font-semibold">
                                  {card.CardItem}
                                </h4>
                              )}
                              {card.CardDec && <p>{card.CardDec}</p>}

                              {card.items?.length && (
                                <ul className="space-y-1">
                                  {card.items.map((li, j) => (
                                    <li
                                      key={j}
                                      className="flex gap-2 items-start"
                                    >
                                      <MdStars className="mt-1 text-[#5556D1]" />
                                      {li}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}