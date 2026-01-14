declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

const GA_ID = "G-YNT54R0V73";

export default function GoogleAnalytics() {
  const router = useRouter();

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

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />

      <Script id="ga-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
