import React from "react";
import style from "./Board.module.css";
import BoardList from "./BoardList";
const Board = () => {
  return (
    <div className={style.container}>
      <div className={style.board}>
        <BoardList title={"공지사항"} />
        <BoardList title={"자주묻는질문"} />
      </div>
    </div>
  );
};

export default Board;
