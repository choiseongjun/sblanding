import React from "react";
import style from "./FBanner.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FBanner = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div>
          <div className={style.boxInput}>
            <Form.Group className="" controlId="formBasic">
              <Form.Control type="email" placeholder="이름" />
            </Form.Group>
            <div className={style.boxInput2}>
              <Form.Select
                className="custom-select custom-select-lg "
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
        <div className={style.consulting}>
          <img src="https://keunson.kr/images/renew/form-btn.png" />
          {/* <button>상담하기</button> */}
        </div>
      </div>
    </div>
  );
};

export default FBanner;
