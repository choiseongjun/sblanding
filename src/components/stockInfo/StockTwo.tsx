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
                제목
              </th>
              <th className={style.thCenter} scope="col">
                작성자
              </th>
              <th className={style.thCenter} scope="col">
                작성일자
              </th>
            </tr>
          </thead>
          <tbody className="thead-light">
            <tr>
              <td>
                <div className={style.tdBox}>
                  {/* {item.firstTxt.substr(0, 1)} */}
                  고객후기123123123123123
                </div>
              </td>
              <td>
                <div>작성자1123</div>
              </td>
              <td>
                <div>2023-04-14</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTwo;
