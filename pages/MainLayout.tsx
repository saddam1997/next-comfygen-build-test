import Footer from "../components/Newcomponet/layout/Footer";

import dynamic from "next/dynamic";
const LazyClientTools = dynamic(
  () => import("./LazyClientTools"),
  { ssr: false }
);

const GetinTouch = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/GetinTouch"),
  { ssr: false }
);




/* ================= GLOBAL LAYOUT SHELL ================= */

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ================= APP WRAPPER ================= */}
      <div className="w-full min-h-screen bg-white">

        {/* ================= CONTENT CONTAINER ================= */}
        <main className="w-full max-w-[1600px] mx-auto">

          {/* PAGE CONTENT (NO OVERFLOW HACKS) */}
          <div className="w-full">
            {children}
          </div>

          {/* ================= CTA (RESERVED SPACE FIX) ================= */}
          <section className="w-full min-h-[420px] md:min-h-[380px]">
            <GetinTouch />
          </section>

          {/* ================= FOOTER (STABILIZED) ================= */}
          <footer className="w-full min-h-[300px]">
            <Footer />
          </footer>

        </main>

        {/* ================= CLIENT TOOLS ================= */}
        <LazyClientTools />

      </div>
    </>
  );
}









// import Footer from '../components/Newcomponet/layout/Footer';
// import GetinTouch from '../components/Newcomponet/SectionCompoent/GetinTouch';
// import LazyClientTools from './LazyClientTools';
// // import { usePathname } from "next/navigation";

// export default function MainLayout({ children }: { children: React.ReactNode }) {
//   // const pathname = usePathname();


//   // const hideGetInTouch = pathname === "/contact-us";
//   return (
//     <>
//       <main className="max-w-[1600px] w-full mx-auto overflow-hidden">
        
//         {children}
//         {/* {!hideGetInTouch && <GetinTouch />} */}
//         <GetinTouch />
//         <Footer />
//         <LazyClientTools />
//       </main>
//     </>
//   );
// }