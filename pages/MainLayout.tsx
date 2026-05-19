import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const LazyClientTools = dynamic(() => import("./LazyClientTools"),
  { ssr: true,  }
);

const GetinTouch = dynamic(
  () => import("../components/Newcomponet/SectionCompoent/GetinTouch"),
  {
    ssr: false
  }
);

const Footer = dynamic(
  () => import("../components/Newcomponet/layout/Footer"),
  {
    ssr: false,
  }
);


/* ================= GLOBAL LAYOUT SHELL ================= */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const isLandingPage = pathname === "/food-delivery-app";

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden">

      {!isLandingPage && (
        <header className="h-[52px] w-full overflow-hidden">
          <div className="fixed top-0 left-0 w-full h-[60px] z-50 bg-white">
            <Navbar />
          </div>
        </header>
      )}

      {/* NAVBAR */}
      {/* <header className="h-[52px] w-full overflow-hidden">
        <div className="fixed top-0 left-0 w-full h-[60px] z-50 bg-white">
          <Navbar />
        </div>
      </header> */}

      {/* ✅ FIXED CONTENT SHIFT */}
      <main className={`pt-[11px] w-full ${isLandingPage ? "max-w-full" : "max-w-[1600px] mx-auto"
        }`}>

        <div className="w-full">
          {children}
        </div>

        {/* CTA */}
        {/* <section className="w-full">
          <div className="min-h-[420px] md:min-h-[380px]">
            <GetinTouch />
          </div>
        </section> */}
        {!isLandingPage && (
          <section className="w-full">
            <div className="min-h-[420px] md:min-h-[380px]">
              <GetinTouch />
            </div>
          </section>
        )}

        {/* FOOTER */}
        {/* <footer className="w-full min-h-[300px]">
          <Footer />
        </footer> */}


        {!isLandingPage && (
          <footer className="w-full min-h-[300px]">
            <Footer />
          </footer>
        )}

      </main>

      {/* CLIENT TOOLS */}
      <LazyClientTools />

    </div>
  );
}

