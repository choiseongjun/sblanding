
import logo from "./logo.svg";
import "./Main2.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TelegramApi from "node-telegram-api";
import Modal from "react-modal";
import Progressbar from "./components/progressbar";
import Slider from "react-slick";
import { ColorRing } from "react-loader-spinner";



const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 999,
  },
};

function Main2() {
  const [users, setUsers] = useState([]);
  const [nickName, setNickName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(100);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getCustomer = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  };

  const submitEvent = (e) => {
    e.preventDefault();

    if (nickName == "") {
      return alert("이름을 입력해주세요.");
    }
    if (phoneNumber == "") {
      return alert("연락처를 입력해주세요.");
    }
    if (!check1) {
      return alert("개인정보취급방침동의보기를 체크해주세요.");
    }
    if (!check2) {
      return alert("마케팅수신동의보기를 체크해주세요.");
    }
    if (!check3) {
      return alert("광고성문자동의 체크해주세요.");
    }
    const TELEGRAM_TOKEN = "5483771483:AAHFxQtin81-Hcf-xNd_GdVoV_PAnkZq1k8";
    const TELEGRAM_CHAT_ID = -1001848471389;
    const telegramApi = new TelegramApi(TELEGRAM_TOKEN);

    telegramApi.sendMessage(
      TELEGRAM_CHAT_ID,
      nickName + "님이 신청했습니다" + "폰번호는 " + phoneNumber
    );
    alert("[SB글로벌] '정상접수' 되었습니다. 담당자 배정후 전화드리겠습니다. 감사합니다. ");
    // console.log("as");
    // var customer = {};
    // customer.nickName = nickName;
    // customer.phoneNumber = phoneNumber;

    // axios.post("http://localhost:3000/users", customer).then((res) => {
    //   alert("등록을 성공했습니다.");
    //   getCustomer();
    // });
  };

  useEffect(() => {
    getCustomer();
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div>
      <div className="nav">
        <div>SB그룹</div>
          <div>
            <a img
             style={{ width: 300, height: "auto" }}
              src={"/img/kakao.png"}
              href="#"
              onClick={() => {
                window.open("https://sbstock.kr/", "_blank");
              }}
            >
            </a>
          </div>
        </div>
      </div>
      <div className="box_container">
        <div className="box">
          <div className="subTitle">■제테크 핫이슈</div>
          <div className="inner">
            <div className="head">
              <h1 className="title">
                아직도 손실만 보고 계신가요?{" "}
                <p><span class="color1">" SB그룹 "</span> </p>
                <p>억대를 모을 수 있게 한 투자 노하우</p>
                어떤 노하우이길래? "
              </h1>
            </div>
          </div>
          <div className="writer">
            <div class="writer-info">
              기자 - 주진석ㅣ 조회수 : 1809 ㅣ 날짜 :{""}
              <span id="regdate">2023-04-27</span>
            </div>
          </div>

          <div className="content-wrap">
            <div className="content">
              <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/sbmain11.png"}
                  alt=""
                />
              </p>
              <p>
                <b>"가상화폐로 매월 1억씩 수익내고있어요"</b>
                <br />
                김진환 씨(50대) 인터뷰中
              </p>
              <p>
                <p>지난 15일 종합투자S 취재진들이 확인해본결과,</p>
                2022년 1월부터 2022년 12월까지 AI프로그램을 병행한 
                <p>SB그룹 만의 투자 전략을 통해 
                4월 , 9월을 제한 나머지 달은 모두 수익이였으며 4월,9월을 포함해 일평균으로 계산시 일 60.7% 수익률이 확인됐다.</p>
                <Slider {...settings}>
                {/* <div>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  </span>
                </div> */}
                <div>
                  {/* <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    <Progressbar value={progress} />
                  </span> */}
                </div>
                <div className="inputBoxs">
                  <h1>급등종목 30일 무료제공 프로모션</h1>
                  <h3>1억 만들기 프로젝트 무료체험 신청</h3>
                  <ul>
                    <li id="line01">
                      <img src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/loading.gif" />
                    </li>
                    <li id="line02">
                      개인정보는 암호화하여 안전하게 처리됩니다.
                    </li>
                    <li id="line03" cond="off">
                      <span>급등주를 30일동안 받아보세요.</span>
                    </li>
                    <br />
                    <li>
                      <input
                        type="text"
                        id="f1"
                        name="user_name"
                        required=""
                        placeholder="성함을 입력하세요"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        id="f1"
                        name="user_name"
                        required=""
                        placeholder="연락처를 입력하세요"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""));
                        }}
                      />
                    </li>
                    <br />
                    <li id="chkline">
                      <label>
                        <input
                          type="checkbox"
                          id="privacy"
                          name="agree1"
                          value="1"
                          checked={check1}
                          onChange={(e) => setCheck1(e.target.checked)}
                        />
                        개인정보취급방침동의
                      </label>
                      <span
                        onClick={openModal}
                        class="txtbtn"
                        data-id="fixedbox_1"
                      >
                        보기
                      </span>
                      <label>
                        <input
                          type="checkbox"
                          id="privacy"
                          name="agree2"
                          value="1"
                          checked={check2}
                          onChange={(e) => setCheck2(e.target.checked)}
                        />
                        마케팅수신동의
                      </label>
                      <span
                        onClick={openModal}
                        class="txtbtn"
                        data-id="fixedbox_1"
                      >
                        보기
                      </span>
                      <label>
                        <input
                          type="checkbox"
                          id="privacy"
                          name="agree3"
                          value="1"
                          checked={check3}
                          onChange={(e) => setCheck3(e.target.checked)}
                        />
                        광고성문자수신동의
                      </label>
                    </li>
                    <li id="smtbtn">
                      <input
                        id="btn"
                        type="submit"
                        value="급등종목 무료제공 이벤트 신청하기"
                        onClick={submitEvent}
                      />
                    </li>
                  </ul>
                </div>
              </Slider>
                <br />
                {/* 김진환 씨의 최근 수익인증 */}
              </p>
               <p class="mainhead">
                  <b>"SB그룹 실 고객들의 수익인증"</b>
                </p>
               <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/sbmain2.png"}
                  alt=""
                />
              </p>
              {/* <div class="imgdesc">[김진환씨의 최근 수익 인증]</div> */}
              <p>
               여기서 놀라운 사실은 2022년 6월에 무료로 시작한 손실복구 프로모션 복구율이 
               78.8% 이상 이였고
                <br />이로 인해 많은 문의가 왔었다고 한다
              </p>

              <p>
                4차산업혁명에
                {"\t"}
                <b>좋은 예 라 보이며 기존 개인투자자들이 일일히 확인해야되는것과 달리 AI프로그램이 실시간으로 변동하는 
                모든 차트흐름과 시장흐름을 분석하여 높은 수익률로 보이는 추세이다.</b>
                
              </p>
              <p>
                SB그룹 대표이사는
                {"\t"}
                <b>"인공지능 (퀀트박스) AI인공지능
                프로그램의 결과값과 전문 트레이더들이 한번 더 대조 하고 맞춤 교육도 진행하다 보니 더욱 높은 수익률을 보장한다" </b>
                추가적으로 연령,성별,나이 구분없이 1:1 눈높이 맞춤 트레이닝으로 보다 이해하기 쉽게 케어 하고있다고 덧붙혔습니다.
              </p>
              <p>
               더욱 더 
                {"\t"}
                <b>놀라운 사실은 2023년 1월에 무료로 시작한 손실복구 프로모션 복구율이 78.8% 이상 이였고 이로 인해 많은 문의가 왔었다고 한다.  </b>
                
              </p>
              <p>
                얼마 안남은 2분기에도 프로모션을 진행한다고 하니 많은 문의가 몰릴 것으로 예상된다.
                <br />
                <p class="mainhead2">
                <b>"아무것도 바꾸지 않으면 아무것도 변하지 않는다"</b>
                <br />
              </p>
              <p class="mainhead2">
                <b>"안전하고 영리한 투자노하우! 정확한 가치투자에 의해 당신의 꿈을 실현합니다"</b>
                <br />
              </p>
              </p>
               <p class="mainhead">
                  <b> ►SB그룹 실제 AI 퀀트박스 이용사진◀︎</b>
                </p>
               <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/quantbee.png"}
                  alt=""
                />
              </p>
              
              <p class="mainhead">
                  <b> ►SB그룹 실고객님들의 후기◀︎</b>
                </p>
                <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/review1.png"}
                  alt=""
                />
                </p>
          
              {/* <p class="imgbox banner">
                <a
                  href="http://coinstock7.co.kr/image/?adcode=testbg"
                  target="_blank"
                >
                  <img
                    src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/co3.jpeg"
                    alt=""
                  />
                </a>
              </p> */}
            
              
         <div className="footerInfo1">
          <div>상호명:(주)SB 글로벌 투자그룹 </div>
          <div>대표자:엄원택 </div>

          <div>사업자등록번호: 178-88-01858 </div>
          <div>
            소재지: 고양시 대자동 업종:증권정보교육 프로그램개발 및 판매
          </div>
        </div>
      </div>
      <h3
        style={{
          fontSize: 9,
          display: "flex",
          justifyContent: "center",
          color: "#fff",
        }}
      >
      </h3>
      
      <h4
        style={{
          fontSize: 4,
          display: "flex",
          justifyContent: "center",
          color: "#fff",
        }}
      >
       <div className="footerInfo1"> AD - 해당 정보는 참고용이며 투자에 대한 절대적인 지표가 될 수 없습니다.</div>
      </h4>
      <div>
              </div>
              {/* <div className="inputBoxs">
                <h1>급등종목 무료제공 오픈 프로모션</h1>
                <h3>당장 급등할 종목 받기</h3>
                <ul>
                  <li id="line01">
                    <img src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/loading.gif" />
                  </li>
                  <li id="line02">
                    개인정보는 암호화하여 안전하게 처리됩니다.
                  </li>
                  <li id="line03" cond="off">
                    <span>급등주를 7일동안 받아보세요.</span>
                  </li>
                  <br />
                  <li>
                    <input
                      type="text"
                      id="f1"
                      name="user_name"
                      required=""
                      placeholder="성함을 입력하세요"
                      value={nickName}
                      onChange={(e) => setNickName(e.target.value)}
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      id="f1"
                      name="user_name"
                      required=""
                      placeholder="연락처를 입력하세요"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""));
                      }}
                    />
                  </li>
                  <br />
                  <li id="chkline">
                    <label>
                      <input
                        type="checkbox"
                        id="privacy"
                        name="agree1"
                        value="1"
                        checked={check1}
                        onChange={(e) => setCheck1(e.target.checked)}
                      />
                      개인정보취급방침동의
                    </label>
                    <span
                      onClick={openModal}
                      class="txtbtn"
                      data-id="fixedbox_1"
                    >
                      보기
                    </span>
                    <label>
                      <input
                        type="checkbox"
                        id="privacy"
                        name="agree2"
                        value="1"
                        checked={check2}
                        onChange={(e) => setCheck2(e.target.checked)}
                      />
                      마케팅수신동의
                    </label>
                    <span
                      onClick={openModal}
                      class="txtbtn"
                      data-id="fixedbox_1"
                    >
                      보기
                    </span>
                    <label>
                      <input
                        type="checkbox"
                        id="privacy"
                        name="agree3"
                        value="1"
                        checked={check3}
                        onChange={(e) => setCheck3(e.target.checked)}
                      />
                      광고성문자수신동의
                    </label>
                  </li>
                  <li id="smtbtn">
                    <input
                      id="btn"
                      type="submit"
                      value="급등종목 무료제공 이벤트 신청하기"
                      onClick={submitEvent}
                    />
                  </li>
                </ul>
              </div> */}
              <div>
                {users.map((user, idx) => (
                  <div key={idx} style={{ display: "flex" }}>
                    <div>{user.nickName}</div>
                    <div>{user.phoneNumber}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Main2;

