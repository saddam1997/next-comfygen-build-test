// "use client";

import React from "react";



const WhoCanStartClient = ({ card }:any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-[1px] bg-white">

      {card?.map((item:any, index) => (
        <article
          key={item.id ?? index} // ✅ better key
          className="bg-[#5556D1] text-white p-8 flex flex-col justify-start transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">
            {item.heading}
          </h3>

          <p
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.description || "" }}
          />
        </article>
      ))}

    </div>
  );
};

export default WhoCanStartClient;