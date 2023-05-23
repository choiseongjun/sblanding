import Head from "next/head";
import SeSlider from "@/components/home/SeSlider";
import SecondInfo from "@/components/info/SecondInfo";
import StockInfo from "@/components/stockInfo/StockInfo";
import Board from "@/components/board/Board";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
// import FBanner from "@/components/fbanner/FBanner";
import Navigation from "@/components/nav/Navigation";
import ProfitIncome from "@/components/profitIncome/ProfitIncome";
import QuntApply from "@/components/stockInfo/QuntApply";
import Intro from "@/components/Intro/Intro";
import { isMobile, isDesktop } from "react-device-detect";

import React from "react";
import ProfitIncome2 from "@/components/profitIncome/ProfitIncome2";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import StockTwo from "@/components/stockInfo/StockTwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VipSlide from "@/components/VipSlide/VipSlide";
import Script from "next/script";
// import Ltinker from "@/components/tinker/Ltinker";
const FBanner = React.lazy(() => import("@/components/fbanner/FBanner"));
const FBannerM = React.lazy(() => import("@/components/fbanner/FBannerM"));

const myFunction = ` window._tfa = window._tfa || [];
window._tfa.push({ notify: "event", name: "page_view", id: 1551338 });
!(function (t, f, a, x) {
  if (!document.getElementById(x)) {
    t.async = 1;
    t.src = a;
    t.id = x;
    f.parentNode.insertBefore(t, f);
  }
})(
  document.createElement("script"),
  document.getElementsByTagName("script")[0],
  "//cdn.taboola.com/libtrc/unip/1551338/tfa.js",
  "tb_tfa_script"
);
_tfa.push({ notify: "event", name: "lead", id: 1551338 });
`;

export default function Home({ title, description, url, keyword }: any) {
  const [open, setOpen] = useState(true);
  const [boards, setBoards] = useState([]);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const getBoard = () => {
    axios.get("/v1/board/3/latest").then((res) => {
      setBoards(res.data);
    });
  };
  useEffect(() => {
    getBoard();
  }, []);
  return (
    <>
      <Head>
        <title>SB GLOBAL 투자그룹</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={title ? title : "SB GLOBAL 투자그룹"}
        />
        <meta property="og:description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} key="ogsitename" />
        <meta property="og:article:author" content="SB GLOBAL 투자그룹" />
        <meta property="og:url" content={url} key="ogurl" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        {/* <script type="text/javascript" src="/adverties.js"></script> */}
        <script dangerouslySetInnerHTML={{ __html: myFunction }}></script>
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-JKJ7D0NYT6`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JKJ7D0NYT6', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main id="home" style={{ backgroundColor: "#fff" }}>
        
        <Navigation />
        {isDesktop && (
          <Modal open={open} onClose={onCloseModal} center>
            <div>
              {isDesktop && <img src="/static/images/notice.jpeg"></img>}
              {/* {isMobile && <img src="/static/images/mNotice.jpeg"></img>} */}
              <a
                href="#"
                onClick={() => {
                  window.open("https://open.kakao.com/me/shon04Se", "_blank");
                }}
              >
                {isDesktop ? (
                  <button
                    style={{
                      position: "absolute",
                      bottom: "2%",
                      right: "36%",
                      backgroundColor: "#f25700",
                      color: "yellow",
                      fontFamily: "GmarketSansMedium",
                      padding: 15,
                    }}
                  >
                    1:1 카톡 상담하기{" "}
                  </button>
                ) : (
                  <></>
                  // <button
                  //   style={{
                  //     position: "absolute",
                  //     bottom: "2%",
                  //     right: "20%",
                  //     backgroundColor: "#000",
                  //     color: "orange",
                  //     padding: 5,
                  //   }}
                  // >
                  //   1:1 카톡 상담가능{" "}
                  // </button>
                )}
              </a>
            </div>
          </Modal>
        )}
        {/* <FBanner /> */}
        {/* {domLoaded && <VipSlide />} */}
        {domLoaded && <Intro />}
        {/* {boards.length > 0 && <StockTwo title="한줄평 후기" data1={boards} />} */}
        {domLoaded && (
          <>
            {/* <ProfitIncome />
            <ProfitIncome2 />
            <SecondInfo />
            <StockInfo />
            <Board />
            <FBannerM /> */}
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
Home.getInitialProps = () => {
  return {
    title:
      "sb글로벌 - 콕스톡,주식종목추천,주식추천,공모주,공모주청약,종목추천,급등주추천,단타종목추천,시가추천,종가추천,시가매매추천,종가매매추천,단타매매추천,주식추천문자",
    description:
      "콕스톡,주식종목추천,주식추천,공모주,공모주청약,종목추천,급등주추천,단타종목추천,시가추천,종가추천,시가매매추천,종가매매추천,단타매매추천,주식추천문자",
    url: "https://sbglobalstock.co.kr/",
    keyword:
      "투자,주식투자,주식,비트코인,선물,급등주,이차전지,바이오,콕스톡,주식종목추천,주식추천,공모주,공모주청약,종목추천,급등주추천,단타종목추천,시가추천,종가추천,시가매매추천,종가매매추천,단타매매추천,주식추천문자",
  };
};
