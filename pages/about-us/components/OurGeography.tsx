import Image from "next/image";

const locations = [
  {
    name: "Canada",
    address: "Tuxedo Ct, Toronto",
    color: "red",
    top: "33%",
    left: "31%",
  },
  {
    name: "Germany",
    address: "Rhederstraße Euskirchen",
    color: "orange",
    top: "31%",
    left: "55%",
  },
  {
    name: "INDIA",
    address: "Jaipur Rajasthan",
    color: "blue",
    top: "47%",
    left: "68%",
  },
];

export default function OurGeography() {
  return (
    <section className="py-10 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3b64] mb-4">
          Our Geography
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          Headquartered in India, Comfygen Technologies operates globally
          delivering innovative web and mobile development solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-5 text-sm">
          <div>
            <h3 className="text-blue-600 font-semibold">India</h3>
            <p className="text-gray-500">Office locations: Jaipur Rajasthan </p>
            {/* <p className="text-gray-500">Number of clients: 540+</p> */}
          </div>
          <div>
            <h3 className="text-orange-500 font-semibold">Canada</h3>
            <p className="text-gray-500">
              Office locations: Tuxedo Ct,Toronto
            </p>
            {/* <p className="text-gray-500">Number of clients: 360+</p> */}
          </div>

          <div>
            <h3 className="text-green-600 font-semibold">Germany</h3>
            <p className="text-gray-500">Office locations: Rhederstraße Euskirchen</p>
            {/* <p className="text-gray-500">Number of clients: 50+</p> */}
          </div>
        </div>

        {/* Map */}
        <div className="relative mt-10 w-full max-w-5xl mx-auto aspect-[2/1]">

          <Image
            src="/map_office.png"
            alt="world map"
            fill
            className="object-contain opacity-60"
          />

          {locations.map((loc, i) => (
            <div
              key={i}
              className="group absolute flex items-center gap-2
              -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ top: loc.top, left: loc.left }}
            >

              {/* Pin */}
              <div className="relative flex items-center justify-center">

                {/* Pulse ring */}
                <span
                  className={`absolute h-6 w-6 rounded-full animate-ping opacity-70 ${loc.color === "blue"
                    ? "bg-blue-400"
                    : loc.color === "red"
                      ? "bg-red-400"
                      : "bg-orange-400"
                    }`}
                />

                {/* Plus pin */}
                <div
                  className={`relative flex items-center justify-center w-4 h-4 rounded-full bg-white border-2 shadow ${loc.color === "blue" ? "border-blue-500 text-blue-600" : loc.color === "red"
                        ? "border-red-500 text-red-600"
                        : "border-orange-500 text-orange-600"
                    }`}
                >
                  +
                </div>

              </div>

              {/* Country label */}
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium shadow border bg-white
                ${loc.color === "blue"
                    ? "border-blue-500 text-blue-600"
                    : loc.color === "red"
                      ? "border-red-500 text-red-600"
                      : "border-orange-500 text-orange-600"
                  }`}
              >
                {loc.name}
              </div>

              {/* Hover Address Card */}
              <div className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
                <div className="bg-white shadow-xl rounded-lg px-4 py-3 w-52 border text-left">
                  <h4 className="font-semibold text-gray-800">{loc.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{loc.address}</p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}









// import Image from "next/image";

// export default function OurGeography() {
//   return (
//     <section className="py-8 bg-white text-center">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3b64] mb-4">
//           Our Geography
//         </h2>

//         <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
//           eadquartered in India, Comfygen Technologies operates globally to deliver innovative mobile app and web development solutions. Our team works closely with clients across different regions, helping businesses accelerate digital transformation with scalable and reliable technology.

//         </p>

//         {/* Region Stats */}
//         <div className="grid md:grid-cols-3 gap-8 mt-5 text-sm">
//           <div>
//             <h3 className="text-blue-600 font-semibold">India</h3>
//             <p className="text-gray-500">Office locations: Jaipur Rajasthan </p>
//             {/* <p className="text-gray-500">Number of clients: 540+</p> */}
//           </div>

//           <div>
//             <h3 className="text-orange-500 font-semibold">Canada</h3>
//             <p className="text-gray-500">
//              Office locations: Tuxedo Ct,Toronto
//             </p>
//             {/* <p className="text-gray-500">Number of clients: 360+</p> */}
//           </div>

//           <div>
//             <h3 className="text-green-600 font-semibold">Germany</h3>
//             <p className="text-gray-500">Office locations: Rhederstraße Euskirchen</p>
//             {/* <p className="text-gray-500">Number of clients: 50+</p> */}
//           </div>
//         </div>

//         {/* Map */}
//         <div className="relative mt-8 w-full max-w-5xl mx-auto ">

//           {/* World Map */}
//           <Image
//             src="/map_world.png"
//             alt="world map"
//             width={1200}
//             height={600}
//             className="opacity-60"
//           />


//         </div>

//         {/* Button */}
//         {/* <div className="mt-4">
//           <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition">
//             More about our offices
//           </button>
//         </div> */}

//       </div>
//     </section>
//   );
// }