import React from 'react';

const CardListMinimal = ({ techData = {} }:any) => {
  if (!techData || !techData.cardData) return null; // prevent crash

  return (
    <section className='py-10 bg-white flex justify-center'>
      <div className='w-full max-w-7xl'>
        
        <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto mb-10">
          <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
            {techData?.heading || ""}
          </h2>

          {techData?.subheading && (
            <p dangerouslySetInnerHTML={{ __html: techData.subheading }} />
          )}
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-start gap-10'>
          {techData?.cardData?.slice(0, 2)?.map((item: any, index: any) => (
            <div
              key={index}
              className='w-full max-w-md border-2 p-8 space-y-6 bg-white border-[#5556D1]/40 rounded-2xl shadow-md'
            >
              <h3 className='text-2xl text-[#212121] font-semibold text-start'>
                {item?.title}
              </h3>

              <ul className='mt-4 grid grid-cols-2 gap-x-6 gap-y-3'>
                {item?.listItems?.map((li: any, idx: any) => (
                  <li
                    key={idx}
                    className="text-base font-semibold flex items-center gap-2"
                  >
                    <span className="w-3 h-3 rounded-full border-2 border-blue-500 mt-1"></span>
                    <span dangerouslySetInnerHTML={{ __html: li }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CardListMinimal;