// app/page.tsx

import Table from "../ui/comman/Table";


export default function Index({ DATA }) {
  const columns = [
    { key: "package", label: "Package" },
    { key: "cost", label: "Estimated Cost" },
    { key: "timeline", label: "Timeline" },
    { key: "bestFor", label: "Best For" },
  ];

  const data = [
    {
      package: "Starter",
      cost: "$5,000 – $10,000",
      timeline: "6–8 weeks",
      bestFor: "Single salons & solo stylists",
    },
    {
      package: "Standard",
      cost: "$10,000 – $20,000",
      timeline: "10–14 weeks",
      bestFor: "Growing salons & small chains",
    },
    {
      package: "Enterprise",
      cost: "$20,000 – $35,000+",
      timeline: "16–20 weeks",
      bestFor: "Salon chains, franchises & aggregators",
    },
  ];

  return (
    <main className="bg-[#f5f5f5] px-4 py-12">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            {DATA.heading}
          </h2>

          <p className="mb-8 text-gray-600">
            {DATA.description}
          </p>
        </div>
        <Table columns={DATA.columns} data={DATA.data} />
      </div>
    </main>
  );
}