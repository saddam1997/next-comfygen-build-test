import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';
import { CircleCheck } from 'lucide-react';

export default function HireSection({ Hire, myList }) {
  if (!Hire) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lg:flex items-center lg:space-x-10 space-y-6">
      {Hire.map((elem, index) => {
        const { title, btn, desc, url, decs, num } = elem;

        return (
          <div key={num} className="w-full md:text-left space-y-6">
            <div className="space-y-3">
              <h2 className="text-[40px] font-bold leading-[46.96px] text-[#FFFFFF]">
                {title}
              </h2>
            </div>
            <p className="text-[16px] font-[400px] text-[#FFFFFF]/80">
              {desc}
            </p>
            <p className="text-[16px] font-[400px] text-[#FFFFFF]/80">
              {decs}
            </p>

            <div className="flex items-center gap-3">
              <Link href={url} passHref={true}>
                <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                  <ArrowUpRight />
                  <span>{btn}</span>
                </div>
              </Link>
              <Link href="/contact-us" passHref={true}>
                <div className="relative inline-flex items-center justify-center px-8 py-3 space-x-1 overflow-hidden text-lg font-medium text-blue-600 bg-white rounded-full cursor-pointer w-fit group">
                  <span>Contact Us</span>
                  <ArrowUpRight />
                </div>
              </Link>
            </div>
          </div>
        );
      })}

      <div className="w-full md:text-left">
        <ul className="space-y-4 text-[#FFFFFF]">
          {myList.map((item, index) => (
            <li className="flex items-start" key={index}>
              <span className="pr-4">
                <CircleCheck size={24} className="rounded-full" />
              </span>{" "}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
