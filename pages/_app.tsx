import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import React from "react";
import { LikedStore } from "../components/liked/LikedStore";
import "./styles.css";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <LikedStore>
        <Component {...pageProps} />
      </LikedStore>
    </Layout>
  );
};

export default MyApp;
