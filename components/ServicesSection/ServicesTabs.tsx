

export default function ServicesTabs({ services, active, setActive }) {
  return (
    <div className="space-y-2 w-full lg:pr-6 lg:h-[35rem] lg:overflow-y-auto">

      {services.map((service:any, index:any) => {
        const isActive = active === index;

        return (
          <div key={index}>
            <button
              onClick={() => setActive(index)}
              className={`border px-4 py-3 w-full text-left transition ${
                isActive
                  ? "text-[#5556D1] border-[#5556D1] bg-[#5556D1]/10"
                  : "text-black border-[#00000018] bg-white"
              }`}
            >
              {service.title}
            </button>

            {/* MOBILE VIEW */}
            {isActive && (
              <div className="block lg:hidden bg-gradient-to-r from-[#272868] to-[#5556D1] px-6 py-10 text-white">

                {service.subtitle && (
                  <p dangerouslySetInnerHTML={{ __html: service.subtitle }} />
                )}

                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                {service.description && (
                  <p dangerouslySetInnerHTML={{ __html: service.description }} />
                )}

                {service.description1 && (
                  <p dangerouslySetInnerHTML={{ __html: service.description1 }} />
                )}

                {service.features?.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {service.features.map((f:any, i:any) => (
                      <li key={i} className="flex gap-2">
                        <div className="w-2 h-2 border border-white rounded-full mt-2" />
                        <div dangerouslySetInnerHTML={{ __html: f }} />
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}







