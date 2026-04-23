// "use client";

export default function HeroLoader() {
  return (
    <section
      className="relative flex  min-h-[50vh] sm:min-h-[50vh] lg:min-h-[50vh] items-center bg-[#5951cd] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
      aria-hidden="true"
    >
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="w-full lg:max-w-[65%] xl:max-w-[58%] space-y-4 sm:space-y-5 lg:space-y-6 animate-pulse">
          <div className="h-6 sm:h-8 lg:h-10 bg-white/30 rounded-md w-3/4" />
          <div className="h-6 sm:h-8 lg:h-10 bg-white/30 rounded-md w-2/3" />

          <div className="space-y-2 pt-2">
            <div className="h-4 bg-white/20 rounded w-full" />
            <div className="h-4 bg-white/20 rounded w-5/6" />
            <div className="h-4 bg-white/20 rounded w-4/6" />
          </div>

          <div className="pt-4">
            <div className="h-[55px] w-[220px] rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
