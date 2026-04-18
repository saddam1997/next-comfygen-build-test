import { Html, Head, Main, NextScript } from 'next/document';

// const GTM_ID = "GTM-M6QT7LCW";

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
        <meta name="robots" content="MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, INDEX, FOLLOW" />
        <meta name="author" content="Comfygen Technologies" />
        <meta name="copyright" content="Comfygen Technologies" />


      </Head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5K96GNBB"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>   */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}