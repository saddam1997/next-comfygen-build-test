'use client';

import { useEffect, useState } from 'react';


export default function TechStack({DATA}: any) {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive values
  const getSectionPadding = () => {
    if (windowWidth < 640) return 'py-12';
    if (windowWidth < 768) return 'py-14';
    return 'py-16';
  };

  const getContainerPadding = () => {
    if (windowWidth < 640) return 'px-4';
    return 'px-6';
  };

  const getLabelFontSize = () => {
    if (windowWidth < 480) return 'text-[10px]';
    if (windowWidth < 640) return 'text-[11px]';
    return 'text-xs';
  };

  const getLabelMarginBottom = () => {
    if (windowWidth < 640) return 'mb-5';
    return 'mb-7';
  };

  const getGridGap = () => {
    if (windowWidth < 480) return 'gap-2';
    if (windowWidth < 640) return 'gap-2.5';
    return 'gap-3';
  };

  const getPillPadding = () => {
    if (windowWidth < 480) return 'px-4 py-2';
    if (windowWidth < 640) return 'px-5 py-2.5';
    return 'px-6 py-3';
  };

  const getPillFontSize = () => {
    if (windowWidth < 480) return 'text-[11px]';
    if (windowWidth < 640) return 'text-[12px]';
    return 'text-sm';
  };

  return (
    <section className={`bg-white ${getSectionPadding()}`}>
      <div className={`max-w-[1200px] mx-auto ${getContainerPadding()}`}>
        <div className={`text-center ${getLabelFontSize()} text-muted text-gray-600 font-semibold uppercase tracking-[0.18em] ${getLabelMarginBottom()} font-semibold`}>
         {DATA.title}
        </div>
        <div className={`flex flex-wrap justify-center ${getGridGap()}`}>
          {DATA?.tech.map((tech:any, index:any) => (
            <span
              key={index}
              className={`${getPillPadding()} bg-cream rounded-full text-gray-600 ${getPillFontSize()} font-medium text-ink-2 border border-line transition-all duration-200 hover:border-coral hover:bg-white hover:-translate-y-0.5 cursor-default`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile responsive overrides */}
      <style jsx>{`
        @media (max-width: 768px) {
          .tracking-\\[0\\.18em\\] {
            letter-spacing: 0.15em;
          }
        }
        @media (max-width: 640px) {
          .gap-3 {
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}