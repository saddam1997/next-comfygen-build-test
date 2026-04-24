"use client";

import { useState, useEffect } from "react";
import MENU_DATA from "./Navmenu.json";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // ✅ LOCK SCROLL (IMPORTANT FOR UX + CLS FEEL)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      {/* HEADER (NO FIXED HERE — handled in layout) */}
      <div className="w-full  h-[70px] flex items-center">
        <nav className="flex items-center justify-between h-[70px] w-11/12 mx-auto">

          <Link href="/" className="flex items-center h-full">
            <Image
              src="/svg/Logo1.svg"
              alt="Logo"
              width={144}
              height={48}
              priority
              className="object-contain h-12 w-36"
            />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center justify-center h-10 w-10 bg-gray-100 rounded"
          >
            ☰
          </button>

        </nav>
      </div>

      {/* ✅ RENDER ONLY WHEN OPEN (BIG INP FIX) */}
      {open && (
        <div className="fixed inset-0 z-40">

          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* SIDEBAR */}
          <div className="absolute right-0 top-0 h-screen w-80 bg-white shadow-lg overflow-y-auto animate-slideIn">

            <div className="p-4 border-b flex justify-between items-center">
              <span>Menu</span>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

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
                            onClick={() => setOpen(false)}
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
      )}
    </>
  );
}













// // MobileNav.tsx (SERVER COMPONENT ✅ NO JS)

// import MENU_DATA from "./Navmenu.json";
// import Image from "next/image";
// import Link from "next/link";

// export default function MobileNav() {
//   return (
//     <>
//       {/* TOGGLE INPUT (hidden) */}
//       <input type="checkbox" id="menu-toggle" className="hidden peer" />

//       {/* HEADER */}
//       <div className="sticky top-0 left-0 w-full h-[70px] bg-white z-50 shadow-sm">
//         <nav className="flex items-center justify-between h-full w-11/12 mx-auto">

//           <Link className="h-12" href="/">
//             <Image
//               src="/svg/Logo1.svg"
//               alt="Logo"
//               width={160}
//               height={50}
//               priority
//                 sizes="100vw"
//               className="h-12 w-full object-contain"
//             />
//           </Link>

//           {/* BUTTON */}
//           <label
//             htmlFor="menu-toggle"
//             className="p-2 bg-gray-100 rounded cursor-pointer"
//           >
//             ☰
//           </label>

//         </nav>
//       </div>
//       {/* MENU */}
//       <div className="fixed inset-0 z-40 hidden peer-checked:block">

//         {/* OVERLAY */}
//         <label
//           htmlFor="menu-toggle"
//           className="absolute inset-0 bg-black/50"
//         ></label>

//         {/* SIDEBAR */}
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
//                         <Link
//                           href={item.url}
//                           className="block py-1"
//                         >
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

