import React, { useState } from "react";
import style from "./FBanner.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormCheck } from "react-bootstrap";
import TelegramApi from "node-telegram-api";
import axios from "axios";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    // right: "auto",
    // bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const FBanner = () => {
  axios.defaults.baseURL = "https://sbstock.co.kr";
  const [userName, setUserName] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


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
    const settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
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
            <div className={style.chkTitle}>
              (필수)개인정보 수집 및 활용동의
              </div>
                <a
                  href="javascript:void(0);"
                  onClick={() => setIsOpen2(true)}
                  // onclick="privacy_pop('show', '.pop-policy',2)"
                >
                  [보기]
                </a>
          
            <input
              type="checkbox"
              onChange={(e) => setCheck2(e.target.checked)}
              disabled={false}
              checked={check2}
            />
            
            <div className={style.chkTitle}>
              (필수)마케팅수신동의
              </div>
            <a
                  href="javascript:void(0);"
                  onClick={() => setIsOpen(true)}
                  // onclick="Popup1('show', '.popup',2)"
                >
                  [보기]
                </a>
          </div>
        </div>
      <div className="imgGrid"></div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <div>
          광고성 정보수신 동의 (1) 서비스 안내 및 이용권유 등 ① 제공받는 자 :
          SB글로벌 투자그룹 급등주 주식종목 ② 제공목적 : 서비스 안내 및 이용권유,
          사은·판촉행사 등의 마케팅 활동, 시장조사 및 상품·서비스 개발연구 등
          고객데이터 수집 및 관리 ③ 수집항목 : 이름, 휴대폰번호 ④ 수집 및
          이용기간 : 문의 종료일로 2년까지 회원님은 동의를 거부할 권리가 있으며
          동의 거부 시에도 서비스 이용에 제한이 없습니다. 다만 서비스 이용권유,
          판촉행사 등의 유익한 정보를 받으실 수 없습니다.
        </div>
        </Modal>
        <Modal
        isOpen={modalIsOpen2}
        onRequestClose={() => setIsOpen2(false)}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <div>
          개인정보 제3자 제공 동의 (1) 서비스 안내 및 이용권유 등 ① 제공받는 자
          : SB글로벌 투자그룹 급등주 주식종목 ② 제공목적 : 서비스 안내 및 이용권유,
          사은·판촉행사 등의 마케팅 활동, 시장조사 및 상품·서비스 개발연구 등
          고객데이터 수집 및 관리 ③ 수집항목 : 이름, 휴대폰번호 ④ 수집 및
          이용기간 : 문의 종료일로 2년까지 회원님은 동의를 거부할 권리가 있으며
          동의 거부 시에도 서비스 이용에 제한이 없습니다. 다만 서비스 이용권유,
          판촉행사 등의 유익한 정보를 받으실 수 없습니다.
        </div>
        </Modal>
      </div>
        <div onClick={() => sendApply()} className={style.consulting}>
          <img src= "/static/images/click.png" />
          {/* <button>상담하기</button> */}
        </div>
      
        <div onClick={() => sendKaKao()} className={style.consulting1}>
        <img src="/static/images/kakao.png" />
        </div>
      </div> 
  );
};

export default FBanner;
