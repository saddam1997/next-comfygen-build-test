import React from "react";
import { useEffect } from 'react';
import Head from "next/head";
import Router from "next/router";

export default function Clinical() {


  useEffect(() => {
    const { pathname } = Router
    if (pathname == '/clinical-app-development') {
      Router.push('clinical-application-development')
    }
  });


}