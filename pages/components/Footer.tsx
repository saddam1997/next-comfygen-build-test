import Link from "next/link";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import JSON_DATA from "./json/footermenu.json";
import dynamic from "next/dynamic";
import styles from "../components/styles.module.css";
import { url } from "inspector";
import { MdOutlineArrowOutward } from "react-icons/md";
const CompanyLink = dynamic(() => import("../../components/CompanyLink"), {
  loading: () => <p>Loading...</p>,
});

export default function Footer() {
  const Contact = [
    {
      num: "1",
      icon: <RiLinkedinFill size={45} />,
      url: "https://www.linkedin.com/company/comfygen-private-limited",
    },
    {
      num: "2",
      icon: <IoLogoInstagram size={45} />,
      url: "https://www.instagram.com/comfygen_/?hl=en",
    },
    {
      num: "3",
      icon: <TiSocialFacebook size={45} />,
      url: "https://www.facebook.com/comfygen",
    },
    {
      num: "4",
      icon: <RiTwitterXFill size={30} />,
      url: "https://twitter.com/comfygentech",
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <>
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
                <Link href="/contact-us" passHref>
                  <button className="hover:text-[#5556D1] mt-6 hover:bg-[#fff] text-[#fff] border border-[#fff] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                    Get Started <MdOutlineArrowOutward />
                  </button>
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
                  {JSON_DATA.Development.map((elem, index) => {
                    const { name, url, num } = elem;
                    return (
                      <div
                        key={index}
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
                  Blockchain
                </p>
                <div
                  className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}
                >
                  {JSON_DATA.Blockchain.map((elem, index) => {
                    const { name, url, num } = elem;
                    return (
                      <div
                        key={index}
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
                {/* <div className="h-1 w-16 bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC]"></div> */}
                <div
                  className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}
                >
                  {JSON_DATA.CryptoToken.map((elem, index) => {
                    const { name, url, num } = elem;
                    return (
                      <div
                        key={index}
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
                {/* <div className="h-1 w-16 bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC]"></div> */}
                <div
                  className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}
                >
                  {JSON_DATA.Gaming.map((elem, index) => {
                    const { name, url, num } = elem;
                    return (
                      <div
                        key={index}
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
          {/* <CompanyLink /> */}
          <div className="lg:flex items-center space-y-2 lg:space-y-0 justify-between py-6 lg:pb-6 pb-24 text-sm border-t  border-white/10 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto ">
            <div className="flex justify-center items-center gap-3">
              <p>© {currentYear} Comfygen Pvt Ltd.</p>
            </div>

            {/* <div className="flex items-center space-x-4">
              {JSON_DATA.Company.map((elem) => {
                const { name, url, num } = elem;
                return (
                  <Link href={url} passHref={true} key={num}>
                    <p className="transition duration-150 cursor-pointer text-md font-medium">{name}</p>
                  </Link>
                );
              })}
            </div> */}

            <div className="flex items-center space-x-4">
              {JSON_DATA.Company.map((elem, index) => {
                const { name, url, num } = elem;
                const isExternal = url.startsWith("http");
                return isExternal ? (
                  <a
                    href={url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-150 cursor-pointer text-md font-medium"
                  >
                    {name}
                  </a>
                ) : (
                  <Link href={url} key={index} passHref>
                    <p className="transition duration-150 cursor-pointer text-md font-medium">
                      {name}
                    </p>
                  </Link>
                );
              })}
            </div>

            <p className="">
              All Right Reserved{" "}
              <a className="text-[#ffffff]" href="/terms-and-conditions">
                {" "}
                Terms & Condition
              </a>{" "}
              ~{" "}
              <a className="text-[#ffffff]" href="/privacy-policy">
                {" "}
                Privacy Policy
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
