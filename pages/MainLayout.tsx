import Navbar from "../components/Navbar";
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

        {/* ✅ FIXED HEADER */}
         <Navbar />
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

