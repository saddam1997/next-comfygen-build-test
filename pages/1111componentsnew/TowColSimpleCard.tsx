import { MdOutlineArrowOutward } from "react-icons/md";

const DoctorAppointment = ({ title, description, data=[], backgroundImage }) => {
  return (
    <div
      className="bg-cover bg-no-repeat lg:py-16 py-10 w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="">
        <section className="2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto space-y-4 text-center">
          <div className="flex flex-col justify-center mx-auto ">
            <h2 className="text-[#212121] xl:text-4xl text-3xl font-bold xl:leading-[3rem]">
              {title}
            </h2>
            <p className="text-base text-[#212121] md:text-center text-justify tracking-tight">
              {description}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 xl:gap-14 gap-14 py-10 text-left">
            {data?.map((elem, index) => (
              <div
                key={index}
                className="space-y-2 bg-white border rounded-xl border-[#000]/20 p-10"
              >
                <h2 className="text-2xl font-semibold text-[#212121]">{elem?.title || ""}</h2>
                <p className="text-black text-base">{elem?.desc || ""}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="/contact-us">
              <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                Get Started <MdOutlineArrowOutward />
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DoctorAppointment;
