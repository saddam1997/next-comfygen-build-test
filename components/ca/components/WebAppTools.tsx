import Image from 'next/image';
export default function Home() {
  return (
    <>
      <section className="items-center space-y-10 md:space-y-0 ">
        <div className="grid grid-cols-3 gap-6  lg:grid-cols-6 md:grid-cols-5 lg:gap-10">
          <div className="space-y-3 border rounded-lg">
            <div className="py-4">
              <Image width={48} height={48} src="images/nodejs.svg" alt="NodeJs" className="w-12 h-12 mx-auto " />
            </div>
            <p className="text-base font-medium text-center md:text-lg">Nodejs</p>
          </div>
          <div className="space-y-3 border rounded-lg ">
            <div className="py-4">
              <Image width={48} height={48} src="images/img/sails.svg" alt="Sail" className="w-12 h-12 mx-auto " />
            </div>
            <p className="text-base font-medium text-center md:text-lg ">Sails js</p>
          </div>
          <div className="space-y-3 border rounded-lg ">
            <div className="py-4">
              <Image width={48} height={48} src="images/loopback.svg" alt="loopback" className="w-12 h-12 mx-auto " />
            </div>
            <p className="text-base font-medium text-center md:text-lg">LoopBack</p>
          </div>
          <div className="space-y-3 border rounded-lg ">
            <div className="py-4">
              <Image width={48} height={48} src="images/angular.png" alt="Angular.Js" className="w-12 h-12 mx-auto " />
            </div>
            <p className="text-base font-medium text-center md:text-lg">Angular</p>
          </div>
          <div className="space-y-3 border rounded-lg ">
            <div className="items-center justify-center">
              <Image width={100} height={80} src="images/express.png" alt="express" className="mx-auto" />
            </div>
            <p className="py-3 text-base font-medium text-center md:text-lg">Express</p>
          </div>
          <div className="space-y-3 border rounded-lg ">
            <div className="py-2">
              <Image width={100} height={84} src="images/java 1.png" alt="java" className="mx-auto " />
            </div>
            <p className="text-base font-medium text-center md:text-lg">Java</p>
          </div>
          <div className="space-y-3 border rounded-lg">
            <div className="p-1">
              <Image width={87} height={40} src="images/java-php 1.png" alt="PHP" className="mx-auto " />
            </div>
            <p className="text-base font-medium text-center md:text-lg">PHP</p>
          </div>
          <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className="space-y-3 border rounded-lg ">
            <div className="py-2">
              <Image width={80} height={80} src="images/python 1.png" alt="Python" className="object-cover w-20 h-20 mx-auto" />
            </div>
            <p className="text-base font-medium text-center md:text-lg">Python</p>
          </div>
          <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className="space-y-3 border rounded-lg ">
            <div className="py-2">
              <Image width={80} height={80} src="images/img/ruby.webp" alt="Ruby" className="w-20 h-20 mx-auto ojbect-cover" />
            </div>
            <p className="text-base font-medium text-center md:text-lg">Ruby</p>
          </div>
        </div>
      </section>
    </>
  )
}
