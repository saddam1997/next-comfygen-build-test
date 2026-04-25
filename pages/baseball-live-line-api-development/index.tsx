export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/cricket-live-line-api",
      permanent: true, // SEO friendly (301)
    },
  };
}

export default function Page() {
  return null;
}
























// import React from "react";
// import { useEffect } from 'react';
// import Router from "next/router";

// export default function Altcoin() {


//   useEffect(() => {
//     const { pathname } = Router
//     if (pathname == '/baseball-live-line-api-development') {
//       Router.push('/cricket-live-line-api')
//     }
//   });


// }
