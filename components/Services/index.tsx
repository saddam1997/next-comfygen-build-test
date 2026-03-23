// components/ServicesComponent.tsx
import ServicesTabs from "./ServicesTabs";

export default function ServicesComponent({ servicesData }: any) {
  return (
    <section
      className="lg:py-16 py-10 bg-[#F5F5F9]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* ✅ SEO CONTENT */}
        <header className="text-center space-y-3">
          <h2
            id="services-heading"
            className="text-2xl lg:text-4xl font-bold"
          >
            {servicesData.heading}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            {servicesData.description}
          </p>
        </header>

        {/* ✅ CLIENT INTERACTION ONLY */}
        <ServicesTabs services={servicesData.services} />
      </div>
    </section>
  );
}