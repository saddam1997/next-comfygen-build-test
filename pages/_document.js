import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
// import GoogleTagManager from "./GoogleTagManager";
// import GoogleTagManagerNoScript from "./GoogleTagManagerNoScript";

const jsonLdData = [

  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Comfygen Technologies",
    "image": "https://www.comfygen.com/svg/Logo1.svg",
    "@id": "Comfygen Technologies",
    "url": "https://www.comfygen.com/",
    "telephone": "+91-958-786-7258",
    "priceRange": "$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "A-20 Basement, Samridhi Enclave, Ajmer Rd, Modi Nagar ",
        "addressLocality": "Jaipur",
        "postalCode": "302006",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "40 Tuxedo Ct, Toronto, ON M1G 3S7 ",
        "addressLocality": "Toronto",
        "postalCode": "M1G3S7",
        "addressCountry": "Canada"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Rhederstraße 34, 53881 Euskirchen, Germany ",
        "addressLocality": "Euskirchen",
        "postalCode": "53881",
        "addressCountry": "Germany"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/comfygen.technologies",
      "https://x.com/Comfygen_Tech",
      "https://www.instagram.com/comfygen_technologies",
      "https://www.linkedin.com/company/comfygen-technologies",
      "https://in.pinterest.com/ComfygenTechnologies/",
      "https://www.youtube.com/@Comfygentechnologies",
      "https://www.comfygen.com/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Comfygen Technologies",
    "image": "https://www.comfygen.com/svg/Logo1.svg",
    "email": "sales@comfygen.com",
    "url": "https://www.comfygen.com/",
    "founders": [
      {
        "@type": "Person",
        "name": "Saddam Husen"
      }
    ],
    "logo": "https://www.comfygen.com/svg/Logo1.svg",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1 579-977-4475",
        "contactType": "sales",
        "areaServed": "US",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1 579-977-4475",
        "contactType": "sales",
        "areaServed": "CA",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9587867258",
        "contactType": "sales",
        "areaServed": "UK",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 9587867258",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+49-1515-1402200",
        "contactType": "sales",
        "areaServed": "DE",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 9587867258",
        "contactType": "sales",
        "areaServed": "AE",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 9587867258",
        "contactType": "sales",
        "areaServed": "SA",
        "availableLanguage": "en"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 9587867258",
        "contactType": "sales",
        "areaServed": "AU",
        "availableLanguage": "en"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/comfygen.technologies",
      "https://x.com/Comfygen_Tech",
      "https://www.instagram.com/comfygen_technologies",
      "https://www.linkedin.com/company/comfygen-technologies",
      "https://in.pinterest.com/ComfygenTechnologies/",
      "https://www.youtube.com/@Comfygentechnologies"
    ]
  }




]


const GTM_ID = "GTM-M6QT7LCW";

export default function Document() {


  return (
    <Html lang='en'>
      <Head>
        <meta charSet="utf-8" />
        <meta name="msvalidate.01" content="88C9F762357EB27E860762AE43E1BDF7" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport-fit" content="cover" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5556D1" />
        <meta name="apple-mobile-web-app-title" content="Comfygen Technologies" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Comfygen Technologies" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />

        <Script
          id="LocalBusiness-schema"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
        {/* <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_ID}');
                `,
          }}
        /> */}
        {/* <GoogleTagManager /> */}
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <GoogleTagManagerNoScript /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}