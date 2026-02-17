

 const stats= [
   {
     "id": "experience",
     "value": "8+",
     "label": "Years of Experience"
   },
   {
     "id": "projects",
     "value": "550+",
     "label": "Projects Delivered"
   },
   {
     "id": "clients",
     "value": "400+",
     "label": "Happy Clients"
   },
   {
     "id": "countries",
     "value": "30+",
     "label": "Countries Served"
   }
 ]



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
        className="py-6"
      >
  


        <div className="container mx-auto space-y-4 lg:p-0 p-4">
          {/* ===== CARDS GRID ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats?.map((item: any, index: any) => (
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