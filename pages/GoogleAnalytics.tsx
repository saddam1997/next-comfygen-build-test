declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const GA_ID = "G-YNT54R0V73";

export default function GoogleAnalytics() {
  const router = useRouter();
  const isLoaded = useRef(false);

  // 1️⃣ Load GA only after interaction
  useEffect(() => {
    const loadGA = () => {
      if (isLoaded.current) return;
      isLoaded.current = true;

      // gtag.js
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // gtag init
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer!.push(arguments);
      };

      window.gtag("js", new Date());
      window.gtag("config", GA_ID, { send_page_view: false });
    };

    window.addEventListener("scroll", loadGA, { once: true });
    window.addEventListener("click", loadGA, { once: true });

    return () => {
      window.removeEventListener("scroll", loadGA);
      window.removeEventListener("click", loadGA);
    };
  }, []);

  // 2️⃣ SPA Pageview Tracking (same as your code)
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!window.gtag) return;

      window.gtag("event", "page_view", {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () =>
      router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return null;
}
