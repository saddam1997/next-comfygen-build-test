import { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

// const isProduction = process.env.NODE_ENV === "production";
export default function Document() {


  return (
    <Html lang='en'>
      <Head>
        {/* Charset & compatibility */}
        <meta charSet="utf-8" />
        {/* Fonts */}


        <meta name="msvalidate.01" content="88C9F762357EB27E860762AE43E1BDF7" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        {/* Viewport & Mobile Meta */}
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

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        /> */}


        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M6QT7LCW');
            `,
          }}
        />
      </Head>




      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}