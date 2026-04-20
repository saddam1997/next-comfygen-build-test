import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import Mobileview from "./Mobileview";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white ">
      
      {/* ✅ stable height prevents CLS */}
      <div className="h-[70px] lg:h-[120px] flex items-center">
        
        {/* ✅ render only one (no CSS swap CLS) */}
        {isMobile ? <Mobileview /> : <DesktopNav />}

      </div>
    </header>
  );
};

export default Navbar;















// import DesktopNav from "./DesktopNav";
// import Mobileview from "./Mobileview";

// const Navbar = () => {
//   return (
//     <header className="w-full h-[70px] lg:h-[90px]">
//       <nav className="w-full h-full flex items-center">
//         <div className="hidden lg:block w-full">
//           <DesktopNav />
//         </div>

//         <div className="block lg:hidden w-full">
//           <Mobileview />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

