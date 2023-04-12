import React from "react";
import style from "./StockInfo.module.css";
import DateCp from "../common/DateCp";

const StockTwo = ({ title, data1 }: any) => {
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
                .filter((item: any) => item.gubun === "2")
                .map((item: any, idx: number) => (
                  <tr key={idx}>
                    <td>
                      <div className={style.tdBox}>
                        {/* {item.firstTxt.substr(0, 1)} */}

                        {item.firstTxt.substr(1, 99)}
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className={style.boxI}>
                          {item.secondTxt.substr(0, 1)}
                        </span>
                        <span style={{ paddingLeft: 20 }}>
                          {item.secondTxt.substr(1, 20)}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className={style.elipsis}>
                          {item.thirdTxt.split("\n")[1]}
                        </div>
                        <span>{item.thirdTxt.split("\n")[0]}</span>
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

export default StockTwo;
