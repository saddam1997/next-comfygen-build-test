"use client";

import { useState } from "react";
import { MdStars } from "react-icons/md";
import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { parseHTMLString } from "../../lib/parseHTML";

export default function FaqSectionClient({
  title = "Frequently Asked Questions",
  description = "",
  Data = [],
}) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // ✅ Normalize list (STABLE)
  const normalizeList = (item: any) =>
    [
      item.li1,
      item.li2,
      item.li3,
      item.li4,
      item.li5,
      item.li6,
      item.li7,
    ].filter(Boolean);

  if (!Array.isArray(Data) || Data.length === 0) return null;

  return (
    <section className="bg-white lg:py-16 py-10">
      <div className="mx-auto 2xl:max-w-4xl w-full xl:w-5/6 xl:px-0 px-6">
        <div className="space-y-8">

          {/* Heading */}
          <div className="text-center space-y-2">
            <HeadingTwo
              color="black"
              text={title?.trim() || "Frequently Asked Questions"}
            />
            {description && (
              <ParagraphText color="black" text={description} />
            )}
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            {Data.map((item: any, index: number) => {
              const isOpen = currentIndex === index;
              const listItems = normalizeList(item);

              return (
                <div
                  key={item.id || item.title || `faq-${index}`}
                  className="border rounded-[14px] overflow-hidden"
                >
                  {/* Header */}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex(isOpen ? null : index)
                    }
                    className={`flex items-center justify-between w-full px-5 py-4 ${
                      isOpen
                        ? "bg-[#5556D1]/10"
                        : "bg-white"
                    }`}
                  >
                    <h3 className="text-sm md:text-lg font-semibold">
                      {item.title}
                    </h3>

                    <span
                      className={`transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Content */}
                  <div
                    className={`transition-all duration-300 ${
                      isOpen
                        ? "max-h-[1000px] opacity-100 px-5 pb-5"
                        : "max-h-0 opacity-0 overflow-hidden px-5"
                    }`}
                  >
                    <div className="space-y-3 text-sm md:text-base text-gray-800">

                      {/* TEXT */}
                      {item.desc && <p>{parseHTMLString(item.desc)}</p>}
                      {item.decs && <p>{item.decs}</p>}
                      {item.dec1 && <p>{item.dec1}</p>}
                      {item.dec2 && <p>{item.dec2}</p>}
                      {item.dec3 && <p>{item.dec3}</p>}

                      {/* ✅ FINAL FIX (NO hydration issue) */}
                      {listItems.length > 0 && (
                        <ul className="list-disc pl-5 space-y-1">
                          {listItems.map((li: string, i: number) => (
                            <li key={`${item.id || index}-${i}`}>
                              {parseHTMLString(li)}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Nested Cards */}
                      {item.cards?.length > 0 && (
                        <div className="space-y-4">
                          {item.cards.map((card: any, i: number) => (
                            <div key={`card-${index}-${i}`}>
                              {card.CardItem && (
                                <h4 className="font-semibold">
                                  {card.CardItem}
                                </h4>
                              )}

                              {card.CardDec && <p>{card.CardDec}</p>}

                              {card.items?.length > 0 && (
                                <ul className="space-y-1">
                                  {card.items.map((li: string, j: number) => (
                                    <li key={`item-${i}-${j}`} className="flex gap-2">
                                      <MdStars className="mt-1 text-[#5556D1]" />
                                      {li}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

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