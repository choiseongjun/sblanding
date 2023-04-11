import React from "react";
import DateCp from "../common/DateCp";
import CDateCp from "../common/CDateCp";
import style from "./Board.module.css";

const BoardList = ({ title }: any) => {
  return (
    <div>
      <h3>{title}</h3>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td className={style.listCenter}>
              <CDateCp date="2023-04-06" />
              [필독] 콕스톡TV, 콕스톡 카카오톡 사칭 주의 !!
            </td>
          </tr>
          <tr>
            <td className={style.listCenter}>
              {" "}
              <CDateCp date="2023-01-10" />♣ 콕스톡 새해맞이 1월이벤트 ♣
              조건검색식2종 무료혜택!!
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
