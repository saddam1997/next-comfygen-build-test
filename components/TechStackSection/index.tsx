import JSON_DATA from "./Delivery.json";
import SmoothColumn from "./SmoothColumn";

export default function DeliveryServices() {
  return (
    <section className="bg-[#040B1F] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="lg:text-3xl text-lg font-bold leading-snug">
            We Provide Custom Delivery App Development Services in Diverse Sectors
          </h2>

          <p className="mt-6 text-lg lg:text-sm max-w-lg hidden lg:block">
            The Comfygen team creates powerful and easy-to-use delivery apps for a variety of industries. Whether you run a startup, small business, or large enterprise, our custom delivery app development services are made to fit your business needs.
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-3 gap-6 h-[500px] overflow-hidden">
          <SmoothColumn items={JSON_DATA.col1} speed={0.3} />
          <SmoothColumn items={JSON_DATA.col2} speed={0.4} />
          <SmoothColumn items={JSON_DATA.col3} speed={0.35} />
        </div>

      </div>
    </section>
  );
}

