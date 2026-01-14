import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
// import DesktopNavnew from "./DesktopNavnew"
// import BreadCume from "../home/component/BreadCume";


export default function Header(props: any) {
  return (
    <header>
      <div className="hidden lg:block">
    
       <DesktopNav />
       {/* <DesktopNavnew/> */}
      </div>
      <div className="block lg:hidden">
       <MobileNav />
      </div>
    </header>
  );
}




