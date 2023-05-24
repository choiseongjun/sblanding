import React, { useState } from "react";
import style from "./FBanner.module.css";
import Form from "react-bootstrap/Form";
import { FormCheck } from "react-bootstrap";
import TelegramApi from "node-telegram-api";

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
    const TELEGRAM_TOKEN = "5988764865:AAGaSTlBoLJWfqktKxEZZL9WD5tcXvNfTsw";
    const TELEGRAM_CHAT_ID = -1001901725222;
    const telegramApi = new TelegramApi(TELEGRAM_TOKEN);
    telegramApi.sendMessage(
      TELEGRAM_CHAT_ID,
      `sb글로벌 010-${phoneNumber1}-${phoneNumber2} ${userName}님이 신청하였습니다. `
    );
    alert("[SB글로벌] '정상접수' 되었습니다. 담당자 배정후 전화드리겠습니다. 감사합니다.");
    window.open("https://open.kakao.com/me/shon04Se", "_blank");
    
  };
  const sendKaKao = () => {
    window.open("https://open.kakao.com/me/shon04Se", "_blank")
    };
  return (
    <div className={style.containerM}>
      <div className={style.box}>
        <img className={style.best} src="/static/images/best.png" />

        <div>
          <div>
            <div className={style.boxInput}>
              <Form.Group className={style.emailBox} controlId="formBasic">
                <Form.Control
                  className={style.email}
                  type="email"
                  placeholder="이름"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              <div className={style.boxInput2}>
                <Form.Select
                  className="custom-select custom-select-lg ."
                  aria-label="Default select example"
                >
                  <option value="010">010</option>
                </Form.Select>
                <div className={style.formInput}>
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
            <div className={style.chkTitle}>개인정보 수집 및 활용동의</div>
            <input
              type="checkbox"
              onChange={(e) => setCheck2(e.target.checked)}
              disabled={false}
              checked={check2}
            />
            <div className={style.chkTitle}>마케팅수신동의(선택)</div>
          </div>
        </div>

        <div onClick={() => sendApply()} className={style.consulting}>
          <img src="/static/images/click.png" />
          {/* <button>상담하기</button> */}
        </div>
        <div className={style.right1}>
        <img src="/static/images/kakao.png" />
        </div>
        <div onClick={() => sendKaKao()} className={style.consulting2}>
        <img src="/static/images/kakaom.png" />
        </div>
      </div>
        
    </div>
  );
};

export default FBanner;
