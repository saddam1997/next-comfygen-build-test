'use client';

import { useState } from 'react';

const faqs = [
  {
    question:
      'How much does it cost to build a food delivery app like Zomato or Swiggy?',
    answer: `
      <p>It depends on features, platforms, and complexity. Here's a clear breakdown:</p>

      <p><span class="font-semibold text-gray-700">Starter MVP:</span> $15,000 – $25,000 (single restaurant or basic multi-vendor, 8–12 weeks)</p>

      <p><span class="font-semibold text-gray-700">Growth Marketplace:</span> $25,000 – $50,000 (full multi-vendor with real-time tracking, 12–16 weeks)</p>

      <p><span class="font-semibold text-gray-700">Enterprise:</span> $50,000+ (AI features, multi-country, advanced analytics, 16–24 weeks)</p>
      <p>
        Want a precise quote for your idea?
        <a href="#hero-form" class="font-semibold text-[#FF5A3C]">
          Book a free consultation
        </a>
        — we'll send a custom estimate within 24 hours.
      </p>
    `,
  },
  {
    question: 'How long does it take to build a food delivery app?',
    answer: `
      Our timelines depend on the package:
      white-label apps launch in <strong>2–4 weeks</strong>,
      custom MVPs take <strong>8–12 weeks</strong>,
      and full multi-vendor marketplaces with AI take
      <strong>16–24 weeks</strong>.

      We work in 2-week sprints with weekly demos so you see working software regularly — not just at the end.
    `,
  },
  {
    question: 'Do I get 100% source code ownership?',
    answer: `
      Yes — you own 100% of the source code, database, and all intellectual property.

      We assign full IP rights to you in the project contract.
      There are no ongoing license fees.

      After delivery, you're free to host the app yourself or work with any other team.
    `,
  },
  {
    question:
      'Can you build an app exactly like Zomato, Swiggy, UberEats, or DoorDash?',
    answer: `
      Absolutely.

      We offer two routes:
      ready-made <strong>clone apps</strong> (faster, more affordable, launched in 2–4 weeks)
      or <strong>fully custom-built</strong> platforms inspired by these market leaders.

      Our clones aren't templates — they're production-tested codebases customized with your branding, features, and business logic.
    `,
  },
  {
    question:
      "What's included in your food delivery app development service?",
    answer: `
      Every package includes:
      customer app (iOS + Android),
      restaurant management app,
      delivery driver app,
      web admin panel,
      payment gateway integration,
      real-time GPS tracking,
      push notification system,
      analytics dashboard,
      app store deployment,
      and 3 months of free post-launch support.

      Everything you need to run a live food delivery business from day one.
    `,
  },
  {
    question: 'Do you sign an NDA before I share my idea?',
    answer: `
      Yes.

      We sign a mutual NDA <strong>before</strong> you share any sensitive details.

      Your business idea, designs, customer data, and source code remain 100% confidential.

      NDA is provided at no cost — just request it on the form above or via WhatsApp.
    `,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF6F2] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-[720px] text-center sm:mb-10 lg:mb-14">
          <span className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF5A3C] sm:text-[12px]">
            FAQs
          </span>

          <h2 className="mb-4 font-[Fraunces] text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1A1614] sm:text-[32px] md:text-[36px] lg:text-[44px] lg:leading-[1.1]">
            Got questions?{' '}
            <em className="font-inherit italic text-[#FF5A3C]">
              We&apos;ve got answers.
            </em>
          </h2>

          <p className="text-[14px] leading-[1.6] text-[#7A716C] sm:text-[15px] lg:text-[17px]">
            Everything food entrepreneurs ask before working with us.
            Don&apos;t see your question? Just ask on the form above.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-[820px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`mb-3 overflow-hidden rounded-[14px] border bg-white transition-all duration-200 hover:border-[#FF5A3C] ${
                  isOpen ? 'border-[#FF5A3C]' : 'border-[#E8E2DD]'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left text-[15px] font-semibold text-[#1A1614] sm:px-6 sm:text-[16px]"
                >
                  <span className="pr-4">{faq.question}</span>

                  <span
                    className={`shrink-0 text-[24px] font-light text-[#FF5A3C] transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-5 pb-6 text-[14px] leading-[1.7] text-gray-700 sm:px-6 sm:text-[15px]"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}