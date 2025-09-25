import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";
export default function HireSection({ Hire, myList }) {
  const data = Hire;
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="lg:flex items-center lg:space-x-10 space-y-6">
        <div className="w-full">
          {Hire.map((elem: any, index: any) => {
            const { title, btn, desc, num, url, decs, decs1 , li, li1, li2, li3, li4, li5 } = elem;
            return (
              <div key={num} className="w-full space-y-6 md:text-left">
                <div className="space-y-3">
                  <h2 className="lg:text-[40px] text-[32px] font-bold leading-[46.96px] text-[#FFFFFF]">
                    {title}
                  </h2>
                </div>
                <div className="space-y-3">
                <p className="text-[16px] font-[400px] text-[#FFFFFF]/80 ">
                  {desc}
                </p>
                <p className="text-[16px] font-[400px] text-[#FFFFFF]/80 ">
                  {decs}
                </p>
                <p  className="text-[16px] font-[400px] text-[#FFFFFF]/80 ">{decs1}</p>
                </div>
               
                <ul className="px-4 text-white space-y-2">
                  <li>{li}</li>
                  <li>{li1}</li>
                  <li>{li2}</li>
                </ul>
                <div>
                  <Link href={url} passHref={true}>
                    <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                      <ImArrowUpRight2 />
                      <span>{btn}</span>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      
      </div>
    </>
  );
}
