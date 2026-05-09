import React, { useState } from "react";


const CardItem = ({ heading, subheading, techData = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? techData : techData.slice(0, 6);

  const toggleShow = () => setShowAll(!showAll);

  return (
    <section className="lg:py-16 py-10 bg-[#fff]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-4 text-center">
          <div className="flex flex-col justify-center text-center lg:w-5/6 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] leading-[3rem]">
              {heading}
            </h2>
            <p className="pt-4" dangerouslySetInnerHTML={{ __html: subheading }} />
          </div>

          <div className="grid gap-10 pt-8 text-left lg:grid-cols-3 md:grid-cols-2">
            {visibleItems.map((item, index) => {
              const { title, decs, desc1, desc2, listItems = [] } = item;
              return (
                <div
                  key={index}
                  className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/40 rounded-2xl"
                >
                  <h3 className="text-2xl text-[#212121] font-semibold">
                    {title}
                  </h3>
                  <p
                    className="text-base font-normal mt-2"
                    dangerouslySetInnerHTML={{ __html: decs }}
                  />
                  <p className="text-base font-normal mt-2">{desc1}</p>
                  <p className="text-base font-normal mt-2">{desc2}</p>
                  <ul className="mt-4 space-y-2">
                    {listItems.map((liItem, idx) => (
                      <li
                        key={idx}
                        className="text-base font-normal flex items-center gap-1"
                      >
                       {liItem}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {techData.length > 6 && (
            <div className="pt-8 text-center">
              <button
                onClick={toggleShow}
                className="px-6 py-2 bg-[#5556D1] text-white rounded-full font-medium hover:bg-[#3f40a0] transition-all"
              >
                {showAll ? "Show Less" : "See More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardItem;
