import React from "react";
import style from "./FBanner.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormCheck } from "react-bootstrap";

const FBanner = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <img className={style.best} src="/static/images/best.png" />

        <div>
          <div>
            <div className={style.boxInput}>
              <Form.Group className="" controlId="formBasic">
                <Form.Control type="email" placeholder="이름" />
              </Form.Group>
              <div className={style.boxInput2}>
                <Form.Select
                  className="custom-select custom-select-lg ."
                  aria-label="Default select example"
                >
                  <option value="010">010</option>
                </Form.Select>
                <Form.Group className="" controlId="formBasic">
                  <Form.Control type="text" placeholder="0000" />
                </Form.Group>
                <Form.Group className="" controlId="formBasic">
                  <Form.Control type="text" placeholder="0000" />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className={style.chkLinear}>
            <input type="checkbox" disabled={false} checked={false} />
            <div className={style.chkTitle}>개인정보 수집 및 활용동의</div>
            <input type="checkbox" disabled={false} checked={false} />
            <div className={style.chkTitle}>마케팅수신동의(선택)</div>
          </div>
        </div>

        <div className={style.consulting}>
          <img src="https://keunson.kr/images/renew/form-btn.png" />
          {/* <button>상담하기</button> */}
        </div>
      </div>
    </div>
  );
};

export default FBanner;
