import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const isProduction = process.env.NODE_ENV === "production";
export default function Document() {
  return (
    <Html lang='en'>
      <Head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          // rel="stylesheet"
          rel="preload"
          as="style"
        />

        {/* <script strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-228613134-1`}
        />
        <script  id="gtag-init" strategy="afterInteractive"
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
        /> */}
        <meta name="msvalidate.01" content="88C9F762357EB27E860762AE43E1BDF7" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}