import React, { useEffect, useState } from "react";
import style from "./profileincome.module.css";
import { useInterval } from "./useInterval";
const ProfitIncome2 = () => {
  return (
    <div id="hugi" className={style.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginTop: 25, marginBottom: 25 }} className={style.Title}>
          {/* 오늘의 <strong>테마</strong>종목 */}
          <strong>실고객 카톡 후기</strong>
        </h2>
      </div>
      <div className={style.profitBox}>
        <img src="/static/images/profit3.jpg" alt="" />
      </div>
    </div>
  );
};

export default ProfitIncome2;
