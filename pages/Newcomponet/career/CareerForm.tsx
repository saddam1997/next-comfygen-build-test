
import Image from "next/image";
import { useEffect, useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import JSON_DATA from "../comman/json/country.json";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [states, setStates] = useState("");
  const [jobType, setJobType] = useState<any>();
  const [city, setCity] = useState("");
  const [relocate, setRelocate] = useState("");
  const [crntLocation, setCrntLocation] = useState("");
  const [stdCode, setStdCode] = useState("");
  const [msg, setMsg] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    const dataData = async () => {
      const data = {
        name: name,
        email: email,
        mobNo: mobNo,
        jobType: jobType,
        msg: msg,
        states: states,
        city: city,
        stdCode: stdCode,
        crntLocation: crntLocation,
        relocate: "YES",
      };
      console.log("datad ", data);
      const response = await fetch(process.env.URL + "/api/v1/createCareer ", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("datadatada ", data);
      return response.json();
    };
    setShowThankYou(true);
    dataData().then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }
  const [showThankYou, setShowThankYou] = useState(false);
  const [apiData, setApiData] = useState("");
  const [apiDataJobType, setApiDataJobType] = useState("");
  async function CallAllAPIfunction() {
    const apiUrl1 = "https://www.comfygen.com/api/v1/getAllCategory";
    const apiUrl2 = "https://www.comfygen.com/api/v1/getJobCategoryList";

    const data = {
      keyWord: "",
      pageNo: 1,
      size: 10,
    };

    const header = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body:JSON.stringify(data)
    };

    try {
      const response1 = await fetch(apiUrl1);
      const data1 = await response1.json();
      setApiData(data1);

      const response2 = await fetch(apiUrl2, header);
      const data2 = await response2.json();
      setApiDataJobType(data2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    CallAllAPIfunction();
  }, []);

  const [errorsContactUs, setErrorsContactUs] = useState({});

  const handleCountryChange = (event) => {
    let errors = {};
    if (event.target.value !== "SELECTED") {
      setStdCode(event.target.value);
      errors["stdCode"] = "";
    } else {
      errors["stdCode"] = "Please select Std Code!";
    }
    setErrorsContactUs(errors);
  };
  return (
    <section>
      <div className="bg-cover relative bg-gradient-to-r from-[#272868] to-[#5556D1]">
        <div className=" lg:py-16 py-10 relative z-40  mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12">
          <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-start">
            <div>
              <h2 className="lg:text-4xl text-3xl text-[#fff] text-start font-semibold">
                Contact us anytime for quick assistance
              </h2>
              <div className="space-y-5 mt-8">
                <a
                  href="tel:9024149179"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src="https://www.comfygen.com/image/call-form-icon.svg"
                    alt=""
                    height={56}
                    width={55}
                  />
                  <div>
                    <span className="text-white text-base">
                      Phone Number (HR)
                    </span>
                    <p className="text-white text-lg font-semibold">
                      +91 9024149179
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:hr@comfygen.com"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src="https://www.comfygen.com/image/mail-form-icon.svg"
                    alt=""
                    height={56}
                    width={55}
                  />
                  <div>
                    <span className="text-white text-base">Email Address</span>
                    <p className="text-white text-lg font-semibold">
                      hr@comfygen.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.comfygen.com"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src="https://www.comfygen.com/image/site-form-icon.svg"
                    alt="site-form"
                    height={56}
                    width={55}
                  />
                  <div>
                    <span className="text-white text-base">Site Address</span>
                    <p className="text-white text-lg font-semibold">
                      www.comfygen.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6">
                <h2 className="text-white font-semibold lg:text-xl md:text-lg text-base">
                  Social Links
                </h2>
                {/* <div className=" flex justify-start gap-4 mt-2">
                  <a target="_blank" href="https://www.facebook.com/comfygen" className="flex items-center gap-3 cursor-pointer" >
                    <Image
                      src="https://www.comfygen.com/image/facebook-form-icon.svg"
                      alt=""
                      height={51}
                      width={50}
                    />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/comfygen_/?hl=en" className="flex items-center gap-3 cursor-pointer" >
                    <Image
                      src="https://www.comfygen.com/image/insta-form-icon.svg"
                      alt=""
                      height={51}
                      width={50}
                    />
                  </a>
                  <a target="_blank" href="https://twitter.com/comfygentech" className="flex items-center gap-3 cursor-pointer" >
                    <Image
                      src="https://www.comfygen.com/image/x-form-icon-img.svg"
                      alt=""
                      height={51}
                      width={50}
                    />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/company/comfygen-private-limited" className="flex items-center gap-3 cursor-pointer" >
                    <Image
                      src="https://www.comfygen.com/image/linkedin-form-icon-img.svg"
                      alt=""
                      height={51}
                      width={50}
                    />
                  </a>
                </div> */}

                <div className="flex justify-start gap-4 mt-2">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/comfygen"
                    className="flex items-center gap-3 cursor-pointer"
                    aria-label="Visit our Facebook Page"
                  >
                    <Image
                      src="https://www.comfygen.com/image/facebook-form-icon.svg"
                      alt="Facebook Icon"
                      height={51}
                      width={50}
                    />
                  </a>

                  <a
                    target="_blank"
                    href="https://www.instagram.com/comfygen_/?hl=en"
                    className="flex items-center gap-3 cursor-pointer"
                    aria-label="Visit our Instagram Profile"
                  >
                    <Image
                      src="https://www.comfygen.com/image/insta-form-icon.svg"
                      alt="Instagram Icon"
                      height={51}
                      width={50}
                    />
                  </a>

                  <a
                    target="_blank"
                    href="https://twitter.com/comfygentech"
                    className="flex items-center gap-3 cursor-pointer"
                    aria-label="Visit our Twitter Profile"
                  >
                    <Image
                      src="https://www.comfygen.com/image/x-form-icon-img.svg"
                      alt="Twitter Icon"
                      height={51}
                      width={50}
                    />
                  </a>

                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/comfygen-private-limited"
                    className="flex items-center gap-3 cursor-pointer"
                    aria-label="Visit our LinkedIn Page"
                  >
                    <Image
                      src="https://www.comfygen.com/image/linkedin-form-icon-img.svg"
                      alt="LinkedIn Icon"
                      height={51}
                      width={50}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              {/* <ContactFrom /> */}
              <div>
                {/* <ContactFrom /> */}
                <form
                  onSubmit={handleSubmit}
                  className="w-full text-left bg-white  rounded-xl shadow-2xl lg:py-10 space-y-4"
                >
                  <div className="flex justify-between items-start lg:px-8 px-4">
                    <h3 className="text-2xl font-semibold text-[#282828]">
                      Fill the form
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4 lg:px-8 px-4 md:grid-cols-2   overflow-hidden overflow-y-auto">
                    <div className="space-y-2">
                      <label htmlFor="name" className="md:text-base text-sm">
                        {" "}
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="First name*"
                        className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light "
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="name" className="md:text-base text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email*"
                        className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="Phone Number"
                        className="md:text-base text-sm"
                      >
                        Phone Number
                      </label>
                      <div className="flex">
                        <select
                          id="stdCode"
                          required
                          name="stdCode"
                          value={stdCode}
                          onChange={handleCountryChange}
                          className="focus:outline-none bg-[#F7F7F7] p-2 rounded-l font-light focus:font-normal w-28"
                        >
                          <option value="SELECT" selected>
                            Select
                          </option>
                          {JSON_DATA.Country.map((country) => (
                            <option
                              key={country.stdCode}
                              value={country.stdCode}
                            >
                              {country.stdCode}
                            </option>
                          ))}
                        </select>
                        <input
                          type="text"
                          onChange={(e) => setMobNo(e.target.value)}
                          name="mobNo"
                          required
                          value={mobNo}
                          placeholder="Enter mobile number"
                          className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light "
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="city" className="md:text-base text-sm">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="city *"
                        className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light "
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="state" className="md:text-base text-sm">
                        State
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="states *"
                        className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light "
                        value={states}
                        onChange={(e) => setStates(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="crntLocation"
                        className="md:text-base text-sm"
                      >
                        Current Location
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Current Location *"
                        className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light "
                        value={crntLocation}
                        onChange={(e) => setCrntLocation(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="jobType" className="md:text-base text-sm">
                        Role
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={jobType}
                        className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light "
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="relocate"
                        className="md:text-base text-sm"
                      >
                        Relocated
                      </label>
                      <select
                        id="relocate"
                        name="relocate"
                        value={relocate}
                        onChange={(e) => setRelocate(e.target.value)}
                        className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light "
                      >
                        <option value="YES">Yes</option>
                        <option value="NO">No</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label
                        htmlFor="Your Message"
                        className="md:text-base text-sm"
                      >
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Your Message"
                        required
                        className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="lg:px-8  pb-4">
                    <button
                      onSubmit={handleSubmit}
                      type="submit"
                      className=" text-white bg-[#5556D1] px-8 py-2.5 lg:text-lg text-base gap-2  rounded-full justify-center items-center  overflow-hidden relative inline-flex group cursor-pointer font-mediun"
                    >
                      <span>Submit</span>
                      <TbArrowUpRight className="text-[1.5rem]" />
                    </button>
                  </div>
                  {showThankYou && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
                      <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                        <p>Your form has been submitted successfully.</p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-14 gap-8 items-start mt-6">
            <div className="bg-[#FFFFFF]/20 py-6 px-6 h-full rounded-xl xl:gap-8 gap-4 grid lg:grid-cols-3 grid-cols-1 items-center ">
              <div>
                <Image
                  src="https://www.comfygen.com/image/india-icon-img.svg"
                  alt="india"
                  height={236}
                  width={270}
                />
              </div>
              <div className="space-y-5 col-span-2">
                <a href="tel:9587867258" className="flex items-start gap-2">
                  <Image
                    src="https://www.comfygen.com/image/call-icon-mapp.svg"
                    alt="call-icon"
                    height={37}
                    width={36}
                  />
                  <div>
                    <span className="text-white lg:text-base text-sm">
                      Phone Number
                    </span>
                    <p className="text-white lg:text-lg text-base font-semibold">
                      +91 9587867258
                    </p>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/ZioMz8iAfPoLJGRz5"
                  className="flex items-start gap-2"
                >
                  <Image
                    src="https://www.comfygen.com/image/location-icon-icon.svg"
                    alt=""
                    height={37}
                    width={36}
                  />
                  <div>
                    <span className="text-white lg:text-base text-sm">
                      Office Location
                    </span>
                    <p className="text-white lg:text-lg text-base font-semibold">
                      A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar,
                      Jaipur, Rajasthan 302006
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-[#FFFFFF]/20 py-6 px-6 h-full rounded-xl xl:gap-8 gap-4 grid lg:grid-cols-3 grid-cols-1 items-center">
              <div>
                <Image
                  src="https://www.comfygen.com/image/canada-location-img.svg"
                  alt=""
                  height={244}
                  width={270}
                />
              </div>
              <div className="space-y-5 lg:col-span-2">
                <a href="tel:579-977-4475" className="flex items-start gap-2">
                  <Image
                    src="https://www.comfygen.com/image/call-icon-mapp.svg"
                    alt="call-icon"
                    height={37}
                    width={36}
                  />
                  <div>
                    <span className="text-white lg:text-base text-sm">
                      Phone Number
                    </span>
                    <p className="text-white lg:text-lg text-base font-semibold">
                      +1 579-977-4475
                    </p>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/zazMknjBpVCo9xe57"
                  className="flex items-start gap-2"
                >
                  <Image
                    src="https://www.comfygen.com/image/location-icon-icon.svg"
                    alt=""
                    height={37}
                    width={36}
                  />
                  <div>
                    <span className="text-white lg:text-base text-sm">
                      Office Location
                    </span>
                    <p className="text-white lg:text-lg text-base font-semibold">
                      40 Tuxedo Ct, Toronto, ON M1G 3S7, Canada
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
