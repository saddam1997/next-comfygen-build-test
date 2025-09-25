import Image from "next/image";
const team = [
  {
    num: "1",
    img: "https://www.comfygen.com/images/asif-khan.webp",
    title: "Asif Khan",
    decs: "Chief technology officer",
  },
  {
    num: "2",
    img: "https://www.comfygen.com/images/img/kesari-rai.webp",
    title: "Keshri Nandan Rai",
    decs: "Senior Frontend Developer",
  },
  {
    num: "3",
    img: "https://www.comfygen.com/images/img/rohit-kumar.webp",
    title: "Rohit Kumar",
    decs: "Senior Mobile App Developer",
  },
  {
    num: "4",
    img: "https://www.comfygen.com/images/img/sajid-saifi.webp",
    title: "Sajid Saifi",
    decs: "Senior Backend Developer",
  },
];
export default function TeamLeader() {
  return (
    <section className="py-20 bg-slate-100">
    <div className="w-11/12 mx-auto space-y-10 text-center 2xl:w-4/6 xl:w-5/6">
      <div className="flex flex-col justify-center text-center">
        <p className="text-base text-blue-600 xl:text-2xl ">Team</p>
        <h2 className="text-[24px] font-bold 2xl:text-4xl text-[#0E1F51] text-center">
          Our Leaders
        </h2>
      </div>
      <div className="grid gap-6 py-4 lg:grid-cols-4 md:grid-cols-2">
        {team.map((elem) => {
          const { title, img, decs, num } = elem;
          return (
            <div className="space-y-4 text-left" key={num}>
              <div className="flex justify-center">
                <Image
                  height={400}
                  width={400}
                  src={img}
                  alt={title}
                  className=" rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-center text-black">
                  {title}
                </h3>
                <p className="text-base text-[#0E1F51] text-center">
                  {decs}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
}
