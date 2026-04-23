import DesktopNav from "./DesktopNav";
import Mobileview from "./Mobileview";

const Navbar = () => {
  return (
    <>
      <div className="block lg:hidden">
        <Mobileview />
      </div>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
    </>
  );
};

export default Navbar;

