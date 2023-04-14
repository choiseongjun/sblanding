import React, { useEffect, useState } from "react";
import style from "./StockInfo.module.css";
import DateCp from "../common/DateCp";
import StockOne from "./StockOne";
import StockTwo from "./StockTwo";
import axios from "axios";

const StockInfo = () => {
  const [data1, setData1] = useState([]);
  const [boards, setBoards] = useState([]);
  const getStock = () => {
    axios
      .get("/v1/kops/stock/info")
      .then((res) => {
        setData1(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getBoard = () => {
    axios.get("/v1/board/3/latest").then((res) => {
      setBoards(res.data);
    });
  };
  useEffect(() => {
    getStock();
    getBoard();
  }, []);
  return (
    <div className={style.container}>
      {data1.length > 0 && <StockOne title="오늘의 테마종목" data1={data1} />}
      {data1.length > 0 && <StockTwo title="한줄평 후기" data1={boards} />}
      {/* <StockOne title="공모주 상장일정" /> */}
    </div>
  );
};

export default StockInfo;
