import React from "react";
import style from "./nav.module.css";

const Navigation = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div>SB GLOBAL</div>
        <div className={style.rightBox}>
          <div>홈</div>
          <div>회사소개</div>
          <div>서비스 신청하기</div>
          <div>후기</div>

          <div>자주하는 질문</div>
          <div>공지사항</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
