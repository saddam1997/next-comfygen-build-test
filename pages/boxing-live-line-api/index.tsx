import { useEffect } from 'react';
import Router from "next/router";

export default function Altcoin() {
  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/boxing-live-line-api') {
      Router.push('/cricket-live-line-api')
    }
  });


}