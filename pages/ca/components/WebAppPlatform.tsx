import Image from 'next/image';
export default function Home() {
  return (
    <>
      <section className="md:space-y-0 space-y-10 items-center ">
        <div className=" grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 lg:gap-10 gap-6">
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <Image width={48} height={48} src="images/img/android 1.png" alt="Android" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center pb-3">Android</p>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <Image width={48} height={48} src="images/React-icon.png" alt="React Native" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center pb-3">React Native</p>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <Image width={48} height={48} src="images/apple 1.png" alt="iOS" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-base font-medium text-center pb-3">iOS</p>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <Image width={48} height={48} src="images/Xamarin.png" alt="aXamarin" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <p className="md:text-lg text-basefont-medium text-center pb-3">Xamarin</p>
          </div>
        </div>
      </section>
    </>
  )
}
