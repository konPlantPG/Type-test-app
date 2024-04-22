import "../configureAmplify.js"
import '../styles/globals.css';
import React from 'react';
import type { AppProps } from "next/app";
import Header from "./Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}