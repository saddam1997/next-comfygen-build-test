import Link from "next/link";
import Image from "next/image";
import JSON_DATA from "../json/ecommerce-footermenu.json"
import styles from '../styles.module.css'


export default function EcommerceFooter() {


  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="text-white w-full h">
        <footer className="bg-[#0C0F18]">

          <div className="space-y-8 md:px-4 py-10 lg:space-y-8 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">


            {/* ================= TOP CTA SECTION ================= */}
            <div className="relative flex justify-center items-center rounded-2xl overflow-hidden p-10">

              {/* Background Image */}
              <Image
                src="https://www.comfygen.com/image/footer-top-img.webp"
                alt="Footer CTA Background"
                fill
                className="object-cover -z-20"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 -z-10"></div>

              <div className="relative text-center lg:text-left">
                <h2 className="text-white lg:text-3xl text-2xl font-bold">
                  Have a Project in Your Mind ?
                </h2>

                <p className="text-white font-normal mt-3 text-base lg:w-[60%] w-full">
                  At Comfygen, we use creativity and teamwork to shape the direction
                  of technology. Our innovative solutions help organisations stay
                  ahead in a rapidly changing world.
                </p>

                <Link href="/contact-us">
                  <button className="mt-6 hover:text-[#5556D1] hover:bg-white text-white border border-white px-10 py-2 text-lg font-semibold rounded-full flex items-center gap-1 mx-auto lg:mx-0">
                    Get Started 
                  </button>
                </Link>
              </div>
            </div>


            

            <div className="grid grid-cols-1  gap-8  pt-8 sm:grid-cols-2 lg:grid-cols-3">

              <div className="space-y-6 ">
                <p className="text-sm font-normal uppercase  text-[#ffffff]/70">Ecommerce Service</p>
                <div className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[200px] overflow-y-auto`}>
                  {JSON_DATA.EcommerceServ.map((elem) => {
                    const { name, url, num } = elem;
                    return (
                      <div key={num} className="flex transition duration-150 cursor-pointer itmes-center ">
                        <Link className="text-white text-md font-meduim" href={url} passHref={true}>
                          {name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-sm font-normal uppercase  text-[#ffffff]/70">Ecommerce Solution</p>

                <div className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[200px] overflow-y-auto`}>
                  {JSON_DATA.EcommerceSolutioin.map((elem) => {
                    const { name, url, num } = elem;
                    return (
                      <div key={num} className="flex transition duration-150 cursor-pointer itmes-center">
                        <Link className="text-white text-md font-meduim" href={url} passHref={true}>
                          {name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* <CompanyLink /> */}
          <div className="lg:flex items-center space-y-2 lg:space-y-0 justify-between py-6 lg:pb-6 pb-24 text-sm border-t  border-white/10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">

            <div className="flex justify-center items-center gap-3">
              <p>© {currentYear} Comfygen Pvt Ltd.</p>
            </div>

            <div className="flex items-center space-x-4">
              {JSON_DATA.Company.map((elem) => {
                const { name, url, num } = elem;
                return (
                  <Link href={url} passHref={true} key={num}>
                    <p className="transition duration-150 cursor-pointer text-md font-medium">{name}</p>
                  </Link>
                );
              })}
            </div>
            <p className="">All Right Reserved <a className="text-[#ffffff]" href="/terms-and-conditions"> Terms & Condition</a> ~ <a className="text-[#ffffff]" href="/privacy-policy"> Privacy Policy</a></p>
          </div>
        </footer >
      </div >
    </>
  );
}
