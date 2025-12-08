import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


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




