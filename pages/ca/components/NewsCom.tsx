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
export default function NewsCom(props: any) {
  return (
    <section className="py-6 lg:py-10">
          <div className="items-center w-11/12 mx-auto space-y-10 2xl:w-9/12 xl:w-5/6 lg:w-11/12 md:flex md:space-x-10 md:space-y-0">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-[42px] w-full" >
              <div className="bg-gradient-to-r from-[#0C0A81CC] to-[#A46BF2CC]  flex flex-col lg:flex-row py-10 px-4 lg:px-10 rounded-[42px] items-center">
                <div className="flex justify-center w-full md:justify-center ">
                  <Image
                    className="rounded-md "
                    title="News App and Web platform Development Company"
                    alt="News App and Web platform Development Company"
                    src="https://www.comfygen.com/img/news-app-web-plateform-development-company.webp"
                    height={668}
                    width={532}
                    loading="lazy"
                    loader={uploadcareLoader}
                    unoptimized={true} />
                </div>
                <div className="w-full space-y-[5px] text-left">
                  <h2 className="text-[24px] lg:text-4xl font-bold text-white">
                    News App and Web platform Development Company
                  </h2>
                  <p className="py-6 text-base font-medium text-white/80">
                    We are a Company that creates mobile applications and
                    websites to deliver news content to users. As part of their
                    services, they may design and develop user-friendly
                    interfaces, integrate various features such as push
                    notifications, social sharing, and search functions, and
                    optimize the platform for speed and performance. We provide
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {NewsPoint.map((elem: any, index: any) => {
                      const { title } = elem;
                      return (
                        <span key={index} className="p-6 py-2 font-medium text-white rounded-md bg-white/40">
                          {title}
                        </span>
                      );
                    })}
                  </div>
                  <div className="py-8">
                    <Link
                      href="/news-application-development"
                      passHref={true}
                      aria-label="View News App" role="link">
                      <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out origin-center bg-black rounded-full group-hover:w-60 group-hover:h-60 opacity-10"></span>
                        <MdCallMade />
                        <span>View News App</span>
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
