

import React, { Component } from "react";
import JSON_DATA from "./json/country.json";

class ContactFrom extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
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
    const { name, value } = e.target;

    if (name === "mobNo" && !/^[0-9\s]*$/.test(value)) {
      this.setState({
        errorsContactUs: {
          ...this.state.errorsContactUs,
          mobNo: "Please enter a valid number.",
        },
      });
      return;
    }

    this.setState((prevState: any) => ({
      fieldsContactUs: {
        ...prevState.fieldsContactUs,
        [name]: value,
      },
      errorsContactUs: {
        ...prevState.errorsContactUs,
        [name]: "",
      },
    }));
  };

  handleCountryChange = (e: any) => {
    const value = e.target.value;

    this.setState((prevState: any) => ({
      stdCode: value,
      errorsContactUs: {
        ...prevState.errorsContactUs,
        stdCode: value ? "" : "Please select Std Code!",
      },
    }));
  };

  handleValidationContactUs = () => {
    let fields = this.state.fieldsContactUs;
    let errors: any = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Please enter Name!";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Please enter Email!";
    }

    if (!this.state.stdCode) {
      formIsValid = false;
      errors["stdCode"] = "Please select Std Code!";
    }

    if (!fields["mobNo"] || !/^\d{7,15}$/.test(fields["mobNo"])) {
      formIsValid = false;
      errors["mobNo"] =
        "Please enter a valid Mobile No. (7 to 15 digits)!";
    }

    if (!fields["msg"]) {
      formIsValid = false;
      errors["msg"] = "Please enter Message!";
    }

    this.setState({ errorsContactUs: errors });
    return formIsValid;
  };

  createContactUs = async () => {
    if (!this.handleValidationContactUs()) return;

    const data = {
      name: this.state.fieldsContactUs.name,
      email: this.state.fieldsContactUs.email,
      mobNo: this.state.fieldsContactUs.mobNo,
      stdCode: this.state.stdCode,
      subject: "HEADER CONTACT Form | " + window.location.href,
      msg: this.state.fieldsContactUs.msg,
      ipInfo: this.state.ipInfo,
    };

    this.setState({ submitted: true });

    try {
      const res = await fetch(
        "https://www.comfygen.com/api/v1/createContactUs1111",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result?.code === 0) {
        window.location.href = "/thankyou";
      } else {
        this.setState({
          errorMessage: result?.message,
          submitted: false,
        });
      }
    } catch (error) {
      this.setState({
        errorMessage: "Network Error",
        submitted: false,
      });
    }
  };

  fetchUserIP = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=55503f8d72626d"
      );
      const data = await response.json();

      const selectedCountry = JSON_DATA.Country?.find(
        (ele) => ele.code === data.country
      );

      if (selectedCountry) {
        this.setState({ stdCode: selectedCountry.stdCode });
      }

      this.setState({ ipInfo: data });
    } catch (error) { }
  };

  render() {
    const { errorsContactUs, submitted } = this.state;

    return (
      <div className="h-full overflow-hidden">
        <form className="rounded-xl lg:px-8 md:px-6 p-2 px-4 space-y-4 h-full w-full">

          <div className="space-y-2">
            <h2 className="xl:text-4xl text-base font-semibold">
              Get In Touch
            </h2>
            <p className="md:text-base text-xs">
              Comfygen is a result-oriented IT Service Provider
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 h-full">

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={this.state.fieldsContactUs.name || ""}
                onChange={this.inputChange}
                className="w-full p-2 border rounded bg-transparent focus:outline-none"
              />
              {errorsContactUs.name && (
                <p className="text-red-500 text-sm">
                  {errorsContactUs.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={this.state.fieldsContactUs.email || ""}
                onChange={this.inputChange}
                className="w-full p-2 border rounded bg-transparent focus:outline-none "
              />
              {errorsContactUs.email && (
                <p className="text-red-500 text-sm">
                  {errorsContactUs.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="mobNo">Enter Number</label>
              <div className="flex items-center border rounded overflow-hidden ">
                <select
                  id="stdCode"
                  name="stdCode"
                  value={this.state.stdCode}
                  onChange={this.handleCountryChange}
                  className="w-28 p-2 focus:outline-none bg-transparent overflow-hidden"
                >
                  <option className="text-black " value="">Code</option>
                  {JSON_DATA.Country?.map((ele) => (
                    <option className="text-black" key={ele.code} value={ele.stdCode}>
                      {ele.flag} {ele.stdCode}
                    </option>
                  ))}
                </select>

                <input
                  id="mobNo"
                  name="mobNo"
                  type="text"
                  value={this.state.fieldsContactUs.mobNo || ""}
                  onChange={this.inputChange}
                  className="p-2 w-full bg-transparent border-l focus:outline-none"
                />
              </div>

              {errorsContactUs.stdCode && (
                <p className="text-red-500 text-sm">
                  {errorsContactUs.stdCode}
                </p>
              )}
              {errorsContactUs.mobNo && (
                <p className="text-red-500 text-sm">
                  {errorsContactUs.mobNo}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={this.state.fieldsContactUs.subject || ""}
                onChange={this.inputChange}
                className="w-full p-2 border rounded bg-transparent focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="lg:col-span-2 space-y-2">
              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                name="msg"
                rows={4}
                value={this.state.fieldsContactUs.msg || ""}
                onChange={this.inputChange}
                className="w-full p-2 border rounded bg-transparent focus:outline-none"
              />
              {errorsContactUs.msg && (
                <p className="text-red-500 text-sm">
                  {errorsContactUs.msg}
                </p>
              )}
            </div>

          </div>

          <button
            type="button"
            onClick={this.createContactUs}
            className="bg-[#5556D1] text-white px-6 py-2 rounded-full"
          >
            {submitted ? "Submitting..." : "Send Message"}
          </button>

          {this.state.errorMessage && (
            <p className="text-red-500 text-sm">
              {this.state.errorMessage}
            </p>
          )}
        </form>
      </div>
    );
  }
}

export default ContactFrom;













