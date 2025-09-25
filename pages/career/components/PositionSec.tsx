import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import JSON_DATA from "../json/career.json";
import { TbArrowUpRight } from "react-icons/tb";
const techData = {
  All_Positions: [
    {
      head: "Node.js Developer",
      name: "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your co-workers into the application. Therefore, a basic understanding of front-end technologies is necessary as well.",
      num: "1",
    },
    {
      head: "React.js Developer",
      name: "We are seeking a dedicated React.js front-end developer to join our growing company. You will work as part of a team to design and develop high-quality software solutions for web applications and mobile apps using React.As a React.js developer, you will implement new features and maintain existing code using React and other standard tools in the React ecosystem, such as Node.js and Yarn. Your duties will include designing software solutions to meet project requirements, maintaining and refactoring existing code, writing tests, and fixing bugs.",
      num: "1",
    },
    {
      head: "Mern Stack Developer",
      name: "We are seeking a skilled and experienced MERN (MongoDB, Express.js, React, Node.js) Stack Developer to join our dynamic team. As a MERN Stack Developer, you will be responsible for designing, implementing, and maintaining full-stack applications. You will collaborate with cross-functional teams to deliver high-quality software solutions.",
      num: "1",
    },
    {
      head: "React Native Developer",
      name: "We are looking for a React Native developer interested in building performant mobile apps on both the iOS and Android platforms. You will be responsible for architecting and building these applications, as well as coordinating with the teams responsible for other layers of the product infrastructure. Building a product is a highly collaborative effort, and as such, a strong team player with a commitment to perfection is required.",
      num: "1",
    },
    {
      head: "UI/UX Developer (with Tailwind CSS)",
      name: "We are seeking a user experience designer to join our design team. Your primary role will be to research and design usable interfaces, perform usability testing, and create prototypes to validate design concepts. The ideal candidate will use this information to help us create the best user experience possible for our website and mobile applications.",
      num: "1",
    },
    {
      head: "QA Tester",
      name: "We are seeking a dedicated software QA lead to join our growing company.You will collaborate with other technical staff to create effective and reliable software updates and hotfixes to support our user base. As a software QA lead, you can put your passion for QA testing to work and help optimize our users’ experiences.",
      num: "1",
    },
    {
      head: "Business Analyst",
      name: "The Business Analyst will collaborate with various departments and stakeholders to gather, document, and analyze business requirements, processes, and workflows. They will translate these requirements into functional specifications for technology teams and work closely with project managers, developers, and testers to ensure successful project delivery. The Business Analyst will also be involved in identifying areas for process improvement and recommending solutions to enhance operational efficiency and effectiveness.",
      num: "1",
    },
    {
      head: "Content Writer",
      name: "We are seeking a dynamic Content Writer with 1 year of experience to join our team. The candidate will be responsible for creating engaging, high-quality content across various digital platforms. This role requires a blend of creativity, research skills, and a strong understanding of SEO principles to produce content that drives engagement and aligns with our brand voice.",
      num: "1",
    },
  ],
  Full_Stack_Developer: [
    {
      head: "Node.js Developer",
      name: "We are looking for a Node.js Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your co-workers into the application. Therefore, a basic understanding of front-end technologies is necessary as well.",
      num: "1",
    },
    {
      head: "Mern Stack Developer",
      name: "We are seeking a skilled and experienced MERN (MongoDB, Express.js, React, Node.js) Stack Developer to join our dynamic team. As a MERN Stack Developer, you will be responsible for designing, implementing, and maintaining full-stack applications. You will collaborate with cross-functional teams to deliver high-quality software solutions.",
      num: "1",
    },
  ],
  Frontend_Development: [
    {
      head: "React.js Developer",
      name: "We are seeking a dedicated React.js front-end developer to join our growing company. You will work as part of a team to design and develop high-quality software solutions for web applications and mobile apps using React.As a React.js developer, you will implement new features and maintain existing code using React and other standard tools in the React ecosystem, such as Node.js and Yarn. Your duties will include designing software solutions to meet project requirements, maintaining and refactoring existing code, writing tests, and fixing bugs.",
      num: "1",
    },

    {
      head: "UI/UX Developer (with Tailwind CSS)",
      name: "We are seeking a user experience designer to join our design team. Your primary role will be to research and design usable interfaces, perform usability testing, and create prototypes to validate design concepts. The ideal candidate will use this information to help us create the best user experience possible for our website and mobile applications.",
      num: "1",
    },
  ],
  Mobile_Development: [
    {
      head: "React Native Developer",
      name: "We are looking for a React Native developer interested in building performant mobile apps on both the iOS and Android platforms. You will be responsible for architecting and building these applications, as well as coordinating with the teams responsible for other layers of the product infrastructure. Building a product is a highly collaborative effort, and as such, a strong team player with a commitment to perfection is required.",
      num: "1",
    },
  ],
  Quality_Assurance: [
    {
      head: "QA Tester",
      name: "We are seeking a dedicated software QA lead to join our growing company.You will collaborate with other technical staff to create effective and reliable software updates and hotfixes to support our user base. As a software QA lead, you can put your passion for QA testing to work and help optimize our users’ experiences.",
      num: "1",
    },
  ],
  Business_Analysis: [
    {
      head: "Business Analyst",
      name: "The Business Analyst will collaborate with various departments and stakeholders to gather, document, and analyze business requirements, processes, and workflows. They will translate these requirements into functional specifications for technology teams and work closely with project managers, developers, and testers to ensure successful project delivery. The Business Analyst will also be involved in identifying areas for process improvement and recommending solutions to enhance operational efficiency and effectiveness.",
      num: "1",
    },
  ],
  Content_and_Marketing: [
    {
      head: "Content Writer",
      name: "We are seeking a dynamic Content Writer with 1 year of experience to join our team. The candidate will be responsible for creating engaging, high-quality content across various digital platforms. This role requires a blend of creativity, research skills, and a strong understanding of SEO principles to produce content that drives engagement and aligns with our brand voice.",
      num: "1",
    },
    {
      head: "SEO Executive",
      name: "As an SEO Executive, you will be responsible for maintaining oversight of client websites, improving traffic, and enhancing brand visibility. Your primary focus will be on off-page SEO activities, specifically link building strategies to improve website authority. You will work closely with the marketing team to achieve SEO objectives and measure the success of SEO and ROI. Familiarity with WordPress is essential, as you will be responsible for assisting in the maintenance of the website's architecture to ensure user-friendliness.",
      num: "1",
    },
  ],
};

