export default function ServiceContent({ service }: any) {
  return (
    <div className="space-y-4">

      {service.subtitle && (
        <p className="text-sm opacity-80">{service.subtitle}</p>
      )}

      <h3
        className="text-2xl font-bold"
        dangerouslySetInnerHTML={{ __html: service.title }}
      />

      <div
        className="opacity-90"
        dangerouslySetInnerHTML={{ __html: service.description }}
      />

      {service.features?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {service.features.map((f: string, i: number) => (
            <li key={i} className="flex gap-2 text-sm">
              <div className="w-2 h-2 mt-2 bg-white rounded-full"></div>
              <div
                dangerouslySetInnerHTML={{ __html: f }}
              />
            </li>
          ))}
        </ul>
      )}

      {/* <a
        href="/contact-us"
        className="inline-block mt-6 border px-6 py-2 rounded-full"
      >
        Connect Experts
      </a> */}

    </div>
  );
}