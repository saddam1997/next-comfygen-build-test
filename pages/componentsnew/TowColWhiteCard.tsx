import { MdOutlineArrowOutward } from "react-icons/md";

const DoctorAppointmentSection = ({
  title,
  description="",
  Data=[],
  backgroundImage,
  enquireLink,
}) => {
  return (
    <section
      className="bg-cover bg-no-repeat w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-[#5556D1]/20">
        <div className="space-y-8 lg:py-16 py-8 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto">
          <div className="flex flex-col justify-center items-center mx-auto">
            <h2 className="text-3xl lg:text-4xl md:text-center text-left font-bold leading-[2rem] lg:leading-[3rem] text-[#212121]">
              {title}
            </h2>
            <p className="text-base text-[#212121] text-center">{description}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1">
            {Data?.map((doctor, index) => (
              <div
                key={index}
                className="p-8 bg-[#fff] border transition-all duration-700 group rounded-lg"
              >
                <h3 className="text-[#212121] text-2xl font-semibold">{doctor?.title || ""}</h3>
                <p className="text-[#212121] text-base mt-2">{doctor?.description || ""}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-5">
            <a href={enquireLink} className="mt-5">
              <button className="text-[#5556D1] hover:bg-[#5556D1] hover:text-[#fff] border border-[#5556D1] px-10 py-2 text-lg font-semibold rounded-full capitalize flex items-center gap-1">
                ENQUIRE NOW <MdOutlineArrowOutward />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorAppointmentSection;
