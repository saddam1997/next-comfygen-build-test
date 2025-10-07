import Link from "next/link";
import Image from "next/image";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import JSON_DATA from "./json/footermenu.json"
import dynamic from "next/dynamic";
import styles from '../components/styles.module.css'
const CompanyLink = dynamic(() => import('../components/ContactLinks'), {
  loading: () => <p>Loading...</p>,
})

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
      <div className=" text-white text-opacity-50 w-full">
        <footer className="bg-[#000000]">
          <div className="mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 space-y-8 px-4 py-10  lg:space-y-8 ">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-y-0 space-y-4">
              <Link href="/" passHref={true}>
                <div className="">
                  <Image
                    src="https://www.comfygen.com/img/comfygen-logo.webp"
                    className="w-48 h-10 max-w-48 min-w-48"
                    alt="home.png"
                    loader={uploadcareLoader}
                    unoptimized={true}
                    width={500}
                    height={500}
                    style={{ height: "auto", width: "auto" }}
                  
                  />
                </div>
              </Link>
              <div className="flex  space-x-4 md:justify-start">
                {Contact.map((elem) => {
                  const { icon, url, num } = elem;
                  return (
                    <a key={num}
                      aria-label="this is linkdin office app"
                      href={url}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-center w-14 h-14 duration-300 bg-white rounded-lg cursor-pointer bg-opacity-10 hover:bg-black hover:text-white trasition"
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-6 ">
                <p className="text-xl font-bold text-[#ffffff]">Web & App</p>
                <div className="h-1 w-16 bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC]"></div>
                <div className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}>
                  {JSON_DATA.Development.map((elem) => {
                    const { name, url, num } = elem;
                    return (
                      <div key={num} className="flex transition duration-150 cursor-pointer itmes-center ">
                        <Link className="bg-clip-text text-transparent bg-white/50 hover:bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-md font-semibold " href={url} passHref={true}>
                          {name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl font-bold text-[#ffffff]">Blockchain</p>
                <div className="h-1 w-16 bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC]"></div>
                <div className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}>
                  {JSON_DATA.Blockchain.map((elem) => {
                    const { name, url, num } = elem;
                    return (
                      <div key={num} className="flex transition duration-150 cursor-pointer itmes-center ">
                        <Link className="bg-clip-text text-transparent bg-white/50 hover:bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-md font-semibold " href={url} passHref={true}>
                          {name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl font-bold text-[#ffffff]">Crypto & Token</p>
                <div className="h-1 w-16 bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC]"></div>
                <div className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}>
                  {JSON_DATA.CryptoToken.map((elem) => {
                    const { name, url, num } = elem;
                    return (
                      <div key={num} className="flex transition duration-150 cursor-pointer itmes-center">
                        <Link className="bg-clip-text text-transparent bg-white/50 hover:bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-md font-semibold " href={url} passHref={true}>
                          {name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-xl font-bold text-[#ffffff]">Gaming</p>
                <div className="h-1 w-16 bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC]"></div>
                <div className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}>
                  {JSON_DATA.Gaming.map((elem) => {
                    const { name, url, num } = elem;
                    return (
                      <div key={num} className="flex transition duration-150 cursor-pointer itmes-center">
                        <Link className="bg-clip-text text-transparent bg-white/50 hover:bg-gradient-to-t from-[#16BDFA] to-[#BE5EBC] text-md font-semibold " href={url} passHref={true}>
                          {name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <CompanyLink />
          <div className="lg:flex items-center space-y-2 lg:space-y-0 justify-between 2xl:w-9/12 xl:w-5/6 lg:w-11/12 mx-auto w-11/12 py-6 lg:pb-6 pb-24 text-sm border-t  border-white/10">
            <p>© {currentYear} Comfygen Pvt Ltd.</p>
            <div className="flex items-center space-x-4">
              {JSON_DATA.Company.map((elem) => {
                const { name, url, num } = elem;
                return (
                  <Link href={url} passHref={true}>
                    <p className="transition duration-150 cursor-pointer text-md font-semibold hover:text-gray-50">{name}</p>
                  </Link>
                );
              })}
            </div>
            <p>All Right Reserved <a className="text-blue-400" href="/terms-and-conditions"> Terms &Condition</a> ~ <a className="text-blue-400" href="/privacy-policy"> Privacy Policy</a>.</p>
          </div>
        </footer >
      </div >
    </>
  );
}
