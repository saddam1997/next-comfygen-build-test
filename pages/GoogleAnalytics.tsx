// import { useRouter } from 'next/router';
// import Script from 'next/script';
// import { useEffect } from 'react';
// const GA_TRACKING_ID = 'UA-228613134-1';


// const addPageView = (url) => {

//   window.gtag('config', GA_TRACKING_ID, {
//     page_path: url,
//   });
// };

// const GoogleAnalytics = () => {
//   const router = useRouter();

//   useEffect(() => {

//     const handleRouteChange = (url) => {
//       addPageView(url);
//     };
//     router.events.on('routeChangeComplete', handleRouteChange);
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);
//   return (
//     <>
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=UA-228613134-1`}
//       />
//       <Script
//         id="gtag-init"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
//       gtag('config', 'UA-228613134-1', {
//         page_path: window.location.pathname,
//       });
//     `,
//         }}
//       />
//     </>
//   );
// };

// export default GoogleAnalytics;





import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
const GA_TRACKING_ID = 'UA-228613134-1';

// @ts-ignore
const addPageView = (url) => {
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      setTimeout(() => {
        addPageView(url);
      }, 3000);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-228613134-1`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-228613134-1', {
        page_path: window.location.pathname,
      });
    `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
