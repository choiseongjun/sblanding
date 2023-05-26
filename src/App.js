import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Main5 from "./Main5";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/news" element={<Main2 />}></Route>
          <Route path="/test" element={<Main3 />}></Route>
          <Route path="/notice" element={<Main4 />}></Route>
          <Route path="/gallery" element={<Main5 />}></Route>


          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
