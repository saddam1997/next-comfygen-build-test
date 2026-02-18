
import { company, company1} from "../../../../navData"
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';


const CompanyMnue = ({  showNav,setShowNav, }: any) => {
    return (
              <div className="group z-40 ">
                <button
                  onClick={() => setShowNav(showNav === 5 ? 0 : 5)}
                  className="inline-flex items-center py-8 text-sm border-b-2 border-transparent hover:text-black/100 text-black/80"
                >
                  <span
                    className={
                      showNav === 5 ? " font-medium " : " font-medium "
                    }
                  >
                    Company
                  </span>
                  <MdKeyboardArrowDown
                    className="hover:text-black/100 text-black/80"
                    size={18}
                  />
                </button>
                <div className="z-40 lg:pt-0 pt-2 mt-[10px] lg:bg-white rounded-2xl bg-transparent capitalize  text-gray-700 lg:absolute top-20 lg:drop-shadow-xl lg:border whitespace-nowrap relative  left-0 xl:right-50 transform hidden group-hover:block   transition duration-200 ease-in-out origin-top ">
                  {/* <div className="absolute -top-2 2xl:inset-x-[4rem] xl:inset-x-[5rem]   bg-white rotate-45  w-4 h-4">
                  {" "}
                </div> */}
                  <div className="2xl:p-10 p-5 mx-auto text-sm">
                    <div className="grid grid-cols-3 2xl:gap-10 gap-[1rem]">
                      <div>
                        <ul className="text-[18px] font-medium space-y-3">
                          {company.map((elem: any, index: any) => {
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
                      <div>
                        <ul className="text-[18px] font-medium space-y-3">
                          {company1.map((elem: any, index: any) => {
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
                      <div>
                        <a href="/contact-us" className="relative">
                          <Image
                            src="https://www.comfygen.com/image/about-us-header-img.webp"
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

export default CompanyMnue
