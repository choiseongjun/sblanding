import React, { useState } from "react";
import style from "./FBanner.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormCheck } from "react-bootstrap";
import TelegramApi from "node-telegram-api";
import axios from "axios";

const FBanner = () => {
  const [userName, setUserName] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const sendApply = () => {
    if (!check1) {
      return alert("동의를 눌러주세요");
    }
    const phoneNumber = `010-${phoneNumber1}-${phoneNumber2}`;
    const name = userName;
    const param = {
      phoneNumber: phoneNumber,
      name: name,
    };
    axios.post("/client", param).then((res) => {
      console.log("res=", res);
    });
    const TELEGRAM_TOKEN = "5483771483:AAHFxQtin81-Hcf-xNd_GdVoV_PAnkZq1k8";
    const TELEGRAM_CHAT_ID = -1001848471389;
    const telegramApi = new TelegramApi(TELEGRAM_TOKEN);
    telegramApi.sendMessage(
      TELEGRAM_CHAT_ID,
      `휴대폰 번호 010-${phoneNumber1}-${phoneNumber2} ${userName}님이 신청하였습니다. `
    );
    alert("신청되었습니다.");
    window.open("https://open.kakao.com/me/shon04Se", "_blank");
  };
  const sendApply1 = () => {
    window.open("https://open.kakao.com/me/shon04Se", "_blank")
    };
  return (
    <div className={style.container}>
      <div className={style.box}>
        <img className={style.best} src="/static/images/best.png" />

        <div>
          <div>
            <div className={style.boxInput}>
              <Form.Group className="" controlId="formBasic">
                <Form.Control
                  type="email"
                  placeholder="이름"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              <div className={style.boxInputContainer}>
                <div className={style.boxInput2}>
                  <Form.Select
                    className="custom-select custom-select-lg ."
                    aria-label="Default select example"
                  >
                    <option value="010">010</option>
                  </Form.Select>
                  <Form.Group className="" controlId="formBasic">
                    <Form.Control
                      onChange={(e) => setPhoneNumber1(e.target.value)}
                      type="text"
                      placeholder="0000"
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasic">
                    <Form.Control
                      onChange={(e) => setPhoneNumber2(e.target.value)}
                      type="text"
                      placeholder="0000"
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
          <div className={style.chkLinear}>
            <input
              type="checkbox"
              onChange={(e) => setCheck1(e.target.checked)}
              disabled={false}
              checked={check1}
            />
            <div className={style.chkTitle}>(필수)개인정보 수집 및 활용동의</div>
            <input
              type="checkbox"
              onChange={(e) => setCheck2(e.target.checked)}
              disabled={false}
              checked={check2}
            />
            <div className={style.chkTitle}>(필수)마케팅수신동의</div>
          </div>
        </div>

        <div onClick={() => sendApply()} className={style.consulting}>
          <img src= "/static/images/click.png" />
          {/* <button>상담하기</button> */}
        </div>
        
        <img src="/static/images/kakao.png" />
        
      </div>
    </div>
  );
};

export default FBanner;
