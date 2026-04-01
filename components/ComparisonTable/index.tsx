"use client";

export default function ComparisonTable() {
    const data = [
        {
            feature: "Time to Market",
            custom: "3–6 months",
            ready: "2–4 weeks",
        },
        {
            feature: "Cost",
            custom: "Higher upfront, no recurring fees",
            ready: "Lower upfront, ongoing license fees",
        },
        {
            feature: "Customization",
            custom: "100% — every feature, every screen",
            ready: "Limited to template options",
        },
        {
            feature: "Scalability",
            custom: "Designed for your growth trajectory",
            ready: "Constrained by vendor infrastructure",
        },
        {
            feature: "Source Code Ownership",
            custom: "Full ownership",
            ready: "Typically no",
        },
        {
            feature: "Best For",
            custom: "Enterprises, funded startups",
            ready: "MVP launch, fast market entry",
        },
    ];

    return (
        <div className="w-full py-20">

            <div className="text-center max-w-6xl mx-auto mb-12">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                    Custom Taxi App Development vs. ReadyMade Taxi App Development Solutions
                </h2>
                <p className="mt-4 text-black">
                    Choosing between custom taxi app development and a readymade solution is one of the
                    most important decisions you'll make. Customizable taxi app development gives you full
                    control and long-term competitive advantage. Readymade solutions get you to market faster
                    but come with constraints. Here's how they compare:

                </p>
            </div>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 border text-left">Feature</th>
                            <th className="p-4 border text-left">
                                Custom Taxi App Development
                            </th>
                            <th className="p-4 border text-left">
                                Readymade / White Label
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="p-4 border font-medium">{item.feature}</td>
                                <td className="p-4 border">{item.custom}</td>
                                <td className="p-4 border">{item.ready}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden space-y-4">
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="border rounded-xl p-4 shadow-sm bg-white"
                    >
                        <h3 className="font-semibold text-lg mb-2">
                            {item.feature}
                        </h3>

                        <div className="mb-2">
                            <p className="text-sm font-medium text-gray-500">
                                Custom Development
                            </p>
                            <p className="text-gray-800">{item.custom}</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-500">
                                Readymade / White Label
                            </p>
                            <p className="text-gray-800">{item.ready}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}