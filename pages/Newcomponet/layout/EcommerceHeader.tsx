
import EcommerceNav from "./ecommerce-navbar";
import MobileNav from "./MobileNav";


export default function EcommerceHeader(props: any) {
  return (
    <header>
      <div className="hidden lg:block">
       <EcommerceNav />
      </div>
      <div className="block lg:hidden">
       <MobileNav />
      </div>
    </header>
  );
}
