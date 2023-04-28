import React from "react";
// import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./SeSlider.module.css";
import Link from "next/link";
import { blob } from "stream/consumers";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const SeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} dotsClass="dots-css">
      <div>
        <div>
          <div className="customSlide1">
            <div className="txt_wrap txt_green">
              <div className={style.cir_tx2}>
                <div className={style.tx2_title}>
                  <div style={{ textAlign: "center" }}>
                    고점과 저점을 <div>파악하여 알려주는</div>
                  </div>
                  <div style={{ textAlign: "center" }} className={style.orange}>
                    주식차트 알리미
                  </div>
                </div>
                <div className={style.cir2Box}>
                  <div className={style.cir2}>
                    <div>잊기쉬운 타점을</div>
                    알림으로 미리 대응!!
                  </div>
                  <div className={style.cir2}>
                    <div>
                      <a
                        href="#"
                        style={{ color: "#f0ab27", fontWeight: "bold" }}
                        onClick={() => {
                          window.open("https://sbstock.kr/", "_blank");
                        }}
                      >
                        2주 무료체험 <div>신청하기</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="customSlide2">
            <div>
              <div className={style.mainCenter}>
                <div className={style.mainTitle}>
                  <b className={style.orange}>초보</b>
                  <b className="fWhite">·</b>
                  <b className={style.orange}>직장인 투자자</b>를 위한
                  <br />
                  주식종목 <br />
                  추천서비스
                </div>
              </div>

              <div className={style.cir_tx}>
                <div className={style.cir2}>
                  <div>
                    <div>이번년도 봐야할</div>
                    <div>
                      <span className={style.orange}>섹터는</span>{" "}
                    </div>
                    이미 <span className={style.orange}>정해져있다!</span>
                  </div>
                  <div>상승할 종목을 추천해드립니다.</div>
                  <img
                    className={style.robot}
                    // style={{ position: "absolute", bottom: -180, left: "-15%" }}
                    // src="/static/images/main1.png"
                    // src="https://www.kokstock.com/images/renewal/main/hand2.png"
                  />
                </div>
                <div className={style.cir2}>
                  <div>
                    합리적인 <span className={style.orange}>가격</span>
                  </div>
                  <div>
                    {" "}
                    <a
                      href="#"
                      style={{ color: "#f0ab27", fontWeight: "bold" }}
                      onClick={() => {
                        window.open("https://sbstock.kr/", "_blank");
                      }}
                    >
                      ▶담당자와 상담하기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="customSlide3">
            {/* <img
              style={{ position: "absolute", bottom: -200, left: 60 }}
              src="https://www.kokstock.com/images/renewal/main/vis3_img2.png"
            />
            <img
              style={{ position: "absolute", bottom: -230, left: 1300 }}
              src="https://www.kokstock.com/images/renewal/main/vis3_img3.png"
            /> */}
            <div className="txt_wrap txt_green">
              <div className={style.cir_tx2}>
                <div className={style.tx2_title}>
                  <div style={{ textAlign: "center" }}>
                    고객들의 <div>눈높이에 맞춰</div>
                  </div>
                  <div style={{ textAlign: "center" }} className={style.orange}>
                    진행되는 <div>솔루션</div>
                  </div>
                </div>
                <div className={style.cir2Box}>
                  <div className={style.cir2}>
                    <div>
                      단타<span>·</span>스윙
                    </div>
                    <div>고객님들의</div>
                    <div>투자성향</div>
                    <div>
                      프라이빗 <span>1:1컨설팅</span>
                    </div>
                  </div>
                  <div className={style.cir2}>
                    <a
                      href="#"
                      style={{ color: style.orange }}
                      onClick={() => {
                        window.open("https://sbstock.kr/", "_blank");
                      }}
                    >
                      <div>
                        2주간 <span> 체험</span>
                      </div>

                      {/* <div>
                        <span className="vat">(VAT별도)</span>
                      </div> */}
                      <div>
                        자세히보기 <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
  );
};

export default SeSlider;
