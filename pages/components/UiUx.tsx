import Image from 'next/image';
export default function UiUx() {
  return (
    <>
      <section className="md:space-y-0 space-y-10 items-center ">
        <div className=" grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 lg:gap-10 gap-6">
          <div className="rounded-lg space-y-2 border">
            <div className="p-4">
              <Image width={48} height={48} src="images/css.png" alt="CSS" className="object-cover w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center">CSS</p>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-4">
              <Image width={48} height={48} src="images/html.png" alt="HTML" className="object-cover w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center">HTML</p>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-4">
              <Image width={48} height={48} src="images/tailwindcss.jpg" alt="Tailwind Css" className="object-cover w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center">Tailwind Css</p>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-4">
              <Image width={48} height={48} src="images/javascript 1.png" alt="JavaScript" className="object-cover w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center">JavaScript</p>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-4">
              <Image width={48} height={48} src="images/java 1.png" alt="JavaQuery" className="object-cover w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center">JavaQuery</p>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-4">
              <Image width={48} height={48} src="images/physics 1.png" alt="React" className="object-cover w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center">React</p>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-4">
              <Image width={48} height={48} src="images/angular.png" alt="Angular" className="object-cover w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center">Angular</p>
          </div>
        </div>
      </section>
    </>
  )
}
