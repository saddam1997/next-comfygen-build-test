// TabsScript.tsx
"use client";

import { useEffect } from "react";

export default function TabsScript() {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-tab-btn]");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {

        contents.forEach(el => el.classList.add("hidden"));
        buttons.forEach(b => b.classList.remove("active"));

        contents[index].classList.remove("hidden");
        btn.classList.add("active");

      });
    });
  }, []);

  return null;
}