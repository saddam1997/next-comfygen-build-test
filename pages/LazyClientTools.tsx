import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Talkchat = dynamic(
  () => import("../components/Newcomponet/layout/Talkchat"),
  { ssr: false }
);

const ContactLinks = dynamic(
  () => import("../components/Newcomponet/comman/ContactLinks"),
  { ssr: false }
);



export default function LazyClientTools() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const trigger = () => setLoad(true);

    window.addEventListener("scroll", trigger, { once: true });
    window.addEventListener("mousemove", trigger, { once: true });
    window.addEventListener("touchstart", trigger, { once: true });

    return () => {
      window.removeEventListener("scroll", trigger);
      window.removeEventListener("mousemove", trigger);
      window.removeEventListener("touchstart", trigger);
    };
  }, []);

  if (!load) return null;

  return (
    <>
      {load && (
        <>
          <div className="fixed bottom-5 left-5 z-50 w-[50px] h-[50px]">
            <ContactLinks />
          </div>

          <div className="fixed bottom-5 right-5 z-50 w-[50px] h-[50px]">
            <Talkchat />
          </div>
        </>
      )}

    </>
  );
}
