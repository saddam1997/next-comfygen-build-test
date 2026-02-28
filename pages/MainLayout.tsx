

import Footer from '../components/Newcomponet/layout/Footer';
import GetinTouch from '../components/Newcomponet/SectionCompoent/GetinTouch';
import LazyClientTools from './LazyClientTools';
// import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();


  // const hideGetInTouch = pathname === "/contact-us";
  return (
    <>
      <main className="max-w-[1600px] w-full mx-auto overflow-x-hidden">
        {children}


        {/* {!hideGetInTouch && <GetinTouch />} */}
        <GetinTouch />
        <Footer />
        <LazyClientTools />
      </main>
    </>
  );
}