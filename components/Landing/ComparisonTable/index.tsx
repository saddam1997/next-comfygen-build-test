import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
const ComparisonTable = ({ DATA }: any) => {
    return (
        <section className="py-16 md:py-20 px-5 md:px-8">
            <div className="max-w-[1180px] mx-auto">
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-1.5 bg-[#EEF3FB] border border-[rgba(64,106,175,0.2)] text-[#406AAF] py-1.5 px-4 rounded-full text-[11px] font-bold uppercase tracking-wide mb-3.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#406AAF] via-[#7D3C97] to-[#EA6224]" />{DATA.badge.text}
                    </div>
                    <h2 className="mb-4 font-[Fraunces] text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1A1614] min-[480px]:text-[32px]  md:text-[36px] lg:text-[44px] lg:leading-[1.1] ">
                        {DATA.title.start}{" "}
                        <span className=" text-[#FF5A3C]">
                            {DATA.title.highlight}
                        </span>
                    </h2>
                    <p className="text-base text-[#64748b] max-w-[600px] mx-auto leading-relaxed">
                        {DATA.description}
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl shadow-md">
                    <table className="w-full min-w-[600px] border-collapse">
                        <TableHeader comparisonData={DATA} />
                        <tbody>
                            {DATA.rows.map((row: any, idx: any) => (
                                <TableRow key={idx} row={row} index={idx} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;