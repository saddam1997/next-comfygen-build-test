import DesktopNav from "./DesktopNav";
import Mobileview from "./Mobileview";

// const Mobileview = dynamic(() => import("./Mobileview"),
//   { ssr: true }
// );

const Navbar = () => {
  return (
    <>
      {/* <div className="block lg:hidden">
        <Mobileview />
      </div> */}
      <div className="">
        <DesktopNav />
      </div>
    </>
  );
};

export default Navbar;

