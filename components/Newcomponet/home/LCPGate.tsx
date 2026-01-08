"use client";

import { useEffect, useState } from "react";

export default function LCPGate({
  children,
  delay = 2000,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Run AFTER LCP + browser idle
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => setShow(true));
    } else {
      setTimeout(() => setShow(true), delay);
    }
  }, [delay]);

  if (!show) return null;
  return <>{children}</>;
}
