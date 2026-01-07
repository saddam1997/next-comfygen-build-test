import { useRouter } from "next/router"
import React from "react"
export default function TalkExpert() {
  const history = useRouter()
  return (
    <div className="py-10">
          <section className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-md "
              style={{ backgroundImage: `url("https://www.comfygen.com/img/have-project.webp")` }}
            >
              <section className="px-3 py-2 lg:px-14 lg:py-20">
                <div className="flex items-center justify-center p-4">
                  <div className="flex flex-col space-y-4 text-center">
                    <h3 className="text-3xl font-semibold leading-none text-white">
                      Will I be getting regular updates from you?
                    </h3>
                    <p className="text-base text-white">
                      Get in touch with us and discuss your needs and
                      requirements with our experts.
                    </p>
                    <div className="flex items-center justify-center pt-4">
                      <a href="https://api.whatsapp.com/send?phone=919587867258" >
                        <button className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-semibold bg-white rounded-full cursor-pointer text-slate-900 w-fit group">
                          <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                          Let’s Discuss
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
  )
}
