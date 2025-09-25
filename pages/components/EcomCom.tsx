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
export default function EcomCom(props: any) {
  return (
    <section className="py-6 lg:py-10">
      <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-[42px]" >
          <div className="flex flex-col items-center lg:flex-row md:space-x-10 px-5 lg:px-10 py-12 rounded-[42px] bg-gradient-to-t from-[#0C0A81CC] to-[#A46BF2CC]">
            <div className="flex items-center justify-center w-full mx-auto md:justify-start">
              <Image
                className="w-full rounded-md"
                title=" E-Commerce App And Web Development Company"
                alt=" E-Commerce App And Web Development Company"
                src="https://www.comfygen.com/images/e-commerce-app-and-web-development-company.webp"
                width={396}
                height={660}
                loading="lazy"
                loader={uploadcareLoader}
                unoptimized={true} />
            </div>
            <div className="w-full py-5 space-y-6 text-left">
              <div className="">
                <h2 className="text-[24px] lg:text-[40px] font-semibold text-white">
                  E-Commerce App And Web Development Company 
                </h2>
              </div>
              <p className="text-base font-medium text-white/80">
                With Comfygen's custom e-commerce development service in Jaipur, India, you will be able to construct complex solutions that are very reliable and highly scalable, which will lead to an increase in customer engagement for your existing e-Commerce business. Custom e-commerce app development company in Jaipur by Comfygen will allow you to
              </p>
              <ul className="px-4 text-base font-medium list-disc text-white/80">
                <li>
                  Build complex solutions that are highly reliable and scalable
                </li>
                <li>
                  Which will increase customer engagement through your existing website
                </li>
                <li>Mobile apps for your current business.</li>
              </ul>
              <div className="py-6">
                <Link href="/portfolio/e-commerce" passHref={true} aria-label="View Comfygems" role="link" >
                  <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                    <MdCallMade />
                    <span>View Comfygems</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
