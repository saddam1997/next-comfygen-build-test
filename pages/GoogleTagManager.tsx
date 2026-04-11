import { useEffect } from "react";

const GTM_ID = "GTM-M6QT7LCW";

// export default function GoogleTagManager() {
//   useEffect(() => {
//     const loadGTM = () => {
//       const script = document.createElement("script");
//       script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
//       script.async = true;
//       document.head.appendChild(script);
//     };

//     window.addEventListener("scroll", loadGTM, { once: true });
//     window.addEventListener("click", loadGTM, { once: true });
//   }, []);

//   return null;
// }



export default function GoogleTagManager() {
  useEffect(() => {
    let isLoaded = false;

    const loadGTM = () => {
      if (isLoaded) return;
      isLoaded = true;

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      script.async = true;
      document.head.appendChild(script);
    };

    window.addEventListener("scroll", loadGTM);
    window.addEventListener("click", loadGTM);

    return () => {
      window.removeEventListener("scroll", loadGTM);
      window.removeEventListener("click", loadGTM);
    };
  }, []);

  return null;
}

