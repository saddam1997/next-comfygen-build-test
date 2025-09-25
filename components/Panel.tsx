import React, { useState } from "react";
import Image from "next/image";

const bookieDescription = "The Bookie Panel is a comprehensive platform designed to streamline the Cricket betting software development process.";
const adminDescription = "The Admin Panel is a powerful tool for Cricket betting software operators to manage their business operations effectively.";
const userDescription = "The User Panel is an intuitive cricket betting software development platform designed to provide sports bettors with a seamless betting experience.";

const bookie = [
  { decs: "Players Can Create Accounts Using Their Phone Numbers, Email Addresses, And Social Media Profiles", num: "1", title: "Account Management", bg: "#F45F391A", },
  { decs: "Through SMS, Emails, And Push Notifications Assist The Bookies In Carrying Out Their Operations Seamlessly.", num: "2", title: "Notifications", bg: "#9A4ECC1A", },
  { decs: "Provides Bookies With The Highest Level Of Accuracy When It Comes To Keeping Track Of The Odds In Real-Time.", num: "3", title: "Real-Time Odds", bg: "#2390FB1A", },
  { decs: "The Bookies Provide 24 X 7 Support To Their Customers Through An Efficient Communication System.", num: "4", title: "Round The Clock", bg: "#F9F0E2", },
  { decs: "Bookies Can Easily Keep Track Of Their Bets And Payouts By Using Dashboards.", num: "5", title: "Effective Dashboards", bg: "#82AB101A", },
  { decs: "It Is Possible For Bookies To Manage Matches And Tournaments, And Schedule Them For The Benefit Of Their Clients.", num: "6", title: "Calendars And Schedules", bg: "#F45F391A", },

];

const admin = [
  { decs: "Admins Can Manage Bets Seamlessly With The Help Of This Feature of Best Software for Cricket Betting Industry", num: "1", title: "Betting Management", bg: "#F45F391A", },
  { decs: "Administrators Can Take Effective Measures To Mitigate Risks.", num: "2", title: "Risk Mitigation", bg: "#9A4ECC1A", },
  { decs: "A Business Administrator Can Effectively Manage Promotional Activities And Scale-Up The Business To Greater Heights.", num: "3", title: "Management Of Promotions", bg: "#2390FB1A", },
  { decs: "Using Our Cricket Betting Software Services, You Can Monitor The Efficiency And Performance Of The Entire Operations Of Your Business In A Big Picture Analysis", num: "4", title: "Overall Management", bg: "#2390FB1A", },
  { decs: "Our Amazing Finance Management Tool for Cricket Betting Software Allows Administrators To Manage Financial Transactions Effectively.", num: "5", title: "Finance Management", bg: "#82AB101A", },
  { decs: "Admins Can Stay In Touch With Clients Round-The-Clock Thanks To Our Outstanding Features. Any Queries Or Issues Can Also Be Resolved Quickly By Admins", num: "6", title: "Customer Support", bg: "#F45F391A", },

];

const user = [
  { decs: "Registration And Creation Of Cricket Betting Software Accounts Are Easy and Providing Real-Time, Live Feed And Updates About Different Sports Betting Software Development Activities.", num: "1", title: "User Account & Live Feed", bg: "#F45F391A", },
  { decs: "Users Can Enhance Their Overall Cricket Betting Software Development Rich Experience, While Cricket Betting Software Owners Are Able To Increase Their Overall Revenue", num: "2", title: "In-App Purchases", bg: "#9A4ECC1A", },
  { decs: "Ensure That End Users Are Able To Use The System Easily.", num: "3", title: "Easy Navigation", bg: "#2390FB1A", },
  { decs: "Users Will Be Able To Place Real Or Virtual Bets On Their Favorite Sports of Cricket Betting Software Or Games.", num: "4", title: "Virtual Or Real Money", bg: "#82AB101A", },
  { decs: "Keeping Users Safe From Fraudulent Activities And Money Losses and Providing Users With A Better Overall Cricket Betting Software Development Company in India Experience.", num: "5", title: "Anti-Fraud & Betting Tips", bg: "#F45F391A", },
  { decs: "Users Can Check Events And Cricket Betting Software Calendars To Know About Upcoming Events.  ", num: "6", title: "Days, Schedules And Calendars", bg: "#FFA0001A", },
];

export default function Panels({ Panelheader }) {
  const [tech, setTech] = useState(0);
  const [description, setDescription] = useState(bookieDescription);

  const handleTabChange = (index) => {
    setTech(index);
    switch (index) {
      case 0:
        setDescription(bookieDescription);
        break;
      case 1:
        setDescription(adminDescription);
        break;
      case 2:
        setDescription(userDescription);
        break;
      default:
        setDescription(bookieDescription);
        break;
    }
  };

  return (
    <>
      {/* technology*/}
      <section className="py-20  bg-slate-100">
        <div className=" space-y-10 mx-auto 2xl:w-9/12 xl:w-5/6 w-11/12">
          {Panelheader.map((elem: any) => {
            const { title, decs } = elem;
            return (
              <div className="flex flex-col justify-center text-center  mx-auto lg:w-4/6">
                <h2 className="py-4 text-[#0E1F51] xl:text-4xl text-3xl font-bold xl:leading-[3rem] capitalize">
                  {title}
                </h2>
               
              </div>
            );
          })}
          <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap ">
            <span
              onClick={() => handleTabChange(0)}
              className={
                tech === 0
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Bookie Panel
            </span>
            <span
              onClick={() => handleTabChange(1)}
              className={
                tech === 1
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Admin Panel
            </span>
            <span
              onClick={() => handleTabChange(2)}
              className={
                tech === 2
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >  User Panel
            </span>
          </div>
          <p className="text-base text-center  text-[#475569]">{description}</p>
          {/* Render panels based on selected tab */}
          <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize">
              {tech === 0 && bookie.map((elem: any) => (
                <div className="p-8 space-y-4 bg-white cursor-pointer rounded-[40px] transition-all duration-200 group hover:bg-blue-100" style={{ backgroundColor: elem.bg }}>
                  <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                    {elem.title}
                  </h3>
                  <p className=" text-black break-all transition duration-200 ease-in-out line-clamp-6">
                    {elem.decs}
                  </p>
                </div>
              ))}

              {tech === 1 && admin.map((elem: any) => (
                <div className="p-8 space-y-4 bg-white cursor-pointer rounded-[40px] transition-all duration-200 group hover:bg-blue-100" style={{ backgroundColor: elem.bg }}>
                  <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                    {elem.title}
                  </h3>
                  <p className=" text-black break-all transition duration-200 ease-in-out line-clamp-6">
                    {elem.decs}
                  </p>
                </div>
              ))}

              {tech === 2 && user.map((elem: any) => (
                <div className="p-8 space-y-4 bg-white cursor-pointer rounded-[40px] transition-all duration-200 group hover:bg-blue-100" style={{ backgroundColor: elem.bg }}>
                  <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                    {elem.title}
                  </h3>
                  <p className=" text-black break-all transition duration-200 ease-in-out line-clamp-6">
                    {elem.decs}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
