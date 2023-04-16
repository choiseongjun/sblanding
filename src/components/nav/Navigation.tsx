import React from "react";
import style from "./nav.module.css";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div>SB GLOBAL</div>
        <div className={style.rightBox}>
          <div>홈</div>
          <div>회사소개</div>
          <div>
            <a
              href="#"
              onClick={() => {
                window.open("https://sbstock.kr/", "_blank");
              }}
            >
              서비스 신청하기
            </a>
          </div>
          <div>후기</div>
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
