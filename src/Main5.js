import logo from "./logo.svg";
import "./App4.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TelegramApi from "node-telegram-api";
import Modal from "react-modal";
import Progressbar from "./components/progressbar";
import Slider from "react-slick";
import { ColorRing } from "react-loader-spinner";


const Main5 = () => {
    return <div>Main5</div>
  }

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

function App4() {
  function getCurrentDate() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var day = String(currentDate.getDate()).padStart(2, '0');
    var formattedDate = year + '-' + month + '-' + day;
    return formattedDate;
  }

  function updateTableDate() {
    var dateCell1 = document.getElementById('date-cell-1');
    var dateCell2 = document.getElementById('date-cell-2');
    var dateCell3 = document.getElementById('date-cell-3');
    var dateCell4 = document.getElementById('date-cell-4');
    var dateCell5 = document.getElementById('date-cell-5');
    var dateCell6 = document.getElementById('date-cell-6');
    var dateCell7 = document.getElementById('date-cell-7');
    // 필요한 만큼의 dateCell 변수를 추가로 선언하여 날짜 업데이트

    dateCell1.textContent = getCurrentDate();
    dateCell2.textContent = getCurrentDate();
    dateCell3.textContent = getCurrentDate();
    dateCell4.textContent = getCurrentDate();
    dateCell5.textContent = getCurrentDate();
    dateCell6.textContent = getCurrentDate();
    dateCell7.textContent = getCurrentDate();
    // dateCell 변수에 따라 업데이트

  }

  updateTableDate();


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
    const TELEGRAM_TOKEN = "6005561467:AAEza5i8zIr7i0IqBVuaFhTl47I7ZK65AfU";
    const TELEGRAM_CHAT_ID = -1001932031818;
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
        <div>주식투자갤러리</div>
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
          <div className="subTitle">■ 떠오르는 이슈</div>
          <div className="inner">
            <div className="head">
              <h1 className="title">
                하루에 3분투자로 {" "}
                <p><span class="color1">" 억대 만들기 노하우는 ?"</span> </p>
                {/* <p>억대를 모을 수 있게 한 투자 노하우</p>
                어떤 노하우이길래? " */}
              </h1>
            </div>
          </div>
          <div className="writer">
            <div class="writer-info">
              기자 - 김진우ㅣ 조회수 : 1202 ㅣ 날짜 :{""}
              <span id="regdate">2023-05-27</span>
            </div>
          </div>

          <div className="content-wrap">
            <div className="content">
              {/* <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/sbmain41.png"}
                  alt=""
                />
              </p> */}
              <p>
                <b>"가상화폐 3분투자로 1억씩 수익내고있어요"</b>
                <br />
                김진환 씨(50대) 인터뷰中
              </p>
              <p>
                <p>최근 부동산, 주식, 가상화폐 모두 하락장이라 손실보고 있는 분들이 많을텐데요
                    이런 하락장에서도 손실없이 큰돈 벌 수 있는 재테크 '노하우' 알려드리겠습니다. </p>

                    <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/sbmain41.png"}
                  alt=""
                />
              </p>

                제가 했던 재테크는 "가상화폐 재테크"인데요
                <p>저도 아는 지인통해 알게되었는데요 'SB그룹' 이라는 기업에서 출시한 상품이었어요!
                    방법은 아주 간단하답니다</p>
                <p><span class="color1">
                  <div>첫째. A.I 분석 프로그램으로 추천해준 코인 매수</div>
                  <div>둘째. 정해준 목표가 도달시 매도</div>
                  <div>셋째. 목표가 도달하지 않고 하락시 정해준 손절가에 손절</div></span></p>
                  <p></p>
                <p>이 3가지만 똑같이 따라하니 꾸준히 수익이 났어요</p>
                <p>가끔 하락할때가 있는데 '손절가'에 손절하면 손실이 크지 않고, 
                상승하는 경우가 더 많으니 결국 손실없이 수익을 낼 수 있었어요</p>
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
                {/* <div> */}
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
                {/* </div> */}
                
              </Slider>
                {/* 김진환 씨의 최근 수익인증 */}
              </p>
               <p class="mainhead">
                  <b>"하루 3분 투자로 3개월 수익1억 가능한 가상화폐는? "</b>
                </p>
               <p class="imgbox banner">
                <img
                  style={{ width: 620, height: "auto" }}
                  src={"/img/stock.png"}
                  alt=""
                />
              </p>
              {/* <div class="imgdesc">[김진환씨의 최근 수익 인증]</div> */}
              <p>
               여기서 놀라지 마세요 누구나 하실수있는 간단한 투자! </p>
               <p> "3분 재테크"의 가장 큰 장점은 시간도 시간이지만
                하락장에서도 돈을 벌 수 있다는것입니다.
                대부분의 사람들이 감으로 투자하는 경우가 많은데
                 A.I 분석프로그램으로 코인을 분석 및 추천을 해주어 정확도가 매우 높은 편입니다.
                <br />이로 인해 문의가 폭주하고 있습니다.
              </p>

              <p>
                최근에 바쁜 사회속 빠르게 그렇지만 확실한 수익을 나고 싶은 고객들을 위해
                <span class="color1">"3분 투자로 1억만들기 이벤트" </span>를 진행하고 있으니 아래 링크 확인부탁드립니다. 
                {/* {"\t"}
                <b>좋은 예 라 보이며 기존 개인투자자들이 일일히 확인해야되는것과 달리 AI프로그램이 실시간으로 변동하는 
                모든 차트흐름과 시장흐름을 분석하여 높은 수익률로 보이는 추세이다.</b> */}
                
              </p>
              <div className="inputBoxs">
                  <h1>급등종목 30일 무료제공 프로모션</h1>
                  <h3>하루 3분 투자로 1억만들기</h3>
                  <ul>
                    <li id="line01">
                      <img src="https://codedeploylightsail-matchingapp-bn.s3.ap-northeast-2.amazonaws.com/loading.gif" />
                    </li>
                    <li id="line02">
                      개인정보는 암호화하여 안전하게 처리됩니다.
                    </li>
                    <li id="line03" cond="off">
                      <span> 30일 급등주 신청하기.</span>
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
                <br />
                <div className="latest">
                  <div className="latimgbox" id="latest_list">
                    <img
                    style={{ width: 660, height: "auto" }}
                    src={"/img/member.png"}
                    alt=""
                    />
                  </div>
                  <table className="tablelive" >
                   <thead>
                    <tr>
                    <th>Date</th>
                    <th>Username</th>
                    <th>Telephone</th>
                    </tr>
                    </thead>
                  <tbody>
                    <tr>
                    <td id="date-cell-1">2023-05-26</td>
                    <td>김*영</td>
                    <td>010-****-8245</td>
                    </tr>
                    <tr>
                    <td id="date-cell-2">2023-05-26</td>
                    <td>최*필</td>
                    <td>010-****-8108</td>
                    </tr>
                    <tr>
                    <td id="date-cell-3">2023-05-26</td>
                    <td>김*우</td>
                    <td>010-****-3040</td>
                    </tr>
                    <tr>
                    <td id="date-cell-4">2023-05-26</td>
                    <td>이*영</td>
                    <td>010-****-5504</td>
                  </tr>
    <tr>
      <td id="date-cell-5">2023-05-26</td>
      <td>지*우</td>
      <td>010-****-9913</td>
    </tr>
    <tr>
      <td id="date-cell-5">2023-05-26</td>
      <td>이*현</td>
      <td>010-****-3342</td>
    </tr>
    <tr>
      <td id="date-cell-6">2023-05-26</td>
      <td>구*현</td>
      <td>010-****-7050</td>
    </tr>
    <tr>
      <td id="date-cell-6">2023-05-26</td>
      <td>이*수</td>
      <td>010-****-6703</td>
    </tr>
    <tr>
      <td id="date-cell-7">2023-05-26</td>
      <td>심*우</td>
      <td>010-****-4022</td>
    </tr>
  </tbody>
