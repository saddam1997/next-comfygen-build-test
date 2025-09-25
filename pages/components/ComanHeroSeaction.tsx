import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import ContactFrom from "./ContactFrom";
export default function ComanHeroSeaction(props: any) {
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
    "Building Innovative",
    "Scalable",
    " and User-Centric Solutions"
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
    <div className="flex flex-col-reverse w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 md:flex-row md:items-center md:space-x-20 py-20 ">
      <div className="xl:w-[58%] lg:w-[65%] w-full">
        <div className="">
          <h1 className="text-black xl:text-5xl text-3xl font-extrabold xl:leading-[4rem] leading-[3rem]  ">
            {props.heading}
          </h1>
          <p className="w-full mx-auto  md:text-base lg:text-lg font-normal text-black">
            {props.ptag}
          </p>
          <p className="w-full mx-auto  md:text-base lg:text-lg font-normal text-black">
            {props.ptag1}
          </p>
        </div>
        <div>
          <ul className="grid md:grid-cols-2 gap-2 text-black py-4 px-4">
            <li >{props.li}</li>
            <li >{props.li1}</li>
            <li >{props.li2}</li>
            <li >{props.li3}</li>
          </ul>
        </div>
        <div className="mt-2">
          <button className="btn btn-fix lazyloaded" onClick={props.openModal}>
            Talk to an expert!{" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="24.231" height="11.738" viewBox="0 0 24.231 11.738">
              {" "}
              <path
                id="Path_1487529"
                data-name="Path 1487529"
                d="M542.348,1353.029H522.873c-.142,0-.284.006-.426,0a.944.944,0,0,1-.019-1.888c.141-.01.284,0,.425,0h19.6c-.171-.184-.27-.3-.376-.4-.949-.946-1.9-1.887-2.846-2.839a.957.957,0,0,1-.066-1.391.936.936,0,0,1,1.388.044q2.423,2.392,4.829,4.8a.927.927,0,0,1,.014,1.456q-2.42,2.429-4.862,4.835a.927.927,0,0,1-1.354.039.951.951,0,0,1,.039-1.39q1.4-1.412,2.815-2.8a3.557,3.557,0,0,1,.415-.307Z"
                transform="translate(-521.511 -1346.214)"
                fill="#000"
              ></path>{" "}
            </svg>{" "}
          </button>
        </div>
      </div>
      <div>
        {props.talkToExpertModal && (
          <>
            <div className={`fixed inset-0 z-50 overflow-y-auto ${props.talkToExpertModal ? "block" : "hidden"}`} role="dialog" aria-modal="true">
              <div className="flex items-center justify-center min-h-screen">
                <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
                <div className="modal-dialog modal-dialog-centered bg-white rounded shadow-lg max-w-md mx-auto z-[999]">
                  <div className="modal-content">
                    <div className="modal-header border-b-0 flex justify-between items-center p-4">
                      <p className=" font-bold 2xl:text-3xl xl:text-3xl  text-2xl text-[#0E1F51] ">
                        Hey! Let’s Talk
                      </p>
                      <button
                        type="button"
                        className="text-gray-500 text-3xl hover:text-gray-700 cursor-pointer"
                        onClick={props.closeModal}
                      >
                        &times;
                      </button>
                    </div>
                    <div>
                      <ContactFrom />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


