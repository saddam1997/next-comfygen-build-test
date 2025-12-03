import { useState } from "react";
import { LiaQuestionSolid } from "react-icons/lia";

interface FaqData {
  num: string; // added num field to match Arena structure
  title: string;
  img: string; // added img field to match Arena structure
  decs: string; // corrected desc to decs to match Arena structure
  url?: string; // made url optional as not all objects have it
}

interface WildSolutionProps {
  title: string;
  faqData: FaqData[];
}

const WildSolution: React.FC<WildSolutionProps> = ({ faqData }) => {
  const [currentCount, setCurrentCount] = useState("");
  const data = faqData;

  if (!faqData) {
    return <div>Loading...</div>;
  }

  return (
    <section className=" relative">
      <div className="mt-6">
        <div className="md:space-y-10 space-y-6 w-full">
          <div className="w-full  relative  z-40 grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqData.map((elem: any, index: any) => {
              const { title, desc, decs, dec1, faqList } = elem;
              return (
                <div
                  key={index}
                  className=" cursor-pointer w-full relative"
                  onClick={() =>
                    setCurrentCount(currentCount === index ? false : index)
                  }
                 >
                  <div className={`flex items-start gap-4 justify-between w-full px-4 py-4   text-base font-medium text-left md:items-center md:px-6 text-slate-800 md:text-lg  ${currentCount === index ? "bg-[#5556D1] text-white" : "bg-[#5556D1]/20"}`} >
                    <div className="flex items-center gap-1">
                      <h3 className="w-full text-[14px] font-semibold md:text-lg">
                        {title}
                      </h3>
                    </div>
                    {currentCount === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-200 bg-white p-1 rounded-full"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#0E1F51"
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
                        className="transition-all duration-200  p-1 rounded-full "
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
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
                    className={
                      currentCount === index
                        ? "py-2 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-20  bg-[#26314F14] rounded-b-lg"
                        : "pt-0 px-6 text-black space-y-3 text-sm md:text-base transition-height duration-200 min-h-0 h-0 overflow-hidden bg-[#26314F14]"
                    }
                  >
                    <p>{desc}</p>
                    <p>{decs}</p>
                    <p>{dec1}</p>
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

export default WildSolution
