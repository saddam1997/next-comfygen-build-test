import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Image from "next/image";
import Link from "next/link";
import { MdCallMade } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
export default function CricketCom(props: any) {
  return (
    <section className="py-6 mt-6 lg:py-10">
    <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
      <div data-bg="https://www.comfygen.com/img/cricket-live-bg.webp" className="bg-center bg-no-repeat bg-cover rounded-[42px] lazyload">
        <div className="bg-gradient-to-l from-[#0C0A81CC] to-[#A46BF2CC]  flex flex-col-reverse lg:flex-row py-9 px-4 lg:px-20 lg:py-12 rounded-[42px] items-center ">
          <div className="space-y-10 text-left lg:w-full">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white xl:text-4xl">
                Cricket Live Line App & Web Development
              </h2>
              <p className="text-base font-medium text-white/80">
                Live lines, public polls, live commentary, and many other
                features enhance the thrill of the match. Performance,
                precision, and perseverance are the keys to success in
                cricket.
              </p>
              <p className="text-base font-medium text-white/80">
                With features such as
              </p>
              <ul className="px-10 text-base font-medium list-disc text-white/80 ">
                <li>Real-time live line updates,</li>
                <li>Live commentary,</li>
                <li>Multiple sports live lines,</li>
                <li>Expert polls, public polls, and live chat,</li>
              </ul>
            </div>
            <div className="py-6">
              <Link
                href="/live-line-cricket-mobile-app-development"
                passHref={true}
                aria-label="View Cricket Demo " role="link"  >
                <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                  <MdCallMade />
                  <span>View Cricket Demo </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-full mx-auto mb-10 md:justify-start md:mb-0">
            <Image
              className="w-full rounded-md"
              title="Cricket Live Line App & Web Development"
              alt="Cricket Live Line App & Web Development"
              src="https://www.comfygen.com/img/cricket-live-line-app-web-development.webp"
              height={459}
              width={671}
              loader={uploadcareLoader}
              loading="lazy"
              unoptimized={true} />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
