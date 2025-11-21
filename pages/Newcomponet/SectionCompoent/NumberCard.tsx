import React from "react";

interface SolutionItem {
  num: string;
  title: string;
  decs: string;
  list?: string[];
}

interface CustomAISolutionsProps {
  heading: string;
  description: string;
  data?: SolutionItem[]; 
}

const CustomAISolutions: React.FC<CustomAISolutionsProps> = ({
  heading,
  description,
  data = [],
}) => {
  return (
    <section className="lg:py-16 py-10 bg-[#fff]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-4 text-center">
          <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
            <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
              {heading}
            </h2>
            <p>{description}</p>
          </div>

          <div className="grid gap-10 pt-8 text-left lg:grid-cols-2 md:grid-cols-2">
            {data?.map(({ title, decs, num, list }, index) => (
              <div
                key={index}
                className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]"
              >
                <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                  {num}
                </div>
                <h3 className="text-2xl text-[#212121] font-semibold">
                  {title}
                </h3>
                <p dangerouslySetInnerHTML={{ __html: decs }}></p>
                {list && list.length > 0 && (
                  <ul className="list-disc pl-5">
                    {list?.map((item, i) => (
                      <li key={i} className="text-[#000]">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAISolutions;

