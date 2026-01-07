import Link from "next/link";
import Image from "next/image";

export default function ServiceSection(props: any) {
  return (
    <>
      <div key={props.key} className="p-8 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group ">
        <a href={props.url} title="service cards" className="space-y-4">
          <div className="w-20 h-20 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center">
            <span> {props.Icon}</span>
          </div>
          <div>
            <Image
              className=""
              alt={props.title}
              src={props.img}
              height={50}
              width={50}
            />
          </div>
          <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
            <a href={props.urlLink}>{props.title}</a>
          </h3>
          <p className="text-black transition duration-200 ease-in-out ">
            {props.Ptag}
          </p>
          <p className="text-black transition duration-200 ease-in-out">
            {props.Ptag1}
          </p>
        </a>
      </div>
    </>


  )
}
