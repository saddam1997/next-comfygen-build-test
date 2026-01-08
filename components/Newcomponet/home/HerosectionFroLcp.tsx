interface HeroProps {
  ptag: string;
  children?: React.ReactNode;
}

export default function HerosectionFroLcp({ ptag, children }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* ✅ USER UI LAYER (IMAGE, CTA, MODAL) */}
      {children}

      {/* ✅ SEO + LCP TEXT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto w-10/12 py-32">

          <h1 className="text-white xl:text-5xl sm:text-3xl font-bold leading-tight">
            <span className="block text-xl font-medium">
              Blockchain Development
            </span>
            <span className="block">
              Solution & Service Provider
            </span>
          </h1>

          <p className="mt-4 text-white/90 max-w-xl">
            {ptag}
          </p>

        </div>
      </div>
    </section>
  );
}
