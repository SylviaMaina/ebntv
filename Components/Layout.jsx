import React from "react";
import { Header } from "./index";
import Head from "next/head";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q2FZ4VC3VG"></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q2FZ4VC3VG');
        `}
      </Script>

      <Header />
      {children}
    </>
  );
};

export default Layout;
