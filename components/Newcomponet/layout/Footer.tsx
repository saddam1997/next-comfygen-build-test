import Link from "next/link";
import JSON_DATA from "./json/footermenu.json";
import styles from "./styles.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Footer() {

  return (

    <div className="text-white w-full">
      <footer className="bg-[#0C0F18]">
        <div className="space-y-8 md:px-4 py-10 lg:space-y-8 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
          <div className="flex justify-center items-center rounded-2xl bg-no-repeat bg-cover p-10 bg-[url('https://www.comfygen.com/image/footer-top-img.webp')]">
            <div className="">
              <h2 className="text-white lg:text-3xl text-2xl font-bold">
                Have a Project in Your Mind ?
              </h2>
              <p className="text-white font-normal mt-1 text-base lg:w-[60%] w-full">
                At Comfygen, we use creativity and teamwork to shape the
                direction of technology. Our innovative solutions help
                organisations stay ahead of the times in a world that is
                changing quickly. Together, let's develop the technologies of
                the future.
              </p>
              <Link
                href="/contact-us"
                className="hover:text-[#5556D1] mt-6 hover:bg-[#fff] text-[#fff]
             border border-[#fff] px-10 py-2 text-lg font-semibold
             rounded-full capitalize flex items-center gap-1"
              >
                Get Started <MdOutlineArrowOutward />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-8  pt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6 ">
              <p className="text-sm font-normal uppercase  text-[#ffffff]/70">
                Web & App
              </p>
              <div
                className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}
              >
                {JSON_DATA.Development.map(({ name, url }) => (
                  <div
                    key={url}
                    className="flex transition duration-150 cursor-pointer items-center"
                  >
                    <Link
                      href={url}
                      className="text-white text-md font-medium"
                    >
                      {name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm font-normal uppercase  text-[#ffffff]/70">
                Blockchain
              </p>
              <div
                className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}
              >
                {JSON_DATA.Blockchain.map((elem, index) => {
                  const { name, url, num } = elem;
                  return (
                    <div
                      key={url}
                      className="flex transition duration-150 cursor-pointer itmes-center "
                    >
                      <Link
                        className="text-white text-md font-meduim"
                        href={url}
                        passHref={true}
                      >
                        {name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm font-normal uppercase  text-[#ffffff]/70">
                Crypto & Token
              </p>
              <div
                className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}
              >
                {JSON_DATA.CryptoToken.map((elem, index) => {
                  const { name, url, num } = elem;
                  return (
                    <div
                      key={url}
                      className="flex transition duration-150 cursor-pointer itmes-center"
                    >
                      <Link
                        className="text-white text-md font-meduim"
                        href={url}
                        passHref={true}
                      >
                        {name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-normal uppercase  text-[#ffffff]/70">
                Gaming
              </p>
              <div
                className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}
              >
                {JSON_DATA.Gaming.map((elem, index) => {
                  const { name, url, num } = elem;
                  return (
                    <div
                      key={url}
                      className="flex transition duration-150 cursor-pointer itmes-center"
                    >
                      <Link
                        className="text-white text-md font-meduim"
                        href={url}
                        passHref={true}
                      >
                        {name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center space-y-2 lg:space-y-0 justify-between py-6 lg:pb-6 pb-24 text-sm border-t  border-white/10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
          <div className="flex justify-center items-center gap-3">
            <p>© 2026 Comfygen Pvt Ltd.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/about-us"
              className="transition duration-150 cursor-pointer text-md font-medium"
            >
              About Us
            </Link>

            <Link
              href="/career"
              className="transition duration-150 cursor-pointer text-md font-medium"
            >
              Career
            </Link>

            <a
              href="https://www.comfygen.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-150 cursor-pointer text-md font-medium"
            >
              Our Blog
            </a>

            <Link
              href="/disclaimer"
              className="transition duration-150 cursor-pointer text-md font-medium"
            >
              Disclaimer
            </Link>
          </div>
          <div>
            <p>
              All Rights Reserved{" "}
              <Link href="/terms-and-conditions" className="text-[#ffffff]">
                Terms & Conditions
              </Link>{" "}
              ~{" "}
              <Link href="/privacy-policy" className="text-[#ffffff]">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>

  );
}
