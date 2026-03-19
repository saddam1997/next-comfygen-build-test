import DesktopNav from "./DesktopNav";
import Mobileview from "./Mobileview";

const Navbar = () => {
  return (
    <header className="w-full h-[70px] lg:h-[90px]">
      <nav className="w-full h-full flex items-center">
        <div className="hidden lg:block w-full">
          <DesktopNav />
        </div>

        <div className="block lg:hidden w-full">
          <Mobileview />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