</table>
 </div>
 
 

                <div className="news">
                  <strong class="title">오늘의 주요 기사</strong> 
                  <div className="news11" style={{ display: "flex" }}>
                    <div className="news1">
                    <img
                    style={{ width: 220, height: "auto" }}
                    src={"/img/sbnews1.png"}
                    alt=""
                    />
                    <span
                    style={{
                      display: "block",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 220
                    }}
                  >가상화폐 투자, '이것'하나만 매수하면 1년뒤 부자될수있다</span>
                    </div>
                    <div className="news2">
                    <img
                    style={{ width: 220, height: "auto" }}
                    src={"/img/sbnews1.png"}
                    alt=""
                    />
                    <span
                    style={{
                      display: "block",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 220
                    }}>이번주 안으로 300% 급등할 종목 찾았다! 바로 풀매수 가자! </span>
                    </div>
                  </div>
                  <div className="news22" style={{ display: "flex" }}>
                    <div className="news3">
                    <img
                    style={{ width: 220, height: "auto" }}
                    src={"/img/sbnews1.png"}
                    alt=""
                    />
                    <span
                    style={{
                      display: "block",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 220
                    }}>ㅇㄹㅇㄹ</span>
                    </div>
                      <div className="news4">
                      <img
                    style={{ width: 220, height: "auto" }}
                    src={"/img/sbnews1.png"}
                    alt=""
                    />
                    <span
                    style={{
                      display: "block",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 220
                    }}>가상화폐 투자, '이것'하나만 매수하면 1년뒤 부자될수있다</span>
                    </div>
                    </div>
                </div>
                <div className="talk"> 
                    <img
                    style={{ width: 512, height: "auto" }}
                    src={"/img/talk.png"}
                    alt=""
                    />
                    <img
                    style={{ width: 600, height: "auto" }}
                    src={"/img/review2.png"}
                    alt=""
                    />
                    </div>
              {/* <p>
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
                얼마 안남은 2분기에도 프로모션을 진행한다고 하니 많은 문의가 몰릴 것으로 예상된다. */}
                {/* <br />
                <p class="mainhead2">
                <b>"아무것도 바꾸지 않으면 아무것도 변하지 않는다"</b>
                <br />
              </p>
              <p class="mainhead2">
                <b>"안전하고 영리한 투자노하우! 정확한 가치투자에 의해 당신의 꿈을 실현합니다"</b>
                {/* <br />
              </p> */} 
              {/* </p>
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
                </p> */}
          
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

export default App4;

