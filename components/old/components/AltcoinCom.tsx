import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Image from "next/image";
import Link from "next/link";
import { MdCallMade } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";

const NewsPoint = [
  { title: ' 1. Admin Panel' },
  { title: ' 2. New Web Development' },
  { title: ' 3. User-friendly Application' },
  { title: ' 4. Seo Optimization' },
  { title: ' 5. Responsive Development' }
]
export default function AltcoinCom(props: any) {
  return (
    <section className="py-6 lg:py-10">
      <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-[42px] " >
          <div className="bg-gradient-to-l from-[#0C0A81CC] to-[#A46BF2CC] flex flex-col-reverse lg:flex-row px-5 lg:px-10 py-12 rounded-[42px] items-center">
            <div className="w-full lg:w-[40%] space-y-6 text-left py-5">
              <div className="space-y-4">
                <h2 className="text-[24px] lg:text-[40px] font-semibold text-white">
                  Altcoin & coin creation Company
                </h2>
              </div>
              <p className="text-base font-medium text-white/80 ">
                Do you have a passion for crypto? Let's get started!
                Integrate cutting-edge blockchain technologies with superior
                security to increase the value and tradeability of your
                altcoin. Providing
              </p>
              <ul className="px-6 text-base font-medium list-disc text-white/80 ">
                <li>
                  Independent altcoin development services for every
                  business,
                </li>
                <li>From start-ups to entrepreneurs,</li>
                <li>Comfygen has an unmatched reputation</li>
                <li>Offers blockchain technology expertise.</li>
              </ul>
              <div className="py-6">
                <Link
                  href="/altcoin-development-services"
                  passHref={true}
                  aria-label="Lets Take Demo" role="link" >
                  <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                    <MdCallMade />
                    <span>Lets Take Demo</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-[90%] lg:w-[60%] md:justify-end mx-auto">
              <Image
                className="rounded-md"
                title="Altcoin & coin creation Company"
                alt="Altcoin & coin creation Company"
                src="https://www.comfygen.com/img/altcoin-coin-development-company.webp"
                height={492}
                width={656}
                loading="lazy"
                loader={uploadcareLoader}
                unoptimized={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
