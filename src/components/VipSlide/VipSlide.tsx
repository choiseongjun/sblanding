import React from "react";
import style from "./VipSlide.module.css";
// import Slider from "react-slick";
import dynamic from "next/dynamic";
import { isMobile, isDesktop } from "react-device-detect";
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});
const VipSlide = () => {
  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <div className={style.box}>
        <img
          style={{ backgroundColor: "black" }}
          src="https://keunson.kr/images/renew/vip-on-txt.png"
        />
        <div className={style.box2}>
          <div className={style.title}>지금까지</div>
          <div className={style.title2First}>8</div>
          <div className={style.title2}>2</div>
          <div className={style.title2}>9</div>
          <div className={style.title2}>0</div>
          <div className={style.title2}>9</div>
          <div className={style.title}>가입!</div>
        </div>
      </div>
      <div className={style.vipSlider}>
        <Slider {...settings1}>
          <div className={style.sliderBox}>
            <div className={style.sliderTitle}>
              <div>이**회원님</div>
              <div className={style.joinComple}>신규등록</div>
            </div>
          </div>
          <div>
            <div className={style.sliderTitle}>
              <div>박**회원님</div>
              <div className={style.joinComple}>신규등록</div>
            </div>
          </div>
          <div className={style.sliderBox}>
            <div className={style.sliderTitle}>
              <div>김**회원님</div>
              <div className={style.rejoinComple}>재등록</div>
            </div>
          </div>
          <div>
            <div className={style.sliderTitle}>
              <div>성**회원님</div>
              <div className={style.rejoinComple}>재등록</div>
            </div>
          </div>
          <div>
            <div className={style.sliderTitle}>
              <div>박**회원님</div>
              <div className={style.joinComple}>신규등록</div>
            </div>
          </div>
          <div>
            <div className={style.sliderTitle}>
              <div>최**회원님</div>
              <div className={style.rejoinComple}>재등록</div>
            </div>
          </div>
          <div>
            <div className={style.sliderTitle}>
              <div>성**회원님</div>
              <div className={style.rejoinComple}>재등록</div>
            </div>
          </div>
          <div>
            <div className={style.sliderTitle}>
              <div>김**회원님</div>
              <div className={style.rejoinComple}>재등록</div>
            </div>
          </div>
          <div>
            <div className={style.sliderTitle}>
              <div>최**회원님</div>
              <div className={style.joinComple}>신규등록</div>
            </div>
          </div>
          <div>
            <div className={style.sliderTitle}>
              <div>성**회원님</div>
              <div className={style.joinComple}>신규등록</div>
            </div>
          </div>
          <div>
            <div className={style.sliderTitle}>
              <div>최**회원님</div>
              <div className={style.joinComple}>신규등록</div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default VipSlide;
