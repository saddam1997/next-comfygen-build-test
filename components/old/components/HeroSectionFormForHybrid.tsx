import Link from "next/link";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import ContactFromHeader from "./ContactFromHeader";
import { MdOutlineControlPointDuplicate } from "react-icons/md";


export default function HeroSectionForm(props: any) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 600);
    }
  }, []);
  const data = props.btnLink;
  if (!data) {
    return <div>Loading...</div>;
  }
  const [words, setWords] = useState([
    "Blockchain, Altcoin",
    "Fantacy, News App",
    "Ecommerce, MLM,",
    "Custom Web & Apps",
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      setTypedText(word.substring(0, typedText.length + 1));
    }, 100);
    if (typedText === word) {
      setTimeout(() => {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setTypedText("");
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [currentWordIndex, typedText, words]);
  return (
    <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:flex-row md:items-center lg:space-x-20 lg:space-y-0">
      <div className="w-full lg:pt-0 pt-10">
        <div className="space-y-6">
          {props.isHome ? (
            <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem] ">
              {typedText}
              <br />
              <b className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC]">
                Solution & Service
              </b>
              <br />
              Provider
            </h1>
          ) : (
            <h1 className="text-white xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
              {props.heading}
            </h1>
          )}
          <p className="w-full mx-auto text-2xl font-bold text-white/80 lg:text-base">
            {props.subhead}
          </p>
          <p className="w-full mx-auto text-sm font-light text-white/80 lg:text-base">
            {props.ptag}
          </p>
          <p className="w-full mx-auto text-sm font-light text-white/80 lg:text-base">
            {props.ptag1}
          </p>
          <p className="w-full mx-auto text-sm font-light text-white/80 lg:text-base">
            {props.ptag2}
          </p>
          <ul className="text-white/80 grid sm:grid-cols-2  gap-4 font-base p-4" style={{ listStyleType: 'disc', color: 'white' }}>
            <li>  {props.li}</li>
            <li> {props.li1}</li>
            <li> {props.li2}</li>
            <li>{props.li3}</li>
            <li>{props.li4}</li>
            <li>{props.li5}</li>

          </ul>
          <p className="w-full mx-auto text-sm font-light text-white/80 lg:text-base">
            {props.ptag3}
          </p>
        </div>
        <div className="py-10">
          <Link href={props.btnLink} passHref={true}>
            <div className="px-10 py-4 text-lg rounded-full relative inline-flex group items-center justify-center  cursor-pointer   bg-gradient-to-r from-[#16BDFA] to-[#BE5EBC] text-white overflow-hidden">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
              <span className="relative"> {props.btnName}</span>
              <BsArrowRight className="ml-2 transition-all duration-200 ease-out " />
            </div>
          </Link>
        </div>
      </div>
      <ContactFromHeader />
    </div>
  );
}