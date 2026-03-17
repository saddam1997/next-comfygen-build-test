import JSON_DATA from "./miles.json";

const Milestones = () => {

  const cardClass = `
relative overflow-hidden py-8 text-center rounded-[8px] text-white
bg-gradient-to-t from-[#5556D1]  to-blue-800
shadow-[0_8px_25px_rgba(85,86,209,0.35)]
`;


  return (
    <>


      <section
        aria-labelledby="milestones-heading"
        className="py-6 lg:px-4 xl:px-0"
      >



        <div className=" space-y-4 lg:px-4 xl:px-0">
          {/* ===== CARDS GRID ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {JSON_DATA.stats?.map((item: any, index: any) => (
              <div
                key={index}
                className={cardClass}
              >
                <p
                  className="text-[27px] font-bold tabular-nums min-h-[34px]"
                  itemProp="value"
                >
                  {item.value}
                </p>
                <p
                  className="text-[18px] px-1"
                  itemProp="description"
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default Milestones;