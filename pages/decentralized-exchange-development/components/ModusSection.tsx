export default function ModusSection({ Modus, ModusOperandi }) {
  const data = Modus;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="lg:py-16 py-4 bg-[#F6F5FD]">
        <div className="w-11/12 mx-auto space-y-14 2xl:w-9/12 xl:w-5/6">
          <div className="w-full space-y-4">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#0E1F51] text-center">
              {Modus?.title}
            </h2>
            <h2 className=" font-bold 2xl:text-3xl text-2xl text-blue-600 text-center">
              {Modus?.subtitle}
            </h2>
            <p className="text-base font-medium text-center text-black">
              {Modus?.decs}
            </p>
          </div>
          <div className="grid  gap-10 lg:grid-cols-3 md:grid-cols-2">
            {ModusOperandi.map((elem: any, index: any) => {
              const { title, desc, num, bg } = elem;
              return (
                <div key={index} className=" rounded-[40px]" style={{ backgroundColor: `${bg}` }}>
                  <div
                    style={{ backgroundColor: `${bg}` }}
                    className="flex items-center justify-start px-3 py-3 space-x-3 rounded-full "
                  >
                    <div className="flex items-center justify-center font-semibold bg-white rounded-full shadow-xl h-14 w-14">
                      <p className="text-xl text-right ">{num}</p>
                    </div>
                    <h3 className="text-lg font-semibold text-black">
                      {title}
                    </h3>
                  </div>
                  <div className="px-4 py-1 ">
                    <p className="px-4 py-4 text-black">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
