'use client';


export default function Comparison({ DATA }: any) {
  const renderValue = (value: string) => {
    if (value === '✓') {
      return (
        <span className="text-[16px] sm:text-[18px] font-bold text-[#1D9E75]">
          ✓
        </span>
      );
    }

    if (value === '✗') {
      return (
        <span className="text-[16px] sm:text-[18px] font-bold text-[#cc4444]">
          ✗
        </span>
      );
    }

    if (value.startsWith('⚠️')) {
      return (
        <span className="text-[11px] sm:text-[13px] font-semibold text-[#F4B400]">
          {value}
        </span>
      );
    }

    return (
      <span
        className={`${value === '60–70% lower' ? 'font-bold' : 'font-medium'
          }`}
      >
        {value}
      </span>
    );
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

        {/* Header */}
        <div className="mx-auto mb-8 max-w-[720px] text-center sm:mb-10 lg:mb-14">
          <span className="mb-4 inline-block text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-[#FF5A3C]">
            {DATA.title}
          </span>

          <h2 className="mb-4 font-['Fraunces'] text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] text-[#1A1614] sm:text-[32px] md:text-[36px] lg:text-[44px] lg:leading-[1.1]">
            {DATA.subtitle.start} {' '}
            <span className=" text-[#FF5A3C]">
              {DATA.subtitle.highlight}
            </span>
            {' '} {DATA.subtitle.end}
          </h2>

          <p className="text-[14px] leading-[1.6] text-[#7A716C] sm:text-[15px] lg:text-[17px]">
            {DATA.description}
          </p>
        </div>

        {/* Mobile Cards */}
        <div className="flex flex-col gap-5 md:hidden">
          {DATA?.comparisonData.rows.map((row, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#E8E2DD] bg-[#FAF6F2]"
            >
              {/* Feature Header */}
              <div className="border-b border-[#E8E2DD] bg-[#1A1614] px-3 py-3 text-[11px] font-bold text-white sm:px-4 sm:py-4 sm:text-[13px]">
                {row.feature}
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">

                {/* Comfygen */}
                <div className="mb-3 flex items-center justify-between border-b border-[#E8E2DD] pb-3">
                  <span className="text-[11px] sm:text-[13px] font-semibold text-[#FF5A3C]">
                     Comfygen
                  </span>

                  {renderValue(row.comfygen)}
                </div>

                {/* Freelancers */}
                <div className="mb-3 flex items-center justify-between border-b border-[#E8E2DD] pb-3">
                  <span className="text-[11px] sm:text-[13px] font-semibold text-[#7A716C]">
                    Freelancers
                  </span>

                  {renderValue(row.freelancers)}
                </div>

                {/* Agencies */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-[13px] font-semibold text-[#7A716C]">
                    Other Agencies
                  </span>

                  {renderValue(row.agencies)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden overflow-hidden rounded-2xl border border-[#E8E2DD] md:block">
          <table className="w-full border-collapse bg-[#FAF6F2]">

            <thead>
              <tr>
                <th className="border-b border-[#E8E2DD] bg-[#1A1614] px-5 py-[18px] text-left text-[15px] font-semibold text-white">

                </th>

                <th className="border-b border-[#E8E2DD] bg-[#1A1614] bg-[rgba(255,90,60,0.9)] px-5 py-[18px] text-center text-[15px] font-semibold text-white">
                  {DATA.comparisonData.heading1}
                </th>

                <th className="border-b border-[#E8E2DD] bg-[#1A1614] px-5 py-[18px] text-center text-[15px] font-semibold text-white">
                  {DATA.comparisonData.heading2} 
                </th>

                <th className="border-b border-[#E8E2DD] bg-[#1A1614] px-5 py-[18px] text-center text-[15px] font-semibold text-white">
                  {DATA.comparisonData.heading3}
                </th>
              </tr>
            </thead>

            <tbody>
              {DATA?.comparisonData.rows.map((row, index) => (
                <tr key={index}>

                  {/* Feature */}
                  <td className="border-b border-[#E8E2DD] px-5 py-[18px] text-left text-[15px] font-medium text-[#1A1614]">
                    {row.feature}
                  </td>

                  {/* Comfygen */}
                  <td className="border-b border-[#E8E2DD] bg-[rgba(255,90,60,0.05)] px-5 py-[18px] text-center text-[15px] font-semibold text-[#1A1614]">
                    {renderValue(row.comfygen)}
                  </td>

                  {/* Freelancers */}
                  <td className="border-b border-[#E8E2DD] px-5 py-[18px] text-center text-[15px] text-[#1A1614]">
                    {renderValue(row.freelancers)}
                  </td>

                  {/* Agencies */}
                  <td className="border-b border-[#E8E2DD] px-5 py-[18px] text-center text-[15px] text-[#1A1614]">
                    {renderValue(row.agencies)}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}