const CTASection = () => {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-[#0e1f4a] via-[#1b2d6b] via-[#2d1458] to-[#4a1e10] relative overflow-hidden py-16 md:py-20 px-5 md:px-8 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_45%,rgba(0,168,219,0.16),transparent),radial-gradient(ellipse_45%_55%_at_12%_65%,rgba(234,98,36,0.13),transparent)] pointer-events-none" />
      <div className="relative z-10">
        <div className="inline-block bg-white/12 text-[#00A8DB] border border-[rgba(0,168,219,0.32)] py-1.5 px-5 rounded-full text-[11px] font-bold uppercase tracking-wide mb-5 backdrop-blur-sm">
          Get Started Today
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] text-[clamp(26px,3.5vw,44px)] font-extrabold text-white mb-3.5 leading-[1.15]">
          Ready to Launch Your<br />Grocery Delivery App?
        </h2>
        <p className="text-[17px] text-white mb-9 max-w-[570px] mx-auto">
          Join 150+ businesses who trusted Comfygen. Free consultation, NDA signed upfront, fixed price in INR — no surprises.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap mb-7">
          <button
            onClick={scrollToQuote}
            className="bg-white text-[#406AAF] py-4 px-8.5 rounded-xl font-bold text-base shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all font-['Plus_Jakarta_Sans']"
          >
            Schedule Free Consultation →
          </button>
          <a href="https://wa.me/919587867258" className="bg-[#25D366] text-white py-4 px-6 rounded-xl font-semibold text-base flex items-center gap-2.5 shadow-md hover:-translate-y-0.5 transition-transform">
            💬 Chat on WhatsApp
          </a>
        </div>
        <div className="flex gap-7 justify-center flex-wrap">
          {['No commitment required', 'Response in under 4 hours', 'NDA signed before discussion'].map((badge, idx) => (
            <div key={idx} className="text-white/55 text-sm flex items-center gap-2">
              <span className="text-[#00A8DB] font-bold">✓</span> {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTASection;