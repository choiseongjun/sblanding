import React, { useEffect, useState } from "react";
import styles from "./SecondInfo.module.css";
import DateCp from "../common/DateCp";
import axios from "axios";

const SecondInfo = () => {
  const [upStock, setUpStock] = useState([]);
  const [majorInfo, setMajorInfo] = useState([]);

  const getIncreaseStock = () => {
    axios.get("/v1/kops/increase/stock").then((res) => {
      setUpStock(res.data[0]);
      setMajorInfo(res.data[1]);
    });
  };
  useEffect(() => {
    // getIncreaseStock();
  }, []);
  return (
    <div
      style={{
        // backgroundColor: "#333",
        background:
          "rgba(0,0,0,.9) url(https://www.kokstock.com/images/renewal/main/ytb_bg_1.png) repeat-x center/cover",
        height: 476,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 70,
          gap: 30,
        }}
      >
        <div style={{ width: 588, height: 276 }}>
          <div
            style={{
              height: 52.52,
              backgroundColor: "#333",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Noto Sans KR",
                fontSize: 24,
                color: "#fff",
                paddingLeft: 20,
              }}
            >
              상승종목
            </div>
            <DateCp />
          </div>
          <div style={{ height: "100%", backgroundColor: "#fff" }}>
            {upStock.length > 0 &&
              upStock.map((item: any) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 25,
                  }}
                >
                  <div
                    style={{
                      color: "#013472",
                      fontWeight: 400,
                      paddingLeft: 20,
                    }}
                  >
                    {item.name}
                  </div>
                  <span style={{ color: "red", paddingRight: 20 }}>
                    <i className="fa fa-long-arrow-up"></i>
                    {item.name2}
                  </span>
                </div>
              ))}
          </div>
        </div>
        <div style={{ width: 588, height: 276 }}>
          <div
            style={{
              height: 52.52,
              backgroundColor: "#333",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Noto Sans KR",
                fontSize: 24,
                color: "#fff",
                paddingLeft: 20,
              }}
            >
              주요공시
            </div>
          </div>
          <div style={{ height: "100%", backgroundColor: "#fff" }}>
            {majorInfo.length > 0 &&
              majorInfo.map((item: any) => (
                <div className={styles.majorBox}>
                  <div className={styles.major}>
                    <div>{item.name.substr(0, 5)}</div>
                    <div>{item.name.substr(5, 99)}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondInfo;
