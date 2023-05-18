import React from "react";
import style from "./StockInfo.module.css";

const QuntApply = () => {
  return (
      <div onClick={() => quantbox(window.open("https://quantbox.kr", "_blank"))} 
        className={style.imgCenter}>
        <img src="/static/images/quntapply.jpeg" />
        
        
    </div>
  );
};

