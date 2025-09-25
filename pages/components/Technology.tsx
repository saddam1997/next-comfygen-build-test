import Image from 'next/image';
export default function Home() {
  return (
    <>
      <section className="md:space-y-0 space-y-10 items-center ">
        <div className=" grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 lg:gap-10 gap-6">
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/blockchaini.png" alt="Blockchain" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center text-black ">Blockchain</p>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/mern-stack.png" alt="Mern Stack" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center text-black">Mern Stack</p>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/magento.png" alt="Magneto" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center text-black">Magneto</p>
          </div>
          <div className=" rounded-lg space-y-2 border">
            <div className="p-3">
              <Image width={48} height={48} src="images/microsoft.png" alt="Microsoft" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-basefont-medium text-center text-black">Microsoft</p>
          </div>
        </div>
      </section>
    </>
  )
}
