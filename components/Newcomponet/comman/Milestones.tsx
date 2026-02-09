




 const milestone = {
   "heading": "Company Milestones and Global Presence",
   "countries": [
     "India",
     "USA",
     "Canada",
     "UK",
     "Australia",
     "Germany",
     "Netherlands",
     "Switzerland",
     "UAE",
     "Mexico",
     "Argentina",
     "South Africa",
     "New Zealand",
     "Oman",
     "Denmark",
     "Austria"
   ]
 }
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
        className="py-6  "
      // className=" bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 py-6 mt-3 px-6"
      >
        {/* SEO HEADING */}
        {/* <h2 id="milestones-heading" className="sr-only">
          {milestone?.heading}
        </h2> */}


        {/* ===== SEO ONLY: Hidden Countries (FROM JSON) ===== */}
        {/* <ul className="sr-only">
          {milestone?.countries.map((country, index) => (
            <li key={country}>{country}</li>
          ))}
        </ul> */}


        <div className="container mx-auto space-y-4 lg:p-0 p-4">
          {/* ===== CARDS GRID ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats?.map((item: any, index: any) => (
              <div
                key={index}
                className={cardClass}
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <h3
                  className="text-[27px] font-bold tabular-nums min-h-[34px]"
                  itemProp="value"
                >
                  {item.value}
                </h3>
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