import React from "react";
import style from "./intro.module.css";

const Intro = () => {
  return (
    <div
      style={{ marginTop: 25 }}
      id={"companyIntro"}
      className={style.imgCenter}
    >
      <img src="/static/images/intro.jpeg" />
    </div>
  );
};

export default Intro;
