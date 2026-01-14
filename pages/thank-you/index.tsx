import Head from "next/head";
export default function Ecommerce() {
  return (
    <>
     <Head>
        <title>
          Thank You | Comfygen
        </title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="thank-you" />
      </Head>
      <div className="container mx-auto p-6">
        <div>
   
        </div>
        <section className="text-center mb-12 bg-center bg-no-repeat bg-cover rounded-md bg-gradient-to-t from-blue-500 to-purple-600 text-white py-4">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-base text-white">
            Thank you for choosing us. Just like the right company, one of our
            right people will get back to you ASAP!
          </p>
          <p className="mt-2 font-semibold text-xl">Comfygen</p>
        </section>
      </div>
    </>
  );
}

