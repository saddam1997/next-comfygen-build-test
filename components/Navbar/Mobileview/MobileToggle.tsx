

import { useEffect } from "react";

export default function MobileToggle() {
  useEffect(() => {
    const menu = document.getElementById("menu");

    const toggle = () => {
      if (!menu) return;

      const isOpen = !menu.classList.contains("hidden");

      if (isOpen) {
        menu.classList.add("hidden");
        document.body.style.overflow = "";
      } else {
        menu.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }
    };

    const openBtn = document.querySelector(".open-menu");
    const overlay = document.querySelector(".overlay");

    openBtn?.addEventListener("click", toggle);
    overlay?.addEventListener("click", toggle);

    return () => {
      openBtn?.removeEventListener("click", toggle);
      overlay?.removeEventListener("click", toggle);
    };
  }, []);

  return (
    <button className="open-menu p-2 bg-gray-100 rounded">
      ☰
    </button>
  );
}