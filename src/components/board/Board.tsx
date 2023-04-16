import React, { useEffect, useState } from "react";
import style from "./Board.module.css";
import BoardList from "./BoardList";
import axios from "axios";

const Board = () => {
  const [notice, setNotice] = useState([]);
  const [qna, setQna] = useState([]);
  const getNotice = () => {
    axios.get("/v1/board/1/latest").then((res) => {
      setNotice(res.data);
    });
  };
  const getQnA = () => {
    axios.get("/v1/board/2/latest").then((res) => {
      setQna(res.data);
    });
  };
  useEffect(() => {
    getNotice();
    getQnA();
  }, []);
  return (
    <div id="qna" className={style.container}>
      <div className={style.board}>
        <BoardList title={"공지사항"} data={notice} />
        <BoardList title={"자주묻는질문"} data={qna} />
      </div>
    </div>
  );
};

export default Board;
