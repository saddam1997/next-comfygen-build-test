import { useRouter } from "next/router"
import React from "react"

export default function TalkExpert() {
  const history = useRouter()
  return (
    <div className="py-10" >
      <section className="items-center mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12  space-y-10">
        <div className="bg-center bg-no-repeat bg-cover rounded-md bg-gradient-to-tr from-blue-400 to-purple-500" >
          <section className="px-3 lg:px-14 py-2 lg:py-20">
            <div className="container flex flex-col justify-center p-4 mx-auto space-y-8 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
              <div className="flex flex-col space-y-4 text-center lg:text-left">
                <h3 className="xl:text-4xl  text-3xl font-bold  text-white">Let’s hear what you have to say?</h3>
                <p className="xl:text-lg text-base text-white">Get in touch with us and discuss your needs and requirements with our experts.</p>
              </div>
              <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end bg-white rounded-full">
                <div className="flex flex-row">
                  <a href='https://api.whatsapp.com/send?phone=919587867258 ' className="bg-white text-slate-900 px-8 py-3 text-lg rounded-full flex justify-center items-center space-x-1 w-fit font-semibold overflow-hidden relative group   cursor-pointer">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>Let's Talk</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
