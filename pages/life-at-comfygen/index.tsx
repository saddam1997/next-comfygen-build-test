
import Image from "next/image";
import Header from "../components/Header";
import styles from './styles.module.css'
export default function lifeatcompany() {

  const ChooseUs = [
    {
      num: "1",
      img: "https://www.comfygen.com/images/img/Rectangle 25.png",
      title: "The Most Popular Bussiness Of The Year",
      decs: "We should not judge people by their peak of excellence; but by the distance they have traveled from the point where they started.",
    },
    {
      num: "2",
      img: "https://www.comfygen.com/images/img/Rectangle 25.png",
      title: "Best Employee Award",
      decs: "Being rewarded for hard work shows the employee the worth of their work, and how it adds value to a company. This in turn, gives the employee a sense of purpose in their day to day work.",
    },
    {
      num: "3",
      img: "https://www.comfygen.com/images/img/Rectangle 25.png",
      title: "Certificate Of Achievement",
      decs: "Achievements are a result of hard work, determination and constant efforts with positive attitude. Here are the best achievement quotes to inspire you to achieve your goals and dreams..",
    },
  ];


  return (
    <>
      <div className="overflow-hidden">
        <div
          data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="bg-center bg-no-repeat bg-cover " style={{ backgroundImage: `url("https://www.comfygen.com/lifecomfygen/IMG-20231110-WA0013.webp")`, }}>
          <Header />
          <div className="h-[calc(100vh-2rem)]   bg-gradient-to-r from-blue-600/50  to-purple-500/40 md:flex items-center relative">
            <div className="flex flex-col-reverse w-11/12 py-8 mx-auto 2xl:w-4/6 xl:w-5/6 md:flex-row md:items-center">
              <div className="w-full space-y-8 text-center md:text-center" >
              </div>
            </div>
          </div>
        </div>
        <div className="x-auto 2xl:w-9/12 xl:w-5/6 w-11/12 mx-auto px-4 py-10 relative bg-gray-50">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-1 flex-col">
                <Image
                  src="https://www.comfygen.com/lifecomfygen/IMG-20231110-WA0011.webp"
                  alt=""
                  className="object-cover w-full h-full"
                  height={853}
                  width={640}
                />
              </div>
              <div className="hidden md:flex flex-1 flex-row gap-2">
                <div className="flex flex-1 flex-col">
                  <Image
                    src="https://www.comfygen.com/lifecomfygen/IMG-20231117-WA0100.webp"
                    alt=""
                    className="object-cover w-full h-full"
                    height={920}
                    width={343}
                  />
                </div>
                <div className="hidden md:flex flex-1 flex-col">
                  <Image
                    src="https://www.comfygen.com/lifecomfygen/IMG-20231117-WA0091.webp"
                    alt=""
                    className="object-cover w-full h-full"
                    height={1600}
                    width={1200}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="hidden md:flex flex-1 flex-row gap-2">
                <div className="flex flex-1 flex-col">
                  <Image
                    src="https://www.comfygen.com/lifecomfygen/IMG-20231117-WA0081.webp"
                    alt=""
                    className="object-cover w-full h-full"
                    height={458}
                    width={343}
                  />
                </div>
                <div className="hidden md:flex flex-1 flex-col">
                  <Image
                    src="https://www.comfygen.com/lifecomfygen/IMG-20231117-WA0096.webp"
                    alt=""
                    className="object-cover w-full h-full"
                    height={1040}
                    width={780}
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <Image
                  src="https://www.comfygen.com/lifecomfygen/IMG-20231110-WA0005.webp"
                  alt=""
                  className="w-full h-full object-cover"
                  height={467}
                  width={828}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="flex flex-col justify-center text-center">
            <h2 className="py-4 text-3xl font-bold ">
              Our Team Celebration
            </h2>
            <div className="flex justify-center md:justify-center">
              <div className="w-20 h-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 "></div>
            </div>
          </div>
        </div>
        <section className="x-auto 2xl:w-9/12 xl:w-5/6 w-11/12 mx-auto px-4 py-10 relative">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="w-full hover:scale-105">
              <Image src="https://www.comfygen.com/lifecomfygen/IMG_20231110_145857.webp" alt="life" height="360" width="334" className="w-full" />
            </div>
            <div className="w-full hover:scale-105">
              <Image src="https://www.comfygen.com/lifecomfygen/IMG_20231110_145812.webp" alt="life" height="360" width="334" className="w-full" />
            </div>
            <div className="w-full hover:scale-105">
              <Image src="https://www.comfygen.com/lifecomfygen/IMG_20231110_145757.webp" alt="life" height="360" width="334" className="w-full" />
            </div>
            <div className="w-full hover:scale-105">
              <Image src="https://www.comfygen.com/lifecomfygen/IMG_20231110_145735.webp" alt="life" height="360" width="334" className="w-full" />
            </div>
            <div className="w-full hover:scale-105">
              <Image src="https://www.comfygen.com/lifecomfygen/IMG_20231110_145720.webp" alt="life" height="360" width="334" className="w-full" />
            </div>
            <div className="w-full hover:scale-105">
              <Image src="https://www.comfygen.com/lifecomfygen/IMG_20231110_145700.webp" alt="life" height="360" width="334" className="w-full" />
            </div>
            <div className="w-full hover:scale-105">
              <Image src="https://www.comfygen.com/lifecomfygen/IMG_20231110_145635.webp" alt="life" height="360" width="334" className="w-full" />
            </div>
            <div className="w-full hover:scale-105">
              <Image src="https://www.comfygen.com/lifecomfygen/IMG_20231110_145610.webp" alt="life" height="360" width="334" className="w-full" />
            </div>
            <div className="w-full hover:scale-105">
              <Image src="https://www.comfygen.com/lifecomfygen/IMG_20231110_145610 (1).webp" alt="life" height="360" width="334" className="w-full" />
            </div>
          </div>
        </section>

        <div className="py-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="space-y-5">
            <div >
              <div className="flex flex-col justify-center text-center">
                <h2 className="py-4 text-3xl font-bold ">
                  Anniversary Celebration
                </h2>
                <div className="flex justify-center md:justify-center">
                  <div className="w-20 h-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.gallery}`}>
          <Image src="https://www.comfygen.com/lifecomfygen/IMG20230913182518.webp" alt="life" height="623" width="623" className="w-full object-cover" />
          <Image src="https://www.comfygen.com/lifecomfygen/IMG20230913182733.jpg" alt="life" height="623" width="623" className="w-full object-cover" />
          <Image src="https://www.comfygen.com/lifecomfygen/IMG20230913182715.webp" alt="life" height="623" width="623" className="w-full object-cover" />
          <Image src="https://www.comfygen.com/lifecomfygen/IMG20230913182731.webp" alt="life" height="623" width="623" className="w-full object-cover" />
          <Image src="https://www.comfygen.com/lifecomfygen/IMG20230913182743.webp" alt="life" height="623" width="623" className="w-full object-cover" />
          <Image src="https://www.comfygen.com/lifecomfygen/IMG20230913182759.webp" alt="life" height="623" width="623" className="w-full object-cover" />
          <Image src="https://www.comfygen.com/lifecomfygen/IMG20230913182811.webp" alt="life" height="623" width="623" className="w-full object-cover" />
          <Image src="https://www.comfygen.com/lifecomfygen/IMG20230913182816.webp" alt="life" height="623" width="623" className="w-full object-cover" />
          <Image src="https://www.comfygen.com/lifecomfygen/IMG20230913182836.webp" alt="life" height="623" width="623" className="w-full object-cover" />
        </div>
        <section className="py-6 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          <div className="text-center space-y-4">
            <div className="flex flex-col justify-center text-center">
              <h2 className="py-4 text-3xl font-bold capitalize">
                Awards and recognization
              </h2>
              <div className="flex justify-center md:justify-center">
                <div className="w-20 h-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 "></div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-4">
              {ChooseUs.map((elem) => {
                const { title, img, decs } = elem;
                return (
                  <div className="bg-white shadow-md border space-y-3 text-left rounded-md cursor-pointer hover:scale-105">
                    <div className="flex justify-center">
                      <Image height={96} width={300} src={img} alt="Choose Us" title="Why Choose us" />
                    </div>
                    <div className="p-2">
                      <h3 className="text-lg font-semibold text-center">
                        {title}
                      </h3>
                      <p className="text-[13px] text-gray-700 text-center">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
