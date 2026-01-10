import { useState } from "react";
import { LiaQuestionSolid } from "react-icons/lia";

interface FaqData {
  num: string;
  title: string;
  img: string;
  decs: string;
  url?: string;
}

interface WildSolutionProps {
  title: string;
  faqData: FaqData[];
}

const WildSolution: React.FC<WildSolutionProps> = ({ faqData }) => {
  const [currentCount, setCurrentCount] = useState<any>(null);

  if (!faqData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative w-full">
      <div className="mt-6 px-2 sm:px-4">
        <div className="space-y-6 md:space-y-10 w-full">
          <div className="relative z-40 grid lg:grid-cols-2 gap-4 md:gap-6">
            {faqData.map((elem: any, index: number) => {
              const { title, desc, decs, dec1 } = elem;

              return (
                <div
                  key={index}
                  className="w-full relative"
                  onClick={() =>
                    setCurrentCount(currentCount === index ? null : index)
                  }
                >
                  {/* HEADER */}
                  <div
                    className={`flex items-start md:items-center justify-between gap-3
                    w-full px-4 py-3 md:px-6 md:py-4
                    text-left font-medium
                    transition-colors duration-200
                    ${
                      currentCount === index
                        ? "bg-[#5556D1] text-white"
                        : "bg-[#5556D1]/20 text-slate-800"
                    }`}
                  >
                    <h3 className="text-[14px] md:text-lg font-semibold leading-snug break-words">
                      {title}
                    </h3>

                    {/* ICON */}
                    {currentCount === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 bg-white p-1 rounded-full"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#0E1F51"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 p-1 rounded-full"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                      </svg>
                    )}
                  </div>

                  {/* BODY */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      currentCount === index
                        ? "max-h-[500px] px-4 md:px-6 py-3 md:py-4 bg-[#26314F14] rounded-b-lg"
                        : "max-h-0 px-4 md:px-6 bg-[#26314F14]"
                    }`}
                  >
                    <div className="space-y-2 text-sm md:text-base text-black leading-relaxed">
                      <p>{desc}</p>
                      <p>{decs}</p>
                      <p>{dec1}</p>
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
};

export default WildSolution;
