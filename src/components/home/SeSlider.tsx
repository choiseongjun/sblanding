import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./SeSlider.module.css";

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
    autoplaySpeed: 2000,

    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} dotsClass="dots-css">
      <div>
        <div>
          <div className="customSlide1">
            <div className={style.mainCenter}>
              <div className={style.mainTitle}>
                <b className={style.orange}>초보</b>
                <b className="fWhite">·</b>
                <b className={style.orange}>직장인 투자자</b>를 위한
                <br />
                주식종목 추천서비스
              </div>
            </div>

            <div className={style.cir_tx}>
              <div className={style.cir}>
                <div>
                  이번년도 봐야할 
                  <span className={style.orange}>섹터는</span> 이미{" "}
                  <span className={style.orange}>정해져있다!</span>
                </div>
                <div>상승할 종목을 추천해드립니다.</div>
                <img
                  className={style.robot}
                  // style={{ position: "absolute", bottom: -180, left: "-15%" }}
                  // src="/static/images/main1.png"
                  // src="https://www.kokstock.com/images/renewal/main/hand2.png"
                />
              </div>
              <div className={style.cir}>
                <div>
                  합리적인 <span className={style.orange}>가격</span>
                </div>
                <div>월 2만원 (VAT별도)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="customSlide2">
            <div className="txt_wrap txt_green">
              <div className={style.cir_tx2}>
                <div className={style.tx2_title}>
                  <div>고점과 저점을 파악하여 알려주는</div>
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
                    <div>2주 무료체험 신청하기</div>
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
                  <div>장중 빠른 대응이 가능한</div>
                  <div className={style.orange}>중급자를 위한 솔루션</div>
                </div>
                <div className={style.cir2Box}>
                  <div className={style.cir2}>
                    <div>
                      시가<span>·</span>종가매매
                    </div>
                    <div>
                      장시작전 <span>10분</span>
                    </div>
                    <div>
                      장마감전 <span>10분</span>
                    </div>
                  </div>
                  <div className={style.cir2}>
                    <div>
                      1개월 <span>2만원</span>
                    </div>
                    <div>
                      <span className="vat">(VAT별도)</span>
                    </div>
                    <div>
                      자세히보기 <i className="fa fa-arrow-right"></i>
                    </div>
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
