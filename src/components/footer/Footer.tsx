import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.company}>
        <div>(주)SB글로벌</div>
        <div>Copyright © 2022 SB글로벌</div>
      </div>
      <div className={style.innerContainer}>
        <div>(주)SB글로벌 | 대표이사 엄원택</div>
        <div>사업자등록번호 101-81-64285</div>
        <div>통신판매업신고 제2013-서울구로-0102호 </div>
        <div>경기 고양시 대자동 </div>
        <div>멤버 서비스이용약관 / 개인정보취급방침 </div>
      </div>
    </div>
  );
};

export default Footer;
