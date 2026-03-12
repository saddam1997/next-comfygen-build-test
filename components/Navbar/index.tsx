import DesktopNav from './DesktopNav'
import Mobileview from "./Mobileview"

const Navbar = () => {
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
  )
}

export default Navbar
