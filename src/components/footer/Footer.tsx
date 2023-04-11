import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div>(주)SB글로벌 | 대표이사 송승한</div>
        <div>사업자등록번호 101-81-64285</div>
        <div>통신판매업신고 제2013-서울구로-0102호 </div>
        <div>경기 고양시 대자동 </div>
      </div>
    </div>
  );
};

export default Footer;
