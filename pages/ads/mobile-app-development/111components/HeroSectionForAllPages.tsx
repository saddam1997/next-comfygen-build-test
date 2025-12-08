import Link from "next/link";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import ContactFrom from "../../../components/ContactFrom";

export default function HeroSectionForAllPages(props: any) {
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

  return (
    <section className=" ">
      <div className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto py-24 grid lg:grid-cols-3 grid-cols-1 gap-10 items-center">
      <div className="lg:col-span-2">
             <div className="space-y-4">
            <div>
              <h1 className="text-white xl:text-4xl text-3xl font-extrabold xl:leading-[3rem] leading-[3rem]  ">
                {props.heading}
              </h1>
              <p className="w-full  mx-auto text-2xl font-bold text-white lg:text-base mt-2">
                {props.subhead}
              </p>
              <p
                className="w-full lg:w-2/3 text-start flex justify-start  text-sm font-light text-white lg:text-base mt-2"
                dangerouslySetInnerHTML={{ __html: props.ptag }}
              ></p>
              <p
                className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2"
                dangerouslySetInnerHTML={{ __html: props.ptag1 }}
              ></p>
              <p
                className="w-full mx-auto text-sm font-light text-white lg:text-base mt-2"
                dangerouslySetInnerHTML={{ __html: props.ptag2 }}
              >
                {props.ptag2}
              </p>
            </div>

            <ul className="text-white grid md:grid-cols-1 gap-2 text-base font-normal">
              {props.li && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>
                  {props.li}
                </li>
              )}
              {props.li1 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>{" "}
                  {props.li1}
                </li>
              )}
              {props.li2 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>{" "}
                  {props.li2}
                </li>
              )}
              {props.li3 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>{" "}
                  {props.li3}
                </li>
              )}
              {props.li4 && (
                <li className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full border border-white mt-1.5 flex-shrink-0"></div>{" "}
                  {props.li4}
                </li>
              )}
            </ul>

            <p className="w-full mx-auto text-sm font-light text-white lg:text-base">
              {props.ptag3}
            </p>
          </div>
          <div>
            <Link href={"/contact-us"}>
              <button className="btn btn-fix lazyloaded">
              Talk to an expert!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.231"
                  height="11.738"
                  viewBox="0 0 24.231 11.738"
                >
                  <path
                    id="Path_1487529"
                    data-name="Path 1487529"
                    d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                    transform="translate(-521.511 -1346.214)"
                    fill="#fff"
                  ></path>{" "}
                </svg>
              </button>
            </Link>
          </div>
      </div>

      <div>
      <ContactFrom />
      </div>
   
     
      </div>
    </section>
  );
}
