    import React from "react";

interface UseCaseItem {
  num?: string;
  title?: string;
  decs?: string;
}

interface UseCaseSectionProps {
  heading?: string;
  description?: string;
  data?: UseCaseItem[];
}

const UseCaseSection: React.FC<UseCaseSectionProps> = ({
  heading,
  description,
  data,
}) => {
  return (
    <section className="lg:py-16 py-10 bg-[#fff]">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="space-y-4 text-center">
          <div className="flex flex-col justify-center text-center lg:w-4/6 mx-auto">
            {heading && (
              <h2 className="text-4xl font-bold text-[#212121] text-center leading-[3rem]">
                {heading}
              </h2>
            )}
            {description && <p>{description}</p>}
          </div>

          <div className="grid gap-10 pt-8 text-left md:grid-cols-2 grid-cols-1">
            {data?.map((elem, index) => (
              <div
                key={index}
                className="border-2 p-8 space-y-2 bg-white border-[#5556D1]/20 rounded-[40px]"
              >
                {elem?.num && (
                  <div className="w-20 h-20 bg-[#5556D1]/10 rounded-[17px] flex justify-center items-center text-[32px] font-semibold text-[#5556D1]">
                    {elem.num}
                  </div>
                )}
                {elem?.title && (
                  <h3 className="text-2xl text-[#212121] font-semibold">
                    {elem.title}
                  </h3>
                )}
                {elem?.decs && (
                  <p
                    dangerouslySetInnerHTML={{ __html: elem.decs }}
                  ></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
