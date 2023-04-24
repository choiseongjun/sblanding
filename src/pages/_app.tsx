import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";
import Head from "next/head";

export default function App({
  Component,
  pageProps,
  title,
  description,
  url,
  keyword,
}: any) {
  axios.defaults.baseURL = "https://sbstock.co.kr/";
  // axios.defaults.baseURL = "http://localhost:8080"
  return (
    <>
      <Head>
        <title>SB GLOBAL 투자그룹</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={title ? title : "Fashion Style Map"}
        />
        <meta property="og:description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} key="ogsitename" />
        <meta property="og:article:author" content="FashionStyleMap" />
        <meta property="og:url" content={url} key="ogurl" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
App.getInitialProps = () => {
  return {
    title: "SB GLOBAL 투자그룹",
    description: "SB GLOBAL 투자그룹.",
    url: "https://sbglobalstock.co.kr/",
    keyword: "투자,주식투자,주식,비트코인,선물,급등주,이차전,바이오",
  };
};
