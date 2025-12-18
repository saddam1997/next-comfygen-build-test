import React, { Component } from "react";
import JSON_DATA from "./json/country.json";
import Image from 'next/image';
// import 'react-phone-input-2/lib/style.css'
import Select from 'react-select';


class ContactFrom extends Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: "idle",
      fieldsContactUs: {},
      errorsContactUs: {},
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
        // If the input is not a number, you can handle the error
        let errorsContactUs = this.state.errorsContactUs;
        errorsContactUs[name] = "Please enter a valid number.";
        this.setState({ errorsContactUs });
        return; // Stop processing further
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
        // recaptchaToken: this.state.recaptchaToken,
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

      return (
        // fetch(`https://www.comfygen.com/api/v1/createContactUs1111`, requestOptions)
        fetch(
          `https://www.comfygen.com/api/v1/createContactUs1111`,
          requestOptions
        )
          .then((res) => res.json())
          .then((data) => {
            if (data && data.code == 0) {
              // Handle successful submission
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
              // Handle submission failure
              this.setState({ submitted: false, errorMessage: data.message });
              setTimeout(() => {
                this.setState({ errorMessage: "" });
              }, 5000);
            }
          })
      );
    }
  };

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
    //mobNo
    // if (!fieldsContactUs["mobNo"]) {
    //   formIsValid = false;
    //   errorsContactUs["mobNo"] = "Please enter Mobile No.!";
    // }

    if (
      !fieldsContactUs["mobNo"] ||
      !/^\d{10,15}$/.test(fieldsContactUs["mobNo"])
    ) {
      formIsValid = false;
      errorsContactUs["mobNo"] =
        "Please enter a valid 10 to 15 digit Mobile No.!";
    }

    // //subject
    // if (!fieldsContactUs["subject"]) {
    //   formIsValid = false;
    //   errorsContactUs["subject"] = "Please enter Comment!";
    // }
    //msg
    if (!fieldsContactUs["msg"]) {
      formIsValid = false;
      errorsContactUs["msg"] = "Please select Message!";
    }
    // else if ('done') {
    //   this.setState({ submitted: true });
    //   router.push('/thankyou')
    //   setTimeout(() => {
    //     this.setState({ submitted: false });
    //   }, 3000
    //   );
    // }
    console.log(
      "errorsContactUs___________________________errorsContactUs",
      errorsContactUs
    );
    this.setState({ errorsContactUs: errorsContactUs });
    return formIsValid;
  };
  onClickHandler = () => {
    this.setState({ isLoading: "loading" });
    setTimeout(() => {
      // setState('success');
      this.setState({ isLoading: "success" });
    }, 2000);
  };
  // pushHandel = () => {
  //   this.props.window.push('/dashboard');
  // };

  handleCountryChange = (event) => {
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
      const response = await fetch("https://ipinfo.io/json?token=55503f8d72626d");
      const data = await response.json();
      const userCountryCode = data.country;
      
      // Find the country from the JSON data based on the IP info
      const selectedCountry = JSON_DATA.Country?.find((ele) => ele.code === userCountryCode);
      
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
      <div className="">
        <form
          onSubmit={this.handleValidationContactUs}
          className="bg-white rounded-xl  lg:px-8 md:px-6 md:pb-10 py-6 px-4  space-y-8 text-left   w-full"
        >
          <div className=" ">
            <div className="space-y-2">
              <h2 className="xl:text-4xl text-xl text-black text-start font-semibold">
                Get In Touch
              </h2>
              <p className="text-base ">Comfygen is a result-oriented IT Service Provider that builds secured</p>
            </div>

          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  ">
            <div className="space-y-2">
              <label htmlFor="" className="text-base" >Full Name</label>
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
              <label htmlFor="" className="text-base" >Enter Email</label>
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

            {/* <div className="space-y-2">
              <label htmlFor="mobNo" className="text-base">Enter Number</label>
              <PhoneInput
                country="ru"
                enableSearch={true}
                countryCodeEditable={false}
                value={this.state.fieldsContactUs["mobNo"] || ""}
                onChange={(value) => {
                  console.log("fffff", value)
                  this.setState((prevState) => ({
                    fieldsContactUs: { ...prevState.fieldsContactUs, mobNo: value },
                    errorsContactUs: { ...prevState.errorsContactUs, mobNo: "" },
                  }));
                }}
                inputClass={
                  this.state.errorsContactUs["mobNo"]
                    ? "focus:outline-none bg-[#F7F7F7] border border-red-500 p-2 w-full focus:ring-1 rounded font-light focus:font-normal"
                    : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 ring-[#5556D1] focus:bg-[#5556D1]/10 font-medium rounded placeholder:font-light"
                }
              />
              {this.state.errorsContactUs["mobNo"] && (
                <div className="invalid-feedback text-red-500 text-sm font-light">
                  {this.state.errorsContactUs["mobNo"]}
                </div>
              )}
            </div> */}


            <div className="space-y-2">
              <label htmlFor="stdCode">Enter Number</label>
              <div
                className="flex items-center border w-full rounded-lg font-light focus:outline-none bg-[#F7F7F7] focus:font-normal">
                {/* <Select
                  options={JSON_DATA.Country?.map((ele) => ({
                    name: ele.name,
                    label: `${ele?.flag} ${ele?.stdCode}`,
                    value: ele?.stdCode,
                  }))}
                  value={JSON_DATA.Country?.map((ele) => ({
                    name: ele.name,
                    label: `${ele?.flag} ${ele?.stdCode}`,
                    value: ele?.stdCode,
                  })).find((ele) => ele.value === this.state.stdCode)}
                  onChange={(e) => {
                    this.handleCountryChange({ target: { name: "stdCode", value: e.value } })
                  }}
                  className="text-sm"
                  styles={customStyles}
                  getOptionValue={(e) => e.name}

                /> */}


                {/* <Select
                  options={JSON_DATA.Country?.map((ele) => ({
                    name: ele.name,
                    label: `${ele?.flag} ${ele?.stdCode}`,
                    value: ele?.stdCode,
                  }))}
                  value={
                    this.state.stdCode
                      ? JSON_DATA.Country?.map((ele) => ({
                        name: ele.name,
                        label: `${ele?.flag} ${ele?.stdCode}`,
                        value: ele?.stdCode,
                      })).find((ele) => ele.value === this.state.stdCode)
                      : JSON_DATA.Country?.map((ele) => ({
                        name: ele.name,
                        label: `${ele?.flag} ${ele?.stdCode}`,
                        value: ele?.stdCode,
                      }))[0]
                  }
                  onChange={(e) => {
                    this.handleCountryChange({ target: { name: "stdCode", value: e.value } });
                  }}
                  className="text-sm w-40 border-none focus:outline-none bg-transparent"
                  getOptionValue={(e) => e.name}
                  components={{
                    DropdownIndicator: () => null, 
                    IndicatorSeparator: () => null,
                  }}
                /> */}



                {/* ........ Final STD Number ..  */}

                <Select
                  options={JSON_DATA.Country?.map((ele) => ({
                    name: ele.name,
                    label: `${ele?.flag} ${ele?.stdCode}`,
                    value: ele?.stdCode,
                  }))}
                  value={
                    this.state.stdCode
                      ? JSON_DATA.Country?.map((ele) => ({
                        name: ele.name,
                        label: `${ele?.flag} ${ele?.stdCode}`,
                        value: ele?.stdCode,
                      })).find((ele) => ele.value === this.state.stdCode)
                      : JSON_DATA.Country?.map((ele) => ({
                        name: ele.name,
                        label: `${ele?.flag} ${ele?.stdCode}`,
                        value: ele?.stdCode,
                      }))[0]
                  }
                  onChange={(e) => {
                    this.handleCountryChange({ target: { name: "stdCode", value: e.value } });
                  }}
                  className="text-sm w-28 bg-transparent"
                  getOptionValue={(e) => e.name}
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
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "gray",
                    }),
                  }}
                />

                <input
                  type="text"
                  onChange={this.inputChange}
                  name="mobNo"
                  value={
                    this.state.fieldsContactUs["mobNo"]
                      ? this.state.fieldsContactUs["mobNo"]
                      : ""
                  }
                  placeholder="Enter Whatsapp number"
                  className="p-2 w-full focus:outline-none bg-transparent focus:font-normal border-l border-[#000]/10"
                />
              </div>
            </div>


            {/* <div className="space-y-2 ">
              <label htmlFor="stdCode">Enter Number</label>
              <div
                className={`
            ${this.state.errorsContactUs["mobNo"]
                    ? "focus:outline-none bg-[#F7F7F7] border border-red-500 w-full focus:ring-1 rounded font-light focus:font-normal"
                    : "focus:outline-none bg-[#F7F7F7] border w-full focus:ring-1 rounded font-light focus:font-normal"
                  } flex`}
              >
                <select
                  id="stdCode"
                  name="stdCode"
                  value={this.state.stdCode}
                  onChange={this.handleCountryChange}
                  className="focus:outline-none bg-[#F7F7F7] p-2 rounded-l font-light focus:font-normal w-28"
                >
                  <option value="SELECT" selected>
                    Select
                  </option>
                  {JSON_DATA.Country.map((country) => (
                    <option key={country.stdCode} value={country.stdCode}>
                      {country?.flag} {country.stdCode}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  onChange={this.inputChange}
                  name="mobNo"
                  value={
                    this.state.fieldsContactUs["mobNo"]
                      ? this.state.fieldsContactUs["mobNo"]
                      : ""
                  }
                  placeholder="Enter whatsapp number"
                  className="p-2 w-full rounded-l font-light focus:outline-none bg-[#F7F7F7] focus:font-normal"
                />
              </div>
              <div className="flex space-x-2">
                {this.state.errorsContactUs["stdCode"] ? (
                  <div className="invalid-feedback  text-red-500 text-sm font-light">
                    {this.state.errorsContactUs["stdCode"]}
                  </div>
                ) : null}
                {this.state.errorsContactUs["mobNo"] ? (
                  <div className="invalid-feedback  text-red-500 text-sm font-light">
                    {this.state.errorsContactUs["mobNo"]}
                  </div>
                ) : null}
              </div>
            </div> */}

            <div className="space-y-2 ">
              <label className="text-base" >Subject</label>
              <input
                onChange={this.inputChange}
                name="subject"
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
              <label className="text-lg" >Message</label>
              <textarea
                onChange={this.inputChange}
                name="msg"
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
          {
            this.state.errorMessage != "" ? (
              <div className="invalid-feedback  text-red-500 text-sm font-light">
                {this.state.errorMessage}
              </div>
            ) : null
          }

          {/* <LazyLoad height={70} offset={100}>
          <ReCAPTCHA
            sitekey="6LcXQKkpAAAAAOlsNqjoC8kx9To5Xt_RTIapQ0i0"
            onChange={this.handleRecaptchaChange}
          />
        </LazyLoad> */}

          <div className="flex justify-start pt-2">
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
                className=" text-white bg-[#5556D1] px-8 py-2.5 text-lg gap-2  rounded-full justify-center items-center space-x-1  overflow-hidden relative inline-flex group cursor-pointer font-semibold">
                Send Message
                <Image
                  src="https://www.comfygen.com/image/button-arrow.svg" alt=""
                  height={24}
                  width={24}
                />
              </button>
            )}
          </div>

          {
            this.state.successMessage && (
              <>
                <div className="popup success fixed flex justify-center items-center z-50">
                  {this.state.successMessage}
                </div>

                <div className="fixed top-0 z-50 left-0 flex items-center justify-center w-full h-screen rounded-lg shadow-lg bg-black/30 px-4">
                  <div className="md:w-[500px] md:h-auto w-auto h-[300px] space-y-1 2xl:space-y-3 bg-white rounded-2xl ">
                    <div className="py-6 bg-[#B427A6] text-center">
                      <div className="flex items-center justify-center py-6">
                        <Image
                          className="rounded-lg"
                          src="https://www.comfygen.com/img/thank-you-envelope.webp"
                          alt="Thank you"
                          width={256}
                          height={256}
                        />
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-white text-5xl font-bold">
                          Thank You
                        </h2>
                        <p className="text-white text-lg capitalize font-semibold">
                          for contacting us, we will reply promptly once your
                          message is received.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
          {
            this.state.errorMessage && (
              <div className="popup error">{this.state.errorMessage}</div>
            )
          }
        </form >
      </div >
    );
  }
}
export default ContactFrom;
