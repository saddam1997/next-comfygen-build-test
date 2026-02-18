
import {  Healthcare, Finance, Finance1,  EcommerceApp, EducationApp, } from "../../../../navData"
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

const IndustriesMnue = ({ setActiveTab, activeTab, showNav, setShowNav, handleTabClick }: any) => {
    return (
              <div
                className=" group  "
                onMouseEnter={() => setActiveTab("Tab1")}
              >
                <button
                  onClick={() => setShowNav(showNav === 2 ? 0 : 2)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 2 ? "  font-medium " : " font-medium "
                    }
                  >
                    Industries
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize    text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative left-0 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top  w-full ">
                  {/* <div className="absolute -top-2 2xl:inset-x-[29rem] xl:inset-x-[29rem]   bg-white rotate-45   w-4 h-4"></div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div className="">
                        <ul className="space-y-2">
                          <li
                            onClick={() => handleTabClick("Tab1")}
                            className={
                              activeTab === "Tab1"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/image/healthcare-app-dev-header-icon.svg"
                              alt="Healthcare App Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-3 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Healthcare App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Transforming Healthcare with Smart Apps
                              </span>
                            </div>
                          </li>
                          <li
                            onClick={() => handleTabClick("Tab2")}
                            className={
                              activeTab === "Tab2"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/astrology-app-development/finance.svg"
                              alt="Web3 Development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Finance App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Transforming Financial Ideas into Apps
                              </span>
                            </div>
                          </li>


                          <li
                            onClick={() => handleTabClick("Tab3")}
                            className={
                              activeTab === "Tab3"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/navbar/education-app-development.svg"
                              alt="education-app-development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Education App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Customized Applications for Every Industry
                              </span>
                            </div>
                          </li>

                          <li
                            onClick={() => handleTabClick("Tab4")}
                            className={
                              activeTab === "Tab4"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/navbar/ecommerce-development.svg"
                              alt="ecommerce-development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Ecommerce Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Empowering Seamless Online Shopping
                              </span>
                            </div>
                          </li>

                          <Link
                            onClick={() => handleTabClick("Tab5")}

                            href="/dating-app-development"
                            className={
                              activeTab === "Tab5"
                                ? "flex items-start gap-2 bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                                : "flex items-start gap-2 hover:bg-[#5556D1]/10 p-2 py-3 rounded-md cursor-pointer"
                            }
                          >
                            <Image
                              src="https://www.comfygen.com/comfygen-images/navbar/dating-app-development.svg"
                              alt="dating-app-development"
                              height={40}
                              width={40}
                            />
                            <div className="space-y-4 cursor-pointer">
                              <p className="2xl:text-lg xl:text-base font-medium  cursor-pointer text-[#212121]">
                                Dating App Development
                              </p>
                              <span className="text-[#212121]/80 text-sm font-normal">
                                Smart Solutions for Digital Romance
                              </span>
                            </div>
                          </Link>

                        </ul>
                      </div>
                      <div className="space-y-10">
                        <div>
                          {activeTab === "Tab1" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Healthcare.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                  >
                                    <Link
                                      onClick={() =>
                                        setShowNav(showNav === 2 ? 0 : 2)
                                      }
                                      href={url}
                                      passHref={true}
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}


                          {activeTab === "Tab2" && (
                            <ul className="text-sm font-medium space-y-2">
                              {Finance.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                  >
                                    <Link
                                      onClick={() =>
                                        setShowNav(showNav === 2 ? 0 : 2)
                                      }
                                      href={url}
                                      passHref={true}
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}

                          {activeTab === "Tab3" && (
                            <ul className="text-sm font-medium space-y-2">
                              {EducationApp?.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                  >
                                    <Link
                                      onClick={() =>
                                        setShowNav(showNav === 2 ? 0 : 2)
                                      }
                                      href={url}
                                      passHref={true}
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          {activeTab === "Tab4" && (
                            <ul className="text-sm font-medium space-y-2">
                              {EcommerceApp.map((elem: any, index: any) => {
                                const { name, num, url } = elem;
                                return (
                                  <li
                                    key={index}
                                    className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                  >
                                    <Link
                                      onClick={() =>
                                        setShowNav(showNav === 2 ? 0 : 2)
                                      }
                                      href={url}
                                      passHref={true}
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}


                        </div>
                      </div>



                      <div className={`${activeTab === "Tab2" ? "" : "hidden"}`}>
                        {activeTab === "Tab2" && (
                          <ul className="text-sm font-medium space-y-2">
                            {Finance1.map((elem: any, index: any) => {
                              const { name, num, url } = elem;
                              return (
                                <li
                                  key={index}
                                  className="py-1.5 text-black/80 hover:text-[#5556D1] whitespace-nowrap transition duration-200 transform hover:translate-x-4 "
                                >
                                  <Link
                                    onClick={() =>
                                      setShowNav(showNav === 2 ? 0 : 2)
                                    }
                                    href={url}
                                    passHref={true}
                                  >
                                    {name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                      <div className={`${activeTab === "Tab5" || activeTab === "Tab2" ? "hidden" : ""}`}>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/solutions-header-img.webp"
                            alt=""
                            height={486}
                            width={511}
                          />
                          <span className="bg-[#fff] absolute bottom-0 right-0 p-5 block justify-end items-center rounded-tl-[50px]">
                            <button className="flex items-center gap-2 bg-[#5556D1] py-3 px-6 font-semibold rounded-full text-lg text-white">
                              Connect to expert
                              <Image
                                src="https://www.comfygen.com/image/button-arrow.svg"
                                alt=""
                                height={22}
                                width={22}
                              />
                            </button>
                          </span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
    )
}

export default IndustriesMnue
