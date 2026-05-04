

import HeadingTwo from "../ui/HeadingTwo";
import ParagraphText from "../ui/ParagraphText";
import { parseHTMLString } from "../../lib/parseHTML";

export default function Card({ SliderDATA }: any) {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="">
       
        <header className="text-center max-w-7xl space-y-3 mx-auto mb-10">
          <HeadingTwo  color="black" text={SliderDATA.heading} />
          <ParagraphText  color="black" text={SliderDATA.description} />
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SliderDATA?.IndustriesServe?.map((app:any, index:any) => (
            <article
              key={index} // ✅ stable key
              className="group relative  bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 flex flex-col hover:shadow-md hover:-translate-y-1"
            >
              
              {/* Top bar */}
              <div className="h-1 w-full bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-[#5951cd] group-hover:via-[#5951cd] group-hover:to-[#5951cd] transition-all duration-300" />

              <div className="p-6 flex flex-col flex-1">
                
                {/* Title */}
                <h3 className="text-base font-extrabold uppercase tracking-wide leading-snug text-gray-900 group-hover:text-block transition-colors duration-200">
                  {app.title}
                </h3>

                <div className="h-px mb-4 bg-gray-100 group-hover:bg-[#5951cd] transition-all duration-300" />

                {/* Description */}
                <p className="text-gray-800 text-sm leading-relaxed flex-1 min-h-[100px]">
                  {parseHTMLString(app.description)}
                </p>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#5951cd] to-[#5951cd] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



















