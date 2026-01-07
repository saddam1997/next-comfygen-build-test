import BlockchainNav from "./blockchain-navbar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";


export default function BlockChainHeader(props: any) {
  return (
    <header>
      <div className="hidden lg:block">
       <BlockchainNav />
      </div>
      <div className="block lg:hidden">
       <MobileNav />
      </div>
    </header>
  );
}


