import React from "react";
import style from "./nav.module.css";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div>SB GLOBAL</div>
        <div className={style.rightBox}>
          <div>
            {" "}
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={100}
            >
              홈
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="companyIntro"
              spy={true}
              smooth={true}
              duration={100}
              offset={-50}
            >
              회사소개
            </Link>
          </div>
          <div>
            <a
              href="#"
              onClick={() => {
                window.open("https://sbstock.kr/", "_blank");
              }}
            >
              무료상담 신청하기
            </a>
          </div>
          <div>
            <Link
              activeClass="active"
              to="hugi"
              spy={true}
              smooth={true}
              duration={100}
              offset={-150}
            >
              수익률 인증
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="qna"
              spy={true}
              smooth={true}
              duration={100}
            >
              자주하는 질문
            </Link>
          </div>
          <div>
            <Link
              activeClass="active"
              to="qna"
              spy={true}
              smooth={true}
              duration={100}
            >
              공지사항
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;