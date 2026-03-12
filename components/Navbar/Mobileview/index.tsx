
import MENU_DATA from "./Navmenu.json";
import MobileNavClient from "./MobileNavClient";

export default function MobileNav() {
  return <MobileNavClient menuData={MENU_DATA} />;
}