import { useEffect } from "react";
import { useRouter } from "next/router";

const GA_ID = "G-YNT54R0V73";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const router = useRouter();

  /* ===============================
     Lazy-load GA after page idle
  =============================== */
  useEffect(() => {
    const loadGA = () => {
      if (document.getElementById("ga-script")) return;

      // Init dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };

      window.gtag("js", new Date());

      const script = document.createElement("script");
      script.id = "ga-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);

      window.gtag("config", GA_ID, {
        send_page_view: false, // SPA handled manually
      });
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(loadGA);
    } else {
      setTimeout(loadGA, 3000);
    }
  }, []);

  /* ===============================
     SPA Pageview Tracking
  =============================== */
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag?.("event", "page_view", {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () =>
      router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return null;
}
