import Image from "next/image";
import HeroClientCTA from "../HeroSection/HeroClientCTA";

function Page() {
  return (
    <div>
      <section className="relative my-10 bg-[#5951cde6] overflow-hidden grid md:grid-cols-2 items-center min-h-[400px]">

         <div className="relative z-10 flex flex-col justify-center p-6 md:ps-12 text-center md:text-left">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold xl:leading-[4rem]">
            <b className="block">AI-Based Mobile App & Web</b>
            <span className="block text-xl xl:text-4xl font-medium">
              Development Company
            </span>
          </h1>

          <p className="text-white font-normal md:font-bold mt-4 max-w-xl">
            Are you looking to build powerful mobile application? Comfygen is a trusted AI-based mobile app & web development company. We design and build mobile apps and websites with AI-powered solutions tailored for startups, enterprises, and global businesses.
          </p>

          <div className="mt-4">
            <HeroClientCTA />
          </div>
        </div>

        {/* Single Background Image */}
        <div className="absolute inset-0 md:relative md:h-full">
          <Image
            src="/contact_us_hero.png"
            alt="AI-Based Mobile App Development Company"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover md:object-contain"
          />
          <div className="absolute inset-0 bg-black/40 md:hidden"></div>
        </div>

        {/* Content */}
       

      </section>
    </div>
  );
}

export default Page;