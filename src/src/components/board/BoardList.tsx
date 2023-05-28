import React, { useEffect, useState } from "react";
import DateCp from "../common/DateCp";
import CDateCp from "../common/CDateCp";
import style from "./Board.module.css";
import axios from "axios";
import Link from "next/link";

const BoardList = ({ title, data }: any) => {
  return (
    <div className={style.topContainer}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{title}</h3>

        <h5 style={{ color: "gray", display: "flex", alignItems: "flex-end" }}>
          {title === "공지사항" ? (
            <Link href={"/boardlist/1"}>more</Link>
          ) : (
            <Link href={"/boardlist/2"}>more</Link>
          )}
        </h5>
      </div>
      <table className="table table-striped">
        <tbody>
          {data.map((item: any, idx: number) => (
            <>
              <tr key={idx}>
                <Link href={`/boardDetail/${item.id}`}>
                  <td className={style.listCenter}>
                    <CDateCp date="2023-04-06" />
                    {item.title}
                  </td>
                </Link>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
