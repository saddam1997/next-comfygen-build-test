export default function WhyChoose({ Whychoose, Bestchoice }) {
  const data = Whychoose;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 space-y-10  py-10">
        <div className="space-y-10 text-center">
          <div className="space-y-4 ">
            <h2 className="py-2 md:text-4xl text-2xl md:font-bold font-semibold md:leading-[3rem] text-[#0E1F51] ">
              {Whychoose?.title}
            </h2>
            <p className="text-base text-slate-800"> {Whychoose?.decs}</p>
            <p className="text-base text-slate-800"> {Whychoose?.doc1}</p>
          </div>
          <div className="grid grid-cols-1 gap-10 2xl:grid-cols-2 md:grid-cols-2 ">
            {Bestchoice.map((elem: any, index: any) => {
              const { title, num, decs, decs1 } = elem;
              return (
                <div key={index} className="bg-[#6C54DE1A] text-left transition duration-150 scale-100   rounded-[40px]  p-10 space-y-4" style={{ backgroundColor: elem.bg }}>
                  <span className="font-semibold text-7xl text-blue-600">
                    {num}
                  </span>
                  <h3 className="text-2xl font-semibold text-black">
                    {title}
                  </h3>
                  <p className="break-all ine-clamp-5">{decs}</p>
                  <p className="break-all ine-clamp-5">{decs1}</p>
                </div>);
            })}
          </div>
        </div>
      </section>
    </>
  );
}