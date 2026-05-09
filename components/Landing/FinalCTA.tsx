'use client';

import LeadForm from './LeadForm';

export default function FinalCTA({DATA}: any) {
  return (
    <section className="relative overflow-hidden bg-[#1A1614] py-12 sm:py-16 lg:py-24 text-white">
      
      {/* Blur Background */}
      <div className="pointer-events-none absolute -top-[100px] -right-[100px] h-[300px] w-[300px] rounded-full bg-[#FF5A3C] opacity-40 blur-[120px] sm:-top-[200px] sm:-right-[200px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6">
        
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            
            <h2 className="mb-4 font-[Fraunces] text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[32px] md:text-[36px] lg:text-[clamp(32px,4vw,48px)]">
             {DATA.subtitle.start}{' '}
              <span className=" text-[#FF5A3C]">
                {DATA.subtitle.highlight}
              </span>
              {DATA.subtitle.end}
            </h2>

            <p className="mb-5 text-[14px] leading-[1.6] text-white/75 sm:mb-6 sm:text-[15px] lg:text-[17px]">
            {DATA.description}
            </p>

            {/* Trust Pills */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start lg:gap-6">
              {DATA.pills.map((pill: string, index: number) => (
                <span key={index} className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/90 sm:px-3.5 sm:py-[7px] sm:text-[12px] lg:px-4 lg:py-2 lg:text-[13px]">
                  {pill}
                </span>
              ))  }


            </div>
          </div>

   
          <LeadForm />

        </div>
      </div>
    </section>
  );
}