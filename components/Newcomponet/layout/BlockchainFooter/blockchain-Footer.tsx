import Link from "next/link";
import Image from "next/image";
import { RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import JSON_DATA from "../json/blockchain-footermenu.json"
import dynamic from "next/dynamic";
import styles from '../styles.module.css'
import { MdOutlineArrowOutward } from "react-icons/md";
const CompanyLink = dynamic(() => import('../comman/CompanyLink'), {
  loading: () => <p>Loading...</p>,
})

export default function BlockchainFooter() {

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

    <div className="space-y-8 md:px-4 py-10 lg:space-y-8 2xl:w-10/12 w-11/12 mx-auto">

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
              Get Started <MdOutlineArrowOutward />
            </button>
          </Link>
        </div>
      </div>

      {/* ================= FOOTER LINKS ================= */}
      <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-3">

        {/* Blockchain Service */}
        <div className="space-y-6">
          <p className="text-sm font-normal uppercase text-white/70">
            Blockchain Service
          </p>

          <div className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}>
            {JSON_DATA.BlockchainServ.map(({ name, url, num }) => (
              <div key={num} className="flex transition duration-150 cursor-pointer items-center">
                <Link className="text-white text-md font-medium hover:text-[#5556D1]" href={url}>
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Blockchain Solution */}
        <div className="space-y-6">
          <p className="text-sm font-normal uppercase text-white/70">
            Blockchain Solution
          </p>

          <div className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}>
            {JSON_DATA.BlockchainSolutioin.map(({ name, url, num }) => (
              <div key={num} className="flex transition duration-150 cursor-pointer items-center">
                <Link className="text-white text-md font-medium hover:text-[#5556D1]" href={url}>
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Crypto & Token */}
        <div className="space-y-6">
          <p className="text-sm font-normal uppercase text-white/70">
            Crypto & Token
          </p>

          <div className={`${styles.TechnologyStack} space-y-3 text-sm capitalize h-[500px] overflow-y-auto`}>
            {JSON_DATA.CryptoToken.map(({ name, url, num }) => (
              <div key={num} className="flex transition duration-150 cursor-pointer items-center">
                <Link className="text-white text-md font-medium hover:text-[#5556D1]" href={url}>
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

    {/* ================= BOTTOM BAR ================= */}
    <div className="lg:flex items-center justify-between py-6 text-sm border-t border-white/10 2xl:w-10/12 w-11/12 mx-auto">

      <div className="flex justify-center lg:justify-start items-center gap-3">
        <p>© {currentYear} Comfygen Pvt Ltd.</p>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-4 lg:mt-0">
        {JSON_DATA.Company.map(({ name, url, num }) => (
          <Link key={num} href={url}>
            <p className="transition duration-150 cursor-pointer text-md font-medium hover:text-[#5556D1]">
              {name}
            </p>
          </Link>
        ))}
      </div>

      <p className="text-center lg:text-right mt-4 lg:mt-0">
        All Right Reserved{" "}
        <Link className="hover:text-[#5556D1]" href="/terms-and-conditions">
          Terms & Condition
        </Link>{" "}
        ~{" "}
        <Link className="hover:text-[#5556D1]" href="/privacy-policy">
          Privacy Policy
        </Link>
      </p>

    </div>
  </footer>
</div>
    </>
  );
}
