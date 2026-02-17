import React, { Component } from "react";
import JSON_DATA from "./json/country.json";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactSelect = dynamic(
  () => import("react-select").then((mod) => mod.default),
  { ssr: false }
);


// const ReactSelect = dynamic(() => import('react-select'), {
//   ssr: false,
//   loading: () => (
//     <div className="w-28 h-10 bg-gray-200 animate-pulse rounded" />
//   ),
// });




class ContactFrom extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: "idle",
      fieldsContactUs: {},
      errorsContactUs: {},
      ipInfo: {},
      submitted: false,
      stdCode: "",
      errorMessage: "",
    };
  }
  componentDidMount() {
    this.fetchUserIP();
  }

  inputChange = (e: any) => {
    console.log("e________________________", e.target.value, e.target.name);
    e.preventDefault();
    let { name, value } = e.target;
    if (name === "mobNo") {
      if (!/^[0-9\s]*$/.test(value)) {
        let errorsContactUs = this.state.errorsContactUs;
        errorsContactUs[name] = "Please enter a valid number.";
        this.setState({ errorsContactUs });
        return;
      }
    }

    let fieldsContactUs = this.state.fieldsContactUs;
    let errorsContactUs = this.state.errorsContactUs;
    fieldsContactUs[name] = value;
    errorsContactUs[name] = "";
    this.setState({ fieldsContactUs, errorsContactUs });
  };

  createContactUs = (e: any) => {
    e.preventDefault();
    if (this.handleValidationContactUs()) {
      let data = {
        name: this.state.fieldsContactUs.name,
        email: this.state.fieldsContactUs.email,
        mobNo: this.state.fieldsContactUs.mobNo,
        stdCode: this.state.stdCode,
        subject: "HEADER CONTAACT Form | " + window.location.href,
        msg: this.state.fieldsContactUs.msg,
        ipInfo: this.state.ipInfo,
      };

      let header = new Headers({
        "Content-Type": "application/json",
      });

      const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data),
      };
      this.setState({ submitted: true });

      console.log("datadata  ", data);

      return fetch(
        `https://www.comfygen.com/api/v1/createContactUs1111`,
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => {
          if (data && data.code == 0) {
            this.setState({
              submitted: true,
              successMessage: "Submitted Successfully!",
            });
            setTimeout(() => {
              this.setState({ successMessage: "" });
            }, 5000);
            this.setState({ fieldsContactUs: {} });
            this.setState({ submitted: false });
          } else {
            this.setState({ submitted: false, errorMessage: data.message });
            setTimeout(() => {
              this.setState({ errorMessage: "" });
            }, 5000);
          }
        });
    }
  };

  componentDidUpdate(prevProps, prevState: any) {
    if (
      this.state.successMessage &&
      prevState.successMessage !== this.state.successMessage
    ) {
      window.location.href = "/thankyou";
    }
  }

  handleValidationContactUs = () => {
    event.preventDefault();

    let fieldsContactUs = this.state.fieldsContactUs;
    let errorsContactUs = {};
    let formIsValid = true;

    //name
    if (!fieldsContactUs["name"]) {
      formIsValid = false;
      errorsContactUs["name"] = "Please enter Name!";
    }
    //email
    if (!fieldsContactUs["email"]) {
      formIsValid = false;
      errorsContactUs["email"] = "Please enter Email!";
    }

    //stdCode
    if (!this.state.stdCode) {
      formIsValid = false;
      errorsContactUs["stdCode"] = "Please select Std Code!";
    }

    if (
      typeof fieldsContactUs["email"] !== "undefined" &&
      fieldsContactUs["email"] !== ""
    ) {
      let lastAtPos = fieldsContactUs["email"].lastIndexOf("@");
      let lastDotPos = fieldsContactUs["email"].lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fieldsContactUs["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fieldsContactUs["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errorsContactUs["email"] = "Enter valid email!";
      }
    }

    if (
      !fieldsContactUs["mobNo"] ||
      !/^\d{7,15}$/.test(fieldsContactUs["mobNo"]) // allow 7–15 digits
    ) {
      formIsValid = false;
      errorsContactUs["mobNo"] = "Please enter a valid Mobile No. (7 to 15 digits)!";
    }

    if (!fieldsContactUs["msg"]) {
      formIsValid = false;
      errorsContactUs["msg"] = "Please select Message!";
    }

    this.setState({ errorsContactUs: errorsContactUs });
    return formIsValid;
  };
  onClickHandler = () => {
    this.setState({ isLoading: "loading" });
    setTimeout(() => {
      this.setState({ isLoading: "success" });
    }, 2000);
  };

  handleCountryChange = (event: any) => {
    let errorsContactUs = {};
    if (event.target.value != "SELECTED") {
      this.setState({ stdCode: event.target.value });
      errorsContactUs["stdCode"] = "";
      this.setState({ errorsContactUs: errorsContactUs });
    } else {
      errorsContactUs["stdCode"] = "Please select Std Code!";
      this.setState({ errorsContactUs: errorsContactUs });
    }
  };

  fetchUserIP = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=55503f8d72626d"
      );
      const data = await response.json();
      const userCountryCode = data.country;
      this.setState({ ipInfo: data });
      const selectedCountry = JSON_DATA.Country?.find(
        (ele) => ele.code === userCountryCode
      );

      if (selectedCountry) {
        this.setState({ stdCode: selectedCountry.stdCode });
      }
    } catch (error) {
      console.error("Error fetching IP info:", error);
    }
  };

  handleRecaptchaChange = (token) => {
    this.setState({ recaptchaToken: token });
  };
  render() {
    const { submitted } = this.state;
    return (
      <div className="h-full">
        <form
          onSubmit={this.handleValidationContactUs}
          className="bg-white rounded-xl  lg:px-8 md:px-6 p-2  px-4 space-y-4 text-left w-full"
        >
          <div className=" ">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-base text-black text-start font-semibold">
                Get In Touch
              </h2>
              <p className="md:text-base text-xs">
                Comfygen is a result-oriented IT Service Provider that builds
                secured
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  ">
            <div className="space-y-2">
              <label htmlFor="name" className="text-base">
                Full Name
              </label>
              <input
                type="text"
                onChange={this.inputChange}
                name="name"
                value={
                  this.state.fieldsContactUs["name"]
                    ? this.state.fieldsContactUs["name"]
                    : ""
                }
                placeholder="Name"
                className={
                  this.state.errorsContactUs["name"]
                    ? "focus:outline-none border border-red-500  p-2 w-full focus:ring-1 rounded font-light focus:font-normal"
                    : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light "
                }
              />
              {this.state.errorsContactUs["name"] ? (
                <div className="invalid-feedback  text-red-500 text-sm font-light">
                  {this.state.errorsContactUs["name"]}
                </div>
              ) : null}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-base">
                Enter Email
              </label>
              <input
                type="text"
                onChange={this.inputChange}
                name="email"
                value={
                  this.state.fieldsContactUs["email"]
                    ? this.state.fieldsContactUs["email"]
                    : ""
                }
                placeholder={
                  this.state.errorsContactUs["email"] ? "Enter Email" : "Email"
                }
                className={
                  this.state.errorsContactUs["email"]
                    ? "focus:outline-none bg-[#F7F7F7] border border-red-500  p-2 w-full focus:ring-1 rounded font-light focus:font-normal"
                    : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light"
                }
              />
              {this.state.errorsContactUs["email"] ? (
                <div className="invalid-feedback  text-red-500 text-sm font-light">
                  {this.state.errorsContactUs["email"]}
                </div>
              ) : null}
            </div>


            <div className="space-y-2">
              <label htmlFor="CountryCode">Enter Number</label>
              <div className="flex items-center border w-full rounded-lg font-light focus:outline-none bg-[#F7F7F7]">
                {/* Country Code Dropdown */}


                
                <ReactSelect
                  inputId="mobNo"
                  aria-label="Country Code"
                  options={JSON_DATA.Country?.map((ele) => ({
                    name: ele.name,
                    label: `${ele.flag} ${ele.stdCode}`,
                    value: ele.stdCode,
                  }))}
                  value={
                    this.state.stdCode
                      ? JSON_DATA.Country?.map((ele) => ({
                        name: ele.name,
                        label: `${ele.flag} ${ele.stdCode}`,
                        value: ele.stdCode,
                      })).find((ele) => ele.value === this.state.stdCode)
                      : null
                  }
                  onChange={(selectedOption: any) => {
                    this.setState({ stdCode: selectedOption.value });
                    // clear error if any
                    this.setState((prevState: any) => ({
                      errorsContactUs: { ...prevState.errorsContactUs, stdCode: "" },
                    }));
                  }}
                  className="text-xs w-32 bg-transparent "
                  getOptionValue={(option: any) => option.name}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      border: "none",
                      backgroundColor: "transparent",
                      boxShadow: state.isFocused ? "none" : base.boxShadow,
                      cursor: "pointer",
                      display: "flex"
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "gray",
                    }),
                  }}
                />

                {/* Mobile Number Input */}
                <input
                  type="text"
                  name="mobNo"
                  id="mobNo"
                  value={this.state.fieldsContactUs["mobNo"] || ""}
                  onChange={this.inputChange}
                  placeholder="Enter Whatsapp number"
                  className="p-2 w-full focus:outline-none bg-transparent border-l border-[#000]/10"
                />
              </div>
              {this.state.errorsContactUs["stdCode"] && (
                <div className="text-red-500 text-sm">{this.state.errorsContactUs["stdCode"]}</div>
              )}
              {this.state.errorsContactUs["mobNo"] && (
                <div className="text-red-500 text-sm">{this.state.errorsContactUs["mobNo"]}</div>
              )}
            </div>

            <div className="space-y-2 ">
              <label htmlFor="subject" className="text-base">Subject</label>
              <input
                onChange={this.inputChange}
                name="subject"
                id="subject"
                value={
                  this.state.fieldsContactUs["subject"]
                    ? this.state.fieldsContactUs["subject"]
                    : ""
                }
                placeholder="Subject "
                className={
                  this.state.errorsContactUs["subject"]
                    ? "focus:outline-none focus:ring-1 w-full border border-red-500 p-2 rounded resize-none font-light focus:font-normal"
                    : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light"
                }
              ></input>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="msg" className="text-lg">Message</label>
              <textarea
                onChange={this.inputChange}
                name="msg"
                id="msg"
                value={
                  this.state.fieldsContactUs["msg"]
                    ? this.state.fieldsContactUs["msg"]
                    : ""
                }
                cols={16}
                rows={4}
                placeholder="Enter Message "
                className={
                  this.state.errorsContactUs["msg"]
                    ? "focus:outline-none focus:ring-1 w-full border border-red-500 p-2 rounded resize-none font-light focus:font-normal"
                    : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light"
                }
              ></textarea>
            </div>
          </div>
          {this.state.errorMessage != "" ? (
            <div className="invalid-feedback  text-red-500 text-sm font-light">
              {this.state.errorMessage}
            </div>
          ) : null}

          <div className="flex justify-start ">
            {submitted ? (
              <button
                type="button"
                className=" text-white bg-green-600 px-8 py-3 text-lg rounded-full justify-center items-center space-x-1 w-fit overflow-hidden relative inline-flex group   cursor-pointer"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-72 opacity-10 origin-center"></span>
                Summited Succesfully !
              </button>
            ) : (
              <button
                type="button"
                onClick={this.createContactUs}
                className=" text-white bg-[#5556D1] lg:px-8 px-2 py-2.5 text-lg gap-2  rounded-full justify-center items-center space-x-1  overflow-hidden relative inline-flex group cursor-pointer font-semibold"
              >
                Send Message
                <Image
                  src="https://www.comfygen.com/image/button-arrow.svg"
                  alt=""
                  height={24}
                  width={24}
                  loading="lazy"
                />
              </button>
            )}
          </div>

          {/* {
            this.state.successMessage && (
              <>
                {window.location.href = "/thankyou"}
              </>
            )
          }
          {
            this.state.errorMessage && (
              <div className="popup error">{this.state.errorMessage}</div>
            )
          } */}
        </form>
      </div>
    );
  }
}
export default ContactFrom;
