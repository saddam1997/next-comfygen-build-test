"use client";

import Header from "../../../super-admin-components/header";
import React, { useEffect, useState } from "react";
import SidebarLink from "../../../super-admin-components/sidebarLink";
import { useRouter } from "next/router";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

function ProtectedLayoutWrapper({ children }: ProtectedLayoutProps) {
  const [selectedPage, setSelectedPage] = useState("");
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const checkLocalData = sessionStorage.getItem("adminUser");
      if (!checkLocalData) {
        window.location.href = "/super-admin/login";
      }
      // setIsSidebarHidden(window.location.pathname === "/super-admin/page-management/allcomponents");
    }
  }, []);
  useEffect(() => {
    setIsSidebar(router.pathname != "/super-admin/page-manag/components");
  }, [router]);

  if (!isClient) return null;

  return (
    <div className="overflow-hidden bg-[#ffffff]">
      <div className="flex h-screen w-full">
        {isSidebar && <div className=" md:min-w-80">
          {!isSidebarHidden && (
            <SidebarLink setSelectedPage={setSelectedPage} />
          )}
        </div>}
        <div
          className={`flex flex-col flex-1 w-full ${!isSidebarHidden ? "" : ""}`}
        >
          <Header isSidebar={isSidebar} selectedPage={selectedPage} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default ProtectedLayoutWrapper;
