import React from "react";
import style from "./StockInfo.module.css";
import DateCp from "../common/DateCp";

const StockTwo = ({ title }: any) => {
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
            <tr>
              <td>
                <div className={style.tdBox}>
                  <span className="badge badge-success">1</span>
                  스마트폰
                </div>
              </td>
              <td>
                <div className={style.tdSecond}>
                  <div className={style.elipsis}>알에프세미</div>
                  <span style={{ color: "red", paddingRight: 20 }}>
                    <i className="fa fa-long-arrow-up"></i>
                    30.00%
                  </span>
                </div>
              </td>
              <td>
                <div className={style.tdSecond}>
                  <div className={style.elipsis}>노바텍</div>
                  <span style={{ color: "red", paddingRight: 20 }}>
                    <i className="fa fa-long-arrow-up"></i>
                    29.91%
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={style.tdBox}>
                  <span className="badge badge-success">2</span>
                  화장품
                </div>
              </td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTwo;
