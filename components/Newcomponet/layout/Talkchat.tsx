import { useEffect } from "react";

export default function Talkchat() {
  useEffect(() => {
    const loadTawk = () => {
      if (document.getElementById("tawk-script")) return;

      const s1 = document.createElement("script");
      s1.id = "tawk-script";
      s1.async = true;
      s1.src =
        "https://embed.tawk.to/6284ec70b0d10b6f3e72d93b/1g3bjn6t7";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");

      document.body.appendChild(s1);
    };

    const onFirstInteraction = () => {
      loadTawk();
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("mousemove", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
    };

    window.addEventListener("scroll", onFirstInteraction, { once: true });
    window.addEventListener("mousemove", onFirstInteraction, { once: true });
    window.addEventListener("touchstart", onFirstInteraction, { once: true });
  }, []);

  return null;
}
