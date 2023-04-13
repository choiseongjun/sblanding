import React, { useEffect, useState } from "react";
import styles from "./SecondInfo.module.css";
import DateCp from "../common/DateCp";
import axios from "axios";

const SecondInfo = () => {
  const [upStock, setUpStock] = useState([]);
  const [majorInfo, setMajorInfo] = useState([]);

  const getIncreaseStock = () => {
    axios.get("/v1/kops/increase/stock").then((res) => {
      console.log(res.data);
      setUpStock(res.data);
      // setMajorInfo(res.data[1]);
    });
  };
  useEffect(() => {
    getIncreaseStock();
  }, []);
  return (
    <div
      className={styles.container}
      // style={{
      //   // backgroundColor: "#333",
      //   background:
      //     "rgba(0,0,0,.9) url(https://www.kokstock.com/images/renewal/main/ytb_bg_1.png) repeat-x center/cover",
      //   height: 476,
      // }}
    >
      <div
        className={styles.box}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   paddingTop: 70,
        //   gap: 30,
        // }}
      >
        <div className={styles.boxWrapper}>
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
          <div
            style={{
              height: "100%",

              backgroundColor: "#fff",
            }}
          >
            {upStock.length > 0 &&
              upStock
                .filter((item: any) => item.gubun == "1")
                .map((item: any, idx: number) => (
                  <div key={idx} className={styles.content}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "80%",
                        borderBottom: "1px dotted #ccc",
                        paddingBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          color: "#013472",
                          fontWeight: 400,
                        }}
                      >
                        {item.name}
                      </div>
                      <span style={{ color: "red" }}>
                        <i className="fa fa-long-arrow-up"></i>
                        {item.name2}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className={styles.boxWrapper1}>
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
            {upStock.length > 0 &&
              upStock
                .filter((item: any) => item.gubun === "2")
                .map((item: any, idx: number) => (
                  <div key={idx} className={styles.majorBox}>
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
