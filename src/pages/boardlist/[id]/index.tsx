import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import style from "./BoardList.module.css";

import axios from "axios";
import Link from "next/link";
const BoardList = () => {
  const router = useRouter();
  const { id } = router.query;
  const [boards, setBoards] = useState([]);

  console.log("rou", router.query);
  const getBoardList = () => {
    const gubun = id ? id : "1";
    axios.get(`/v1/board/${gubun}`).then((res) => {
      setBoards(res.data);
    });
  };
  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.box}>
        <Card.Body className="table-full-width table-responsive px-0">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="border-0">ID</th>
                <th className="border-0">유형</th>
                <th className="border-0">제목</th>
                <th className="border-0">글작성날짜</th>
              </tr>
            </thead>
            <tbody>
              {boards.length > 0 &&
                boards.map((board: any, idx: number) => (
                  <tr key={idx}>
                    <td>{board.id}</td>
                    <td>{board.gubun == "1" ? "공지사항" : "질문과 답변"}</td>
                    <td>
                      <Link href={`/boardDetail/${board.id}`}>
                        {board.title}
                      </Link>
                    </td>
                    <td>{board.createdDate}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card.Body>
      </div>
    </div>
  );
};

export default BoardList;
