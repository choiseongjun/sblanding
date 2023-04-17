import React from "react";

const CDateCp = ({ date }: any) => {
  return (
    <div
      style={{
        marginLeft: 20,
        marginRight: 10,
        height: "auto",
        width: "auto",
        backgroundColor: "#6c757d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        color: "#fff",
        fontSize: 12,
        fontWeight: "400",
        padding: "5px 10px",
      }}
    >
      {date}
    </div>
  );
};

export default CDateCp;
