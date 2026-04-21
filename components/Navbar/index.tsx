import DesktopNav from "./DesktopNav";
import Mobileview from "./Mobileview";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="h-[70px] lg:h-[120px]">
          <div className="block lg:hidden h-full">
            <Mobileview />
          </div>
          <div className="hidden lg:block h-full">
            <DesktopNav />
          </div>
        </div>
      </header>
      <div aria-hidden className="h-[70px] lg:h-[120px]" />
    </>
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

