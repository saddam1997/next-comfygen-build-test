// "use client";

// import { useState } from "react";

// export default function TabsPanel() {
//   const [activeTab, setActiveTab] = useState("account");

//   return (
//     <section className="lg:py-16 py-10 bg-white">
//       <div className="max-w-[1600px] w-full lg:px-8 px-4 mx-auto space-y-8">
//         <div className="space-y-2">
//           <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold  lg:w-2/3 mx-auto">
//             The Features of dating apps Like Bumble ensure success in the Dating
//             Business.
//           </h2>
//           <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
//             Creating a successful dating application requires a blend of
//             innovative features, user-friendly design, and robust security. Here
//             are dating app advanced features that can help ensure the success of
//             a dating business
//           </p>
//         </div>

//         <div>
//           <div className="flex justify-center lg:gap-6 bg-[#F5F5F9] py-3 md:px-0 pl-20 rounded-tr-md rounded-tl-md  max-w-full  overflow-x-auto">
//             <button
//               className={`md:py-2.5 py-2 text-center rounded-full md:px-14 px-7 text-base font-medium ${activeTab === "account" ? "bg-[#5556D1] text-white shadow" : ""}`}
//               onClick={() => setActiveTab("account")}
//             >
//               Account
//             </button>
//             <button
//               className={`md:py-2.5 py-2 text-center rounded-full md:px-14 px-7 text-base font-medium ${activeTab === "password" ? "bg-[#5556D1] text-white shadow" : ""}`}
//               onClick={() => setActiveTab("password")}
//             >
//               Password
//             </button>
//             <button
//               className={`md:py-2.5 py-2 text-center rounded-full md:px-14 px-7 text-base font-medium ${activeTab === "password1" ? "bg-[#5556D1] text-white shadow" : ""}`}
//               onClick={() => setActiveTab("password1")}
//             >
//               Password
//             </button>
//           </div>
//           <div className="py-6  bg-white">
//             {activeTab === "account" && (
//               <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
//                 <div>
//                   <div className="space-y-6">
//                     <div  className="space-y-2">
//                     <div className="space-y-1">
//                       <h2 className="text-2xl font-bold">User App Panel</h2>
//                       <p className="text-base text-gray-600">
//                         Creating a successful dating application requires a
//                         blend of innovative features, user-friendly design, and
//                         robust security. Here are dating app advanced features
//                         that can help ensure the success of a dating business
//                       </p>
//                     </div>
//                     <ul className="space-y-2">
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                     </ul>
//                     </div>
              
//                     <div className="mt-4">
//                       <button className="px-8 py-2.5 bg-[#5556D1] text-white rounded-full">
//                       Connect With Experts
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <img
//                     className="w-full"
//                     src="https://www.comfygen.com/image/dating-user-panel.webp"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             )}
//             {activeTab === "password" && (
//              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
//              <div>
//                <div className="space-y-6">
//                  <div  className="space-y-2">
//                  <div className="space-y-1">
//                    <h2 className="text-2xl font-bold">Admin Panel</h2>
//                    <p className="text-base text-gray-600">
//                      Creating a successful dating application requires a
//                      blend of innovative features, user-friendly design, and
//                      robust security. Here are dating app advanced features
//                      that can help ensure the success of a dating business
//                    </p>
//                  </div>
//                  <ul className="space-y-2">
//                    <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                      <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                      Make changes to your account here.
//                    </li>
//                    <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                      <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                      Make changes to your account here.
//                    </li>
//                    <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                      <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                      Make changes to your account here.
//                    </li>
//                    <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                      <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                      Make changes to your account here.
//                    </li>
//                    <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                      <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                      Make changes to your account here.
//                    </li>
//                  </ul>
//                  </div>
           
//                  <div className="mt-4">
//                    <button className="px-8 py-2.5 bg-[#5556D1] text-white rounded-full">
//                    Connect With Experts
//                    </button>
//                  </div>
//                </div>
//              </div>
//              <div>
//                <img
//                  className="w-full"
//                  src="https://www.comfygen.com/image/dating-user-panel.webp"
//                  alt=""
//                />
//              </div>
//            </div>
//             )}
//             {activeTab === "password1" && (
//                 <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
//                 <div>
//                   <div className="space-y-6">
//                     <div  className="space-y-2">
//                     <div className="space-y-1">
//                       <h2 className="text-2xl font-bold">vender Panel</h2>
//                       <p className="text-base text-gray-600">
//                         Creating a successful dating application requires a
//                         blend of innovative features, user-friendly design, and
//                         robust security. Here are dating app advanced features
//                         that can help ensure the success of a dating business
//                       </p>
//                     </div>
//                     <ul className="space-y-2">
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                       <li className="text-base font-normal text-gray-600 flex items-center gap-2">
//                         <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>{" "}
//                         Make changes to your account here.
//                       </li>
//                     </ul>
//                     </div>
              
//                     <div className="mt-4">
//                       <button className="px-8 py-2.5 bg-[#5556D1] text-white rounded-full">
//                       Connect With Experts
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <img
//                     className="w-full"
//                     src="https://www.comfygen.com/image/dating-user-panel.webp"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  listItems: string[];
}

interface TabsPanelProps {
  heading: string;
  subheading: string;
  tabs: Tab[];
}

export default function TabsPanel({ heading, subheading, tabs = [] }: TabsPanelProps) {
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].id : "");

  return (
    <section className="lg:py-16 py-10 bg-white">
      <div className="max-w-[1600px] w-full lg:px-8 px-4 mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="xl:text-4xl text-3xl text-center mt-3 font-bold lg:w-2/3 mx-auto">
            {heading}
          </h2>
          <p className="text-base text-center font-normal lg:w-2/4 mx-auto">
            {subheading}
          </p>
        </div>

        {tabs.length > 0 ? (
          <>
            <div className="flex justify-center lg:gap-6 bg-[#F5F5F9] py-3 px-4 rounded-tr-md rounded-tl-md max-w-full overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`md:py-2.5 py-2 text-center rounded-full md:px-14 px-7 text-base font-medium ${
                    activeTab === tab.id ? "bg-[#5556D1] text-white shadow" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="py-6 bg-white">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <div key={tab.id} className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                      <div>
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <div className="space-y-1">
                              <h2 className="text-2xl font-bold">{tab.title}</h2>
                              <p className="text-base text-gray-600">{tab.description}</p>
                            </div>
                            <ul className="space-y-2">
                              {tab.listItems.map((item, index) => (
                                <li key={index} className="text-base font-normal text-gray-600 flex items-center gap-2">
                                  <div className="min-w-2 min-h-2 w-2 h-2 bg-[#5556D1] rounded-full"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4">
                            <button className="px-8 py-2.5 bg-[#5556D1] text-white rounded-full">
                              Connect With Experts
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img className="w-full" src={tab.image} alt={tab.title} />
                      </div>
                    </div>
                  )
              )}
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No tabs available</p>
        )}
      </div>
    </section>
  );
}

