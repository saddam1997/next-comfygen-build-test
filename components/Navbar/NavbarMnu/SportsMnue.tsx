
import {  Sports, Sports1, Sports2 } from "../navData"
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';


const SportsMnue = ({ setActiveTab, activeTab, showNav,setShowNav, handleTabClick }: any) => {
    return (
              <div className="group z-40 ">
                <button
                  onClick={() => setShowNav(showNav === 4 ? 0 : 4)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 3 ? "  font-medium " : " font-medium "
                    }
                  >
                    Sports
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-50 w-[95vw] max-w-7xl left-1/2 -translate-x-1/2 absolute top-20 lg:bg-white rounded-2xl shadow-xl border text-gray-700 hidden group-hover:block transition duration-200 origin-top">
                  {/* <div className="absolute -top-2 2xl:inset-x-[19rem] xl:inset-x-[20rem]   bg-white rotate-45   w-4 h-4"></div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div className="space-y-10">
                        <div>
                          <ul className="text-[18px] font-medium space-y-3">
                            {Sports.map((elem: any, index: any) => {
                              const { name, num, img, dec, url } = elem;
                              return (
                                <li key={index}>
                                  <a
                                    href={url}

                                    className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                  >
                                    <Image
                                      src={img}
                                      alt={name}
                                      height={40}
                                      width={40}
                                    />
                                    <div className="space-y-4 cursor-pointer">
                                      <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                        {name}
                                      </p>
                                      <span className="text-[#212121]/80 text-sm font-normal">
                                        {dec}
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <ul className="text-[18px] font-medium space-y-3">
                        {Sports1.map((elem: any, index: any) => {
                          const { name, num, img, dec, url } = elem;
                          return (
                            <li key={index}>
                              <a
                                href={url}

                                className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                              >
                                <Image
                                  src={img}
                                  alt={name}
                                  height={40}
                                  width={40}
                                />
                                <div className="space-y-4 cursor-pointer">
                                  <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                    {name}
                                  </p>
                                  <span className="text-[#212121]/80 text-sm font-normal">
                                    {dec}
                                  </span>
                                </div>
                              </a>
                            </li>
                          );
                        })}
                      </ul>

                      <ul className="text-[18px] font-medium space-y-3">
                        {Sports2.map((elem: any, index: any) => {
                          const { name, num, img, dec, url } = elem;
                          return (
                            <li key={index}>
                              <a
                                href={url}

                                className="flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                              >
                                <Image
                                  src={img}
                                  alt={name}
                                  height={40}
                                  width={40}
                                />
                                <div className="space-y-4 cursor-pointer">
                                  <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                    {name}
                                  </p>
                                  <span className="text-[#212121]/80 text-sm font-normal">
                                    {dec}
                                  </span>
                                </div>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default SportsMnue
