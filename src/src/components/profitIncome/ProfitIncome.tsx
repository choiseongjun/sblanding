import React, { useEffect, useState } from "react";
import style from "./profileincome.module.css";
import { useInterval } from "./useInterval";
const ProfitIncome = () => {
  const [chgImg, setChgImg] = useState(false);
  useInterval(() => {
    setChgImg(!chgImg);
  }, 2000);

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
          <strong>수익률 인증</strong>
        </h2>
      </div>
      <div className={style.profitBox}>
        {chgImg ? (
          <img src="/static/images/profit2.jpeg" alt="" />
        ) : (
          <img src="/static/images/profit.jpeg" alt="" />
        )}
      </div>
    </div>
  );
};

export default ProfitIncome;
