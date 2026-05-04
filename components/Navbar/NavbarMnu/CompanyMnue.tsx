
import { company, company1 } from "../navData"
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from "../../ui/Button";


const CompanyMnue = ({ showNav, setShowNav, }: any) => {
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
        <ChevronDown
          className="hover:text-black/100 text-black/80"
          size={18}
        />
      </button>
      <div className="z-50 w-[95vw] max-w-7xl left-1/2 -translate-x-1/2 absolute top-24 lg:bg-white rounded-2xl shadow-xl border text-gray-700 hidden group-hover:block transition duration-200 origin-top ">
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
                   <Button variant="secondary" radius="full" className=" py-2 text-white rounded-full"> Connect to expert →</Button>
                 
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
