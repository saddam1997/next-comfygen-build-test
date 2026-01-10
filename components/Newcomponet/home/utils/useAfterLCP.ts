"use client";

import { useEffect, useState } from "react";

export function useAfterLCP(pathname: string, footerConfig: any) {
  const [show, setShow] = useState(false);
  const [showTop, setShowTop] = useState(false);

//   // Load AFTER idle (LCP safe)
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => setShow(true));
    } else {
      setTimeout(() => setShow(true), 2000);
    }
  }, []);

  const matchesAny = (routes: string[]) =>
    routes.some((r) => pathname.includes(r));

  return {
    show,
    showTop,
    showBlockchainFooter: matchesAny(footerConfig.blockchain),
    showEcommerceFooter: matchesAny(footerConfig.ecommerce),
    isExcluded: matchesAny(footerConfig.excluded),
  };
}
