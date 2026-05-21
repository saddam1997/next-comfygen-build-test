// components/BrandsBar.tsx
import Link from 'next/link';
import React from 'react';

const BrandsBar = ({DATA}) => {
  const brands = ['Clutch ★★★★★', 'GoodFirms', 'DesignRush', 'SelectedFirms', 'TopDevelopers'];

  return (
    <div className="bg-white border-y border-[#e2e8f4] py-6 px-8 text-center">
      <p className="text-[11px] text-[#94a3b8] uppercase tracking-[1.5px] font-bold mb-4">As featured &amp; reviewed on</p>
      <div className="flex gap-2.5 justify-center flex-wrap">
        {DATA.map((brand:any, idx:any) => (
          <Link
          href={brand.link}
            key={idx}
            className="bg-[#f8faff] border-2 border-[#e2e8f4] rounded-lg py-2 px-5 text-xs font-semibold text-[#64748b] transition-all cursor-default hover:border-[#406AAF] hover:text-[#406AAF] hover:bg-white hover:shadow-sm"
          >
            {brand.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandsBar;