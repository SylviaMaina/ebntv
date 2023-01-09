import React, { useEffect, useState } from "react";
import { Layout } from "../components/Index";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