export default function Tech() {
  const [tech, setTech] = useState(0);
  const techKeys = Object.keys(techData);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenData, setModalOpenData] = useState<any>({});

  const getDisplayKey = (key) => {
    switch (key) {
      case "AI_ML":
        return "AI / ML";
      case "Data_Analytics":
        return "Data Analytics";
      case "AR_VR":
        return "AR / VR";
      case "IoMT":
        return "IoMT";
      case "Computer_Vision":
        return "Computer Vision";
      case "Business_Intelligence":
        return "Business Intelligence";
      case "GenAI":
        return "Generative AI";
      case "CloudComputing":
        return "Cloud Computing";
      default:
        return key.replace(/_/g, " ");
    }
  };

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
    <section className="lg:py-16 py-10 bg-[#F7F9FC]">
      <div className="mx-auto 2xl:w-10/12 xl:w-5/6 w-11/12 ">
        <div className="text-center">
          <h2 className=" text-4xl font-semibold leading-[3rem] text-[#090808] ">
            We have 17 open positions now!
          </h2>
        </div>
        <div className="grid lg:grid-cols-5 lg:gap-20 gap-6 mt-10  ">
          <div className="col-span-2">
            <div className=" lg:space-y-5 lg:block flex gap-2 items-center lg:max-w-full max-w-[280px] overflow-hidden overflow-x-auto   ">
              {Object.keys(techData).map((key, index) => (
                <div
                  key={index}
                  onClick={() => setTech(index)}
                  className={
                    tech === index
                      ? "bg-white lg:border-l-8  lg:rounded-none rounded-full lg:w-full min-w-[244px] lg:text-start text-center lg:inline-block border-[#5556D1] drop-shadow-sm text-[#090808] md:px-10 px-7 py-3 lg:text-xl text-sm font-normal capitalize cursor-pointer"
                      : " text-[#253A67] lg:inline-block lg:border-none  lg:rounded-none rounded-full lg:w-full min-w-[244px] lg:text-start text-center md:px-10  px-7  py-3 lg:text-lg text-sm font-normal capitalize cursor-pointer"
                  }
                >
                  {getDisplayKey(key)}
                </div>
              ))}

              <div className="space-y-5 lg:block hidden">
                <p className="text-[#53648B] text-lg font-normal">
                  We are always seeking talented people. In case you cannot find
                  your desired position here, please send us your LinkedIn
                  profile and give us your contact information. We will be in
                  touch.{" "}
                </p>
                <button className="md:text-base text-sm font-medium text-[#5556D1]  border border-[#5556D1] rounded-full px-8 py-2.5 flex items-center gap-1 transition duration-300">
                  Know More in Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="w-full relative capitalize space-y-10">
              {techData[Object.keys(techData)[tech]].map((elem, index) => (
                <div key={elem.num}>
                  <div className="flex items-center bg-white lg:p-8 p-6 border border-[#5556D1]/10">
                    <div className="space-y-4 ">
                      <h3 className="md:text-2xl text-xl font-semibold   text-[#090808] ">
                        {elem.head}
                      </h3>
                      <div className="flex flex-wrap items-center justify-start gap-4">
                        <span className="px-4 py-1.5 text-sm font-normal text-[#090808] border border-[#090808] rounded-full  ">
                          Work From Office
                        </span>
                        <span className="px-4 py-1.5 text-sm font-normal rounded-full text-[#090808] border border-[#090808]">
                          Full Time
                        </span>
                      </div>
                      <p className="font-normal md:text-base text-sm text-black ">
                        {" "}
                        {elem.name}{" "}
                      </p>
                      <div className="flex justify-end mt-4">
                        <button
                          onClick={() => {
                            setModalOpen(!modalOpen);
                            setModalOpenData(elem);
                          }}
                          className="text-base font-medium text-[#fff]  bg-[#5556D1] rounded-full px-6 py-2.5 flex items-center gap-1 transition duration-300"
                        >
                          Apply Now
                          <Image
                            alt="COMFYGEN LIMITED Logo"
                            src="https://www.comfygen.com/image/apply-form-icon.svg"
                            height={24}
                            width={23}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/70 px-4 z-50">
          <div className="flex justify-center bg-white  rounded-xl shadow-lg  mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 overflow-hidden">
            <div className="w-[40%] hidden   bg-no-repeat bg-cover lg:flex rounded-tl-xl rounded-bl-xl  items-end p-8 bg-[url('https://www.comfygen.com/image/apply-form-img.webp')]">
              <div className="space-y-3 ">
                <div>
                  <Image
                    alt="COMFYGEN LIMITED Logo"
                    src="https://www.comfygen.com/image/comfygen-form-logo.svg"
                    height={40}
                    width={186}
                  />
                  <p className="text-white text-base">
                    Comfygen is a result-oriented IT Service Provider that
                    builds secured and scaled apps to fulfill the needs of every
                    business in various industries
                  </p>
                </div>
                {/* <div className="flex gap-3 items-center">
                  <a target="_blank" href="https://www.facebook.com/comfygen">
                    <Image
                      alt="COMFYGEN LIMITED"
                      src="https://www.comfygen.com/image/fb-form-icon.svg"
                      height={40}
                      width={40}
                    />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/company/comfygen-private-limited">
                    <Image
                      alt="COMFYGEN LIMITED"
                      src="https://www.comfygen.com/image/linkedin-form-icon.svg"
                      height={40}
                      width={40}
                    />
                  </a>
                  <a target="_blank" href="https://join.skype.com/invite/njrEJpEDtSRy">
                    <Image
                      alt="COMFYGEN LIMITED"
                      src="https://www.comfygen.com/image/skype-form-icon.svg"
                      height={40}
                      width={40}
                    />
                  </a>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=919587867258">
                    <Image
                      alt="COMFYGEN LIMITED"
                      src="https://www.comfygen.com/image/whatsapp-form-icon.svg"
                      height={40}
                      width={40}
                    />
                  </a>
                  <a target="_blank" href="https://twitter.com/comfygentech">
                    <Image
                      alt="COMFYGEN LIMITED"
                      src="https://www.comfygen.com/image/x-form-icon.svg"
                      height={40}
                      width={40}
                    />
                  </a>
                </div> */}
                <div className="flex gap-3 items-center">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/comfygen"
                    aria-label="Visit Comfygen Facebook Page"
                  >
                    <Image
                      alt="Facebook Icon"
                      src="https://www.comfygen.com/image/fb-form-icon.svg"
                      height={40}
                      width={40}
                    />
                  </a>

                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/comfygen-private-limited"
                    aria-label="Visit Comfygen LinkedIn Page"
                  >
                    <Image
                      alt="LinkedIn Icon"
                      src="https://www.comfygen.com/image/linkedin-form-icon.svg"
                      height={40}
                      width={40}
                    />
                  </a>


                  <a
                    target="_blank"
                    href="https://teams.live.com/l/invite/FEA1DE8RvRmi0bg0wM"
                    aria-label="Join Comfygen on Teams"
                  >
                    <Image
                      alt="Teams Icon"
                      src="https://www.comfygen.com/image/join-comfygen-on-teams.svg"
                      height={40}
                      width={40}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=919587867258"
                    aria-label="Chat with Comfygen on WhatsApp"
                  >
                    <Image
                      alt="WhatsApp Icon"
                      src="https://www.comfygen.com/image/whatsapp-form-icon.svg"
                      height={40}
                      width={40}
                    />
                  </a>

                  <a
                    target="_blank"
                    href="https://twitter.com/comfygentech"
                    aria-label="Follow Comfygen on Twitter"
                  >
                    <Image
                      alt="Twitter Icon"
                      src="https://www.comfygen.com/image/x-form-icon.svg"
                      height={40}
                      width={40}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[60%] w-full ">
              <div>
                {/* <ContactFrom /> */}
                <form
                  onSubmit={handleSubmit}
                  className="w-full text-left bg-white  rounded-xl shadow-2xl"
                >
                  <div className="flex justify-between items-start lg:p-8 p-4">
                    <h3 className="text-2xl font-semibold text-[#282828]">
                      Fill the form
                    </h3>
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex justify-center items-center">
                      <MdOutlineClose
                        className="cursor-pointer text-[1.3rem]"
                        onClick={() => setModalOpen(!modalOpen)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 lg:p-8 p-4 md:grid-cols-2  lg:h-fit h-[600px]  overflow-hidden overflow-y-auto">
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
                        rows={5}
                        placeholder="Your Message "
                        required
                        className="focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="lg:px-8  p-4">
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
        </div>
      )}
    </section>
  );
}
