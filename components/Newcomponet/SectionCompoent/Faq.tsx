import { useState } from "react";
import { MdStars } from "react-icons/md";

export default function FaqSection({
  title = "",
  description = "Some answers to the common queries during web and mobile app development.",
  faqData,
}) {
  const [currentCount, setCurrentCount] = useState(null);

  if (!faqData || faqData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white lg:py-16 py-10">
      <div className="mx-auto 2xl:max-w-4xl w-full xl:w-5/6 xl:px-0 px-10">
        <div className="md:space-y-10 space-y-6 w-full">
          <div>
            <h2 className="xl:text-4xl text-3xl text-[#212121] text-center font-bold">
            Frequently Asked Questions
            </h2>
            {/* <p className="text-base text-[#212121] font-normal mt-2 w-full text-center">
              {description}
            </p> */}
          </div>
          <div className="w-full py-4 space-y-4 relative">
            {faqData.map((item:any, index:any) => {
              const {
                title: itemTitle,
                desc,
                decs,
                dec1,
                dec2,
                dec3,
                li1,
                li2,
                li3,
                li4,
                li5,
                li6,
                li7,
                cards,
              } = item;

              return (
                <div
                  key={index}
                  className="bg-white border cursor-pointer w-full rounded-[14px]"
                  onClick={() =>
                    setCurrentCount(currentCount === index ? null : index)
                  }
                >
                  <div
                    className={`flex items-start gap-4 justify-between w-full px-4 py-4 rounded-tr-[14px] rounded-tl-[14px] text-base font-medium text-left md:items-center md:px-6 md:text-lg ${
                      currentCount === index
                        ? "bg-[#5556D1]/10 text-[#212121]"
                        : "text-[#212121]"
                    }`}
                  >
                    <h3 className="w-full text-[14px] font-semibold md:text-lg">
                      {itemTitle}
                    </h3>
                    {currentCount === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-200 rounded-full"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-200 rounded-full"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                      </svg>
                    )}
                  </div>
                  <div
                    className={`${
                      currentCount === index
                        ? "py-2 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-20"
                        : "pt-0 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden"
                    }`}
                  >
                    <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                    <p>{decs}</p>
                    <p>{dec1}</p>
                    <p>{dec2}</p>
                    <p>{dec3}</p>
                    <ul className="px-3">
                      {li1 && <li>{li1}</li>}
                      {li2 && <li>{li2}</li>}
                      {li3 && <li>{li3}</li>}
                      {li4 && <li>{li4}</li>}
                      {li5 && <li>{li5}</li>}
                      {li6 && <li>{li6}</li>}
                      {li7 && <li>{li7}</li>}
                    </ul>
                    {cards && cards.length > 0 && (
                      <div className="space-y-3">
                        {cards.map((card, i) => (
                          <div key={i}>
                            <h4 className="font-bold">{card.CardItem}</h4>
                            <p>{card.CardDec}</p>
                            {card.items && card.items.length > 0 && (
                              <ul>
                                {card.items.map((item, j) => (
                                  <li className="flex gap-1 items-start " key={j}>
                                    {" "}
                                    <MdStars className="mt-1" /> {item}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

