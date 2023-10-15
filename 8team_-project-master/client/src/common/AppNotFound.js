import React from "react";
import { useNavigate } from "react-router-dom";

const _style = {
  width: "100px",
  height: "30px",
  backgroundColor: "rgb(255, 227, 148)",
  fontWeight: "bold",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px silver",
  cursor: "pointer",
  border: "1px solid #eeeeee",
};

const AppNotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%", textAlign: "center", paddingTop: "20px" }}>
      <h1>
        NotFound 404
        <br />
        <br /> 죄송합니다, <br />
        현재 요청하신 페이지는 없는 페이지입니다.
      </h1>
      <br />
      <button style={_style} onClick={() => navigate("/")}>
        홈으로 가기
      </button>
    </div>
  );
};
export default AppNotFound;
