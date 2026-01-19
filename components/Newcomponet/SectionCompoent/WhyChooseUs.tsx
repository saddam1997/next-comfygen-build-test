import Image from "next/image";

const WhyChoose = ({
  title = "",
  description = "",
  mainCardData = {
    imageUrl: "",
    title: "Default Title",
    description: "Default Description",
  },
  gridData = []
}) => (
  <section
    className="bg-cover bg-no-repeat mt-8 lg:py-16 py-10 w-full bg-gradient-to-br from-[#FEEBC8]/30 via-[#C4B5FD]/20 to-[#A5B4FC]/20"

  >
    <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
      <div className="lg:flex space-y-3 items-center justify-between gap-10">
        <div>
          <h2 className="xl:text-4xl text-3xl text-black font-bold">{title}</h2>
          {description && (
            <p
              className="text-base text-black font-normal mt-2 w-full"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=919587867258">
            <button className="text-base w-[225px] font-medium text-white rounded-full px-8 py-3.5 text-center bg-[#5556D1] cursor-pointer transition duration-300 flex items-center">
              Connect to expert
            </button>
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 mt-10">
        {/* <div 
          className="lg:bg-center lg:flex hidden justify-end items-end bg-no-repeat bg-cover bg-left px-6 py-8 rounded-lg"
          style={{ backgroundImage: `url(${mainCardData?.imageUrl})` }}
        >
          <div>
            <span className="xl:text-xl text-xl text-[#fff] font-semibold">{mainCardData.title}</span>
            {mainCardData.description && (
              <p 
                className="text-base font-normal text-white" 
                dangerouslySetInnerHTML={{ __html: mainCardData.description }}
              />
            )}
            <div className="mt-4">
              <a href="/contact-us">
                <button className="text-base border border-white font-medium text-white rounded-full px-8 py-2.5 text-center cursor-pointer transition duration-300 flex items-center hover:bg-white hover:text-black">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </div> */}

        <div className="lg:flex hidden justify-end items-end px-6 py-8 rounded-lg relative overflow-hidden">

          {/* Optimized Image instead of CSS background */}
          <Image
            src={mainCardData?.imageUrl}
            alt={mainCardData?.title || "Why Choose Us"}
            fill
            className="object-cover object-left"
            sizes="(min-width: 1024px) 25vw"
            loading="lazy"
          />

          {/* Content Layer */}
          <div className="relative z-10">
            <span className="xl:text-xl text-xl text-white font-semibold">
              {mainCardData.title}
            </span>

            {mainCardData.description && (
              <p
                className="text-base font-normal text-white"
                dangerouslySetInnerHTML={{ __html: mainCardData.description }}
              />
            )}

            <div className="mt-4">
              <a href="/contact-us">
                <button className="text-base border border-white font-medium text-white rounded-full px-8 py-2.5 hover:bg-white hover:text-black">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </div>


        <div className="col-span-3">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
            {gridData.slice(0, 6).map((item, index) => (
              <div key={index} className="border bg-white border-[#5556D1]/20 lg:p-8 p-4 rounded-lg space-y-2">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.description && (
                    <p
                      className="text-sm font-normal"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChoose;





