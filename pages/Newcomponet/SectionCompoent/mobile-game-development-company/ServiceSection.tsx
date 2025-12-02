import Link from "next/link";
import Image from "next/image";

export default function ServiceSection(props: any) {
  return (
    <>
      <div key={props.key} className="p-8 space-y-4 bg-gradient-to-br from-blue-500/10 to-purple-500/20 border  rounded-[40px] transition-all duration-300 hover:translate-y-2 group ">
        <a href={props.url} title="service cards" className="space-y-4">
          <div className="w-20 h-20 bg-[#ffffff] shadow rounded-[17px] flex justify-center items-center">
            <Image src={props.img} alt="Real-time Multiplayer Games" width={60} height={60} />
          </div>
          <h3 className="text-lg font-extrabold text-[#fff] transition-all duration-200">
            {props.title}
          </h3>
          <p className="text-white transition duration-200 ease-in-out">
            {props.Ptag}
          </p>
        </a>
      </div>
    </>


  )
}
