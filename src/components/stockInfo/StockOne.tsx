import React from "react";
import style from "./StockInfo.module.css";
import DateCp from "../common/DateCp";

const StockOne = ({ title, data1 }: any) => {
  return (
    <div className={style.tab1}>
      <div className={style.box}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 className={style.Title}>
            {/* 오늘의 <strong>테마</strong>종목 */}
            {title.substr(0, 4)}
            <strong>{title.substr(4, 2)}</strong>
            {title.substr(6, 3)}
          </h2>
          <DateCp />
        </div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th className={style.thCenter} scope="col">
                테마
              </th>
              <th className={style.thCenter} scope="col">
                주도주1위
              </th>
              <th className={style.thCenter} scope="col">
                주도주2위
              </th>
            </tr>
          </thead>
          <tbody className="thead-light">
            {data1.length > 0 &&
              data1
                .filter((item: any) => item.gubun === "1")
                .map((item: any, idx: number) => (
                  <tr key={idx}>
                    <td>
                      <div className={style.tdBox}>
                        <span className="badge badge-success">
                          {item.firstTxt.substr(0, 1)}
                        </span>
                        {item.firstTxt.substr(1, 99)}
                      </div>
                    </td>
                    <td>
                      <div className={style.tdSecond}>
                        <div className={style.elipsis}>
                          {item.secondTxt.split("\n")[1]}
                        </div>
                        <span style={{ color: "red", paddingRight: 20 }}>
                          <i
                            style={{ paddingRight: 10 }}
                            className="fa fa-long-arrow-up"
                          ></i>
                          {item.secondTxt.split("\n")[0]}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className={style.tdSecond}>
                        <div className={style.elipsis}>
                          {item.thirdTxt.split("\n")[1]}
                        </div>
                        <span style={{ color: "red", paddingRight: 20 }}>
                          <i
                            style={{ paddingRight: 10 }}
                            className="fa fa-long-arrow-up"
                          ></i>
                          {item.thirdTxt.split("\n")[0]}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockOne;
