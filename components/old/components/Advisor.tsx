import Image from "next/image";
import Link from "next/link";
export default function Advisor() {
  return (
    <section
      className=""
      id="advisor"
    >
      <div className="py-4 lg:py-10">
        <div className="flex flex-col justify-center text-center">
          <h2 className=" font-bold xl:text-4xl text-3xl text-[#0E1F51] text-center">
            Meet Our CTO
          </h2>
        </div>
        <section className="items-center justify-center py-10 space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12 xl:flex xl:space-y-0 xl:space-x-20">
          <div className="flex justify-center w-full">
            <div className="relative">
              <div className="absolute -right-4 -top-4">
                <Link href="https://www.linkedin.com/in/saddam-husen/" passHref={true} target="_blank">
                  <Image
                    height={60}
                    width={60}
                    src="https://www.comfygen.com/media/svg/linkedin.svg"
                    alt="Sololna Card"
                  />
                </Link>
              </div>
              <div className="flex justify-center w-full ">
                <Image
                  width={600}
                  height={600}
                  src="https://www.comfygen.com/img/saddam.webp"
                  alt="CTO"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-white">
            <div className="space-y-4">
              <div className="">
                <h3 className="capitalize text-[#0E1F51] text-[24px] lg:text-3xl font-bold">
                  mr. Saddam  Husen
                </h3>
              </div>
              <p>
                Saddam Husen, CEO/CTO and founder of Comfygen, is a leading tech innovator with a proven track record of delivering commercial apps and leading numerous digital and blockchain projects. His ability to simplify complex technologies has propelled Comfygen to global leadership in Web 3.0, blockchain, and software development. With over 15 years of experience, Saddam currently leads a team of 150+ full-stack developers, shaping the company's technology strategies and architectural directions.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
