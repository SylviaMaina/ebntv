import React, { useEffect } from "react";
import { Layout } from "../Components/index";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import {initGA, logPageView} from "../analytics"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {

initGA()
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
