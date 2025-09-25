import Link from "next/link";
import styles from '../styles.module.css'


export default function ServiceSection(props: any) {
  return (
    <>
      <div key={props.key} className={`${styles.financeSec} p-8 space-y-4 bg-white border  rounded-[10px] transition-all duration-300 hover:translate-y-2 group   `}>
        <h3 className="text-lg text-center font-extrabold text-[#0E1F51] transition-all duration-200">
          {props.title}
        </h3>
        <p className="text-black text-center transition duration-200 ease-in-out">
          {props.Ptag}
        </p>
      </div>
    </>


  )
}