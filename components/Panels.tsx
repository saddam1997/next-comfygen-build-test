import React, { useState } from "react";
import Image from "next/image";

const bookie = [
  { decs: "Players can create accounts using their phone numbers, email addresses, and social media profiles", num: "1", title: "Account Management", bg: "#F45F391A", },
  { decs: "Through SMS, emails, and push notifications assist the bookies in carrying out their operations seamlessly.", num: "2", title: "Notifications", bg: "#9A4ECC1A", },
  { decs: "Provides bookies with the highest level of accuracy when it comes to keeping track of the odds in real-time.", num: "3", title: "Real-Time Odds", bg: "#2390FB1A", },
  { decs: "The bookies provide 24 x 7 support to their customers through an efficient communication system.", num: "4", title: "Round the Clock Support", bg: "#F9F0E2", },
  { decs: "Bookies can easily keep track of their bets and payouts by using dashboards.", num: "5", title: "Effective Dashboards", bg: "#82AB101A", },
  { decs: "It is possible for bookies to manage matches and tournaments, and schedule them for the benefit of their clients.", num: "6", title: "Calendars and Schedules", bg: "#F45F391A", },

];

const admin = [
  { decs: "Admins can manage bets seamlessly with the help of this feature", num: "1", title: "Betting Management", bg: "#F45F391A", },
  { decs: "Our amazing finance management tool allows administrators to manage financial transactions effectively.", num: "2", title: "Finance Management", bg: "#9A4ECC1A", },
  { decs: "Admins can stay in touch with clients round-the-clock thanks to our outstanding features. Any queries or issues can also be resolved quickly by admins", num: "3", title: "Customer Support", bg: "#2390FB1A", },
  { decs: "Administrators can take effective measures to mitigate risks.", num: "4", title: "Risk Mitigation", bg: "#2390FB1A", },
  { decs: "A business administrator can effectively manage promotional activities and scale-up the business to greater heights.", num: "5", title: "Management of Promotions  ", bg: "#82AB101A", },
  { decs: "Using our software, you can monitor the efficiency and performance of the entire operations of your business in a big picture analysis", num: "6", title: "Overall Management", bg: "#F45F391A", },

];

const user = [
  { decs: "Registration and creation of betting accounts are easy.", num: "1", title: "User Account", bg: "#F45F391A", },
  { decs: "providing real-time, live feed and updates about different sports activities.", num: "2", title: "Live feed", bg: "#9A4ECC1A", },
  { decs: "Users can enhance their overall betting experience, while app owners are able to increase their overall revenue", num: "3", title: "In-app purchases", bg: "#2390FB1A", },
  { decs: "Ensure that end users are able to use the system easily.", num: "4", title: "Easy navigation", bg: "#2390FB1A", },
  { decs: "Users will be able to place real or virtual bets on their favorite sports or games.", num: "5", title: "Virtual or Real money payments", bg: "#82AB101A", },
  { decs: "Keeping users safe from fraudulent activities and money losses", num: "6", title: "Anti-fraud system", bg: "#F45F391A", },
  { decs: "Providing users with a better overall betting experience.", num: "7", title: "Betting tips", bg: "#FFA0001A", },
  { decs: "Users can check events and sports calendars to know about upcoming events.", num: "7", title: "Days, schedules and calendars  ", bg: "#FFA0001A", },
];


export default function Panels({ Panelheader }) {
  const [tech, setTech] = useState(0);

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
                <p className="text-base  text-[#475569]">{decs}</p>
              </div>
            );
          })}
          <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap ">
            <span
              onClick={() => setTech(tech === 0 ? 0 : 0)}
              className={
                tech === 0
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Bookie Panel
            </span>
            <span
              onClick={() => setTech(tech === 1 ? 0 : 1)}
              className={
                tech === 1
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >
              Admin Panel
            </span>
            <span
              onClick={() => setTech(tech === 2 ? 0 : 2)}
              className={
                tech === 2
                  ? "bg-blue-600 border border-blue-600 text-white px-6 py-2 text-base rounded-full capitalize cursor-pointer"
                  : "bg-transparent  text-blue-600 border border-blue-600 px-6 py-2 text-base rounded-full capitalize cursor-pointer"
              }
            >  User Panel
            </span>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative pt-6 capitalize">
            {tech === 0 ? (
              <>
                {bookie.map((elem: any) => {
                  const { img, name, title, decs, bg } = elem;
                  return (
                    <div className="p-8 space-y-4 bg-white cursor-pointer rounded-[40px] transition-all duration-200 group hover:bg-blue-100" style={{ backgroundColor: elem.bg }}>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                        {" "}
                        {title}
                      </h3>
                      <p className=" text-black break-all transition duration-200 ease-in-out line-clamp-6">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </>
            ) : null}

            {tech === 1 ? (
              <>
                {admin.map((elem: any) => {
                  const { img, title, num, decs, bg } = elem;
                  return (
                    <div className="p-8 space-y-4 bg-white cursor-pointer rounded-[40px] transition-all duration-200 group hover:bg-blue-100" style={{ backgroundColor: elem.bg }}>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                        {" "}
                        {title}
                      </h3>
                      <p className=" text-black break-all transition duration-200 ease-in-out line-clamp-6">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </>
            ) : null}

            {tech === 2 ? (
              <>
                {user.map((elem: any) => {
                  const { img, decs, num, title, bg } = elem;
                  return (
                    <div className="p-8 space-y-4 bg-white cursor-pointer rounded-[40px] transition-all duration-200 group hover:bg-blue-100" style={{ backgroundColor: elem.bg }}>
                      <h3 className="text-lg font-extrabold text-[#0E1F51] transition-all duration-200">
                        {" "}
                        {title}
                      </h3>
                      <p className=" text-black break-all transition duration-200 ease-in-out line-clamp-6">
                        {decs}
                      </p>
                    </div>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
