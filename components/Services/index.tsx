import ServicesClient from "./ServicesClient";

export default function ServicesSection({ servicesData }: any) {
  return (
    <section className="lg:py-16 py-10 bg-[#F5F5F9]">

      {/* ✅ SEO CONTENT */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">{servicesData.heading}</h2>
        <p className="text-gray-600 mt-2">
          {servicesData.description}
        </p>
      </div>

      {/* ✅ Client handles interaction */}
      <ServicesClient services={servicesData.services} />

    </section>
  );
}