
import MobileNav from "../../../components/old/components/MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header(props: any) {
  return (
    <header>
      <div className="hidden lg:block">
       <DesktopNav />
      </div>
      <div className="block lg:hidden">
       <MobileNav />
      </div>
    </header>
  );
}




// import MobileNav from "./MobileNav";
// import DesktopNav from "./DesktopNav";
// // import DesktopNav from "./DesktopNavold";


// import { useState, useEffect } from "react";
// export default function Header(props: any) {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsMobile(window.innerWidth <= 1024);
//     }
//   }, []);
//   if (isMobile) {
//     return (
//       <MobileNav />
//     );
//   } else {
//     return <DesktopNav />;
//   }
// }
