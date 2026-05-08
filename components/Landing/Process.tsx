'use client';

const steps = [
  {
    num: '01',
    title: 'Discovery & Planning',
    description:
      'Free 30-min consultation. We map your business model, target users, must-have features, and create a fixed-cost roadmap.',
    timeline: 'Week 1',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description:
      'Wireframes, interactive Figma prototypes, and brand-aligned design system. We iterate until you love every screen.',
    timeline: 'Weeks 2–3',
  },
  {
    num: '03',
    title: 'Development Sprints',
    description:
      'Agile 2-week sprints with weekly demos. Frontend, backend, APIs, and integrations all built in parallel by senior devs.',
    timeline: 'Weeks 4–10',
  },
  {
    num: '04',
    title: 'QA & Testing',
    description:
      'Manual + automated testing across devices, OS versions, payment flows, and edge cases. 99% bug-free at handoff.',
    timeline: 'Weeks 10–11',
  },
  {
    num: '05',
    title: 'Launch & Deployment',
    description:
      'App Store + Play Store submission, server setup, payment gateway live testing, and a soft launch with first 100 users.',
    timeline: 'Week 12',
  },
  {
    num: '06',
    title: 'Support & Scale',
    description:
      '3 months free maintenance. Bug fixes, OS updates, performance monitoring. Optional retainer for new features.',
    timeline: 'Post-Launch',
  },
];

export default function Process() {
  return (
    <section className="bg-[#FAF6F2] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-[720px] text-center sm:mb-10 lg:mb-14">
          <span className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5A3C] sm:text-[12px]">
            Our Process
          </span>

          <h2 className="mb-4 font-[Fraunces] text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1A1614] sm:text-[32px] md:text-[36px] lg:text-[44px] lg:leading-[1.1]">
            From idea to live app in{' '}
            <em className="font-inherit italic text-[#FF5A3C]">
              6 clear steps
            </em>
          </h2>

          <p className="text-[14px] leading-[1.6] text-[#7A716C] sm:text-[15px] lg:text-[17px]">
            No black-box development. You&apos;ll know exactly what&apos;s
            happening at every stage, with weekly demos and 2-week sprints.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-[18px] lg:grid-cols-3 lg:gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative cursor-pointer rounded-2xl border border-[#E8E2DD] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-6 lg:p-7"
            >
              {/* Number */}
              <div className="mb-2 font-[Fraunces] text-[40px] font-semibold leading-none tracking-[-0.04em] text-[#FFF0EB] sm:text-[48px] md:text-[52px] lg:text-[56px]">
                {step.num}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-[15px] font-bold text-[#1A1614] sm:text-[16px] lg:text-[17px]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] leading-[1.55] text-[#7A716C] sm:text-[13px] lg:text-[14px]">
                {step.description}
              </p>

              {/* Timeline */}
              <span className="mt-3 inline-block rounded-full bg-[#FFF0EB] px-2 py-[3px] text-[10px] font-bold text-[#E63E20] sm:mt-3 sm:px-[10px] sm:py-1 sm:text-[11px]">
                {step.timeline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}