// MobileNav.tsx (SERVER COMPONENT ✅ NO JS)

import MENU_DATA from "./Navmenu.json";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  return (
    <>
      {/* TOGGLE INPUT (hidden) */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full h-[70px] bg-white z-50 shadow-sm">
        <nav className="flex items-center justify-between h-full w-11/12 mx-auto">

          <Link href="/">
            <Image
              src="/svg/Logo1.svg"
              alt="Logo"
              width={160}
              height={50}
              priority
              className="h-full w-full"
            />
          </Link>

          {/* BUTTON */}
          <label
            htmlFor="menu-toggle"
            className="p-2 bg-gray-100 rounded cursor-pointer"
          >
            ☰
          </label>

        </nav>
      </div>

      {/* MENU */}
      <div className="fixed inset-0 z-40 hidden peer-checked:block">

        {/* OVERLAY */}
        <label
          htmlFor="menu-toggle"
          className="absolute inset-0 bg-black/50"
        ></label>

        {/* SIDEBAR */}
        <div className="absolute right-0 top-0 h-screen w-80 bg-white shadow-lg overflow-y-auto">

          <div className="p-4 border-b">Menu</div>

          <Link href="/" className="block p-4 border-b">
            Home
          </Link>

          {MENU_DATA.map((menu: any) => (
            <details key={menu.id} className="border-b">

              <summary className="p-4 cursor-pointer font-medium">
                {menu.title}
              </summary>

              {menu.sections.map((section: any) => (
                <details key={section.id} className="pl-4">

                  <summary className="p-3 text-sm">
                    {section.label}
                  </summary>

                  <ul className="pl-4 pb-3 text-sm">
                    {section.items.map((item: any) => (
                      <li key={item.url}>
                        <Link
                          href={item.url}
                          className="block py-1"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </details>
              ))}

            </details>
          ))}
        </div>
      </div>
    </>
  );
}













// // MobileNav.tsx (SERVER COMPONENT ✅)

// import MENU_DATA from "./Navmenu.json";
// import Image from "next/image";
// import Link from "next/link";
// import MobileToggle from "./MobileToggle";

// export default function MobileNav() {
//   return (
//     <>
//       {/* HEADER */}
//       <div className="fixed top-0 left-0 w-full h-[70px] bg-white z-50 shadow-sm">
//         <nav className="flex items-center justify-between h-full w-11/12 mx-auto">

//           <Link href="/">
//             <Image
//               src="/svg/Logo1.svg"
//               alt="Logo"
//               width={160}
//               height={50}
//               priority
//             />
//           </Link>

//           <MobileToggle />

//         </nav>
//       </div>

//       {/* MENU */}
//       <div id="menu" className="hidden fixed inset-0 z-40">

//         <div className="overlay absolute inset-0 bg-black/50"></div>

//         <div className="absolute right-0 top-0 h-screen w-80 bg-white shadow-lg overflow-y-auto">

//           <div className="p-4 border-b">Menu</div>

//           <Link href="/" className="block p-4 border-b">
//             Home
//           </Link>

//           {MENU_DATA.map((menu: any) => (
//             <details key={menu.id} className="border-b">

//               <summary className="p-4 cursor-pointer font-medium">
//                 {menu.title}
//               </summary>

//               {menu.sections.map((section: any) => (
//                 <details key={section.id} className="pl-4">

//                   <summary className="p-3 text-sm">
//                     {section.label}
//                   </summary>

//                   <ul className="pl-4 pb-3 text-sm">
//                     {section.items.map((item: any) => (
//                       <li key={item.url}>
//                         <Link href={item.url} className="block py-1">
//                           {item.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>

//                 </details>
//               ))}

//             </details>
//           ))}

//         </div>
//       </div>
//     </>
//   );
// }











// import MENU_DATA from "./Navmenu.json";
// import MobileNavClient from "./MobileNavClient";

// export default function MobileNav() {
//   return <MobileNavClient menuData={MENU_DATA} />;
// }