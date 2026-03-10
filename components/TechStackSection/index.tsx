
import SmoothColumn from "./SmoothColumn";

export default function DeliveryServices({ deliveryApps }: any) {

  const items = deliveryApps?.delivery || [];

  const chunkSize = Math.ceil(items.length / 3);

  const col1 = items.slice(0, chunkSize);
  const col2 = items.slice(chunkSize, chunkSize * 2);
  const col3 = items.slice(chunkSize * 2);
  return (
    <section className="bg-[#040B1F] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="lg:text-3xl text-lg font-bold leading-snug">
            {deliveryApps?.hedding}
          </h2>

          <p className="mt-6 text-lg lg:text-sm max-w-lg hidden lg:block" dangerouslySetInnerHTML={{ __html: deliveryApps?.description }}>
          </p>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-3 gap-6 h-[500px] overflow-hidden">
          <SmoothColumn items={col1} speed={0.3} />
          <SmoothColumn items={col2} speed={0.4} />
          <SmoothColumn items={col3} speed={0.35} />
        </div>

      </div>
    </section>
  );
}

