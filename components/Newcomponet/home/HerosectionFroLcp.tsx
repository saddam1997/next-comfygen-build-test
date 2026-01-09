interface HeroProps {
  ptag: string;
  children?: React.ReactNode;
  openModal: () => void;
}

export default function HerosectionFroLcp({ ptag, children , openModal}: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* ✅ USER UI LAYER (IMAGE, CTA, MODAL) */}
      {children}

      {/* ✅ SEO + LCP TEXT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto w-10/12 py-24">

          <h1 className="text-white xl:text-5xl sm:text-3xl font-bold leading-tight space-y-4">
            <span className="block text-xl font-medium">
              Blockchain Development
            </span>
            <span className="block">
              Solution & Service Provider
            </span>
          </h1>

          <p className="mt-4 text-white/90 max-w-xl" dangerouslySetInnerHTML={{ __html: ptag }}></p>

           <button
              onClick={openModal}
              className="
                mt-6
                inline-flex items-center gap-4
                bg-gradient-to-r from-[#F16024] via-[#B92A6C] to-[#EE363E]
                text-white rounded-full shadow-lg
                px-6 py-3 sm:px-8 sm:py-4
                text-sm sm:text-base lg:text-lg
                font-semibold
                transition-transform duration-300
                hover:scale-105
              "
            >
              Talk to an expert!
              <svg width="22" height="12" viewBox="0 0 24 12">
                <path
                  d="M0 6h22M22 6l-5-5M22 6l-5 5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>

        </div>
      </div>
    </section>
  );
}
