import Script from 'next/script';
import { useEffect, useState } from 'react';

function LazyLoadTawkTo() {
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    // Set a timeout to load the script after a delay (e.g., 1 second)
    const scriptTimeout = setTimeout(() => {
      setLoadScript(true);
    }, 2000); // 1-second delay

    // Clear the timeout if the component unmounts before the delay is over
    return () => clearTimeout(scriptTimeout);
  }, []);

  return (
    <>
      {loadScript && (
        <Script id="tawk" strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || { };
            var Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/6284ec70b0d10b6f3e72d93b/1g3bjn6t7';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      )}
    </>
  );
}

export default LazyLoadTawkTo;

