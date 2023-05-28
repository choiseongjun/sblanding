import React from "react";

const DateCp = () => {
  const getToday = () => {
    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일

    return year + "-" + month + "-" + date;
  };
  return (
    <div
      style={{
        marginLeft: 20,
        marginTop: 10,
        height: 18,
        width: 80,
        backgroundColor: "#6c757d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        color: "#fff",
        fontSize: 12,
        fontWeight: "400",
      }}
    >
      {getToday()}
    </div>
  );
};

export default DateCp;
