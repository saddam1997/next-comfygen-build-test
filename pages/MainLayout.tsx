import Navbar from "../components/Navbar";


import dynamic from "next/dynamic";
const LazyClientTools = dynamic(
  () => import("./LazyClientTools"),
  { ssr: false,  loading: () => <div style={{ height: 300 }} /> }
);

const GetinTouch = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/GetinTouch"),
  {
    ssr: false,
    loading: () => <div style={{ height: 300 }} />
  }
);

const Footer = dynamic(
  () => import("../components/Newcomponet/layout/Footer"),
  {
    ssr: false,
    loading: () => <div style={{ height: 300 }} />,
  }
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
      <header className="h-[70px] w-full">
        <div className="fixed top-0 left-0 w-full h-[70px] z-50 bg-white">
          <Navbar />
        </div>
      </header>

      {/* ✅ FIXED CONTENT SHIFT */}
      <main className="pt-[70px] w-full max-w-[1600px] mx-auto">

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
        <footer className="w-full min-h-[300px]">
          <Footer />
        </footer>


      </main>

      {/* CLIENT TOOLS */}
      <LazyClientTools />

    </div>
  );
}

