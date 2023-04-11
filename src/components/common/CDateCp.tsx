import React from "react";

const CDateCp = ({ date }: any) => {
  return (
    <div
      style={{
        marginLeft: 20,
        marginRight: 10,
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
      {date}
    </div>
  );
};

export default CDateCp;
