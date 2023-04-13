import React, { useState, useEffect, useRef } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useRouter } from "next/router";
import style from "./boardDetail.module.css";
import QuillNoSSRWrapper from "@/components/common/QuillNoSSRWrapper";

const Index = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const quillInstance = useRef<any>(null);

  const { id } = router.query;

  const getDetail = () => {
    if (id) {
      axios.get(`/v1/board/detail/${Number(id)}`).then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
      });
    }
  };
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className={style.container}>
      <div style={{ width: "50%", marginTop: 50 }}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">제목</InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <QuillNoSSRWrapper
          forwardedRef={quillInstance}
          value={content}
          style={{ height: "500px" }}
          theme="snow"
          readOnly={true}
          placeholder="내용을 입력해주세요."
        />
      </div>
    </div>
  );
};

export default Index;
