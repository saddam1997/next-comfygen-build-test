// app/thank-you/page.tsx
import Link from 'next/link';

export default function ThankYou() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-x-hidden bg-gradient-to-br from-[#0e1f4a] via-[#1b2d6b] via-35% via-[#2d1458] via-65% to-[#4a1e10] p-5 sm:p-8">
            {/* Background glow + mesh effects - matching the original */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_90%_30%,rgba(0,168,219,0.16)_0%,transparent_60%),radial-gradient(ellipse_40%_55%_at_5%_85%,rgba(234,98,36,0.13)_0%,transparent_55%),radial-gradient(ellipse_45%_50%_at_50%_-5%,rgba(64,106,175,0.16)_0%,transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            {/* Card */}
            <div className="relative z-10 w-full max-w-[560px] animate-[rise_0.65s_cubic-bezier(0.16,1,0.3,1)_both] overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(10,20,80,0.40)]">
                {/* Top colored bar */}
                <div className="h-1 bg-gradient-to-r from-[#406AAF] via-[#6e359a] to-[#EA6224]" />

                <div className="p-9 text-center sm:p-11">
                    {/* Success Badge */}
                    <div className="mx-auto mb-7 flex h-[92px] w-[92px] animate-[pop_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.3s_both] items-center justify-center rounded-2xl bg-gradient-to-br from-[#406AAF] via-[#7D3C97] to-[#EA6224] shadow-[0_14px_34px_rgba(125,60,151,0.38)]">
                        <svg viewBox="0 0 24 24" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-[46px] w-[46px] stroke-white">
                            <path
                                className="stroke-dasharray-[42] stroke-dashoffset-[42] animate-[draw_0.5s_ease-out_0.8s_forwards]"
                                d="M20 6L9 17l-5-5"
                            />
                        </svg>
                    </div>

                    {/* Eyebrow */}
                    <div>
                        <div className="mb-[18px] inline-flex items-center gap-[7px] rounded-full border border-[rgba(64,106,175,0.20)] bg-[#f8faff] px-4 py-[5px] text-xs font-bold uppercase tracking-[0.6px] text-[#406AAF]">
                            <span className="h-[6px] w-[6px] rounded-full bg-gradient-to-br from-[#406AAF] via-[#7D3C97] to-[#EA6224]" />
                            Request Received
                        </div>

                        {/* Heading */}
                        <h1 className="mb-[14px] font-['Plus_Jakarta_Sans',sans-serif] text-[clamp(26px,4vw,36px)] font-extrabold leading-[1.15] text-[#212121]">
                            Thank you! Your request is{' '}
                            <span className="bg-gradient-to-r from-[#F26622] via-[#7D3C97] to-[#406AAF] bg-clip-text text-transparent">
                                on its way.
                            </span>
                        </h1>

                        {/* Lead text */}
                        <p className="mx-auto mb-[30px] max-w-[430px] text-base leading-relaxed text-[#64748b]">
                            We&apos;ve received your grocery app enquiry and a Comfygen specialist is already reviewing it. Expect a{' '}
                            <strong className="font-semibold text-[#406AAF]">detailed proposal within 4 hours</strong>
                            {/* during business hours (Mon–Sat, 9 AM – 7 PM IST). */}
                        </p>

                    </div>
                    {/* What happens next */}
                    <div className="mb-7 rounded-xl border border-[#e2e8f4] bg-[#f8faff] p-6 text-left sm:p-[26px]">
                        <div className="mb-[18px] font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-extrabold uppercase tracking-[0.6px] text-[#212121]">
                            What happens next
                        </div>

                        {/* Step 1 */}
                        <div className="flex gap-[14px] items-start">
                            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#406AAF] via-[#7D3C97] to-[#EA6224] font-['Plus_Jakarta_Sans',sans-serif] text-sm font-extrabold text-white shadow-[0_4px_12px_rgba(125,60,151,0.28)]">
                                1
                            </div>
                            <div>
                                <h4 className="mb-0.5 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold text-[#212121]">We review your idea</h4>
                                <p className="text-[13.5px] leading-relaxed text-[#64748b]">Our team studies your requirements and prepares a tailored approach for your grocery app.</p>
                            </div>
                        </div>

                        {/* Step 2 with border top */}
                        <div className="mt-4 flex gap-[14px] items-start border-t border-[#e2e8f4] pt-4">
                            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#406AAF] via-[#7D3C97] to-[#EA6224] font-['Plus_Jakarta_Sans',sans-serif] text-sm font-extrabold text-white shadow-[0_4px_12px_rgba(125,60,151,0.28)]">
                                2
                            </div>
                            <div>
                                <h4 className="mb-0.5 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold text-[#212121]">We sign an NDA & reach out</h4>
                                <p className="text-[13.5px] leading-relaxed text-[#64748b]">A mutual NDA is shared upfront, then we contact you with a fixed-price quote in INR — no hidden charges.</p>
                            </div>
                        </div>

                        {/* Step 3 with border top */}
                        <div className="mt-4 flex gap-[14px] items-start border-t border-[#e2e8f4] pt-4">
                            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#406AAF] via-[#7D3C97] to-[#EA6224] font-['Plus_Jakarta_Sans',sans-serif] text-sm font-extrabold text-white shadow-[0_4px_12px_rgba(125,60,151,0.28)]">
                                3
                            </div>
                            <div>
                                <h4 className="mb-0.5 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold text-[#212121]">Free consultation</h4>
                                <p className="text-[13.5px] leading-relaxed text-[#64748b]">We walk you through timeline, features, and tech — with no obligation to proceed.</p>
                            </div>
                        </div>
                    </div>

                    {/* Trust pills */}
                    <div className="mb-[30px] flex flex-wrap justify-center gap-2.5">
                        <div className="flex items-center gap-[7px] rounded-[10px] border-[1.5px] border-[#e2e8f4] bg-white px-[14px] py-2 text-[12.5px] font-semibold text-[#64748b]">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px] shrink-0 stroke-[#406AAF]">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            NDA signed upfront
                        </div>
                        <div className="flex items-center gap-[7px] rounded-[10px] border-[1.5px] border-[#e2e8f4] bg-white px-[14px] py-2 text-[12.5px] font-semibold text-[#64748b]">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px] shrink-0 stroke-[#406AAF]">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v5l3 2" />
                            </svg>
                            Reply in under 4 hrs
                        </div>
                        <div className="flex items-center gap-[7px] rounded-[10px] border-[1.5px] border-[#e2e8f4] bg-white px-[14px] py-2 text-[12.5px] font-semibold text-[#64748b]">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px] shrink-0 stroke-[#406AAF]">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                            150+ apps launched
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-3">
                        <a
                            href="https://wa.me/919587867258"
                            target="_blank"
                            className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-[14px] text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(37,211,102,0.36)] transition-transform duration-150 hover:-translate-y-0.5"
                        >
                            💬 Chat with us on WhatsApp now
                        </a>
                        <Link
                            href="/"
                            className="rounded-xl bg-gradient-to-r from-[#406AAF] via-[#6e359a] to-[#EA6224] px-7 py-[15px] text-center font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold tracking-[0.2px] text-white shadow-[0_8px_24px_rgba(64,106,175,0.40)] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(64,106,175,0.52)]"
                        >
                            Back to Homepage
                        </Link>

                    </div>

                    {/* Footer strip */}
                    <div className="mt-[34px] flex flex-col items-center gap-1.5 border-t border-[#e2e8f4] pt-6">
                        <p className="text-[13px] text-[#94a3b8]">
                            Prefer to talk? Call us at{' '}
                            <a href="tel:+919587867258" className="font-semibold text-[#406AAF] no-underline">
                                +91 9587 867 258
                            </a>
                        </p>
                        <p className="text-[13px] text-[#94a3b8]">
                            or email{' '}
                            <a href="mailto:sales@comfygen.com" className="font-semibold text-[#406AAF] no-underline">

                                sales@comfygen.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Add custom animation keyframes (Tailwind doesn't include these by default) */}
            <style jsx>{`
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes pop {
          from {
            transform: scale(0) rotate(-12deg);
          }
          to {
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .stroke-dasharray-\\[42\\] {
          stroke-dasharray: 42;
        }
        .stroke-dashoffset-\\[42\\] {
          stroke-dashoffset: 42;
        }
        .animate-\\[draw_0\\.5s_ease-out_0\\.8s_forwards\\] {
          animation: draw 0.5s ease-out 0.8s forwards;
        }
      `}</style>
        </main>
    );
}