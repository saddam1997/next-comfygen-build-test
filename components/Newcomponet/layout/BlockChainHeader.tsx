import BlockchainNav from "./blockchain-navbar";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="h-[70px] lg:h-[120px]">
          <div className="block lg:hidden h-full">
            <MobileNav />
          </div>
          <div className="hidden lg:block h-full">
            <BlockchainNav />
          </div>
        </div>
      </header>
      <div aria-hidden className="h-[70px] lg:h-[120px]" />
    </>
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


