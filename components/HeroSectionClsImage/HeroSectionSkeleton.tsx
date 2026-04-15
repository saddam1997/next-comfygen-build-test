// HeroSectionSkeleton.tsx
export default function HeroSectionSkeleton() {
  return (
    <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-[#1a1a4f] animate-pulse">
      
      {/* Background Skeleton */}
      <div className="absolute inset-0 bg-gray-700" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a4f]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-16 flex items-center h-full">
        <div className="max-w-[600px] space-y-5 w-full">

          {/* Heading */}
          <div className="h-8 sm:h-10 w-[80%] bg-gray-500 rounded" />

          {/* Paragraph */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-500 rounded" />
            <div className="h-4 w-[90%] bg-gray-500 rounded" />
            <div className="h-4 w-[70%] bg-gray-500 rounded" />
          </div>

          {/* Button */}
          <div className="h-[50px] w-[180px] bg-gray-500 rounded" />

          {/* Stats */}
          <div className="mt-6 h-[80px] w-full bg-gray-500 rounded" />

        </div>
      </div>
    </section>
  );
}