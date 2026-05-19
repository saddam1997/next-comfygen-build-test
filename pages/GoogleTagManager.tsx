import { useEffect } from "react";

const GTM_ID = "GTM-5K96GNBB";
export default function GoogleTagManager() {
  useEffect(() => {
    const loadGTM = () => {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      script.async = true;
      document.head.appendChild(script);
    };

    window.addEventListener("scroll", loadGTM, { once: true });
    window.addEventListener("click", loadGTM, { once: true });
  }, []);

  return null;
}

