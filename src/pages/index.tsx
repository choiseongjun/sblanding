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
// import Ltinker from "@/components/tinker/Ltinker";
const FBanner = React.lazy(() => import("@/components/fbanner/FBanner"));
const FBannerM = React.lazy(() => import("@/components/fbanner/FBannerM"));

export default function Home({ title, description, url, keyword }: any) {
  const [open, setOpen] = useState(true);
  const [boards, setBoards] = useState([]);

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
          content={title ? title : "Fashion Style Map"}
        />
        <meta property="og:description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} key="ogsitename" />
        <meta property="og:article:author" content="FashionStyleMap" />
        <meta property="og:url" content={url} key="ogurl" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
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
                      backgroundColor: "#000",
                      color: "yellow",
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
        <FBanner />
        <SeSlider />
        {boards.length > 0 && <StockTwo title="한줄평 후기" data1={boards} />}
        <ProfitIncome />
        <ProfitIncome2 />

        <Intro />
        <SecondInfo />

        <StockInfo />
        <Board />

        <FBannerM />

        <Footer />
      </main>
    </>
  );
}
Home.getInitialProps = () => {
  return {
    title: "SB GLOBAL 투자그룹",
    description: "SB GLOBAL 투자그룹.",
    url: "https://sbglobalstock.co.kr/",
    keyword: "투자,주식투자,주식,비트코인,선물,급등주,이차전,바이오",
  };
};
