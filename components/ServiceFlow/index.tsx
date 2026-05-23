

import React, { useState } from "react";
// import {
//   User,
//   BriefcaseBusiness,
//   ShieldCheck,
//   Bell,
//   House,
//   WalletCards,
//   Smartphone,
// } from "lucide-react";
import Tabs from "./Tabs";
import HeadingTwo from "../ui/HeadingTwo";

// const tabs = [
//   {
//     id: "customer",
//     label: "Customer",
//     icon: User,
//     color: "bg-[#DDF5EC] text-[#0D9F6E]",
//     line: "from-[#BDE7D8] to-[#E7E7E7]",
//     steps: [
//       {
//         step: "STEP 01",
//         title: "Browse Services",
//         description:
//           "Find trusted professionals based on category and location.",
//         icon: Smartphone,
//       },
//       {
//         step: "STEP 02",
//         title: "Book Instantly",
//         description:
//           "Choose your preferred date and time for quick booking.",
//         icon: Bell,
//       },
//       {
//         step: "STEP 03",
//         title: "Track Provider",
//         description:
//           "Track the service provider live until they reach you.",
//         icon: House,
//       },
//       {
//         step: "STEP 04",
//         title: "Pay Securely",
//         description:
//           "Complete payment safely with multiple payment options.",
//         icon: WalletCards,
//       },
//     ],
//   },

//   {
//     id: "provider",
//     label: "Service Provider",
//     icon: BriefcaseBusiness,
//     color: "bg-[#DDF5EC] text-[#0D9F6E]",
//     line: "from-[#BDE7D8] via-[#E7E7E7] to-[#F8E6D7]",
//     steps: [
//       {
//         step: "STEP 01",
//         title: "Register & Verify",
//         description:
//           "Submit profile, skills, and documents for KYC approval.",
//         icon: Smartphone,
//       },
//       {
//         step: "STEP 02",
//         title: "Receive Jobs",
//         description:
//           "Get notified of nearby requests — accept or decline instantly.",
//         icon: Bell,
//       },
//       {
//         step: "STEP 03",
//         title: "Complete Service",
//         description:
//           "Navigate to location, deliver service, mark job done.",
//         icon: House,
//       },
//       {
//         step: "STEP 04",
//         title: "Earn & Withdraw",
//         description:
//           "Track earnings in your wallet, withdraw anytime.",
//         icon: WalletCards,
//       },
//     ],
//   },

//   {
//     id: "admin",
//     label: "Admin",
//     icon: ShieldCheck,
//     color: "bg-[#FDEDDC] text-[#E67E22]",
//     line: "from-[#FDEDDC] to-[#E7E7E7]",
//     steps: [
//       {
//         step: "STEP 01",
//         title: "Manage Users",
//         description:
//           "Monitor customers and service providers from dashboard.",
//         icon: User,
//       },
//       {
//         step: "STEP 02",
//         title: "Track Orders",
//         description:
//           "View ongoing and completed bookings in real-time.",
//         icon: Bell,
//       },
//       {
//         step: "STEP 03",
//         title: "Handle Payments",
//         description:
//           "Manage payouts, commissions and transactions securely.",
//         icon: WalletCards,
//       },
//       {
//         step: "STEP 04",
//         title: "Analytics & Reports",
//         description:
//           "Get insights with detailed analytics and reports.",
//         icon: ShieldCheck,
//       },
//     ],
//   },
// ];

const Index = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("provider");
  const activeData =
    tabs.find((tab: any) => tab.id === activeTab) || tabs[1];

  return (
    <section className="w-full py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
         <div className="text-center space-y-2 max-w-7xl mx-auto px-2">
           <HeadingTwo color="#212121" text= {"WorkFlow of Home Service App Development"} />
        <p
          className="text-black lg:text-lg text-sm"
          // dangerouslySetInnerHTML={{ __html: featuresData?.description }}
        >

          As a leading home service app development company, Comfygen Technologies follows a proven workflow to build profitable home service apps from market research and business model planning to feature development, seamless booking systems, payment integration, user acquisition strategies, and revenue-focused monetization models that help businesses generate consistent income.
        </p>
      </div>

        
        <div className="rounded-[30px]  p-4 sm:p-6 lg:p-10 shadow-sm">
          <Tabs Data={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="relative mt-10">
            {/* Line */}
            <div
              className={`absolute left-0 right-0 top-[36px] hidden h-[2px] bg-gradient-to-r ${activeData.line} lg:block`}
            />

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {activeData.steps.map((item: any, index: any) => {
                // const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="relative  flex flex-col items-center"
                  >
                    {/* Step */}
                    <span className="mb-4 text-[11px] font-bold tracking-[2px] text-[#8B8B8B]">
                      {item.step}
                    </span>

                    {/* Icon */}
                    <div
                      className={`relative z-10 flex h-[62px] w-[62px] items-center justify-center rounded-2xl ${activeData.color}`}
                    >
                      <span className="h-5 w-5">{item.icon}</span>
                    </div>

                    {/* Card */}
                    <div className="mt-5 w-full rounded-[20px] border border-[#E5E7EB] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <h3 className="text-[18px] font-bold leading-snug text-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-[24px] text-[#666]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;