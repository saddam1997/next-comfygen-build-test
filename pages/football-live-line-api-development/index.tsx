import { useEffect } from 'react';
import Router from "next/router";

export default function Altcoin() {
  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/football-live-line-api-development') {
      Router.push('/cricket-live-line-api')
    }
  });


}