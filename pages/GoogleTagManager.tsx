import { useEffect } from "react";
import { useRouter } from "next/router";

const GTM_ID = "GTM-M6QT7LCW";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function GoogleTagManager() {
  const router = useRouter();

  // Load GTM lazily
  useEffect(() => {
    const loadGTM = () => {
      if (document.getElementById("gtm-script")) return;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "gtm.js",
        "gtm.start": Date.now(),
      });

      const script = document.createElement("script");
      script.id = "gtm-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(loadGTM);
    } else {
      setTimeout(loadGTM, 3500);
    }
  }, []);

  // SPA pageview tracking
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.dataLayer?.push({
        event: "pageview",
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () =>
      router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return null;
}
