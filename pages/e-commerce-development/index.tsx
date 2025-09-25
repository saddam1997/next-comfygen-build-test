import { useEffect } from 'react';
import Router from "next/router";

export default function Ecommerce() {


  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/e-commerce-development') {
      Router.push('/e-commerce-app-development')
    }
  });


}