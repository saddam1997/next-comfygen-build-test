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
    <div className="w-full min-h-screen bg-white">

      {/* NAVBAR */}
      <header className="h-[50px] w-full">
        <div className="fixed top-0 left-0 w-full h-[70px] z-50 bg-white">
          <Navbar />
        </div>
      </header>

      {/* ✅ FIXED CONTENT SHIFT */}
      <main className="pt-[50px] w-full max-w-[1600px] mx-auto">

        <div className="w-full">
          {children}
        </div>

        {/* CTA */}
        <section className="w-full">
          <div className="min-h-[420px] md:min-h-[380px]">
            <GetinTouch />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full">
          <div className="min-h-[300px]">
            <Footer />
          </div>
        </footer>

      </main>

      {/* CLIENT TOOLS */}
      <LazyClientTools />

    </div>
  );
}

