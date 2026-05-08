"use client";

import LeadForm from "./LeadForm";

export default function Hero() {

  const scrollToForm = () => {
    const form = document.getElementById("hero-form");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6F2] py-[56px] md:py-[80px]">

      {/* BLUR BACKGROUND */}
      <div className="absolute -top-[100px] -right-[100px] h-[400px] w-[400px] rounded-full bg-[#FFF0EB] opacity-60 blur-[80px]" />

      <div className="relative z-[1] mx-auto max-w-[1200px] px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">

          {/* LEFT CONTENT */}
          <div>

            {/* RATING */}
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#E8E2DD] bg-white px-4 py-2 text-[13px] font-medium text-[#1A1614]">

              <span className="tracking-[1px] text-[#F4B400]">
                ★★★★★
              </span>

              <span>
                Rated 4.9 on Clutch · 150+ Apps Delivered
              </span>

            </div>

            {/* HEADING */}
            <h1 className="mb-5 font-[Fraunces] text-[32px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#1A1614] sm:text-[40px] lg:text-[52px] lg:leading-[1.05]">

              India's Trusted Food Delivery App{" "}

              <em className="font-medium italic text-[#FF5A3C]">
                Development Company
              </em>

              {" "}— 150+ Apps Delivered

            </h1>

            {/* SUBTEXT */}
            <p className="mb-7 max-w-[560px] text-[16px] leading-[1.55] text-[#3D3835] md:text-[17px]">

              Save up to 70% vs US/UK agencies without compromising quality.
              iOS + Android + Restaurant Panel + Driver App + Admin Dashboard
              — all included.

            </p>

            {/* PILLS */}
            <div className="mb-7 flex flex-wrap gap-2">

              <span className="inline-flex items-center gap-[6px] rounded-full border border-[#E8E2DD] bg-white px-3 py-[6px] text-[12px] font-medium text-[#3D3835] md:px-[14px] md:py-2 md:text-[13px]">
                <span className="font-bold text-[#1D9E75]">✓</span>
                100% Source Code
              </span>

              <span className="inline-flex items-center gap-[6px] rounded-full border border-[#E8E2DD] bg-white px-3 py-[6px] text-[12px] font-medium text-[#3D3835] md:px-[14px] md:py-2 md:text-[13px]">
                <span className="font-bold text-[#1D9E75]">✓</span>
                NDA Signed Upfront
              </span>

              <span className="inline-flex items-center gap-[6px] rounded-full border border-[#E8E2DD] bg-white px-3 py-[6px] text-[12px] font-medium text-[#3D3835] md:px-[14px] md:py-2 md:text-[13px]">
                <span className="font-bold text-[#1D9E75]">✓</span>
                Launch in 2–4 Weeks
              </span>

              <span className="inline-flex items-center gap-[6px] rounded-full border border-[#E8E2DD] bg-white px-3 py-[6px] text-[12px] font-medium text-[#3D3835] md:px-[14px] md:py-2 md:text-[13px]">
                <span className="font-bold text-[#1D9E75]">✓</span>
                3 Months Free Support
              </span>

            </div>

            {/* BUTTONS */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              {/* PRIMARY BUTTON */}
              <button
                onClick={scrollToForm}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full bg-[#FF5A3C]
                  px-4 py-3
                  text-[13px] font-semibold text-white
                  shadow-[0_4px_14px_rgba(255,90,60,0.35)]
                  transition-all duration-300
                  hover:-translate-y-[2px]
                  hover:bg-[#E63E20]
                  sm:px-6 sm:py-[14px]
                  sm:text-[14px]
                  lg:px-7 lg:py-4
                  lg:text-[15px]
                "
              >
                Schedule Free Consultation →
              </button>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919587867258"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full bg-[#25D366]
                  px-4 py-3
                  text-[13px] font-semibold text-white
                  transition-all duration-200
                  hover:bg-[#1ebe5a]
                  sm:px-6 sm:py-[14px]
                  sm:text-[14px]
                  lg:px-7 lg:py-4
                  lg:text-[15px]
                "
              >
                💬 Chat on WhatsApp
              </a>

            </div>

            {/* TRUST STATS */}
            <div className="grid grid-cols-2 gap-5 border-t border-[#E8E2DD] pt-6 sm:grid-cols-4 sm:gap-7">

              <div className="text-[12px] text-[#7A716C]">
                <strong className="block font-[Fraunces] text-[20px] font-semibold text-[#1A1614] md:text-[22px]">
                  150+
                </strong>
                Food apps built
              </div>

              <div className="text-[12px] text-[#7A716C]">
                <strong className="block font-[Fraunces] text-[20px] font-semibold text-[#1A1614] md:text-[22px]">
                  30+
                </strong>
                Countries served
              </div>

              <div className="text-[12px] text-[#7A716C]">
                <strong className="block font-[Fraunces] text-[20px] font-semibold text-[#1A1614] md:text-[22px]">
                  8+ yrs
                </strong>
                Industry experience
              </div>

              <div className="text-[12px] text-[#7A716C]">
                <strong className="block font-[Fraunces] text-[20px] font-semibold text-[#1A1614] md:text-[22px]">
                  4.9★
                </strong>
                Avg client rating
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <LeadForm />

        </div>
      </div>
    </section>
  );
}




// 'use client';

// import LeadForm from './LeadForm';

// const heroStyles = {
//   section: {
//     padding: '56px 0 80px',
//     background: '#FAF6F2',
//     position: 'relative' as const,
//     overflow: 'hidden',
//   },
//   before: {
//     content: '',
//     position: 'absolute' as const,
//     top: '-100px',
//     right: '-100px',
//     width: '400px',
//     height: '400px',
//     background: '#FFF0EB',
//     borderRadius: '50%',
//     filter: 'blur(80px)',
//     opacity: 0.6,
//     zIndex: 0,
//   },
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 24px',
//     position: 'relative' as const,
//     zIndex: 1,
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: '1.2fr 1fr',
//     gap: '56px',
//     alignItems: 'start' as const,
//   },
//   heroRating: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//     background: 'white',
//     padding: '8px 16px',
//     borderRadius: '100px',
//     border: '1px solid #E8E2DD',
//     fontSize: '13px',
//     fontWeight: 500,
//     marginBottom: '24px',
//   },
//   heroStars: {
//     color: '#F4B400',
//     letterSpacing: '1px',
//   },
//   h1: {
//     fontFamily: "'Fraunces', Georgia, serif",
//     fontWeight: 600,
//     fontSize: 'clamp(32px, 4.5vw, 52px)',
//     lineHeight: 1.05,
//     letterSpacing: '-0.025em',
//     marginBottom: '20px',
//     color: '#1A1614',
//   },
//   h1Em: {
//     fontStyle: 'italic',
//     color: '#FF5A3C',
//     fontWeight: 500,
//   },
//   heroSub: {
//     fontSize: '17px',
//     color: '#3D3835',
//     lineHeight: 1.55,
//     marginBottom: '28px',
//     maxWidth: '560px',
//   },
//   heroPills: {
//     display: 'flex',
//     flexWrap: 'wrap' as const,
//     gap: '8px',
//     marginBottom: '28px',
//   },
//   pill: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '6px',
//     background: 'white',
//     border: '1px solid #E8E2DD',
//     padding: '8px 14px',
//     borderRadius: '100px',
//     fontSize: '13px',
//     fontWeight: 500,
//     color: '#3D3835',
//   },
//   check: {
//     color: '#1D9E75',
//     fontWeight: 700,
//   },
//   heroCtas: {
//     display: 'flex',
//     gap: '12px',
//     flexWrap: 'wrap' as const,
//     marginBottom: '32px',
//   },
//   btn: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     padding: '16px 28px',
//     borderRadius: '100px',
//     fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
//     fontWeight: 600,
//     fontSize: '15px',
//     cursor: 'pointer',
//     border: 'none',
//     transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
//     textAlign: 'center' as const,
//   },
//   btnPrimary: {
//     background: '#FF5A3C',
//     color: 'white',
//     boxShadow: '0 4px 14px rgba(255, 90, 60, 0.35)',
//     borderRadius: '100px',

//   },
//   btnWhatsapp: {
//     background: '#25D366',
//     color: 'white',
//   },
//   heroTrust: {
//     display: 'flex',
//     gap: '28px',
//     flexWrap: 'wrap' as const,
//     paddingTop: '24px',
//     borderTop: '1px solid #E8E2DD',
//   },
//   heroTrustItem: {
//     fontSize: '13px',
//     color: '#7A716C',
//   },
//   heroTrustStrong: {
//     display: 'block',
//     fontFamily: "'Fraunces', Georgia, serif",
//     fontSize: '22px',
//     fontWeight: 600,
//     color: '#1A1614',
//   },
// };

// export default function Hero() {
//   const scrollToForm = () => {
//     const form = document.getElementById('hero-form');
//     if (form) {
//       form.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <section style={heroStyles.section}>
//       <div style={heroStyles.before} />
//       <div style={heroStyles.container}>
//         <div style={heroStyles.grid}>
//           {/* Left Content */}
//           <div>
//             <div style={heroStyles.heroRating}>
//               <span style={heroStyles.heroStars}>★★★★★</span>
//               <span>Rated 4.9 on Clutch · 150+ Apps Delivered</span>
//             </div>

//             <h1 style={heroStyles.h1}>
//               India's Trusted Food Delivery App <em style={heroStyles.h1Em}>Development Company</em> — 150+ Apps Delivered
//             </h1>

//             <p style={heroStyles.heroSub}>
//               Save up to 70% vs US/UK agencies without compromising quality. iOS + Android + Restaurant Panel + Driver App + Admin Dashboard — all included.
//             </p>

//             <div style={heroStyles.heroPills}>
//               <span style={heroStyles.pill}><span style={heroStyles.check}>✓</span> 100% Source Code</span>
//               <span style={heroStyles.pill}><span style={heroStyles.check}>✓</span> NDA Signed Upfront</span>
//               <span style={heroStyles.pill}><span style={heroStyles.check}>✓</span> Launch in 2–4 Weeks</span>
//               <span style={heroStyles.pill}><span style={heroStyles.check}>✓</span> 3 Months Free Support</span>
//             </div>

//             <div style={heroStyles.heroCtas}>
//               <button
//               className='px-2'
//                 onClick={scrollToForm}
//                 style={heroStyles.btnPrimary}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = '#E63E20';
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = '#FF5A3C';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 Schedule Free Consultation →
//               </button>
//               <a
//                 href="https://wa.me/919587867258"
//                 style={{ ...heroStyles.btn, ...heroStyles.btnWhatsapp }}
//                 onMouseEnter={(e) => (e.currentTarget.style.background = '#1ebe5a')}
//                 onMouseLeave={(e) => (e.currentTarget.style.background = '#25D366')}
//               >
//                 💬 Chat on WhatsApp
//               </a>
//             </div>

//             <div style={heroStyles.heroTrust}>
//               <div style={heroStyles.heroTrustItem}>
//                 <strong style={heroStyles.heroTrustStrong}>150+</strong>
//                 Food apps built
//               </div>
//               <div style={heroStyles.heroTrustItem}>
//                 <strong style={heroStyles.heroTrustStrong}>30+</strong>
//                 Countries served
//               </div>
//               <div style={heroStyles.heroTrustItem}>
//                 <strong style={heroStyles.heroTrustStrong}>8+ yrs</strong>
//                 Industry experience
//               </div>
//               <div style={heroStyles.heroTrustItem}>
//                 <strong style={heroStyles.heroTrustStrong}>4.9★</strong>
//                 Avg client rating
//               </div>
//             </div>
//           </div>

//           {/* Lead Form */}
//           <LeadForm />
//         </div>
//       </div>
//     </section>
//   );
// }