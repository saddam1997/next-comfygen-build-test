// components/TrustBar.tsx
import React from 'react';

const Index = () => {
  const trustItems = [
    { icon: '★', text: 'Rated 4.9 on Clutch' },
    { icon: '✓', text: '150+ Apps Delivered' },
    { icon: '🔒', text: 'NDA Signed Upfront' },
    { icon: '📦', text: 'Source Code 100% Yours' },
  ];

  return (
    <div className="bg-gradient-to-r z-20   top-0 absolute from-[#406AAF] w-full via-[#6e359a] to-[#EA6224] text-white py-2.5 px-5 flex items-center justify-center gap-9 flex-wrap text-xs font-semibold">
      {trustItems.map((item, idx) => (
        <span key={idx} className="flex items-center gap-2">
          <i className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[11px] not-italic">
            {item.icon}
          </i>
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default Index;