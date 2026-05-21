

const Process = ({DATA}) => {
  return (
    <section className="bg-gradient-to-br from-[#f0f5ff] via-[#f5eeff] to-[#fff5f0] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#FEF1EB] border border-[rgba(234,98,36,0.2)] text-[#EA6224] py-1.5 px-4 rounded-full text-[11px] font-bold uppercase tracking-wide mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#406AAF] via-[#7D3C97] to-[#EA6224]" />{DATA.badge.text}
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.18] mb-3.5 text-[#212121]">
            {DATA.heading.title}<span className="bg-gradient-to-r from-[#F26622] via-[#7D3C97] to-[#406AAF] bg-clip-text text-transparent">{DATA.heading.highlight}</span> {DATA.heading.end}
          </h2>
          <p className="text-base text-[#64748b] max-w-[600px] mx-auto leading-relaxed">
            {DATA.description} 
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - hidden on mobile, visible on desktop */}
          <div className="absolute top-[26px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#406AAF] via-[#7D3C97] to-[#EA6224] hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 relative">
            {DATA?.steps.map((step:any, idx:any) => (
              <div key={idx} className="relative px-3.5 pb-7 text-center z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#406AAF] via-[#7D3C97] to-[#EA6224] text-white font-['Plus_Jakarta_Sans'] text-xl font-extrabold flex items-center justify-center mx-auto mb-4 shadow-md relative z-10">
                  {step.num}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[15px] text-[#212121] mb-1.5">{step.title}</h4>
                <p className="text-[13.5px] text-[#64748b] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;