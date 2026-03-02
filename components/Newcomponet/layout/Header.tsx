import DesktopNav from "./DesktopNav";
// import MobileNav from "./MobileNav";
// import DesktopNavnew from "./DesktopNavnew"
// import BreadCume from "../home/component/BreadCume";
import Mobileview from "../../../components/HeaderSection/Mobileview"


export default function Header(props: any) {
  return (
    <>

      <>
        <header className=" w-full">
          <div className="hidden lg:block">
            <DesktopNav />
          </div>
          <div className="block lg:hidden">
            {/* <MobileNav /> */}
            <Mobileview/>
          </div>
        </header>

      </>
     
    </>
  );
}




