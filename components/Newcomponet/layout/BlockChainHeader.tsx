import { useState, useEffect } from "react";
import BlockchainNav from "./blockchain-navbar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

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
        {isMobile ? <MobileNav /> : <BlockchainNav />}

      </div>
    </header>
  );
};

export default Navbar;

























// import BlockchainNav from "./blockchain-navbar";
// import DesktopNav from "./DesktopNav";
// import MobileNav from "./MobileNav";


// export default function BlockChainHeader(props: any) {
//   return (
//     <header>
//       <div className="hidden lg:block">
//        <BlockchainNav />
//       </div>
//       <div className="block lg:hidden">
//        <MobileNav />
//       </div>
//     </header>
//   );
// }


